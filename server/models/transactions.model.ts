import { defineMongooseModel } from '#nuxt/mongoose'
import {Types} from 'mongoose'

export const TransactionSchema = defineMongooseModel({
    name: 'Transaction',
    schema: {
        accountFrom: {
            type: Types.ObjectId,
            ref: 'Account'
        },
        accountTo: {
            type: Types.ObjectId,
            ref: 'Account'
        },
        amount: Number,
    },
})