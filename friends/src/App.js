import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Login";
import Navigation from "./Navigation";

// ## Build the App!
// * Add a route for a login page and build out a simple login form

// * The login function should save the returned token to localStorage.
// You can setup `isLoading` state in your Login component,
// and show a spinner on your form or in your button while the login request is happening.
// * When the request returns, save the token to `localStorage`,
// then use the history object in your Login component to navigate your user to your FriendsList route
// * Create a `<PrivateRoute />` component to protect your other routes.
// It should check localStorage for a token, and redirect the user to your login route if there is not a token.
// * Create a protected route for your friends list. Remember,
// if the user isn't logged in, navigating to this protected route will redirect them to the login page.
// * In your FriendsList component, rendered with `<ProtectedRoute />`,
// you will create a list of your friends that you get from the API.

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
