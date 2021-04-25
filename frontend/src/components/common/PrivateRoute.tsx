import { useEffect, FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, RouteProps } from 'react-router-dom';
import { useAuthStore } from '../../StoreProvider';
import LoadUser from './LoadUser';

interface PrivateRouteProps {
  exact?: boolean;
  path: RouteProps['path'];
  component: React.ElementType;
  children?: FunctionComponent;
}

const PrivateRoute = observer((props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const { authState, validateLogin } = useAuthStore();
  const { isAuthenticated } = authState;

  // Constantly verify auth token
  useEffect(() => {
    validateLogin();
  });

  // If user is authenticated, load privateRoute component
  // If not, try to authenticate via localStorage token
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? <Component props={routeProps} /> : <LoadUser />
      }
    />
  );
});

export default PrivateRoute;
