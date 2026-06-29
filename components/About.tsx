'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Globe2, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const { language, t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Award, number: '15+', labelKey: 'stat1Label' },
    { icon: Users, number: '8,000+', labelKey: 'stat2Label' },
    { icon: Globe2, number: '100+', labelKey: 'stat3Label' },
    { icon: Sparkles, number: '99.7%', labelKey: 'stat4Label' },
  ]

  return (
    <section id="about" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/西湖.jpg"
                alt="West Lake scenery"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{t('aboutBadge')}</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight whitespace-pre-line">
              {t('aboutTitle')}
            </h2>

            <div className="w-20 h-1 bg-accent mb-8" />

            <p className="text-lg text-text/80 leading-relaxed mb-6">
              {t('aboutText1')}
            </p>

            <p className="text-lg text-text/80 leading-relaxed mb-10">
              {t('aboutText2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-light rounded-xl p-4"
                >
                  <stat.icon className="w-6 h-6 text-accent mb-2" />
                  <p className="font-serif text-2xl font-bold text-primary">{stat.number}</p>
                  <p className="text-xs text-text/60">{t(stat.labelKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}