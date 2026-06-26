'use client'

import { useLanguage } from '@/context/LanguageContext'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-white">
                中环旅行社
              </span>
              <span className="font-display text-sm tracking-wider text-secondary">
                ZHONGHUAN TRAVEL
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="https://wa.me/8618072940737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>+86 180 7294 0737</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/50 text-sm">
              © 2024 Zhonghuan Travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
