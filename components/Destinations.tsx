'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const destinations = [
  {
    name: '西湖',
    nameEn: 'West Lake',
    image: 'https://images.unsplash.com/photo-1598887142487-3c854d51eabb?q=80&w=800',
    description: '杭州',
  },
  {
    name: '乌镇',
    nameEn: 'Wuzhen',
    image: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?q=80&w=800',
    description: '桐乡',
  },
  {
    name: '周庄',
    nameEn: 'Zhouzhuang',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=800',
    description: '苏州',
  },
  {
    name: '外滩',
    nameEn: 'The Bund',
    image: 'https://images.unsplash.com/photo-1523702425897-8af0263b39d6?q=80&w=800',
    description: '上海',
  },
  {
    name: '拙政园',
    nameEn: 'Humble Administrator Garden',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800',
    description: '苏州',
  },
  {
    name: '灵山小镇',
    nameEn: 'Lingshan Town',
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=800',
    description: '无锡',
  },
]

export default function Destinations() {
  const { language, t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="destinations" className="py-24 bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('destinationsTitle')}
          </h2>
          <p className="font-display text-lg text-text/70">
            {t('destinationsSubtitle')}
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-secondary/80 text-sm mb-1">{dest.description}</p>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {language === 'zh' ? dest.name : dest.nameEn}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
