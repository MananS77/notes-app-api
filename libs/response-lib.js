export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: headers,
    body: JSON.stringify(body)
  };
}
