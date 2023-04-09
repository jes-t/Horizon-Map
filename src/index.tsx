import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/reset.scss";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
