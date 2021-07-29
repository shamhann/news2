const initialState = {
  contacts: [],
  contactsLoading: false,
  addNews: [],
  search: '',

  token: "",
  authorizing: false,
  error: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'auth/started':
      return {
        ...state,
        authorizing: true,
        error: false,
      }
    case 'auth/succeed':
      return {
        ...state,
        token: action.payload.token,
        authorizing: false
      }
    case 'auth/failed': {
      return {
        ...state,
        authorizing: false,
        error: true
      }
    }
    case 'comments/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'comments/load/success':
      return {
        ...state,
        addNews: [...state.addNews, action.payload],
        loading: false,
      };


    default:
      return state;
  }
}