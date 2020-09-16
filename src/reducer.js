import { RECEIVED_STATUS, STATUS_OK, STATUS_OUTAGE } from './actions';

const reducer = (state, action) => {
  const { type, apiName, status } = action;

  switch (type) {
    case RECEIVED_STATUS:
      return {
        ...state,
        apis: {
          ...state?.apis,
          [apiName]: {
            ...status,
          },
        },
      };

    case STATUS_OK:
      return {
        ...state,
        outages: state.outages.filter((outage) => outage !== apiName),
      };

    case STATUS_OUTAGE:
      return {
        ...state,
        outages: [...state.outages, apiName],
      };

    default:
      throw new Error();
  }
};

export const updateStatus = (dispatch, status) => {};

export default reducer;
