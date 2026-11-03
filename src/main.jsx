import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LanguageProvider } from "./LanguageContext";
import { SettingsProvider } from "./SettingsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);