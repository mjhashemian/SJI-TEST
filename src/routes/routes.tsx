import { RouteObject } from "react-router";
import ProtectedLayout from "../components/layout/ProtectedLayout"
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path : "category" ,
        index: true,
        // element: <DashboardPage />,
      },
    ],
  },
];
