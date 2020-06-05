
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Piyush Sinha",
  title: "Hi all, I'm Piyush Sinha",
  subTitle: emoji("A passionate App Developer 🚀 having an experience of AR application and Mobile applications with Java/ ArCore / Nodejs / and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1De-HACw8PUzAqMuoYEU17uFuDOIp8iZr/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Piyusinha",
  linkedin: "https://www.linkedin.com/in/piyush-sinha-2b1024179/",
  gmail: "piyush.sinha12345@gmail.com",
  gitlab: "https://gitlab.com/piyusinha",
  facebook: "#"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"),
    emoji("⚡ Ar applications using ArCore,Cloud Anchor etc"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS/ Heroku")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [


    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "ArCore",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-cloud"
    }



  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior App Developer-Intern",
      company: "BareClearAct",
      companylogo: require("./assets/images/bare.svg"),
      date: "Jan 2020 – March 2020",

      descBullets: [
        "Developed a IOT android app with server Authentication"

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Piyusinha", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {

};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "ESYA'18",
      subtitle: "Robotics competition Winner.",
      image:
        "https://www.iiitd.ac.in/sites/all/themes/impact_theme/logo.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1Fjz1OuxuLuIZyEuyLLDM5GoB9jJV-x9V/view" }

      ]
    }



  ]
};

// Blogs Section

const blogSection = {


};

// Talks Sections

const talkSection = {

};

// Podcast Section

const podcastSection = {

};

const contactInfo = {

};

//Twitter Section

const twitterDetails = {

  userName : "Piyushsinha1234"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
