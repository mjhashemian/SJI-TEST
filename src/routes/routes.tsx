import { RouteObject } from 'react-router';
import ProtectedLayout from '../components/layout/ProtectedLayout';
import Categotry from '../pages/category';
import SignInForm from '../auth/signIn';
import SignUpForm from '../auth/SignUp';
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: 'category',
        index: true,
        element: <Categotry />,
      },
    ],
  },
  {
    path: 'sign-in',
    element: <SignInForm />,
  },
  {
    path: 'sign-up',
    element: <SignUpForm />,
  },
];
