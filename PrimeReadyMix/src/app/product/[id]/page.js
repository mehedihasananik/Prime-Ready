export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.id
    const product = await fetch(`https://readymix-server.vercel.app/api/posts/${id}`).then((res) => res.json())
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.title,
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}

export default function Page({ params, searchParams }) { }