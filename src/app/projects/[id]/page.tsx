"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, ZoomIn, ShieldCheck, Cpu, Code2, Database, Map, ChevronLeft, ChevronRight, Layers, FileText, BarChart3, Binary, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, projectArchitectures } from "@/data";
import { GithubIcon } from "@/components/icons";

const IconMap: Record<string, any> = {
  Code2, Cpu, Database, Map, ShieldCheck, FileText, Binary, LayoutDashboard, BarChart3, Layers
};

function TechIcon({ name }: { name: string }) {
  return (
    <span className="px-2 py-1 text-[10px] font-mono font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 rounded uppercase">
      {name}
    </span>
  );
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const appDetailsDetailed: Record<string, string> = {
  "nexevent-2026": "NexEvent utilizes a role-based approval pipeline designed to coordinate university event planning across three user roles: Superadmins (Student Affairs Directorate), Admins (Organization Presidents), and Students (divided into Organization Members and Regular Students).\n\nThe workflow functions as follows:\n1. Organization Presidents (Admins) submit event proposals directly, which wait for final review and approval by the Student Affairs Directorate (Superadmin) before being published to the mobile client.\n2. Organization Members (Students) can also propose events. However, their requests undergo a two-stage process: first reviewed by their Organization President, and if approved, forwarded to the Student Affairs Directorate for final verification.\n3. To maintain platform integrity, regular students cannot submit events, and the event submission button is hidden from their dashboard, whereas active organization members have full access to it.",
  "posyandu-pintar": "Posyandu Pintar provides a health data logging dashboard for infant records, offering automated BMI/growth chart rendering and Groq AI diet suggestions.\n\nKey features include:\n- Health cadres record physical developmental metrics (weight, height, arm/head circumferences) during monthly sessions.\n- The system parses these statistics against WHO reference datasets to compute growth percentiles and outputs clear visualizations.\n- It queries LLM models via Groq API to generate contextual nutrition diagnoses, and supports exporting logs into Excel reports.",
  "microplast-2026": "MicroPlast automates microplastic fragment analysis under microscopic views using OpenCV binarization, Otsu filters, and circularity calculations.\n\nThe processing pipeline runs as follows:\n1. Loads raw microscopic lens photographs and applies Gaussian Blur to eliminate vignette shadow gradients.\n2. Segments particles using adaptive thresholding and performs mathematical closing operations to smooth particle edges.\n3. Extracts particle contours, measures area/perimeter geometry, and calculates circularity metrics to classify contaminants into distinct shape groups (like fibers vs fragments).",
  "gpt-ner-2026": "GPT-NER converts plain English documents into structured JSON entity labels, querying Groq Llama-3 models with evaluation metrics.\n\nThe text extraction pipeline functions as follows:\n1. Loads plain text files and coordinates API queries with customized prompting templates to extract key tokens (like names, organizations, and locations).\n2. Parses LLM responses using regular expressions to clean up JSON tags.\n3. Processes dataset lines to compare Llama-3 extractions against standard CoNLL-2003 labeled benchmarks to report F1-score, precision, and recall statistics.",
  "my-dormitory-2025": "My Dormitory manages resident check-in/check-out confirmations using localized GPS fence validation and camera-verified QR code scans.\n\nThe check-in/check-out workflow works as follows:\n- Residents scan dynamic QR codes displayed at the lobby desk using their mobile camera.\n- The mobile client tracks active GPS coordinates to verify that scans are within a strict radius of the dormitory building.\n- Building managers process these verified entries to monitor room occupancy and resolve maintenance work orders.",
  "telyutalks-2025": "TelyuTalks serves as a campus question-and-answer discussion forum, integrating Telkom SSO login and admin content moderation queues.\n\nCore forum workflows include:\n- Students and faculty authenticate using official single sign-on emails to publish academic inquiries, submit answers, and upvote threads.\n- The system runs an automated filter to check for flag words and pipes reports of policy violations directly into an administrative review desk.\n- Administrators and moderators manage reported threads and remove inappropriate content to maintain forum integrity."
};

function getAppDetailsDetailed(id: string): string {
  return appDetailsDetailed[id] || "";
}

// 1. Grouped screenshots combining consecutive pages (1, 2, 3) for all projects
const projectsScreenshots: Record<string, { mobile?: any[]; web?: any[] }> = {
  "nexevent-2026": {
    mobile: [
      {
        id: "register-mobile",
        label: "Register Account Flow",
        images: ["/projects/nexevent/Register mobile1.jpg", "/projects/nexevent/Register mobile2.jpg"]
      },
      {
        id: "login-mobile",
        label: "Mobile Authentication Gate",
        images: ["/projects/nexevent/Login mobile.jpg"]
      },
      {
        id: "dashboard-mobile",
        label: "Explore Events Hub",
        images: ["/projects/nexevent/Dashboard mobile.jpg"]
      },
      {
        id: "submit-event-mobile",
        label: "Event Submission Form",
        images: [
          "/projects/nexevent/Ajukan acara mobile1.jpg",
          "/projects/nexevent/Ajukan acara mobile2.jpg"
        ]
      },
      {
        id: "detail-event-mobile",
        label: "Event Details Panel",
        images: ["/projects/nexevent/Detail acara mobile.jpg"]
      },
      {
        id: "mytickets-mobile",
        label: "Digital Event Ticket",
        images: ["/projects/nexevent/Mytickets mobile.jpg"]
      },
      {
        id: "profile-mobile",
        label: "User Profile Panel",
        images: ["/projects/nexevent/Profile mobile.jpg", "/projects/nexevent/Profile mobile2.jpg"]
      }
    ],
    web: [
      {
        id: "login-web",
        label: "Admin Login Portal",
        images: ["/projects/nexevent/Login admin dan superadmin.jpg"]
      },
      {
        id: "register-web",
        label: "Admin Account Registration",
        images: ["/projects/nexevent/Register admin.jpg"]
      },
      {
        id: "dashboard-admin",
        label: "Organization Dashboard Statistics",
        images: ["/projects/nexevent/Dashboard admin.jpg"]
      },
      {
        id: "dashboard-superadmin",
        label: "Superadmin Control Center",
        images: ["/projects/nexevent/Dashboard superadmin.jpg"]
      },
      {
        id: "submit-event-web",
        label: "Admin Event Submission Desk",
        images: ["/projects/nexevent/Ajukan acara admin1.jpg", "/projects/nexevent/Ajukan acara admin2.jpg"]
      },
      {
        id: "edit-event-web",
        label: "Admin Edit Event Panel",
        images: ["/projects/nexevent/Edit acara admin1.jpg", "/projects/nexevent/Edit acara admin2.jpg"]
      },
      {
        id: "list-events-web",
        label: "Organization Event Catalog",
        images: ["/projects/nexevent/Page acara admin.jpg"]
      },
      {
        id: "all-events-superadmin",
        label: "Superadmin Approval Desk",
        images: ["/projects/nexevent/All events superadmin.jpg", "/projects/nexevent/Pusat approval superadmin.jpg"]
      },
      {
        id: "panitia-web",
        label: "Committee Management Panel",
        images: ["/projects/nexevent/Manajemen panitia admin.jpg"]
      },
      {
        id: "peserta-web",
        label: "Participant Registry Matrix",
        images: ["/projects/nexevent/Manajemen peserta admin.jpg"]
      },
      {
        id: "kehadiran-web",
        label: "QR Attendance Verification",
        images: ["/projects/nexevent/Verifikasi kehadiran admin.jpg"]
      },
      {
        id: "organisasi-superadmin",
        label: "Superadmin Organization Manager",
        images: ["/projects/nexevent/Manajemen organisasi superadmin.jpg"]
      }
    ]
  },
  "posyandu-pintar": {
    web: [
      {
        id: "login-posyandu",
        label: "Kader Authentication Portal",
        images: ["/projects/posyandu-ceria/login.png"]
      },
      {
        id: "register-posyandu",
        label: "Kader Account Registration",
        images: ["/projects/posyandu-ceria/registrasi.png"]
      },
      {
        id: "dashboard-posyandu",
        label: "Growth Metrics Overview Dashboard",
        images: ["/projects/posyandu-ceria/dashboard.png"]
      },
      {
        id: "list-posyandu",
        label: "Child Patient Registry",
        images: ["/projects/posyandu-ceria/daftar balita.png"]
      },
      {
        id: "add-posyandu",
        label: "New Child Account Wizard",
        images: [
          "/projects/posyandu-ceria/tambah balita.png",
          "/projects/posyandu-ceria/tambah balita2.png",
          "/projects/posyandu-ceria/tambah balita3.png"
        ]
      },
      {
        id: "detail-posyandu",
        label: "Growth Analytics Details & Charts",
        images: ["/projects/posyandu-ceria/detail balita.png"]
      },
      {
        id: "measure-posyandu",
        label: "Growth Parameter Entry Form",
        images: ["/projects/posyandu-ceria/input pengukuran balita.png"]
      },
      {
        id: "edit-posyandu",
        label: "Edit Bio & Measurements Form",
        images: ["/projects/posyandu-ceria/edit data balita.png"]
      },
      {
        id: "absensi-posyandu",
        label: "Monthly Attendance Sheet",
        images: ["/projects/posyandu-ceria/absensi balita.png"]
      },
      {
        id: "report-posyandu",
        label: "Integrated Periodic Excel Reporting",
        images: ["/projects/posyandu-ceria/laporan data balita.png", "/projects/posyandu-ceria/laporan data balita2.png"]
      },
      {
        id: "logout-posyandu",
        label: "End Active Session Modal",
        images: ["/projects/posyandu-ceria/logout.png"]
      }
    ]
  },
  "my-dormitory-2025": {
    mobile: [
      {
        id: "dashboard-mydorm-mobile",
        label: "Resident Mobile Workspace",
        images: ["/projects/mydormitory/dashboard mobile.png"]
      },
      {
        id: "presensi-mydorm-mobile",
        label: "QR Scanning Camera Verification",
        images: ["/projects/mydormitory/izin kamera mobile.png", "/projects/mydormitory/berhasil presensi mobile.png"]
      },
      {
        id: "history-mydorm-mobile",
        label: "Attendance Activity logs",
        images: ["/projects/mydormitory/history absensi mobile.png"]
      }
    ],
    web: [
      {
        id: "login-mydorm-web",
        label: "Admin Login Interface",
        images: ["/projects/mydormitory/login admin web.png"]
      },
      {
        id: "dashboard-mydorm-web",
        label: "Admin Dashboard Overview",
        images: ["/projects/mydormitory/dashboard admin web.png"]
      },
      {
        id: "residents-mydorm-web",
        label: "Resident Profile Registry",
        images: ["/projects/mydormitory/kelola penghuni web.png"]
      },
      {
        id: "attendance-mydorm-web",
        label: "QR Code Attendance Log",
        images: ["/projects/mydormitory/presensi penghuni web.png"]
      },
      {
        id: "report-mydorm-web",
        label: "Excel Export Reporting Hub",
        images: ["/projects/mydormitory/laporan presensi web.png"]
      },
      {
        id: "issues-mydorm-web",
        label: "Infrastructure Problem Reports",
        images: ["/projects/mydormitory/laporan masalah web.png"]
      }
    ]
  },
  "telyutalks-2025": {
    web: [
      {
        id: "landing-telyutalks",
        label: "Academic Landing Page",
        images: ["/projects/telyutalks/landing page.png", "/projects/telyutalks/landing page2.png"]
      },
      {
        id: "login-telyutalks",
        label: "Authentication Portal",
        images: ["/projects/telyutalks/login.png"]
      },
      {
        id: "register-student-telyutalks",
        label: "Student Account Sign Up",
        images: ["/projects/telyutalks/register mahasiswa.png"]
      },
      {
        id: "register-lecturer-telyutalks",
        label: "Lecturer Account Sign Up",
        images: ["/projects/telyutalks/register dosen.png"]
      },
      {
        id: "ask-telyutalks",
        label: "Academic Thread Submission",
        images: ["/projects/telyutalks/ajukan pertanyaan.png"]
      },
      {
        id: "answer-telyutalks",
        label: "Q&A Answer Submission Form",
        images: ["/projects/telyutalks/ajukan jawaban.png"]
      },
      {
        id: "report-telyutalks",
        label: "Content Moderation Reporting Dialog",
        images: ["/projects/telyutalks/report pertanyaan.png", "/projects/telyutalks/report jawaban.png"]
      },
      {
        id: "profile-telyutalks",
        label: "User Profile Dashboard",
        images: ["/projects/telyutalks/profile.png"]
      },
      {
        id: "edit-profile-telyutalks",
        label: "Edit Bio & Danger Zone Account Removal",
        images: ["/projects/telyutalks/edit profile.png", "/projects/telyutalks/hapus akun.png"]
      }
    ]
  }
};

// 2. Project Features / Pipeline details for swipeable carousel inside details page
const projectCarousels: Record<string, { title: string; icon: any; desc: string }[]> = {
  "nexevent-2026": [
    {
      title: "Auto-Promote Waitlist",
      icon: Cpu,
      desc: "Ensures maximum event occupancy. Whenever a registered participant cancels, the database automatically queries the waitlist sorted by request timestamps (`created_at ASC`) and promotes the first candidate to registered status instantly."
    },
    {
      title: "Time Clash Prevention",
      icon: ShieldCheck,
      desc: "Maintains student calendar integrity. Before finalizing an event registration, the backend runs queries checking for overlapping schedules on the target student’s registered events, preventing concurrent conflicts."
    },
    {
      title: "Spam & Duplicate Protection",
      icon: Cpu,
      desc: "Enforces fair registration allocation. Integrates database-level uniqueness validation checkpoints to verify that a student cannot submit duplicate registrations for the same active campus event."
    },
    {
      title: "Auto-Archive Engine",
      icon: ShieldCheck,
      desc: "Keeps event explorers clean. Routinely checks dates, moving completed events to historical database archives dynamically once the execution timeframe expires."
    }
  ],
  "posyandu-pintar": [
    {
      title: "Growth Tracker Charts",
      icon: BarChart3,
      desc: "Visualizes infant developmental progress. Plots Weight, Height, Head Circumference, and Arm Circumference metrics over historical periods using interactive Next.js chart wrappers."
    },
    {
      title: "Groq AI Nutrition Assistant",
      icon: Cpu,
      desc: "Generates custom diagnostic tips. Feeds children's metrics to Groq LLM pipelines to deliver nutritional evaluation advice and growth alerts to kaders and parents."
    },
    {
      title: "Excel Report Engine",
      icon: FileText,
      desc: "Streamlines government compliance. Aggregates monthly data to generate formatted Excel sheets (`xlsx`) with single-click downloads containing growth registers."
    },
    {
      title: "Monthly Absensi Verification",
      icon: ShieldCheck,
      desc: "Maintains active rosters. Verifies attendance for monthly community health events, showing instant status indicators to identify unmeasured infants in the current period."
    }
  ],
  "microplast-2026": [
    {
      title: "Illumination Correction",
      icon: Binary,
      desc: "Compensates for uneven microscope lighting. Applies a large matrix Gaussian filter to extract light gradient vignettes, then divides the original image by this gradient to flatten the light profile."
    },
    {
      title: "Adaptive & Otsu's Thresholding",
      icon: ShieldCheck,
      desc: "Segments objects cleanly. Provides Otsu's thresholding for high-contrast petri dishes, and Adaptive thresholding to calculate local boundaries under complex shadows."
    },
    {
      title: "Morphological Closing",
      icon: Cpu,
      desc: "Cleans up binarized images. Applies OpenCV closing operations to fill internal hollow holes caused by reflection spots on plastic surfaces without modifying outer boundaries."
    },
    {
      title: "Circularity Classification",
      icon: Binary,
      desc: "Classifies plastic morphologies. Computes Circularity formulas; shapes approaching 1 are classified as Fragments (red box), while long, narrow elements are labeled as Fibers (blue box)."
    }
  ],
  "gpt-ner-2026": [
    {
      title: "Sequence Labeling Conversion",
      icon: Binary,
      desc: "Simplifies extraction logic. Converts standard NER classification tasks into a pure Text Generation prompt engineered sequence, bypassing training models from scratch."
    },
    {
      title: "Tag Insertion Schema",
      icon: Cpu,
      desc: "Formats model targets. Instructs Llama-3 to rewrite input strings verbatim while enclosing detected entity keywords in special boundary tags (e.g. `@@Mark Zuckerberg##PERSON`)."
    },
    {
      title: "Regex Extraction Filter",
      icon: Code2,
      desc: "Parses model outputs. Processes raw text generation strings using Python Regex boundaries to isolate target keywords and map them directly to entity schemas."
    },
    {
      title: "seqeval Accuracy Matrix",
      icon: BarChart3,
      desc: "Computes system performance. Compares Regex outputs to English CoNLL-2003 gold standard matrices, evaluating entity-level Precision, Recall, and F1-Scores."
    }
  ],
  "my-dormitory-2025": [
    {
      title: "QR Code Presensi System",
      icon: ShieldCheck,
      desc: "Automates room check-ins. Residents scan physical QR codes placed in dorm lobbies to register check-in and check-out timestamps securely on the central database."
    },
    {
      title: "GPS Location Validation",
      icon: Map,
      desc: "Prevents remote check-ins. Verifies that the scanning device's GPS coordinate falls within a strict radius of the dormitory block, rejecting invalid requests."
    },
    {
      title: "Infrastructure Issue Desk",
      icon: FileText,
      desc: "Speeds up facility repairs. Residents dispatch descriptive problem logs (e.g. broken doors) which feed notifications directly to the admin dashboard for task management."
    },
    {
      title: "Resident Registry & Room Allocation",
      icon: LayoutDashboard,
      desc: "Simplifies building allocation. Allows building admins to add residents, assign rooms, update details, and view active lists with real-time database updates."
    }
  ],
  "telyutalks-2025": [
    {
      title: "SSO Email Authentication",
      icon: ShieldCheck,
      desc: "Ensures campus exclusivity. Validates registrations against official Telkom University email formats, isolating discussion threads strictly to students and lecturers."
    },
    {
      title: "Academic Thread Discussion",
      icon: LayoutDashboard,
      desc: "Enables question & answer loops. Allows students to post academic questions, and invites lecturers and peers to post answers, vote on posts, and highlight verified responses."
    },
    {
      title: "Content Report & Moderation",
      icon: Cpu,
      desc: "Maintains platform code of conduct. Allows users to report inappropriate questions or answers, queuing records into the admin dashboard for inspection."
    },
    {
      title: "Spring Security Auth Filter",
      icon: ShieldCheck,
      desc: "Isolates administrative controls. Implements distinct security filters to block unauthorized access to the admin moderation and account management panels."
    }
  ]
};

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  const project = projectsData.find((p) => p.id === id);
  
  // Custom Lightbox state holding the active gallery group list and active index
  const [activeLightbox, setActiveLightbox] = React.useState<{
    title: string;
    images: string[];
    index: number;
  } | null>(null);

  // Active feature carousel index state
  const [featureIndex, setFeatureIndex] = React.useState(0);

  if (!project) {
    notFound();
  }

  const screenshots = projectsScreenshots[project.id];
  const featuresList = projectCarousels[project.id];

  const handleNextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeLightbox) return;
    const nextIdx = (activeLightbox.index + 1) % activeLightbox.images.length;
    setActiveLightbox({ ...activeLightbox, index: nextIdx });
  };

  const handlePrevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeLightbox) return;
    const prevIdx = (activeLightbox.index - 1 + activeLightbox.images.length) % activeLightbox.images.length;
    setActiveLightbox({ ...activeLightbox, index: prevIdx });
  };

  const handleNextFeature = () => {
    if (!featuresList) return;
    setFeatureIndex((featureIndex + 1) % featuresList.length);
  };

  const handlePrevFeature = () => {
    if (!featuresList) return;
    setFeatureIndex((featureIndex - 1 + featuresList.length) % featuresList.length);
  };

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background radial overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl space-y-8 z-10 text-left">
        {/* Back navigation action */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group h-11 px-3.5 rounded-xl border border-border bg-card/45 backdrop-blur-xs"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Projects
        </Link>

        {/* Thick Glass Card Container */}
        <div className="rounded-2xl overflow-hidden solid-surface p-8 sm:p-12 space-y-8 shadow-premium-lg">
          
          {/* Header Title Information - Clean Title direct to Overview flow */}
          <div className="space-y-3 pb-6 border-b border-border/40">
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
              Project Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
              {project.title}
            </h1>
            <p className="text-sm font-semibold text-muted-foreground">
              {project.subtitle}
            </p>
          </div>

          {/* Details breakdown - Follows directly from Title as requested */}
          <div className="space-y-6 leading-[1.7]">
            <div className="space-y-2">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                Overview
              </strong>
              <p className="text-sm sm:text-base text-muted-foreground">
                {project.overview}
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                How It Works &amp; Core Logic
              </strong>
              <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
                {getAppDetailsDetailed(project.id)}
              </p>
            </div>
          </div>

          {/* Technology icon mapping rows */}
          <div className="space-y-3 pt-4 border-t border-border/40">
            <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
              Technology Stack
            </strong>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tag) => (
                <TechIcon key={tag} name={tag} />
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* APP SCREENSHOT VIEWPORTS (Filmstrip list for each project) */}
          {/* ========================================================================= */}
          {screenshots && (
            <div className="space-y-6 pt-8 border-t border-border/40">
              <div className="space-y-1">
                <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                  Application Viewports
                </strong>
                <p className="text-xs text-muted-foreground">
                  End-to-end interface screenshots. Click to open and swipe/click to browse pages inside the zoomed viewport.
                </p>
              </div>

              {/* Mobile Client Gallery */}
              {screenshots.mobile && screenshots.mobile.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-primary block">
                    🎀 Mobile Interface
                  </span>
                  <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin snap-x">
                    {screenshots.mobile.map((item) => (
                      <div 
                        key={item.id} 
                        className="w-36 aspect-[9/19.5] relative rounded-xl overflow-hidden border border-border shadow-xs shrink-0 cursor-zoom-in group/img snap-start"
                        onClick={() => setActiveLightbox({ title: item.label, images: item.images, index: 0 })}
                      >
                        <Image src={item.images[0]} alt={item.label} fill sizes="144px" className="object-cover" />
                        
                        {item.images.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/75 border border-white/10 rounded-full px-2 py-0.5 text-[8.5px] font-mono text-white flex items-center gap-1 z-10">
                            <Layers className="h-2.5 w-2.5" />
                            <span>{item.images.length}</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="h-5 w-5 text-white drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Web Admin Gallery */}
              {screenshots.web && screenshots.web.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-primary block">
                    🎀 Web Portal Interface
                  </span>
                  <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin snap-x">
                    {screenshots.web.map((item) => (
                      <div 
                        key={item.id} 
                        className="w-64 aspect-[16/10] relative rounded-xl overflow-hidden border border-border shadow-xs shrink-0 cursor-zoom-in group/img snap-start"
                        onClick={() => setActiveLightbox({ title: item.label, images: item.images, index: 0 })}
                      >
                        <Image src={item.images[0]} alt={item.label} fill sizes="256px" className="object-cover" />
                        
                        {item.images.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/75 border border-white/10 rounded-full px-2 py-0.5 text-[8.5px] font-mono text-white flex items-center gap-1 z-10">
                            <Layers className="h-2.5 w-2.5" />
                            <span>{item.images.length}</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="h-5 w-5 text-white drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* SWIPEABLE FEATURE CAROUSEL (Custom implementation for all projects) */}
          {/* ========================================================================= */}
          {featuresList && featuresList.length > 0 && (
            <div className="space-y-4 pt-8 border-t border-border/40">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                {project.id === "microplast-2026" ? "Image Processing Pipeline Stages" : "Intelligent Features & Core Systems"}
              </strong>
              
              <div className="relative w-full flex items-center justify-between gap-4">
                
                {/* Left Button */}
                <button
                  onClick={handlePrevFeature}
                  className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:scale-105 transition-all shrink-0 z-10 cursor-pointer"
                  aria-label="Previous specification"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Viewport for active specs card */}
                <div className="flex-1 overflow-hidden min-h-[140px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={featureIndex}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(event, info) => {
                        if (info.offset.x < -40) {
                          handleNextFeature();
                        } else if (info.offset.x > 40) {
                          handlePrevFeature();
                        }
                      }}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      className="w-full cursor-grab active:cursor-grabbing py-1"
                    >
                      <div className="p-5 rounded-2xl border border-primary/15 bg-primary/5 space-y-2.5 text-left shadow-inner">
                        <div className="flex items-center gap-2">
                          {React.createElement(featuresList[featureIndex].icon, { className: "h-4.5 w-4.5 text-primary shrink-0" })}
                          <span className="text-xs font-bold text-foreground">{featuresList[featureIndex].title}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {featuresList[featureIndex].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Button */}
                <button
                  onClick={handleNextFeature}
                  className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:scale-105 transition-all shrink-0 z-10 cursor-pointer"
                  aria-label="Next specification"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

              </div>

              {/* Navigation dots indicator */}
              <div className="flex gap-2 justify-center">
                {featuresList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeatureIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      featureIndex === i ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to feature slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* EVALUATION METRICS TABLE FOR GPT-NER */}
          {/* ========================================================================= */}
          {project.id === "gpt-ner-2026" && (
            <div className="space-y-4 pt-8 border-t border-border/40">
              <div className="space-y-1">
                <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                  Evaluation Metrics (CoNLL-2003 Subset)
                </strong>
                <p className="text-xs text-muted-foreground">
                  Entity-level classification metrics computed on a subset of 1,500 sentences using the `seqeval` library.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-border bg-card/50">
                <table className="min-w-full text-xs font-mono">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="px-4 py-2 text-left font-bold text-foreground">Entity Label</th>
                      <th className="px-4 py-2 text-center font-bold text-foreground">Precision</th>
                      <th className="px-4 py-2 text-center font-bold text-foreground">Recall</th>
                      <th className="px-4 py-2 text-center font-bold text-foreground">F1-Score</th>
                      <th className="px-4 py-2 text-center font-bold text-foreground">Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-2 font-bold text-primary">PER (Person)</td>
                      <td className="px-4 py-2 text-center">0.83</td>
                      <td className="px-4 py-2 text-center">0.88</td>
                      <td className="px-4 py-2 text-center font-bold">0.85</td>
                      <td className="px-4 py-2 text-center text-muted-foreground">870</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-2 font-bold text-primary">LOC (Location)</td>
                      <td className="px-4 py-2 text-center">0.75</td>
                      <td className="px-4 py-2 text-center">0.84</td>
                      <td className="px-4 py-2 text-center font-bold">0.79</td>
                      <td className="px-4 py-2 text-center text-muted-foreground">957</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-4 py-2 font-bold text-primary">ORG (Organization)</td>
                      <td className="px-4 py-2 text-center">0.62</td>
                      <td className="px-4 py-2 text-center">0.45</td>
                      <td className="px-4 py-2 text-center font-bold">0.52</td>
                      <td className="px-4 py-2 text-center text-muted-foreground">518</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/10">
                      <td className="px-4 py-2 font-bold text-primary">MISC (Miscellaneous)</td>
                      <td className="px-4 py-2 text-center">0.12</td>
                      <td className="px-4 py-2 text-center">0.51</td>
                      <td className="px-4 py-2 text-center font-bold">0.19</td>
                      <td className="px-4 py-2 text-center text-muted-foreground">434</td>
                    </tr>
                    <tr className="font-extrabold bg-primary/5">
                      <td className="px-4 py-2 text-foreground">Weighted Average</td>
                      <td className="px-4 py-2 text-center text-foreground">0.65</td>
                      <td className="px-4 py-2 text-center text-foreground">0.73</td>
                      <td className="px-4 py-2 text-center text-primary font-black">0.67</td>
                      <td className="px-4 py-2 text-center text-muted-foreground">2779</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* SYSTEM ARCHITECTURE & COMPONENTS */}
          {/* ========================================================================= */}
          <div className="space-y-4 pt-8 border-t border-border/40">
            <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
              System Architecture &amp; Platform Specs
            </strong>

            <div className="space-y-3.5 text-xs">
              {projectArchitectures[project.id]?.map((arch, index) => {
                const IconComponent = IconMap[arch.icon] || Code2;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <IconComponent className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <div className="text-left">
                      <span className="font-bold text-foreground block">{arch.title}</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {arch.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Demonstration Panel */}
          {project.videoDemo && (
            <div className="space-y-4 pt-8 border-t border-border/40">
              <strong className="text-xs uppercase tracking-wider text-foreground font-mono block">
                Video Demonstration
              </strong>
              
              <div className="relative aspect-video w-full overflow-hidden border border-border/80 bg-black rounded-xl shadow-premium-md">
                <video
                  src={project.videoDemo}
                  controls
                  className="h-full w-full object-contain"
                  poster={project.screenshot}
                />
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border/40">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded h-11 px-3.5 border border-border bg-card/30 outline-none"
              >
                <GithubIcon className="h-4.5 w-4.5" />
                GitHub Repository
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary hover:text-primary hover:bg-primary/5 inline-flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded h-11 px-4 border border-primary/20 bg-primary/10 outline-none"
              >
                Live Demonstration
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-default"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-30 h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()} // Prevent close on card click
            >
              
              <div className="relative flex items-center justify-center w-full max-h-[75vh]">
                
                {/* Left navigation arrow */}
                {activeLightbox.images.length > 1 && (
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 sm:left-4 p-3 rounded-full border border-white/10 bg-black/60 text-white/70 hover:text-white hover:scale-105 transition-all outline-none cursor-pointer z-20 shrink-0"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                {/* Animated active image view container */}
                <div className="overflow-hidden flex items-center justify-center max-w-full max-h-[75vh]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeLightbox.index}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(event, info) => {
                        if (info.offset.x < -50) {
                          handleNextSlide();
                        } else if (info.offset.x > 50) {
                          handlePrevSlide();
                        }
                      }}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.25 }}
                      src={activeLightbox.images[activeLightbox.index]}
                      alt={`${activeLightbox.title} index ${activeLightbox.index + 1}`}
                      className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-premium-2xl border border-white/10 cursor-grab active:cursor-grabbing"
                    />
                  </AnimatePresence>
                </div>

                {/* Right navigation arrow */}
                {activeLightbox.images.length > 1 && (
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 sm:right-4 p-3 rounded-full border border-white/10 bg-black/60 text-white/70 hover:text-white hover:scale-105 transition-all outline-none cursor-pointer z-20 shrink-0"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}

              </div>

              {/* Monospace Caption bubble explaining active screenshot view and page progress */}
              <div className="flex flex-col items-center gap-1.5 select-none bg-black/60 border border-white/10 px-4 py-2 rounded-full shadow-md text-center max-w-md">
                <span className="text-white/80 text-[10px] font-mono tracking-widest uppercase block">
                  {activeLightbox.title}
                </span>
                {activeLightbox.images.length > 1 && (
                  <span className="text-muted-foreground text-[8px] font-mono uppercase tracking-wider block">
                    Page {activeLightbox.index + 1} of {activeLightbox.images.length} (Swipe/Arrow to navigate)
                  </span>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
