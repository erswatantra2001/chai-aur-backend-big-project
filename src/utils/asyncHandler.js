// method 1 -> mostly used code

export const asyncHandler = (requestHandler) => {
  (req, res, next) => {
     Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

// method 2  -> best practice to follow actually

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       message: error.message,
//       success: false,
//     });
//   }
// };



/**
 * The above code defines a helper function called `asyncHandler` in JavaScript that wraps an
 * asynchronous request handler function and handles any errors that occur during its execution.
 * @param requestHandler - The requestHandler parameter is a function that handles the incoming request
 * and generates a response. It takes in three parameters: req (the request object), res (the response
 * object), and next (a function to pass control to the next middleware function).
 */
