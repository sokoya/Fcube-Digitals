function parseLoginError(err) {
  let parsedError = {
    message: null,
  };

      if (err.response) {

        parsedError = {
          ...parsedError,
          message: ' * '  + err.response.data.message.description,
        };
  

    //  console.log(err.response.data);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    } else if (err.request) {
      console.log(err);
      parsedError = {
        ...parsedError,
        message: " *  Network Error. Pls Check Your Internet connection",
      };
    // console.log(parsedError);
    } else {
     console.log('Error', err.message);
   }

  if (err.response) {
    if (err.response.data && err.response.data.error && err.response.status === 401) {
      parsedError = {
        ...parsedError,
        message: err.response.data.error,
      };
    }
  }

  return parsedError;
}

function parseEkoError(err) {

  let parsedError = {
    message: null,
  };

      if (err.response) {

        parsedError = {
          ...parsedError,
          message: ' * '  + err.response.data.message.description.response,
        };
  

       console.log(err.response.data);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    } else if (err.request) {

      parsedError = {
        ...parsedError,
        message: " *  Network Error. Pls Check Your Internet connection",
      };
     console.log(parsedError);
    } else {
     console.log('Error', err.message);
   }


  return parsedError;
  
}


function parseStartimesError(err) {

  let parsedError = {
    message: null,
  };

      if (err.response) {

        parsedError = {
          ...parsedError,
          message: ' * '  + err.response.data.message.description.description,
        };
  

      // console.log(err.response.data.message.description);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    } else if (err.request) {

      parsedError = {
        ...parsedError,
        message: " *  Network Error. Pls Check Your Internet connection",
      };
   //  console.log(parsedError);
    } else {
   //  console.log('Error', err.message);
   }


  return parsedError;
  
}


function parseIbadan(err) {

  let parsedError = {
    message: null,
  };

      if (err.response) {

        parsedError = {
          ...parsedError,
          message: ' * '  + err.response.data.message.description.message,
        };
  

       console.log(err.response.data);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    } else if (err.request) {

      parsedError = {
        ...parsedError,
        message: " *  Network Error. Pls Check Your Internet connection",
      };
     console.log(parsedError);
    } else {
     console.log('Error', err.message);
   }


  return parsedError;
  
}


export const errorParser = {
  parseLoginError, parseEkoError, parseStartimesError, parseIbadan
};
