export async function getBlogData() {
    const res = await fetch("https://69b02df6c63dd197febb9111.mockapi.io/blogpost")
    const data = await res.json()
    return data;
}

