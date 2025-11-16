import Spline from '@splinetool/react-spline'

export default function Hero({ onStartWriting }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-sky-200 to-orange-200 bg-clip-text text-transparent">
          Clean AI Blog
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80">
          Minimal, futuristic writing experience powered by AI vibes. Share insights, ideas, and experiments.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            className="pointer-events-auto inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
            onClick={onStartWriting}
          >
            Start writing
          </button>
          <a
            href="#posts"
            className="pointer-events-auto inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-gray-100 transition"
          >
            Read posts
          </a>
        </div>
      </div>
    </section>
  )
}
