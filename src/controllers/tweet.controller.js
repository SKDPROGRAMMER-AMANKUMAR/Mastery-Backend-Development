import mongoose, { isValidObjectId } from "mongoose"/*// Importing the `mongoose` package to interact with MongoDB using Mongoose ORM.
// `mongoose` provides methods for working with MongoDB collections, schemas, and models.
// Importing the `isValidObjectId` method from `mongoose` to validate whether a given 
// value is a valid MongoDB ObjectId. This is useful when you need to check if an 
// identifier is properly formatted before querying the database.*/
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}