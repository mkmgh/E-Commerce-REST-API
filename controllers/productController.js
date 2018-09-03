const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../library/responseLib')
const check = require('./../library/checkLib')
const logger = require('./../library/loggerLib')

//Importing the model here 
const ProductModel = mongoose.model('Product')

let getAllProduct = (req, res) => {
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Failed to find product details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Product Found', 'Product Controller : getAllProduct')
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('All Product Found', 'Product Controller : getAllProduct')
                let apiResponse = response.generate(false, 'All Product Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all product


/**
 * function to create the product info.
 */
let createProduct = (req, res) => {
    var today = Date.now()
    let productId = shortid.generate()

    let newProduct = new ProductModel({

        productId : productId,
        productName : req.body.productName,
        prod_Description : req.body.prod_Description,
        price : req.body.price,
        discount : req.body.discount,
        rating : req.body.rating,
        category : req.body.category,
        brandName : req.body.brandName,
        quantity : req.body.quantity,
        payment_options : req.body.payment_options,
        netBanking : req.body.netBanking,
        COD : req.body.COD,
        EMI : req.body.EMI,
        warranty : req.body.warranty,


    }) // end new product model


    let colors = (req.body.colors != undefined && req.body.colors != null && req.body.colors != '') ? req.body.colors.split(',') : []
    newProduct.colors = colors

    let reviews = (req.body.reviews != undefined && req.body.reviews != null && req.body.reviews != '') ? req.body.reviews.split(',') : []
    newProduct.reviews = reviews

    let features = (req.body.features != undefined && req.body.features != null && req.body.features != '') ? req.body.features.split(',') : []
    newProduct.features = features
    

    newProduct.save((err, result) => {
        if (err) {
            console.log(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to create product', 500, null)
            res.send(apiResponse)
        } else {
            logger.info('Details created/added successfully', 'Product Controller : createProduct')
            let apiResponse = response.generate(false, 'Product Details created/added successfully', 200, result)
            res.send(apiResponse)
        }
    }) // end new product save
}

/**
 * function to edit product by admin.
 */
let editProduct = (req, res) => {

    let options = req.body;
    console.log(options);
    ProductModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

        if (err) {
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to edit product', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Product Found', 'Product Controller : editProduct')
            let apiResponse = response.generate(true, 'No Product Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('Details edited/updated ', 'Product Controller : editProduct')
            let apiResponse = response.generate(false, 'Product Details edited/updated successfully', 200, result)
            res.send(apiResponse)
        }
    })

    /*
    let colors = (req.body.colors != undefined && req.body.colors != null && req.body.colors != '') ? req.body.colors.split(',') : []
    newProduct.colors = colors

    let reviews = (req.body.reviews != undefined && req.body.reviews != null && req.body.reviews != '') ? req.body.reviews.split(',') : []
    newProduct.reviews = reviews

    let features = (req.body.features != undefined && req.body.features != null && req.body.features != '') ? req.body.features.split(',') : []
    newProduct.features = features
    */


}


/**
 * function to read single product by productID.
 */
let viewByProductId = (req, res) => {
    
    if (check.isEmpty(req.params.productId)) {

        console.log('ID of Product should be passed')
        let apiResponse = response.generate(true, 'ID of Product is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.findOne({ 'productId': req.params.productId }, (err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Product Found', 'Product Controller : viewByProductId')
                let apiResponse = response.generate(true, 'No Product Found with given ID', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found", "Product Controller : viewByProductId")
                let apiResponse = response.generate(false, 'Product Found Successfully', 200, result)
                res.send(apiResponse)
    
            }
        })
    }

   
}


/**
 * function to read single product by productName.
 */

let viewByProductName = (req, res) => {

    if (check.isEmpty(req.params.productName)) {

        console.log('Name of Product should be passed')
        let apiResponse = response.generate(true, 'Name of Product is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.findOne({ 'productName': req.params.productName }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found with given name', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "productController:viewByProductName", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}



/**
 * function to delete the assignment collection.
 */
let deleteProduct = (req, res) => {
    ProductModel.remove({ 'productId': req.params.productId }, (err, result) => {
        if (err) {
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Product Found', 'Product Controller : deleteProduct')
            let apiResponse = response.generate(true, 'No Product Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info("Product deleted", "Product Controller : deleteProduct")
            let apiResponse = response.generate(false, 'Product Deleted', 200, result)
            res.send(apiResponse)

        }
    })
}



module.exports = {
    getAllProduct : getAllProduct,
    createProduct : createProduct,
    editProduct : editProduct,
    viewByProductId : viewByProductId,
    viewByProductName : viewByProductName,
    deleteProduct : deleteProduct
}
