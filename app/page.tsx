import OcrTool from '@/components/OcrTool'

const FEATURES = [
  {
    icon: '🔒',
    title: 'Privacy First',
    desc: 'Your images never leave your browser. All processing happens locally on your device.',
  },
  {
    icon: '⚡',
    title: 'Fast & Free',
    desc: 'No limits, no sign-up, no cost. Convert as many images as you want.',
  },
  {
    icon: '🌍',
    title: 'Multi-language',
    desc: 'Supports English, Chinese, Japanese, Korean, Spanish, French, German and more.',
  },
]

const FAQS = [
  {
    q: 'What is an image to text converter?',
    a: 'An image to text converter (OCR tool) extracts readable text from images like photos, screenshots, and scanned documents.',
  },
  {
    q: 'How does this tool work?',
    a: 'We use Tesseract.js, an open-source OCR engine that runs entirely in your browser. No data is sent to any server.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes, 100% free with no usage limits. No account required.',
  },
  {
    q: 'What image formats are supported?',
    a: 'JPG, PNG, WebP, BMP, and GIF. Maximum file size is 10MB.',
  },
  {
    q: 'How accurate is the OCR?',
    a: 'Accuracy depends on image quality. Clear, high-contrast images with standard fonts yield the best results.',
  },
  {
    q: 'Is my data safe?',
    a: 'Completely. Your images are processed locally in your browser and never uploaded to any server.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <span className="text-lg font-bold text-gray-900">ImageToText</span>
          </div>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/blog" className="hover:text-blue-600">Blog</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
            Image to Text Converter
          </h1>
          <p className="mb-4 text-lg text-gray-600">
            Extract text from any image instantly. Free &amp; online — no sign-up required.
          </p>
          <div className="flex justify-center gap-4 text-sm font-medium text-green-700">
            <span>✓ 100% Free</span>
            <span>✓ No Registration</span>
            <span>✓ Privacy Safe</span>
          </div>
        </div>

        {/* Tool */}
        <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <OcrTool />
        </div>

        {/* Features */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="mb-2 text-3xl">{f.icon}</div>
              <h3 className="mb-1 font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-1 font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ImageToText. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}
