import Image from "next/image"
import Link from "next/link"
import { Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CookieConsent } from "./cookie-consent"

export default function ConferencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/placeholder.svg" alt="ICLT 2025" width={120} height={60} className="h-[60px] w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-white">
            <Link href="#" className="hover:text-gray-200">
              ホーム
            </Link>
            <Link href="#" className="hover:text-gray-200">
              ICLTについて
            </Link>
            <Link href="#" className="hover:text-gray-200">
              委員会
            </Link>
            <Link href="#" className="hover:text-gray-200">
              登録・投稿
            </Link>
            <Link href="#" className="hover:text-gray-200">
              MORE ▼
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <div className="relative h-screen">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EXTUPWVPRWV9GuWMLp41Oq0IHIzKDi.png"
            alt="東京の夕景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                The 15th International Conference on Logistics & Transport 2025
              </h1>
            </div>
          </div>
        </div>

        <section className="py-20 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center text-gray-600 mb-16">
            フィジカルインターネット - 物流の新境地
          </h2>

          <div className="text-center mb-16">
            <h3 className="text-2xl text-gray-600 mb-8">東京 - 日本 - 2025年11月</h3>
            <p className="max-w-3xl mx-auto text-gray-600">
              今年のテーマは「サプライチェーンマネジメント：再考 - フィジカルインターネットによる接続性の実現」です。
              投稿された要旨と論文は二重ブラインド査読され、最優秀論文は国際物流研究応用ジャーナルへの掲載が検討されます。
            </p>
          </div>

          <div className="text-center mb-16">
            <h4 className="text-xl mb-4">ICLT2024-論文募集要項 (jpg)</h4>
            <Button variant="secondary" className="bg-gray-600 text-white hover:bg-gray-700">
              ダウンロード
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h5 className="font-semibold mb-4">調達・供給管理</h5>
              <ul className="space-y-2 text-gray-600">
                <li>生産計画と予測</li>
                <li>在庫管理</li>
                <li>倉庫管理</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h5 className="font-semibold mb-4">輸送システム</h5>
              <ul className="space-y-2 text-gray-600">
                <li>マルチモーダル輸送</li>
                <li>シンクロモーダル輸送</li>
                <li>都市物流</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h5 className="font-semibold mb-4">革新技術</h5>
              <ul className="space-y-2 text-gray-600">
                <li>サプライチェーンの破壊的技術</li>
                <li>意思決定システム</li>
                <li>スマートロジスティクス</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-gray-600 mb-8">お問い合わせ</h2>
            <div className="flex justify-center">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">ICLT2024 | ソウル | 韓国</p>
          <p>Copyright © ICLT 2024 - All Rights Reserved.</p>
        </div>
      </footer>

      <CookieConsent />
    </div>
  )
}

