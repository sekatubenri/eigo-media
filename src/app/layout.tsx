import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: { default: '英語学習ナビ | 英会話スクール・アプリ比較', template: '%s | 英語学習ナビ' },
  description: '英会話スクール・オンライン英会話・英語アプリを徹底比較。目的別・レベル別のおすすめ学習法を紹介。',
  verification: { google: 'XcyMImXtiMlMj5NBeiKQBcD_Vqrw3EDW0TDFBVTAtaA' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-blue-600 text-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight">📚 英語学習ナビ</a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/category/school" className="hover:text-blue-200">英会話スクール</a>
              <a href="/category/online" className="hover:text-blue-200">オンライン英会話</a>
              <a href="/category/app" className="hover:text-blue-200">英語アプリ</a>
              <a href="/category/beginner" className="hover:text-blue-200">英語入門</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center">
            <p>© 2025 英語学習ナビ | 英会話スクール・アプリ比較</p>
            <p className="mt-1 text-xs">※本サイトにはアフィリエイト広告が含まれます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
