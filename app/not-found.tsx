import { useEffect } from "react";
import { Link } from "react-router";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Page Not Found | Great American Donut";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="h-dvh flex flex-col justify-center items-center gap-5">
      <h2 className="font-bold text-2xl">Page Not Found</h2>
      <p className="text-sm">Could not find requested page</p>
      <Link
        to="/"
        className="bg-black text-white text-center py-3 px-6 rounded-sm font-bold">
        Return Home
      </Link>
    </div>
  );
}
