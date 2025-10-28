document.addEventListener("DOMContentLoaded", function () {
  // تفعيل السلايدر تلقائيًا
  const carousel = document.querySelector('#featuredEvents');
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 3000,
      ride: 'carousel'
    });
  }

  /* ====== صفحة الفعاليات (events.html) ====== */
  // فلترة الفعاليات المتقدمة
  const filterCategory = document.getElementById("filter-category");
  const filterLocation = document.getElementById("filter-location");
  const filterDate = document.getElementById("filter-date");
  const cards = document.querySelectorAll(".event-card");
if (filterCategory) filterCategory.addEventListener("change", filterEvents);
if (filterLocation) filterLocation.addEventListener("change", filterEvents);
if (filterDate) filterDate.addEventListener("change", filterEvents);
  

  // دالة فلترة الفعاليات
  function filterEvents() {
    const selectedCategory = filterCategory ? filterCategory.value : "";
    const selectedLocation = filterLocation ? filterLocation.value : "";
    const selectedDate = filterDate ? filterDate.value : "";

    let visibleCount = 0;

    cards.forEach(card => {
      let showCard = true;

      // فلترة حسب التصنيف
      if (selectedCategory && selectedCategory !== "") {
        const cardCategory = card.getAttribute("data-category");
        if (cardCategory !== selectedCategory) {
          showCard = false;
        }
      }

      // فلترة حسب الموقع
      if (selectedLocation && selectedLocation !== "" && showCard) {
        const cardLocation = card.getAttribute("data-location");
        if (cardLocation !== selectedLocation) {
          showCard = false;
        }
      }

      // فلترة حسب التاريخ
      if (selectedDate && selectedDate !== "" && showCard) {
        const cardDate = card.getAttribute("data-date");
        if (cardDate !== selectedDate) {
          showCard = false;
        }
      }

      // إظهار أو إخفاء البطاقة
      if (showCard) {
        card.style.display = "block";
        card.style.animation = "fadeIn 0.5s ease-in-out";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // إظهار رسالة إذا لم توجد نتائج
    showFilterResults(visibleCount);
  }

  // دالة إظهار نتائج الفلترة
  function showFilterResults(count) {
    // إزالة رسالة النتائج السابقة إن وجدت
    const existingMessage = document.getElementById("filter-results-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // إضافة رسالة النتائج
    if (count === 0) {
      const resultsContainer = document.querySelector(".container.py-5");
      if (resultsContainer) {
        const message = document.createElement("div");
        message.id = "filter-results-message";
        message.className = "alert alert-info text-center mt-4";
        message.innerHTML = `
          <i class="fas fa-info-circle"></i>
          <strong>لم يتم العثور على فعاليات</strong><br>
          جرب تغيير معايير البحث أو <button class="btn btn-link p-0" onclick="document.getElementById('clear-filters').click()">مسح الفلاتر</button>
        `;
        resultsContainer.appendChild(message);
      }
    }
  }

  // زر مسح الفلاتر
  const clearFiltersBtn = document.getElementById("clear-filters");
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      // مسح جميع الحقول
      if (filterCategory) filterCategory.value = "";
      if (filterLocation) filterLocation.value = "";
      if (filterDate) filterDate.value = "";
      
      // إزالة رسالة النتائج إن وجدت
      const existingMessage = document.getElementById("filter-results-message");
      if (existingMessage) {
        existingMessage.remove();
      }
      
      // إظهار جميع البطاقات
      cards.forEach(card => {
        card.style.display = "block";
        card.style.animation = "fadeIn 0.5s ease-in-out";
      });
    });
  }
});


 // ========== صفحة تفاصيل الفعالية ==========

// زر "أضف للتقويم"
const addToCalendarBtn = document.getElementById("addToCalendar");
if (addToCalendarBtn) {
  addToCalendarBtn.addEventListener("click", () => {
    alert("تمت إضافة الفعالية إلى التقويم ");
  });
}

// زر "شارك"
const shareEventBtn = document.getElementById("shareEvent");
if (shareEventBtn) {
  shareEventBtn.addEventListener("click", () => {
    alert("تم نسخ رابط الفعالية للمشاركة ");
  });
}

// contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // التحقق من الحقول
      if (name === "" || email === "" || message === "") {
        showAlert("الرجاء ملء جميع الحقول.", "wrong");
        return;
      }

      // التحقق من صيغة البريد
      if (!email.includes("@gmail.com")) {
        alert("رجاءً أدخل بريد صحيح من نوع Gmail");
        return;
      }

      // نجاح
      showAlert("تم إرسال رسالتك بنجاح ", "success");
      form.reset();
    });

    function showAlert(message, type) {
      alertBox.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="إغلاق"></button>
        </div>`;
    }
  }
});
// كود ترجمة بسيط (العربية ↔ الإنجليزية)
document.addEventListener("DOMContentLoaded", () => {

  //  القاموس الكامل: كل الكلمات العربية وترجمتها الإنجليزية
  const words = {
    //  الصفحة الرئيسية index1.html
    "الرئيسية": "Home",
    "دليل فعاليات حمص العديّة؛ جميع الحقوق محفوظة لجامعة الافتراضية السورية":"All Rights Reserved-Homs Events Guide AL-Aihyah 2025",
    ":كل الفعاليات ":" ALL Events",
    "الفعاليات": "Events",
    "كل الفعاليات":"All Events",
    "تفاصيل الفعالية": "Event Details",
    "عن الدليل": "About the Guide",
    "أحدث الفعاليات":"The latest Events",
    "اتصل بنا": "Contact Us",
    "استكشف أبرز الفعاليات  في حمص : من مهرجاناتها الثقافية إلى معارضها الفنية، دليلك لتجارب لا تُنسى": "Discover the top events in Homs: from cultural festivals to art exhibitions — your guide to unforgettable experiences",
    "تصفح حسب التصنيف": "Browse by category",
    "وطني": "National",
    "تعليمي": "Educational",
    "ثقافي": "Cultural",
    "اجتماعي": "Social",
    "الفعاليات البارزة هذا الأسبوع": "Featured events this week",
    "الدورة الرابعة من مهرجان التسوق \"أهلاً مدرستي\" في حمص": "4th Edition of “Welcome Back to School” Shopping Festival in Homs",
    "يوم السياحة العالمي": "World Tourism Day",
    "فعاليات للأطفال واليافعين على مسرح قصر الثقافة بحمص في الذكرى الـ 14 للثورة السورية": "Activities for children and youth at the Culture Palace in Homs on the 14th anniversary of the Syrian revolution",
    "فعاليات “حمص تاريخ يُروى وثقافة تُبنى”من قصر الثقافة": "Events: “Homs — A Story to Tell & A Culture to Build” from the Culture Palace",

    //  صفحة الفعاليات events1.html
    "اختر التصنيف": "Choose Category",
    "تسوق": "Shopping",
    "عن الفعالية":"About Events",
    "سياحي": "Tourism",
    "وطني": "National",
    "ثقافي": "Cultural",
    "اختر الموقع": "Choose Location",
    "مدينة المعارض": "Exhibition City",
    "قلعة الحصن": "Krak des Chevaliers",
    "قصر الثقافة": "Culture Palace",
    "التاريخ : من ١٧ سبتمبر حتى ١ اكتوبر ٢٠٢٥": "Date: From September 17 to October 1, 2025",
    "المكان: مدينة المعارض بحي الوعر غرب حمص": "Location: Exhibition City, Al Waer District, Homs",
    "التصنيف: تسوق": "Category: Shopping",
    "عروض تسويقية تتناسب مع متطلبات المدارس وفعاليات فنية وترفيهية متنوعة لكافة الأعمار": "Promotional offers for school needs, and various cultural and entertainment activities for all ages",
    "التفاصيل": "Details",
    "التاريخ: ٢٧ ايلول ٢٠٢٥": "Date: September 27, 2025",
    "المكان: قلعة الحصن": "Location: Krak des Chevaliers",
    "التصنيف: سياحة": "Category: Tourism",
    "يوم عالمي يحتفي بالسياحة ويتضمن فعاليات فنية وثقافية ومعارض تراثية وعروضًا متنوعة": "A global day celebrating tourism with artistic, cultural, and heritage exhibitions",
    "لمعرفة تفاصيل اكثر يرجى زيارة الموقع الرسمي للفعالية": "For more details, please visit the official event website",
    "التاريخ: ١٤ آذار ٢٠٢٥": "Date: March 14, 2025",
    "المكان:قصر الثقافة -حمص": "Location: Culture Palace - Homs",
    "التصنيف: وطني": "Category: National",
    "معارض وعروض مسرحية بمشاركة أطفال ويافعين ضمن فعاليات رمضانية": "Exhibitions and plays with children and youth as part of Ramadan events",
    "فعاليات “حمص تاريخ يروى وثقافة تُبنى”من قصر الثقافة": "Events: “Homs — A Story to Tell & A Culture to Build” from the Culture Palace",
    "التاريخ: من ١١ اغسطس ٢٠٢٥ حتى ١٦ اغسطس ٢٠٢٥": "Date: From August 11 to 16, 2025",
    "التصنيف: ثقافي": "Category: Cultural",
    "تتضمن عروضًا تراثية وفنية ومعارض حرفية وأمسيات أدبية، تُقام في أجواء احتفالية تُبرز تاريخ المدينة العريق وتنوعها الثقافي": "Includes traditional and artistic shows, craft exhibitions, and literary evenings in a festive atmosphere highlighting the city’s culture",

    // صفحة تفاصيل الفعالية event1.html
    "حول الفعالية": "About the Event",
    "تفاصيل":"Details",
    "تواصل معنا عبر:":"Contact with us via:",
    "المكان: حديقة تشرين بدمشق":"Place :Tshreen Garden in Damascus",
    "©2025 دليل فعاليات المدينة | جميع الحقوق محفوظة":"All Rights Reserved-Homs Events Guide AL-Aihyah 2025",
    "مهرجان \"أهلاً مدرستي\" هو فعالية سنوية تهدف لدعم الطلاب وتشجيعهم على بداية عام دراسي جديد بروح مليئة بالحماس والطموح.": "\"Welcome Back to School\" is an annual event aimed at supporting students and encouraging them to start the school year with enthusiasm.",
    "ويتضمن المهرجان إلى جانب العروض التسويقية، فعاليات فنية وترفيهية متنوعة، منها حفل إنشاد ديني لفرقة الإخلاص، وحفل فني يحييه المطرب غزوان مدني، بالإضافة إلى فقرات ترفيهية للأطفال تقدمها فرقة هابي ماجيك.": "The festival includes marketing offers, artistic and entertainment activities such as a religious concert, a performance by Ghazwan Madani, and shows by Happy Magic group.",
    "ويأتي المهرجان في وقت تتزايد فيه متطلبات الأسر مع اقتراب العام الدراسي الجديد، ما يجعله فرصة لتأمين المستلزمات المدرسية والمواد الأساسية بأسعار تنافسية.": "The festival comes as family needs increase before the new school year, making it an opportunity to buy supplies at good prices.",
    "تشمل القرطاسية والملابس المدرسية والمواد الغذائية والمنظفات، مع حسومات تصل إلى 50 بالمئة، بما يسهم في تخفيف الأعباء عن الأسر.": "It includes stationery, uniforms, food, and detergents, with discounts up to 50% to reduce family expenses.",
    "شارك": "Share",

 "مهرجان اهلا مدرستي هو فعالية سنوية تهدف لدعم الطلاب وتشجيعهم على بداية عام دراسي جديد بروح مليئة بالحماس والطموح. ويتضمن المهرجان إلى جانب العروض التسويقية، فعاليات فنية وترفيهية متنوعة، منها حفل إنشاد ديني لفرقة الإخلاص، وحفل فني يحييه المطرب غزوان مدني، بالإضافة إلى فقرات ترفيهية للأطفال تقدمها فرقة هابي ماجيك."
 :
   "The Welcome back to school festival is annual event aimed at supporting students and envourging them to behin the new academic year with enthuiasm and ambition in additional to promotional exhibitions the festival includes various artistic and entertainment activities",
   
    "فيسبوك | تويتر":"Facebook/Twitter",
    "التاريخ: 5 - 18 نيسان 2025":"Date:5-18 April 2025",
  
    "أضف التقويم": "Add to Calendar",
    "فعاليات ذات صلة": "Related Events",
    "ماراثون دمشق ٢٠٢٥": "Damascus Marathon 2025",
    "التاريخ:٧ تشرين الثاني ٢٠٢٥": "Date: November 7, 2025",
    "المكان:المزة، دمشق": "Location: Mezzeh, Damascus",
    "الموقع الرسمي": "Official Website",
    "معرض الزهور الدولي": "International Flower Exhibition",
    "التاريخ: نيسان ١٥-٨-٢٠٢٥": "Date: April 8–15, 2025",
    "المكان: حديقة تشرين بدمشق": "Location: Tishreen Park, Damascus",

    //  صفحة عن الدليل about1.html
 "هدفنا": "Our Goal",
    " رؤيتنا": "Our Vision",
   " رسالتنا": "Our Message",
   " مسؤول عن ال ":"responsible for",
   " رؤيتنا":"Our Vision",
   " رسالتنا":"Our Message",
   " مسؤولة عن":"responsible for",
   "نبذة عن الدليل":"About the Guide",
   "فريق العمل / الشركاء":"Mates/Work team",
  "سياسات ومعايير نشر الفعاليات":"Policies and Standeres for Publishing Events","معايير القبول: نفضل الفعاليات التي تلتزم بالقوانين المحلية، وتراعي السلامة العامة، وتملك منظّمًا واضحًا.": 
"Acceptance Criteria: We prefer events that comply with local laws, ensure public safety, and have a clearly identified organizer.",

"محتوى النشر: نحتفظ بالحق في تعديل العناوين والوصف لتحسين الوضوح، ولا ننشر محتوى مسيء أو غير قانوني.": 
"Publication Policy: We reserve the right to edit titles and descriptions to improve clarity, and we do not publish offensive or illegal content.",


  "معايير القبول: نفضل الفعاليات التي تلتزم بالقوانين المحلية، وتراعي السلامة العامة، وتملك منظّمًا واضحًا.": 
"Acceptance Criteria: We prefer events that comply with local laws, ensure public safety, and have a clearly identified organizer.",

"محتوى النشر: نحتفظ بالحق في تعديل العناوين والوصف لتحسين الوضوح، ولا ننشر محتوى مسيء أو غير قانوني.": 
"Publication Policy: We reserve the right to edit titles and descriptions to improve clarity, and we do not publish offensive or illegal content.",

"كيفية الإرسال: لإرسال فعالية جديدة، يرجى التواصل عبر صفحة تواصل معنا وإرسال التفاصيل الأساسية (الاسم، التاريخ، المكان، وصف قصير، جهة الاتصال).": 
"Submission Method: To submit a new event, please contact us through the 'Contact Us' page and send the basic details (name, date, location, short description, and contact information).",

"نطلب صورة واضحة للفعالية.": 
"We request a clear image of the event.",

"توضيح إن كانت الفعالية مجانية أو بتذاكر.": 
"Please specify whether the event is free or ticketed.",

"نحتفظ بحق رفض النشر بدون إبداء أسباب في حالات نادرة.": 
"We reserve the right to decline publication without providing a reason in rare cases.",
"دليل فعاليات حمص العديّة | جميع الحقوق محفوظة":"Homs Events Guide | All Rights Reserved",


   "معايير القبول: نفضل الفعاليات التي تلتزم بالقوانين المحلية، وتراعي السلامة العامة، وتملك منظّمًا واضحًا.": 
"Acceptance Criteria: We prefer events that comply with local laws, ensure public safety, and have a clearly identified organizer.",

"محتوى النشر: نحتفظ بالحق في تعديل العناوين والوصف لتحسين الوضوح، ولا ننشر محتوى مسيء أو غير قانوني.": 
"Publication Policy: We reserve the right to edit titles and descriptions to improve clarity, and we do not publish offensive or illegal content.",

"كيفية الإرسال: لإرسال فعالية جديدة، يرجى التواصل عبر صفحة تواصل معنا وإرسال التفاصيل الأساسية (الاسم، التاريخ، المكان، وصف قصير، جهة الاتصال).": 
"Submission Method: To submit a new event, please contact us via the 'Contact Us' page and send the basic details (name, date, location, short description, contact information).",
    "هدفنا توفير مرجع شامل ودقيق لكل الفعاليات والنشاطات التي تُقام في المحافظة، ليكون دليلاً موثوقاً للمواطنين والزوار على حد سواء.": "Our goal is to provide a complete, accurate guide for all events and activities in the governorate.",
    "رؤيتنا أن يصبح هذا الدليل منصة رائدة تساهم في تعزيز المشاركة المجتمعية، وتسليط الضوء على المبادرات الثقافية والاجتماعية والفنية.": "Our vision is to make this guide a leading platform that enhances community participation and promotes cultural and artistic initiatives.",
    "رسالتنا تقديم محتوى موثوق ومحدث باستمرار، يسهل الوصول إليه، ويعزز من التواصل بين جميع الأطراف المهتمة بالفعاليات داخل المحافظة.": "Our mission is to provide reliable, updated content that is easy to access and enhances communication among all event participants.",
    "فريق العمل/ الشركاء": "Team / Partners",
    "حمزة المصطفى": "Hamza Al-Mustafa",
    "مؤسس المنصة ومدير المحتوى": "Platform Founder and Content Manager",
    "فاطمة الاسعد": "Fatema Al-Asaad",
    "تهتم بالهوية البصرية وتجربة المستخدم": "Responsible for visual identity and user experience",
    "نغم جاموس": "Nagham Jamous",
    "مؤسس المشروع ومدير المحتوى":"Platform Founder and content Manger",
    "مصممة واجهة المستخدم": "User Interface Designer",
    "مهند الاحمد": "Mohannad Al-Ahmad",
    "مسؤول عن التواصل مع الشركاء وإدارة المحتوى": "Responsible for partner communication and content management",
    "سياسيات ومعايير نشر الفعاليات": "Policies and Criteria for Publishing Events",
    "معايير القبول:نفضل الفعاليات التي تلتزم بالقوانين المحلية، وتراعي السلامة العامة، وتملك منظّمًا واضحًا.": "Acceptance criteria: Events must comply with laws, ensure safety, and have clear organizers.",
    "محتوى النشر: نحتفظ بالحق في تعديل العناوين والوصف لتحسين الوضوح، ولا ننشر محتوى مسيء أو غير قانوني.": "Publishing content: We may edit titles or descriptions for clarity; we don’t publish offensive or illegal content.",
    "كيفية الإرسال: لإرسال فعالية جديدة، يرجى التواصل عبر صفحة اتصل بنا وإرسال التفاصيل الأساسية (الاسم، التاريخ، المكان، وصف قصير، جهة الاتصال).": "How to submit: Contact us and send the event name, date, location, description, and contact info.",

    // 🔹 صفحة اتصل بنا contact1.html
   "© 2025 جميع الحقوق محفوظة - دليل فعاليات حمص العدية":"All Rights Reserved-Homs Events Guide AL-Aihyah 2025",
    "تواصل معنا":"Contact us",
    "البريد العام: ":"General Email",
    "© 2025 جميع الحقوق محفوظة - دليل فعاليات حمص العدية ":"All Rights Reserved-Homs Events Guide AL-Aihyah 2025",
    " معلومات التواصل":"Contact information",
    "تواصل معنا: hamzaalmostafa.com":"Contact us :hamzaalmostafa.com",
    "نسعد بتلقي استفساراتكم واقتراحاتكم عبر النموذج أدناه أو من خلال وسائل التواصل المتاحة.": "We are happy to receive your questions and suggestions via the form below or contact methods.",
    "الاسم الكامل": "Full Name",
    "البريد الالكتروني": "Email",
    "الرسالة": "Message",
    "البريد العام: ":"General Email",
   "البريد الإلكتروني" :"Email",
    "معلومات التواصل": "Contact Information",
    "البريد العام": "General Email",
    "© 2025 جميع الحقوق محفوظة - دليل فعاليات حمص العدية":"All Rights Reserved-Homs Events Guide AL-Aihyah 2025",
    "الهاتف": "Phone"
  
  };

  //

 

  // عكس القاموس للعودة إلى العربية
  const reversed = {};
  for (let key in words) reversed[words[key]] = key;

  //  دالة تبديل اللغة
  function switchLang(lang) {
    const all = document.querySelectorAll("*");
    document.dir = (lang === "ar") ? "rtl" : "ltr";
    updatePageDirection(lang);

    function updatePageDirection(lang) {
      const body = document.body;
      const navbar = document.querySelector('.navbar');
      const navItems = document.querySelectorAll('.navbar-nav');

      if (lang === "ar") {
        body.setAttribute("dir", "rtl");
        body.style.textAlign = "right";
        navbar?.classList.add("rtl-navbar");
        navbar?.classList.remove("ltr-navbar");
        navItems.forEach(item => {
          item.classList.add("justify-content-end");
          item.classList.remove("justify-content-start");
        });
      } else {
        body.setAttribute("dir", "ltr");
        body.style.textAlign = "left";
        navbar?.classList.add("ltr-navbar");
        navbar?.classList.remove("rtl-navbar");
        navItems.forEach(item => {
          item.classList.add("justify-content-start");
          item.classList.remove("justify-content-end");
        });
      }
    }

    all.forEach(el => {
      if (el.children.length === 0 && el.textContent.trim() !== "") {
        const txt = el.textContent.trim();
        if (lang === "en" && words[txt]) el.textContent = words[txt];
        if (lang === "ar" && reversed[txt]) el.textContent = reversed[txt];
      }
    });

    localStorage.setItem("siteLang", lang);
  }

  // تحميل اللغة المحفوظة
  const saved = localStorage.getItem("siteLang") || "ar";
  switchLang(saved);

  // الأعلام
  const arFlag = document.getElementById("flag-ar");
  const enFlag = document.getElementById("flag-en");

  if (arFlag) arFlag.addEventListener("click", () => switchLang("ar"));
  if (enFlag) enFlag.addEventListener("click", () => switchLang("en"));
});



  



