export const loadLogin = (login,password) => (dispatch) => {
  dispatch({
    type: 'auth/started'
  })
  fetch('http://localhost:3004/admin')
    .then(response => response.json())
    .then((json) => {
      const random = Math.random();

      if (random < 0.5) {
        dispatch({
          type: 'auth/failed',
          payload: json
        })
      } else {
        localStorage.setItem('auth-token',json.token)
        dispatch({
          type: 'auth/succeed',
          payload: json
        })
      }
    })
}
export const loadComment = ( name, text) => {
  return (dispatch) => {
    dispatch({
      type: 'comments/load/start',
    });
    fetch('http://localhost:3004/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        text: text,
        date: new Date().toLocaleString(),
      }),
      headers: {
        'Content-type': 'application/json;',
      },
    }).then(() => {
      dispatch({
        type: 'comments/load/success',
        payload: {
          name: name,
          text: text,
          date: new Date().toLocaleString(),
        },
      });
    });
  };
};
export const logoutStart =() => {
  localStorage.removeItem('auth-token')

  return{
    type: 'auth/logout'
  }
}
export const removeNews = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'deleted/start',
    });
    fetch(`http://localhost:3004/admin${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: 'deleted/news'
        })
      })
  }
}