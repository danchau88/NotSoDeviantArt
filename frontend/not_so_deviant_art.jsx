import React from "react";
import ReactDOM from "react-dom";
import {postUser, postSession, deleteSession} from "./util/session_api_util";
import {login, signup, logout} from './actions/session_actions';
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TEST START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TEST END

  ReactDOM.render(<Root store={store} />, root);

});

// TEST UTILS
window.postUser = postUser;
window.postSession = postSession;
window.deleteSession = deleteSession;
// TEST ACTIONS
window.login = login;
window.signup = signup;
window.logout = logout;

