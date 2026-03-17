import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Image to Text Converter — Free Online OCR Tool',
  description:
    'Convert any image to text for free. No sign-up required. Supports JPG, PNG, WebP. 100+ languages. Your files never leave your browser.',
  openGraph: {
    title: 'Image to Text Converter — Free Online OCR Tool',
    description: 'Extract text from images instantly. Free, private, no registration.',
    type: 'website',
    url: 'https://imagetotext.top',
    images: [
      {
        url: 'https://imagetotext.top/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Image to Text Converter — Free Online OCR Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to Text Converter — Free Online OCR Tool',
    description: 'Extract text from images instantly. Free, private, no registration.',
    images: ['https://imagetotext.top/og-image.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  )
}
