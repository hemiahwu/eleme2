import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// const path = require("path");
import path from "path";
import fs from "fs";

// www.thenewstep.cn/frontend/vue/8000
// localhost:5173/
// https://vitejs.dev/config/
export default defineConfig({
  // base: "/frontend/vue/8001/",
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    open: true,
    // 潇洒哥GG
    https: {
      // 主要是下面两行的配置文件，不要忘记引入 fs 和 path 两个对象
      cert: fs.readFileSync(path.join(__dirname, "src/ssl/cert.crt")),
      key: fs.readFileSync(path.join(__dirname, "src/ssl/cert.key")),
    },
    proxy: {
      "/api": {
        target: "https://www.thenewstep.cn/backend/8000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
