import { ProfileInfo, Project, SkillCategory, EducationItem, CertificationItem } from '../types';

export const profileData: ProfileInfo = {
  name: "NAND KISHOR GORAIN",
  title: "Android & Full-Stack Web Developer",
  location: "Jharkhand, India",
  email: "nandkishorgorain@gmail.com",
  linkedin: "https://www.linkedin.com/in/nandkishor10",
  github: "https://github.com/NandKishor-10",
  summary: "Android Developer with a BCA in Computer Applications, skilled in Kotlin and Jetpack Compose, with hands-on experience building and shipping mobile apps using MVVM architecture, Koin/Hilt dependency injection, and REST-backed data layers. Also comfortable working across the stack, having independently built and deployed full-stack web applications with React, Next.js, and TypeScript. Strong foundation in software fundamentals, API integration, and cross-platform development.",
  stats: [
    { label: "Mobile & Web Apps", value: "5+", sublabel: "Built & Deployed" },
    { label: "DSA Challenge", value: "160 Days", sublabel: "GeeksforGeeks" },
    { label: "BCA Degree", value: "7.41", sublabel: "CGPA (2022–2025)" },
    { label: "Core Stacks", value: "10+", sublabel: "Kotlin, Compose, React, Next.js" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "quiz-platform-android",
    title: "Quiz Platform",
    tagline: "Android app with real-time scoring, MVVM architecture & Ktor REST backend",
    category: "Android App",
    description: "Developed a native Android quiz application with real-time scoring and user interaction management, built on Jetpack Compose with MVVM architecture, Ktor-based REST backend, and DataStore persistence.",
    bulletPoints: [
      "Developed a quiz application with real-time scoring and user interaction management, built on Jetpack Compose with an MVVM architecture.",
      "Integrated a Ktor-based backend for question handling and performance tracking, consumed over REST APIs.",
      "Implemented Koin for dependency injection and DataStore for preference and score persistence."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Ktor", "Koin", "DataStore", "MVVM", "REST APIs"],
    codeUrl: "https://github.com/NandKishor-10/QuizApp",
    featured: true,
    metrics: "MVVM + Ktor Backend + Koin DI & DataStore",
    imagePlaceholder: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    demoSnippet: `// Jetpack Compose MVVM ViewState Snippet
@Composable
function QuizScreen(viewModel: QuizViewModel = koinViewModel()) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    
    when (state) {
        is QuizUiState.Loading -> CircularProgressIndicator()
        is QuizUiState.Success -> QuestionCard(
            question = state.currentQuestion,
            onAnswerSelect = { viewModel.submitAnswer(it) }
        )
    }
}`
  },
  {
    id: "file-server-android",
    title: "File Server",
    tagline: "Local HTTP file-sharing server for Android with NanoHTTPD & Jetpack Compose UI",
    category: "Android App",
    description: "Built a local file-sharing server application using NanoHTTPD to serve device files over HTTP to any web browser on the same network with secure directory whitelisting and custom routing.",
    bulletPoints: [
      "Built a local file-sharing server using NanoHTTPD to serve device files over HTTP to any browser on the same network.",
      "Implemented secure directory whitelisting and custom routing to control file access.",
      "Developed a Compose-based UI for file browsing and server control."
    ],
    techStack: ["Kotlin", "NanoHTTPD", "Jetpack Compose", "Custom Routing", "Security Whitelisting"],
    codeUrl: "https://github.com/NandKishor-10/file-server",
    featured: true,
    metrics: "In-App HTTP Server + Secure Directory Access",
    imagePlaceholder: "linear-gradient(135deg, #334155 0%, #1e293b 100%)",
    demoSnippet: `// NanoHTTPD Embedded HTTP Server Router Snippet
class LocalFileServer(port: Int, private val allowedDir: File) : NanoHTTPD(port) {
    override fun serve(session: IHTTPSession): Response {
        val uri = session.uri
        val requestedFile = File(allowedDir, uri)
        
        return if (requestedFile.canonicalPath.startsWith(allowedDir.canonicalPath) && requestedFile.exists()) {
            newChunkedResponse(Response.Status.OK, getMimeType(uri), requestedFile.inputStream())
        } else {
            newFixedLengthResponse(Response.Status.FORBIDDEN, MIME_PLAINTEXT, "Access Denied")
        }
    }
}`
  },
  {
    id: "creators-ai",
    title: "CreatorsAI",
    tagline: "AI-powered SaaS platform for auto-generating short-form clips & SEO video metadata",
    category: "AI SaaS",
    description: "Built and shipped an AI-powered SaaS platform that helps YouTubers and podcasters auto-generate short-form clips, captions, thumbnails, and optimized video metadata without a production team.",
    bulletPoints: [
      "Built and shipped an AI-powered SaaS platform that helps YouTubers and podcasters auto-generate short-form clips, captions, and thumbnails.",
      "Implemented video analysis to detect key moments and integrated multiple AI services into a unified web platform.",
      "Developed the end-to-end frontend workflow that extracts key moments from long-form video and renders 15–60 second clips with mobile-optimized captions."
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    codeUrl: "https://github.com/NandKishor-10/creatorsAi",
    liveUrl: "https://www.creatorsai.live/",
    featured: true,
    metrics: "Automates 15–60s clip generation & video metadata optimization",
    imagePlaceholder: "linear-gradient(135deg, #475569 0%, #334155 100%)",
    demoSnippet: `// Sample clip extraction & caption synchronization snippet
export async function generateClipsFromVideo(videoUrl: string, options: ClipOptions) {
  const highlights = await aiEngine.analyzeTimestampMoments(videoUrl);
  return highlights.map(highlight => ({
    startTime: highlight.start,
    endTime: highlight.end,
    captionTrack: generateStyledSubtitles(highlight.transcript),
    aspectRatio: '9:16'
  }));
}`
  },
  {
    id: "pixxel-ai",
    title: "PixxelAI",
    tagline: "Full-stack AI-powered image editor with HTML5 Canvas & Clerk Auth",
    category: "Canvas & Graphics",
    description: "Engineered a full-stack AI-powered image editing platform featuring real-time HTML5 Canvas manipulation, automated background removal, reference-based image generation, and Clerk authentication.",
    bulletPoints: [
      "Built a full-stack AI-powered image editor with real-time Canvas-based rendering and advanced editing tools (filters, blur, tint, color correction).",
      "Integrated cloud-based AI models for background removal and reference-based image generation.",
      "Integrated user authentication via Clerk and optimized asset delivery through ImageKit."
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 Canvas API", "Clerk", "ImageKit"],
    codeUrl: "https://github.com/NandKishor-10/pixxelAi",
    liveUrl: "http://pixxelai.live/",
    featured: true,
    metrics: "Real-time canvas filter rendering + background removal",
    imagePlaceholder: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
    demoSnippet: `// HTML5 Canvas Filter Transformation Engine
export function applyCanvasFilter(ctx: CanvasRenderingContext2D, width: number, height: number, filterType: string) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (filterType === 'AI_ENHANCE') {
      data[i] = Math.min(255, data[i] * 1.15);     // Red
      data[i+1] = Math.min(255, data[i+1] * 1.08); // Green
      data[i+2] = Math.min(255, data[i+2] * 1.20); // Blue
    }
  }
  ctx.putImageData(imageData, 0, 0);
}`
  },
  {
    id: "loveedit",
    title: "LoveEdit",
    tagline: "Generative AI photo-editing platform with context-aware Generative Fill",
    category: "Generative AI",
    description: "Architected and deployed loveedit.art, a generative AI photo-editing platform for digital artists with in-browser annotation, pixel-accurate background removal, and smart AI filters.",
    bulletPoints: [
      "Architected and deployed loveedit.art, a generative AI photo-editing platform for digital artists and designers.",
      "Implemented a text-to-image generation pipeline and a context-aware Generative Fill engine for seamless image expansion and modification.",
      "Built pixel-accurate background removal and image upscaling features."
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Generative AI API", "Canvas API"],
    liveUrl: "https://www.loveedit.art/",
    featured: true,
    metrics: "Live at www.loveedit.art — Generative Fill & Pixel-Accurate AI Upscaling",
    imagePlaceholder: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    demoSnippet: `// Generative Fill Pipeline
export async function executeGenerativeFill(imageBlob: Blob, maskArea: MaskCoordinates, prompt: string) {
  const payload = {
    image: await blobToBase64(imageBlob),
    mask: renderMaskToCanvas(maskArea),
    prompt: prompt,
    guidanceScale: 7.5
  };
  return await aiService.inpainting(payload);
}`
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Web Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 95, highlight: true, description: "Hooks, Context, Custom Performance" },
      { name: "Next.js", level: 90, highlight: true, description: "App Router, SSR, SSG, Server Actions" },
      { name: "Tailwind CSS", level: 95, highlight: true, description: "Utility-First, Custom Config, Responsive Design" },
      { name: "REST APIs", level: 92, highlight: true, description: "API Routing, JSON serialization, Error Handling" },
      { name: "HTML5 Canvas API", level: 88, highlight: true, description: "Pixel manipulation, Filters, Image Processing" }
    ]
  },
  {
    title: "Languages",
    icon: "Code",
    skills: [
      { name: "Kotlin", level: 92, highlight: true, description: "Functional & Object-Oriented, Coroutines" },
      { name: "TypeScript", level: 90, highlight: true, description: "Generics, Utility Types, Strict Typing" },
      { name: "JavaScript (ES6+)", level: 95, highlight: true, description: "Async/Await, Closures, DOM, Canvas" },
      { name: "Java", level: 85, highlight: false, description: "Core Java, Multithreading, OOP" },
      { name: "Python", level: 80, highlight: false, description: "Scripting, AI integrations, Algorithms" }
    ]
  },
  {
    title: "Android Development",
    icon: "Smartphone",
    skills: [
      { name: "Kotlin & Java", level: 92, highlight: true, description: "Coroutines, Flows, OOP, Cross-platform" },
      { name: "Jetpack Compose", level: 90, highlight: true, description: "Declarative UI, State, Recomposition" },
      { name: "MVVM Architecture", level: 92, highlight: true, description: "ViewModel, LiveData, Unidirectional Data Flow" },
      { name: "Koin & Hilt / Dagger", level: 88, highlight: true, description: "Dependency Injection & Modularization" },
      { name: "Room DB & DataStore", level: 88, highlight: true, description: "SQLite persistence, key-value preferences" },
      { name: "Retrofit, Coil & Glide", level: 90, highlight: false, description: "Async networking, image caching" },
      { name: "WorkManager & Paging", level: 85, highlight: false, description: "Background tasks, Jetpack Paging 3" }
    ]
  },
  {
    title: "Tools & Concepts",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub", level: 92, highlight: true, description: "Branching, PRs, Merge Conflict Resolution" },
      { name: "Image Processing", level: 88, highlight: true, description: "Canvas API, Filters, Generative Fill, ImageKit" },
      { name: "Data Structures & Algorithms", level: 90, highlight: true, description: "160 Days GFG Challenge, Arrays, Trees, Graphs" },
      { name: "Component Architecture", level: 92, highlight: true, description: "Reusable, Decoupled, Clean Code Design" }
    ]
  },
  {
    title: "Backend & Database",
    icon: "Database",
    skills: [
      { name: "Ktor", level: 82, highlight: true, description: "Asynchronous Kotlin Web Framework & REST APIs" },
      { name: "Node.js & Express", level: 88, highlight: true, description: "RESTful Endpoints, Middleware, Auth" },
      { name: "Firebase", level: 85, highlight: false, description: "Firestore, Auth, Cloud Storage" },
      { name: "Room DB / SQLite", level: 88, highlight: true, description: "Local Android Relational Persistence" },
      { name: "PostgreSQL & MongoDB", level: 80, highlight: false, description: "Relational Queries & Document Stores" }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Binod Bihari Mahto Kolyanchal University, Dhanbad, Jharkhand",
    period: "Oct 2022 – Sep 2025",
    score: "7.41 / 10.0",
    scoreType: "CGPA",
    relevantCoursework: [
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Computer Networks"
    ],
    description: "Specialized in Computer Applications with a strong foundation in software fundamentals, API integration, and cross-platform development."
  },
  {
    degree: "Intermediate (10+2)",
    institution: "Binod Bihari Mahto College, Baliapur, Jharkhand",
    period: "2020 – 2022",
    score: "85%",
    scoreType: "Percentage",
    relevantCoursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    description: "Graduated with distinction in Science stream with 85% percentage."
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Frontend Development — 4-Week Internship",
    issuer: "Unified Mentor",
    duration: "4-Week Internship",
    details: "Completed 4-week internship in Frontend Development, working with modern web UI components, responsive layouts, and API integrations.",
    badgeColor: "#1e293b",
    certificateUrl: "https://drive.google.com/file/d/1pw3eMZwB53UETgs88jNu_ZXkD2skpYqL/view"
  },
  {
    id: "cert-2",
    title: "GFG160 — 160 Days DSA Challenge",
    issuer: "GeeksforGeeks",
    duration: "160 Consecutive Days",
    details: "Successfully completed the 160-day Data Structures & Algorithms challenge on GeeksforGeeks, solving problem sets in arrays, trees, graphs, and dynamic programming.",
    badgeColor: "#334155",
    certificateUrl: "https://media.geeksforgeeks.org/courses/certificates/8ef616e80fd5ee477a57ae4c765a7323.pdf"
  }
];
