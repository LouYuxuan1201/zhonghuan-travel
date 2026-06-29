'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const content = {
  zh: {
    navServices: '服务项目',
    navDestinations: '目的地',
    navAbout: '关于我们',
    navContact: '联系我们',
    heroTitle: '江南如画\n定制之旅',
    heroSubtitle: '深度探索江浙沪的每一处风景',
    heroCTA: '立即咨询',
    heroBadge: '专注入境旅游 · 江浙沪地区地接服务',
    exploreMore: '探索更多',
    servicesTitle: '服务项目',
    servicesSubtitle: '为您量身打造专属旅行体验',
    service1Title: '私人定制游',
    service1Desc: '根据您的兴趣与节奏，量身打造专属行程，让每一次旅行都独一无二',
    service1Feature1: '专属行程规划',
    service1Feature2: '24小时管家服务',
    service1Feature3: '高端专车接送',
    service2Title: '商务接待服务',
    service2Desc: '高端商务接送，行程安排贴心周到，为商务旅客提供无忧体验',
    service2Feature1: 'VIP商务接待',
    service2Feature2: '行程无缝衔接',
    service2Feature3: '多语言服务',
    service3Title: '特色主题路线',
    service3Desc: '水乡古镇、茶文化、非遗体验等深度游，探索江南文化的精髓',
    service3Feature1: '水乡古镇探秘',
    service3Feature2: '茶文化体验',
    service3Feature3: '非遗文化之旅',
    destinationsTitle: '目的地',
    destinationsSubtitle: '江浙沪热门景点推荐',
    aboutBadge: '关于中环旅行',
    aboutTitle: '您的江南之旅\n值得托付于行家',
    aboutText1: '中环旅行，汇聚十五载入境旅游精华，致力于为全球旅人呈现最纯正的江南风韵。我们拥有资深旅行策划团队、专属导游网络与完善的服务体系，让每一位远道而来的客人，都能感受到宾至如归的体验。',
    aboutText2: '从西湖的潋滟水光到外滩的璀璨夜色，从乌镇的小桥流水到苏州园林的精巧雅致——我们以专业与热忱，为您精心打磨每一段旅程，让江南之行，成为一生铭记的美好回忆。',
    stat1Label: '年行业深耕',
    stat2Label: '服务宾客',
    stat3Label: '精品路线',
    stat4Label: '五星好评',
    contactTitle: '联系我们',
    contactSubtitle: '您的留言将在24小时内收到回复',
    formName: '姓名',
    formEmail: '邮箱',
    formContact: 'WhatsApp / 微信',
    formMessage: '留言内容',
    formSubmit: '发送消息',
    formSuccess: '消息已发送！我们会尽快联系您。',
    formError: '发送失败，请稍后重试。',
    footerContact: '联系方式',
    footerWhatsApp: 'WhatsApp: +86 180 7294 0737',
    dest1City: '杭州',
    dest2City: '桐乡',
    dest3City: '苏州',
    dest4City: '上海',
    dest5City: '苏州',
    dest6City: '杭州',
  },
  en: {
    navServices: 'Services',
    navDestinations: 'Destinations',
    navAbout: 'About',
    navContact: 'Contact',
    heroTitle: 'Jiangnan Like a Painting\nTailored Journey',
    heroSubtitle: 'Deep exploration of every scenic spot in Jiangsu, Zhejiang and Shanghai',
    heroCTA: 'Contact Us Now',
    heroBadge: 'Dedicated Inbound Tourism · Jiangsu-Zhejiang-Shanghai Region',
    exploreMore: 'Explore More',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Tailored travel experiences exclusively for you',
    service1Title: 'Private Custom Tours',
    service1Desc: 'Personalized itineraries based on your interests and pace, making every trip unique',
    service1Feature1: 'Customized Itineraries',
    service1Feature2: '24/7 Concierge Service',
    service1Feature3: 'Premium Car Service',
    service2Title: 'Business Reception',
    service2Desc: 'Premium business transfers and thoughtful travel arrangements for hassle-free business travel',
    service2Feature1: 'VIP Business Reception',
    service2Feature2: 'Seamless Itinerary',
    service2Feature3: 'Multi-language Service',
    service3Title: 'Special Theme Routes',
    service3Desc: 'Water towns, tea culture, intangible heritage experiences and more - exploring the essence of Jiangnan culture',
    service3Feature1: 'Water Town Exploration',
    service3Feature2: 'Tea Culture Experience',
    service3Feature3: 'Intangible Heritage Tour',
    destinationsTitle: 'Destinations',
    destinationsSubtitle: 'Popular attractions in Jiangsu, Zhejiang & Shanghai',
    aboutBadge: 'About Zhonghuan Travel',
    aboutTitle: 'Your Jiangnan Journey\nDeserves Expert Care',
    aboutText1: 'Zhonghuan Travel brings 15 years of inbound tourism excellence, dedicated to presenting the most authentic Jiangnan charm to global travelers. With our experienced travel planning team, exclusive guide network, and comprehensive service system, every guest feels at home.',
    aboutText2: 'From the shimmering waters of West Lake to the brilliant nights of The Bund, from the bridges and streams of Wuzhen to the exquisite gardens of Suzhou — we craft every journey with professionalism and passion, making your Jiangnan trip an unforgettable memory.',
    stat1Label: 'Years of Excellence',
    stat2Label: 'Satisfied Guests',
    stat3Label: 'Curated Routes',
    stat4Label: 'Five-Star Reviews',
    contactTitle: 'Contact Us',
    contactSubtitle: 'We will respond to your message within 24 hours',
    formName: 'Name',
    formEmail: 'Email',
    formContact: 'WhatsApp / WeChat',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formSuccess: 'Message sent! We will contact you soon.',
    formError: 'Failed to send. Please try again later.',
    footerContact: 'Contact',
    footerWhatsApp: 'WhatsApp: +86 180 7294 0737',
    dest1City: 'Hangzhou',
    dest2City: 'Tongxiang',
    dest3City: 'Suzhou',
    dest4City: 'Shanghai',
    dest5City: 'Suzhou',
    dest6City: 'Hangzhou',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  const t = (key: string) => {
    return content[language][key as keyof typeof content.zh] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}