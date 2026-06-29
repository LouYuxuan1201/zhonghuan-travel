'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_hfa4k49'
const TEMPLATE_CUSTOMER = 'template_oknz4fh'  // 自动回复给客户
const TEMPLATE_ADMIN = 'template_uux5ynz'      // 发给管理员（甲方）
const USER_ID = '8uz2xQhNmrl6pKliG'

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget

    try {
      // 1. 发给客户（自动回复）
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_CUSTOMER,
        form,
        USER_ID
      )

      // 2. 发给甲方（客户留言详情）
      const adminData = {
        name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
        email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
        contact: (form.elements.namedItem('contact') as HTMLInputElement)?.value || '',
        message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ADMIN,
        adminData,
        USER_ID
      )

      setSubmitted(true)
      form.reset()
    } catch {
      setError('发送失败，请稍后重试或使用 WhatsApp 联系')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            {t('contactTitle')}
          </h2>
          <p className="font-display text-sm text-secondary/70">
            {t('contactSubtitle')}
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <p className="text-lg text-text font-medium">{t('formSuccess')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      {t('formName')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder={t('formName')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      {t('formEmail')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder={t('formEmail')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    {t('formContact')}
                  </label>
                  <input
                    type="text"
                    name="contact"
                    className="w-full px-4 py-3 rounded-lg border border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    placeholder="WhatsApp / WeChat"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    {t('formMessage')} <span className="text-text/40">(选填)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-light focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-sm"
                    placeholder={t('formMessage')}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('formSubmit')}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-secondary/80 text-sm mb-5">
                +86 180 7294 0737
              </p>
              <a
                href="https://wa.me/8618072940737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}