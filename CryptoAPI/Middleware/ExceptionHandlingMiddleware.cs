using CryptoAPI.Context;
using CryptoAPI.Entities;
using Newtonsoft.Json;
using System.Net;

namespace CryptoAPI.Middleware
{
    public class ExceptionHandlingMiddleware
    {
        public RequestDelegate _requestDelegate;

        public ExceptionHandlingMiddleware(RequestDelegate requestDelegate)
        {
            _requestDelegate = requestDelegate;
        }

        public async Task Invoke(HttpContext context, ILogger<ExceptionHandlingMiddleware> logger)
        {
            try
            {
                await _requestDelegate(context);
            }catch(Exception ex)
            {
                await HandleException(context, ex, logger);
            }
        }

        private static Task HandleException(HttpContext context, Exception ex, ILogger<ExceptionHandlingMiddleware> logger)
        {
            logger.LogError(ex.ToString());

            var errorMessageObject = new Error { Message = ex.Message, Code = "GE" };
            var statusCode = (int)HttpStatusCode.InternalServerError;
            switch (ex)
            {
                case InvalidCryptoException:
                    errorMessageObject.Code = "F001";
                    statusCode = (int)HttpStatusCode.Forbidden;
                    break;
            }

            var errorMessage = JsonConvert.SerializeObject(errorMessageObject);

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = statusCode;

            return context.Response.WriteAsync(errorMessage);
        }
    }
}
