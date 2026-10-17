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

เริ่มต้นเป็นภาษาไทย สลับภาษาได้ในแถบเมนู ชื่อบุคคลและบริษัทคงตาม PDF ภาษาในหน้านี้อยู่ใน state ของหน้าและกลับเป็นไทยเมื่อโหลดหน้าใหม่ ประสบการณ์งานอ้างอิง PDF และข้อมูลอัปเดตจากผู้ใช้ ไม่ได้ตรวจสอบกับแหล่งภายนอก

ใช้ Google Fonts ผ่าน CSS โดยมีฟอนต์ระบบสำรองหากออฟไลน์ ไม่มีระบบส่งฟอร์ม ข้อมูลติดต่อเป็นลิงก์ email/โทรศัพท์ และหมายเลข LINE ตาม PDF

## Git

โฟลเดอร์ `bank-resume` เป็นรากโปรเจกต์ที่แยกจาก PDF ด้านนอก มี `.gitignore` และ lockfile พร้อมสำหรับสร้าง Git repository ภายหลัง ยังไม่ได้ init, commit, เพิ่ม remote หรือ push

## ข้อกำหนดและการตัดสินใจ

- ความเสี่ยง R2: สร้างโปรเจกต์ใหม่เฉพาะในเครื่อง ย้อนกลับได้ด้วยการนำโฟลเดอร์นี้ออก
- ผู้ใช้เลือก Next.js + TypeScript และชื่อโฟลเดอร์ `bank-resume`
- ผู้ใช้เลือกสองภาษาไทย/อังกฤษ โทนเข้ม สไตล์ Developer
- ผู้ใช้อนุมัติแสดงข้อมูลทั้งหมดตาม PDF รวมที่อยู่ละเอียดและวันเกิด
- เก็บเนื้อหาทั้งหมดของ PDF ไว้บนเว็บและแนบไฟล์ต้นฉบับ เพิ่มข้อมูลผลงานตามที่ผู้ใช้แจ้งเพิ่มเติม โดยไม่แต่งรายละเอียดบทบาทหรือเทคโนโลยี
- ไม่มีการ deploy หรือเชื่อมต่อ Git remote; ไม่มี blocker ด้านข้อกำหนดค้างอยู่

แนวทางติดตั้ง: https://nextjs.org/docs/app/getting-started/installation

## ผลการตรวจสอบ

- `npm run lint`: ผ่าน
- `npm run typecheck`: ผ่าน
- `npm run build`: ผ่าน
- `npm run test:e2e`: ผ่าน 4 tests (desktop และ mobile รวมจอแคบ 320px)
- ตรวจภาพหน้าจอ desktop แล้ว รูปและส่วนเนื้อหาแสดงครบ

## เพิ่มผลงาน (17 ตุลาคม 2026)

- R2: ผู้ใช้ขอเพิ่ม BOI e-Visa สำหรับนักลงทุนชาวต่างชาติ พร้อมลิงก์ https://visa.boi.go.th/, LINE OA ของ Koala’s March และ Impact Family
- เพิ่มส่วนโปรเจกต์ทั้งภาษาไทย/อังกฤษและเมนูนำทางให้เข้ากับธีมเดิม
- Koala’s March และ Impact Family เป็นระบบ CRM ที่เชื่อมต่อ LINE OA ตามข้อมูลเพิ่มเติมจากผู้ใช้
- PDF ดาวน์โหลดคงเป็นไฟล์ต้นฉบับ ข้อมูลผลงานใหม่เพิ่มเฉพาะบนเว็บ
- งาน push Git ก่อนหน้านี้ยังรอ URL repository และ branch จากผู้ใช้

## อัปเดตประสบการณ์งาน (17 ตุลาคม 2026)

