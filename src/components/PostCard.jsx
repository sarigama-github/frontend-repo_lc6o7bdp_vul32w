export default function PostCard({ post }) {
  const date = post.created_at ? new Date(post.created_at).toLocaleDateString() : ''
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition backdrop-blur-sm">
      {post.cover_image && (
        <img src={post.cover_image} alt="cover" className="mb-4 h-40 w-full rounded-xl object-cover" />
      )}
      <div className="flex items-center gap-2 text-xs text-white/60">
        {date && <span>{date}</span>}
        {post.tags && post.tags.length > 0 && (
          <span>• {post.tags.join(', ')}</span>
        )}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
      {post.summary && <p className="mt-1 text-sm text-white/70 line-clamp-3">{post.summary}</p>}
    </article>
  )
}
