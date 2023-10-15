module.exports.handler = async (event, context, callback) => {
  const { name } = event.queryStringParameters;
  return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Hello, ${name}`,
        },
        null,
        2
      ),
    };
  // const username = event.name;
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: `Hello, ${username}`,
    
  //     },
  //     null,
  //     2
  //   ),
  // };
};

