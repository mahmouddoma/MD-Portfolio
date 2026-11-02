import { LocaleCode } from '../../core/i18n/locales';
import { ProfileResourceId } from './profile';

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly dates: string;
  readonly description: string;
}

export interface PortfolioContent {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly skip: string;
  readonly navigation: string;
  readonly home: string;
  readonly work: string;
  readonly about: string;
  readonly contact: string;
  readonly menu: string;
  readonly close: string;
  readonly language: string;
  readonly hero: readonly [string, string];
  readonly intro: string;
  readonly explore: string;
  readonly selected: string;
  readonly selectedIntro: string;
  readonly allWork: string;
  readonly readCase: string;
  readonly visit: string;
  readonly freelance: string;
  readonly enterprise: string;
  readonly contribution: string;
  readonly scope: string;
  readonly technology: string;
  readonly practiceTitle: string;
  readonly practiceText: string;
  readonly practice: readonly { readonly title: string; readonly text: string }[];
  readonly aboutLink: string;
  readonly workTitle: string;
  readonly workIntro: string;
  readonly supporting: string;
  readonly supportingIntro: string;
  readonly independentTitle: string;
  readonly independentIntro: string;
  readonly openCapture: string;
  readonly viewCapture: string;
  readonly aboutTitle: string;
  readonly aboutIntro: readonly string[];
  readonly experienceTitle: string;
  readonly experience: readonly Experience[];
  readonly educationTitle: string;
  readonly education: string;
  readonly resources: Readonly<Record<ProfileResourceId, string>>;
  readonly expertiseTitle: string;
  readonly expertise: readonly { readonly title: string; readonly text: string }[];
  readonly learningTitle: string;
  readonly certifications: readonly string[];
  readonly languagesTitle: string;
  readonly languages: readonly { readonly name: string; readonly level: string }[];
  readonly contactTitle: string;
  readonly contactText: string;
  readonly emailLabel: string;
  readonly availability: string;
  readonly footerNote: string;
  readonly backToWork: string;
  readonly otherCase: string;
  readonly employerNote: string;
  readonly notFoundTitle: string;
  readonly notFoundText: string;
  readonly meta: Readonly<
    Record<
      'home' | 'work' | 'about' | 'notFound',
      { readonly title: string; readonly description: string }
    >
  >;
}

