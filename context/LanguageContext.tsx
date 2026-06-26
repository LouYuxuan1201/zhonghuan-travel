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
    servicesTitle: '服务项目',
    servicesSubtitle: '为您量身打造专属旅行体验',
    service1Title: '私人定制游',
    service1Desc: '根据您的兴趣与节奏，量身打造专属行程，让每一次旅行都独一无二',
    service2Title: '商务接待服务',
    service2Desc: '高端商务接送，行程安排贴心周到，为商务旅客提供无忧体验',
    service3Title: '特色主题路线',
    service3Desc: '水乡古镇、茶文化、非遗体验等深度游，探索江南文化的精髓',
    destinationsTitle: '目的地',
    destinationsSubtitle: '江浙沪热门景点推荐',
    aboutTitle: '关于我们',
    aboutText: '中环旅行社，专注入境旅游多年。我们相信，每一次旅行都是一段独特的故事。用我们的专业与热情，为您书写属于您的江南记忆。',
    contactTitle: '联系我们',
    contactSubtitle: '您的留言将在24小时内收到回复',
    formName: '姓名',
    formEmail: '邮箱',
    formContact: '联系方式（WhatsApp/邮箱）',
    formMessage: '留言内容',
    formSubmit: '发送消息',
    formSuccess: '消息已发送！我们会尽快联系您。',
    formError: '发送失败，请稍后重试。',
    footerContact: '联系方式',
    footerWhatsApp: 'WhatsApp: +86 180 7294 0737',
  },
  en: {
    navServices: 'Services',
    navDestinations: 'Destinations',
    navAbout: 'About',
    navContact: 'Contact',
    heroTitle: 'Jiangnan Like a Painting\nTailored Journey',
    heroSubtitle: 'Deep exploration of every scenic spot in Jiangsu, Zhejiang and Shanghai',
    heroCTA: 'Contact Us Now',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Tailored travel experiences exclusively for you',
    service1Title: 'Private Custom Tours',
    service1Desc: 'Personalized itineraries based on your interests and pace, making every trip unique',
    service2Title: 'Business Reception',
    service2Desc: 'Premium business transfers and thoughtful travel arrangements for hassle-free business travel',
    service3Title: 'Special Theme Routes',
    service3Desc: 'Water towns, tea culture, intangible heritage experiences and more - exploring the essence of Jiangnan culture',
    destinationsTitle: 'Destinations',
    destinationsSubtitle: 'Popular attractions in Jiangsu, Zhejiang & Shanghai',
    aboutTitle: 'About Us',
    aboutText: 'Zhonghuan Travel, dedicated to inbound tourism for years. We believe every journey is a unique story. Let our professionalism and passion craft your Jiangnan memory.',
    contactTitle: 'Contact Us',
    contactSubtitle: 'We will respond to your message within 24 hours',
    formName: 'Name',
    formEmail: 'Email',
    formContact: 'Contact (WhatsApp/Email)',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formSuccess: 'Message sent! We will contact you soon.',
    formError: 'Failed to send. Please try again later.',
    footerContact: 'Contact',
    footerWhatsApp: 'WhatsApp: +86 180 7294 0737',
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
