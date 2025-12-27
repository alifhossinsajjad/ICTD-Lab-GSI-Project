import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">

      {/* GIF */}
      <img
        src="/not-found.svg"
        alt="Page Not Found"
        className="w-72 max-w-full mb-6"
      />

      {/* Error Code */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Page Not Found
      </h1>

      {/* Message */}
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      {/* Optional error info (for dev) */}
      {error?.status && (
        <p className="text-sm text-gray-400 mb-4">
          Error Code: {error.status}
        </p>
      )}

      {/* Back Home */}
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default ErrorPage;
