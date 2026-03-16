export default function Privacy() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">Last updated: {new Date().getFullYear()}</p>
      <p className="mb-4 text-gray-700">
        ImageToText processes all images entirely within your browser using client-side OCR technology.
        <strong> No images or extracted text are ever uploaded to our servers.</strong>
      </p>
      <h2 className="mb-2 mt-6 text-xl font-semibold">Data We Collect</h2>
      <p className="text-gray-700">We use Cloudflare Web Analytics which collects anonymous, aggregated traffic data (page views, referrers). No cookies are used for tracking.</p>
      <h2 className="mb-2 mt-6 text-xl font-semibold">Contact</h2>
      <p className="text-gray-700">For questions, please open an issue on our GitHub repository.</p>
    </div>
  )
}
