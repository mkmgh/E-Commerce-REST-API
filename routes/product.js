
const express = require('express')
const productController = require('./../controllers/productController')
const appConfig = require("./../config/appConfig")

const errorHandler = require("./../middleware/globalErrorHandler");
const logger = require("./../middleware/routeLogger");

const authentication = require('./../middleware/authentication')


//declaring an instance or creating an application instance
const app = express()


let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/products';

    app.get(baseUrl + '/all', authentication.isAuthenticated, productController.getAllProduct);

    /**
* @api {get} /api/v1/products/all Get All Products
* @apiVersion 0.0.1
* @apiGroup Read
*
* @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
*
*  @apiSuccessExample {json} Success-Response:
*  
{
  "error": false,
  "message": "All Product Found",
  "status": 200,
  "data": [
      {
          "payment_options": {
              "netBanking": true,
              "COD": false,
              "EMI": false
          },
          "productName": "String",
          "prod_Description": "String",
          "price": Number,
          "discount": Number,
          "category": "String",
          "brandName": "String",
          "colors": [],
          "warranty": Number,
          "features": [],
          "reviews": [],
          "quantity": Number,
          "productId": "String",
          "rating": Number,
          "created": "date",
          "lastModified": "date"
      }
  ]
}
@apiErrorExample {json} Error-Response:
*
* {
"error": true,
"message": "Failed to find product details",
"status": 500,
"data": null
}
{
"error": true,
"message": "No Product Found",
"status": 404,
"data": null
}
*/

    app.post(baseUrl + '/create', authentication.isAuthenticated, productController.createProduct);

    /**
 * @api {post} /api/v1/products/create Create/Add new Product details
 * @apiVersion 0.0.1
 * @apiGroup Create
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} productName Name of product passed as a body parameter
 * @apiParam {String} prod_Description Description of product passed as a body parameter
 * @apiParam {Number} price Price of product passed as a body parameter
 * @apiParam {Number} discount Discount on product passed as a body parameter
 * @apiParam {Number} rating Rating(1 to 5) of product passed as a body parameter
 * @apiParam {String} category Category of product passed as a body parameter
 * @apiParam {String} brandName Brand of product passed as a body parameter
 * @apiParam {String} colors Colors of product passed as a body parameter
 * @apiParam {Boolean} payment_options Payment options for product purchase passed as a body parameter
 * @apiParam {String} warranty Warranty of product passed as a body parameter
 * @apiParam {String} features features of product passed as a body parameter
 * @apiParam {String} reviews Reviews of product passed as a body parameter
 * @apiParam {Number} quantity Quantity of product passed as a body parameter
 * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
        "error": false,
        "message": "Product Details created/added successfully",
        "status": 200,
        "data": [
            {
                "payment_options": {
                    "netBanking": true,
                    "COD": false,
                    "EMI": false
                },
                "productName": "String",
                "prod_Description": "String",
                "price": Number,
                "discount": Number,
                "category": "String",
                "brandName": "String",
                "colors": [],
                "warranty": Number,
                "features": [],
                "reviews": [],
                "quantity": Number,
                "productId": "String",
                "rating": Number,
                "created": "date",
                "lastModified": "date"
            }
        ]
    }
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Failed to create product",
    "status": 500,
    "data": null
    }
 */

    app.put(baseUrl + '/edit/:productId', authentication.isAuthenticated, productController.editProduct);

    /**
 * @api {put} /api/v1/products/edit/:productId Edit Product Details
 * @apiVersion 0.0.1
 * @apiGroup Edit
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)     
 * @apiParam {String} productId ID of product passed as a URL parameter(Required)
 * @apiParam {String} productName Name of product passed as a body parameter(Required)
 * @apiParam {String} prod_Description Description of product passed as a body parameter
 * @apiParam {Number} price Price of product passed as a body parameter
 * @apiParam {Number} discount Discount on product passed as a body parameter
 * @apiParam {Number} rating Rating(1 to 5) of product passed as a body parameter
 * @apiParam {String} category Category of product passed as a body parameter
 * @apiParam {String} brandName Brand of product passed as a body parameter
 * @apiParam {String} colors Colors of product passed as a body parameter
 * @apiParam {Boolean} payment_options Payment options for product purchase passed as a body parameter
 * @apiParam {String} warranty Warranty of product passed as a body parameter
 * @apiParam {String} features features of product passed as a body parameter
 * @apiParam {String} reviews Reviews of product passed as a body parameter
 * @apiParam {Number} quantity Quantity of product passed as a body parameter
 * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
        "error": false,
        "message": "Product Details edited/updated successfully",
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
    "message": "Failed to edit product",
    "status": 500,
    "data": null
    }
    {
    "error": true,
    "message": "No Product Found",
    "status": 404,
    "data": null
   }

 */



    app.get(baseUrl + '/viewById/:productId', authentication.isAuthenticated, productController.viewByProductId);

    /**
 * @api {get} /api/v1/products/viewById/:productId Get Product Details by ID 
 * @apiVersion 0.0.1
 * @apiGroup Read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)     
 * @apiParam {String} productId ID of product passed as a URL parameter(Required)
 * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
        "error": false,
        "message": "Product found",
        "status": 200,
        "data": [
            {
                "payment_options": {
                    "netBanking": true,
                    "COD": false,
                    "EMI": false
                },
                "productName": "String",
                "prod_Description": "String",
                "price": Number,
                "discount": Number,
                "category": "String",
                "brandName": "String",
                "colors": [],
                "warranty": Number,
                "features": [],
                "reviews": [],
                "quantity": Number,
                "productId": "String",
                "rating": Number,
                "created": "date",
                "lastModified": "date"
            }
        ]
    }
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured",
    "status": 500,
    "data": null
    }
    {
    "error": true,
    "message": "No Product Found with given ID",
    "status": 404,
    "data": null
   }

 */


    app.get(baseUrl + '/viewByName/:productName', authentication.isAuthenticated, productController.viewByProductName);

    /**
 * @api {get} /api/v1/products/viewByName/:productName Get Product Details by Name
 * @apiVersion 0.0.1
 * @apiGroup Read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)     
 * @apiParam {String} productName Name of product passed as a URL parameter(Required)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
        "error": false,
        "message": "Product Found Successfully.",
        "status": 200,
        "data": [
            {
                "payment_options": {
                    "netBanking": true,
                    "COD": false,
                    "EMI": false
                },
                "productName": "String",
                "prod_Description": "String",
                "price": Number,
                "discount": Number,
                "category": "String",
                "brandName": "String",
                "colors": [],
                "warranty": Number,
                "features": [],
                "reviews": [],
                "quantity": Number,
                "productId": "String",
                "rating": Number,
                "created": "date",
                "lastModified": "date"
            }
        ]
    }
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured",
    "status": 500,
    "data": null
    }
    {
    "error": true,
    "message": "Product Not Found with given name",
    "status": 404,
    "data": null
   }

 */





    app.post(baseUrl + '/delete/:productId', authentication.isAuthenticated, productController.deleteProduct);

    /**
 * @api {post} /api/v1/products/delete/:productId Delete Product Details
 * @apiVersion 0.0.1
 * @apiGroup Delete
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)     
 * @apiParam {String} productId ID of product passed as a URL parameter(Required)
 *
 *  @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Product Deleted",
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
    "message": "Error Occured",
    "status": 500,
    "data": null
    }
    {
    "error": true,
    "message": "No Product Found",
    "status": 404,
    "data": null
   }

 */


}// end setRouter function 

module.exports = {
    setRouter: setRouter
}