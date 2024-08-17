export const errorHandler = (statusCode , message) =>{
    console.log("error.js ->  errorhandler fun executed");
    const error = new Error()
    error.statusCode = statusCode
    error.message = message

    return error;
}