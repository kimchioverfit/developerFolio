/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Patrick Kim 김영준",
  title: "Hi all, I'm Patrick Kim",
  subTitle: emoji(
    "Computer Vision / ML engineer at LG Innotek since 2022, taking deep-learning perception models from prototype to fully automated production on camera-module manufacturing lines — from architecture selection and failure-mode analysis to data strategy and deployment under real latency budgets (TensorRT, custom CUDA kernels). Open-source contributor to labelme and torchvision."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kimchioverfit",
  linkedin: "https://www.linkedin.com/in/youngjoon-kim-8106981b2/",
  gmail: "god102104@gmail.com",
  location: "https://g.co/kgs/1PMzPWQ",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "COMPUTER VISION ENGINEER TAKING PERCEPTION MODELS FROM PROTOTYPE TO PRODUCTION",
  skills: [
    emoji(
      "⚡ Segmentation / detection modeling with CNN and transformer families — Mask R-CNN, DeepLabv3, Mask2Former, EoMT, SAM2 with LoRA adaptation, ViT / ConvNeXt / Hiera backbones"
    ),
    emoji(
      "⚡ Failure-mode analysis on production data — FP/FN root-causing, query assignment and loss-level fixes rather than more post-processing"
    ),
    emoji(
      "⚡ Data strategy — dataset construction, labeling-scheme design (incl. amodal labels), model-assisted labeling with SAM2"
    ),
    emoji(
      "⚡ Deployment under latency budgets — TensorRT, ONNX Runtime, LibTorch (C++), FP16 / mixed precision, custom CUDA kernels"
    ),
    emoji(
      "⚡ Camera fundamentals — optical-center calibration, active alignment (MTF/SFR), sensor image-quality metrics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "",
      customIcon: "cpp.svg"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "",
      customIcon: "opencv.svg"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "",
      customIcon: "pytorch.svg"
    },
    {
      skillName: "Cuda",
      fontAwesomeClassname: "",
      customIcon: "cuda.svg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kyungpook National University",
      logo: require("./assets/images/knu.jpg"),
      subHeader: "B.S. in Computer Science and Engineering",
      duration: "2014 – 2021",
      descBullets: [
        "Undergraduate thesis: Motion Similarity Detection Algorithm Using Relationships Between Joint Data — Korean Intelligent Information Systems Society"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }
  // ],
  // displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (Computer Vision / ML)",
      company: "LG Innotek",
      companylogo: require("./assets/images/lge.png"),
      date: "Feb 2022 – Present",
      desc: "Camera-module manufacturing: deep-learning inspection models, data pipelines, and equipment-side deployment.",
      descBullets: [
        "Own segmentation/detection architecture for production inspection — selected, trained, and evaluated Mask R-CNN (ConvNeXt / Hiera backbones), DeepLabv3, Mask2Former, EoMT, and SAM2, swapping the production stack as line conditions changed. The measurement pipeline this powers went from ~19.8 operator-hours/day to fully automated (LG Innotek Best Practice Award).",
        "Systematic failure-mode analysis on production data — traced high-confidence false positives to the second-stage box head rather than the RPN through isolated experiments (anchor scales, NMS/score thresholds, backbone swaps, a two-stage OK/NG filter), steering the fix toward assignment/loss-level changes instead of more post-processing.",
        "Instance separation for touching same-class objects — diagnosed merged/duplicate masks in query-based models and evaluated Hungarian matching, query-to-GT assignment, localization priors, and separation/boundary losses.",
        "Data strategy and labeling — built datasets end to end, designed the labeling scheme including canonical-shape (amodal) labels, and used model-assisted labeling (SAM2 refinement, AI-box prompts).",
        "Prototype → production under latency budgets — cut end-to-end inspection latency ~6× (~2,000 ms → 300–400 ms) via full-path profiling, FP16 / mixed precision, and custom CUDA pre/post-processing kernels; hybrid Windows-native C++ runtime (ONNX Runtime + TensorRT, LibTorch) behind a common DLL interface.",
        "Amodal reconstruction of damaged film patterns — canonical-label Mask R-CNN predicting the complete mask as a template-matching localizer, plus diffusion-based reconstruction of the missing region.",
        "Foundation-model adaptation and classification — SAM adapted to domain defects with prompt-guided supervision and LoRA; OK/NG classifiers (ConvNeXt, EfficientNet-B0, EfficientFormer) for epoxy-interconnection inspection.",
        "Camera fundamentals — optical-center detection, Active Alignment with MTF/SFR-based focus and tilt optimization, sensor image-quality automation (DPC, AE, AWB, PRNU, FPN, binning/subsampling, LCB).",
        "Beyond vision — FT-Transformer / TST time-series models on equipment telemetry to predict tact-time drift; team AX (AI Transformation) representative."
      ]
    },
    {
      role: "AI / Software Engineering Intern",
      company: "KT",
      companylogo: require("./assets/images/kt.png"),
      date: "Jun 2021 – Aug 2021",
      desc: "Built a cloud resource monitoring tool on Linux with Prometheus and Grafana to collect and visualize server metrics for internal dashboards. Received the KT AI Innovation Technology Award."
    },
    {
      role: "Software Engineering Intern",
      company: "LG Electronics (Bengaluru, India)",
      companylogo: require("./assets/images/lge.png"),
      date: "Jul 2020 – Aug 2020",
      desc: "Built a webOS smart-home IoT prototype for device control in a global, English-speaking engineering team."
    },
    {
      role: "Social Service Agent (alternative to military service)",
      company: "Republic of Korea",
      companylogo: require("./assets/images/socialService.png"),
      date: "Dec 2013 – Dec 2015",
      desc: "Completed the two-year national service obligation."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open-Source Contributions",
  subtitle: "FIXES AND FEATURES UPSTREAMED FROM PRODUCTION WORK",
  projects: [
    {
      projectName: "wkentaro/labelme — Image Annotation Tool (16k+ ★)",
      projectDesc:
        'AI-Box bounding-box normalization fix (#2025 → #2026, landed via #2032; credited in the v6.2.0 release notes). Proposed mask-level shape merge with a working demo (#2548), shipped by the maintainer as "Merge Shapes" (#2684). AI model download progress (#1899) adopted in #1948; mask brush editing controls (#2110) became the origin of #2184.',
      footerLink: [
        {
          name: "Bbox fix #2026",
          url: "https://github.com/wkentaro/labelme/pull/2026"
        },
        {
          name: "Merge Shapes #2548",
          url: "https://github.com/wkentaro/labelme/issues/2548"
        },
        {
          name: "Progress #1899",
          url: "https://github.com/wkentaro/labelme/pull/1899"
        }
      ]
    },
    {
      projectName:
        "pytorch/vision (torchvision) — Computer Vision Library (17k+ ★)",
      projectDesc:
        "Found while bringing FP16 Mask R-CNN inference up under LibTorch on Windows: diagnosed a CUDA/MSVC half-precision build failure in ROI Pool caused by an ambiguous comparison (#9246) and submitted a patch comparing in the accumulator type (#9399).",
      footerLink: [
        {
          name: "Issue #9246",
          url: "https://github.com/pytorch/vision/issues/9246"
        },
        {name: "PR #9399", url: "https://github.com/pytorch/vision/pull/9399"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards 🏆"),
  subtitle: "Recognition for production impact and AI transformation work",
  achievementsCards: [
    {
      title: "LG Innotek Best Practice Award",
      subtitle:
        "Deep-learning measurement pipeline that took a manual inspection task from ~19.8 operator-hours/day to fully automated.",
      image: require("./assets/images/lge.png"),
      imageAlt: "LG Innotek",
      footerLink: []
    },
    {
      title: "LG Innotek AX Representative Award",
      subtitle: "Team AX (AI Transformation) representative.",
      image: require("./assets/images/lge.png"),
      imageAlt: "LG Innotek",
      footerLink: []
    },
    {
      title: "KT AI Innovation Technology Award",
      subtitle:
        "Cloud resource monitoring tool built during the KT internship.",
      image: require("./assets/images/kt.png"),
      imageAlt: "KT",
      footerLink: []
    },
    {
      title: "3rd Place, KNU Code Fair & Medical Big Data Competition",
      subtitle: "Kyungpook National University.",
      image: require("./assets/images/knu.jpg"),
      imageAlt: "Kyungpook National University",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle:
  //       "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
  //       },
  //       {
  //         name: "Award Letter",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       },
  //       {
  //         name: "Google Code-in Blog",
  //         url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle:
  //       "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     imageAlt: "Google Assistant Action Logo",
  //     footerLink: [
  //       {
  //         name: "View Google Assistant Action",
  //         url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
  //       }
  //     ]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       {name: "Certification", url: ""},
  //       {
  //         name: "Final Project",
  //         url: "https://pakistan-olx-1.firebaseapp.com/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Study Notes",
  subtitle: "Notes on the papers and techniques behind my work.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://kimchioverfit.github.io/Study/",
      title: "kimchioverfit / Study",
      description:
        "Study notes on computer vision, deep learning, and ML systems."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {};

// Podcast Section

const podcastSection = {};

// Resume Section
const resumeSection = {};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+82-01034483676",
  email_address: "god102104@gmail.com",
  location: "https://g.co/kgs/WWGoPrs"
};

// Twitter Section

const twitterDetails = {};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
