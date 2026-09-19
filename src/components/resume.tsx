'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { activities, jobs, skillGroups, type Language } from '@/data/resume';

export default function Resume() {
  const [language, setLanguage] = useState<Language>('th');
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const t = (th: string, en: string) => language === 'th' ? th : en;
  const sections = [
    { id: 'experience', name: t('ประสบการณ์', 'Experience') },
    { id: 'skills', name: t('ทักษะ', 'Skills') },
    { id: 'about', name: t('เกี่ยวกับผม', 'About') },
    { id: 'contact', name: t('ติดต่อ', 'Contact') },
  ];
  return <>
    <a className="skip-link" href="#main">{t('ข้ามไปยังเนื้อหา', 'Skip to content')}</a>
    <header className="header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label={t('Bank กลับด้านบน', 'Bank back to top')}><span className="brand-icon">B<span>_</span></span><span>bank<span className="muted">.dev</span></span></a>
        <nav aria-label={t('เมนูหลัก', 'Main navigation')}>{sections.map(s => <a key={s.id} href={`#${s.id}`}>{s.name}</a>)}</nav>
        <div className="language-switch" role="group" aria-label={t('เลือกภาษา', 'Select language')}>
          <button lang="th" aria-label="ภาษาไทย" aria-pressed={language === 'th'} onClick={() => setLanguage('th')}>TH</button>
          <button lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
        </div>
      </div>
    </header>
    <main id="main" className="container">
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER</div>
          <p className="intro">{t('สวัสดีครับ ผม Bank', "Hey, I’m Bank") } <span className="wave">✳</span></p>
          <h1>Naruesorn<br /><span>Wattanapipat<span className="accent">.</span></span></h1>
          <p className="hero-description">{t('พัฒนาเว็บแอปพลิเคชัน เชื่อมต่อระบบ และเปลี่ยนความต้องการทางธุรกิจให้เป็นซอฟต์แวร์ที่ใช้งานได้จริง', 'Building web applications, connecting systems, and turning business requirements into working software.')}</p>
          <div className="hero-stack"><span>TypeScript</span><span>Next.js</span><span>NestJS</span><span>SQL</span></div>
          <div className="hero-actions"><a className="button primary" href="#contact">{t('ติดต่อผม', 'Get in touch')} <span aria-hidden="true">↗</span></a><a className="button secondary" href="/Naruesorn-Wattanapipat-Resume.pdf" download>{t('ดาวน์โหลด CV', 'Download CV')} <span aria-hidden="true">↓</span></a></div>
          <p className="location"><span aria-hidden="true">⌖</span> {t('ปทุมธานี ประเทศไทย', 'Pathum Thani, Thailand')}</p>
        </div>
        <div className="profile-panel">
          <div className="panel-bar"><span className="window-dots"><i /><i /><i /></span><span>developer.profile</span><span aria-hidden="true">↗</span></div>
          <div className="portrait-wrap"><Image src="/portrait-000.jpg" alt={t('ภาพ Naruesorn Wattanapipat (Bank) จากเรซูเม่', 'Naruesorn Wattanapipat (Bank), from the original resume')} width={411} height={615} priority /><div className="portrait-label"><span className="status-dot" /> {t('จากแนวคิด สู่โค้ด', 'From ideas to code')}</div></div>
          <div className="code-profile"><p><span className="code-purple">const</span> developer <span className="muted">= {'{'}</span></p><p>&nbsp; name: <span className="code-green">&quot;Bank&quot;</span>,</p><p>&nbsp; role: <span className="code-green">&quot;Full Stack Developer&quot;</span>,</p><p>&nbsp; since: <span className="code-orange">2022</span></p><p className="muted">{'}'};</p></div>
        </div>
      </section>
      <div className="highlights"><div><strong>01 /</strong><span>{t('เว็บแอปพลิเคชันแบบ Full Stack', 'Full stack web applications')}</span></div><div><strong>02 /</strong><span>{t('API และการเชื่อมต่อระบบ', 'APIs & system integration')}</span></div><div><strong>03 /</strong><span>{t('ERP และระบบอัตโนมัติ', 'ERP & automation')}</span></div></div>
      <section id="experience" className="section">
        <SectionHeading number="01" title={t('ประสบการณ์ทำงาน', 'Work experience')} subtitle={t('เส้นทางการพัฒนา ตั้งแต่ Desktop ไปจนถึงเว็บแบบ Full Stack', 'From desktop applications to full stack web development.')} />
        <div className="timeline">{jobs.map((job, index) => <article className="job" key={job.company}>
          <div className="job-date"><span className={`timeline-dot ${index === 0 ? 'current' : ''}`} /><span>{job.dates[language]}</span>{index === 0 && <span className="current-label">{t('ปัจจุบัน', 'Current')}</span>}</div>
          <div className="job-content"><p className="company">{job.company}</p><h3>{job.role}</h3><ul>{job.details.map((detail, i) => <li key={i}>{detail[language]}</li>)}</ul><div className="tags">{job.stack.map(item => <span key={item}>{item}</span>)}</div></div>
        </article>)}</div>
      </section>
      <section id="skills" className="section">
        <SectionHeading number="02" title={t('ทักษะและเครื่องมือ', 'My development toolkit')} subtitle={t('เทคโนโลยีที่ใช้ในการพัฒนาและดูแลระบบ', 'Technologies I use to build and maintain software.')} />
        <div className="skill-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title.en}><span className="skill-symbol" aria-hidden="true">{['</>', '[ ]', '{ }', '>_'][index]}</span><h3>{group.title[language]}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        <div className="ai-tools"><span className="accent" aria-hidden="true">✳</span><strong>{t('เครื่องมือ AI ที่ใช้ในการพัฒนา', 'AI-assisted development')}</strong><span>GitHub Copilot <b>·</b> Codex <b>·</b> Cursor AI</span></div>
      </section>
      <section id="about" className="section">
        <SectionHeading number="03" title={t('พื้นฐานและการเรียนรู้', 'Beyond the code')} subtitle={t('การศึกษา กิจกรรม และทักษะภาษา', 'Education, activities, and language skills.')} />
        <div className="about-grid"><div className="education card"><p className="card-label">{t('การศึกษา', 'EDUCATION')}</p><span className="education-year">2022</span><h3>{t('มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี', 'Rajamangala University of Technology Thanyaburi')}</h3><p>{t('ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์', 'Bachelor of Computer Science')}</p><span className="small-muted">{t('สำเร็จการศึกษาในปี 2022', 'Graduated in 2022')}</span></div>
        <div className="card activities"><p className="card-label">{t('กิจกรรม', 'ACTIVITIES')}</p>{activities.map(activity => <div className="activity" key={activity.name}><h3><span className="accent" aria-hidden="true">↗</span> {activity.name}</h3><p>{activity.description[language]}</p></div>)}</div>
        <div className="card language-card"><p className="card-label">{t('ทักษะภาษาอังกฤษ', 'ENGLISH PROFICIENCY')}</p><div className="language-grid">{[['การอ่าน', 'Reading', true], ['การฟัง', 'Listening', true], ['การเขียน', 'Writing', false], ['การพูด', 'Speaking', false]].map(([th, en, good]) => <div key={String(en)}><span>{t(String(th), String(en))}</span><strong className={good ? 'good' : 'fair'}>{good ? t('ดี', 'Good') : t('พอใช้', 'Fair')}</strong></div>)}</div></div></div>
      </section>
      <section id="contact" className="section contact-section">
        <div className="contact-copy"><p className="eyebrow">04 / {t('ติดต่อ', 'CONTACT')}</p><h2>{t('มาพูดคุยกัน', 'Let’s connect')}<span className="accent">.</span></h2><p>{t('ติดต่อผ่านอีเมล โทรศัพท์ หรือ LINE ด้านล่างได้เลยครับ', 'Reach me by email, phone, or LINE using the details below.')}</p><a className="contact-email" href="mailto:naruesorn.wt@gmail.com">naruesorn.wt@gmail.com <span aria-hidden="true">↗</span></a></div>
        <dl className="contact-details"><div><dt>{t('โทรศัพท์', 'Phone')}</dt><dd><a href="tel:+66952841879">095-284-1879 ↗</a></dd></div><div><dt>LINE</dt><dd>095-284-1879</dd></div><div><dt>{t('วันเกิด', 'Date of birth')}</dt><dd>{t('4 กันยายน 1999', '4 September 1999')}</dd></div><div><dt>{t('ที่อยู่', 'Address')}</dt><dd>{t('MapleCity M1(804) 66/1 หมู่ 1 ตำบลคลองเจ็ด อำเภอคลองหลวง จังหวัดปทุมธานี 12120', 'MapleCity M1(804) 66/1 Moo 1, Khlong Chet, Khlong Luang, Pathum Thani 12120')}</dd></div></dl>
      </section>
    </main>
    <footer className="footer container"><a className="brand" href="#home">bank<span className="muted">.dev</span></a><p>Naruesorn Wattanapipat <span className="accent">/</span> Full Stack Developer</p><a href="#home">{t('กลับด้านบน', 'Back to top')} ↑</a></footer>
  </>;
}
function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <div className="section-heading"><div><span className="section-number">{number} /</span><h2>{title}</h2></div><p>{subtitle}</p></div>;
}
