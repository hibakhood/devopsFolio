/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Ibrahim Akande",
  logo_name: "Ibrahim Akande",
  nickname: "hibakhood",
  subTitle:
    "I'm a DevOps and Technical Support Engineer with a proven track record in optimizing system performance and providing exceptional technical assistance. My expertise in DevOps tools and methodologies streamlines deployments and enhances infrastructure scalability. I excel at troubleshooting, ensuring system reliability, and minimizing downtime, collaborating effectively with cross-functional teams. ",
  resumeLink:
    "https://drive.google.com/file/d/1EfDAQq32m3iCszraPS1osAJL85GCkHmSN/view?usp=sharing",
  portfolio_repository: "https://github.com/hibakhood/devopsFolio",
};

const socialMediaLinks = [
	/* Your Social Media Link */
	// github: "https://github.com/u/hibakhood",
	// linkedin: "https://www.linkedin.com/in/ibrahim-akande-7577b671/",
	// gmail: "iboakande@gmail.com",
	// gitlab: "https://gitlab.com/hibakhood",
	// facebook: "https://www.facebook.com/hibak09/",
	// twitter: "https://twitter.com/hibakhood_",
	// instagram: "https://www.instagram.com/hibakhood/"
  
	{
		name: "Github",
		link: "https://github.com/hibakhood",
		fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
		backgroundColor: '#181717' // Reference https://simpleicons.org/?q=github
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/ibrahim-akande-7577b671/",
		fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
		backgroundColor: '#0077B5' // Reference https://simpleicons.org/?q=linkedin
	},
	{
		name: "Gmail",
		link: "mailto:iboakande@gmail.com",
		fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
		backgroundColor: '#D14836' // Reference https://simpleicons.org/?q=gmail
	},
	{
		name: "Twitter",
		link: "https://twitter.com/hibakhood_",
		fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
		backgroundColor: '#1DA1F2' // Reference https://simpleicons.org/?q=twitter
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/hibak09/",
		fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
		backgroundColor: '#1877F2' // Reference https://simpleicons.org/?q=facebook
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/hibakhood/",
		fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
		backgroundColor: '#E4405F' // Reference https://simpleicons.org/?q=instagram
	},
];

const skills = {
  data: [
	{
      title: "DevOps Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Designing architectures, building, and maintaining the infrastructure necessary for the development and deployment of software applications on AWS",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
		    "⚡ Automating building, testing, and deployment processes of software applications with Maven and Jekins",
        "⚡ Used tool like Ansible to manage the configuration of servers, databases, and other infrastructure component",
		    "⚡ Troubleshoot and monitored the performance and availability of software applications and infrastructure components with Prometheus and Grafana to identify and resolve issues before they impact software users",
	  ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
		{
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
		{
          skillName: "Apache Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#C71A36",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
		{
          skillName: "Apache Tomcat",
          fontAwesomeClassname: "simple-icons:apachetomcat",
          style: {
            color: "#F8DC75",
          },
        },
		{
          skillName: "Jekins",
          fontAwesomeClassname: "simple-icons:jekins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
		{
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
		{
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
		{
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
      ],
    },
    {
      title: "Technical Support",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Providing technical support to customers, addressing inquiries, troubleshooting issues, and offering solutions via various communication channels",
        "⚡ Analyzing and diagnosing hardware and software problems, to ensure a clear understanding of customer complaint",
        "⚡ Utilizing remote support tools to access and troubleshoot customers systems efficiently",
      ],
      softwareSkills: [
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: {
            backgroundColor: "transparent",
			color: "#4A154B",
          },
        },
        {
          skillName: "Atlassian",
          fontAwesomeClassname: "simple-icons:atlassian",
          style: {
            backgroundColor: "white",
            color: "#0052CC",
          },
        },
        {
          skillName: "Zendesk",
          fontAwesomeClassname: "simple-icons:zendesk",
          style: {
            backgroundColor: "transparent",
			color: "#03363D",
          },
        },
        {
          skillName: "Navicat",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
		 {
          skillName: "Active Directory",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Vulnerability Scanner",
      fileName: "FullStackImg",
      skills: [
        "⚡ Conducting thorough scans of networks, systems, and applications to identify potential vulnerabilities",
        "⚡ Analyzing the scan results to assess the severity and potential impact of the identified vulnerabilities",
		"⚡ Generating clear and concise reports, detailing full vulnerabilities and providing actionable recommendations for mitigation",
        "⚡ Maintaining comprehensive records of the dicovered vulnerabilities, including their descriptions, risk levels, and recommended remediation strategies",
      ],
      softwareSkills: [
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#557C94",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "OpenVas",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Nessus",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Bash Shell",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "VulScan",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Exploitdb",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Vmware",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Ladoke Akintola University of Technology",
      subtitle: "B.Tech. in Computer Engineering",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Ethical Hacking, Vulnerability Analysis, Database Management, and DevOps Engineering",
      ],
      website_link: "http://lautech.edu.ng",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Support Engineer",
          company: "Kakanfo Inn & Conference Centre",
          company_url: "https://kakanfoinn.com/",
          duration: "Dec 2022 - PRESENT",
          location: "Ibadan, Oyo State",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
		{
          title: "System Reliability Support",
          company: "Altara Credit Limited",
          company_url: "https://altaracredit.com/",
          duration: "Oct 2022 - PRESENT",
          location: "Ikoyi, Lagos",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
		{
          title: "IT Support Administrator",
          company: "Altara Credit Limited",
          company_url: "https://altaracredit.com/",
          duration: "July 2020 - Oct 2022",
          location: "Ikoyi, Lagos",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
		{
          title: "Remote Technical Support Engineer",
          company: "Fleetio",
          duration: "Oct 2020 - April 2021",
          location: "Birmingham, United State",
          description:
            "I provided tier 1 Technical support to non-technical internal users through remote support services. I installed and supported inbound/outbound remote tax software. Assessed system hardware and software and suggested modifications to reduce lag time and improve overall speed. Wrote and reviewed tickets to request maintenance to various types of equipment. Patched software and installed new updates to eliminate security problems and protect data.",
          color: "#9b1578",
        
        {
          title: "Technical Support Engineer",
          company: "The Honda Place",
          duration: "Oct 2018 - March 2020",
          location: "Victoria Island, Lagos",
          description:
            "I provided IT support to non-technical internal users through desk side support services. Assessed system hardware and software and suggested modifications to reduce lag time and improve overall speed. Wrote and reviewed tickets to request maintenance to various types of equipment. Patched software and installed new versions to eliminate security problems and protect data.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "IT Support Intern",
          company: "Huawei Technology",
          logo_path: "delhivery_logo.png",
          duration: "June 2016 - Sept 2017",
          location: "Victoria Island, Lagos",
          description:
            "I provide technical assistance, troubleshoot hardware/software issues, and contribute to maintaining the organization's IT infrastructure. I respond to helpdesk tickets, assist end-users, and engage in routine maintenance tasks. Collaborating with the IT team, I gain hands-on experience, enhancing my skills and understanding of practical IT operations",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create DevOps projects, deploy them and monitor their behaviour using cloud infrastructure and open source tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Technical Support, Application Support and Application Deployment.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "3, Yekini Busari Street, Oke Ibadan Estate, Akobo, Ibadan, Oyo State, Nigeria",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/MCPqPdwWzZWbpQxn8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+2347025871558",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};