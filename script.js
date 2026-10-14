/* =====================================================
   PORTFOLIO ZN - JAVASCRIPT
   Mengatur tema, bahasa, navigasi, dan detail proyek.
   ===================================================== */

// ==================== PILIHAN TEMA ====================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (themeIcon) {
        themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    }

    if (themeToggle) {
        const label = theme === "dark"
            ? "Gunakan tema terang"
            : "Gunakan tema gelap";

        themeToggle.setAttribute("aria-label", label);
        themeToggle.setAttribute("title", label);
    }

    try {
        localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
        // Website tetap berfungsi jika penyimpanan browser tidak tersedia.
    }
}

function getSavedTheme() {
    try {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }
    } catch (error) {
        // Gunakan tema default jika localStorage tidak tersedia.
    }

    return "dark";
}

applyTheme(getSavedTheme());

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme") || "dark";

        const nextTheme =
            currentTheme === "dark" ? "light" : "dark";

        applyTheme(nextTheme);
    });
}


// ==================== TERJEMAHAN BAHASA ====================
const translations = {
    id: {
        "nav-home": "Beranda",
        "nav-about": "Tentang",
        "nav-skills": "Keahlian",
        "nav-projects": "Proyek",
        "nav-experience": "Pengalaman",
        "nav-contact": "Kontak",

        "hero-eyebrow": "HALO, SELAMAT DATANG DI PORTOFOLIO SAYA",
        "hero-intro": "Saya seorang",
        "hero-role": "Web Developer",
        "hero-description": "Lulusan baru Teknologi Informasi yang tertarik mengembangkan website dan aplikasi web dengan tampilan yang menarik, fungsional, serta mudah digunakan.",
        "hero-projects": "Lihat Proyek",
        "hero-cv": "Unduh CV",
        "hero-contact": "Hubungi Saya ↗",
        "hero-profile-description": "Frontend & Backend Development",
        "profile-location-label": "Pendidikan",
        "profile-education": "D3 Teknologi Informasi",
        "profile-status-label": "Status",
        "profile-status": "Fresh Graduate",
        "hero-open": "Terbuka untuk peluang kerja",

        "about-eyebrow": "MENGENAL SAYA",
        "about-title": "Tentang Saya",
        "about-subtitle": "Sedikit cerita tentang latar belakang dan minat saya.",
        "about-heading": "Bersemangat membangun solusi digital melalui teknologi web.",
        "about-paragraph-one": "Saya merupakan lulusan D3 Teknologi Informasi dari Politeknik Negeri Madiun. Saya memiliki ketertarikan pada pengembangan website, mulai dari membangun antarmuka hingga mengembangkan fungsionalitas backend.",
        "about-paragraph-two": "Melalui perkuliahan, proyek, dan pengalaman magang, saya belajar mengembangkan aplikasi menggunakan berbagai teknologi web. Saya juga terbuka untuk mempelajari teknologi baru dan terus meningkatkan kemampuan melalui pengalaman langsung.",
        "about-paragraph-three": "Saya berusaha menyelesaikan tugas dengan bertanggung jawab, bekerja sama dalam tim, dan memberikan hasil terbaik sesuai kemampuan yang dimiliki.",
        "about-link": "Mari terhubung dengan saya →",
        "highlight-one-title": "Web Development",
        "highlight-one-description": "Mengembangkan website dengan frontend dan backend.",
        "highlight-two-title": "UI Design",
        "highlight-two-description": "Memperhatikan tampilan dan kenyamanan pengguna.",
        "highlight-three-title": "Continuous Learning",
        "highlight-three-description": "Terus belajar dan mengembangkan kemampuan.",

        "skills-eyebrow": "KEMAMPUAN SAYA",
        "skills-title": "Keahlian",
        "skills-subtitle": "Teknologi yang pernah saya gunakan dalam pembelajaran dan proyek.",
        "skills-frontend": "Frontend",
        "skills-backend": "Backend",
        "skills-database": "Database",
        "skills-mobile": "Mobile Development",
        "skills-design": "Desain",
        "skills-tools": "Tools",
        "skills-note": "Daftar ini dapat disesuaikan dengan teknologi yang benar-benar dikuasai dan pernah digunakan dalam proyek.",

        "projects-eyebrow": "HASIL KARYA",
        "projects-title": "Proyek Pilihan",
        "projects-subtitle": "Beberapa proyek yang saya kerjakan selama perkuliahan dan magang.",
        "project-type-academic": "Proyek Akademik",
        "project-type-internship": "Proyek Magang",
        "fleet-title": "Sistem Manajemen Armada PNM",
        "fleet-description": "Sistem pengelolaan peminjaman kendaraan operasional dengan antrean FCFS dan fitur pendukung manajemen armada.",
        "notary-title": "Sistem Informasi e-Notaris dan PPAT",
        "notary-description": "Pengembangan sistem informasi berbasis web untuk mendukung pengelolaan informasi layanan notaris dan PPAT.",
        "invitation-label": "THE WEDDING OF",
        "invitation-title": "Website Undangan Pernikahan",
        "invitation-description": "Pembuatan dua proyek website undangan pernikahan dengan fokus pada desain antarmuka dan implementasi HTML/CSS.",
        "project-detail": "Detail Proyek +",
        "ask-project": "Minta Informasi ↗",
        "dialog-eyebrow": "DETAIL PROYEK",
        "dialog-tech-title": "Teknologi yang Digunakan",
        "dialog-github": "Lihat Repository",

        "experience-eyebrow": "PERJALANAN SAYA",
        "experience-title": "Pengalaman & Pendidikan",
        "experience-subtitle": "Pengalaman yang membentuk kemampuan dan pemahaman saya di bidang TI.",
        "internship-date": "Januari – Juni 2025",
        "internship-title": "Technical Support / Web Development Intern",
        "internship-location": "Yogyakarta, Indonesia",
        "internship-task-one": "Mengembangkan dua proyek website undangan pernikahan menggunakan HTML dan CSS.",
        "internship-task-two": "Terlibat dalam pengembangan sistem informasi e-Notaris dan PPAT berbasis Laravel.",
        "internship-task-three": "Membantu pembuatan artikel dan konten informasi.",
        "education-date": "Lulus 2026",
        "education-title": "D3 Teknologi Informasi",
        "education-location": "Madiun, Indonesia",
        "education-description": "Mempelajari dasar pemrograman, pengembangan aplikasi web dan mobile, basis data, serta perancangan antarmuka.",

        "certificate-eyebrow": "PENGEMBANGAN DIRI",
        "certificate-title": "Sertifikat",
        "certificate-subtitle": "Sertifikasi dan pelatihan yang mendukung perjalanan belajar saya.",
        "certificate-name": "Sertifikat Kompetensi BNSP",
        "certificate-description": "Sertifikat kompetensi yang diperoleh melalui program pelatihan atau sertifikasi. Nama skema dan detailnya perlu disesuaikan dengan dokumen sertifikat asli.",
        "certificate-note": "Perbarui bagian ini dengan nama sertifikasi, penerbit, dan tanggal sesuai sertifikat yang dimiliki.",
        "certificate-view": "Lihat Sertifikat ↗",

        "contact-eyebrow": "MARI TERHUBUNG",
        "contact-title": "Punya peluang atau ingin berdiskusi?",
        "contact-description": "Saya terbuka untuk peluang kerja, kolaborasi, dan diskusi seputar pengembangan website. Silakan hubungi saya.",
        "contact-email": "Kirim Email ↗",
        "contact-linkedin": "Profil LinkedIn",
        "footer-text": "Dirancang dan dikembangkan dengan semangat belajar."
    },

    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-experience": "Experience",
        "nav-contact": "Contact",

        "hero-eyebrow": "HELLO, WELCOME TO MY PORTFOLIO",
        "hero-intro": "I am a",
        "hero-role": "Web Developer",
        "hero-description": "An Information Technology graduate interested in building attractive, functional, and user-friendly websites and web applications.",
        "hero-projects": "View Projects",
        "hero-cv": "Download CV",
        "hero-contact": "Contact Me ↗",
        "hero-profile-description": "Frontend & Backend Development",
        "profile-location-label": "Education",
        "profile-education": "Associate Degree in IT",
        "profile-status-label": "Status",
        "profile-status": "Fresh Graduate",
        "hero-open": "Open to job opportunities",

        "about-eyebrow": "GET TO KNOW ME",
        "about-title": "About Me",
        "about-subtitle": "A little about my background and interests.",
        "about-heading": "Passionate about building digital solutions through web technology.",
        "about-paragraph-one": "I am an Information Technology associate-degree graduate from Politeknik Negeri Madiun. I am interested in website development, from building user interfaces to implementing backend functionality.",
        "about-paragraph-two": "Through coursework, projects, and internship experience, I have learned to develop applications using various web technologies. I am also open to learning new technologies and improving my skills through hands-on experience.",
        "about-paragraph-three": "I strive to complete tasks responsibly, collaborate with a team, and deliver the best results within my abilities.",
        "about-link": "Let's connect →",
        "highlight-one-title": "Web Development",
        "highlight-one-description": "Building websites with frontend and backend functionality.",
        "highlight-two-title": "UI Design",
        "highlight-two-description": "Considering visual design and user experience.",
        "highlight-three-title": "Continuous Learning",
        "highlight-three-description": "Continuously learning and improving my skills.",

        "skills-eyebrow": "WHAT I CAN DO",
        "skills-title": "Skills",
        "skills-subtitle": "Technologies I have used in learning and projects.",
        "skills-frontend": "Frontend",
        "skills-backend": "Backend",
        "skills-database": "Database",
        "skills-mobile": "Mobile Development",
        "skills-design": "Design",
        "skills-tools": "Tools",
        "skills-note": "This list should reflect technologies I have genuinely used and can discuss in detail.",

        "projects-eyebrow": "SELECTED WORK",
        "projects-title": "Featured Projects",
        "projects-subtitle": "Selected projects from my studies and internship.",
        "project-type-academic": "Academic Project",
        "project-type-internship": "Internship Project",
        "fleet-title": "PNM Fleet Management System",
        "fleet-description": "A system for managing operational vehicle bookings with an FCFS queue and fleet-management support features.",
        "notary-title": "e-Notary and PPAT Information System",
        "notary-description": "A web-based information system developed to support the management of notary and PPAT service information.",
        "invitation-label": "THE WEDDING OF",
        "invitation-title": "Wedding Invitation Websites",
        "invitation-description": "Two wedding invitation website projects focused on interface design and HTML/CSS implementation.",
        "project-detail": "Project Details +",
        "ask-project": "Ask for Details ↗",
        "dialog-eyebrow": "PROJECT DETAILS",
        "dialog-tech-title": "Technologies Used",
        "dialog-github": "View Repository",

        "experience-eyebrow": "MY JOURNEY",
        "experience-title": "Experience & Education",
        "experience-subtitle": "Experiences that have shaped my skills and understanding of IT.",
        "internship-date": "January – June 2025",
        "internship-title": "Technical Support / Web Development Intern",
        "internship-location": "Yogyakarta, Indonesia",
        "internship-task-one": "Developed two wedding invitation website projects using HTML and CSS.",
        "internship-task-two": "Contributed to the development of a Laravel-based e-Notary and PPAT information system.",
        "internship-task-three": "Assisted with creating articles and informational content.",
        "education-date": "Graduated 2026",
        "education-title": "Associate Degree in Information Technology",
        "education-location": "Madiun, Indonesia",
        "education-description": "Studied programming fundamentals, web and mobile application development, databases, and interface design.",

        "certificate-eyebrow": "PROFESSIONAL DEVELOPMENT",
        "certificate-title": "Certificate",
        "certificate-subtitle": "Certifications and training that support my learning journey.",
        "certificate-name": "BNSP Competency Certificate",
        "certificate-description": "A competency certificate obtained through a training or certification program. The scheme name and details should match the original certificate.",
        "certificate-note": "Update this section with the exact certification name, issuer, and date shown on the certificate.",
        "certificate-view": "View Certificate ↗",

        "contact-eyebrow": "LET'S CONNECT",
        "contact-title": "Have an opportunity or want to discuss a project?",
        "contact-description": "I am open to job opportunities, collaboration, and discussions about web development. Feel free to reach out.",
        "contact-email": "Send an Email ↗",
        "contact-linkedin": "LinkedIn Profile",
        "footer-text": "Designed and developed with a passion for learning."
    }
};

