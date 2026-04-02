import React from 'react'
import "./Home.css"

function Home() {
  const features = [
    { icon: '⚡', title: 'Tez Xizmat', description: 'Eng tez va ishonchli xizmatni taqdim etamiz' },
    { icon: '🎨', title: 'Dizayn', description: 'Zamonaviy va chiroyli dizayn bilan yaratilgan' },
    { icon: '🔒', title: 'Xavfsizlik', description: 'Sizning ma\'lumotlaringiz to\'liq himoyalangan' },
    { icon: '🚀', title: 'Innovatsiya', description: 'Eng yangi texnologiyalardan foydalanamiz' },
    { icon: '👥', title: 'Jamoa', description: 'Tajribali va o\'zboshimcham jamoaga ega' },
    { icon: '💡', title: 'Yechimlar', description: 'Barcha muammolaringizga to\'la yechimlar' }
  ]

  return (
    <section className='home'>
      <div className='home-hero'>
        <div className='hero-content'>
          <h1>Xush kelibsiz</h1>
          <p>Biz bilan yangi imkoniyatlarni kashf eting</p>
        </div>
      </div>

      <div className='features-grid'>
        {features.map((feature, index) => (
          <div key={index} className='feature-card'>
            <div className='feature-icon'>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className='home-info'>
        <h2>Nima Qilishimiz Mumkin?</h2>
        <div className='info-section'>
          <p>Biz sizga eng yaxshi xizmatlarni taqdim etishga tayinlangan. Biziing maqsad - sizning muvaffaqiyatiga yordam berishdir. Har bir loyihadagi biz o'z ijodkorligimiz va bilimimizni to'liq sarflaydi.</p>
        </div>
      </div>
    </section>
  )
}

export default Home