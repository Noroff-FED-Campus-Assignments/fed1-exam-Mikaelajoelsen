/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // ADD YOUR PAGES HERE
        contact: resolve(__dirname, "contact.html"),
        blog: resolve(__dirname, "blog.html"),
        details: resolve(__dirname, "details.html"),
        about: resolve(__dirname, "about.html"),
        index: resolve(__dirname, "index.html"),
      },
    },
  },
});
