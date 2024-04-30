import { defineMongooseModel } from '#nuxt/mongoose'
import {Types} from 'mongoose'

export const UserSchema = defineMongooseModel({
  name: 'User',
  schema: {
    nickname: String,
    friends: [String],
    isAdmin: Boolean,
    politics: [
        {
            isLawmaker: Boolean,
            party: String || null, //For future use 
            isHeadParty: Boolean    //For future use
        }
    ],
    city: {
        type: Types.ObjectId,
        ref: 'City'
    } || null
  },
})