import { PostEntity } from '../../types/post';
import { DefaultAction } from '../actions/index';
import { PostAction } from '../actions/post';
import * as actionTypes from '../actions/actionTypes';

export type PostState = {
  posts: PostEntity[];
  post: PostEntity | null;
};

const initialState: PostState = {
  posts: [],
  post: null,
};

const postReducer = (state: PostState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
        post: action.post,
      };
    default:
      return state;
  }
};

export default postReducer;
