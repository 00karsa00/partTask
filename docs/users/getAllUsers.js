module.exports = {
  // method of operation
  get: {
    tags: ["Registered User Details"], // operation's tag.
    description: "Get user details", // operation's desc.
    operationId: "userDetails", // unique operation id.
    parameters: [
      {
        name: "authorization",
        in: "headers",
        description: "Authorization Token",
        required: false,
        type: "string"
      }
      
    ], // expected params.
    "securityDefinitions": {
    "Authorization": {
    "type": "apiKey",
    "name": "authorization",
    "in": "header",
    "description": "Authentication token"
      }
    },
    
    // expected responses
    responses: {
      // response code
      200: {
        description: "Users were obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              type: "object", //data type
              properties: {
                message: {
                  type: "string", // data type
                  description: "Success message", // desc
                  example: "Admin is Register Successfully", // example of an error message
                },
                error: {
                  type: "boolean", // data type
                  description: "Success response", // desc
                  example: "false", // example of an error internal code
                },
              },
            },
          },
        },
      },
    },
  },
}