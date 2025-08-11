export default function Home() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="max-w-lg p-8 rounded-2xl shadow-lg bg-white">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Github Pages with Next.js and Tailwind CSS
          </h1>
          <p className="text-gray-600">
            This is a simple static page built with Next.js and styled with Tailwind CSS.
            For testing github pages deployment.
          </p>
        </div>
      </div>
  );
}
