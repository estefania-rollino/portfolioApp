import { AboutMeViewModel } from "./view-models/about-me-view-model";
import { IPortfolioListViewModel } from "./view-models/portfolio-list-view-model";

export const ABOUT_ME_DATA: AboutMeViewModel = {
    name: "Jess Evans",
    title: "Software Developer",
    bio: "Senior Web Software Developer with over 10 years of experience in crafting robust and scalable web applications, with exceptional problem-solving skills and passion for clean and efficient code, I have played a key role in the successful delivery of numerous high-profile projects. I am passionate about staying abreast of the latest industry trends and technologies. My curiosity and commitment to continuous learning drive me to explore emerging tools and frameworks that enhance the efficiency and functionality of web applications.",
    skills: [{
      name: "HTML",
      percentage: 90
    }, {
      name: "CSS",
      percentage: 85
    }, {
      name: "Angular",
      percentage: 80
    }, {
      name: "TypeScript",
      percentage: 50
    }, {
      name: "Bootstrap",
      percentage: 40
    }],
    showProfileImage: true,
    githubLink: "https://github.com/",
    linkedinLink: "https://linkedin.com",
    downloadLink: "https://linkedin.com"
};

  export const PORTFOLIO_LIST: IPortfolioListViewModel = {
    portfolioItems: [{
        title: "Hotel Providers API",
        description: "API that empowers developers, travel agencies, and online platforms to seamlessly integrate and access hotel-related data for a specified six-month duration. This API serves as a gateway to a diverse array of hotel-related information, offering robust features to facilitate the retrieval of hotel listings, availability, pricing, and additional details",
        githubLink: "https://github.com/estefania-rollino?tab=repositories",
        webLink: "https://codexpert.byteit.pro/",
        imageUrl: "/assets/projects/hotel.jpg",
        technologies: [".Net", "C#", "entity framework", "sql server"]
      }, {
        title: "Xml Parser",
        description: "Utility designed to analyze, interpret, and extract information from XML (eXtensible Markup Language) documents. This tool serves as an indispensable resource for developers, data analysts, and system administrators, enabling them to navigate, manipulate, and extract valuable data from XML files seamlessly",
        githubLink: "https://github.com/estefania-rollino?tab=repositories",
        webLink: "https://codexpert.byteit.pro/",
        imageUrl: "/assets/projects/xml.jpg",
        technologies: [".Net core 8", "C#"]
      }, {
        title: "ColorConverter",
        description: "Powerful utility designed to facilitate the conversion of colors from the RGB (Red, Green, Blue) color space to the hexadecimal (hex) color representation. This tool serves as an essential resource for designers, developers, and anyone working with digital graphics, enabling them to seamlessly translate RGB color values into their corresponding hex codes",
        githubLink: "https://github.com/estefania-rollino?tab=repositories",
        webLink: "https://codexpert.byteit.pro/",
        imageUrl: "/assets/projects/rgb.jpg",
        technologies: ["Python"]
      }, {
        title: "Airline Booking Backend",
        description: "An online API using a microservice architecture. This is a robust and sophisticated software solution designed to streamline and manage the backend processes of an airline's reservation and booking operations",
        githubLink: "https://github.com/estefania-rollino?tab=repositories",
        webLink: "https://codexpert.byteit.pro/",
        imageUrl: "/assets/projects/airline.jpg",
        technologies: [".Net core", "C#", "MongoDB", "Azure"]
      }, {
        title: "LetsTalk",
        description: "Dynamic and user-friendly web application designed to facilitate real-time communication and collaboration among users. This interactive platform provides a virtual space where individuals can engage in conversations, share ideas, and connect with others in a seamless and intuitive manner",
        githubLink: "https://github.com/estefania-rollino?tab=repositories",
        webLink: "https://codexpert.byteit.pro/",
        imageUrl: "/assets/projects/chat.jpg",
        technologies: [".Net core", "C#", "MongoDB", "Azure"]
      }]
};