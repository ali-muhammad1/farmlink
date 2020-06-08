import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function SecureRoute({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  if (isAuthenticated) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return (
    <Route
      {...rest}
      render={(props) => (
        <Redirect
          to={{
            pathname: "/login",
            // state: { from: props.location }
          }}
        />
      )}
    />
  );
}