const languageToggle = document.getElementById("language-toggle");

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "id";

    document.documentElement.setAttribute("lang", selectedLanguage);

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        const translatedText = translations[selectedLanguage][key];

        if (translatedText) {
            element.textContent = translatedText;
        }
    });

    if (languageToggle) {
        languageToggle.textContent =
            selectedLanguage === "id" ? "ID / EN" : "EN / ID";

        languageToggle.setAttribute(
            "aria-label",
            selectedLanguage === "id"
                ? "Switch language to English"
                : "Ganti bahasa ke Indonesia"
        );
    }

    try {
        localStorage.setItem("portfolio-language", selectedLanguage);
    } catch (error) {
        // Bahasa tetap berubah meskipun localStorage tidak tersedia.
    }
}

function getSavedLanguage() {
    try {
        const savedLanguage = localStorage.getItem("portfolio-language");

        if (savedLanguage === "id" || savedLanguage === "en") {
            return savedLanguage;
        }
    } catch (error) {
        // Gunakan bahasa Indonesia sebagai default.
    }

    return "id";
}

applyLanguage(getSavedLanguage());

if (languageToggle) {
    languageToggle.addEventListener("click", function () {
        const currentLanguage =
            document.documentElement.getAttribute("lang") || "id";

        const nextLanguage =
            currentLanguage === "id" ? "en" : "id";

        applyLanguage(nextLanguage);
    });
}


