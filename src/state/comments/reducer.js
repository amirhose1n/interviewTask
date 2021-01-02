import { SET_COMMENTS , SET_COMMENTS_LOADING } from './actions';

const initialState = {
    comments : [] ,
    loading : false
};

function Reducer(state = initialState, action) {
    switch (action.type) {
      case SET_COMMENTS_LOADING : {
        return { ...state , loading : action.value }
      }
      case SET_COMMENTS :
        return { ...state , comments : action.value };
      default:
        return state
    }
  }

  export default Reducer;