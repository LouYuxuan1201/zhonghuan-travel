'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Compass, Briefcase, Map } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Compass,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
      features: ['service1Feature1', 'service1Feature2', 'service1Feature3'],
    },
    {
      icon: Briefcase,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
      features: ['service2Feature1', 'service2Feature2', 'service2Feature3'],
    },
    {
      icon: Map,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
      features: ['service3Feature1', 'service3Feature2', 'service3Feature3'],
    },
  ]

  return (
    <section id="services" className="py-24 bg-background relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-4">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="font-display text-lg text-text/60 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl p-8 border border-light hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                {t(service.titleKey)}
              </h3>

              <p className="text-text/65 leading-relaxed mb-6">
                {t(service.descKey)}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((featureKey, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 bg-light/50 text-text/60 text-xs rounded-full"
                  >
                    {t(featureKey)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}