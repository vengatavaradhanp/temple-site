/**
 * Check the response status and return
 * response or throw error
 * @param response
 * @returns {*} response or throw error
 */
export function checkStatus(response:Response) {
  console.log('response',response);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    // if api sends back failure status code,
    // throws response and treated as error in the catch block
    throw response;
  }

  export function parseJSON(response:Response) {
    return response.json() || response;
  }

  