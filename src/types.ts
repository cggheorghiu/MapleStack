export enum Province {
  AB = 'Alberta',
  BC = 'British Columbia',
  MB = 'Manitoba',
  NB = 'New Brunswick',
  NL = 'Newfoundland and Labrador',
  NS = 'Nova Scotia',
  ON = 'Ontario',
  PE = 'Prince Edward Island',
  QC = 'Quebec',
  SK = 'Saskatchewan',
  NT = 'Northwest Territories',
  NU = 'Nunavut',
  YT = 'Yukon'
}

export enum SoftwareType {
  ERP = 'ERP',
  CRM = 'CRM',
  HR = 'Human Resources',
  PM = 'Project Management',
  SCM = 'Supply Chain',
  FIN = 'Fintech/Accounting',
  ECOM = 'E-commerce',
  SEC = 'Security',
  AI = 'AI & Analytics',
  LEGAL = 'Legal Tech',
  LOG = 'Logistics',
  MAR = 'Marketing/Social Media',
  ITS = 'IT Services',
  POS = 'Point of Sale',
  GIS = 'GIS & Geospatial',
  EDU = 'Education',
  HEALTH = 'Healthcare',
  CAD = 'CAD/Engineering',
  AERO = 'Aerospace/Drone',
  BANK = 'Banking',
  FUND = 'Fundraising',
  IOT = 'IoT',
  BI = 'Business Intelligence',
  ROBOT = 'Robotics',
  RESEARCH = 'Market Research',
  MEDIA = 'Media & Publishing',
  COMPLIANCE = 'Compliance',
  BACKUP = 'Backup & Recovery',
  COMMS = 'Communications',
  SCHEDULING = 'Scheduling'
}

export enum Industry {
  RETAIL = 'Retail',
  MANUFACTURING = 'Manufacturing',
  HEALTHCARE = 'Healthcare',
  FINANCE = 'Finance',
  GOVERNMENT = 'Government',
  EDUCATION = 'Education',
  LOGISTICS = 'Logistics',
  TECH = 'Technology',
  ENERGY = 'Energy',
  CONSTRUCTION = 'Construction',
  PROFESSIONAL_SERVICES = 'Professional Services',
  CROSS_INDUSTRY = 'Cross-industry',
  HOSPITALITY = 'Hospitality',
  FITNESS = 'Fitness',
  AUTOMOTIVE = 'Automotive',
  NON_PROFIT = 'Non-profit',
  REAL_ESTATE = 'Real Estate',
  MARITIME = 'Maritime',
  MUNICIPAL = 'Municipal',
  FORESTRY = 'Forestry',
  LEGAL = 'Legal',
  ECOM = 'E-commerce',
  PHARMA = 'Pharmaceuticals',
  AGRI = 'Agriculture',
  CLEAN = 'CleanTech',
  TRAVEL = 'Travel',
  MEDIA = 'Media',
  RESIDENTIAL = 'Residential',
  UTILITIES = 'Utilities'
}

export enum CompanySize {
  SMALL = '1-50 employees',
  MEDIUM = '51-500 employees',
  LARGE = '501+ employees'
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  content: string;
  source?: string;
}

export interface Review {
  platform: string;
  rating: number;
  count: number;
  url: string;
}

export interface Vendor {
  id: string;
  name: string;
  solutions: string[];
  website: string;
  linkedin: string;
  headquarters: {
    city: string;
    province: Province;
  };
  softwareTypes: SoftwareType[];
  industries?: Industry[];
  companySize?: CompanySize[];
  dataStorage: {
    location: string;
    providers: string[];
    details: string;
  };
  pros: string[];
  cons: string[];
  reviews: Review[];
  description: string;
  pricing?: {
    plans?: { name: string; price: string; features: string[] }[];
    details?: string;
    url?: string;
  };
}
