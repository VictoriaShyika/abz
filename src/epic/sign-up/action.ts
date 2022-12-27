import { HttpRequest } from '../../lib/http';
import { API, API_POST, GET_TOKEN } from './constant';

export const action = () => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL,
  });
};

export const postAction = (payload: any, token: any) => {
  return HttpRequest({
    method: API_POST.TYPE,
    url: API_POST.URL,
    data: payload,
    headers: token,
  });
};

export const getToken = () => {
  return HttpRequest({
    method: GET_TOKEN.TYPE,
    url: GET_TOKEN.URL,
  });
};
