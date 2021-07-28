const initialState = {
  contacts: [],
  contactsLoading: false,

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

    default:
      return state;
  }
}