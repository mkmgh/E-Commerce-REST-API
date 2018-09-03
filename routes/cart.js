const express = require('express')
const productController = require('./../controllers/productController')
const cartController = require('./../controllers/cartController')



const authentication = require('./../middleware/authentication')

const appConfig = require('./../config/appConfig')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/cart';

    app.get(baseUrl + '/:userId/viewcart',authentication.isAuthenticated, cartController.viewCart)

    /**
	 * @api {get} /api/v1/cart/:userId/viewcart View the all items from user's cart
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId user Id passed as a URL parameter(Required)
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Displaying Cart items",
            "status": 200,
            "data": [
                {
                    "_id": "String",
                    "quantity": Number,
                    "userId": "String",
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date",
                    "__v": 0
                }
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product not found",
	    "status": 404,
	    "data": null
	   }
	 */


    app.put(baseUrl + '/:userId/:productId/edit', authentication.isAuthenticated, cartController.editProductOfCart)
    
        /**
	 * @api {put} /api/v1/cart/:userId/:productId/edit Edit the quantity of product from user's cart
	 * @apiVersion 0.0.1
	 * @apiGroup Edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId product Id passed as a URL parameter(Required)
	 * @apiParam {String} userId user Id passed as a URL parameter(Required)
	 * @apiParam {Number} quantity quantity of product passed as a body parameter(Required)
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Edited Successfully.",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product not found",
	    "status": 404,
	    "data": null
	   }
	 */


    app.post(baseUrl + '/:userId/:productId/delete', authentication.isAuthenticated, cartController.removeProductFromCart)

       /**
	 * @api {post} /api/v1/cart/:userId/:productId/delete Delete product from user's cart
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId product Id passed as a URL parameter(Required)
	 * @apiParam {String} userId user Id passed as a URL parameter(Required)
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Deleted Successfully",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "Product not found",
	    "status": 404,
	    "data": null
	   }
	 */
        
    app.post(baseUrl + '/:userId/addProduct', authentication.isAuthenticated, cartController.addProductToCart)

       /**
	 * @api {post} /api/v1/cart/:userId/addProduct Add product to the user's cart
	 * @apiVersion 0.0.1
	 * @apiGroup Add
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId product Id passed as a body parameter(Required)
	 * @apiParam {String} userId user Id passed as a URL parameter(Required)
	 * @apiParam {Number} quantity quantity of the product passed as a body parameter(Required)
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Added to the cart",
            "status": 200,
            "data": {
                "quantity": Number,
                "_id": "String",
                "userId": "String",
                "productId": "String",
                "created": "date",
                "lastModified": "date",
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       {
	    "error": true,
	    "message": "required parameters are missing",
	    "status": 403,
	    "data": null
	   }
	 */
}

module.exports = {
    setRouter : setRouter
}