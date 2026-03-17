export default function Blog() {
  const posts = [
    {
      slug: 'how-to-convert-image-to-text-free',
      title: 'How to Convert Image to Text for Free (2026 Complete Guide)',
      date: '2026-03-17',
      desc: 'Everything you need to know about OCR — how it works, tips for best accuracy, and supported languages.',
    },
    {
      slug: 'how-to-extract-text-from-screenshot',
      title: 'How to Extract Text from a Screenshot (Free, No Software)',
      date: '2026-03-17',
      desc: 'Got a screenshot with text you need to copy? Here\'s the fastest free way to extract it.',
    },
    {
      slug: 'best-free-ocr-tools-for-students',
      title: 'Best Free OCR Tools for Students in 2026',
      date: '2026-03-17',
      desc: 'Digitize textbooks, lecture photos, and scanned papers instantly. A practical guide for students.',
    },
    {
      slug: 'how-to-convert-image-to-text-on-phone',
      title: 'How to Convert Image to Text on Your Phone (iOS & Android)',
      date: '2026-03-17',
      desc: 'Extract text from images on iPhone or Android — no app download required.',
    },
  ]

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold">Blog</h1>
      <p className="mb-10 text-gray-500">Guides, tips, and tutorials on OCR and image-to-text conversion.</p>
      <div className="space-y-6">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:ring-blue-400 transition"
          >
            <p className="mb-1 text-sm text-gray-400">{p.date}</p>
            <h2 className="mb-1 font-semibold text-gray-900">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
