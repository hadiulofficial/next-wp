const BASE_URL = 'https://nextwp.hadiul-islam.me/wp-json/wp/v2'

export async function  getPosts() {
    const postsRes =  await fetch(BASE_URL + "/posts")
    const posts = await postsRes.json()
    return posts
}