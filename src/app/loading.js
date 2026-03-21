export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
      <p className="text-sm font-light text-gray-400 tracking-wide">Loading…</p>
    </div>
  );
}