const mongoose = require('mongoose')
const time = require('./../library/timeLib');


const Schema = mongoose.Schema;

let cartSchema = new Schema(
    {
        userId: {
            type:String
        },

        productId: {
            type:String
        },
        
        quantity: {
            type:Number,
            default:1
        },

        created: {
            type:Date,
            default:time.getLocalTime
        },

        lastModified: {
            type:Date,
            default:time.getLocalTime
        }
        
    }
)

mongoose.model('cartModel', cartSchema);