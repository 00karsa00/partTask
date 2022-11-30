module.exports = {
  // method of operation
  post: {
    tags: ["User From Details"], // operation's tag.
    description: "Get user details", // operation's desc.
    operationId: "userDetails", // unique operation id.
    parameters: [
    ], // expected params.
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserDetails", // todo input data model
          },
        },
      },
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
                  example: "Your Details Register Successfully", // example of an error message
                },
                error: {
                  type: "boolean", // data type
                  description: "Success response", // desc
                  example: "false", // example of an error internal code
                },
              },// UserDetails model
            },
          },
        },
      },
    },
  },
}