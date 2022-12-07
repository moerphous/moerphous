import { SET_NFTS } from "../../constants/ActionTypes";

const initialState = {
  nfts: [],
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NFTS: {
      return { ...state, nfts: action.payload };
    }
    default:
      return state;
  }
};

export default authorsReducer;