- R2: ผู้ใช้อนุมัติให้เพิ่มงานปัจจุบันและปรับวันสิ้นสุดงาน Synergy
- Synergy Global Network สิ้นสุดวันที่ 17 สิงหาคม 2026 (17 สิงหาคมที่ผ่านมา อ้างอิงวันที่สนทนา)
- ปัจจุบันเป็น SQL Developer ภายใต้สัญญากับบริษัทจรรโลงใจ เป็น Outsource ไป Onsite ที่ WD Thailand บางปะอิน
- หน้าที่: รายงานจาก MES, แก้ไข Stored Procedure, วิเคราะห์ข้อมูลที่ขาดหาย, หาแนวทางแก้ไขระยะสั้น/ยาว และสนับสนุน Production
- ยังไม่มีข้อมูลวันเริ่มงานใหม่ จึงแสดงเฉพาะสถานะปัจจุบัน และคงชื่อบริษัทเป็นภาษาไทยทั้งสองภาษาเพื่อไม่เดาชื่อจดทะเบียนภาษาอังกฤษ
- ปรับตำแหน่งในส่วนแนะนำตัวและ metadata ให้ตรงกับงานปัจจุบัน พร้อมคงประวัติ Full Stack เดิม
- ใช้สถานะ current ของรายการงานเพื่อระบุงานปัจจุบันโดยตรง
- PDF ดาวน์โหลดคงเป็นต้นฉบับ การเปลี่ยนแปลงนี้อยู่ในเนื้อหาเว็บ

## สถานะเตรียม Vercel deployment (17 ตุลาคม 2026)

- R2: เตรียม `.vercelignore` และเพิ่ม `.vercel/` ใน `.gitignore`
- ตรวจพบ Git remote `https://github.com/Naruesorn141/bank-resume.git` branch `master`
- เนื้อหาเวอร์ชันล่าสุดผ่าน lint, production build และ browser tests 4 กรณีแล้ว
- ล็อกอินสำเร็จแล้ว: บัญชี `naruesorn141`, ทีม `naruesorn-wattanapipats-projects` (Hobby)
- ตรวจแล้วไม่มีโปรเจกต์ `bank-resume` ในทีมนี้ เตรียมสร้างโปรเจกต์ใหม่และ deploy production โดยใช้โดเมนที่ Vercel จัดสรร
- ผู้ใช้อนุมัติ R0 แล้วด้วยข้อความ “อนุมัติ” ก่อน deploy production
- สร้างและ deploy `bank-resume` สำเร็จแล้วในทีม `naruesorn-wattanapipats-projects`
- การเผยแพร่ production เป็น R0: ต้องตรวจบัญชี/ปลายทางและขออนุมัติทันที ก่อนเผยแพร่ ตาม Global AGENTS.md ของผู้ใช้

## Production deployment

- URL: https://bank-resume-sigma.vercel.app
- Dashboard: https://vercel.com/naruesorn-wattanapipats-projects/bank-resume
- Deployment ID: `dpl_ErzzymR2L7fFRdBHebfb1wQQfYfQ` — READY, production
- Vercel เชื่อม GitHub `Naruesorn141/bank-resume` ระหว่างสร้างโปรเจกต์
- Deploy จากไฟล์ปัจจุบันใน workspace รวมวันที่งานที่แก้ล่าสุดในไฟล์ (`Aug 2026 — Present` และ `Aug 2025 — Aug 2026`)
- ตรวจ URL จริงแบบไม่ล็อกอิน: HTTP 200, ประสบการณ์ 5 รายการ, สลับภาษา, หน้าจอมือถือ และ PDF ผ่าน ไม่มี browser errors
- เอกสารสถานะนี้บันทึกในเครื่องหลัง deploy ยังไม่ได้ commit/push

## อัปเดตรายละเอียดโปรเจกต์ CRM และ Rental Demo

- R2: ผู้ใช้ขอแก้รายละเอียด Koala’s March และ Impact Family เป็นระบบ CRM ที่เชื่อมต่อ LINE OA ทั้งสองภาษา
- เพิ่ม Rental Demo เป็นโปรเจกต์ทดลองเช่าสินค้าและบริการ พร้อมลิงก์ https://rental-test-five.vercel.app/
- ข้อมูลนี้มาจากผู้ใช้ ไม่ได้เพิ่มรายละเอียดฟีเจอร์หรือเทคโนโลยีที่ยังไม่ได้ระบุ
- แก้ไขเฉพาะเว็บ PDF ดาวน์โหลดเป็นต้นฉบับเดิม
- รออนุมัติ R0 ก่อน deploy การแก้ไขชุดนี้ไปยัง Production
