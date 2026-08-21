// =========================================
// AMJAD PERSONAL WEBSITE
// SCRIPT.JS
// =========================================


// =========================================
// 1. زر الوضع الليلي / الفاتح
// =========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const lightMode =
            document.body.classList.contains("light");

        themeBtn.textContent =
            lightMode ? "🌙" : "☀️";

        localStorage.setItem(
            "theme",
            lightMode ? "light" : "dark"
        );

    });

}


// =========================================
// 2. استرجاع الوضع المحفوظ
// =========================================

const savedTheme =
    localStorage.getItem("theme");

if (
    savedTheme === "light" &&
    themeBtn
) {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}


// =========================================
// 3. ظهور العناصر أثناء النزول
// =========================================

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

} else {

    // في المتصفحات القديمة
    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


// =========================================
// 4. السنة الحالية تلقائيًا
// =========================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}