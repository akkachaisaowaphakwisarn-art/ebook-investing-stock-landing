# E-book สิ่งที่ต้องรู้ก่อนลงทุน

Landing page ภาษาไทยสำหรับ E-book สิ่งที่ต้องรู้ก่อนลงทุน by sun.scratch

## เปิดและแก้ไขใน VS Code

1. เปิดโฟลเดอร์นี้ด้วย VS Code (`File > Open Folder...`).
2. แก้หน้าเว็บที่ `public/index.html` และรูปแบบที่ `public/*.css`.
3. JavaScript อยู่ใน `public/motion.js` และ `public/offers.mjs`.
4. รูปปกอยู่ใน `public/cover.png`.
5. สำหรับดูบนเครื่อง ให้เปิด Terminal ใน VS Code แล้วรัน `python -m http.server 8000 --directory public` จากนั้นเปิด `http://localhost:8000`.

## เผยแพร่ผ่าน GitHub Pages

GitHub Actions จะเผยแพร่ไฟล์ใน `public/` เมื่อ push ไปยัง branch `main`. สร้าง GitHub repository, push โค้ดชุดนี้ขึ้น branch `main`, แล้วไปที่ `Settings > Pages` เลือก `GitHub Actions` เป็น Build and deployment source. หลัง workflow สำเร็จ หน้าเว็บจะเปิดได้จาก URL ของ GitHub Pages.

## รายละเอียด

- Static HTML/CSS/JavaScript ไม่ต้องติดตั้ง dependencies หรือ build.
- ปุ่มซื้อ E-book เชื่อมไปยัง Stripe Payment Link ที่กำหนดไว้.
- ราคาและ countdown ทำงานใน browser ตามโค้ดที่มีอยู่.
- การลงทุนมีความเสี่ยง เนื้อหาในหน้านี้จัดทำเพื่อการศึกษา.
