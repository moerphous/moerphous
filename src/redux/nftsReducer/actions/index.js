import { SET_NFTS } from "../../../constants/ActionTypes";

export const setNfts = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_NFTS,
      payload: data,
    });
  };
};
