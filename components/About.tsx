'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Globe2, Sparkles } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Award, number: '15+', label: 'Years of Excellence', labelZh: '年行业深耕' },
    { icon: Users, number: '8,000+', label: 'Satisfied Guests', labelZh: '服务宾客' },
    { icon: Globe2, number: '50+', label: 'Curated Routes', labelZh: '精品路线' },
    { icon: Sparkles, number: '98%', label: 'Five-Star Reviews', labelZh: '五星好评' },
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
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200"
                alt="Jiangnan scenery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <p className="font-serif text-4xl font-bold text-accent">15+</p>
              <p className="text-sm text-text/70">年专业经验</p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">关于才那旅行</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              您的江南之旅<br />
              <span className="text-accent">值得托付于行家</span>
            </h2>

            <div className="w-20 h-1 bg-accent mb-8" />

            <p className="text-lg text-text/80 leading-relaxed mb-6">
              才那旅行，汇聚十五载入境旅游精华，致力于为全球旅人呈现最纯正的江南风韵。我们拥有资深旅行策划团队、专属导游网络与完善的服务体系，让每一位远道而来的客人，都能感受到宾至如归的体验。
            </p>

            <p className="text-lg text-text/80 leading-relaxed mb-10">
              从西湖的潋滟水光到外滩的璀璨夜色，从乌镇的小桥流水到苏州园林的精巧雅致——我们以专业与热忱，为您精心打磨每一段旅程，让江南之行，成为一生铭记的美好回忆。
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
                  <p className="text-xs text-text/60">{stat.labelZh} / {stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
