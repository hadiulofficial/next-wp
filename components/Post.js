import Link from "next/link";
import Image from "next/image";

export default function Post({post}) {
  return (
    <div>
        <h1>{post.title.rendered}</h1>
        <div className="card-text" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
    </div>
  )
}
