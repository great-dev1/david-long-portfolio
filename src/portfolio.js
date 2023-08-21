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
  username: "David Long",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FbqzP6EEAvdwpSPWrkUznZ0NoW5kC7zv/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/great-dev1",
  linkedin: "https://www.linkedin.com/in/david-long-b80421235/",
  gmail: "bighottech2187@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / GCP / Azure / Digital Ocean"
    ),
    emoji(
      "⚡ Integration of AI technologies like GPT / Whisper"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "artifical intelligence",
      fontAwesomeClassname: "fas fa-brain"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UNIVERSITI KUALA LUMPUR",
      logo: require("./assets/images/kuala.png"),
      subHeader: "Bachelorʼs Degree in Computer Science",
      duration: "April 2009 - October 2012",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "ProjectAI",
      companylogo: require("./assets/images/projectai.jpg"),
      date: "Jan 2020 – Jun 2023",
      descBullets: [
        "Developed intuitive user interface using React and Typescript, creating an engaging and user-friendly experience which increased the company’s conversion rate by 50%",
        "Utilized Django to set up and configure the whole backend infrastructure from scratch, including database setup, developing REST APIs in Python",
        "Converted from Singleton structure to Microservices architecture, integrating third-party APIs and creating microservices using Node.js/Express.js, which escalated scalability and security by 40%",
        "Innovated how users interacted with the platform by integrating AI (GPT, Whisper) technologies, which upgraded the speed of user response by 35%"
      ]
    },
    {
      role: "Full Stack developer",
      company: "CLOUDWAVE",
      companylogo: require("./assets/images/cloudwave.jpg"),
      date: "Jun 2016 – Nov 2019",
      descBullets: [
        "Crafted visually stunning user interfaces by building custom UI libraries and tailored components using styled-components, automating the test cases which minimized the amount of time spent for test regression by 30%",
        "Enhanced financial controls to improve the clinical, operational and financial performance of health organizations, shrinking the time spent for finance by 20%",
        "Orchestrated the integration of leading payment SDKs including PayPal and Stripe, which reduced the billing time by 45%",
        "Implemented Verification system for KYC and KYB which amplified the security of the system by 30%"
      ]
    },
    {
      role: "Front-End Developer",
      company: "LIZARD GLOBAL",
      companylogo: require("./assets/images/lizard.global.png"),
      date: "Jan 2014 – Mar 2016",
      descBullets: [
        "Implemented B2B, B2C system for individual customers and businesses to make transactions",
        "Spearheaded the creation and implementation of key functionalities such as Workflow and Timeline, Team chat on channels, etc",
        "Demonstrated expertise in talent-driven design and cost-effective planning, resulting in visually appealing designs and mobile-responsive page",
        "Created onboarding website for customers to make transactions secure and safe (Vue.js, PHP/Laravel)",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pulse.jpg"),
      projectName: "Pulse",
      projectDesc: "Pulse is a platform that encourages user input and idea sharing, utilizing advanced technology to facilitate natural and human-like interactions, while collecting and analyzing diverse user responses using AI algorithms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pulse.projectai.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/teamly.jpg"),
      projectName: "Teamly",
      projectDesc: "Teamly is a SaaS platform for project management like Trello, including Workflow and Timeline features, Team chat on channels, file sharing, and more.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app-staging.teamly.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Some Cool Certifications that I have done !",

  achievementsCards: [
    {
      title: "Professional Certificate in Front-End Web Developer | edX",
      subtitle:
        "May 2015",
      image: require("./assets/images/edx.jpg"),
      footerLink: []
    },
    {
      title: "Certified Web Professional - Web Developer| IWA",
      subtitle:
        "Nov 2017",
      image: require("./assets/images/iwa.jpg"),
      footerLink: []
    },
    {
      title: "Certified Software Development Professional (CSDP) | IEEE Computer Society",
      subtitle: "Oct 2020",
      image: require("./assets/images/ics.jpg"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+48918816815",
  email_address: "bighottech2187@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  isHireable
};
