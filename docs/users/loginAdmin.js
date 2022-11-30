module.exports = {
  // method of operation
  post: {
    tags: ["Admin login"], // operation's tag.
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
            type: "object", //data type
            properties: {
              email: {
                type: "string", // data type
                description: "Email Address", // desc
                example: "karthi@gmail.com", // example of an error message
              },
              password: {
                type: "string", // data type
                description: "Admin Password", // desc
                example: "12345678", // example of an error internal code
              },
            },
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
                  example: "Login Successfully.", // example of an error message
                },
                error: {
                  type: "boolean", // data type
                  description: "Success response", // desc
                  example: "false", // example of an error internal code
                },
                token: {
                  type: "string",
                  description: "user auth token",
                  example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg3YTdhMjlhY2YwYTkzYWY0YTNlOGIiLCJlbWFpbCI6ImthcnRoaUBnbWFpbC5jb20iLCJuYW1lIjoia2FydGhpY2siLCJjcmVhdGVBdCI6IjIwMjItMTEtMzBUMTg6NTc6MzguMDA5WiIsInVwZGF0ZUF0IjoiMjAyMi0xMS0zMFQxODo1NzozOC4wMDlaIiwiX192IjowLCJpYXQiOjE2Njk4Mzg4MTF9._7-4I_6731oVyjk3c_wfmH_m9LLYmt7Rz9xHoh-udN0"
                }
              },
            },
          },
        },
      },
    },
  },
}