// ==================== MENU NAVIGASI MOBILE ====================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

function closeMobileMenu() {
    if (!menuToggle || !navMenu) {
        return;
    }

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", function (event) {
        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMobileMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });
}


// ==================== DETAIL PROYEK ====================
const projectDialog = document.getElementById("project-dialog");
const dialogClose = document.getElementById("dialog-close");
const dialogTitle = document.getElementById("dialog-title");
const dialogDescription = document.getElementById("dialog-description");
const dialogTechnologies = document.getElementById("dialog-technologies");
const dialogLink = document.getElementById("dialog-link");

const projectDetails = {
    fleet: {
        title: {
            id: "Sistem Manajemen Armada PNM",
            en: "PNM Fleet Management System"
        },

        description: {
            id: "Proyek akademik berupa sistem informasi untuk mendukung pengelolaan peminjaman kendaraan operasional. Sistem dirancang dengan alur pengajuan dan pemeriksaan ketersediaan kendaraan serta pendekatan antrean First Come First Served (FCFS). Sesuaikan deskripsi ini dengan fitur yang sudah benar-benar selesai.",

            en: "An academic information system designed to support operational vehicle bookings. It includes a booking and vehicle-availability review flow and uses a First Come First Served (FCFS) queue approach. Adjust this description to match the features that are actually complete."
        },

        technologies: ["Laravel", "MySQL", "Flutter"],

        link: "https://github.com/zahynadhirnashrullah/SISTEM-ARMADA-PNM"
    },

    notary: {
        title: {
            id: "Sistem Informasi e-Notaris dan PPAT",
            en: "e-Notary and PPAT Information System"
        },

        description: {
            id: "Proyek selama magang yang berfokus pada pengembangan sistem informasi berbasis web menggunakan Laravel dan MySQL untuk mendukung pengelolaan informasi layanan notaris dan PPAT. Perbarui deskripsi ini sesuai kontribusi dan fitur yang kamu kerjakan.",

            en: "An internship project focused on developing a web-based information system using Laravel and MySQL to support notary and PPAT service information. Update this description to reflect your own contributions and completed features."
        },

        technologies: ["Laravel", "PHP", "MySQL", "AdminLTE"],

        link: "https://github.com/"
    }
};

