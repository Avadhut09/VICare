const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

// Feature data for Features.jsx
const features = [
    {
        id: "critical-power",
        title: "CRITICAL POWER",
        content:
            "Our uninterruptible power solutions protect against mains power issues to ensure safe operation, protect people and reduce the risk of downtime and system failures.\n From oil and gas and transportation to utilities, nuclear power and other critical infrastructure, we provide rugged, fully reliable electrical power back-up solutions that are tailored to your specific requirements. This provides access to safe, consistent, dependable power, even in the toughest environments.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/008/728/675/original/electrical-engineer-doing-site-survey-engineer-checking-power-poles-in-field-and-working-on-laptop-video.jpg",
    },
    {
        id: "energy-transition",
        title: "ENERGY TRASITION",
        content:
            "By developing and deploying converters for advanced energy storage, we are helping to accelerate the energy transition to a more sustainable future. As a world-leading provider of energy storage converters, we are perfectly positioned to support businesses by connecting energy storage systems to the grid, while also supporting the integration of renewable energy into the grid.",
        image: "https://sistinesolar.com/wp-content/uploads/2023/09/Solar-Energy-Storage-Benefits2.jpg",
    },
    {
        id: "services",
        title: "SERVICES",
        content:
            "Our unique understanding and hands-on experience of power electronics enables us to deliver a complete service package, covering the entire life cycle of the product, from commissioning to decommissioning. Thanks to our global network of highly skilled engineers, we have got everything it takes to implement, integrate, and optimize your power systems and solutions, no matter where you are in the world.",
        image: "https://www.iimtstudies.edu.in/wp-content/uploads/2024/07/Pre-Graduate-Programme-In-Engineering-Electrical-Engineering.jpg",
    },
    {
        id: "project-management",
        title: "PROJECT MANAGEMENT",
        content:
            "Our accredited experts and specialist consultants have the knowledge and experience to put your plans into action, while keeping costs, quality, and schedules under complete control. Our team is keen to work together with you to develop solutions that are tailored to suit your needs.",
        image: "https://cdn-ckgki.nitrocdn.com/eIjtlqSrzAKXFrsHSjkfXOrmttOUeOlc/assets/images/optimized/rev-69b956e/esub.com/wp-content/uploads/2019/09/shutterstock_53241217.jpg",
    },
];

// products.js
const sampleProducts = [
    {
        id: 1,
        name: "Smartphone X",
        price: 599.99,
        description: "The latest smartphone with advanced features.",
        category: "Electronics",
        imageUrl: "/placeholder.svg",
        additionalImages: [],
        details: [],
    },
    {
        id: 2,
        name: "Laptop",
        price: 999,
        description: "Powerful and lightweight for professionals.",
        category: "Computers",
        imageUrl: "/placeholder.svg",
        additionalImages: [],
        details: [],
    },
    {
        id: 3,
        name: "Smartwatch",
        price: 299,
        description: "Track your fitness and stay connected",
        category: "Wearables",
        imageUrl: "/placeholder.svg",
        additionalImages: [],
        details: [],
    },
    // Additional Products
];

export { navItems, features, sampleProducts };
