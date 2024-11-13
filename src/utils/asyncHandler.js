const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export { asyncHandler } 

            //  ---- OR ----

// // Create a higher-order function (asyncHandler) that wraps an async function (fn) with error handling.
// const asyncHandler = (fn) => 
//     // Return a new async function that takes req, res, and next as arguments.
//     async (req,res,next) => {
//     try{
//          // Call the original async function (fn) with req, res, and next as arguments.
//         await fn(req,res,next);
//     } catch(error){
//          // If an error occurs, catch it and send a JSON error response.
//         res.status(err.code || 500).json({
//              // Set success to false to indicate an error occurred.
//             success: false,
//              // Include the error message in the response.
//             message:err.message
//         })
//     }
// }
