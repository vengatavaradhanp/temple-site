import { parseJSON, checkStatus } from '../utils/utils';

export default function callFetch(url: string, option: object) {
        return fetch(url, option)
          .then(checkStatus)
          .then(parseJSON);
      }


