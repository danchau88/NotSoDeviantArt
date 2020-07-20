import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {getAllComments, createComment} from './actions/comments_actions';
import { fetchAllComments, postComment } from './util/comments_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING COMMENTS REMOVE LATER
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createComment = createComment;
  window.getAllComments = getAllComments;
  window.postComment = postComment;
  window.fetchAllComments = fetchAllComments;

  ReactDOM.render(<Root store={store} />, root);

});
