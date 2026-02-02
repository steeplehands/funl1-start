export function Footer() {
  return (
    <footer className="px-4 py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-white font-semibold text-lg mb-4">
            RIZO
          </p>
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} RIZO. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            RIZO is a managed automation service. Platform access is provided as part of service delivery. SMS and API fees may apply when messaging or AI agents are used.
          </p>
        </div>
      </div>
    </footer>
  );
}
