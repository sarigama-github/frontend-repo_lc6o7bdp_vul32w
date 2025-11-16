import { useEffect, useState } from 'react'
import PostCard from './PostCard'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/posts`)
        if (!res.ok) throw new Error('Failed to load posts')
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <section id="posts" className="bg-black text-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-white/70">Loading posts...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="posts" className="bg-black text-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-red-400">{error}</div>
        </div>
      </section>
    )
  }

  return (
    <section id="posts" className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest posts</h2>
        </div>
        {posts.length === 0 ? (
          <p className="text-white/60">No posts yet. Be the first to write one.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <PostCard key={p.id || p._id} post={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