function openProjectDialog(projectKey) {
    const project = projectDetails[projectKey];

    if (!project || !projectDialog) {
        return;
    }

    const language =
        document.documentElement.getAttribute("lang") === "en" ? "en" : "id";

    if (dialogTitle) {
        dialogTitle.textContent = project.title[language];
    }

    if (dialogDescription) {
        dialogDescription.textContent = project.description[language];
    }

    if (dialogTechnologies) {
        dialogTechnologies.replaceChildren();

        project.technologies.forEach(function (technology) {
            const tag = document.createElement("span");

            tag.textContent = technology;

            dialogTechnologies.appendChild(tag);
        });
    }

    if (dialogLink) {
        dialogLink.href = project.link;
    }

    if (typeof projectDialog.showModal === "function") {
        projectDialog.showModal();
    } else {
        projectDialog.setAttribute("open", "");
    }
}

document.querySelectorAll("[data-project]").forEach(function (button) {
    button.addEventListener("click", function () {
        const projectKey = button.getAttribute("data-project");

        openProjectDialog(projectKey);
    });
});

function closeProjectDialog() {
    if (!projectDialog) {
        return;
    }

    if (typeof projectDialog.close === "function") {
        projectDialog.close();
    } else {
        projectDialog.removeAttribute("open");
    }
}

if (dialogClose) {
    dialogClose.addEventListener("click", closeProjectDialog);
}

if (projectDialog) {
    projectDialog.addEventListener("click", function (event) {
        if (event.target === projectDialog) {
            closeProjectDialog();
        }
    });

    projectDialog.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeProjectDialog();
        }
    });
}


// ==================== TAHUN OTOMATIS DI FOOTER ====================
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ==================== ANIMASI SAAT SECTION MUNCUL ====================
const animatedElements = document.querySelectorAll(
    ".section-heading, .about-content, .highlight-card, .skill-card, .project-card, .timeline-item, .certificate-card, .contact-card"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(function (element) {
        element.classList.add("reveal-on-scroll");

        revealObserver.observe(element);
    });
} else {
    // Tampilkan semua konten jika browser tidak mendukung IntersectionObserver.
    animatedElements.forEach(function (element) {
        element.classList.add("is-visible");
    });
}