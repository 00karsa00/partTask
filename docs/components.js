
module.exports = {
    components: {
        schemas: {
         
          // users model
          UserDetails: {
            type: "object", // data type
            properties: {
              name: {
                type: "string", // data-type
                description: "User name", // desc
                example: "karthick", // example of an id
              },
              email: {
                type: "string", // data-type
                description: "User email", // desc
                example: "karthi@gmail.com", // example of a title
              },
              age: {
                type: "number", // data type
                description: "User age", // desc
                example: 18, // example of a completed value
              },
              city: {
                type: "string", // data type
                description: "User city", // desc
                example: "chennai", // example of a completed value
              },
              phone: {
                type: "number", // data type
                description: "User number", // desc
                example: "1234567899", // example of a completed value
              },
              qualification: {
                type: "string", // data type
                description: "User qualification", // desc
                example: "MCA", // example of a completed value
              },
              Address: {
                type: "string", // data type
                description: "User Address", // desc
                example: "Chennai", // example of a completed value
              },
            },
          },
          
          // admin model
          AdminDetails: {
            type: "object", // data type
            properties: {
              name: {
                type: "string", // data-type
                description: "Admin name", // desc
                example: "karthick", // example of an id
              },
              email: {
                type: "string", // data-type
                description: "Admin email", // desc
                example: "karthi@gmail.com", // example of a title
              },
              password: {
                type: "string", // data type
                description: "Admin Password", // desc
                example: "234567", // example of a completed value
              },
            },
          },
        
          // error model
          Error: {
            type: "object", //data type
            properties: {
              message: {
                type: "string", // data type
                description: "Error message", // desc
                example: "Not found", // example of an error message
              },
              internal_code: {
                type: "string", // data type
                description: "Error internal code", // desc
                example: "Invalid parameters", // example of an error internal code
              },
            },
          },
        },
      },
}