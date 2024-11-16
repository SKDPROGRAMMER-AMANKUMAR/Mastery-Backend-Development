import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async( userId ) => {
  try {
     const user = await User.findById(userId)
     const accessToken = user.generateAccessToken()
     const refreshToken = user.generateRefreshToken()
     user.refreshToken = refreshToken
     await user.save({validateBeforeSave :false})

     return {accessToken, refreshToken}
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating refresh ad access token ")
  }

}

const registerUser = asyncHandler( 
    async(req,res)=> {
        /*Algorithm to register the user*/
    //get user details from frontend
    //validation -not empty
    //check if user already exists:username,email
    //check for images , check for avatar
    //upload them to cloudinary , avatar
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response 

    const {fullName, email, password, username} = req.body
    console.log("This is the all data of req.body",req.body)
    if(
        [fullName, email,  password, username,].some((field)=> field?.trim()==="")
    ){
      throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400,"User with  email or username already exists")
    }

   const avatarLocalPath = await req.files?.avatar[0]?.path
    console.log("The req.file data is :- ",req.files);  

    // const coverImageLocalPath = req.files?.coverImage[0]?.path; //This will casue the error if the "coverImage" which is optional , not get uploaded is the code below instead of using this 
    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    console.log("The coverImage localPath is  is :- ",coverImageLocalPath);
    if(!avatarLocalPath ){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Failed to upload avatar to cloudinary")
    }

   const user = await  User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })    
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser , "User registered successfully")
    )
})

const loginUser = asyncHandler(async (req,res)=>{
    //Algorithm to login the user
    //req body -> data
    //username or email
    //fint the user
    //password check
    // send access and refresh token to user
    //send cookie

    const {email, username, password} = req.body
    console.log("Required information send by user for login :- ", req.body);

    if(!(username || email)){
        throw new ApiError(400,"Username or email is required")
    }
   
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

   const isPasswordValid =  await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid password")
    }

    const {accessToken,refreshToken} =  await generateAccessAndRefreshTokens(user._id)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

 const options = {
    httpOnly : true,
    secure:true
 }
 console.log("The option for cookies is :- ", options);

 return res
 .status(200)
 .cookie("accessToken", accessToken,options)
 
 .cookie("refreshToken", refreshToken,options)
 
 .json(
    new ApiResponse(
        200,
        {
            user:loggedInUser, 
            accessToken,
            refreshToken 
        },
        "User logged In Successfully"
    )
 )
})
const logoutUser = asyncHandler(async (req,res)=>{

  await User.findByIdAndUpdate(
    req.user._id, 
    {
        $set:{
            refreshToken:undefined
        }
    },{
        new:true 
    }
  )

  const options = {
    httpOnly:true,
    secure:true,
  }

  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{}, "User logged out successfully"))
});

export { registerUser,
         loginUser,
         logoutUser
 }
