import ups1 from "../assets/products/modular_ups/modular-pm660-25kva.png";
import ups2 from "../assets/products/modular_ups/modular-pm660.png";
import ups3 from "../assets/products/modular_ups/modular-pm6660-50kva.png";
import battery1 from "../assets/products/online_ups/Digital-HPH-HR-Series.png";
import battery2 from "../assets/products/online_ups/HP-i-33-30-kVA- 2.png";
import accessory1 from "../assets/products/online_ups/Keor-T-EVO -10 kVA.png";

export const products = [
  {
    id: 1,
    name: "HomeGuard 650VA UPS",
    category: "ups",
    power: "small",
    price: "129.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=HomeGuard+UPS",
    description: "Reliable UPS system providing essential backup power for home computers and networking equipment.",
    features: [
      "650VA/360W power capacity",
      "4 battery backup outlets",
      "Automatic voltage regulation",
      "LED status indicators"
    ],
    useCases: ["home", "small-business"],
    specifications: {
      inputVoltage: "120V AC",
      outputVoltage: "120V AC ±10%",
      batteryRuntime: "3-5 minutes at full load",
      dimensions: "5.5 x 11 x 3.4 inches"
    },
    featured: true
  },
  {
    id: 2,
    name: "ProTech 1500VA UPS",
    category: "ups",
    power: "medium",
    price: "249.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=ProTech+UPS",
    description: "Professional-grade UPS with sine wave output ideal for servers, network devices, and sensitive electronics.",
    features: [
      "1500VA/900W power capacity",
      "Pure sine wave output",
      "LCD status display",
      "Automated self-test"
    ],
    useCases: ["small-business", "enterprise"],
    specifications: {
      inputVoltage: "120V AC",
      outputVoltage: "120V AC ±5%",
      batteryRuntime: "4-6 minutes at full load",
      dimensions: "8.5 x 16 x 4.4 inches"
    },
    featured: true
  },
  {
    id: 3,
    name: "DataCenter Pro 5kVA",
    category: "ups",
    power: "medium",
    price: "1,499.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=DataCenter+Pro",
    description: "Enterprise-class UPS solution providing clean, uninterrupted power for critical server installations.",
    features: [
      "5kVA/4.5kW power capacity",
      "Double conversion online design",
      "Parallel capability up to 4 units",
      "Advanced monitoring and management"
    ],
    useCases: ["enterprise", "data-center"],
    specifications: {
      inputVoltage: "200/208/220/230/240V",
      outputVoltage: "200/208/220/230/240V ±1%",
      batteryRuntime: "4-6 minutes at full load",
      dimensions: "11 x 17 x 16 inches (2U)"
    },
    featured: true
  },
  {
    id: 4,
    name: "Industrial Power 10kVA",
    category: "ups",
    power: "large",
    price: "3,299.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Industrial+Power",
    description: "Heavy-duty UPS system designed for industrial environments and manufacturing facilities.",
    features: [
      "10kVA/9kW power capacity",
      "Wide input voltage range",
      "Generator compatible",
      "Hot-swappable batteries"
    ],
    useCases: ["industrial", "enterprise"],
    specifications: {
      inputVoltage: "3-phase 380/400/415V",
      outputVoltage: "3-phase 380/400/415V ±1%",
      batteryRuntime: "10-15 minutes at full load",
      dimensions: "19 x 27 x 33 inches"
    }
  },
  {
    id: 5,
    name: "Medical Grade 2kVA UPS",
    category: "ups",
    power: "medium",
    price: "899.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Medical+Grade+UPS",
    description: "Specialized UPS system for medical equipment with isolation transformer and low leakage current.",
    features: [
      "2kVA/1.8kW power capacity",
      "Medical-grade isolation",
      "Low leakage current (<100μA)",
      "Alarm silence function"
    ],
    useCases: ["medical", "industrial"],
    specifications: {
      inputVoltage: "220/230/240V",
      outputVoltage: "220/230/240V ±3%",
      batteryRuntime: "7-10 minutes at full load",
      dimensions: "10 x 19 x 15 inches"
    }
  },
  {
    id: 6,
    name: "Deep Cycle Battery 200Ah",
    category: "battery",
    power: "large",
    price: "449.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Deep+Cycle+Battery",
    description: "High-capacity deep cycle battery designed for renewable energy systems and long discharge applications.",
    features: [
      "200Ah capacity at 12V",
      "AGM technology",
      "3000+ cycle life at 50% DOD",
      "Maintenance-free design"
    ],
    useCases: ["home", "industrial", "enterprise"],
    specifications: {
      voltage: "12V DC",
      capacity: "200Ah",
      weight: "130 lbs",
      dimensions: "20.7 x 8.7 x 9.5 inches"
    }
  },
  {
    id: 7,
    name: "Lithium UPS Battery 50Ah",
    category: "battery",
    power: "medium",
    price: "599.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Lithium+Battery",
    description: "Advanced lithium iron phosphate battery for UPS systems offering longer cycle life and reduced weight.",
    features: [
      "50Ah capacity at 24V",
      "LiFePO4 chemistry",
      "6000+ cycle life",
      "Built-in BMS"
    ],
    useCases: ["enterprise", "data-center", "small-business"],
    specifications: {
      voltage: "24V DC",
      capacity: "50Ah",
      weight: "28 lbs",
      dimensions: "18.5 x 7.2 x 6.9 inches"
    },
    featured: true
  },
  {
    id: 8,
    name: "Industrial Cascade 5kVA",
    category: "ups",
    power: "medium",
    price: "2,499.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Industrial+Cascade",
    description: "Ruggedized UPS system designed for harsh industrial environments, featuring extended temperature range and enhanced protection.",
    features: [
      "5kVA/4.5kW power capacity",
      "Extended temperature range",
      "Conformal coated PCBs",
      "High surge protection"
    ],
    useCases: ["industrial", "medical"],
    specifications: {
      inputVoltage: "200/208/220/230/240V",
      outputVoltage: "200/208/220/230/240V ±1%",
      operatingTemp: "-20°C to +55°C",
      protection: "IP54 rated enclosure"
    }
  },
  {
    id: 9,
    name: "Compact Server UPS 3kVA",
    category: "ups",
    power: "medium",
    price: "1,199.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Compact+Server+UPS",
    description: "Space-efficient UPS solution for server rooms and network closets, delivering clean power in a small footprint.",
    features: [
      "3kVA/2.7kW power capacity",
      "Unity power factor",
      "Rack/tower convertible",
      "Network management card"
    ],
    useCases: ["enterprise", "data-center", "small-business"],
    specifications: {
      inputVoltage: "200/208/220/230/240V",
      outputVoltage: "200/208/220/230/240V ±2%",
      batteryRuntime: "5-8 minutes at full load",
      dimensions: "17 x 19 x 3.5 inches (2U)"
    }
  },
  {
    id: 10,
    name: "HomeOffice Battery Pack",
    category: "battery",
    power: "small",
    price: "149.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=HomeOffice+Battery",
    description: "Replacement battery pack for small to medium UPS systems used in home office environments.",
    features: [
      "12V 9Ah sealed lead-acid",
      "Hot-swappable design",
      "3-5 year service life",
      "Spill-proof construction"
    ],
    useCases: ["home", "small-business"],
    specifications: {
      voltage: "12V DC",
      capacity: "9Ah",
      weight: "7.5 lbs",
      dimensions: "5.9 x 2.5 x 3.7 inches"
    }
  },
  {
    id: 11,
    name: "Solar Energy Storage 10kWh",
    category: "battery",
    power: "large",
    price: "4,999.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Solar+Energy+Storage",
    description: "High-capacity lithium battery system for residential and commercial solar energy storage applications.",
    features: [
      "10kWh total capacity",
      "Modular expandable design",
      "10,000+ cycle life",
      "Integrated cooling system"
    ],
    useCases: ["home", "small-business", "industrial"],
    specifications: {
      voltage: "48V DC",
      capacity: "200Ah",
      weight: "220 lbs",
      dimensions: "24 x 36 x 12 inches"
    }
  },
  {
    id: 12,
    name: "Telecom Power System 15kVA",
    category: "ups",
    power: "large",
    price: "5,499.99",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Telecom+Power",
    description: "Comprehensive power solution for telecommunications infrastructure with extended backup capabilities.",
    features: [
      "15kVA/13.5kW power capacity",
      "DC output options",
      "Remote monitoring",
      "Scalable battery cabinets"
    ],
    useCases: ["enterprise", "data-center", "industrial"],
    specifications: {
      inputVoltage: "3-phase 380/400/415V",
      outputVoltage: "3-phase 380/400/415V ±1% or -48V DC",
      batteryRuntime: "Configurable with external batteries",
      dimensions: "24 x 32 x 78 inches (cabinet)"
    }
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "ups", name: "UPS Systems" },
  { id: "battery", name: "Batteries & Storage" }
];

export const powerRatings = [
  { id: "all", name: "All Power Ratings" },
  { id: "small", name: "Small (< 1kVA)" },
  { id: "medium", name: "Medium (1-10kVA)" },
  { id: "large", name: "Large (> 10kVA)" }
];

export const useCaseOptions = [
  { id: "all", name: "All Use Cases" },
  { id: "home", name: "Home" },
  { id: "small-business", name: "Small Business" },
  { id: "enterprise", name: "Enterprise" },
  { id: "data-center", name: "Data Center" },
  { id: "industrial", name: "Industrial" },
  { id: "medical", name: "Medical" }
];

