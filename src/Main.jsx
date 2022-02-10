import React from 'react'

function Main() {
  return (
    <div className="container">
      <main className="main">
        <section className="main__titles-section">
          <h1 className="main__title">Laura Smith</h1>
          <h3 className="main__subtitle">Frontend Developer</h3>
          <a href="#" className="main__link">laurasmith.website</a>
        </section>
        <button className="main__button">
          <svg className="btn-icon" width="16" height="16" viewBox="-3 -3 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.102406 1.70721L6.50001 4.90561L12.8976 1.70721C12.8739 1.29957 12.6953 0.916403 12.3983 0.636194C12.1012 0.355985 11.7083 0.199937 11.3 0.200012H1.70001C1.29167 0.199937 0.898764 0.355985 0.601748 0.636194C0.304733 0.916403 0.126089 1.29957 0.102406 1.70721Z" fill="#1E1F26"/>
            <path d="M12.9 3.49441L6.50001 6.69441L0.100006 3.49441V8.20001C0.100006 8.62436 0.268577 9.03133 0.568635 9.33138C0.868693 9.63144 1.27566 9.80001 1.70001 9.80001H11.3C11.7244 9.80001 12.1313 9.63144 12.4314 9.33138C12.7314 9.03133 12.9 8.62436 12.9 8.20001V3.49441Z" fill="#1E1F26"/>
          </svg>
          Email
        </button>
        <section className="main__section">
          <h2 className="main__section-title">About</h2>
          <p className="main__para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h2 className="main__section-title">Interests</h2>
          <p className="main__para">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </section>
      </main>
    </div>
  )
}

export default Main