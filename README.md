# Bank Resume

เว็บเรซูเม่ของ Naruesorn Wattanapipat (Bank) ด้วย Next.js App Router + TypeScript รองรับภาษาไทย/อังกฤษ โทนเข้ม และหน้าจอมือถือ

## เริ่มใช้งาน

ใช้ Node.js 22 ขึ้นไป และ npm

```bash
npm ci
npm run dev
```

เปิด http://localhost:3000

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## ทดสอบผ่านเบราว์เซอร์

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

ทดสอบภาษาไทย/อังกฤษ เนื้อหาเรซูเม่ ลิงก์ติดต่อ การดาวน์โหลด PDF การนำทาง การใช้แป้นพิมพ์ และความกว้างจอมือถือ โดยใช้ production server ที่พอร์ต 3100

## แก้ไขข้อมูล

- `src/data/resume.ts`: ประสบการณ์ ทักษะ กิจกรรม และคำแปล
- `src/components/resume.tsx`: หน้าเว็บ ข้อมูลติดต่อ การศึกษา และตัวเลือกภาษา
- `src/app/globals.css`: ธีม responsive และรูปแบบพิมพ์
- `public/portrait-000.jpg`: รูปจาก PDF ต้นฉบับ
- `public/Naruesorn-Wattanapipat-Resume.pdf`: เรซูเม่ต้นฉบับสำหรับดาวน์โหลด

เริ่มต้นเป็นภาษาไทย สลับภาษาได้ในแถบเมนู ชื่อบุคคลและบริษัทคงตาม PDF ภาษาในหน้านี้อยู่ใน state ของหน้าและกลับเป็นไทยเมื่อโหลดหน้าใหม่ สถานะงานปัจจุบันอ้างอิง PDF ไม่ได้ตรวจสอบกับแหล่งภายนอก

ใช้ Google Fonts ผ่าน CSS โดยมีฟอนต์ระบบสำรองหากออฟไลน์ ไม่มีระบบส่งฟอร์ม ข้อมูลติดต่อเป็นลิงก์ email/โทรศัพท์ และหมายเลข LINE ตาม PDF

## Git

โฟลเดอร์ `bank-resume` เป็นรากโปรเจกต์ที่แยกจาก PDF ด้านนอก มี `.gitignore` และ lockfile พร้อมสำหรับสร้าง Git repository ภายหลัง ยังไม่ได้ init, commit, เพิ่ม remote หรือ push

## ข้อกำหนดและการตัดสินใจ

- ความเสี่ยง R2: สร้างโปรเจกต์ใหม่เฉพาะในเครื่อง ย้อนกลับได้ด้วยการนำโฟลเดอร์นี้ออก
- ผู้ใช้เลือก Next.js + TypeScript และชื่อโฟลเดอร์ `bank-resume`
- ผู้ใช้เลือกสองภาษาไทย/อังกฤษ โทนเข้ม สไตล์ Developer
- ผู้ใช้อนุมัติแสดงข้อมูลทั้งหมดตาม PDF รวมที่อยู่ละเอียดและวันเกิด
- เก็บเนื้อหาทั้งหมดของ PDF ไว้บนเว็บและแนบไฟล์ต้นฉบับ ไม่เพิ่มผลงานหรือข้อมูลติดต่อที่ไม่มีในต้นฉบับ
- ไม่มีการ deploy หรือเชื่อมต่อ Git remote; ไม่มี blocker ด้านข้อกำหนดค้างอยู่

แนวทางติดตั้ง: https://nextjs.org/docs/app/getting-started/installation

## ผลการตรวจสอบ

- `npm run lint`: ผ่าน
- `npm run typecheck`: ผ่าน
- `npm run build`: ผ่าน
- `npm run test:e2e`: ผ่าน 4 tests (desktop และ mobile รวมจอแคบ 320px)
- ตรวจภาพหน้าจอ desktop แล้ว รูปและส่วนเนื้อหาแสดงครบ
