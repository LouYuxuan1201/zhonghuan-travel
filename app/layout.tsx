import type { Metadata } from 'next'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: '中环旅行社 | Zhonghuan Travel - 入境旅游专家',
  description: '中环旅行社专注于入境旅游，为海外游客提供江浙沪地区深度定制旅行服务。私人定制游、商务接待、特色主题路线，让您的江南之旅终身难忘。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
