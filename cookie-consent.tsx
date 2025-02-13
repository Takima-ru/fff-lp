"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-gray-600 text-white p-6 rounded-lg shadow-lg">
      <p className="text-sm mb-4">
        このウェブサイトはCookieを使用しています。
        ウェブサイトのトラフィックを分析し、エクスペリエンスを最適化するためにCookieを使用しています。
        承認することで、あなたのデータは他のユーザーデータと集計されます。
      </p>
      <Button onClick={() => setIsVisible(false)} className="w-full bg-white text-gray-600 hover:bg-gray-100">
        承認する
      </Button>
    </div>
  )
}

