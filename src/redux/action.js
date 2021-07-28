export const loadLogin = (login,password) => (dispatch) => {
  dispatch({
    type: 'auth/started'
  })
  fetch('http://localhost:3000/admin')
    .then(response => response.json())
    .then((json) => {
      const random = Math.random();

      if (random < 0.5) {
        dispatch({
          type: 'auth/failed',
          payload: json
        })
      } else {
        dispatch({
          type: 'auth/succeed',
          payload: json
        })
      }
    })
}