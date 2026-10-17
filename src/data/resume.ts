export type Language = 'th' | 'en';
export type Localized = Record<Language, string>;
export const jobs: { company: string; role: string; dates: Localized; current?: boolean; stack: string[]; details: Localized[] }[] = [
  {
    company: 'จรรโลงใจ', role: 'SQL Developer',
    dates: { en: 'Aug 2026 — Present', th: 'ส.ค. 2026 —ปัจจุบัน' },
    current: true,
    stack: ['SQL', 'Stored Procedures', 'MES Reporting', 'Production Support'],
    details: [
      { en: 'Contracted through จรรโลงใจ as an outsourced SQL Developer, working onsite at WD Thailand in Bang Pa-in.', th: 'ทำงานในตำแหน่ง SQL Developer ภายใต้สัญญากับบริษัทจรรโลงใจ ในรูปแบบ Outsource โดยปฏิบัติงาน Onsite ที่ WD Thailand บางปะอิน' },
      { en: 'Maintain reports generated from Manufacturing Execution System (MES) data and troubleshoot the stored procedures used to produce them.', th: 'ดูแลรายงานจากข้อมูลระบบ Manufacturing Execution System (MES) และแก้ไขปัญหา Stored Procedure ที่ใช้ในการสร้างรายงาน' },
      { en: 'Investigate the root causes of missing report data and develop both short-term solutions and long-term fixes.', th: 'วิเคราะห์หาสาเหตุของข้อมูลที่ขาดหายในรายงาน พร้อมหาแนวทางแก้ไขทั้งระยะสั้นและระยะยาว' },
      { en: 'Provide production support and help troubleshoot issues as they arise.', th: 'สนับสนุนงาน Production และช่วยตรวจสอบแก้ไขเมื่อเกิดปัญหา' },
    ],
  },
  {
    company: 'Synergy Global Network', role: 'Full Stack Developer',
    dates: { en: 'Aug 2025 — Aug 2026', th: 'ส.ค. 2025 — ส.ค. 2026' },
    stack: ['TypeScript', 'Next.js', 'NestJS', 'SQL Server', 'Sequelize'],
    details: [
      { en: 'Developed and maintained full stack web applications using TypeScript, Next.js on the frontend, and NestJS on the backend.', th: 'พัฒนาและดูแลเว็บแอปพลิเคชันแบบ Full Stack ด้วย TypeScript โดยใช้ Next.js สำหรับ Frontend และ NestJS สำหรับ Backend' },
      { en: 'Designed APIs and SQL Server database structures using Sequelize ORM. Used GitHub Copilot, Codex, and Cursor AI to improve development speed, code quality, and system architecture design.', th: 'ออกแบบ API และโครงสร้างฐานข้อมูล SQL Server ด้วย Sequelize ORM พร้อมใช้ GitHub Copilot, Codex และ Cursor AI เพื่อช่วยเพิ่มความเร็วในการพัฒนา คุณภาพโค้ด และการออกแบบสถาปัตยกรรมระบบ' },
    ],
  },
  {
    company: 'Tech Stellar', role: 'Full Stack Developer',
    dates: { en: 'Aug 2024 — Aug 2025', th: 'ส.ค. 2024 — ส.ค. 2025' },
    stack: ['Next.js', 'React.js', 'Node-RED', 'Docker', 'Jenkins'],
    details: [
      { en: 'Developed new features using Node-RED, Next.js, and React.js to improve system flexibility and user interaction.', th: 'พัฒนาฟีเจอร์ด้วย Node-RED, Next.js และ React.js เพื่อเพิ่มความยืดหยุ่นของระบบและปรับปรุงการใช้งาน' },
      { en: 'Integrated 4 payment gateways with support for 3DS, redirects, and callbacks.', th: 'เชื่อมต่อ Payment Gateway 4 ระบบ รองรับ 3DS, Redirect และ Callback' },
      { en: 'Maintained and refactored legacy codebases to reduce technical debt and improve the long-term stability of internal tools.', th: 'ดูแลและปรับโครงสร้างโค้ดเดิม เพื่อลดภาระทางเทคนิคและเพิ่มความเสถียรระยะยาวของเครื่องมือภายใน' },
      { en: 'Reduced the development backlog by debugging and optimizing legacy features across 3 cross-functional teams.', th: 'ลดงานพัฒนาค้างสะสมด้วยการแก้บั๊กและปรับปรุงฟีเจอร์เดิมร่วมกับทีมข้ามสายงาน 3 ทีม' },
      { en: 'Supported DevOps by troubleshooting deployments, editing Dockerfiles and Jenkins pipelines, and ensuring smooth UAT releases.', th: 'สนับสนุนงาน DevOps โดยแก้ปัญหาการ Deploy ปรับ Dockerfile และ Jenkins Pipeline เพื่อให้การนำระบบขึ้น UAT เป็นไปอย่างราบรื่น' },
    ],
  },
  {
    company: 'Perfect Blending', role: 'Odoo Developer',
    dates: { en: 'Apr 2024 — Aug 2024', th: 'เม.ย. 2024 — ส.ค. 2024' },
    stack: ['Python', 'Odoo ERP 14'],
    details: [
      { en: 'Developed and enhanced Odoo ERP 14 features based on System Analyst requirements to better meet business needs.', th: 'พัฒนาและปรับปรุงฟีเจอร์บน Odoo ERP 14 ตามข้อกำหนดของ System Analyst เพื่อให้ระบบตอบโจทย์ธุรกิจ' },
      { en: 'Designed and developed custom addons for online auctions, tailored to customer requirements to improve functionality and user experience.', th: 'ออกแบบและพัฒนา Addon สำหรับการประมูลออนไลน์ตามความต้องการเฉพาะของลูกค้า เพื่อเพิ่มความสามารถของระบบและปรับปรุงประสบการณ์ใช้งาน' },
    ],
  },
  {
    company: 'S11 Group', role: 'Programmer',
    dates: { en: 'Nov 2022 — Apr 2024', th: 'พ.ย. 2022 — เม.ย. 2024' },
    stack: ['Delphi 7 / 10', 'Google Apps Script', 'Google AppSheet'],
    details: [
      { en: 'Developed internal Windows applications in Delphi 7 based on user requirements.', th: 'พัฒนาโปรแกรม Windows สำหรับใช้งานภายในบริษัทด้วย Delphi 7 ตามความต้องการของผู้ใช้' },
      { en: 'Added features to existing projects and performed unit tests for new projects and features.', th: 'เพิ่มฟีเจอร์ในโครงการเดิม และทำ Unit Test สำหรับโครงการหรือฟีเจอร์ที่พัฒนาขึ้นใหม่' },
      { en: 'Built a basic RESTful API with Delphi 10 for a Google AppSheet time attendance application.', th: 'พัฒนา RESTful API เบื้องต้นด้วย Delphi 10 สำหรับโปรแกรมลงเวลาทำงานบน Google AppSheet' },
      { en: 'Developed Google Apps Script to send data from Google AppSheet to a Delphi 10 application server.', th: 'พัฒนา Google Apps Script เพื่อส่งข้อมูลจาก Google AppSheet ไปยัง Application Server ที่พัฒนาด้วย Delphi 10' },
    ],
  },
];
export const skillGroups = [
  { title: { en: 'Web & application', th: 'เว็บและแอปพลิเคชัน' }, items: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'NestJS', 'Delphi 7 / 10'] },
  { title: { en: 'Data & databases', th: 'ข้อมูลและฐานข้อมูล' }, items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server', 'MongoDB', 'Sequelize ORM'] },
  { title: { en: 'ERP & automation', th: 'ERP และระบบอัตโนมัติ' }, items: ['Python', 'Odoo ERP', 'Google Apps Script', 'Node-RED'] },
  { title: { en: 'DevOps support', th: 'สนับสนุนงาน DevOps' }, items: ['Docker', 'Jenkins', 'AWS'] },
];
export const activities = [
  { name: 'Thailand Digital Young Talent', description: { en: 'Selected participant in a national tech competition focusing on software innovation and system integration.', th: 'ได้รับคัดเลือกเข้าร่วมการแข่งขันเทคโนโลยีระดับประเทศที่เน้นนวัตกรรมซอฟต์แวร์และการเชื่อมต่อระบบ' } },
  { name: 'Global Capstone Design Camp', description: { en: 'Collaborated with international students to solve real-world industry problems using technology.', th: 'ร่วมงานกับนักศึกษานานาชาติเพื่อใช้เทคโนโลยีแก้ปัญหาจริงในภาคอุตสาหกรรม' } },
];

export const projects: { name: string; description?: Localized; url?: string }[] = [
  {
    name: 'BOI e-Visa',
    description: {
      th: 'ระบบ e-Visa สำหรับนักลงทุนชาวต่างชาติ',
      en: 'An e-Visa system for foreign investors.',
    },
    url: 'https://visa.boi.go.th/',
  },
  {
    name: 'Koala’s March',
    description: {
      th: 'LINE Official Account ของ Koala’s March',
      en: 'LINE Official Account for Koala’s March.',
    },
  },
  { name: 'Impact Family' },
];
