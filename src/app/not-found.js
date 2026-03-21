export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
      <h1 className="text-8xl font-bold text-gray-900">404</h1>
      <p className="text-lg text-gray-400 font-light">Page not found</p>
      <a
        href="/"
        className="mt-4 px-5 py-2 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}