# Ghanmi React — GitHub Pages ready

## النشر على GitHub Pages

1. أنشئي مستودعًا جديدًا على GitHub باسم مثل `ghanmi`.
2. ارفعي كل محتويات هذا المجلد إلى المستودع (لا ترفعي ملف ZIP نفسه).
3. اجعلي اسم الفرع الرئيسي `main`.
4. من المستودع افتحي Settings → Pages.
5. في Build and deployment اختاري GitHub Actions.
6. افتحي تبويب Actions وانتظري نجاح Deploy Ghanmi to GitHub Pages.
7. خذي رابط الموقع من Settings → Pages.

## التشغيل المحلي
```bash
npm install
npm run dev
```

## ملاحظات
- تم إعداد Vite وReact Router ليتوافقا مع اسم المستودع.
- أُنشئ 404.html لتعمل روابط الصفحات الداخلية عند فتحها مباشرة.
- النسخة Frontend فقط وبها بيانات تجريبية محلية.
- GitHub Pages لا يشغّل Backend أو قاعدة بيانات.
- لا تضعي أسرارًا أو كلمات مرور داخل متغيرات VITE_*؛ فهي تظهر في ملفات الواجهة المنشورة.
