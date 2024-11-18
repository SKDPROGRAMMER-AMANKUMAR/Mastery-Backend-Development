import mongoose, {isValidObjectId} from "mongoose"/*// Importing the `mongoose` package to interact with MongoDB using Mongoose ORM.
// `mongoose` provides methods for working with MongoDB collections, schemas, and models.
// Importing the `isValidObjectId` method from `mongoose` to validate whether a given 
// value is a valid MongoDB ObjectId. This is useful when you need to check if an 
// identifier is properly formatted before querying the database.*/
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params
    //TODO: toggle like on video

    // Checks if the 'videoId' is a valid ObjectId. If not, throws an error with a 400 status and an 'Invalid videoId' message.
    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid videoId");
    }

    // Checks if the current user has already liked the video by searching the 'Like' collection for a matching 'videoId' and 'likedBy' user.
    const likedAlready = await Like.findOne({
        video: videoId,// Matches the 'videoId' of the video being liked.
        likedBy: req.user?._id,// Matches the current user's ID to see if they have already liked the video.
    });

    // If the user has already liked the video, deletes their like entry from the 'Like' collection.
    if (likedAlready) {
        await Like.findByIdAndDelete(likedAlready?._id);// Deletes the 'Like' entry by its ID.

        /*// Returns a response with status 200, indicating that the like has been removed, and the 'isLiked' flag is set to false.*/
        return res
            .status(200)
            .json(new ApiResponse(200, { isLiked: false }));// Sends back the updated like status.
    }

    // If the user has not already liked the video, creates a new 'Like' entry in the 'Like' collection for this video and user.
    await Like.create({
        video: videoId,// The 'videoId' of the video being liked.
        likedBy: req.user?._id,// The ID of the user who liked the video.
    });

    return res
        .status(200)
        .json(new ApiResponse(200, { isLiked: true }));// Sends a JSON response with a custom ApiResponse object containing the like status.
});


const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment

    if (!isValidObjectId(commentId)) {
        throw new ApiError(400, "Invalid commentId");
    }


    const likedAlready = await Like.findOne({
        comment: commentId,
        likedBy: req.user?._id,
    });

    if (likedAlready) {
        await Like.findByIdAndDelete(likedAlready?._id);

        return res
            .status(200)
            .json(new ApiResponse(200, { isLiked: false }));
    }

    await Like.create({
        comment: commentId,
        likedBy: req.user?._id,
    });

    return res
        .status(200)
        .json(new ApiResponse(200, { isLiked: true }));

})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    //TODO: toggle like on tweet

    if (!isValidObjectId(tweetId)) {
        throw new ApiError(400, "Invalid tweetId");
    }


    const likedAlready = await Like.findOne({
        tweet: tweetId,
        likedBy: req.user?._id,
    });

    if (likedAlready) {
        await Like.findByIdAndDelete(likedAlready?._id);

        return res
            .status(200)
            .json(new ApiResponse(200, { tweetId, isLiked: false }));
    }

    await Like.create({
        tweet: tweetId,
        likedBy: req.user?._id,
    });

    return res
        .status(200)
        .json(new ApiResponse(200, { isLiked: true }));
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const likedVideosAggegate = await Like.aggregate([
        {
            $match: {
                likedBy: new mongoose.Types.ObjectId(req.user?._id),
            },
        },
        {
            $lookup: {
                from: "videos",
                localField: "video",
                foreignField: "_id",
                as: "likedVideo",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "ownerDetails",
                        },
                    },
                    {
                        $unwind: "$ownerDetails",
                    },
                ],
            },
        },
        {
            $unwind: "$likedVideo",
        },
        {
            $sort: {
                createdAt: -1,
            },
        },
        {
            $project: {
                _id: 0,
                likedVideo: {
                    _id: 1,
                    "videoFile.url": 1,
                    "thumbnail.url": 1,
                    owner: 1,
                    title: 1,
                    description: 1,
                    views: 1,
                    duration: 1,
                    createdAt: 1,
                    isPublished: 1,
                    ownerDetails: {
                        username: 1,
                        fullName: 1,
                        "avatar.url": 1,
                    },
                },
            },
        },
    ]);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                likedVideosAggegate,
                "liked videos fetched successfully"
            )
        );
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}