export const PORTFOLIO_CONTENT = {
  en: {
    name: 'Mahmoud Doma',
    role: 'Frontend Engineer · Angular',
    location: 'Cairo, Egypt',
    skip: 'Skip to content',
    navigation: 'Main navigation',
    home: 'Home',
    work: 'Work',
    about: 'About',
    contact: 'Let’s talk',
    menu: 'Menu',
    close: 'Close',
    language: 'Read in Arabic',
    hero: ['Considered interfaces.', 'Complex systems.'],
    intro:
      'I’m Mahmoud, a frontend engineer with 2+ years of professional experience building Angular applications, from expressive websites to real-time enterprise systems. Considered from both sides of the screen.',
    explore: 'Explore my work',
    selected: 'Two sides of my practice.',
    selectedIntro: 'Interface craft and engineering depth, through two different kinds of work.',
    allWork: 'View all work',
    readCase: 'Read the project',
    visit: 'Visit website',
    freelance: 'Freelance',
    enterprise: 'NileTronix · Enterprise',
    contribution: 'My contribution',
    scope: 'Product scope',
    technology: 'Built with',
    practiceTitle: 'The interface is only part of the work.',
    practiceText:
      'A useful frontend also has to handle the work behind it: changing data, different roles, unreliable connections, and two reading directions.',
    practice: [
      {
        title: 'Interfaces with character',
        text: 'Custom visual systems and responsive Angular implementation, brought together in projects such as DEVORA.',
      },
      {
        title: 'Systems that stay connected',
        text: 'Real-time monitoring with SignalR and MQTT, with offline mapping work using IndexedDB and Web Workers.',
      },
      {
        title: 'Arabic, from the start',
        text: 'Bilingual flows, RTL layouts and role-aware enterprise interfaces treated as part of the product.',
      },
    ],
    aboutLink: 'More about my approach',
    workTitle: 'A closer look at the work.',
    workIntro:
      'A selection of freelance products and enterprise applications. Different contexts; the same attention to how an interface works.',
    supporting: 'Enterprise systems',
    supportingIntro:
      'Operational products developed at NileTronix, shown through actual local application captures and the NPark user manual. Captions identify sign-in, sample-data and offline states.',
    independentTitle: 'Independent projects, in view.',
    independentIntro:
      'Real captures from the public websites, paired with the contribution behind each one.',
    openCapture: 'Open full-size capture',
    viewCapture: 'View the interface',
    aboutTitle: 'Thoughtful on the surface. Thorough underneath.',
    aboutIntro: [
      'I’m Mahmoud Doma, a Mid-Level Frontend Engineer based in Cairo. I build Angular interfaces for business systems and freelance products, with more than two years of professional experience.',
      'I enjoy the point where interface decisions meet engineering decisions: how a booking flow reads, how live information updates, or how the same experience feels natural in Arabic and English.',
      'My work spans custom websites, role-aware enterprise dashboards, real-time integrations and offline capabilities. I bring that range to both product teams and freelance collaborations.',
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Mid Front-End Developer · Angular',
        company: 'NileTronix',
        dates: 'August 2025 — Present',
        description:
          'Develop and maintain Angular 19–21 applications for traffic, parking, booking, queues and customer feedback. Integrate SignalR/MQTT updates, build offline map and routing workflows, and coordinate API contracts and frontend error handling. Reusable UI patterns support Arabic RTL and i18n.',
      },
      {
        role: 'Freelance Front-End Developer',
        company: 'Independent',
        dates: '2023 — Present',
        description:
          'Delivered 9+ client-facing Angular and JavaScript applications across legal services, corporate/B2B, ecommerce and software-studio websites. Responsible for responsive implementation and deployment across devices, with freelance work continuing alongside full-time roles.',
      },
      {
        role: 'Software Implementer',
        company: 'Izam, Inc.',
        dates: 'April — October 2024',
        description:
          'ERP interface customization, functional testing, migration validation, user training and documentation.',
      },
    ],
    educationTitle: 'A different starting point',
    education:
      'Bachelor of Arts in French Language & Literature, Zagazig University, 2024. My professional focus today is frontend engineering.',
    resources: { resume: 'Download CV (PDF, English)', linkedin: 'LinkedIn', github: 'GitHub' },
    expertiseTitle: 'What I work with',
    expertise: [
      {
        title: 'Angular & application architecture',
        text: 'Angular 19–21, TypeScript, JavaScript, RxJS, NgRx and Signals. Standalone components, reactive forms, guards, HTTP interceptors, OnPush and lazy loading.',
      },
      {
        title: 'Live data, maps & offline work',
        text: 'REST APIs, SignalR and MQTT for operational updates. IndexedDB, Web Workers and offline caching; Leaflet, GeoJSON, geojson-path-finder and Chart.js for maps and visualization.',
      },
      {
        title: 'Interfaces & quality',
        text: 'PrimeNG, Bootstrap 5, SCSS and responsive HTML/CSS, with Arabic RTL and i18n. Jasmine, Karma, Git and Chrome DevTools support testing and debugging.',
      },
    ],
    learningTitle: 'Learning & languages',
    certifications: [
      'Angular Development Cross-Skilling Nanodegree — MCIT Egypt',
      'JavaScript Certification — SoloLearn',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Professional working proficiency' },
    ],
    contactTitle: 'Have something in mind?',
    contactText:
      'An Angular role, a product to build, or an interface that needs a considered frontend. I’d be glad to hear about it.',
    emailLabel: 'Email Mahmoud',
    availability: 'Based in Cairo · Open to remote work and relocation',
    footerNote: 'Designed and built with care, in English and Arabic.',
    backToWork: 'Back to work',
    otherCase: 'Explore the other featured project',
    employerNote:
      'Developed as part of my work at NileTronix. The product belongs to its employer/client context; no public demo or source access is implied.',
    notFoundTitle: 'This page isn’t here.',
    notFoundText: 'The address may have changed. Explore the selected work or return home.',
    meta: {
      home: {
        title: 'Mahmoud Doma — Frontend Engineer & Angular Developer',
        description:
          'Cairo-based frontend engineer working across expressive websites and complex Angular enterprise systems. Explore verified work and get in touch.',
      },
      work: {
        title: 'Selected work — Mahmoud Doma',
        description:
          'Design and frontend participation in DEVORA, frontend development on Customer Survey at NileTronix, and more Angular projects.',
      },
      about: {
        title: 'About & experience — Mahmoud Doma',
        description:
          'Meet Mahmoud Doma, a Cairo-based Angular frontend engineer. Experience at NileTronix, freelance product work and ERP implementation.',
      },
      notFound: {
        title: 'Page not found — Mahmoud Doma',
        description:
          'This page could not be found. Return to Mahmoud Doma’s portfolio and selected work.',
      },
    },
  },
  ar: {
    name: 'محمود دومة',
    role: 'مهندس واجهات أمامية · Angular',
    location: 'القاهرة، مصر',
    skip: 'انتقل إلى المحتوى',
    navigation: 'التنقل الرئيسي',
    home: 'الرئيسية',
    work: 'الأعمال',
    about: 'عنّي',
    contact: 'نتكلم؟',
    menu: 'القائمة',
    close: 'إغلاق',
    language: 'Read in English',
    hero: ['واجهات مدروسة.', 'أنظمة بتفاصيلها.'],
    intro:
      'أنا محمود، مهندس واجهات أمامية بخبرة مهنية تتجاوز سنتين في تطبيقات Angular، من مواقع لها شخصيتها إلى أنظمة مؤسسية ببيانات لحظية. أهتم بتجربة المستخدم وما وراءها بنفس القدر.',
    explore: 'استكشف أعمالي',
    selected: 'جانبان لنفس الاهتمام.',
    selectedIntro: 'حرفة الواجهة وعمق التنفيذ، من خلال تجربتين مختلفتين.',
    allWork: 'كل الأعمال',
    readCase: 'اقرأ عن المشروع',
    visit: 'زيارة الموقع',
    freelance: 'عمل مستقل',
    enterprise: 'NileTronix · أنظمة مؤسسية',
    contribution: 'مساهمتي',
    scope: 'نطاق المنتج',
    technology: 'التقنيات',
    practiceTitle: 'الواجهة جزء من الحكاية.',
    practiceText:
      'وراء الواجهة المفيدة تفاصيل تستحق نفس الاهتمام: بيانات تتغيّر، وصلاحيات مختلفة، واتصال غير مستقر، وتجربة تعمل في اتجاهَي القراءة.',
    practice: [
      {
        title: 'واجهات لها شخصيتها',
        text: 'أنظمة بصرية مخصصة وتنفيذ متجاوب بـ Angular، يجتمعان في أعمال مثل DEVORA.',
      },
      {
        title: 'أنظمة متصلة بالواقع',
        text: 'متابعة لحظية باستخدام SignalR وMQTT، والعمل على خرائط دون اتصال باستخدام IndexedDB وWeb Workers.',
      },
      {
        title: 'العربية من البداية',
        text: 'مسارات ثنائية اللغة، وتخطيطات RTL، وواجهات تراعي الأدوار والصلاحيات كجزء أصيل من المنتج.',
      },
    ],
    aboutLink: 'أكثر عن طريقتي في العمل',
    workTitle: 'نظرة أقرب على الشغل.',
    workIntro:
      'اختيارات من منتجات مستقلة وتطبيقات مؤسسية. سياقات مختلفة، واهتمام واحد بطريقة عمل الواجهة.',
    supporting: 'أنظمة مؤسسية',
    supportingIntro:
      'منتجات تشغيلية عملت عليها ضمن NileTronix، بلقطات فعلية من التطبيقات المحلية ودليل NPark. يوضح وصف كل صورة إن كانت شاشة دخول أو بيانات عرض نموذجية أو حالة دون اتصال بالخادم.',
    independentTitle: 'المشاريع المستقلة، عن قرب.',
    independentIntro: 'لقطات حقيقية من المواقع العامة، مع توضيح مساهمتي في كل مشروع.',
    openCapture: 'افتح اللقطة بالحجم الكامل',
    viewCapture: 'شاهد الواجهة',
    aboutTitle: 'اهتمام بما تراه. ودقّة فيما وراءه.',
    aboutIntro: [
      'أنا محمود دومة، مهندس واجهات أمامية بمستوى متوسط مقيم في القاهرة، ولديّ أكثر من سنتين من الخبرة المهنية. أبني واجهات Angular لأنظمة الأعمال والمنتجات المستقلة.',
      'أستمتع بالمساحة التي يلتقي فيها قرار التصميم بقرار التنفيذ: كيف يفهم المستخدم خطوات الحجز، وكيف تتحدّث البيانات لحظيًا، وكيف تبدو التجربة طبيعية بالعربية والإنجليزية.',
      'يمتد عملي من المواقع المخصصة إلى لوحات التحكم والصلاحيات والتكاملات اللحظية وإمكانات العمل دون اتصال. وأقدّم هذه الخبرة ضمن فرق المنتجات وفي التعاون المستقل.',
    ],
    experienceTitle: 'الخبرة المهنية',
    experience: [
      {
        role: 'مطوّر واجهات أمامية · Angular',
        company: 'NileTronix',
        dates: 'أغسطس ٢٠٢٥ — حتى الآن',
        description:
          'تطوير وصيانة تطبيقات Angular 19–21 للمرور والمواقف والحجز والطوابير وتقييم العملاء. تكاملات SignalR وMQTT، ومسارات خرائط تعمل دون اتصال، وتنسيق عقود API ومعالجة أخطاء الواجهة، مع مكونات قابلة لإعادة الاستخدام تدعم العربية وتعدد اللغات.',
      },
      {
        role: 'مطوّر واجهات أمامية مستقل',
        company: 'عمل مستقل',
        dates: '٢٠٢٣ — حتى الآن',
        description:
          'نفّذت ٩ تطبيقات أو أكثر للعملاء باستخدام Angular وJavaScript، في الخدمات القانونية ومواقع الشركات والتجارة الإلكترونية واستوديوهات البرمجيات. تولّيت التنفيذ المتجاوب والنشر عبر الأجهزة، مع استمرار العمل المستقل بجانب الوظائف بدوام كامل.',
      },
      {
        role: 'أخصائي تنفيذ أنظمة',
        company: 'Izam, Inc.',
        dates: 'أبريل — أكتوبر ٢٠٢٤',
        description:
          'تخصيص واجهات ERP، والاختبارات الوظيفية، والتحقق من ترحيل البيانات، وتدريب المستخدمين وإعداد التوثيق.',
      },
    ],
    educationTitle: 'بداية من مجال مختلف',
    education:
      'ليسانس آداب في اللغة الفرنسية وآدابها، جامعة الزقازيق، ٢٠٢٤. تركيزي المهني اليوم هو هندسة الواجهات الأمامية.',
    resources: {
      resume: 'تحميل السيرة الذاتية (PDF، بالإنجليزية)',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    expertiseTitle: 'التقنيات في شغلي',
    expertise: [
      {
        title: 'Angular ومعمارية التطبيقات',
        text: 'Angular 19–21 وTypeScript وJavaScript وRxJS وNgRx وSignals. مكونات مستقلة، ونماذج تفاعلية، وحماية المسارات، واعتراض طلبات HTTP، وOnPush والتحميل عند الحاجة.',
      },
      {
        title: 'بيانات لحظية وخرائط دون اتصال',
        text: 'REST APIs وSignalR وMQTT للتحديثات التشغيلية. IndexedDB وWeb Workers والتخزين دون اتصال، مع Leaflet وGeoJSON وgeojson-path-finder وChart.js للخرائط وعرض البيانات.',
      },
      {
        title: 'الواجهات وجودة التنفيذ',
        text: 'PrimeNG وBootstrap 5 وSCSS وواجهات HTML/CSS متجاوبة، مع دعم العربية وRTL وتعدد اللغات. وأستخدم Jasmine وKarma وGit وChrome DevTools في الاختبار وتتبع الأخطاء.',
      },
    ],
    learningTitle: 'التعلّم واللغات',
    certifications: [
      'برنامج Angular Development Cross-Skilling Nanodegree — وزارة الاتصالات وتكنولوجيا المعلومات المصرية (MCIT)',
      'شهادة JavaScript — SoloLearn',
    ],
    languagesTitle: 'اللغات',
    languages: [
      { name: 'العربية', level: 'اللغة الأم' },
      { name: 'الإنجليزية', level: 'إجادة مهنية للعمل' },
    ],
    contactTitle: 'في بالك فكرة؟',
    contactText:
      'فرصة عمل في Angular، أو منتج تريد بناءه، أو واجهة تحتاج تنفيذًا مدروسًا. يسعدني أسمع منك.',
    emailLabel: 'راسل محمود',
    availability: 'مقيم في القاهرة · منفتح على العمل عن بُعد والانتقال',
    footerNote: 'تصميم وتنفيذ باهتمام، بالعربية والإنجليزية.',
    backToWork: 'العودة إلى الأعمال',
    otherCase: 'استكشف المشروع المميز الآخر',
    employerNote:
      'تم تطويره ضمن عملي في NileTronix. المنتج تابع لسياق العمل المؤسسي، ولا يعني عرضه هنا إتاحة تجربة عامة أو وصول إلى الكود.',
    notFoundTitle: 'الصفحة دي مش موجودة.',
    notFoundText: 'قد يكون العنوان تغيّر. استكشف الأعمال أو ارجع إلى الصفحة الرئيسية.',
    meta: {
      home: {
        title: 'محمود دومة — مهندس واجهات أمامية ومطوّر Angular',
        description:
          'مهندس واجهات أمامية من القاهرة، أعمل على مواقع مميزة وأنظمة Angular مؤسسية. تعرّف على أعمالي وتواصل معي.',
      },
      work: {
        title: 'الأعمال — محمود دومة',
        description:
          'مشاركتي في تصميم وتنفيذ DEVORA، وتطوير واجهات منصة تقييم العملاء ضمن NileTronix، واختيارات من أعمال Angular أخرى.',
      },
      about: {
        title: 'عنّي والخبرة المهنية — محمود دومة',
        description:
          'تعرّف على محمود دومة، مهندس واجهات Angular من القاهرة. خبرتي في NileTronix والعمل المستقل وتنفيذ أنظمة ERP.',
      },
      notFound: {
        title: 'الصفحة غير موجودة — محمود دومة',
        description: 'تعذّر العثور على هذه الصفحة. ارجع إلى موقع محمود دومة وأعماله المختارة.',
      },
    },
  },
} as const satisfies Record<LocaleCode, PortfolioContent>;
