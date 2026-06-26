'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: t('navServices') },
    { href: '#destinations', label: t('navDestinations') },
    { href: '#about', label: t('navAbout') },
    { href: '#contact', label: t('navContact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className={`font-serif text-xl font-semibold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                中环旅行社
              </span>
              <span className={`font-display text-sm tracking-wider ${isScrolled ? 'text-accent' : 'text-secondary'}`}>
                ZHONGHUAN
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-text' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:border-accent ${
                isScrolled
                  ? 'border-primary text-primary hover:bg-accent hover:text-white hover:border-accent'
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8618072940737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-text font-medium hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t">
              <button
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="px-3 py-1.5 rounded-full text-sm font-medium border border-primary text-primary"
              >
                {language === 'zh' ? 'EN' : '中'}
              </button>
              <a
                href="https://wa.me/8618072940737"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
