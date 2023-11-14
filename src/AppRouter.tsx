import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Browse />,
  },
]);

console.log(router);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
