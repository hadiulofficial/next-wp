import Link from "next/link";
import MainHeader from "../../components/layout/main-header";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
    console.log(post.title.rendered);
    return (
        <>
            <MainHeader postTitle={post.title.rendered} />
            <button><Link href="/">Back to Home</Link></button>
            <article class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                            
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {

    const paths = await getSlugs("posts");

    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: 'blocking'
    }

}

//access the router, get the id, and get the data for that post

export async function getStaticProps({ params }) {

    const post = await getPost(params.slug);

    return {
        props: {
            post
        },
        revalidate: 10, // In seconds
    }

}

