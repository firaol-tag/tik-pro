import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
