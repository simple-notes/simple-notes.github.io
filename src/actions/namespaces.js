import { namespaces } from '../services/library';

export const GET_NAMESPACES = 'GET_NAMESPACES';

export const getNamespaces = () => {
  return {
    type: GET_NAMESPACES,
    payload: {
      namespaces
    }
  };
};
