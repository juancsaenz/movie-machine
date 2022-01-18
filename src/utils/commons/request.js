import configApi from '../../config/api';

/**
 * Parse the JSON returned by a network request
 * @param { object } response A response from a network request
 * @return { object } The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param { object } response A response from a network request
 * @return { object } Returns either the response, or throws an error
 */
async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const errorResponse = await parseJSON(response);
  const error = new Error(errorResponse.message);
  throw error;
}

/**
 * Retrieve untraking errors
 * @param { Object } err - Untraker error
 * @throws Error with traking configuration
 */
async function handleError(err) {
  const error = new Error(err.message);
  throw error;
}

/**
 * Requests a URL, returning a promise
 * @param { string } url The URL we want to request
 * @param { object } [options] The options we want to pass to "fetch"
 * @return { object } The response data
 */
export default async function request(url, receivedOptions) {
  const options = {...receivedOptions};
  const baseURL = configApi.API;

  // Default headers
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  options.headers = headers;

  // Execute request
  return fetch(baseURL.concat(`${url}&api_key=${configApi.API_KEY}`), options)
    .catch(handleError)
    .then(checkStatus)
    .then(parseJSON);
}
