// Actions.js
export const getDetails = (data) => {
  console.log("action");
  return {
    type: 'GET_DETAILS',
    payload: data,
  };
};
