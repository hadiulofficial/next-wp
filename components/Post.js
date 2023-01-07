import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post-preview">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="post-title">{post.title.rendered}</h2>
        <div className="post-subtitle" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
      </Link>
    </div>
  )
}
