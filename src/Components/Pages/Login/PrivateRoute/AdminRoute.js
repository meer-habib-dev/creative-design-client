import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";
// import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, loading } = useAuth();
  if (loading) {
    return <Spinner />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default AdminRoute;
