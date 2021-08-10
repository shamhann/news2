const initialState = {
  contacts: [],
  contactsLoading: false,
  addNews: [],

  token: localStorage.getItem('auth-token'),
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
        contactsLoading: true,
      };
    case 'comments/load/success':
      return {
        ...state,
        addNews: [...state.addNews, action.payload],
        contactsLoading: false,
      };
    case 'auth/logout':
      return {
        ...state,
        token: null
      }
    case 'delete/start':
      return {
        ...state,
        contactsLoading: true
      }
    case 'deleted/news':
      return {
        ...state,
        addNews: state.addNews.filter((deleted) => {
          if (deleted.id === action.payload) {
            return false
          }
        }),
        contactsLoading: false,
      }


    default:
      return state;
  }
}