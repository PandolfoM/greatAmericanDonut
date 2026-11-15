import { Outlet } from "react-router";

// Wraps every page. The page's <head> (title, description, icon) is static,
// in index.html.
export default function RootLayout() {
  return <Outlet />;
}
