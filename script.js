console.log("JS is working 🚀");

// تأكيد التنفيذ في الـ Console
console.log("Script executed successfully");

// تعديل الـ DOM بشكل واضح
document.body.innerHTML += "<div style='color:red;font-size:20px;'>Hello from JS</div>";

// إضافة عنصر جديد بدل innerHTML (أفضل في الاختبار)
var el = document.createElement("div");
el.innerText = "Element created by JS";
el.style.color = "blue";
document.body.appendChild(el);

// علامة واضحة جدًا في الصفحة
document.body.style.border = "5px solid green";
