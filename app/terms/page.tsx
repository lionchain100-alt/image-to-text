export default function Terms() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-4 text-gray-600">Last updated: {new Date().getFullYear()}</p>
      <p className="mb-4 text-gray-700">By using ImageToText, you agree to use the service for lawful purposes only. Do not upload images containing illegal content.</p>
      <h2 className="mb-2 mt-6 text-xl font-semibold">Disclaimer</h2>
      <p className="text-gray-700">This service is provided "as is" without warranty. OCR accuracy may vary depending on image quality.</p>
    </div>
  )
}
