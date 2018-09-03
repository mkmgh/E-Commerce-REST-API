define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/cart/:userId/addProduct",
    "title": "Add product to the user's cart",
    "version": "0.0.1",
    "group": "Add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of the product passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Added to the cart\",\n           \"status\": 200,\n           \"data\": {\n               \"quantity\": Number,\n               \"_id\": \"String\",\n               \"userId\": \"String\",\n               \"productId\": \"String\",\n               \"created\": \"date\",\n               \"lastModified\": \"date\",\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"required parameters are missing\",\n\t    \"status\": 403,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Add",
    "name": "PostApiV1CartUseridAddproduct"
  },
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create/Add new Product details",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_Description",
            "description": "<p>Description of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount on product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating(1 to 5) of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Brand of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colors",
            "description": "<p>Colors of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "payment_options",
            "description": "<p>Payment options for product purchase passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>Warranty of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "features",
            "description": "<p>features of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviews",
            "description": "<p>Reviews of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product Details created/added successfully\",\n       \"status\": 200,\n       \"data\": [\n           {\n               \"payment_options\": {\n                   \"netBanking\": true,\n                   \"COD\": false,\n                   \"EMI\": false\n               },\n               \"productName\": \"String\",\n               \"prod_Description\": \"String\",\n               \"price\": Number,\n               \"discount\": Number,\n               \"category\": \"String\",\n               \"brandName\": \"String\",\n               \"colors\": [],\n               \"warranty\": Number,\n               \"features\": [],\n               \"reviews\": [],\n               \"quantity\": Number,\n               \"productId\": \"String\",\n               \"rating\": Number,\n               \"created\": \"date\",\n               \"lastModified\": \"date\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create product\",\n    \"status\": 500,\n    \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/:userId/:productId/delete",
    "title": "Delete product from user's cart",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Deleted Successfully\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Delete",
    "name": "PostApiV1CartUseridProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/products/delete/:productId",
    "title": "Delete Product Details",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ID of product passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Product Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"No Product Found\",\n    \"status\": 404,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Delete",
    "name": "PostApiV1ProductsDeleteProductid"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/:userId/:productId/edit",
    "title": "Edit the quantity of product from user's cart",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>product Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>quantity of product passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product Edited Successfully.\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"nModified\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Edit",
    "name": "PutApiV1CartUseridProductidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/products/edit/:productId",
    "title": "Edit Product Details",
    "version": "0.0.1",
    "group": "Edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ID of product passed as a URL parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of product passed as a body parameter(Required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prod_Description",
            "description": "<p>Description of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount on product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating(1 to 5) of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandName",
            "description": "<p>Brand of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "colors",
            "description": "<p>Colors of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "payment_options",
            "description": "<p>Payment options for product purchase passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>Warranty of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "features",
            "description": "<p>features of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviews",
            "description": "<p>Reviews of product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product Details edited/updated successfully\",\n       \"status\": 200,\n       \"data\": {\n           \"n\": 1,\n           \"nModified\": 1,\n           \"ok\": 1\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to edit product\",\n    \"status\": 500,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"No Product Found\",\n    \"status\": 404,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Edit",
    "name": "PutApiV1ProductsEditProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/:userId/viewcart",
    "title": "View the all items from user's cart",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Displaying Cart items\",\n           \"status\": 200,\n           \"data\": [\n               {\n                   \"_id\": \"String\",\n                   \"quantity\": Number,\n                   \"userId\": \"String\",\n                   \"productId\": \"String\",\n                   \"created\": \"date\",\n                   \"lastModified\": \"date\",\n                   \"__v\": 0\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n\t    \"error\": true,\n\t    \"message\": \"Product not found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "Read",
    "name": "GetApiV1CartUseridViewcart"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get All Products",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \n{\n  \"error\": false,\n  \"message\": \"All Product Found\",\n  \"status\": 200,\n  \"data\": [\n      {\n          \"payment_options\": {\n              \"netBanking\": true,\n              \"COD\": false,\n              \"EMI\": false\n          },\n          \"productName\": \"String\",\n          \"prod_Description\": \"String\",\n          \"price\": Number,\n          \"discount\": Number,\n          \"category\": \"String\",\n          \"brandName\": \"String\",\n          \"colors\": [],\n          \"warranty\": Number,\n          \"features\": [],\n          \"reviews\": [],\n          \"quantity\": Number,\n          \"productId\": \"String\",\n          \"rating\": Number,\n          \"created\": \"date\",\n          \"lastModified\": \"date\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\"error\": true,\n\"message\": \"Failed to find product details\",\n\"status\": 500,\n\"data\": null\n}\n{\n\"error\": true,\n\"message\": \"No Product Found\",\n\"status\": 404,\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/viewById/:productId",
    "title": "Get Product Details by ID",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ID of product passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product found\",\n       \"status\": 200,\n       \"data\": [\n           {\n               \"payment_options\": {\n                   \"netBanking\": true,\n                   \"COD\": false,\n                   \"EMI\": false\n               },\n               \"productName\": \"String\",\n               \"prod_Description\": \"String\",\n               \"price\": Number,\n               \"discount\": Number,\n               \"category\": \"String\",\n               \"brandName\": \"String\",\n               \"colors\": [],\n               \"warranty\": Number,\n               \"features\": [],\n               \"reviews\": [],\n               \"quantity\": Number,\n               \"productId\": \"String\",\n               \"rating\": Number,\n               \"created\": \"date\",\n               \"lastModified\": \"date\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"No Product Found with given ID\",\n    \"status\": 404,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsViewbyidProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/products/viewByName/:productName",
    "title": "Get Product Details by Name",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of product passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"Product Found Successfully.\",\n       \"status\": 200,\n       \"data\": [\n           {\n               \"payment_options\": {\n                   \"netBanking\": true,\n                   \"COD\": false,\n                   \"EMI\": false\n               },\n               \"productName\": \"String\",\n               \"prod_Description\": \"String\",\n               \"price\": Number,\n               \"discount\": Number,\n               \"category\": \"String\",\n               \"brandName\": \"String\",\n               \"colors\": [],\n               \"warranty\": Number,\n               \"features\": [],\n               \"reviews\": [],\n               \"quantity\": Number,\n               \"productId\": \"String\",\n               \"rating\": Number,\n               \"created\": \"date\",\n               \"lastModified\": \"date\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured\",\n    \"status\": 500,\n    \"data\": null\n    }\n    {\n    \"error\": true,\n    \"message\": \"Product Not Found with given name\",\n    \"status\": 404,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsViewbynameProductname"
  }
] });
