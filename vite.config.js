import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quiz_app_react-tailwind/",
  plugins: [react()],
  server: {
    open: true,
  },
});
