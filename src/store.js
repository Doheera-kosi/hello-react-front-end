import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  greeting: '',
};

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/messages/random_greeting');
  const data = await response.json();
  dispatch(setGreeting(data.greeting));
};

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  greeting,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return { ...state, greeting: action.greeting };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);
