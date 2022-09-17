const GET_MESSAGE = 'GET_MESSAGE';
const url = 'http://127.0.0.1:3001/greetings';

const initialState = {
  greeting: 'Activate the Backend API to get a greeting message',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
};

const getMessage = (message) => ({
  type: GET_MESSAGE,
  payload: message,
});

export const fetchMessage = (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => {
    dispatch(getMessage(json));
  })
  .catch((error) => console.log(error));
