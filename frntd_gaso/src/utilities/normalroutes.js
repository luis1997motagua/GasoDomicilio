import React from 'react';
import { Route } from 'react-router-dom';

export default (props) => {
  const { component: MyCustomComponent, auth, ...rest } = props;
  return (
    <Route
      {...rest}
      component={
        (props) => {
          return (
                <MyCustomComponent {...props} auth={auth} />
          )
        }
      }
    />
  )
}
