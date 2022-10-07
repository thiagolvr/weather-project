import axios from 'axios';

export const statusCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const methods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

async function request(
  resource,
  successCode,
  method,
  data,
) {
  const result = {};

  const Api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
  });

  try {
    const res = await Api[method](resource, data);
    result.success = res.status === successCode;
    result.code = res.status;
    result.description = res.statusText;
    result.header = res?.headers;
    result.data = res?.data;
    return result;
  } catch (err) {
    result.success = false;
    result.code = err?.response?.status;
    result.header = null;
    result.data = {
      code: err?.response?.status,
      message: err?.message,
      name: err?.name,
    };
    return result;
  }
}

export default request;
