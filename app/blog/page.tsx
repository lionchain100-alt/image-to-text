export default function Blog() {
  const posts = [
    { slug: 'how-to-convert-image-to-text-free', title: 'How to Convert Image to Text for Free (2024)', date: '2024-03-01' },
    { slug: 'best-free-ocr-tools-online', title: 'Best Free OCR Tools Online — No Sign-up Required', date: '2024-03-05' },
    { slug: 'how-to-extract-text-from-screenshots', title: 'How to Extract Text from Screenshots', date: '2024-03-10' },
  ]
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="space-y-6">
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="block rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:ring-blue-400">
            <p className="mb-1 text-sm text-gray-500">{p.date}</p>
            <h2 className="font-semibold text-gray-900">{p.title}</h2>
          </a>
        ))}
      </div>
    </div>
  )
}
