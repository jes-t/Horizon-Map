import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "app/styles/reset.scss";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>
);
