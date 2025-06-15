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
    "A passionate Software Engineer 🚀 with a deep enthusiasm for Machine Learning and Deep Learning — experienced in building intelligent systems using Python, PyTorch, TensorFlow, and scalable architectures for real-world applications."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kimchioverfit",
  linkedin: "https://www.linkedin.com/in/youngjoon-kim-8106981b2/",
  gmail: "god102104@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

  const skillsSection = {
    title: "What I do",
    subTitle: "DEDICATED SOFTWARE ENGINEER DRIVEN BY MACHINE LEARNING AND SYSTEM-LEVEL OPTIMIZATION",
    skills: [
      emoji("⚡ Develop efficient and scalable ML/DL pipelines using Python, PyTorch, and TensorFlow"),
      emoji("⚡ Implement real-time computer vision applications with OpenCV and C++"),
      emoji("⚡ Design and deploy AI-powered solutions on edge devices and embedded systems"),
      emoji("⚡ Optimize performance-critical code with C++ and parallel computing techniques"),
      emoji("⚡ Integrate and automate model inference in production using REST APIs or C++ DLLs")
  ],
  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
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
      skillName: "Tensorflow",
      fontAwesomeClassname: "",
      customIcon: "tensorflow.svg" 
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "",
      customIcon: "matlab.svg" 
    },
    {
      skillName: "Cuda",
      fontAwesomeClassname: "",
      customIcon: "cuda.svg" 
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kyungpook National Univiersity",
      logo: require("./assets/images/knu.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Feb 2014 - Feb 2021"
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
      role: "Software Engineer",
      company: "LG Innotek",
      companylogo: require("./assets/images/lge.png"),
      date: "Feb 2022 – Present",
      desc: "Camera module testing SW Develop.",
      descBullets: [
        "Developed automated camera module testing tools using Python, OpenCV, and PyTorch (Defect Pixel Correction, Auto Exposure, PRNU, Auto White Balance, Fixed Pattern Noise correction, Bining & Subsampling, LCB and ETC)",
        "Implemented image preprocessing and ROI extraction for defect detection (Blur, Histogram equlization, Otsu & Adaptive Thresholding, Canny & Sobel, Laplacian and ETC",
        "Integrated C++ DLLs with Python to accelerate image analysis workflows and reduce latency (Cmake, Cython)",
        "Trained and evaluated deep learning models for segmentation in high-res images (U-Net, SegNet, Mask R-CNN, ViT(Normal), SETR, Mask2Former)",
        "Optimized filtering pipelines for varying lighting and noise conditions in manufacturing images ()",
        "Accelerated compute-intensive image processing tasks using CUDA"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "KT",
      companylogo: require("./assets/images/kt.png"),
      date: "June 2021 – Aug 2021",
      desc: "Developed a cloud resource monitoring tool to visualize and track server usage statistics. Worked with Linux, Prometheus, and Grafana to collect and display system metrics for internal dashboards."
    },
    {
      role: "Software Engineer Intern",
      company: "LG Electronics",
      companylogo: require("./assets/images/lge.png"),
      date: "July 2020 – Aug 2020",
      desc: "Built an IoT prototype application using webOS for smart home device control. Focused on UI interaction and device communication through webOS APIs and JavaScript-based app logic."
    },
    {
      company: "Republic of Korea Army",
      companylogo: require("./assets/images/rok.png"), // 필요 시 군 로고 이미지 추가
      date: "Mar 2014 – Feb 2016",
      desc: "Completed mandatory military service in the Republic of Korea Army. Demonstrated responsibility, leadership, and adaptability in high-pressure environments.",
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

const bigProjects = {};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
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

const blogSection = {};

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
  email_address: "god102104@gmail.com"
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
