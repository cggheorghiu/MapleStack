import { Province, SoftwareType, Vendor, Industry, CompanySize } from './types';

export const VENDORS: Vendor[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    solutions: ['Shopify Plus', 'Shopify POS', 'Shopify Markets'],
    website: 'https://www.shopify.com',
    linkedin: 'https://www.linkedin.com/company/shopify',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.FIN],
    industries: [Industry.RETAIL],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global (Canada, US, Europe)',
      providers: ['Google Cloud Platform (GCP)'],
      details: 'Shopify utilizes Google Cloud for its infrastructure, with data centers distributed globally to ensure low latency and high availability.'
    },
    pros: ['Global presence in e-commerce', 'Massive app ecosystem', 'Highly scalable'],
    cons: ['Transaction fees if not using Shopify Payments', 'Can become expensive with many apps'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 4500, url: 'https://www.g2.com/products/shopify/reviews' },
      { platform: 'Capterra', rating: 4.5, count: 6000, url: 'https://www.capterra.com/p/135114/Shopify/' },
      { platform: 'Trustpilot', rating: 1.3, count: 4303, url: 'https://www.trustpilot.com/review/www.shopify.com' }
    ],
    description: 'A global commerce company, providing tools to start, grow, market, and manage a retail business of any size.'
  },
  {
    id: 'achievers',
    name: 'Achievers',
    solutions: ['Achievers Recognize', 'Achievers Reward', 'Achievers Celebrate', 'Achievers Listen'],
    website: 'https://www.achievers.com',
    linkedin: 'https://www.linkedin.com/company/achievers',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Achievers leverages AWS for its global infrastructure, offering data residency options in Canada to meet local compliance requirements.'
    },
    pros: ['Global rewards marketplace', 'High activation and engagement rates', 'Strong mobile experience', 'Seamless integrations with Slack and Microsoft Teams'],
    cons: ['Enterprise-focused pricing', 'Implementation can be complex for smaller teams'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 600, url: 'https://www.g2.com/products/achievers/reviews' },
      { platform: 'Capterra', rating: 4.5, count: 400, url: 'https://www.capterra.com/p/121852/Achievers/' }
    ],
    description: 'An employee recognition and engagement platform that helps organizations build a culture of appreciation through rewards, social recognition, and employee voice tools.'
  },
  {
    id: 'opentext',
    name: 'OpenText',
    solutions: ['Content Cloud', 'Experience Cloud', 'Business Network Cloud', 'Security Cloud'],
    website: 'https://www.opentext.com',
    linkedin: 'https://www.linkedin.com/company/opentext',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.SEC, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT, Industry.FINANCE],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US, Europe, Asia',
      providers: ['Microsoft Azure', 'AWS', 'Google Cloud'],
      details: 'OpenText Cloud is powered by a multi-cloud strategy, utilizing major providers alongside their own data centers for specific compliance needs.'
    },
    pros: ['Enterprise-grade information management', 'Strong compliance features', 'Comprehensive product suite'],
    cons: ['Complex implementation', 'Steep learning curve for some modules'],
    reviews: [
      { platform: 'G2', rating: 4.1, count: 800, url: 'https://www.g2.com/products/opentext-content-suite-platform/reviews' }
    ],
    description: 'A provider of Information Management solutions, helping companies securely capture, govern and exchange information on a global scale.'
  },
  {
    id: 'cgi',
    name: 'CGI',
    solutions: ['CGI Advantage ERP', 'CGI ProperPay', 'CGI OpenMedia'],
    website: 'https://www.cgi.com',
    linkedin: 'https://www.linkedin.com/company/cgi',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.ITS, SoftwareType.FIN],
    industries: [Industry.GOVERNMENT, Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada (Montreal, Toronto), Global',
      providers: ['Microsoft Azure', 'AWS', 'Private Cloud'],
      details: 'CGI operates its own secure data centers in Canada and partners with major cloud providers for hybrid solutions.'
    },
    pros: ['End-to-end IT services', 'Strong government and enterprise presence', 'Global delivery model'],
    cons: ['Large organization can be slow to navigate', 'Premium pricing for consulting'],
    reviews: [
      { platform: 'Gartner Peer Insights', rating: 4.5, count: 120, url: 'https://www.gartner.com/reviews/market/it-services' }
    ],
    description: 'An IT and business consulting services firm, delivering end-to-end services and solutions.'
  },
  {
    id: 'kinaxis',
    name: 'Kinaxis',
    solutions: ['Kinaxis'],
    website: 'https://www.kinaxis.com',
    linkedin: 'https://www.linkedin.com/company/kinaxis',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.AI],
    industries: [Industry.MANUFACTURING, Industry.LOGISTICS, Industry.RETAIL],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US, Europe, Japan',
      providers: ['Microsoft Azure'],
      details: 'Kinaxis is primarily hosted on Microsoft Azure, providing global scale and robust security for supply chain data.'
    },
    pros: ['Supply chain planning', 'Concurrent planning capabilities', 'Strong AI integration'],
    cons: ['Requires high-quality data input', 'Focused primarily on large enterprises'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 13, url: 'https://www.g2.com/products/kinaxis/reviews' }
    ],
    description: 'A provider of supply chain management and sales and operations planning (S&OP).'
  },
  {
    id: 'lightspeed',
    name: 'Lightspeed Commerce',
    solutions: ['Lightspeed Retail', 'Lightspeed Restaurant', 'Lightspeed Golf'],
    website: 'https://www.lightspeedhq.com',
    linkedin: 'https://www.linkedin.com/company/lightspeedhq',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.FIN],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['Google Cloud Platform (GCP)', 'AWS'],
      details: 'Lightspeed uses a combination of GCP and AWS to power its point-of-sale and e-commerce platforms globally.'
    },
    pros: ['Specialized for retail and hospitality', 'Strong multi-location support', 'Integrated payments'],
    cons: ['Higher cost than basic POS systems', 'Some advanced features require add-ons'],
    reviews: [
      { platform: 'G2', rating: 4.0, count: 293, url: 'https://www.g2.com/products/lightspeed-retail/reviews' },
      { platform: 'Capterra', rating: 4.2, count: 1200, url: 'https://www.capterra.com/p/148446/Lightspeed-Retail/' }
    ],
    description: 'A one-stop commerce platform for merchants around the world to simplify, scale and provide exceptional customer experiences.'
  },
  {
    id: 'clio',
    name: 'Clio',
    solutions: ['Clio Manage', 'Clio Grow', 'Clio Law Firm CRM'],
    website: 'https://www.clio.com',
    linkedin: 'https://www.linkedin.com/company/clio-legal-software',
    headquarters: {
      city: 'Burnaby',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.LEGAL, SoftwareType.CRM],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Clio offers data residency in Canada, the US, and Europe, primarily utilizing AWS infrastructure with strict legal compliance standards.'
    },
    pros: ['Legal practice management', 'Extensive integrations', 'User-friendly interface'],
    cons: ['Pricing can be high for solo practitioners', 'Some advanced features require higher tiers'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 830, url: 'https://www.g2.com/products/clio-clio-manage/reviews' }
    ],
    description: 'A cloud-based legal software, providing practice management, CRM, and client intake solutions.'
  },
  {
    id: 'freshbooks',
    name: 'FreshBooks',
    solutions: ['FreshBooks Accounting'],
    website: 'https://www.freshbooks.com',
    linkedin: 'https://www.linkedin.com/company/freshbooks',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada, US',
      providers: ['Google Cloud Platform (GCP)'],
      details: 'FreshBooks leverages GCP for its accounting platform, ensuring secure and reliable access for small business owners.'
    },
    pros: ['Easy to use for non-accountants', 'Invoicing features', 'Great customer support'],
    cons: ['Limited features in basic plan', 'Not as robust as full ERP systems for large businesses'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 959, url: 'https://www.g2.com/products/freshbooks/reviews' },
      { platform: 'TrustRadius', rating: 8.5, count: 400, url: 'https://www.trustradius.com/products/freshbooks/reviews' },
      { platform: 'Trustpilot', rating: 3.9, count: 984, url: 'https://www.trustpilot.com/review/www.freshbooks.com' }
    ],
    description: 'Cloud accounting software that makes billing and invoicing easy and professional for small business owners.'
  },
  {
    id: 'benevity',
    name: 'Benevity',
    solutions: ['Benevity Spark', 'Benevity Grants', 'Benevity Missions'],
    website: 'https://www.benevity.com',
    linkedin: 'https://www.linkedin.com/company/benevity',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.MAR],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Benevity uses AWS to host its global corporate social responsibility platform, with data residency options for enterprise clients.'
    },
    pros: ['Comprehensive CSR platform', 'Strong employee engagement tools', 'Global donation management'],
    cons: ['Complex setup for large enterprises', 'Administrative overhead for small teams'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 100, url: 'https://www.g2.com/products/benevity/reviews' }
    ],
    description: 'A provider of corporate social responsibility and employee engagement software.'
  },
  {
    id: 'verafin',
    name: 'Verafin',
    solutions: ['Verafin FRAMLx'],
    website: 'https://verafin.com',
    linkedin: 'https://www.linkedin.com/company/verafin',
    headquarters: {
      city: 'St. John\'s',
      province: Province.NL
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.SEC, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Verafin (now part of Nasdaq) utilizes AWS for its cloud-based financial crime management platform.'
    },
    pros: ['Advanced financial crime detection', 'Cloud-native security', 'Strong AI/ML capabilities'],
    cons: ['Highly specialized for financial institutions', 'Implementation requires significant integration'],
    reviews: [
      { platform: 'Gartner', rating: 4.7, count: 50, url: 'https://www.gartner.com/reviews/market/anti-money-laundering-solutions' }
    ],
    description: 'A provider of anti-money laundering and fraud detection software for financial institutions.'
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    solutions: ['Hootsuite Professional', 'Hootsuite Enterprise', 'Hootsuite Insights'],
    website: 'https://www.hootsuite.com',
    linkedin: 'https://www.linkedin.com/company/hootsuite',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.MAR],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Hootsuite is built on AWS, allowing for massive scale in processing social media data from around the world.'
    },
    pros: ['Widely used social management', 'Comprehensive analytics', 'Supports many social networks'],
    cons: ['Interface can feel cluttered', 'Expensive for small businesses'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 6693, url: 'https://www.g2.com/products/hootsuite/reviews' }
    ],
    description: 'The world\'s most widely used social media management platform.'
  },
  {
    id: '1password',
    name: '1Password',
    solutions: ['1Password Business', '1Password Families', '1Password Teams'],
    website: 'https://1password.com',
    linkedin: 'https://www.linkedin.com/company/1password',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: '1Password offers regional data residency in Canada, the US, and Europe, utilizing AWS with end-to-end encryption.'
    },
    pros: ['Security features', 'Great user experience', 'Strong enterprise features'],
    cons: ['Requires browser extension/app for optimal use', 'Family plan management can be improved'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 1689, url: 'https://www.g2.com/products/1password/reviews' },
      { platform: 'Trustpilot', rating: 4.4, count: 12330, url: 'https://www.trustpilot.com/review/1password.com' }
    ],
    description: 'A password manager, helping businesses and families stay safe online.'
  },
  {
    id: 'coveo',
    name: 'Coveo',
    solutions: ['Coveo Relevance Cloud', 'Coveo for Salesforce', 'Coveo for ServiceNow'],
    website: 'https://www.coveo.com',
    linkedin: 'https://www.linkedin.com/company/coveo',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.CRM, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Coveo Relevance Cloud is hosted on AWS, providing AI-powered search and recommendations at scale.'
    },
    pros: ['AI-powered relevance', 'Unified search across platforms', 'Strong enterprise integrations'],
    cons: ['Complex configuration', 'Requires significant tuning for optimal results'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 144, url: 'https://www.g2.com/products/coveo/reviews' },
      { platform: 'Gartner Peer Insights', rating: 4.4, count: 200, url: 'https://www.gartner.com/reviews/market/insight-engines' }
    ],
    description: 'A provider of AI-powered search and recommendations for digital experiences.'
  },
  {
    id: 'descartes',
    name: 'Descartes Systems Group',
    solutions: ['Global Logistics Network', 'Routing & Scheduling', 'Customs & Regulatory Compliance'],
    website: 'https://www.descartes.com',
    linkedin: 'https://www.linkedin.com/company/descartes-systems-group',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LOG, SoftwareType.SCM],
    dataStorage: {
      location: 'Global',
      providers: ['Microsoft Azure', 'AWS', 'Private Cloud'],
      details: 'Descartes operates a global logistics network with data centers strategically located to support international trade.'
    },
    pros: ['Global logistics network', 'Comprehensive regulatory compliance', 'Scalable SaaS model'],
    cons: ['Legacy interface in some modules', 'Steep learning curve for complex logistics'],
    reviews: [
      { platform: 'G2', rating: 4.0, count: 100, url: 'https://www.g2.com/products/descartes-global-logistics-network/reviews' }
    ],
    description: 'A provider of on-demand, software-as-a-service solutions focused on improving the productivity, performance and security of logistics-intensive businesses.'
  },
  {
    id: 'ceridian',
    name: 'Ceridian (Dayforce)',
    solutions: ['Dayforce HCM', 'Dayforce Payroll', 'Dayforce Wallet'],
    website: 'https://www.dayforce.com',
    linkedin: 'https://www.linkedin.com/company/dayforce',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.FIN],
    dataStorage: {
      location: 'Canada, US, Europe, Australia',
      providers: ['Microsoft Azure'],
      details: 'Dayforce is primarily hosted on Microsoft Azure, offering global compliance and data residency for payroll and HR data.'
    },
    pros: ['Unified HCM and Payroll', 'Real-time calculations', 'Mobile-first employee experience'],
    cons: ['Complex implementation', 'Reporting can be difficult to customize'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 942, url: 'https://www.g2.com/products/dayforce/reviews' }
    ],
    description: 'A global human capital management software company that helps organizations manage the entire employee lifecycle.'
  },
  {
    id: 'pointclickcare',
    name: 'PointClickCare',
    solutions: ['Core Platform', 'Infection Prevention & Control', 'Marketplace'],
    website: 'https://pointclickcare.com',
    linkedin: 'https://www.linkedin.com/company/pointclickcare',
    headquarters: {
      city: 'Mississauga',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, US',
      providers: ['Microsoft Azure', 'AWS'],
      details: 'PointClickCare utilizes major cloud providers to host its healthcare platform, ensuring HIPAA and PIPEDA compliance.'
    },
    pros: ['Senior care EHR', 'Strong compliance features', 'Large marketplace of integrations'],
    cons: ['Interface can feel dated', 'Training required for complex workflows'],
    reviews: [
      { platform: 'G2', rating: 4.0, count: 1445, url: 'https://www.g2.com/products/pointclickcare/reviews' },
      { platform: 'Capterra', rating: 4.3, count: 500, url: 'https://www.capterra.com/p/128344/PointClickCare/' }
    ],
    description: 'A cloud-based software platform for the senior care market.'
  },
  {
    id: 'd2l',
    name: 'D2L (Desire2Learn)',
    solutions: ['Brightspace', 'D2L Wave'],
    website: 'https://www.d2l.com',
    linkedin: 'https://www.linkedin.com/company/d2l',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.HR],
    dataStorage: {
      location: 'Canada, US, Europe, Asia',
      providers: ['AWS'],
      details: 'D2L Brightspace is hosted on AWS, providing high availability and scalability for educational institutions worldwide.'
    },
    pros: ['LMS for higher education', 'Highly accessible and inclusive', 'Strong focus on student success'],
    cons: ['Interface can be complex for new users', 'Mobile app experience varies'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 625, url: 'https://www.g2.com/products/brightspace/reviews' }
    ],
    description: 'A provider of learning technology, providing the Brightspace learning management system.'
  },
  {
    id: 'wealthsimple',
    name: 'Wealthsimple',
    solutions: ['Wealthsimple Invest', 'Wealthsimple Trade', 'Wealthsimple Tax'],
    website: 'https://www.wealthsimple.com',
    linkedin: 'https://www.linkedin.com/company/wealthsimple',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Wealthsimple uses AWS for its financial platform, with a strong focus on Canadian data residency and security.'
    },
    pros: ['Canadian fintech', 'User-friendly investment platform', 'Low-cost trading and tax tools'],
    cons: ['Limited advanced trading features', 'Customer support can be slow during peak times'],
    reviews: [
      { platform: 'App Store', rating: 4.8, count: 150000, url: 'https://apps.apple.com/ca/app/wealthsimple/id948087968' },
      { platform: 'Trustpilot', rating: 1.3, count: 600, url: 'https://www.trustpilot.com/review/www.wealthsimple.com' }
    ],
    description: 'A Canadian financial services company, offering investment, trading, and tax software.'
  },
  {
    id: 'nuvei',
    name: 'Nuvei',
    solutions: ['Nuvei Global Payments', 'Nuvei Card Issuing'],
    website: 'https://nuvei.com',
    linkedin: 'https://www.linkedin.com/company/nuvei',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Private Cloud'],
      details: 'Nuvei operates a global payment infrastructure with high-security data centers and cloud redundancy.'
    },
    pros: ['Payment technology provider', 'Accelerates business scaling', 'Future-first payment solutions'],
    cons: ['Complex fee structure for some regions', 'Integration requires technical expertise'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 20, url: 'https://www.g2.com/products/nuvei/reviews' },
      { platform: 'Trustpilot', rating: 4.1, count: 500, url: 'https://www.trustpilot.com/review/nuvei.com' }
    ],
    description: 'The tomorrow-first payments technology company, helping businesses scale locally and globally.'
  },
  {
    id: 'trulioo',
    name: 'Trulioo',
    solutions: ['GlobalGateway'],
    website: 'https://www.trulioo.com',
    linkedin: 'https://www.linkedin.com/company/trulioo',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.FIN],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Trulioo utilizes AWS to power its global identity verification platform, ensuring data privacy and compliance.'
    },
    pros: ['Identity verification provider', 'Secure access to hundreds of data sources', 'Building trust in the digital economy'],
    cons: ['Requires significant data for verification', 'Privacy compliance varies by region'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 50, url: 'https://www.g2.com/products/trulioo/reviews' },
      { platform: 'Trustpilot', rating: 2.8, count: 3, url: 'https://www.trustpilot.com/review/www.trulioo.com' }
    ],
    description: 'An identity verification service, providing secure access to hundreds of data sources.'
  },
  {
    id: 'thinkific',
    name: 'Thinkific',
    solutions: ['Thinkific Plus', 'Thinkific Payments'],
    website: 'https://www.thinkific.com',
    linkedin: 'https://www.linkedin.com/company/thinkific',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.ECOM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Thinkific is hosted on AWS, providing a reliable platform for course creators to build and sell online courses.'
    },
    pros: ['Platform for course creators', 'Empowers creators to build businesses', 'Reliable and scalable platform'],
    cons: ['Transaction fees on some plans', 'Limited design flexibility for basic users'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 383, url: 'https://www.g2.com/products/thinkific/reviews' },
      { platform: 'Trustpilot', rating: 2.5, count: 844, url: 'https://www.trustpilot.com/review/www.thinkific.com' }
    ],
    description: 'A platform for creating, marketing, and selling online courses and membership sites.'
  },
  {
    id: 'absolute',
    name: 'Absolute Software',
    solutions: ['Absolute Persistence', 'Absolute Resilience'],
    website: 'https://www.absolute.com',
    linkedin: 'https://www.linkedin.com/company/absolute-software',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS', 'Microsoft Azure'],
      details: 'Absolute utilizes major cloud providers for its endpoint security platform, with a focus on resilient data management.'
    },
    pros: ['Self-healing security solutions', 'Embedded in the BIOS for persistence', 'Intelligent endpoint security'],
    cons: ['Requires specific hardware support', 'Can be complex to manage at scale'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 200, url: 'https://www.g2.com/products/absolute/reviews' }
    ],
    description: 'The only provider of self-healing, intelligent security solutions.'
  },
  {
    id: 'alayacare',
    name: 'AlayaCare',
    solutions: ['AlayaCare Cloud', 'AlayaCare Residential'],
    website: 'https://alayacare.com',
    linkedin: 'https://www.linkedin.com/company/alayacare',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, US, Australia',
      providers: ['AWS'],
      details: 'AlayaCare is hosted on AWS, providing a modern cloud platform for home and community care providers.'
    },
    pros: ['Modern cloud platform for home care', 'Better technology for better outcomes', 'End-to-end software solution'],
    cons: ['Requires adoption by field staff', 'Implementation for large agencies is complex'],
    reviews: [
      { platform: 'Capterra', rating: 4.4, count: 150, url: 'https://www.capterra.com/p/145678/AlayaCare/' }
    ],
    description: 'An end-to-end software platform for home and community care providers.'
  },
  {
    id: 'plusgrade',
    name: 'Plusgrade',
    solutions: ['Plusgrade Upgrade', 'Plusgrade Points'],
    website: 'https://www.plusgrade.com',
    linkedin: 'https://www.linkedin.com/company/plusgrade',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Plusgrade utilizes AWS to power its ancillary revenue platform for the global travel industry.'
    },
    pros: ['Ancillary revenue provider', 'Generates significant revenue for travel', 'Innovative travel tech solutions'],
    cons: ['Highly specialized for travel industry', 'Integration with legacy airline systems'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.9, count: 100, url: 'https://www.linkedin.com/company/plusgrade' }
    ],
    description: 'A provider of ancillary revenue solutions for the travel industry.'
  },
  {
    id: 'magnetforensics',
    name: 'Magnet Forensics',
    solutions: ['Magnet AXIOM', 'Magnet OUTRIDER', 'Magnet AUTOMATE'],
    website: 'https://www.magnetforensics.com',
    linkedin: 'https://www.linkedin.com/company/magnet-forensics',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.LEGAL],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['Microsoft Azure', 'AWS'],
      details: 'Magnet Forensics utilizes major cloud providers for its digital investigation platform, ensuring high security and compliance for law enforcement data.'
    },
    pros: ['Digital forensics provider', 'Uncovers evidence from many sources', 'Trusted by law enforcement'],
    cons: ['Highly specialized and technical', 'Requires significant training for investigators'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 100, url: 'https://www.g2.com/products/magnet-axiom/reviews' }
    ],
    description: 'A provider of digital forensics software, helping investigators uncover critical evidence from computers, smartphones, and the cloud.'
  },
  {
    id: 'assent',
    name: 'Assent',
    solutions: ['Assent Compliance Platform'],
    website: 'https://www.assent.com',
    linkedin: 'https://www.linkedin.com/company/assentcompliance',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Assent leverages AWS to host its supply chain sustainability and compliance platform, providing global scale for complex manufacturing data.'
    },
    pros: ['Supply chain sustainability provider', 'Comprehensive data management', 'Strong compliance focus'],
    cons: ['Complex for small manufacturers', 'Requires significant supplier participation'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 150, url: 'https://www.g2.com/products/assent/reviews' }
    ],
    description: 'The supply chain sustainability management solution that helps complex manufacturers manage their supply chain data.'
  },
  {
    id: 'vidyard',
    name: 'Vidyard',
    solutions: ['Vidyard Video Messaging', 'Vidyard Video Hosting'],
    website: 'https://www.vidyard.com',
    linkedin: 'https://www.linkedin.com/company/vidyard',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.CRM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Vidyard is built on AWS, allowing for seamless video delivery and analytics for sales and marketing teams globally.'
    },
    pros: ['Video messaging for sales', 'Detailed video analytics', 'Seamless CRM integration'],
    cons: ['Free version is limited', 'Can be expensive for large teams'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 600, url: 'https://www.g2.com/products/vidyard/reviews' }
    ],
    description: 'A video platform for businesses, helping them use video to drive more revenue through sales and marketing.'
  },
  {
    id: 'ada',
    name: 'Ada',
    solutions: ['Ada Automation Platform'],
    website: 'https://www.ada.cx',
    linkedin: 'https://www.linkedin.com/company/ada-support',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.CRM],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Ada utilizes AWS for its AI-powered customer service automation platform, providing secure and scalable interactions.'
    },
    pros: ['AI-powered support automation', 'Personalized customer experiences', 'Scalable for global brands'],
    cons: ['Requires significant training data', 'Complex setup for non-standard workflows'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 300, url: 'https://www.g2.com/products/ada/reviews' }
    ],
    description: 'An AI-powered customer service automation platform that helps brands provide personalized support at scale.'
  },
  {
    id: 'cohere',
    name: 'Cohere',
    solutions: ['Cohere Command', 'Cohere Embed', 'Cohere Rerank'],
    website: 'https://cohere.com',
    linkedin: 'https://www.linkedin.com/company/cohere-ai',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    dataStorage: {
      location: 'Global',
      providers: ['Google Cloud Platform (GCP)', 'AWS', 'Oracle Cloud'],
      details: 'Cohere provides enterprise AI models that can be deployed on any cloud, with a strong focus on data privacy and security.'
    },
    pros: ['Enterprise-grade AI models', 'Cloud-agnostic deployment', 'Strong focus on data privacy'],
    cons: ['Requires technical expertise to implement', 'Pricing can be high for high-volume use'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 50, url: 'https://www.g2.com/products/cohere/reviews' }
    ],
    description: 'A provider of AI models for enterprise, including large language models (LLMs).'
  },
  {
    id: 'applyboard',
    name: 'ApplyBoard',
    solutions: ['ApplyBoard Platform'],
    website: 'https://www.applyboard.com',
    linkedin: 'https://www.linkedin.com/company/applyboard',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'ApplyBoard uses AWS to host its global student recruitment platform, managing thousands of applications securely.'
    },
    pros: ['Student recruitment platform', 'Streamlined application process', 'Global reach for institutions'],
    cons: ['High volume of applications to manage', 'Student support can be slow at times'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.5, count: 2000, url: 'https://www.trustpilot.com/review/www.applyboard.com' }
    ],
    description: 'An online platform for international student recruitment.'
  },
  {
    id: 'dialogue',
    name: 'Dialogue',
    solutions: ['Dialogue Health', 'Dialogue EAP'],
    website: 'https://www.dialogue.co',
    linkedin: 'https://www.linkedin.com/company/dialogue-health-technologies',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['Microsoft Azure'],
      details: 'Dialogue (now part of Sun Life) hosts its virtual care platform on Microsoft Azure, with all health data strictly stored in Canada.'
    },
    pros: ['Virtual care provider', 'High-quality health professionals', 'Strong employer focus'],
    cons: ['Limited to Canadian market', 'Requires employer sponsorship for full access'],
    reviews: [
      { platform: 'App Store', rating: 4.9, count: 20000, url: 'https://apps.apple.com/ca/app/dialogue-virtual-healthcare/id1141753447' }
    ],
    description: 'A virtual healthcare and wellness platform for employers and organizations.'
  },
  {
    id: 'miovision',
    name: 'Miovision',
    solutions: ['Miovision Scout', 'Miovision Core'],
    website: 'https://miovision.com',
    linkedin: 'https://www.linkedin.com/company/miovision-technologies',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LOG, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Miovision utilizes AWS for its smart traffic management platform, processing massive amounts of video data for urban planning.'
    },
    pros: ['Smart traffic management provider', 'AI-powered traffic analysis', 'Scalable cloud infrastructure'],
    cons: ['Requires hardware installation', 'High initial investment for cities'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 30, url: 'https://www.g2.com/products/miovision/reviews' }
    ],
    description: 'A provider of smart traffic technology, helping cities improve traffic flow and safety.'
  },
  {
    id: 'geotab',
    name: 'Geotab',
    solutions: ['MyGeotab', 'Geotab Drive'],
    website: 'https://www.geotab.com',
    linkedin: 'https://www.linkedin.com/company/geotab',
    headquarters: {
      city: 'Oakville',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LOG, SoftwareType.AI],
    dataStorage: {
      location: 'Global',
      providers: ['Google Cloud Platform (GCP)'],
      details: 'Geotab processes billions of data points daily on GCP, providing real-time telematics and fleet management insights.'
    },
    pros: ['Telematics provider', 'Massive data processing capabilities', 'Strong focus on security and privacy'],
    cons: ['Complex interface for small fleets', 'Requires hardware integration'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 200, url: 'https://www.g2.com/products/geotab/reviews' }
    ],
    description: 'A provider of IoT and connected transportation, providing telematics solutions for fleet management.'
  },
  {
    id: 'jobber',
    name: 'Jobber',
    solutions: ['Jobber Core', 'Jobber Payments'],
    website: 'https://getjobber.com',
    linkedin: 'https://www.linkedin.com/company/getjobber',
    headquarters: {
      city: 'Edmonton',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.CRM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Jobber is hosted on AWS, providing a reliable platform for home service businesses to manage their operations.'
    },
    pros: ['Specialized for home services', 'Easy scheduling and dispatching', 'Integrated payments'],
    cons: ['Mobile app can be slow', 'Limited customization for non-service businesses'],
    reviews: [
      { platform: 'Capterra', rating: 4.5, count: 3000, url: 'https://www.capterra.com/p/121234/Jobber/' }
    ],
    description: 'A business management software for home service professionals.'
  },
  {
    id: 'helcim',
    name: 'Helcim',
    solutions: ['Helcim Payments', 'Helcim POS'],
    website: 'https://www.helcim.com',
    linkedin: 'https://www.linkedin.com/company/helcim',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Private Cloud'],
      details: 'Helcim operates its own payment infrastructure with a focus on transparency and Canadian data security.'
    },
    pros: ['Transparent pricing', 'Great customer service', 'Modern payment hardware'],
    cons: ['Approval process can be strict', 'Limited international support'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.8, count: 1000, url: 'https://www.trustpilot.com/review/helcim.com' }
    ],
    description: 'A payments company that provides better rates and smarter software for small businesses.'
  },
  {
    id: 'skipthedishes',
    name: 'SkipTheDishes',
    solutions: ['Skip Courier App', 'Skip Restaurant Portal'],
    website: 'https://www.skipthedishes.com',
    linkedin: 'https://www.linkedin.com/company/skipthedishes',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.LOG, SoftwareType.ECOM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS', 'Google Cloud'],
      details: 'SkipTheDishes (part of Just Eat Takeaway) utilizes a massive cloud infrastructure to manage real-time delivery logistics.'
    },
    pros: ['Delivery network in Canada', 'Strong restaurant partnerships', 'Reliable courier app'],
    cons: ['Delivery fees can be high', 'Customer support response times vary'],
    reviews: [
      { platform: 'App Store', rating: 4.7, count: 500000, url: 'https://apps.apple.com/ca/app/skipthedishes-food-delivery/id1043510002' }
    ],
    description: 'A food delivery network, connecting millions of customers with local restaurants.'
  },
  {
    id: 'boldcommerce',
    name: 'Bold Commerce',
    solutions: ['Bold Checkout', 'Bold Subscriptions'],
    website: 'https://boldcommerce.com',
    linkedin: 'https://www.linkedin.com/company/bold-commerce',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.ECOM],
    dataStorage: {
      location: 'Global',
      providers: ['GCP', 'AWS'],
      details: 'Bold Commerce provides headless checkout solutions hosted on major cloud platforms for global retailers.'
    },
    pros: ['Modular e-commerce solutions', 'Headless checkout capabilities', 'Strong Shopify integration'],
    cons: ['Requires technical knowledge for setup', 'Can be expensive for smaller brands'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 100, url: 'https://www.g2.com/products/bold-commerce/reviews' }
    ],
    description: 'A provider of modular e-commerce solutions for high-growth brands.'
  },
  {
    id: 'vendasta',
    name: 'Vendasta',
    solutions: ['Vendasta Platform', 'Vendasta Marketplace'],
    website: 'https://www.vendasta.com',
    linkedin: 'https://www.linkedin.com/company/vendasta',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.CRM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['GCP'],
      details: 'Vendasta is built on Google Cloud Platform, providing a white-label marketplace for agencies to sell to small businesses.'
    },
    pros: ['Comprehensive white-label marketplace', 'Strong sales and marketing tools', 'Scalable for agencies'],
    cons: ['Steep learning curve for new partners', 'Interface can feel overwhelming'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 400, url: 'https://www.g2.com/products/vendasta/reviews' }
    ],
    description: 'A platform for channel partners to provide digital solutions to small and medium-sized businesses.'
  },
  {
    id: '7shifts',
    name: '7shifts',
    solutions: ['7shifts Scheduling', '7shifts Payroll'],
    website: 'https://www.7shifts.com',
    linkedin: 'https://www.linkedin.com/company/7shifts',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.PM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: '7shifts is hosted on AWS, providing specialized scheduling and HR tools for the restaurant industry.'
    },
    pros: ['Specialized for restaurants', 'Easy-to-use scheduling', 'Integrated payroll'],
    cons: ['Limited features for non-hospitality', 'Mobile app needs more offline features'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 500, url: 'https://www.g2.com/products/7shifts/reviews' }
    ],
    description: 'A team management platform for the restaurant industry.'
  },
  {
    id: 'introhive',
    name: 'Introhive',
    solutions: ['Relationship Intelligence Platform', 'CRM Automation', 'Data Enrichment'],
    website: 'https://www.introhive.com/',
    linkedin: 'https://www.linkedin.com/company/introhive/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.AI],
    industries: [Industry.PROFESSIONAL_SERVICES, Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US, UK',
      providers: ['AWS', 'Azure'],
      details: 'Introhive is a cloud-based relationship intelligence platform that integrates with existing CRMs to automate data entry and provide insights.'
    },
    pros: ['Automates CRM data entry', 'Unlocks hidden relationship insights', 'Strong integration with major CRMs'],
    cons: ['Requires existing CRM infrastructure', 'Best suited for professional services firms'],
    reviews: [],
    description: 'A leading relationship intelligence platform that helps organizations unlock the value of their relationships and drive revenue growth.'
  },
  {
    id: 'proposify',
    name: 'Proposify',
    solutions: ['Proposify Proposal Software'],
    website: 'https://www.proposify.com',
    linkedin: 'https://www.linkedin.com/company/proposify',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.MAR],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Proposify is hosted on AWS, providing a streamlined proposal management platform for sales teams.'
    },
    pros: ['Professional proposal templates', 'Strong sales automation', 'Great tracking features'],
    cons: ['Editor can be finicky', 'Limited design flexibility in some areas'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 900, url: 'https://www.g2.com/products/proposify/reviews' }
    ],
    description: 'A proposal software for modern sales teams.'
  },
  {
    id: 'unbounce',
    name: 'Unbounce',
    solutions: ['Unbounce Landing Pages', 'Smart Builder'],
    website: 'https://unbounce.com',
    linkedin: 'https://www.linkedin.com/company/unbounce',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Unbounce is built on AWS, providing high-performance landing pages and AI-powered conversion tools.'
    },
    pros: ['Landing page conversion', 'AI-powered smart builder', 'Great A/B testing'],
    cons: ['Pricing is on the higher side', 'Steep learning curve for advanced features'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 300, url: 'https://www.g2.com/products/unbounce/reviews' }
    ],
    description: 'A landing page platform for marketers and agencies.'
  },
  {
    id: 'copperleaf',
    name: 'Copperleaf',
    solutions: ['Copperleaf Portfolio', 'Copperleaf Asset'],
    website: 'https://www.copperleaf.com',
    linkedin: 'https://www.linkedin.com/company/copperleaf-technologies',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US, Europe, Australia',
      providers: ['Microsoft Azure'],
      details: 'Copperleaf utilizes Microsoft Azure for its decision analytics platform, serving global infrastructure companies.'
    },
    pros: ['Advanced decision analytics', 'Strong focus on infrastructure', 'Proven ROI for large assets'],
    cons: ['Highly specialized and complex', 'Long implementation cycles'],
    reviews: [
      { platform: 'Gartner', rating: 4.5, count: 20, url: 'https://www.gartner.com/reviews/market/it-financial-management-tools' }
    ],
    description: 'A provider of decision analytics for companies managing critical infrastructure.'
  },
  {
    id: 'blackberry',
    name: 'BlackBerry (Cybersecurity)',
    solutions: ['BlackBerry Cylance', 'BlackBerry UEM', 'BlackBerry QNX'],
    website: 'https://www.blackberry.com',
    linkedin: 'https://www.linkedin.com/company/blackberry',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Microsoft Azure', 'Private Cloud'],
      details: 'BlackBerry operates a global security infrastructure with high-security data centers and cloud redundancy for its Cylance AI platform.'
    },
    pros: ['Cybersecurity solutions', 'AI-powered threat detection', 'Strong government trust'],
    cons: ['Complex product portfolio', 'Transition from mobile to software still ongoing'],
    reviews: [
      { platform: 'Gartner', rating: 4.6, count: 500, url: 'https://www.gartner.com/reviews/market/endpoint-protection-platforms' }
    ],
    description: 'A provider of intelligent security software and services to enterprises and governments around the world.'
  },
  {
    id: 'venasolutions',
    name: 'Vena Solutions',
    solutions: ['Vena Complete Planning'],
    website: 'https://www.venasolutions.com',
    linkedin: 'https://www.linkedin.com/company/vena-solutions',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ERP],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['Microsoft Azure'],
      details: 'Vena is built on Microsoft Azure, providing a native Excel-based planning and analysis platform with enterprise-grade security.'
    },
    pros: ['Native Excel integration', 'Comprehensive financial planning', 'Strong security'],
    cons: ['Requires Excel knowledge', 'Implementation can be time-consuming'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 300, url: 'https://www.g2.com/products/vena/reviews' }
    ],
    description: 'The only native Excel Complete Planning platform that connects people, data, and systems.'
  },
  {
    id: 'bluejlegal',
    name: 'Blue J Legal',
    solutions: ['Blue J Tax', 'Blue J Labor'],
    website: 'https://www.bluej.com',
    linkedin: 'https://www.linkedin.com/company/blue-j-legal',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LEGAL, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Blue J utilizes AWS for its legal prediction platform, using AI to analyze thousands of court cases.'
    },
    pros: ['AI-powered legal research', 'High accuracy in predictions', 'Saves significant research time'],
    cons: ['Limited to specific legal areas', 'Requires legal expertise to interpret'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 20, url: 'https://www.g2.com/products/blue-j/reviews' }
    ],
    description: 'AI-powered legal research and prediction software for tax and employment law.'
  },
  {
    id: 'benchaccounting',
    name: 'Bench Accounting',
    solutions: ['Bench Bookkeeping', 'Bench Tax'],
    website: 'https://bench.co',
    linkedin: 'https://www.linkedin.com/company/bench-accounting',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Bench utilizes AWS to provide its online bookkeeping services, combining software with professional bookkeepers.'
    },
    pros: ['Online bookkeeping service', 'Combines software with professional bookkeepers', 'Financial peace of mind for SMBs'],
    cons: ['Limited to North American market', 'Not a full accounting software for complex needs'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 77, url: 'https://www.g2.com/products/bench/reviews' },
      { platform: 'Trustpilot', rating: 3.8, count: 1277, url: 'https://www.trustpilot.com/review/bench.co' }
    ],
    description: 'An online bookkeeping service for small businesses.'
  },
  {
    id: 'workleap',
    name: 'Workleap (formerly GSoft)',
    solutions: ['Officevibe', 'ShareGate'],
    website: 'https://workleap.com',
    linkedin: 'https://www.linkedin.com/company/workleap',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['Microsoft Azure'],
      details: 'Workleap products like Officevibe and ShareGate are primarily hosted on Microsoft Azure, ensuring global compliance.'
    },
    pros: ['Employee experience tools', 'Strong focus on engagement', 'Easy to use and implement'],
    cons: ['Limited customization in some areas', 'Pricing can be high for large teams'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 500, url: 'https://www.g2.com/products/officevibe/reviews' }
    ],
    description: 'An ecosystem of employee experience tools that help organizations thrive in the new world of work.'
  },
  {
    id: 'paper',
    name: 'Paper',
    solutions: ['Paper Tutoring Platform'],
    website: 'https://paper.co',
    linkedin: 'https://www.linkedin.com/company/paperlearning',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Paper uses AWS to host its 24/7 tutoring platform, serving millions of students across North America.'
    },
    pros: ['24/7 access to tutoring', 'Scalable for large school districts', 'Improves student outcomes'],
    cons: ['Requires district-wide adoption', 'Tutoring quality can vary slightly'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 100, url: 'https://www.g2.com/products/paper/reviews' }
    ],
    description: 'An Educational Support System (ESS) that provides students with 24/7 access to high-quality tutoring.'
  },
  {
    id: 'mindbridge',
    name: 'MindBridge',
    solutions: ['MindBridge Ai Auditor'],
    website: 'https://www.mindbridge.ai',
    linkedin: 'https://www.linkedin.com/company/mindbridge-ai',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS', 'Microsoft Azure'],
      details: 'MindBridge utilizes major cloud providers for its AI-powered financial risk discovery platform.'
    },
    pros: ['AI-powered financial risk discovery', 'Restores trust in financial data', 'Strong audit focus'],
    cons: ['Requires significant financial data', 'Complex for small audit firms'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 40, url: 'https://www.g2.com/products/mindbridge/reviews' }
    ],
    description: 'An AI-powered financial risk discovery platform for audit and finance professionals.'
  },
  {
    id: 'rossvideo',
    name: 'Ross Video',
    solutions: ['XPression', 'OverDrive', 'Inception'],
    website: 'https://www.rossvideo.com',
    linkedin: 'https://www.linkedin.com/company/ross-video',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.MAR],
    dataStorage: {
      location: 'Global',
      providers: ['Private Cloud', 'AWS'],
      details: 'Ross Video provides a mix of on-premise and cloud-based solutions for the global broadcast industry.'
    },
    pros: ['Live broadcast technology provider', 'High-impact video production', 'Reliable hardware and software'],
    cons: ['High cost for professional gear', 'Steep learning curve for operators'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 50, url: 'https://www.g2.com/products/ross-video/reviews' }
    ],
    description: 'A provider of video production technology, providing hardware and software for live broadcast.'
  },
  {
    id: 'solace',
    name: 'Solace',
    solutions: ['PubSub+ Event Broker'],
    website: 'https://solace.com',
    linkedin: 'https://www.linkedin.com/company/solace',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Microsoft Azure', 'GCP'],
      details: 'Solace PubSub+ is a multi-cloud event streaming platform that can be deployed anywhere.'
    },
    pros: ['Event-driven architecture provider', 'Multi-cloud event streaming', 'High performance and reliability'],
    cons: ['Complex to implement at scale', 'Requires specialized EDA knowledge'],
    reviews: [
      { platform: 'Gartner', rating: 4.7, count: 100, url: 'https://www.gartner.com/reviews/market/event-stream-processing' }
    ],
    description: 'A provider of event-driven architecture (EDA) for the modern enterprise.'
  },
  {
    id: 'fullscript',
    name: 'Fullscript',
    solutions: ['Fullscript Platform'],
    website: 'https://fullscript.com',
    linkedin: 'https://www.linkedin.com/company/fullscript',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.ECOM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Fullscript uses AWS to host its healthcare platform, providing secure supplement dispensing and patient management.'
    },
    pros: ['Healthcare supplement platform', 'Secure patient management', 'Streamlined dispensing'],
    cons: ['Limited to professional-grade supplements', 'Patient interface can be improved'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.4, count: 5000, url: 'https://www.trustpilot.com/review/fullscript.com' }
    ],
    description: 'A healthcare platform that helps practitioners dispense professional-grade supplements.'
  },
  {
    id: 'klipfolio',
    name: 'Klipfolio',
    solutions: ['Klipfolio Klips', 'Klipfolio PowerMetrics'],
    website: 'https://www.klipfolio.com',
    linkedin: 'https://www.linkedin.com/company/klipfolio',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.MAR],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Klipfolio is a cloud-native dashboard and analytics platform hosted on AWS.'
    },
    pros: ['Cloud-native dashboarding', 'Easy to use for SMBs', 'Great data visualization'],
    cons: ['Limited advanced data modeling', 'Pricing can increase with data volume'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 250, url: 'https://www.g2.com/products/klipfolio/reviews' }
    ],
    description: 'A cloud-based dashboard and business intelligence platform for small and medium-sized businesses.'
  },
  {
    id: 'elasticpath',
    name: 'Elastic Path',
    solutions: ['Elastic Path Commerce Cloud'],
    website: 'https://www.elasticpath.com',
    linkedin: 'https://www.linkedin.com/company/elastic-path-software',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ECOM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Elastic Path provides headless commerce solutions hosted on AWS for enterprise retailers.'
    },
    pros: ['Headless commerce provider', 'Composable commerce architecture', 'Great for unique experiences'],
    cons: ['Requires significant development effort', 'Not a "plug-and-play" solution'],
    reviews: [
      { platform: 'Gartner', rating: 4.3, count: 50, url: 'https://www.gartner.com/reviews/market/digital-commerce' }
    ],
    description: 'The creator of the first headless commerce platform, helping brands build unique digital experiences.'
  },
  {
    id: 'sonar',
    name: 'Sonar',
    solutions: ['Sonar Platform'],
    website: 'https://sonar.software',
    linkedin: 'https://www.linkedin.com/company/sonar-software',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.ERP],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Sonar provides a modern BSS/OSS platform for internet service providers, hosted on AWS.'
    },
    pros: ['Modern BSS/OSS for ISPs', 'Cloud-based billing', 'Streamlined operations'],
    cons: ['Highly specialized for ISPs', 'Migration from legacy systems is complex'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 30, url: 'https://www.g2.com/products/sonar/reviews' }
    ],
    description: 'A cloud-based billing and operations platform for internet service providers.'
  },
  {
    id: 'dashhudson',
    name: 'Dash Hudson',
    solutions: ['Dash Hudson Platform'],
    website: 'https://www.dashhudson.com',
    linkedin: 'https://www.linkedin.com/company/dash-hudson',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Dash Hudson utilizes AWS to process and analyze massive amounts of social media visual data for global brands.'
    },
    pros: ['Visual marketing prediction', 'Strong social media focus', 'Great for global brands'],
    cons: ['Focused primarily on visual content', 'Can be expensive for smaller teams'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 200, url: 'https://www.g2.com/products/dash-hudson/reviews' }
    ],
    description: 'A visual marketing platform that helps brands predict the performance of their social media content.'
  },
  {
    id: 'flinks',
    name: 'Flinks',
    solutions: ['Flinks Connect', 'Flinks Enrich'],
    website: 'https://flinks.com',
    linkedin: 'https://www.linkedin.com/company/flinks',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Flinks (majority-owned by National Bank) provides open banking solutions with strict Canadian financial security standards.'
    },
    pros: ['Open banking provider', 'Secure financial data connectivity', 'Powers many fintech apps'],
    cons: ['Limited to Canadian financial institutions', 'API integration requires technical expertise'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 20, url: 'https://www.g2.com/products/flinks/reviews' }
    ],
    description: 'A financial data aggregator in Canada, powering the next generation of fintech.'
  },
  {
    id: 'moka',
    name: 'Moka (formerly Mylo)',
    solutions: ['Moka App'],
    website: 'https://moka.ai',
    linkedin: 'https://www.linkedin.com/company/moka-ai',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Moka (now part of Mogo) uses AWS for its micro-investing platform, with a focus on Canadian data residency.'
    },
    pros: ['Easy micro-investing', 'Helps Canadians save more', 'User-friendly mobile app'],
    cons: ['Limited investment options', 'Monthly fee for small balances'],
    reviews: [
      { platform: 'App Store', rating: 4.6, count: 15000, url: 'https://apps.apple.com/ca/app/moka-save-invest-more/id1141753447' }
    ],
    description: 'A micro-investing app that helps Canadians achieve their financial goals.'
  },
  {
    id: 'poka',
    name: 'Poka',
    solutions: ['Poka Platform'],
    website: 'https://www.poka.io',
    linkedin: 'https://www.linkedin.com/company/poka-io',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.HR],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Poka (now part of IFS) is hosted on AWS, providing a connected worker platform for global manufacturers.'
    },
    pros: ['Connected worker platform for manufacturing', 'Improves frontline productivity', 'Great for training and knowledge'],
    cons: ['Requires adoption by floor workers', 'Setup for large plants is complex'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 50, url: 'https://www.g2.com/products/poka/reviews' }
    ],
    description: 'A connected worker platform for manufacturing.'
  },
  {
    id: 'appdirect',
    name: 'AppDirect',
    solutions: ['AppDirect Marketplace', 'AppDirect Billing'],
    website: 'https://www.appdirect.com',
    linkedin: 'https://www.linkedin.com/company/appdirect',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.ECOM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'GCP'],
      details: 'AppDirect operates a global subscription commerce platform hosted on major cloud providers.'
    },
    pros: ['Subscription commerce platform', 'Global marketplace capabilities', 'Strong billing engine'],
    cons: ['Complex for simple product sales', 'Requires significant integration effort'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 100, url: 'https://www.g2.com/products/appdirect/reviews' }
    ],
    description: 'A subscription commerce platform for selling and managing digital services.'
  },
  {
    id: 'wattpad',
    name: 'Wattpad',
    solutions: ['Wattpad App', 'Wattpad Books', 'Wattpad Studios'],
    website: 'https://www.wattpad.com',
    linkedin: 'https://www.linkedin.com/company/wattpad',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.MAR],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Wattpad (now part of Naver) uses AWS to host its global storytelling platform, serving nearly 100 million users.'
    },
    pros: ['Social storytelling platform', 'Massive global user base', 'Great for aspiring writers'],
    cons: ['Content quality varies widely', 'Monetization for writers can be difficult'],
    reviews: [
      { platform: 'App Store', rating: 4.8, count: 1000000, url: 'https://apps.apple.com/ca/app/wattpad-read-write-stories/id306310789' }
    ],
    description: 'A social storytelling platform.'
  },
  {
    id: 'kobo',
    name: 'Rakuten Kobo',
    solutions: ['Kobo eReader', 'Kobo App', 'Kobo Writing Life'],
    website: 'https://www.kobo.com',
    linkedin: 'https://www.linkedin.com/company/kobo-inc-',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.ITS],
    dataStorage: {
      location: 'Global',
      providers: ['Microsoft Azure', 'Private Cloud'],
      details: 'Kobo (part of Rakuten) operates a global e-reading platform with data centers distributed to support international users.'
    },
    pros: ['E-reading provider', 'Great hardware and software', 'Extensive eBook library'],
    cons: ['Ecosystem less dominant than Amazon', 'App interface can be improved'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.2, count: 5000, url: 'https://www.trustpilot.com/review/www.kobo.com' }
    ],
    description: 'A provider of eReading solutions, offering eBooks and eReaders.'
  },
  {
    id: 'league',
    name: 'League',
    solutions: ['League Health OS'],
    website: 'https://league.com',
    linkedin: 'https://www.linkedin.com/company/league-inc-',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, US',
      providers: ['GCP'],
      details: 'League utilizes Google Cloud Platform for its healthcare operating system, ensuring high security and interoperability.'
    },
    pros: ['Personalized digital health experiences', 'Personalized health OS', 'Strong security and interoperability'],
    cons: ['Requires employer adoption', 'Integration with legacy health systems'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 50, url: 'https://www.g2.com/products/league/reviews' }
    ],
    description: 'A platform-as-a-service that enables healthcare organizations to deliver personalized digital health experiences.'
  },
  {
    id: 'ecobee',
    name: 'ecobee',
    solutions: ['ecobee Smart Thermostat', 'ecobee Smart Security'],
    website: 'https://www.ecobee.com',
    linkedin: 'https://www.linkedin.com/company/ecobee',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'ecobee (part of Generac) uses AWS for its smart home platform, managing millions of connected devices.'
    },
    pros: ['Smart home technology provider', 'Energy-efficient solutions', 'Strong security features'],
    cons: ['Higher upfront cost for hardware', 'Requires stable Wi-Fi for all features'],
    reviews: [
      { platform: 'App Store', rating: 4.7, count: 100000, url: 'https://apps.apple.com/ca/app/ecobee/id568553348' }
    ],
    description: 'A provider of smart home technology, including energy-efficient solutions for home comfort and security.'
  },
  {
    id: 'borrowell',
    name: 'Borrowell',
    solutions: ['Borrowell Free Credit Score', 'Borrowell Credit Builder'],
    website: 'https://borrowell.com',
    linkedin: 'https://www.linkedin.com/company/borrowell',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Borrowell uses AWS for its financial platform, with a strict focus on Canadian data residency and security.'
    },
    pros: ['Free credit scores for Canadians', 'Personalized financial recommendations', 'Easy-to-use platform'],
    cons: ['Frequent marketing emails', 'Credit scores may vary from other sources'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.5, count: 2000, url: 'https://www.trustpilot.com/review/borrowell.com' }
    ],
    description: 'A Canadian fintech company that provides credit scores and financial recommendations.'
  },
  {
    id: 'koho',
    name: 'KOHO',
    solutions: ['KOHO App', 'KOHO Credit Building'],
    website: 'https://www.koho.ca',
    linkedin: 'https://www.linkedin.com/company/koho-financial',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'KOHO utilizes AWS for its modern banking platform, ensuring secure and fast financial transactions for Canadians.'
    },
    pros: ['No hidden fees', 'Instant cash back on spending', 'Strong credit building tools'],
    cons: ['Limited physical branch access', 'Not a full traditional bank'],
    reviews: [
      { platform: 'App Store', rating: 4.8, count: 80000, url: 'https://apps.apple.com/ca/app/koho-modern-banking/id1076214150' }
    ],
    description: 'A full-service spending and savings account with no hidden fees and instant cash back.'
  },
  {
    id: 'neofinancial',
    name: 'Neo Financial',
    solutions: ['Neo Card', 'Neo Money', 'Neo Invest'],
    website: 'https://www.neofinancial.com',
    linkedin: 'https://www.linkedin.com/company/neo-financial',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Neo Financial is built on AWS, providing a modern financial platform with a focus on Canadian data residency.'
    },
    pros: ['Modern banking experience', 'High-interest savings options', 'Great rewards program'],
    cons: ['Relatively new player', 'Limited physical presence'],
    reviews: [
      { platform: 'App Store', rating: 4.7, count: 40000, url: 'https://apps.apple.com/ca/app/neo-financial/id1491741549' }
    ],
    description: 'A technology company that is building a better financial experience for all Canadians.'
  },
  {
    id: 'symend',
    name: 'Symend',
    solutions: ['Symend Engagement Platform'],
    website: 'https://symend.com',
    linkedin: 'https://www.linkedin.com/company/symend',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['Microsoft Azure'],
      details: 'Symend utilizes Microsoft Azure for its behavioral science-based engagement platform, serving global enterprise clients.'
    },
    pros: ['Behavioral science-based engagement', 'Improves recovery rates', 'AI-powered personalization'],
    cons: ['Highly specialized for debt recovery', 'Requires integration with billing systems'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 20, url: 'https://www.g2.com/products/symend/reviews' }
    ],
    description: 'A platform that uses behavioral science and AI to help enterprises engage with customers who are falling behind on payments.'
  },
  {
    id: 'absorbsoftware',
    name: 'Absorb Software',
    solutions: ['Absorb LMS', 'Absorb Infuse'],
    website: 'https://www.absorblms.com',
    linkedin: 'https://www.linkedin.com/company/absorb-software',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Absorb LMS is a cloud-based learning management system hosted on AWS with global data residency options.'
    },
    pros: ['LMS provider', 'Highly customizable', 'Strong focus on learner engagement'],
    cons: ['Can be complex for small teams', 'Premium pricing for full features'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 300, url: 'https://www.g2.com/products/absorb-lms/reviews' }
    ],
    description: 'A learning management system (LMS) that helps organizations deliver training to employees and customers.'
  },
  {
    id: 'shareworks',
    name: 'Morgan Stanley at Work (Shareworks)',
    solutions: ['Shareworks Platform'],
    website: 'https://www.shareworks.com',
    linkedin: 'https://www.linkedin.com/company/morgan-stanley-at-work',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.HR],
    dataStorage: {
      location: 'Global',
      providers: ['Private Cloud', 'Microsoft Azure'],
      details: 'Shareworks (formerly Solium) operates a global equity management platform with strict financial security standards.'
    },
    pros: ['Equity management platform', 'Global compliance support', 'Strong financial security'],
    cons: ['Complex for very small startups', 'Requires significant administrative setup'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 100, url: 'https://www.g2.com/products/shareworks/reviews' }
    ],
    description: 'A platform for equity compensation management, helping companies manage their global stock plans.'
  },
  {
    id: 'nanoleaf',
    name: 'Nanoleaf',
    solutions: ['Nanoleaf App', 'Nanoleaf Desktop'],
    website: 'https://nanoleaf.me',
    linkedin: 'https://www.linkedin.com/company/nanoleaf',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Nanoleaf uses AWS to power its smart lighting ecosystem, providing seamless control and synchronization for millions of panels.'
    },
    pros: ['Innovative modular lighting', 'Strong software control', 'Great for creative spaces'],
    cons: ['Expensive compared to standard smart bulbs', 'Setup can be tricky for complex patterns'],
    reviews: [
      { platform: 'App Store', rating: 4.6, count: 20000, url: 'https://apps.apple.com/ca/app/nanoleaf-smarter-series/id1041753447' }
    ],
    description: 'A provider of smart home lighting, known for its modular LED light panels and software control.'
  },
  {
    id: 'clearco',
    name: 'Clearco',
    solutions: ['Clearco Capital', 'Clearco Insights'],
    website: 'https://clear.co',
    linkedin: 'https://www.linkedin.com/company/clearco',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['GCP'],
      details: 'Clearco utilizes Google Cloud Platform for its data-driven funding platform, analyzing e-commerce performance to provide capital.'
    },
    pros: ['Equity-free capital for e-commerce', 'Data-driven funding decisions', 'Fast approval process'],
    cons: ['Fees can be higher than traditional loans', 'Requires sharing detailed store data'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.4, count: 500, url: 'https://www.trustpilot.com/review/clear.co' }
    ],
    description: 'A fintech company that provides equity-free capital to e-commerce businesses based on their data.'
  },
  {
    id: 'showpass',
    name: 'Showpass',
    solutions: ['Showpass Ticketing', 'Showpass Organizer'],
    website: 'https://www.showpass.com',
    linkedin: 'https://www.linkedin.com/company/showpass',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Showpass is hosted on AWS, providing a robust ticketing and event management platform with a focus on the Canadian market.'
    },
    pros: ['Robust ticketing for events', 'Strong focus on Canadian market', 'Great organizer tools'],
    cons: ['Fees for ticket buyers', 'Limited international reach compared to giants'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 50, url: 'https://www.g2.com/products/showpass/reviews' }
    ],
    description: 'A ticketing and event management platform that helps organizers sell more tickets and provide better experiences.'
  },
  {
    id: 'stellaralgo',
    name: 'StellarAlgo',
    solutions: ['StellarAlgo Platform'],
    website: 'https://stellaralgo.com',
    linkedin: 'https://www.linkedin.com/company/stellaralgo',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.MAR],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'StellarAlgo utilizes AWS for its fan engagement platform, analyzing data for major professional sports teams and leagues.'
    },
    pros: ['Advanced fan engagement analytics', 'Strong sports industry focus', 'Actionable audience insights'],
    cons: ['Highly specialized for live audiences', 'Requires significant data integration'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 20, url: 'https://www.g2.com/products/stellaralgo/reviews' }
    ],
    description: 'A data analytics platform that helps sports and entertainment organizations understand and engage their fans.'
  },
  {
    id: 'janeapp',
    name: 'Jane App',
    solutions: ['Jane Online Booking', 'Jane Charting'],
    website: 'https://jane.app',
    linkedin: 'https://www.linkedin.com/company/jane-app',
    headquarters: {
      city: 'North Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    dataStorage: {
      location: 'Canada, US, UK, Australia',
      providers: ['AWS'],
      details: 'Jane App offers regional data residency in multiple countries, utilizing AWS with strict healthcare privacy standards.'
    },
    pros: ['All-in-one practice management', 'Comprehensive charting and booking', 'Strong healthcare privacy'],
    cons: ['Can be expensive for multi-practitioner clinics', 'Steep learning curve for all features'],
    reviews: [
      { platform: 'Capterra', rating: 4.8, count: 1000, url: 'https://www.capterra.com/p/135114/Jane/' }
    ],
    description: 'An all-in-one practice management platform for health and wellness practitioners.'
  },
  {
    id: 'clir',
    name: 'Clir Renewables',
    solutions: ['Clir Portfolio', 'Clir M&A'],
    website: 'https://clir.eco',
    linkedin: 'https://www.linkedin.com/company/clir-renewables',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Clir utilizes AWS for its renewable energy analytics platform, optimizing performance for wind and solar farms globally.'
    },
    pros: ['Renewable energy analytics', 'Optimizes asset performance', 'Accelerates energy transition'],
    cons: ['Highly specialized for wind and solar', 'Requires technical expertise to interpret'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.8, count: 50, url: 'https://www.linkedin.com/company/clir-renewables' }
    ],
    description: 'A cloud-based AI platform for renewable energy asset optimization.'
  },
  {
    id: 'builddirect',
    name: 'BuildDirect',
    solutions: ['BuildDirect Marketplace'],
    website: 'https://www.builddirect.com',
    linkedin: 'https://www.linkedin.com/company/builddirect',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.LOG],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'BuildDirect uses AWS to host its heavyweight e-commerce platform, managing complex logistics for home improvement products.'
    },
    pros: ['Direct connection to suppliers', 'Innovative marketplace for heavy goods', 'Simplifies home improvement'],
    cons: ['Shipping heavy goods is inherently complex', 'Customer service can be challenged by logistics'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.1, count: 1000, url: 'https://www.trustpilot.com/review/www.builddirect.com' }
    ],
    description: 'An innovative marketplace for home improvement products, connecting homeowners with suppliers directly.'
  },
  {
    id: 'bevaai',
    name: 'Beva AI',
    solutions: ['Voice AI', 'Chat AI', 'AI Automation'],
    website: 'https://bevaai.app',
    linkedin: 'https://www.linkedin.com/company/beva-ai',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.CRM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Beva AI utilizes cloud infrastructure to power its real-time voice and chat automation services.'
    },
    pros: ['24/7 lead capture', 'Instant response times', 'Automates repetitive tasks'],
    cons: ['AI may require tuning for specific industries', 'Dependency on internet connectivity'],
    reviews: [],
    description: 'A provider of AI-driven voice and chat assistants for business automation and lead management.'
  },
  {
    id: 'bluedrop',
    name: 'Bluedrop',
    solutions: ['Skills Management', 'Training & Simulation'],
    website: 'https://bluedrop.com',
    linkedin: 'https://www.linkedin.com/company/bluedrop-performance-learning',
    headquarters: {
      city: 'St. John\'s',
      province: Province.NL
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud', 'AWS'],
      details: 'Bluedrop provides secure training and skills management platforms with data residency options in Canada.'
    },
    pros: ['Enterprise-grade training solutions', 'Strong focus on mission-critical skills', 'Scalable learning management'],
    cons: ['Complex implementation for large organizations', 'Requires significant content development'],
    reviews: [],
    description: 'A provider of skills management and mission-critical training solutions for government and enterprise.'
  },
  {
    id: 'bookedby',
    name: 'BookedBy',
    solutions: ['Appointment Scheduling', 'CRM', 'Marketing'],
    website: 'https://www.bookedby.com',
    linkedin: 'https://www.linkedin.com/company/bookedby',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.MAR],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'BookedBy utilizes AWS to host its business management platform for service-based businesses.'
    },
    pros: ['Specialized for salons and spas', 'Integrated marketing tools', 'User-friendly scheduling'],
    cons: ['Focused on specific service niches', 'May require hardware integration for POS'],
    reviews: [],
    description: 'A business management platform for salons, spas, and service-based businesses.'
  },
  {
    id: 'cartenav',
    name: 'CarteNav',
    solutions: ['AIMS-ISR', 'AIMS-MissionLink'],
    website: 'https://cartenav.com',
    linkedin: 'https://www.linkedin.com/company/cartenav-solutions-inc-',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, Global',
      providers: ['Private Cloud'],
      details: 'CarteNav provides mission-critical software often deployed on secure, isolated networks for ISR operations.'
    },
    pros: ['Highly adaptable mission software', 'Global deployment experience', 'Strong sensor integration'],
    cons: ['Highly specialized for defense and security', 'Requires specialized training'],
    reviews: [],
    description: 'A provider of ISR mission software for airborne, maritime, and land platforms.'
  },
  {
    id: 'dadavan',
    name: 'Dadavan',
    solutions: ['Outcomes SIS', 'ORSM', 'PSE+', 'Codex', 'MemberDB'],
    website: 'https://dadavan.com',
    linkedin: 'https://www.linkedin.com/company/dadavan-systems',
    headquarters: {
      city: 'Waverley',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.HR],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Dadavan focuses on secure data management with a strong emphasis on Indigenous data sovereignty and residency in Canada.'
    },
    pros: ['Focused on Indigenous data needs', 'Supports data sovereignty', 'Comprehensive suite of tools'],
    cons: ['Niche market focus', 'May require custom configuration for different communities'],
    reviews: [],
    description: 'A provider of data management software for Indigenous communities and organizations.'
  },
  {
    id: 'foodweb',
    name: 'FoodWeb',
    solutions: ['Commercial Kitchen Rental Platform'],
    website: 'https://foodweb.network',
    linkedin: 'https://www.linkedin.com/company/foodweb-network',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.LOG],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'FoodWeb utilizes cloud infrastructure to connect food entrepreneurs with licensed commercial kitchen spaces.'
    },
    pros: ['Simplifies kitchen rentals', 'Supports food entrepreneurs', 'Transparent reviews'],
    cons: ['Limited to specific regions', 'Requires insurance for renters'],
    reviews: [],
    description: 'A platform connecting food entrepreneurs with commercial kitchen spaces for their business.'
  },
  {
    id: 'giaai',
    name: 'Gia AI',
    solutions: ['AI Growth Team', 'Pipeline Management'],
    website: 'https://www.getgia.ai',
    linkedin: 'https://www.linkedin.com/company/getgia',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.CRM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Gia AI leverages artificial intelligence to help agencies and consultants manage their sales pipelines.'
    },
    pros: ['Automates pipeline management', 'Built for agencies', 'Reduces administrative busywork'],
    cons: ['Requires consistent data input', 'AI insights depend on network activity'],
    reviews: [],
    description: 'An AI growth partner for professional service firms and agencies to manage pipelines and client relationships.'
  },
  {
    id: 'homeandhealth',
    name: 'Home + Health',
    solutions: ['Home Healthcare App'],
    website: 'https://homeandhealth.ca',
    linkedin: 'https://www.linkedin.com/company/homeandhealth',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.HR],
    dataStorage: {
      location: 'Canada',
      providers: ['Microsoft Azure'],
      details: 'Home + Health ensures health data residency in Canada, utilizing secure cloud infrastructure for its caregiving platform.'
    },
    pros: ['Vetted caregivers', 'Easy family coordination', 'Strong focus on senior care'],
    cons: ['Service availability varies by region', 'Requires digital literacy for families'],
    reviews: [],
    description: 'A home healthcare platform connecting seniors and families with vetted caregivers and home support services.'
  },
  {
    id: 'innerlogic',
    name: 'InnerLogic',
    solutions: ['AI Engagement Analytics'],
    website: 'https://www.innerlogic.com',
    linkedin: 'https://www.linkedin.com/company/innerlogic-ai',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.HR],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'InnerLogic uses AI to analyze workforce surveys and provide predictive insights into organizational culture.'
    },
    pros: ['Predictive culture insights', 'Automated reporting', 'Scalable engagement tools'],
    cons: ['Depends on employee participation', 'Requires organizational buy-in for action plans'],
    reviews: [],
    description: 'An AI-powered engagement analytics platform for measuring and improving organizational culture.'
  },
  {
    id: 'intellectzai',
    name: 'Intellectz AI',
    solutions: ['Real-Time Vision AI', 'IoT & Robotics', 'SIEM Platform'],
    website: 'https://intellectzai.com',
    linkedin: 'https://www.linkedin.com/company/intellectz-ai',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.SEC],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud', 'AWS'],
      details: 'Intellectz AI provides secure IoT and vision AI solutions with a focus on Canadian SME cybersecurity.'
    },
    pros: ['Advanced vision AI', 'Custom IoT solutions', 'Strong cybersecurity focus'],
    cons: ['Requires hardware integration', 'Complex setup for small businesses'],
    reviews: [],
    description: 'A provider of vision AI, IoT, and cybersecurity solutions for small and medium-sized enterprises.'
  },
  {
    id: 'kindredai',
    name: 'Kindred AI',
    solutions: ['EQ Assessment', 'EQ Tracking', 'AI-driven EQ Growth'],
    website: 'https://www.kindredai.co',
    linkedin: 'https://www.linkedin.com/company/kindred-ai-eq',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.HR],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Kindred AI uses machine intelligence to help employees grow emotional intelligence, integrating with existing workplace platforms.'
    },
    pros: ['Improves workplace EQ', 'Seamless integration with Slack/Zoom', 'AI-driven personalized growth'],
    cons: ['Requires active employee engagement', 'EQ metrics can be subjective'],
    reviews: [],
    description: 'An AI-driven platform for measuring and improving emotional intelligence in the workplace.'
  },
  {
    id: 'kognitionsoft',
    name: 'Kognitionsoft',
    solutions: ['Kognita', 'VulnValidator'],
    website: 'https://www.kognitionsoft.com',
    linkedin: 'https://www.linkedin.com/company/kognitionsoft-ltd',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Kognitionsoft provides cloud-based GRC and application security tools for vulnerability validation and compliance.'
    },
    pros: ['Streamlined GRC dashboard', 'Automated vulnerability validation', 'Aligned with ISO/SOC 2 standards'],
    cons: ['Highly technical product suite', 'Requires integration with security scanning tools'],
    reviews: [],
    description: 'A provider of GRC and application security tools for vulnerability validation and compliance management.'
  },
  {
    id: 'maplewave',
    name: 'Maplewave',
    solutions: ['Point of Sale', 'Indirect Channel Management', 'E-Commerce', 'Self-Care'],
    website: 'https://www.maplewave.com',
    linkedin: 'https://www.linkedin.com/company/maplewave',
    headquarters: {
      city: 'Dartmouth',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.FIN],
    dataStorage: {
      location: 'Canada, Global',
      providers: ['Private Cloud', 'AWS'],
      details: 'Maplewave provides an integrated commerce platform for telcos, managing transactions and inventory across channels.'
    },
    pros: ['Specialized for telecommunications', 'Modular commerce architecture', 'Strong indirect channel support'],
    cons: ['Highly industry-specific', 'Complex implementation for legacy telcos'],
    reviews: [],
    description: 'An integrated modular commerce platform for the telecommunications industry.'
  },
  {
    id: 'palladium',
    name: 'Palladium',
    solutions: ['AIDA-Agro', 'AIDA-Construct', 'AIDA-Secure', 'AIDA-Demine'],
    website: 'https://www.palladium-mc.com',
    linkedin: 'https://www.linkedin.com/company/palladium-mc',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.SEC],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Palladium integrates AI, IoT, and drone technology to optimize resources in agriculture, construction, and security.'
    },
    pros: ['Innovative use of drones and AI', 'Optimizes resource allocation', 'Strong focus on sustainability'],
    cons: ['Requires specialized hardware (drones/IoT)', 'High technical barrier for entry'],
    reviews: [],
    description: 'A provider of AI and IoT solutions for agriculture, construction, and security optimization.'
  },
  {
    id: 'quickfacts',
    name: 'QuickFacts',
    solutions: ['Underwriting Comparison Software'],
    website: 'https://www.quickfactsinc.com',
    linkedin: 'https://www.linkedin.com/company/quickfacts-inc',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'QuickFacts provides a cloud-based platform for insurance brokers to compare carrier underwriting and workflows.'
    },
    pros: ['Saves time for brokers', 'Streamlines underwriting comparisons', 'Built by industry experts'],
    cons: ['Limited to insurance brokerage niche', 'Requires carrier data updates'],
    reviews: [],
    description: 'An insurance software platform for brokers to compare underwriting and streamline workflows.'
  },
  {
    id: 'rocketbid',
    name: 'RocketBid',
    solutions: ['White-Label Auction Software'],
    website: 'https://rocketbid.io',
    linkedin: 'https://www.linkedin.com/company/rocketbid',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.AI],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'RocketBid provides a white-label auction platform with real-time bidding and AI-driven engagement tools.'
    },
    pros: ['Fast real-time bidding', 'Clean white-label design', 'AI-powered auction tools'],
    cons: ['Requires brand customization effort', 'Niche focus on auction businesses'],
    reviews: [],
    description: 'A white-label auction platform for live, simulcast, and online auctions with AI-driven tools.'
  },
  {
    id: 'solutioninc',
    name: 'SolutionInc',
    solutions: ['Internet Access Gateway', 'Managed Wi-Fi'],
    website: 'https://solutioninc.com',
    linkedin: 'https://www.linkedin.com/company/solutioninc',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, Global',
      providers: ['Private Cloud', 'AWS'],
      details: 'SolutionInc provides managed Wi-Fi and internet gateway solutions for public and private networks globally.'
    },
    pros: ['Decades of Wi-Fi expertise', 'Robust internet management', '24/7 technical support'],
    cons: ['Focused on networking infrastructure', 'May require hardware deployment'],
    reviews: [],
    description: 'A provider of Wi-Fi networking and internet management solutions for global industries.'
  },
  {
    id: 'syncrasys',
    name: 'Syncrasys',
    solutions: ['Threat Intelligence Platform'],
    website: 'https://syncrasys.ai',
    linkedin: 'https://www.linkedin.com/company/syncrasys',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Syncrasys provides an AI-driven threat intelligence platform to enhance infrastructure security and reduce alert fatigue.'
    },
    pros: ['AI-driven threat detection', 'Reduces alert fatigue', 'Enhances operational efficiency'],
    cons: ['Requires integration with security stacks', 'Highly technical security focus'],
    reviews: [],
    description: 'An AI-driven threat detection and intelligence platform for infrastructure security.'
  },
  {
    id: 'rumin8',
    name: 'Rumin8',
    solutions: ['Climate Tech Platform'],
    website: 'https://rumin8.com',
    linkedin: 'https://www.linkedin.com/company/rumin8',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.SCM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Rumin8 utilizes data analytics to optimize its climate-friendly feed supplement solutions.'
    },
    pros: ['Innovative climate technology', 'Reduces agricultural emissions', 'Data-driven optimization'],
    cons: ['Highly specialized niche', 'Regulatory hurdles in different regions'],
    reviews: [],
    description: 'A climate technology company using data analytics to develop sustainable agricultural solutions.'
  },
  {
    id: 'workinsights',
    name: 'WorkInsights',
    solutions: ['Organizational Diagnostic Tools', 'Analytics'],
    website: 'https://www.workinsights.tech',
    linkedin: 'https://www.linkedin.com/company/work-insights',
    headquarters: {
      city: 'St. Margaret\'s Bay',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.HR],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'WorkInsights provides diagnostic tools and analytics to measure employee experience and organizational performance.'
    },
    pros: ['Evidence-based decision making', 'Deep organizational insights', 'Focuses on workplace wellness'],
    cons: ['Requires employee participation', 'Insights depend on honest feedback'],
    reviews: [],
    description: 'A provider of diagnostic tools and analytics for measuring employee experience and organizational performance.'
  },
  {
    id: 'diversio',
    name: 'Diversio',
    solutions: ['Diversio Platform', 'DEI Analytics', 'Training Workshops', 'Strategic Consulting'],
    website: 'https://diversio.com',
    linkedin: 'https://www.linkedin.com/company/diversio-inc',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US, UK, Europe',
      providers: ['AWS'],
      details: 'Diversio uses AI-powered analytics to measure and improve workplace inclusion, with secure data handling and global compliance standards.'
    },
    pros: ['AI-powered DEI insights', 'Academically validated framework', 'Global benchmarks'],
    cons: ['Requires employee participation for data accuracy', 'Can be complex for small organizations'],
    reviews: [],
    description: 'A workplace DEI (Diversity, Equity, and Inclusion) platform that uses AI to measure, track, and improve employee experience.'
  },
  {
    id: 'esentire',
    name: 'eSentire',
    solutions: ['Managed Detection and Response (MDR)', 'Continuous Threat Exposure Management (CTEM)', 'Digital Forensics and Incident Response (DFIR)', 'Atlas AI Security Operations Platform'],
    website: 'https://www.esentire.com',
    linkedin: 'https://www.linkedin.com/company/esentire',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    dataStorage: {
      location: 'Global (Canada, US, Europe)',
      providers: ['AWS', 'Microsoft Azure'],
      details: 'eSentire operates a global security infrastructure with high-security data centers and cloud redundancy for its Atlas AI platform.'
    },
    pros: ['24/7 SOC-as-a-Service', 'AI-driven threat detection (Atlas AI)', 'Elite Threat Hunting', 'Rapid incident response'],
    cons: ['Can be expensive for small businesses', 'Complex implementation for multi-signal environments'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 282, url: 'https://www.g2.com/products/esentire-managed-detection-and-response-mdr/reviews' }
    ],
    description: 'The authority in Managed Detection and Response (MDR), protecting critical data and applications from known and unknown cyber threats with 24/7 threat hunting and AI-powered security operations.'
  },
  {
    id: 'gambitid',
    name: 'Gambit ID',
    solutions: ['Gambit ID Check™', 'Security Screening', 'Background Checks', 'RCMP-certified Fingerprinting'],
    website: 'https://www.gambitid.com',
    linkedin: 'https://www.linkedin.com/company/gambit-id/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.HR],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Gambit ID maintains high security standards with ISO 27001, 27017, 27018, and SOC 2 Type II certifications, ensuring secure identity management and background screening.'
    },
    pros: ['RCMP accredited', 'Fully automated adjudication', 'Real-time status tracking', 'ISO and SOC 2 certified'],
    cons: ['Highly specialized niche', 'Requires physical presence for fingerprinting in some cases'],
    reviews: [],
    description: 'A world leader in security screening and background checks, providing automated identity management solutions for governments and corporations.'
  },
  {
    id: 'hostalky',
    name: 'HosTalky',
    solutions: ['&CareID', 'AI Scribe', 'AI-powered Chat', 'Healthcare Communication Hub'],
    website: 'https://www.hostalky.com',
    linkedin: 'https://www.linkedin.com/company/hostalky',
    headquarters: {
      city: 'Mississauga',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.AI],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'HosTalky provides a secure and reliable platform designed specifically for healthcare teams, ensuring data privacy and compliance with healthcare standards.'
    },
    pros: ['Built exclusively for healthcare', 'AI Scribe for automated documentation', 'Intuitive and easy to use', 'Secure professional networking'],
    cons: ['Requires team-wide adoption for maximum effectiveness', 'Relatively new platform in the market'],
    reviews: [],
    description: 'An AI-powered communication and collaboration app built exclusively for healthcare professionals to streamline workflows and improve care quality.'
  },
  {
    id: 'isacybersecurity',
    name: 'ISA Cybersecurity',
    solutions: ['Assure 360', 'Govern 360', 'Detect 360', 'Respond 360', 'Protect 360'],
    website: 'https://isacybersecurity.com',
    linkedin: 'https://www.linkedin.com/company/isacybersecurity/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, UK',
      providers: ['Private Infrastructure'],
      details: 'ISA Cybersecurity operates with over 30 years of experience, providing 24/7/365 monitoring and protection through their global SOCs.'
    },
    pros: ['30+ years of cybersecurity focus', '24/7/365 global protection', 'Comprehensive Cyber 360 service suite'],
    cons: ['Enterprise-focused solutions', 'May be complex for smaller organizations'],
    reviews: [],
    description: 'A leading cybersecurity services provider offering a comprehensive suite of advisory and managed security services to protect organizations from evolving threats.'
  },
  {
    id: 'petalhealth',
    name: 'Petal Health',
    solutions: ['Petal Patient Hub', 'Petal Workforce', 'Petal Billing'],
    website: 'https://www.petal-health.com/en/',
    linkedin: 'https://www.linkedin.com/company/petalmd/',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.AI, SoftwareType.SCM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Petal is SOC 2 Type II certified and PIPEDA compliant, meeting the highest standards of healthcare data security across Canada.'
    },
    pros: ['SOC 2 Type II certified', 'PIPEDA compliant', 'Significant reduction in scheduling time', 'Seamless integration with EMR/EHR'],
    cons: ['Healthcare-specific focus limits general utility', 'Implementation may require coordination with various stakeholders'],
    reviews: [],
    description: 'A real-time healthcare orchestration platform that manages patient flow, workforce management, and revenue cycle management in one comprehensive system.'
  },
  {
    id: 'processfusion',
    name: 'Process Fusion',
    solutions: ['PF360', 'Cloud Print Management', 'Document Management', 'Digital Workflow Automation'],
    website: 'https://www.processfusion.com/',
    linkedin: 'https://www.linkedin.com/company/process-fusion/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI, SoftwareType.SEC],
    dataStorage: {
      location: 'Canada, UK, India',
      providers: ['Azure', 'AWS'],
      details: 'Process Fusion provides secure cloud-based management and document processing, ensuring compliance with enterprise-grade solutions.'
    },
    pros: ['End-to-end automation', 'AI-powered document processing', 'Secure cloud print management', 'Seamless integration'],
    cons: ['May require significant process assessment', 'Cloud-focused (might not suit all legacy on-prem needs)'],
    reviews: [],
    description: 'A managed services provider specializing in Secure Information Exchange (SIX) and Business Process Automation solutions, helping organizations turn complex workflows into seamless experiences.'
  },
  {
    id: 'cmc-microsystems',
    name: 'CMC Microsystems',
    solutions: ['CAD', 'FAB', 'LAB', 'Quantum Computing', 'Photonics Fabrication'],
    website: 'https://www.cmc.ca/',
    linkedin: 'https://www.linkedin.com/company/cmc-microsystems/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Infrastructure'],
      details: 'CMC lowers the cost and complexity of technology adoption by creating and sharing platform technologies including access to state-of-the-art design, manufacturing, and testing capabilities.'
    },
    pros: ['Accelerates research and innovation', 'Access to state-of-the-art design and manufacturing', 'International network of researchers'],
    cons: ['Highly specialized for advanced technologies', 'Primarily research and innovation focused'],
    reviews: [],
    description: 'A not-for-profit organization that accelerates research and innovation in advanced technologies including microelectronics, photonics, MEMS, IoT, AI, and quantum software and hardware.'
  },
  {
    id: 'explorance',
    name: 'Explorance',
    solutions: ['Explorance Blue', 'Explorance Metrics That Matter', 'Explorance MLY', 'Explorance Bluepulse'],
    website: 'https://www.explorance.com/',
    linkedin: 'https://www.linkedin.com/company/explorance/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, US, Global',
      providers: ['AWS', 'Azure'],
      details: 'Explorance maintains high security standards and accessibility, ensuring data safety and responsible AI integration.'
    },
    pros: ['Global leader in feedback analytics', 'Trusted by Fortune 100 companies', 'AI-powered insights', 'Comprehensive feedback solutions'],
    cons: ['Can be complex for small organizations', 'Requires significant data input for best results'],
    reviews: [],
    description: 'A global leader in feedback analytics solutions, empowering organizations with next-generation feedback analytics to drive purpose, impact, and growth.'
  },
  {
    id: 'nethris',
    name: 'Nethris',
    solutions: ['Payroll Services', 'HR Management', 'Time Management', 'Employee Benefits'],
    website: 'https://nethris.com/',
    linkedin: 'https://www.linkedin.com/company/nethris/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['CGI Data Centres'],
      details: 'Nethris is a CGI Payroll Services Centre Inc. company, ensuring secure and compliant payroll and HR data management within Canada.'
    },
    pros: ['All-in-one payroll and HR solution', 'Tailored for Canadian SMEs', 'High customer satisfaction', 'Secure and compliant'],
    cons: ['Primarily focused on the Canadian market', 'May lack some advanced enterprise HR features'],
    reviews: [],
    description: 'A leading provider of all-in-one payroll and employee management solutions for SMEs across Canada, easing the administrative load and saving time.'
  },
  {
    id: 'acomba',
    name: 'Acomba',
    solutions: ['Acomba Accounting', 'Acomba Inventory', 'Acomba Payroll', 'Acomba Invoicing'],
    website: 'https://www.acomba.com/en/',
    linkedin: 'https://www.linkedin.com/showcase/acombacom/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ERP],
    dataStorage: {
      location: 'Canada',
      providers: ['ACCEO Solutions Infrastructure'],
      details: 'Acomba is a product of ACCEO Solutions, providing secure and reliable accounting and management software for the Canadian market.'
    },
    pros: ['Intuitive and performing software', 'Trusted by over 40,000 SMBs', 'Excellent technical support', 'Quebec standard compliant payroll'],
    cons: ['Exclusively for the Canadian market', 'Classic desktop version may feel dated compared to cloud-native apps'],
    reviews: [],
    description: 'A comprehensive accounting and management software suite designed for SMBs, helping them manage accounting, inventory, payroll, and invoicing.'
  },
  {
    id: 'optel-group',
    name: 'OPTEL Group',
    solutions: ['Optchain', 'VerifyBrand', 'Serialization', 'Aggregation', 'Vision Systems'],
    website: 'https://www.optelgroup.com/en/',
    linkedin: 'https://www.linkedin.com/company/optel-group/',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada, Global',
      providers: ['Private Cloud', 'Azure'],
      details: 'OPTEL provides end-to-end traceability software that ensures regulatory compliance and enhances inventory tracking across global supply chains.'
    },
    pros: ['35 years of traceability expertise', 'Global presence and support', 'End-to-end supply chain visibility', 'Regulatory compliance focus'],
    cons: ['Complex implementation for large supply chains', 'High specialization in track-and-trace'],
    reviews: [],
    description: 'A leading global provider of traceability, track-and-trace, and vision systems, helping companies collect, structure, and leverage supply chain data.'
  },
  {
    id: 'smartfoodsafe',
    name: 'SmartFoodSafe',
    solutions: ['Smart Audit', 'Smart CAPA', 'Smart Compliance', 'Smart Doc', 'Smart EMP', 'Smart Lab', 'Smart Record', 'Smart Specification', 'Smart Supplier', 'Smart Training'],
    website: 'https://smartfoodsafe.com/',
    linkedin: 'https://www.linkedin.com/company/smartfoodsafe/',
    headquarters: {
      city: 'Dorval',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.SEC, SoftwareType.AI],
    dataStorage: {
      location: 'Canada, Global',
      providers: ['AWS'],
      details: 'SmartFoodSafe provides AI-powered digital solutions for food safety management, ensuring compliance with global standards like HACCP and ISO 22000.'
    },
    pros: ['AI-powered food safety management', 'Comprehensive modular solutions', 'Fast implementation (less than 12 weeks)', 'Cost-effective modular pricing'],
    cons: ['Niche focus on food safety', 'Requires staff training for full adoption'],
    reviews: [],
    description: 'An innovative software company providing state-of-the-art technology solutions for Quality, Food Safety, Regulatory, and Traceability management.'
  },
  {
    id: 'simuhealth',
    name: 'Simuhealth',
    solutions: ['Smart Scheduling', 'Inventory Management', 'Accreditation Reporting', 'Staffing Management'],
    website: 'https://www.simu.health/',
    linkedin: 'https://www.linkedin.com/company/simuhealth-technologies',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.AI, SoftwareType.HR],
    dataStorage: {
      location: 'Canada',
      providers: ['Cloud Infrastructure'],
      details: 'Simuhealth is a cloud-based ERP platform designed for healthcare simulation programs, ensuring data security and compliance for healthcare networks.'
    },
    pros: ['Automates manual scheduling', 'Inventory and equipment tracking', 'Accreditation-ready reporting', 'AI-powered insights'],
    cons: ['Specific to healthcare simulation', 'AI features still in development'],
    reviews: [],
    description: 'A cloud-based ERP platform that automates the management of healthcare simulation, training, and compliance programs, replacing manual workflows with a modernized system.'
  },
  {
    id: 'alphinat',
    name: 'Alphinat',
    solutions: ['SmartGuide', 'Bolt-on Portal for Municipal', 'SmartPortal for Dynamics', 'Customer Identity and Access Management'],
    website: 'https://www.alphinat.com/en/',
    linkedin: 'https://www.linkedin.com/company/alphinat/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud', 'Azure'],
      details: 'Alphinat provides secure RAD solutions, often deployed on-premises or in secure cloud environments for public sector and enterprise clients.'
    },
    pros: ['Rapid application development', 'Secure digital services', 'Easy integration with legacy systems'],
    cons: ['Niche focus on portals', 'May require specific technical expertise for complex integrations'],
    reviews: [],
    description: 'A software company specializing in rapid application development (RAD) and secure portal solutions for the public sector and smart enterprises.'
  },
  {
    id: 'prextra',
    name: 'Prextra',
    solutions: ['Prextra ERP'],
    website: 'https://prextra.com/',
    linkedin: 'https://www.linkedin.com/company/cdid-prextra/',
    headquarters: {
      city: 'Victoriaville',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.SCM, SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Infrastructure'],
      details: 'Prextra is developed by CDID and typically hosted in secure Canadian data centers, tailored for the needs of Quebec SMEs.'
    },
    pros: ['Tailored for Quebec SMEs', 'Comprehensive all-in-one ERP', 'Strong local support'],
    cons: ['Primarily focused on the Quebec market', 'Limited global presence'],
    reviews: [],
    description: 'An ERP management software solution designed specifically for Quebec SMEs to streamline operations across various industries.'
  },
  {
    id: 'remitbee',
    name: 'Remitbee',
    solutions: ['Online Money Transfer', 'Currency Exchange', 'Remitbee Business'],
    website: 'https://www.remitbee.com/',
    linkedin: 'https://www.linkedin.com/company/remitbee/',
    headquarters: {
      city: 'Mississauga',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Remitbee uses secure cloud infrastructure to process financial transactions, ensuring compliance with FINTRAC regulations.'
    },
    pros: ['Competitive exchange rates', 'Low transaction fees', 'Fast and secure transfers'],
    cons: ['Online-only service', 'Limited to specific international corridors'],
    reviews: [],
    description: 'A Canadian fintech company providing online money transfer and currency exchange services with a focus on affordability and speed.'
  },
  {
    id: 'crypto4a',
    name: 'Crypto4A',
    solutions: ['Hardware Security Modules (HSMs)', 'QxVault', 'Secrets Management'],
    website: 'https://www.crypto4a.com/',
    linkedin: 'https://www.linkedin.com/company/crypto4a-technologies-inc-/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC],
    dataStorage: {
      location: 'Canada',
      providers: ['On-premises Hardware'],
      details: 'Crypto4A provides physical hardware security modules that store cryptographic keys and secrets locally on-premises for maximum security.'
    },
    pros: ['Quantum-safe technology', 'FIPS-validated hardware', 'High-assurance security'],
    cons: ['High cost of hardware', 'Requires specialized knowledge to manage'],
    reviews: [],
    description: 'A cybersecurity company providing quantum-safe hardware security modules (HSMs) and secrets management solutions for the quantum era.'
  },
  {
    id: 'smartworkforce',
    name: 'Smart Workforce AI',
    solutions: ['AI Scheduling', 'Time Management', 'Workforce Management'],
    website: 'https://www.smartworkforce.io/',
    linkedin: 'https://www.linkedin.com/company/smartworkforce-ai/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Smart Workforce AI leverages cloud-based AI to optimize team scheduling and time management.'
    },
    pros: ['AI-powered optimization', 'Hassle-free time management', 'Modern user interface'],
    cons: ['Newer platform', 'Limited enterprise track record compared to legacy players'],
    reviews: [],
    description: 'An AI-driven workforce management platform that simplifies scheduling and time tracking for teams.'
  },
  {
    id: 'resolutai',
    name: 'Resolut AI',
    solutions: ['Accounts Receivable Automation', 'Intelligent Risk Identification'],
    website: 'https://www.resolutai.com/',
    linkedin: 'https://www.linkedin.com/company/resolutai/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    industries: [Industry.FINANCE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Resolut AI uses cloud-based AI to automate accounts receivable processes and identify financial risks.'
    },
    pros: ['Reduces Day Sales Outstanding (DSO)', 'Automates manual AR tasks', 'Intelligent risk insights'],
    cons: ['Focused solely on accounts receivable', 'Requires integration with existing ERP/accounting systems'],
    reviews: [],
    description: 'An AI-powered accounts receivable automation and orchestration platform designed to help businesses get paid faster and smarter.'
  },
  {
    id: 'wbm-technologies',
    name: 'WBM Technologies',
    solutions: ['Enterprise UX Platform', 'Enterprise Service Desk', 'End User Computing', 'Modern Workplace & AI Enablement', 'Managed Print', 'Managed IT Services'],
    website: 'https://www.wbm.ca/',
    linkedin: 'https://www.linkedin.com/company/wbm-technologies-lp/',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Infrastructure'],
      details: 'WBM operates out of Infrastructure Operations Centres across Western Canada, providing outcome-driven IT solutions through their patent-pending Enterprise UX Platform.'
    },
    pros: ['Outcome-driven IT solutions', 'Patent-pending Enterprise UX Platform', 'Strong Western Canadian presence', 'Expertise in Microsoft technology enablement'],
    cons: ['Primarily focused on Western Canada', 'Managed services focus may not suit purely product-seeking clients'],
    reviews: [],
    description: 'A Western Canadian leader in outcome-driven IT solutions, providing a patent-pending Enterprise UX Platform that encompasses service desk, end-user computing, and AI enablement.'
  },
  {
    id: 'beauceron-security',
    name: 'Beauceron Security',
    solutions: ['Beauceron Platform', 'Anti-Phishing', 'Security Awareness Training'],
    website: 'https://www.beauceronsecurity.com/',
    linkedin: 'https://www.linkedin.com/company/beauceron-security/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.SEC],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Beauceron Security provides a cloud-based platform that helps organizations manage cyber risk by focusing on the human element of security.'
    },
    pros: ['Focuses on behavioral change', 'Comprehensive security awareness', 'Strong reporting and analytics'],
    cons: ['Requires ongoing employee engagement', 'Focused primarily on the human side of security'],
    reviews: [],
    description: 'A cybersecurity software company that helps organizations reduce cyber risk by motivating behavioral change through security awareness and anti-phishing solutions.'
  },
  {
    id: 'smartskin-technologies',
    name: 'SmartSkin Technologies',
    solutions: ['Real-Time Line Intelligence', 'Pharma Seal Assurance', 'Container Handling Optimization'],
    website: 'https://smartskintech.com/',
    linkedin: 'https://www.linkedin.com/company/smartskin-technologies/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.SCM],
    industries: [Industry.MANUFACTURING, Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'SmartSkin provides real-time line intelligence for pharmaceutical and beverage manufacturers, using IoT sensors and AI to optimize production.'
    },
    pros: ['Real-time production line insights', 'Reduces breakage and defects', 'Highly specialized for pharma and beverage'],
    cons: ['Requires hardware sensors on production lines', 'High specialization in container handling'],
    reviews: [],
    description: 'An industrial IoT and AI company providing real-time line intelligence to help manufacturers reduce breakage and optimize efficiency.'
  },
  {
    id: 'medreddie',
    name: 'MedReddie',
    solutions: ['AI Healthcare Procurement Agent', 'Value-Based Procurement Platform'],
    website: 'https://medreddie.com/',
    linkedin: 'https://www.linkedin.com/company/medreddie/',
    headquarters: {
      city: 'Saint John',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'MedReddie uses AI to automate and optimize healthcare procurement, helping hospitals and suppliers drive value-based decisions.'
    },
    pros: ['AI-powered procurement automation', 'Reduces months of manual work', 'Focuses on value-based healthcare'],
    cons: ['Specific to healthcare procurement', 'Relatively new platform'],
    reviews: [],
    description: 'An AI-powered healthcare procurement platform that helps hospitals and suppliers streamline procurement processes and drive value.'
  },
  {
    id: 'versos-ai',
    name: 'Versos AI',
    solutions: ['Video Data Licensing', 'AI Training Data Management'],
    website: 'https://versos.ai/',
    linkedin: 'https://www.linkedin.com/company/versos-ai/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.AI],
    industries: [Industry.TECH, Industry.RETAIL],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Cloud Infrastructure'],
      details: 'Versos AI provides a platform for ethically licensing rights-cleared video archives for AI model training.'
    },
    pros: ['Ethical AI training data', 'Chain-of-custody licensing', 'Automated categorization and tagging'],
    cons: ['Niche focus on video data for AI', 'Emerging market'],
    reviews: [],
    description: 'A platform that connects video supply to AI training demand, providing ethically licensed and rights-cleared video data for AI model builders.'
  },
  {
    id: 'sonrai-security',
    name: 'Sonrai Security',
    solutions: ['Cloud Permissions Management', 'Identity Security', 'Privileged Access Management'],
    website: 'https://sonraisecurity.com/',
    linkedin: 'https://www.linkedin.com/company/sonrai-security/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    industries: [Industry.TECH, Industry.FINANCE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS', 'Azure', 'GCP'],
      details: 'Sonrai Security provides a cloud identity and access management platform that protects users and data across multi-cloud environments.'
    },
    pros: ['Comprehensive cloud identity security', 'Automates privilege management', 'Supports multi-cloud environments'],
    cons: ['Complex for small cloud footprints', 'Requires deep integration with cloud providers'],
    reviews: [],
    description: 'A cloud security company providing identity and access management solutions to protect users and data in complex multi-cloud environments.'
  },
  {
    id: 'mariner-innovations',
    name: 'Mariner Innovations',
    solutions: ['IT Professional Services', 'Digital Transformation', 'Application Modernization'],
    website: 'https://marinerinnovations.com/',
    linkedin: 'https://www.linkedin.com/company/mariner-innovations/',
    headquarters: {
      city: 'Saint John',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Infrastructure'],
      details: 'Mariner Innovations provides IT professional services and digital transformation solutions to clients across North America.'
    },
    pros: ['Deep expertise in IT services', 'Strong track record in digital transformation', 'Regional leader in Atlantic Canada'],
    cons: ['Service-based model rather than product-based', 'Pricing can be premium for specialized consulting'],
    reviews: [],
    description: 'A leading provider of IT professional services and digital transformation solutions, helping organizations modernize their applications and infrastructure.'
  },
  {
    id: 'the-learning-bar',
    name: 'The Learning Bar',
    solutions: ['OurSCHOOL', 'Confident Learners', 'Early Years Evaluation'],
    website: 'https://thelearningbar.com/',
    linkedin: 'https://www.linkedin.com/company/the-learning-bar/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'The Learning Bar provides research-based educational tools and assessments to improve student outcomes globally.'
    },
    pros: ['Research-based educational tools', 'Global impact on student outcomes', 'Comprehensive assessment solutions'],
    cons: ['Specific to the education sector', 'Requires school-wide implementation'],
    reviews: [],
    description: 'An educational research and software company providing tools to help schools and districts improve student learning and well-being.'
  },
  {
    id: 'clinicglide',
    name: 'ClinicGlide',
    solutions: ['Clinic Management Software', 'Patient Scheduling', 'Healthcare Analytics'],
    website: 'https://www.clinicglide.com/',
    linkedin: 'https://www.linkedin.com/company/clinicglide/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.ITS],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'ClinicGlide provides cloud-based clinic management software designed to streamline healthcare operations and patient care.'
    },
    pros: ['Streamlined clinic operations', 'User-friendly patient scheduling', 'Healthcare-focused analytics'],
    cons: ['Niche focus on clinic management', 'Requires staff adoption for full benefit'],
    reviews: [],
    description: 'A healthcare software company providing clinic management solutions to help healthcare providers deliver better patient care.'
  },
  {
    id: 'kognitiv-spark',
    name: 'Kognitiv Spark',
    solutions: ['RemoteSpark', 'Augmented Reality Remote Support', 'Connected Worker Solutions'],
    website: 'https://www.kognitivspark.com/',
    linkedin: 'https://www.linkedin.com/company/kognitiv-spark/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.MANUFACTURING, Industry.ENERGY, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Kognitiv Spark provides augmented reality solutions for remote support, allowing experts to guide frontline workers in real-time.'
    },
    pros: ['Real-time AR remote guidance', 'Hands-free worker support', 'Reduces travel costs and downtime'],
    cons: ['Requires AR hardware (e.g., HoloLens)', 'Best suited for complex industrial environments'],
    reviews: [],
    description: 'A software company specializing in augmented reality solutions for remote support and connected worker applications in industrial sectors.'
  },
];
