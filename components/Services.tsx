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
      title: t('service1Title'),
      description: t('service1Desc'),
      features: ['专属行程规划', '24小时管家服务', '高端专车接送'],
    },
    {
      icon: Briefcase,
      title: t('service2Title'),
      description: t('service2Desc'),
      features: ['VIP商务接待', '行程无缝衔接', '多语言服务'],
    },
    {
      icon: Map,
      title: t('service3Title'),
      description: t('service3Desc'),
      features: ['水乡古镇探秘', '茶文化体验', '非遗文化之旅'],
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
                {service.title}
              </h3>

              <p className="text-text/65 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 bg-light/50 text-text/60 text-xs rounded-full"
                  >
                    {feature}
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
