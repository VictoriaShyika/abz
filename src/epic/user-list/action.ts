import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const action = () => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL,
  });
};

export const reloadData = (link: string) => {
  return HttpRequest({
    method: API.TYPE,
    url: link,
  });
};
