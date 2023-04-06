import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Map } from "./Components/Map/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "map",
    element: <Map />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
