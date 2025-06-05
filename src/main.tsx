import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import Provider from "./utils/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <StrictMode>
      <App />
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            error: "bg-red-500 flex gap-5 p-4 rounded-md",
            success: "bg-green-500 text-white flex gap-5 px-4 py-2 rounded-md",
            warning: "bg-yellow-500 text-white flex gap-5 px-4 py-2 rounded-md",
          },
        }}
      />
    </StrictMode>
  </Provider>
);
