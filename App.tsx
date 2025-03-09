import { Routes } from './components/routes';
import { RoutesAuth } from './components/routesAuth';
import { Login } from './components/screens/login';

export default function App() {
  const isUserAuthenticated = true;

  return (
    isUserAuthenticated ?
      <RoutesAuth/>
    :
      <Routes/>
  );
}
