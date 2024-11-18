import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    // TODO: get all comments for a video

    /*// Extracting the `videoId` parameter from the route parameters (`req.params`).
// This value is used to identify the video whose comments need to be fetched.*/
    const {videoId} = req.params
    /*// Extracting `page` and `limit` values from the query parameters (`req.query`).
// `page` defaults to 1 and `limit` defaults to 10 if they are not provided.
// These values are used for pagination to control which comments to fetch and how many.*/
    const {page = 1, limit = 10} = req.query
   
    /*// Querying the `Comment` collection to find comments associated with the specified video.
// Using `new mongoose.Types.ObjectId(videoId)` to ensure the `videoId` is in the correct format.*/
    const commets = await Comment.find({
        video: new mongoose.Types.ObjectId(videoId),
    })
        /* // Sorting the comments in descending order based on their creation time (`createdAt` field),
    // so the most recent comments appear first.*/
        .sort({ createdAt: -1 })
         // Skipping comments from earlier pages based on the current page number.
    // `(page - 1) * limit` calculates the number of comments to skip.
        .skip((page - 1) * limit)
        /* // Limiting the number of comments retrieved to the specified `limit` per page.*/
        .limit(limit)

        /*// Counts the total number of comments associated with a specific video
// by querying the `Comment` collection where the `video` field matches
// the provided `videoId` (converted to a MongoDB ObjectId).*/
    const totalComments = await Comment.countDocuments({
        video: new mongoose.Types.ObjectId(videoId),
    })

    if (!commets) {
        throw new ApiError(404, 'No comments found')
    }

    return res.status(200).json(
        // Constructs a new `ApiResponse` object containing the following:
        new ApiResponse(
            200,
            {
                commets,//The list of comments fetched for the specified video.
                totalComments,// The total number of comments for the video in the database.
                totalPages: Math.ceil(totalComments / limit),//The total number of pages, calculated by dividing `totalComments` by the `limit` (number of comments per page).
                //    The result is rounded up to ensure all comments fit within the pages.
                currentPage: page,//The current page number being viewed.
            },
            'Comments fetched successfully'
        )
    )

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video

    const { videoId } = req.params
    const { content } = req.body
    const user = req.user

    if (!content) {
        throw new ApiError(400, 'Comment content is required')
    }

    if (!videoId) {
        throw new ApiError(400, 'Video ID is required')
    }

    /*// Creates a new comment in the database by using the `Comment.create()` method.
// 1. `content`: This field stores the text or message of the comment provided in the request. 
//    - It represents what the user wants to say about the video.
// 2. `video`: This field establishes a relationship between the comment and the specific video it belongs to.
//    - The `videoId` is passed as part of the request and is used to link the comment to the appropriate video document in the database.
// 3. `owner`: This field associates the comment with the user who created it.
//    - The `user._id` represents the unique identifier of the currently authenticated user (retrieved from `req.user`).
//    - This ensures that the comment can later be traced back to the user who posted it.
// The `await` keyword ensures that the comment creation process completes and returns a resolved promise.
// The resulting document is assigned to the `comment` variable, which can be used for further processing.*/
    const comment = await Comment.create({
        content,
        video: videoId,
        owner: user._id,
    })

    if (!comment) {
        throw new ApiError(500, 'Failed to add comment')
    }

    return res
        .status(201)
        .json(new ApiResponse(201, { comment }, 'Comment added successfully'))

})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment

    const { commentId } = req.params
    const { content } = req.body
    const user = req.user

    if (!content) {
        throw new ApiError(400, 'Comment content is required')
    }

    /*// Retrieves a single comment document from the database by its unique `commentId`.
// If found, `comment` contains the document; otherwise, it will be `null`.*/
    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ApiError(404, 'Comment not found')
    }
    
    /*// Checks if the currently logged-in user is the owner of the comment.
// Converts both `comment.owner` and `user._id` to strings for comparison.
// If the user is not the owner, throws a 403 error, denying update permission.*/
    if (comment.owner.toString() !== user._id.toString()) {
        throw new ApiError(403, 'You are not allowed to update this comment')
    }

    /*// Updates the content of the comment with the new text provided.
// Saves the updated comment to the database.*/
    comment.content = content
    await comment.save()

    return res
        .status(200)
        .json(new ApiResponse(200, { comment }, 'Comment updated successfully'))/*// Sends a successful response back to the client after updating the comment.
        // - Sets the HTTP status to 200 (OK).
        // - Uses the `ApiResponse` class to structure the response, including:
        //   - A status code of 200, indicating success.
        //   - The updated comment object is sent in the response body, wrapped in an object for clarity.
        //   - A success message "Comment updated successfully" to inform the client of the action performed.*/

})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment

    const { commentId } = req.params
    const user = req.user

    if (!commentId) {
        throw new ApiError(400, 'Comment ID is required')
    }

    const comment = await Comment.findById(commentId)

    if (!comment) {
        throw new ApiError(404, 'Comment not found')
    }

    /*// Verifies if the logged-in user is the owner of the comment before allowing deletion.
// - Converts `comment.owner` and `user._id` to strings to ensure proper comparison.
// - If the user is not the owner, throws a `403 Forbidden` error with the message 
//   "You are not allowed to delete this comment", preventing unauthorized deletion.*/
    if (comment.owner.toString() !== user._id.toString()) {
        throw new ApiError(403, 'You are not allowed to delete this comment')
    }

    // Finds and deletes a comment from the database by its unique comment ID.
    await Comment.findOneAndDelete(commentId)

    return res
        .status(200)
        .json(new ApiResponse(200, {}, 'Comment deleted successfully'))// Returns a JSON response with the status code, an empty data object, and a success message.

})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }