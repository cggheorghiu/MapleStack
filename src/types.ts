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
  ITS = 'IT Services'
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
  dataStorage: {
    location: string;
    providers: string[];
    details: string;
  };
  pros: string[];
  cons: string[];
  reviews: Review[];
  description: string;
}
