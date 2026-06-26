'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"
                alt="Tea house in Jiangnan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <p className="text-lg text-text/80 leading-relaxed mb-6">
              {t('aboutText')}
            </p>
            <div className="flex gap-8 mt-10">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-text/60 mt-1">年经验</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-accent">500+</p>
                <p className="text-sm text-text/60 mt-1">客户好评</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-accent">50+</p>
                <p className="text-sm text-text/60 mt-1">精选路线</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
