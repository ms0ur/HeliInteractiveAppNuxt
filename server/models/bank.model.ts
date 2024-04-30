import { defineMongooseModel } from '#nuxt/mongoose'
import {Types} from 'mongoose'

const AccountSchema = defineMongooseModel({
    name: 'Account',
    schema: {
        _id: Types.ObjectId,
        name: String,
        type: {
            type: String,
            enum: ['debt', 'credit']
        },
        balance: Number,
        rate: Number,
        isClosed: Boolean
    }
});

export const BankSchema = defineMongooseModel({
    name: 'Bank',
    schema: {
        user: {
            type: Types.ObjectId,
            ref: 'User'
        },
        accounts: [AccountSchema],
        isBlocked: Boolean
    }
});