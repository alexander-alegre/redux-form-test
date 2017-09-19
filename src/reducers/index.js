import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './PostsReducer';

const rootReducer = combineReducers({
  post: PostsReducer,
  form: formReducer
});

export default rootReducer;