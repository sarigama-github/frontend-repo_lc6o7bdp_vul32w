import { useRef } from 'react'
import Hero from './components/Hero'
import Posts from './components/Posts'

function App() {
  const postsRef = useRef(null)

  const scrollToPosts = () => {
    const el = document.getElementById('posts')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onStartWriting={scrollToPosts} />
      <Posts ref={postsRef} />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-white/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Clean AI Blog</p>
          <a href="/test" className="hover:text-white/80">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
