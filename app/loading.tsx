export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Rings */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-amber-200 animate-ping" />
          <div className="absolute inset-0 rounded-full border-4 border-amber-400 animate-pulse" />
          <div className="absolute inset-4 rounded-full border-4 border-rose-300 animate-spin" 
               style={{ animationDuration: '2s' }} />
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-serif text-gray-800">Memuat Undangan...</h2>
          <p className="text-sm text-gray-600">Mohon tunggu sebentar</p>
          
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 pt-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}