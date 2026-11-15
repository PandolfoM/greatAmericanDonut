import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// A single-page app in dist/, served from S3 + CloudFront by MJP Hub: every
// path gets index.html and the router takes it from there.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // "@/…" imports, from tsconfig.json.
  resolve: { tsconfigPaths: true },
  server: { port: 3000 },
});
