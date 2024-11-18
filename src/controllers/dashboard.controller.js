import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
// import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getChannelStats = asyncHandler(async (req, res) => {
  // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.

  const userId = req.user?._id; // Retrieves the user ID from the request object, if available, using optional chaining to handle cases where 'user' may be undefined or null.

  /*// Performs an aggregation operation on the 'Subscription' collection to calculate or retrieve total subscriber data.
// The 'await' ensures that the operation completes before proceeding, returning the result of the aggregation pipeline.*/
  const totalSubscribers = await Subscription.aggregate([
    // Add aggregation stages here
    {
      // Filters the documents in the 'Subscription' collection to only include those where the 'channel' field matches the given userId.
      $match: {
        channel: new mongoose.Types.ObjectId(userId), // Converts 'userId' to an ObjectId and matches it with the 'channel' field.
      },
    },
    {
      // Groups the matched documents together and calculates the total number of subscribers.
      $group: {
        _id: null, // No grouping by a specific field, so the result will be a single document.
        subscribersCount: {
          $sum: 1, // Increments the 'subscribersCount' by 1 for each matched document, effectively counting them.
        },
      },
    },
  ]);

  /*// Performs an aggregation operation on the 'Video' collection to process or retrieve video data.
// The 'await' ensures the operation completes before proceeding, returning the result of the aggregation pipeline.*/
  const video = await Video.aggregate([
    // Add aggregation stages here
    {
    // Filters the documents to include only those where the 'owner' field matches the provided 'userId'.
      $match: {
        owner: new mongoose.Types.ObjectId(userId),// Converts 'userId' to an ObjectId for comparison.
      },
    },
    {
        // Performs a left outer join with the 'likes' collection, matching the video ID with the 'video' field in the 'likes' collection.
      $lookup: {
        from: "likes",// Specifies the collection to join with.
        localField: "_id",// The field in the 'Video' collection to match with.
        foreignField: "video",// The field in the 'likes' collection to match with.
        as: "likes",// The resulting array of matching documents will be stored in the 'likes' field.
      },
    },
    {
        // Projects the desired fields, calculating the total likes, total views, and total videos.
      $project: {
        totalLikes: {
          $size: "$likes",// Counts the number of documents in the 'likes' array to get the total likes for each video.
        },
        totalViews: "$views",// Retains the 'views' field as is.
        totalVideos: 1, // Includes the 'totalVideos' field as 1 (to keep the count of videos).
      },
    },
    {
         // Groups the documents to calculate the total likes, views, and videos across all matched documents.
      $group: {
        _id: null, // No grouping by a specific field, so the result is a single document.
        totalLikes: {
          $sum: "$totalLikes",// Sums up the total likes across all videos.
        },
        totalViews: {
          $sum: "$totalViews",// Sums up the total views across all videos.
        },
        totalVideos: {
          $sum: 1,// Counts the total number of videos (one for each document).
        },
      },
    },
  ]);

  // Constructs an object 'channelStats' to store the statistics for a channel, 
// extracting values from the 'totalSubscribers' and 'video' arrays. 
// Defaults to 0 if any of the values are undefined or not present.
  const channelStats = {
    totalSubscribers: totalSubscribers[0]?.subscribersCount || 0,// Retrieves 'subscribersCount' from the first element of 'totalSubscribers', defaults to 0 if not found.
    totalLikes: video[0]?.totalLikes || 0,// Retrieves 'totalLikes' from the first element of 'video', defaults to 0 if not found.
    totalViews: video[0]?.totalViews || 0,// Retrieves 'totalViews' from the first element of 'video', defaults to 0 if not found.
    totalVideos: video[0]?.totalVideos || 0,// Retrieves 'totalVideos' from the first element of 'video', defaults to 0 if not found.
  };

  return res
    .status(200)
    .json(
      new ApiResponse(200, channelStats, "channel stats fetched successfully")
    );
});

const getChannelVideos = asyncHandler(async (req, res) => {
  // TODO: Get all the videos uploaded by the channel

  // Retrieves the 'userId' from the authenticated user's request object (req.user) using optional chaining.
  const userId = req.user?._id;

  // Performs an aggregation operation on the 'Video' collection to fetch videos related to the authenticated user.
  const videos = await Video.aggregate([
    {
        // Filters the videos where the 'owner' field matches the provided 'userId'.
      $match: {
        owner: new mongoose.Types.ObjectId(userId),// Converts 'userId' to ObjectId for comparison with 'owner' field.
      },
    },
    {
         // Performs a left join with the 'likes' collection to associate each video with its likes.
      $lookup: {
        from: "likes",// Specifies the collection to join with.
        localField: "_id",// The field in the 'Video' collection to match with.
        foreignField: "video",// The field in the 'likes' collection to match with.
        as: "likes",// The resulting array of matching documents is stored in the 'likes' field.
      },
    },
    {
        // Adds new fields to the video documents: 'createdAt' as separate date parts and 'likesCount' as the size of the 'likes' array.
      $addFields: {
        createdAt: {
          $dateToParts: { date: "$createdAt" },// Splits the 'createdAt' date into individual parts (year, month, day).
        },
        likesCount: {
          $size: "$likes",// Counts the number of likes for the video by measuring the size of the 'likes' array.
        },
      },
    },
    {
        // Sorts the videos by the 'createdAt' field in descending order (latest videos first).
      $sort: {
        createdAt: -1,// Sorts by 'createdAt' field in descending order.
      },
    },
    {
         // Projects the final fields to include in the result, including video details, creation date parts, and like count.
      $project: {
        _id: 1, // Includes the '_id' field.
        "videoFile.url": 1, // Includes the 'url' field from the 'videoFile' object.
        "thumbnail.url": 1,// Includes the 'url' field from the 'thumbnail' object.
        title: 1,// Includes the 'title' field.
        description: 1,// Includes the 'description' field.
        createdAt: {
          year: 1, // Includes the 'year' part of the 'createdAt' date.
          month: 1,// Includes the 'month' part of the 'createdAt' date.
          day: 1,// Includes the 'day' part of the 'createdAt' date.
        },
        isPublished: 1,// Includes the 'isPublished' field.
        likesCount: 1,// Includes the 'likesCount' field, which represents the number of likes.
      },
    },
  ]);

  return res
    .status(200)
    .json(new ApiResponse(200, videos, "channel stats fetched successfully"));
});

export { getChannelStats, getChannelVideos };
