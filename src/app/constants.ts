import { AboutMeViewModel } from "./view-models/about-me-view-model";
import { IPortfolioListViewModel } from "./view-models/portfolio-list-view-model";

export const ABOUT_ME_DATA: AboutMeViewModel = {
  name: "Steff Rollino",
  title: "Software Developer",
  bio: "Desarrolladora de Software Senior con 10 años de experiencia en la creación de aplicaciones web robustas y escalables, con habilidades excepcionales para la resolución de problemas y pasión por el código limpio y eficiente. He desempeñado un papel clave en la entrega exitosa de numerosos proyectos de alto perfil. Mi curiosidad y compromiso con el aprendizaje continuo me impulsan a explorar herramientas y marcos de trabajo emergentes que mejoran la eficiencia y funcionalidad de las aplicaciones web",
  skills: [{
    name: "C# & .Net",
    percentage: 90
  }, {
    name: "Angular",
    percentage: 85
  }, {
    name: "SQL Server",
    percentage: 80
  }, {
    name: "Azure",
    percentage: 50
  }, {
    name: "Python",
    percentage: 40
  }],
  showProfileImage: true,
  githubLink: "https://github.com/estefania-rollino",
  linkedinLink: "https://www.linkedin.com/in/steff-rollino/",
  downloadLink: "https://docs.google.com/document/d/1dHRzB8-ymIjucK_V5jNX_y5ADU1s7gd_l-GEAM-VDdQ/edit?usp=sharing"
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