const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid');
const check = require('./../library/checkLib');
const logger = require('./../library/loggerLib')
const response = require('./../library/responseLib');
const time = require('./../library/timeLib')

const cartModel = mongoose.model('cartModel')

let viewCart = (req, res) => {
    cartModel.find({ 'userId': req.params.userId })
        .select()
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Cart Controller: viewCart', 10)
                let apiResponse = response.generate(true, 'Failed To Display Cart', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('Cart is empty ', 'Cart Controller: viewCart')
                let apiResponse = response.generate(true, 'Cart is empty', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Displaying Cart items', 200, result)
                res.send(apiResponse)
            }
        })
}// end viewCart


let editProductOfCart = (req, res) => {

    if (check.isEmpty(req.params.userId) || check.isEmpty(req.params.productId)) {
        console.log('userId or productId should be passed')
        let apiResponse = response.generate(true, 'userId or productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let lastModified = time.getLocalTime()


        let options = {
            quantity: req.body.quantity,
            lastModified: lastModified
        }

        console.log(options);
        cartModel.update({ 'userId': req.params.userId, 'productId': req.params.productId } , options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Edited Successfully')
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end editCart

let removeProductFromCart = (req, res) => {

    if (check.isEmpty(req.params.userId) || check.isEmpty(req.params.productId)) {

        console.log('userId or productId should be passed')
        let apiResponse = response.generate(true, 'userId or productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        cartModel.deleteOne({ 'userId': req.params.userId, 'productId': req.params.productId } , (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Deletion Success')
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end removeCart


let addProductToCart = (req, res) => {

    let addProductFunction = () => {

        return new Promise((resolve, reject) => {
            console.log(req.body)

            if (check.isEmpty(req.body.productId) || check.isEmpty(req.params.userId)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)

            } else {

                var today = time.getLocalTime()

                let cartItems = new cartModel({
                    userId: req.params.userId,
                    productId: req.body.productId,
                    quantity: req.body.quantity,
                    created: today,
                    lastModified: today
                }) // end new blog model

                cartItems.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Adding Product to cart')
                        resolve(result)
                    }
                }) // end newProduct save



            }//end if-else
        }) // end newProduct promise
    } // end add product function


    // making promise call.
    addProductFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'Product Added to the cart', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })


}// end addProduct




module.exports = {

    viewCart: viewCart,
    editProductOfCart: editProductOfCart,
    removeProductFromCart: removeProductFromCart,
    addProductToCart: addProductToCart
}// end exports