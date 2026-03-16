'use client'

import { useState, useCallback, useRef } from 'react'
import { createWorker } from 'tesseract.js'

const LANGUAGES = [
  { value: 'eng', label: 'English' },
  { value: 'chi_sim', label: 'Chinese (Simplified)' },
  { value: 'chi_tra', label: 'Chinese (Traditional)' },
  { value: 'jpn', label: 'Japanese' },
  { value: 'kor', label: 'Korean' },
  { value: 'spa', label: 'Spanish' },
  { value: 'fra', label: 'French' },
  { value: 'deu', label: 'German' },
]

export default function OcrTool() {
  const [image, setImage] = useState<string | null>(null)
  const [text, setText] = useState('')
  const [lang, setLang] = useState('eng')
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const processFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file (JPG, PNG, WebP, etc.)')
        return
      }
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be under 10MB.')
        return
      }
      setError('')
      setText('')
      setProgress(0)
      const url = URL.createObjectURL(file)
      setImage(url)
      setLoading(true)
      try {
        const worker = await createWorker(lang, 1, {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              setProgress(Math.round(m.progress * 100))
            }
          },
        })
        const { data } = await worker.recognize(file)
        setText(data.text)
        await worker.terminate()
      } catch {
        setError('OCR failed. Please try another image.')
      } finally {
        setLoading(false)
        setProgress(0)
      }
    },
    [lang]
  )

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (file) processFile(file)
    },
    [processFile]
  )

  const onPaste = useCallback(
    (e: React.ClipboardEvent) => {
      const item = Array.from(e.clipboardData.items).find((i) =>
        i.type.startsWith('image/')
      )
      if (item) processFile(item.getAsFile()!)
    },
    [processFile]
  )

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) processFile(file)
  }

  const copyText = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadText = () => {
    const blob = new Blob([text], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'extracted-text.txt'
    a.click()
  }

  const clear = () => {
    setImage(null)
    setText('')
    setError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
  const charCount = text.length

  return (
    <div onPaste={onPaste} tabIndex={0} className="outline-none">
      {/* Language selector */}
      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Language:</label>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {LANGUAGES.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      {/* Upload area */}
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => fileInputRef.current?.click()}
        className="mb-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-12 transition hover:border-blue-500 hover:bg-blue-100"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
        {image ? (
          <img src={image} alt="preview" className="max-h-48 rounded-lg object-contain shadow" />
        ) : (
          <>
            <svg className="mb-3 h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-base font-medium text-blue-600">Drop image here, click to upload, or paste (Ctrl+V)</p>
            <p className="mt-1 text-sm text-gray-500">JPG, PNG, WebP, BMP, GIF — max 10MB</p>
          </>
        )}
      </div>

      {/* Progress */}
      {loading && (
        <div className="mb-4">
          <div className="mb-1 flex justify-between text-sm text-gray-600">
            <span>Recognizing text...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      {/* Result */}
      {text && (
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-500">{charCount} chars · {wordCount} words</span>
            <div className="flex gap-2">
              <button onClick={copyText} className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
                {copied ? '✓ Copied!' : 'Copy Text'}
              </button>
              <button onClick={downloadText} className="rounded-lg border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">
                Download .txt
              </button>
              <button onClick={clear} className="rounded-lg border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">
                Clear
              </button>
            </div>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-4 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={10}
          />
        </div>
      )}
    </div>
  )
}
