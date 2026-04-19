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
    description: 'A global commerce company, providing tools to start, grow, market, and manage a retail business of any size.',
    pricing: {
      plans: [
        {
          name: 'Basic',
          price: '$39/month',
          features: ['Solo entrepreneurs', '1% back on sales', '2.9% + 30¢ online card rates', '10 inventory locations', '24/7 chat support']
        },
        {
          name: 'Shopify (Grow)',
          price: '$105/month',
          features: ['Small teams', '1% back on sales', '2.7% + 30¢ online card rates', '5 staff accounts', 'Professional reports']
        },
        {
          name: 'Advanced',
          price: '$399/month',
          features: ['Global reach', '1% back on sales', '2.5% + 30¢ online card rates', '15 staff accounts', 'Custom report builder']
        },
        {
          name: 'Plus',
          price: 'Starting at $2,300/month',
          features: ['Complex businesses', 'Unlimited staff accounts', 'Fully customizable checkout', 'Wholesale/B2B capabilities', 'Priority support']
        }
      ],
      details: 'Prices shown are for monthly billing. Yearly billing offers a discount (save ~25%). Transaction fees apply if not using Shopify Payments.',
      url: 'https://www.shopify.com/pricing'
    }
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
    description: 'An employee recognition and engagement platform that helps organizations build a culture of appreciation through rewards, social recognition, and employee voice tools.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Recognition and reward platform', 'Years of service programs', 'Employee voice and listening tools', 'Global rewards marketplace', 'Dedicated support team']
        }
      ],
      details: 'Achievers provides tailored pricing based on organization size, goals, and engagement priorities. Subscriptions typically include access to the platform, rewards marketplace, and ongoing support.',
      url: 'https://www.achievers.com/pricing/'
    }
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
    description: 'A provider of Information Management solutions, helping companies securely capture, govern and exchange information on a global scale.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Content management', 'Experience management', 'Business network', 'Security solutions', 'AI & analytics']
        }
      ],
      details: 'OpenText provides complex enterprise solutions with pricing tailored to the specific needs, scale, and deployment model of each client.',
      url: 'https://www.opentext.com/'
    }
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
    description: 'An IT and business consulting services firm, delivering end-to-end services and solutions.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['IT consulting', 'Systems integration', 'Managed IT services', 'Business process services', 'Intellectual property solutions']
        }
      ],
      details: 'CGI offers professional services and custom software solutions. Pricing is project-based or contract-based depending on the engagement.',
      url: 'https://www.cgi.com/'
    }
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
    description: 'A provider of supply chain management and sales and operations planning (S&OP).',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Supply chain planning', 'Demand & supply sensing', 'Inventory management', 'S&OP / IBP', 'Concurrent planning']
        }
      ],
      details: 'Kinaxis pricing is based on the complexity of the supply chain, number of users, and the specific modules required for the enterprise.',
      url: 'https://www.kinaxis.com/'
    }
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
    description: 'A one-stop commerce platform for merchants around the world to simplify, scale and provide exceptional customer experiences.',
    pricing: {
      plans: [
        {
          name: 'Lean',
          price: '$69/month',
          features: ['Retail POS', 'Integrated payments', 'Basic reporting', '1 register included']
        },
        {
          name: 'Standard',
          price: '$119/month',
          features: ['Everything in Lean', 'Accounting integration', 'E-commerce integration']
        },
        {
          name: 'Advanced',
          price: '$199/month',
          features: ['Everything in Standard', 'Advanced reporting', 'Customer loyalty program']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Unlimited registers', 'Dedicated account manager', 'Customized onboarding']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available at a higher rate. Transaction fees apply for payments.',
      url: 'https://www.lightspeedhq.com/pricing/retail/'
    }
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
    description: 'A cloud-based legal software, providing practice management, CRM, and client intake solutions.',
    pricing: {
      plans: [
        {
          name: 'Starter',
          price: '$39/user/month',
          features: ['Case management', 'Time & expense tracking', 'Billing & invoicing', 'Clio Mobile App']
        },
        {
          name: 'Boutique',
          price: '$59/user/month',
          features: ['Everything in Starter', 'Custom fields', 'Unlimited document storage', 'Accounting integrations']
        },
        {
          name: 'Elite',
          price: '$99/user/month',
          features: ['Everything in Boutique', 'Advanced tasks', 'Court rules integration', 'Priority support']
        },
        {
          name: 'Suite',
          price: '$125/user/month',
          features: ['Everything in Elite', 'Clio Grow (CRM)', 'Client intake automation', 'Advanced reporting']
        }
      ],
      details: 'Prices are based on annual billing. Monthly options are available. Clio Grow can be purchased separately.',
      url: 'https://www.clio.com/pricing/'
    }
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
    description: 'Cloud accounting software that makes billing and invoicing easy and professional for small business owners.',
    pricing: {
      plans: [
        {
          name: 'Lite',
          price: '$19/month',
          features: ['Up to 5 billable clients', 'Unlimited invoices', 'Track unlimited expenses', 'Bank connections']
        },
        {
          name: 'Plus',
          price: '$33/month',
          features: ['Up to 50 billable clients', 'Recurring billing', 'Automatic expense tracking', 'Business health reports']
        },
        {
          name: 'Premium',
          price: '$60/month',
          features: ['Unlimited billable clients', 'Project profitability tracking', 'Custom email templates', 'Accounts payable']
        },
        {
          name: 'Select',
          price: 'Custom',
          features: ['Over $10k in monthly billings', 'Dedicated account manager', 'Lower transaction rates', 'Customized training']
        }
      ],
      details: 'Prices are for monthly billing. Annual billing offers a discount. FreshBooks often runs promotional pricing for new users.',
      url: 'https://www.freshbooks.com/pricing'
    }
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
    description: 'A provider of corporate social responsibility and employee engagement software.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Employee giving & volunteering', 'Grants management', 'Corporate missions', 'Global donation processing', 'Advanced analytics']
        }
      ],
      details: 'Benevity offers custom pricing based on the size of the organization and the specific modules required. Contact their sales team for a personalized quote.',
      url: 'https://www.benevity.com/'
    }
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
    description: 'A provider of anti-money laundering and fraud detection software for financial institutions.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Anti-money laundering', 'Fraud detection', 'High-risk customer management', 'Regulatory reporting', 'Financial crime investigation']
        }
      ],
      details: 'Verafin provides specialized solutions for financial institutions. Pricing is tailored to the size and specific needs of the bank or credit union.',
      url: 'https://verafin.com/'
    }
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
    description: 'The world\'s most widely used social media management platform.',
    pricing: {
      plans: [
        {
          name: 'Professional',
          price: '$99/month',
          features: ['1 user', '10 social accounts', 'Unlimited scheduling', 'Post analytics']
        },
        {
          name: 'Team',
          price: '$249/month',
          features: ['3 users', '20 social accounts', 'Team assignments', 'Custom analytics reports']
        },
        {
          name: 'Business',
          price: '$739/month',
          features: ['5 users', '35 social accounts', 'Approval workflows', '24/7 priority support']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Starts at 5 users', 'Starts at 50 accounts', 'Social ads management', 'Employee advocacy']
        }
      ],
      details: 'Prices are for annual billing. A 30-day free trial is available for Professional and Team plans.',
      url: 'https://www.hootsuite.com/pricing'
    }
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
    description: 'A password manager, helping businesses and families stay safe online.',
    pricing: {
      plans: [
        {
          name: 'Individual',
          price: '$2.99/month',
          features: ['Unlimited passwords', '1 GB document storage', 'Two-factor authentication', '24/7 email support']
        },
        {
          name: 'Families',
          price: '$4.99/month',
          features: ['Up to 5 family members', 'Shared vaults', 'Account recovery', 'Manage what others can see']
        },
        {
          name: 'Business',
          price: '$7.99/user/month',
          features: ['Custom security policies', 'Advanced protection', 'Duo integration', 'Free family accounts for employees']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Dedicated account manager', 'Onboarding assistance', 'Customized training', 'Advanced reporting']
        }
      ],
      details: 'Prices are for annual billing. 1Password also offers a Teams Starter Pack for small teams.',
      url: 'https://1password.com/pricing'
    }
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
    description: 'A provider of AI-powered search and recommendations for digital experiences.',
    pricing: {
      plans: [
        {
          name: 'Pro',
          price: 'Contact Sales',
          features: ['AI-powered search', 'Basic recommendations', 'Standard connectors', 'Standard support']
        },
        {
          name: 'Enterprise',
          price: 'Contact Sales',
          features: ['Advanced AI relevance', 'Full recommendation suite', 'Custom connectors', 'Priority support', 'SLA guarantees']
        }
      ],
      details: 'Coveo pricing is typically based on the number of search queries and the complexity of the implementation. Contact sales for a custom quote.',
      url: 'https://www.coveo.com/en/pricing'
    }
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
    description: 'A provider of on-demand, software-as-a-service solutions focused on improving the productivity, performance and security of logistics-intensive businesses.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Global logistics network', 'Routing & scheduling', 'Customs compliance', 'Transportation management']
        }
      ],
      details: 'Descartes offers modular pricing based on the specific logistics and supply chain solutions needed. Contact their sales team for details.',
      url: 'https://www.descartes.com/'
    }
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
    description: 'A global human capital management software company that helps organizations manage the entire employee lifecycle.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Full HCM suite', 'Global payroll', 'Time & attendance', 'Benefits administration', 'Talent management']
        }
      ],
      details: 'Dayforce pricing is based on the number of employees and the specific modules selected. Contact Ceridian for a custom enterprise quote.',
      url: 'https://www.dayforce.com/'
    }
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
    description: 'A cloud-based software platform for the senior care market.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Electronic Health Records (EHR)', 'Financial management', 'Infection prevention', 'Compliance monitoring']
        }
      ],
      details: 'PointClickCare provides custom pricing for long-term and post-acute care facilities. Contact their sales team for a personalized quote.',
      url: 'https://pointclickcare.com/'
    }
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
    description: 'A provider of learning technology, providing the Brightspace learning management system.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Brightspace LMS', 'Course creation tools', 'Student engagement analytics', 'Accessibility features']
        }
      ],
      details: 'D2L offers custom pricing for K-12, Higher Education, and Corporate learning environments. Contact their sales team for details.',
      url: 'https://www.d2l.com/'
    }
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
    description: 'A Canadian financial services company, offering investment, trading, and tax software.',
    pricing: {
      plans: [
        {
          name: 'Basic',
          price: '0.5% Management Fee',
          features: ['Automated investing', 'Dividend reinvesting', 'Financial advice', 'Automatic rebalancing']
        },
        {
          name: 'Black',
          price: '0.4% Management Fee',
          features: ['For $100k+ assets', 'Lower management fees', 'Financial planning sessions', 'Tax-loss harvesting']
        },
        {
          name: 'Generation',
          price: '0.4% Management Fee',
          features: ['For $500k+ assets', 'Dedicated team of advisors', 'Customized portfolios', 'Health and wellness perks']
        }
      ],
      details: 'Wealthsimple also offers commission-free stock and crypto trading. Tax software is pay-what-you-want.',
      url: 'https://www.wealthsimple.com/en-ca/pricing'
    }
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
    description: 'The tomorrow-first payments technology company, helping businesses scale locally and globally.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Global payment processing', 'Card issuing', 'Fraud management', 'Alternative payment methods']
        }
      ],
      details: 'Nuvei offers custom transaction-based pricing tailored to business volume and industry. Contact their sales team for a quote.',
      url: 'https://nuvei.com/'
    }
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
    description: 'An identity verification service, providing secure access to hundreds of data sources.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['GlobalGateway platform', 'Identity verification', 'Business verification', 'AML compliance']
        }
      ],
      details: 'Trulioo provides custom pricing based on verification volume and the specific data sources required. Contact sales for details.',
      url: 'https://www.trulioo.com/'
    }
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
    description: 'A platform for creating, marketing, and selling online courses and membership sites.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['1 course', 'Unlimited students', '1 administrator', 'Thinkific Academy courses']
        },
        {
          name: 'Basic',
          price: '$49/month',
          features: ['Unlimited courses', 'Custom domain', 'Email integrations', 'Scheduled content']
        },
        {
          name: 'Start',
          price: '$99/month',
          features: ['Assignments', 'Memberships', 'Live lessons', 'Advanced course building']
        },
        {
          name: 'Grow',
          price: '$199/month',
          features: ['Remove Thinkific branding', 'Bulk student emailer', 'Priority support', 'Affiliate reporting']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Thinkific also offers a Plus plan for enterprise.',
      url: 'https://www.thinkific.com/pricing/'
    }
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
    description: 'The only provider of self-healing, intelligent security solutions.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Endpoint persistence', 'Self-healing security', 'Asset intelligence', 'Device tracking & recovery']
        }
      ],
      details: 'Absolute Software offers custom pricing based on the number of devices and the security tier required. Contact sales for a quote.',
      url: 'https://www.absolute.com/'
    }
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
    description: 'An end-to-end software platform for home and community care providers.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Client management', 'Scheduling & billing', 'Clinical documentation', 'Mobile caregiver app', 'Reporting & analytics']
        }
      ],
      details: 'AlayaCare offers custom pricing based on the size of the home care agency and the specific modules required.',
      url: 'https://alayacare.com/'
    }
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
    description: 'A provider of ancillary revenue solutions for the travel industry.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Upgrade bidding', 'Seat selection', 'Ancillary revenue optimization', 'Traveler engagement', 'Data-driven insights']
        }
      ],
      details: 'Plusgrade works with airlines and travel companies to optimize revenue. Pricing is typically based on a revenue-share or performance model.',
      url: 'https://www.plusgrade.com/'
    }
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
    description: 'A provider of digital forensics software, helping investigators uncover critical evidence from computers, smartphones, and the cloud.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Digital investigation', 'Evidence recovery', 'Incident response', 'Cloud forensics', 'Case management']
        }
      ],
      details: 'Magnet Forensics provides specialized tools for investigators. Pricing is based on the specific software modules and number of licenses.',
      url: 'https://www.magnetforensics.com/'
    }
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
    description: 'The supply chain sustainability management solution that helps complex manufacturers manage their supply chain data.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Supply chain data management', 'Product compliance', 'ESG reporting', 'Supplier engagement', 'Risk management']
        }
      ],
      details: 'Assent offers enterprise-level supply chain solutions. Pricing is custom based on the complexity of the supply chain and reporting requirements.',
      url: 'https://www.assent.com/'
    }
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
    description: 'A video platform for businesses, helping them use video to drive more revenue through sales and marketing.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['Record & share videos', 'Basic video editing', 'Up to 25 videos in library', 'Video insights']
        },
        {
          name: 'Pro',
          price: '$19/month',
          features: ['Unlimited video recording', 'Remove Vidyard branding', 'Call-to-action buttons', 'Password protection']
        },
        {
          name: 'Business',
          price: 'Contact Sales',
          features: ['Advanced analytics', 'Custom branding', 'Team management', 'CRM integrations']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Vidyard also offers a free version with basic features.',
      url: 'https://www.vidyard.com/pricing/'
    }
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
    description: 'An AI-powered customer service automation platform that helps brands provide personalized support at scale.',
    pricing: {
      plans: [
        {
          name: 'Core',
          price: 'Contact Sales',
          features: ['AI chatbot', 'Automated resolutions', 'Basic analytics', 'Standard integrations']
        },
        {
          name: 'Advanced',
          price: 'Contact Sales',
          features: ['Everything in Core', 'Proactive messaging', 'Advanced analytics', 'Custom integrations']
        }
      ],
      details: 'Ada provides custom pricing based on the volume of automated interactions and the level of support required.',
      url: 'https://www.ada.cx/pricing'
    }
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
    description: 'A provider of AI models for enterprise, including large language models (LLMs).',
    pricing: {
      plans: [
        {
          name: 'Usage-based',
          price: 'Pay-per-token',
          features: ['Access to Command models', 'Embed models', 'Rerank models', 'API access']
        },
        {
          name: 'Enterprise',
          price: 'Contact Sales',
          features: ['Private deployment', 'Custom model training', 'Priority support', 'SLA guarantees']
        }
      ],
      details: 'Cohere offers flexible usage-based pricing for developers and custom enterprise plans for large-scale deployments.',
      url: 'https://cohere.com/pricing'
    }
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
    description: 'An online platform for international student recruitment.',
    pricing: {
      plans: [
        {
          name: 'Partner School',
          price: 'Contact Sales',
          features: ['Student recruitment', 'Application management', 'Marketing tools', 'Data & insights']
        }
      ],
      details: 'ApplyBoard works with educational institutions to streamline international recruitment. Pricing models vary based on the partnership.',
      url: 'https://www.applyboard.com/'
    }
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
    description: 'A virtual healthcare and wellness platform for employers and organizations.',
    pricing: {
      plans: [
        {
          name: 'Employer Plan',
          price: 'Contact Sales',
          features: ['Virtual primary care', 'Mental health support', 'Employee assistance program', 'Wellness resources']
        }
      ],
      details: 'Dialogue is typically offered as an employee benefit. Pricing is based on the number of employees and the range of services included.',
      url: 'https://www.dialogue.co/'
    }
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
    description: 'A provider of smart traffic technology, helping cities improve traffic flow and safety.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Traffic data collection', 'Smart intersection management', 'Traffic signal control', 'Data analytics', 'Remote monitoring']
        }
      ],
      details: 'Miovision provides infrastructure and data solutions for cities. Pricing is project-based or subscription-based depending on the scale.',
      url: 'https://miovision.com/'
    }
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
    description: 'A provider of IoT and connected transportation, providing telematics solutions for fleet management.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Fleet tracking', 'Driver behavior monitoring', 'Fuel management', 'Maintenance scheduling', 'Regulatory compliance (ELD)']
        }
      ],
      details: 'Geotab provides custom pricing based on the number of vehicles and the specific telematics features required.',
      url: 'https://www.geotab.com/'
    }
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
    description: 'A business management software for home service professionals.',
    pricing: {
      plans: [
        {
          name: 'Core',
          price: '$49/month',
          features: ['1 user', 'Client manager (CRM)', 'Quoting & invoicing', 'Online payments']
        },
        {
          name: 'Connect',
          price: '$129/month',
          features: ['Up to 5 users', 'Automated follow-ups', 'Online booking', 'Job tracking']
        },
        {
          name: 'Grow',
          price: '$249/month',
          features: ['Up to 15 users', 'Two-way text messaging', 'Lead management', 'Quote add-ons']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Jobber also offers a 14-day free trial.',
      url: 'https://getjobber.com/pricing/'
    }
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
    description: 'A payments company that provides better rates and smarter software for small businesses.',
    pricing: {
      plans: [
        {
          name: 'Pay-as-you-go',
          price: '$0/month',
          features: ['Interchange-plus pricing', 'No monthly fees', 'No setup fees', 'No cancellation fees']
        },
        {
          name: 'Volume Discount',
          price: 'Custom',
          features: ['Lower rates for high volume', 'Dedicated account manager', 'Customized solutions']
        }
      ],
      details: 'Helcim uses a transparent interchange-plus pricing model. You only pay for the transactions you process.',
      url: 'https://www.helcim.com/pricing/'
    }
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
    description: 'A food delivery network, connecting millions of customers with local restaurants.',
    pricing: {
      plans: [
        {
          name: 'Restaurant Partner',
          price: 'Commission-based',
          features: ['Online ordering', 'Delivery logistics', 'Marketing tools', 'Order management tablet', 'Analytics dashboard']
        }
      ],
      details: 'SkipTheDishes typically charges a commission fee on each order. There may be initial setup fees for hardware and onboarding.',
      url: 'https://www.skipthedishes.com/restaurants'
    }
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
    description: 'A provider of modular e-commerce solutions for high-growth brands.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Custom checkout', 'Subscription management', 'Price rules engine', 'Upsell & cross-sell tools', 'API access']
        }
      ],
      details: 'Bold Commerce offers custom pricing based on the specific e-commerce modules and transaction volume.',
      url: 'https://boldcommerce.com/'
    }
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
    description: 'A platform for channel partners to provide digital solutions to small and medium-sized businesses.',
    pricing: {
      plans: [
        {
          name: 'Starter',
          price: '$99/month minimum',
          features: ['For startup agencies and solopreneurs', 'Wholesale pricing for products', '1 Team Member seat', '10 Snapshot Reports / month', 'Co-branding with Vendasta']
        },
        {
          name: 'Professional',
          price: '$499/month minimum',
          features: ['For established teams', 'Better wholesale pricing', '5 Team Member seats', '25 Snapshot Reports / month', 'White-label client portal']
        },
        {
          name: 'Premium',
          price: '$999/month minimum',
          features: ['For medium-sized companies', 'Even better wholesale pricing', '10 Team Member seats', '50 Snapshot Reports / month', 'Multi-location client portal']
        },
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['For large companies', 'The best wholesale pricing', 'Custom volume pricing', 'Priority support', 'Invoiced billing']
        }
      ],
      details: 'Vendasta uses a minimum-based pricing model where your platform fee covers your first month, and subsequent spending on products counts toward your minimum.',
      url: 'https://www.vendasta.com/pricing/'
    }
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
    description: 'A team management platform for the restaurant industry.',
    pricing: {
      plans: [
        {
          name: 'Comp',
          price: '$0',
          features: ['Up to 30 employees', 'Scheduling', 'Time clocking', 'Team communication']
        },
        {
          name: 'Entree',
          price: '$31.50/month',
          features: ['Unlimited employees', 'Labor compliance', 'POS integrations', 'Manager log book']
        },
        {
          name: 'The Works',
          price: '$76.50/month',
          features: ['Advanced labor compliance', 'Tip management', 'Task management', 'Engagement tools']
        },
        {
          name: 'Gourmet',
          price: '$135/month',
          features: ['Enterprise-grade features', 'Dedicated support', 'Custom reporting', 'Multi-location management']
        }
      ],
      details: 'Prices are per location / month billed annually. Monthly billing options are available at a higher rate.',
      url: 'https://www.7shifts.com/pricing'
    }
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
    description: 'A leading relationship intelligence platform that helps organizations unlock the value of their relationships and drive revenue growth.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Relationship intelligence platform', 'CRM automation', 'Data enrichment', 'Actionable relationship insights', 'Dedicated support']
        }
      ],
      details: 'Introhive offers custom pricing tailored to the specific needs of professional services firms and enterprises. Contact their sales team for a personalized quote.',
      url: 'https://www.introhive.com/'
    }
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
    description: 'A proposal software for modern sales teams.',
    pricing: {
      plans: [
        {
          name: 'Team',
          price: '$49/user/month',
          features: ['Unlimited proposals', 'Custom fields & variables', 'Standard integrations', 'Role-based permissions']
        },
        {
          name: 'Business',
          price: 'Contact Sales',
          features: ['Salesforce integration', 'Single sign-on (SSO)', 'Approval workflows', 'Dedicated success manager']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Proposify offers a 14-day free trial.',
      url: 'https://www.proposify.com/pricing'
    }
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
    description: 'A landing page platform for marketers and agencies.',
    pricing: {
      plans: [
        {
          name: 'Build',
          price: '$99/month',
          features: ['Up to 500 conversions', 'Up to 20,000 visitors', '1 domain', 'Unlimited landing pages']
        },
        {
          name: 'Experiment',
          price: '$149/month',
          features: ['Up to 1,000 conversions', 'Up to 30,000 visitors', '5 domains', 'A/B testing']
        },
        {
          name: 'Optimize',
          price: '$249/month',
          features: ['Up to 2,500 conversions', 'Up to 50,000 visitors', '10 domains', 'Dynamic text replacement']
        },
        {
          name: 'Concierge',
          price: 'Starting at $649/month',
          features: ['Over 5,000 conversions', 'Over 100,000 visitors', '25+ domains', 'Dedicated success manager']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Unbounce offers a 14-day free trial.',
      url: 'https://unbounce.com/pricing/'
    }
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
    description: 'A provider of decision analytics for companies managing critical infrastructure.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Asset investment planning', 'Risk management', 'Portfolio optimization', 'Strategic planning', 'Advanced analytics']
        }
      ],
      details: 'Copperleaf provides enterprise-level decision analytics. Pricing is tailored to the scale and complexity of the asset portfolio.',
      url: 'https://www.copperleaf.com/'
    }
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
    description: 'A provider of intelligent security software and services to enterprises and governments around the world.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Cylance AI security', 'BlackBerry UEM', 'BlackBerry AtHoc', 'QNX embedded software', 'Secure communications']
        }
      ],
      details: 'BlackBerry offers a range of security and communications solutions. Pricing is custom based on the specific products and scale of deployment.',
      url: 'https://www.blackberry.com/'
    }
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
    description: 'The only native Excel Complete Planning platform that connects people, data, and systems.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Budgeting & forecasting', 'Financial reporting', 'Operational planning', 'Excel integration', 'Workflow management']
        }
      ],
      details: 'Vena Solutions provides custom pricing based on the number of users and the complexity of the financial planning requirements.',
      url: 'https://www.venasolutions.com/'
    }
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
    description: 'AI-powered legal research and prediction software for tax and employment law.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['AI legal research', 'Tax analysis tools', 'Employment law insights', 'Case law prediction', 'Document drafting assistance']
        }
      ],
      details: 'Blue J Legal offers custom pricing for law firms and accounting firms based on the number of users and specific practice areas.',
      url: 'https://www.bluej.com/'
    }
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
    description: 'An online bookkeeping service for small businesses.',
    pricing: {
      plans: [
        {
          name: 'Essential',
          price: '$249/month',
          features: ['Monthly bookkeeping', 'Dedicated bookkeeping team', 'Year-end financial statements', 'Direct communication with team']
        },
        {
          name: 'Premium',
          price: '$399/month',
          features: ['Everything in Essential', 'Tax prep & filing', 'Unlimited tax advisory', 'Catch-up bookkeeping available']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Bench also offers catch-up bookkeeping for businesses behind on their books.',
      url: 'https://bench.co/pricing/'
    }
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
    description: 'An ecosystem of employee experience tools that help organizations thrive in the new world of work.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['Pulse surveys', 'Anonymous feedback', 'Basic reporting', 'Unlimited users']
        },
        {
          name: 'Essential',
          price: '$5/user/month',
          features: ['Everything in Free', 'Custom surveys', 'Advanced reporting', 'Action plans']
        },
        {
          name: 'Pro',
          price: '$8/user/month',
          features: ['Everything in Essential', 'OKRs & goal tracking', '1-on-1 meeting templates', 'Priority support']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Workleap (Officevibe) offers a free version for teams.',
      url: 'https://workleap.com/officevibe/pricing/'
    }
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
    description: 'An AI-powered financial risk discovery platform for audit and finance professionals.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['AI-driven audit', 'Risk assessment', 'Anomaly detection', 'Financial data analysis', 'Compliance reporting']
        }
      ],
      details: 'MindBridge provides custom pricing for accounting firms and internal audit teams based on data volume and number of users.',
      url: 'https://www.mindbridge.ai/'
    }
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
    description: 'A provider of video production technology, providing hardware and software for live broadcast.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Video switchers', 'Graphics systems', 'Camera motion control', 'Video servers', 'Live production workflows']
        }
      ],
      details: 'Ross Video offers specialized hardware and software for video production. Pricing is project-based or based on specific equipment needs.',
      url: 'https://www.rossvideo.com/'
    }
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
    description: 'A provider of event-driven architecture (EDA) for the modern enterprise.',
    pricing: {
      plans: [
        {
          name: 'Standard',
          price: 'Usage-based',
          features: ['Event broker services', 'Standard support', 'Cloud deployment', 'Basic monitoring']
        },
        {
          name: 'Enterprise',
          price: 'Contact Sales',
          features: ['Advanced event mesh', 'Priority support', 'High availability', 'Advanced security & governance']
        }
      ],
      details: 'Solace offers usage-based pricing for its cloud services and custom enterprise plans for large-scale event-driven architectures.',
      url: 'https://solace.com/pricing/'
    }
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
    description: 'A healthcare platform that helps practitioners dispense professional-grade supplements.',
    pricing: {
      plans: [
        {
          name: 'Practitioner',
          price: '$0',
          features: ['Free for practitioners', 'Virtual dispensary', 'Patient management', 'Educational resources']
        },
        {
          name: 'Patient',
          price: 'Pay per supplement',
          features: ['Access to professional-grade supplements', 'Personalized recommendations', 'Autoship options']
        }
      ],
      details: 'Fullscript is free for healthcare practitioners to use. Patients pay for the supplements they purchase through the platform.',
      url: 'https://fullscript.com/pricing'
    }
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
    description: 'A cloud-based dashboard and business intelligence platform for small and medium-sized businesses.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['Unlimited metrics', 'Unlimited dashboards', 'Unlimited viewers', 'Standard data connectors']
        },
        {
          name: 'Go',
          price: '$99/month',
          features: ['Automated data refreshes', 'PDF reports', 'Public dashboard links', 'Priority support']
        },
        {
          name: 'Pro',
          price: '$229/month',
          features: ['White-labeling', 'Custom domain', 'Advanced data modeling', 'API access']
        },
        {
          name: 'Business',
          price: '$799/month',
          features: ['Enterprise-grade security', 'Dedicated success manager', 'Custom onboarding', 'SLA guarantees']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available. Klipfolio also offers a free version.',
      url: 'https://www.klipfolio.com/pricing'
    }
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
    industries: [Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
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
    description: 'A financial data aggregator in Canada, powering the next generation of fintech.',
    pricing: {
      details: 'Custom pricing for API access. Contact sales for details.',
      url: 'https://flinks.com'
    }
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
    description: 'A micro-investing app that helps Canadians achieve their financial goals.',
    pricing: {
      plans: [
        {
          name: 'Moka',
          price: '$3.99/month',
          features: ['Automated roundups', 'Unlimited TFSA/RRSP accounts', 'Socially responsible investing', 'Personalized financial coaching']
        },
        {
          name: 'Moka 360',
          price: '$15/month',
          features: ['Everything in Moka', 'Debt repayment tool', 'Bill negotiation service', 'Double cashback rewards']
        }
      ],
      details: 'Moka charges a flat monthly fee regardless of your account balance. There are no management fees or hidden costs.',
      url: 'https://moka.ai/pricing/'
    }
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
    description: 'A social storytelling platform.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['Read millions of stories', 'Write and publish stories', 'Join community discussions']
        },
        {
          name: 'Premium',
          price: '$5.99/month',
          features: ['Ad-free experience', 'Offline reading', 'Bonus coins with purchase', 'Exclusive theme colors']
        },
        {
          name: 'Premium+',
          price: '$9.99/month',
          features: ['Everything in Premium', '2 Paid Stories per month', 'Unlimited offline reading']
        }
      ],
      details: 'Wattpad is primarily free to use. Premium subscriptions offer an enhanced reading experience.',
      url: 'https://www.wattpad.com/premium/'
    }
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
    description: 'A provider of eReading solutions, offering eBooks and eReaders.',
    pricing: {
      plans: [
        {
          name: 'Pay-per-book',
          price: 'Varies',
          features: ['Buy individual eBooks', 'Buy individual Audiobooks', 'Sync across devices']
        },
        {
          name: 'Kobo Plus Read',
          price: '$7.99/month',
          features: ['Unlimited reading', 'Over 1.3 million eBooks', 'Read on any Kobo eReader or app']
        },
        {
          name: 'Kobo Plus Listen',
          price: '$7.99/month',
          features: ['Unlimited listening', 'Over 100,000 Audiobooks', 'Listen on any Kobo eReader or app']
        },
        {
          name: 'Kobo Plus Read & Listen',
          price: '$9.99/month',
          features: ['Unlimited reading and listening', 'Access to both eBook and Audiobook catalogs']
        }
      ],
      details: 'Kobo Plus offers a 30-day free trial for new subscribers.',
      url: 'https://www.kobo.com/plus'
    }
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
    description: 'A provider of smart home technology, including energy-efficient solutions for home comfort and security.',
    pricing: {
      plans: [
        {
          name: 'Smart Thermostat Enhanced',
          price: '~$189',
          features: ['Energy savings', 'Remote sensor included', 'Siri & Alexa built-in', 'Air quality monitoring']
        },
        {
          name: 'Smart Thermostat Premium',
          price: '~$249',
          features: ['Everything in Enhanced', 'Zinc construction', 'Built-in smoke alarm detection', 'Advanced occupancy sensing']
        },
        {
          name: 'Smart Security',
          price: 'From $5/month',
          features: ['Professional monitoring', 'Video storage', 'Smart alerts', 'Insurance discounts']
        }
      ],
      details: 'Hardware prices are one-time costs. Smart Security is an optional monthly subscription.',
      url: 'https://www.ecobee.com/en-ca/smart-security/'
    }
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
    description: 'A full-service spending and savings account with no hidden fees and instant cash back.',
    pricing: {
      plans: [
        {
          name: 'Essential',
          price: '$0/month',
          features: ['1% cash back on groceries & transportation', 'High-interest savings', 'Credit building (optional fee)', 'Virtual card']
        },
        {
          name: 'Extra',
          price: '$9/month',
          features: ['2% cash back on groceries, transportation & dining', 'No foreign transaction fees', '1 free wire transfer/month', 'Premium card']
        },
        {
          name: 'Everything',
          price: '$19/month',
          features: ['2% cash back on everything', 'Credit building included', 'Unlimited wire transfers', 'Priority support']
        }
      ],
      details: 'KOHO also offers a free version with no monthly fees. Users can earn interest on their entire balance.',
      url: 'https://www.koho.ca/plans/'
    }
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
    description: 'A technology company that is building a better financial experience for all Canadians.',
    pricing: {
      plans: [
        {
          name: 'Standard',
          price: '$0/month',
          features: ['Cash back rewards', 'No annual fees', 'High-interest savings', 'Mobile app access']
        },
        {
          name: 'Premium',
          price: '$4.99/month',
          features: ['Higher cash back rates', 'Purchase protection', 'Extended warranty', 'Priority support']
        }
      ],
      details: 'Neo Financial offers a range of financial products with no monthly fees for basic accounts.',
      url: 'https://www.neofinancial.com/'
    }
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
    description: 'A provider of smart home lighting, known for its modular LED light panels and software control.',
    pricing: {
      plans: [
        {
          name: 'Shapes Starter Kit',
          price: '~$199',
          features: ['7 modular panels', 'Music visualizer', 'Screen mirror', 'Touch control']
        },
        {
          name: 'Lines Starter Kit',
          price: '~$199',
          features: ['9 modular lines', 'Backlit glow', 'Dynamic lighting effects', 'Voice control']
        },
        {
          name: 'Essentials Bulb',
          price: '~$19',
          features: ['Thread & Matter support', '16M+ colors', 'Circadian lighting', 'App control']
        }
      ],
      details: 'Nanoleaf products are one-time hardware purchases. The app and software control are free.',
      url: 'https://nanoleaf.me/en-CA/products/'
    }
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
    description: 'An all-in-one practice management platform for health and wellness practitioners.',
    pricing: {
      plans: [
        {
          name: 'Base',
          price: '$79/month',
          features: ['Online booking', 'Charting', 'Scheduling', 'Invoicing', '1 full-time practitioner']
        },
        {
          name: 'Insurance',
          price: '$109/month',
          features: ['Everything in Base', 'Insurance billing', 'EDI generation', 'Claim tracking']
        },
        {
          name: 'Corporate',
          price: 'Custom',
          features: ['Multi-location management', 'Centralized billing', 'Advanced reporting', 'Dedicated support']
        }
      ],
      details: 'Pricing is based on the number of practitioners. Jane App also offers a free demo.',
      url: 'https://jane.app/pricing'
    }
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
  {
    id: 'motion',
    name: 'Motion',
    solutions: ['Creative Analytics', 'Visual Analysis Hub'],
    website: 'https://motionapp.com/',
    linkedin: 'https://www.linkedin.com/company/motionapp/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.RETAIL, Industry.TECH],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Motion stores creative performance data securely in the cloud, primarily using AWS infrastructure.'
    },
    pros: ['Deep visual analysis for ads', 'Helps creative teams iterate faster', 'Strong integrations with ad platforms'],
    cons: ['Niche focus on creative analytics', 'Requires active ad spend to be useful'],
    reviews: [],
    description: 'A creative analytics platform that helps marketers and creative teams identify what works in their ads to drive better performance.'
  },
  {
    id: 'stackadapt',
    name: 'StackAdapt',
    solutions: ['Self-Serve DSP', 'Programmatic Advertising Platform'],
    website: 'https://www.stackadapt.com/',
    linkedin: 'https://www.linkedin.com/company/stackadapt/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'GCP'],
      details: 'StackAdapt uses a global cloud infrastructure to handle billions of ad impressions daily with low latency.'
    },
    pros: ['User-friendly self-serve interface', 'Advanced AI-powered targeting', 'Excellent customer support'],
    cons: ['Minimum spend requirements for some features', 'Can be complex for beginners'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 500, url: 'https://www.g2.com/products/stackadapt/reviews' }
    ],
    description: 'A leading programmatic advertising platform that uses AI to help agencies and brands drive better marketing outcomes.',
    pricing: {
      details: 'Custom pricing based on campaign volume and service level. Contact sales for details.',
      url: 'https://www.stackadapt.com/'
    }
  },
  {
    id: 'smile-io',
    name: 'Smile.io',
    solutions: ['Loyalty Programs', 'Referral Programs', 'VIP Programs'],
    website: 'https://smile.io/',
    linkedin: 'https://www.linkedin.com/company/smileio/',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.MAR],
    industries: [Industry.RETAIL],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Smile.io stores loyalty and customer data securely, primarily on AWS infrastructure.'
    },
    pros: ['Easy to set up and use', 'Great integrations with Shopify and BigCommerce', 'Effective for increasing customer retention'],
    cons: ['Limited customization on lower plans', 'Can get expensive as customer base grows'],
    reviews: [
      { platform: 'Shopify App Store', rating: 4.8, count: 5000, url: 'https://apps.shopify.com/smile-io' }
    ],
    description: 'A loyalty and rewards platform that helps e-commerce brands increase repeat purchases and customer lifetime value.'
  },
  {
    id: 'zeffy',
    name: 'Zeffy',
    solutions: ['Fundraising Platform', 'Donor Management', 'Event Ticketing'],
    website: 'https://www.zeffy.com/',
    linkedin: 'https://www.linkedin.com/company/zeffy/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Zeffy ensures donor data is stored securely in compliance with Canadian privacy laws.'
    },
    pros: ['100% free for nonprofits (no transaction fees)', 'All-in-one fundraising suite', 'Simple and intuitive for donors'],
    cons: ['Relies on optional tips from donors', 'Limited advanced CRM features'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 200, url: 'https://www.g2.com/products/zeffy/reviews' }
    ],
    description: 'The only 100% free fundraising platform for nonprofits, helping organizations keep every dollar they raise.'
  },
  {
    id: 'archie',
    name: 'Archie',
    solutions: ['Space Management', 'Desk Booking', 'Visitor Management'],
    website: 'https://archieapp.co/',
    linkedin: 'https://www.linkedin.com/company/archieapp/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Archie stores workplace and visitor data securely in the cloud.'
    },
    pros: ['Beautiful and easy-to-use interface', 'Great for hybrid work management', 'Strong integrations with Slack and Teams'],
    cons: ['Focused primarily on workspace management', 'May be overkill for very small offices'],
    reviews: [],
    description: 'A modern space management platform that helps businesses manage desks, rooms, and visitors for a better hybrid work experience.'
  },
  {
    id: 'docebo',
    name: 'Docebo',
    solutions: ['Docebo Learn LMS', 'Docebo Shape', 'Docebo Content'],
    website: 'https://www.docebo.com/',
    linkedin: 'https://www.linkedin.com/company/docebo/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Docebo uses AWS for its global cloud infrastructure, offering localized data hosting for compliance.'
    },
    pros: ['Highly customizable learning platform', 'AI-powered content curation', 'Strong enterprise features'],
    cons: ['Steep learning curve for administrators', 'Pricing can be high for smaller organizations'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 500, url: 'https://www.g2.com/products/docebo/reviews' }
    ],
    description: 'A leading AI-powered learning management system (LMS) that helps organizations deliver personalized learning at scale.'
  },
  {
    id: 'missive',
    name: 'Missive',
    solutions: ['Shared Inbox', 'Team Collaboration', 'Email Management'],
    website: 'https://missiveapp.com/',
    linkedin: 'https://www.linkedin.com/company/missiveapp/',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Missive stores email and collaboration data securely on AWS infrastructure.'
    },
    pros: ['Excellent for team-based email management', 'Built-in chat and collaboration', 'Highly customizable with rules and integrations'],
    cons: ['Requires team adoption for full value', 'Mobile app can be slightly less feature-rich than desktop'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 100, url: 'https://www.g2.com/products/missive/reviews' }
    ],
    description: 'A collaborative email and shared inbox platform that helps teams manage communication and collaboration in one place.'
  },
  {
    id: 'kudos',
    name: 'Kudos',
    solutions: ['Employee Recognition', 'Rewards Platform', 'Culture Analytics'],
    website: 'https://www.kudos.com/',
    linkedin: 'https://www.linkedin.com/company/kudos/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Kudos stores employee recognition data securely in the cloud.'
    },
    pros: ['Focuses on values-based recognition', 'Easy to use for all employees', 'Strong analytics on company culture'],
    cons: ['Rewards catalog varies by region', 'May require ongoing internal promotion'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 1000, url: 'https://www.g2.com/products/kudos/reviews' }
    ],
    description: 'An employee recognition and rewards platform designed to help organizations build a positive culture and improve engagement.'
  },
  {
    id: 'loopio',
    name: 'Loopio',
    solutions: ['RFP Response Software', 'Proposal Management', 'Knowledge Management'],
    website: 'https://loopio.com/',
    linkedin: 'https://www.linkedin.com/company/loopio/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.AI],
    industries: [Industry.TECH, Industry.PROFESSIONAL_SERVICES, Industry.FINANCE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Loopio stores RFP and knowledge base data securely on AWS infrastructure.'
    },
    pros: ['Significantly speeds up RFP responses', 'Centralized knowledge management', 'Excellent collaboration tools'],
    cons: ['Requires effort to maintain the knowledge library', 'Pricing is enterprise-focused'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 500, url: 'https://www.g2.com/products/loopio/reviews' }
    ],
    description: 'A leading RFP response software that helps teams collaborate and respond to proposals more efficiently.'
  },
  {
    id: 'partnerstack',
    name: 'PartnerStack',
    solutions: ['Partner Relationship Management (PRM)', 'Affiliate Marketing', 'Referral Management'],
    website: 'https://partnerstack.com/',
    linkedin: 'https://www.linkedin.com/company/partnerstack/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.MAR],
    industries: [Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'PartnerStack stores partner and transaction data securely in the cloud.'
    },
    pros: ['Specifically built for B2B SaaS partnerships', 'Automates partner payouts', 'Large network of active partners'],
    cons: ['Can be expensive for early-stage startups', 'Focused primarily on SaaS'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 600, url: 'https://www.g2.com/products/partnerstack/reviews' }
    ],
    description: 'A partner ecosystem platform that helps SaaS companies recruit, manage, and scale their partnership programs.'
  },
  {
    id: 'procurify',
    name: 'Procurify',
    solutions: ['Spend Management', 'Procure-to-Pay', 'Purchasing Workflows'],
    website: 'https://www.procurify.com/',
    linkedin: 'https://www.linkedin.com/company/procurify/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ERP],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH, Industry.MANUFACTURING],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Procurify stores purchasing and spend data securely on AWS infrastructure.'
    },
    pros: ['User-friendly interface for non-finance staff', 'Real-time spend visibility', 'Strong mobile approvals'],
    cons: ['May require integration effort with some ERPs', 'Best suited for mid-market organizations'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 300, url: 'https://www.g2.com/products/procurify/reviews' }
    ],
    description: 'A spend management platform that helps organizations gain control over their purchasing and procurement processes.'
  },
  {
    id: 'guusto',
    name: 'Guusto',
    solutions: ['Employee Recognition', 'Customer Rewards', 'Gift Card Platform'],
    website: 'https://guusto.com/',
    linkedin: 'https://www.linkedin.com/company/guusto/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.MAR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Guusto stores reward and recognition data securely in the cloud.'
    },
    pros: ['Simple and flexible rewards (gift cards)', 'No monthly fees for basic recognition', 'Social impact (one day of clean water for every gift)'],
    cons: ['Primarily focused on gift card rewards', 'Less focus on deep culture analytics than some competitors'],
    reviews: [
      { platform: 'G2', rating: 4.9, count: 2000, url: 'https://www.g2.com/products/guusto/reviews' }
    ],
    description: 'An employee recognition and rewards platform that makes it easy to send digital gift cards and build a culture of appreciation.'
  },
  {
    id: 'velixo',
    name: 'Velixo',
    solutions: ['Excel Reporting', 'Budgeting & Planning', 'ERP Automation'],
    website: 'https://www.velixo.com/',
    linkedin: 'https://www.linkedin.com/company/velixo/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ERP],
    industries: [Industry.CROSS_INDUSTRY, Industry.CONSTRUCTION, Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Velixo connects directly to ERP APIs and processes data within Excel, ensuring data security and integrity.'
    },
    pros: ['Seamless Excel integration with ERPs', 'Real-time reporting and budgeting', 'Easy to use for finance professionals'],
    cons: ['Requires specific ERPs (Acumatica, Sage Intacct, etc.)', 'Excel-based (may not suit teams looking for pure web reporting)'],
    reviews: [
      { platform: 'G2', rating: 4.9, count: 100, url: 'https://www.g2.com/products/velixo/reviews' }
    ],
    description: 'An Excel-based reporting and budgeting solution that connects directly to cloud ERPs for real-time data analysis.'
  },
  {
    id: 'mediavalet',
    name: 'MediaValet',
    solutions: ['Digital Asset Management (DAM)', 'Creative Workflow', 'Video Management'],
    website: 'https://www.mediavalet.com/',
    linkedin: 'https://www.linkedin.com/company/mediavalet/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.RETAIL, Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global (Azure Regions)',
      providers: ['Microsoft Azure'],
      details: 'MediaValet is built exclusively on Microsoft Azure, providing enterprise-grade security and global scalability.'
    },
    pros: ['Unlimited users and support', 'Strong AI-powered tagging and search', 'Excellent security and compliance features'],
    cons: ['Enterprise-focused pricing', 'Implementation can take time for large asset libraries'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 200, url: 'https://www.g2.com/products/mediavalet/reviews' }
    ],
    description: 'A leading enterprise digital asset management (DAM) platform that helps organizations manage and share their digital content securely.'
  },
  {
    id: 'busplanner',
    name: 'BusPlanner',
    solutions: ['Core Route Planning', 'GPS+ Platform', 'Online Portals', 'Fleet Management'],
    website: 'https://busplanner.com/',
    linkedin: 'https://www.linkedin.com/company/busplanner/',
    headquarters: {
      city: 'Oakville',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LOG, SoftwareType.SCM],
    industries: [Industry.EDUCATION, Industry.LOGISTICS],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'BusPlanner provides secure, Canadian-hosted solutions for school districts and transportation consortia.'
    },
    pros: ['Specialized for student transportation', 'Powerful route optimization', 'Integrated GPS and fleet tracking'],
    cons: ['Niche focus on education sector', 'Implementation requires significant data preparation'],
    reviews: [],
    description: 'A comprehensive student transportation management platform that helps school districts optimize routes and improve safety.'
  },
  {
    id: 'jesta-is',
    name: 'Jesta I.S.',
    solutions: ['Retail Management Suite', 'Supply Chain Management Suite', 'Vision Suite 360'],
    website: 'https://www.jestais.com/',
    linkedin: 'https://www.linkedin.com/company/jesta-is/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.SCM, SoftwareType.CRM],
    industries: [Industry.RETAIL, Industry.MANUFACTURING],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Private Cloud'],
      details: 'Jesta I.S. offers cloud and on-premise deployment options with a focus on retail and supply chain security.'
    },
    pros: ['End-to-end retail and supply chain integration', 'Strong merchandising and inventory features', 'Scalable for global brands'],
    cons: ['Complex enterprise implementation', 'User interface can feel dense due to deep functionality'],
    reviews: [
      { platform: 'G2', rating: 4.0, count: 50, url: 'https://www.g2.com/products/jesta-i-s-vision-suite/reviews' }
    ],
    description: 'An enterprise software provider specializing in end-to-end solutions for retail, manufacturing, and distribution.'
  },
  {
    id: 'nutrasoft',
    name: 'NutraSoft',
    solutions: ['Food Manufacturing ERP', 'Nutrition Analysis & Labeling', 'Inventory Management'],
    website: 'https://www.nutrasoft.ca/en/',
    linkedin: 'https://www.linkedin.com/company/nutrasoft/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.SCM],
    industries: [Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'NutraSoft is a cloud-based solution tailored for the food and beverage industry with Canadian data residency.'
    },
    pros: ['Built-in nutrition analysis and labeling', 'Strong traceability for food safety', 'Modular and customizable'],
    cons: ['Specifically for food/beverage manufacturing', 'Smaller ecosystem compared to general ERPs'],
    reviews: [],
    description: 'A specialized ERP solution for food and beverage manufacturers, focusing on inventory, production, and compliance.'
  },
  {
    id: 'tuio',
    name: 'Tuio',
    solutions: ['Tuio Pay', 'Tuio Fundraising', 'Tuio Enrollment'],
    website: 'https://tuiopay.com/',
    linkedin: 'https://www.linkedin.com/company/tuiopay/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    industries: [Industry.EDUCATION, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Tuio ensures secure payment processing and data storage within Canada for schools and nonprofits.'
    },
    pros: ['Simplified billing for schools', 'Automated tuition collection', 'Integrated fundraising tools'],
    cons: ['Niche focus on educational and nonprofit sectors', 'Transaction fees apply'],
    reviews: [],
    description: 'An all-in-one payment and management platform for schools, childcare centers, and nonprofit organizations.'
  },
  {
    id: 'agencyanalytics',
    name: 'AgencyAnalytics',
    solutions: ['Automated Reporting', 'Marketing Dashboards', 'SEO Tools'],
    website: 'https://agencyanalytics.com/',
    linkedin: 'https://www.linkedin.com/company/agencyanalytics/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'AgencyAnalytics stores marketing data and client reports securely in the cloud.'
    },
    pros: ['Automates tedious client reporting', 'Wide range of marketing integrations', 'White-labeling capabilities'],
    cons: ['Can become expensive as client count grows', 'Some integrations are deeper than others'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 700, url: 'https://www.g2.com/products/agencyanalytics/reviews' }
    ],
    description: 'A reporting platform built specifically for marketing agencies to automate client reports and dashboards.'
  },
  {
    id: 'practice-better',
    name: 'Practice Better',
    solutions: ['EHR & Practice Management', 'Client Portal', 'Telehealth'],
    website: 'https://practicebetter.io/',
    linkedin: 'https://www.linkedin.com/company/practice-better/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Practice Better is PHIPA and HIPAA compliant, with data residency options for Canadian practitioners.'
    },
    pros: ['Comprehensive wellness practice management', 'Excellent client engagement tools', 'Strong mobile app'],
    cons: ['Focused on wellness/nutrition rather than general medicine', 'Steep learning curve for all features'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 100, url: 'https://www.g2.com/products/practice-better/reviews' }
    ],
    description: 'An all-in-one practice management platform for health and wellness professionals to manage their business and clients.',
    pricing: {
      plans: [
        {
          name: 'Sprout',
          price: '$0/month',
          features: ['Up to 3 clients', 'Unlimited charting', 'Unlimited scheduling', 'Client portal']
        },
        {
          name: 'Starter',
          price: '$25/month',
          features: ['Up to 10 clients', 'Telehealth (1:1)', 'Invoicing & payments', 'Forms & waivers']
        },
        {
          name: 'Professional',
          price: '$59/month',
          features: ['Unlimited clients', 'Group telehealth', 'Automations', 'Custom branding']
        },
        {
          name: 'Plus',
          price: '$89/month',
          features: ['Everything in Professional', 'Programs & courses', 'Advanced reporting', 'Priority support']
        }
      ],
      details: 'Practice Better also offers a Team plan for $145/month. Prices are for monthly billing; annual billing offers a discount.',
      url: 'https://practicebetter.io/pricing/'
    }
  },
  {
    id: 'inflow-inventory',
    name: 'inFlow Inventory',
    solutions: ['Inventory Management', 'Order Management', 'B2B Showroom'],
    website: 'https://www.inflowinventory.com/',
    linkedin: 'https://www.linkedin.com/company/archon-systems-inc-/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.ERP],
    industries: [Industry.RETAIL, Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'inFlow Inventory (by Archon Systems) stores inventory and sales data securely in the cloud.'
    },
    pros: ['Very user-friendly for small businesses', 'Comprehensive inventory tracking', 'Strong mobile and barcode support'],
    cons: ['Limited advanced manufacturing features', 'Pricing can jump for larger teams'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 300, url: 'https://www.g2.com/products/inflow-inventory/reviews' }
    ],
    description: 'A powerful inventory management system that helps small and mid-sized businesses track stock, manage orders, and generate reports.'
  },
  {
    id: 'autoleap',
    name: 'AutoLeap',
    solutions: ['Auto Repair Shop Software', 'Customer Communication', 'Scheduling'],
    website: 'https://autoleap.com/',
    linkedin: 'https://www.linkedin.com/company/autoleap/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.ITS],
    industries: [Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'AutoLeap stores shop management data securely in the cloud.'
    },
    pros: ['Streamlines shop operations', 'Excellent customer communication tools', 'Strong reporting and analytics'],
    cons: ['Niche focus on auto repair industry', 'Requires significant shop-wide adoption'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 200, url: 'https://www.g2.com/products/autoleap/reviews' }
    ],
    description: 'A cloud-based shop management software that helps auto repair shops improve efficiency and customer satisfaction.'
  },
  {
    id: 'wellnessliving',
    name: 'WellnessLiving',
    solutions: ['Business Management Software', 'Booking & Scheduling', 'Marketing Suite'],
    website: 'https://www.wellnessliving.com/',
    linkedin: 'https://www.linkedin.com/company/wellnessliving/',
    headquarters: {
      city: 'Richmond Hill',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE, Industry.RETAIL],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'WellnessLiving stores business and client data securely, with a focus on fitness and wellness compliance.'
    },
    pros: ['All-in-one suite for fitness businesses', 'Competitive pricing compared to major rivals', 'Strong mobile app for staff and clients'],
    cons: ['Large feature set can be overwhelming', 'Customer support wait times can vary'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 500, url: 'https://www.g2.com/products/wellnessliving/reviews' }
    ],
    description: 'A business management platform for the fitness, wellness, and beauty industries, offering scheduling, payments, and marketing.',
    pricing: {
      plans: [
        {
          name: 'Basic',
          price: '$89/month',
          features: ['Scheduling', 'Point of Sale', 'Client management', 'Basic reporting']
        },
        {
          name: 'Essential',
          price: '$159/month',
          features: ['Everything in Basic', 'Marketing suite', 'Waitlist management', 'Customizable apps']
        },
        {
          name: 'Advanced',
          price: '$259/month',
          features: ['Everything in Essential', 'Advanced reporting', 'Loyalty program', 'Enterprise features']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Multi-location management', 'Dedicated account manager', 'Custom integrations', 'White-label solutions']
        }
      ],
      details: 'Prices are for annual billing. Monthly billing is available at a higher rate. WellnessLiving often offers promotional discounts.',
      url: 'https://www.wellnessliving.com/pricing/'
    }
  },
  {
    id: 'orchestry',
    name: 'Orchestry',
    solutions: ['M365 Governance', 'Teams & SharePoint Automation', 'Workspace Provisioning'],
    website: 'https://www.orchestry.com/',
    linkedin: 'https://www.linkedin.com/company/orchestry/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Orchestry integrates directly with Microsoft 365, ensuring data remains within the customer’s tenant or secure cloud.'
    },
    pros: ['Simplifies Microsoft 365 governance', 'Automates workspace creation', 'Improves user adoption of Teams and SharePoint'],
    cons: ['Requires Microsoft 365 ecosystem', 'Best suited for organizations with complex M365 environments'],
    reviews: [],
    description: 'A management and automation tool for Microsoft 365 that helps IT teams control sprawl and improve governance.',
    pricing: {
      details: 'Pricing is based on the number of users and specific governance needs. Contact for a custom quote.',
      url: 'https://www.orchestry.com/pricing/'
    }
  },
  {
    id: 'spinify',
    name: 'Spinify',
    solutions: ['Sales Gamification', 'Leaderboards', 'AI Coaching'],
    website: 'https://spinify.com/',
    linkedin: 'https://www.linkedin.com/company/spinify/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.HR],
    industries: [Industry.TECH, Industry.FINANCE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Spinify stores performance and gamification data securely in the cloud.'
    },
    pros: ['Highly engaging for sales teams', 'Strong visual leaderboards', 'AI-driven coaching insights'],
    cons: ['Requires active CRM data to be effective', 'Can be seen as "too much" for some corporate cultures'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 300, url: 'https://www.g2.com/products/spinify/reviews' }
    ],
    description: 'A sales gamification platform that uses leaderboards and AI to motivate teams and improve performance.',
    pricing: {
      details: 'Offers Business, Enterprise, and Real Estate specific plans. Pricing is custom based on team size and requirements.',
      url: 'https://spinify.com/pricing/'
    }
  },
  {
    id: 'employment-hero-ca',
    name: 'Employment Hero CA',
    solutions: ['HR Software', 'Payroll', 'Recruitment'],
    website: 'https://employmenthero.com/en-ca/',
    linkedin: 'https://www.linkedin.com/company/employment-hero/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.FIN],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Employment Hero CA (formerly Humi) maintains Canadian data residency for HR and payroll compliance.'
    },
    pros: ['All-in-one HR and payroll', 'Built specifically for Canadian compliance', 'User-friendly employee portal'],
    cons: ['Transition from Humi is ongoing', 'Best suited for SMBs rather than large enterprises'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 200, url: 'https://www.g2.com/products/employment-hero/reviews' }
    ],
    description: 'An all-in-one HR, payroll, and benefits platform designed for Canadian small and medium-sized businesses.',
    pricing: {
      plans: [
        { name: 'HR Standard', price: 'Contact Sales', features: ['Paperless onboarding', 'Time off management', 'HR document library', 'Applicant tracking'] },
        { name: 'HR Premium', price: 'Contact Sales', features: ['Performance reviews', 'Expense management', 'Custom reporting', 'Learning management system'] },
        { name: 'HR Platinum', price: 'Contact Sales', features: ['Goal setting (OKRs)', '1:1s', '360 degree reviews', 'Single sign-on'] }
      ],
      details: 'Pricing is typically per employee per month. Payroll and Managed Payroll are available as add-ons.',
      url: 'https://employmenthero.com/en-ca/pricing/'
    }
  },
  {
    id: 'fellow-app',
    name: 'Fellow',
    solutions: ['AI Meeting Assistant', 'Meeting Notes', 'Action Items'],
    website: 'https://fellow.ai/',
    linkedin: 'https://www.linkedin.com/company/fellowapp/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Fellow stores meeting data and notes securely in the cloud with enterprise-grade security.'
    },
    pros: ['Excellent for meeting productivity', 'Seamless integration with calendars and task managers', 'AI-powered summaries and action items'],
    cons: ['Requires team-wide adoption for maximum benefit', 'Can be another tool to manage in a busy stack'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 1500, url: 'https://www.g2.com/products/fellow/reviews' }
    ],
    description: 'An AI meeting assistant and notetaker that helps teams have more productive meetings and stay organized.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['5 AI notes (lifetime) / user', '5 AI recordings (lifetime) / user', 'AI meeting summary', 'AI meeting transcription', 'Google Meet, Zoom, MS Teams, Slack integration']
        },
        {
          name: 'Team',
          price: '$7/user/month',
          features: ['10 AI notes / user / month', '10 AI recordings / user', 'Meeting automations', 'Project management integrations', 'Confluence and Notion integrations', 'API access']
        },
        {
          name: 'Business',
          price: '$15/user/month',
          features: ['Unlimited AI notes', 'Unlimited AI recordings', 'Sales AI recap templates', 'Org-wide meeting templates', 'Advanced CRM integration', 'Keyword tracking']
        },
        {
          name: 'Enterprise',
          price: '$25/user/month',
          features: ['Starts at 10 users', 'Advanced recording permissions', 'Domain control', 'User provisioning', 'Security and legal reviews', 'Org-wide meeting analytics']
        }
      ],
      details: 'Prices are per user / month billed annually. Monthly billing options are available for Team ($11) and Business ($23) plans.',
      url: 'https://fellow.app/pricing/'
    }
  },
  {
    id: 'voiceflow',
    name: 'Voiceflow',
    solutions: ['AI Agent Builder', 'Conversation Design', 'Omnichannel Deployment'],
    website: 'https://www.voiceflow.com/',
    linkedin: 'https://www.linkedin.com/company/voiceflow/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.TECH, Industry.RETAIL, Industry.FINANCE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Voiceflow provides a secure, enterprise-grade platform for building and deploying AI agents.'
    },
    pros: ['Industry-leading conversation design tools', 'Collaborative environment for teams', 'Supports complex logic and integrations'],
    cons: ['Steep learning curve for advanced features', 'Pricing can scale quickly for high-volume agents'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 100, url: 'https://www.g2.com/products/voiceflow/reviews' }
    ],
    description: 'A collaborative platform for teams to design, prototype, and build powerful AI agents for any channel.',
    pricing: {
      plans: [
        {
          name: 'Sandbox',
          price: '$0',
          features: ['2 projects', 'Unlimited collaborators', 'Basic AI features', 'Knowledge base']
        },
        {
          name: 'Pro',
          price: '$50/editor/month',
          features: ['Unlimited projects', 'Advanced AI features', 'Custom variables', 'Priority support']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['SSO & SAML', 'Dedicated support', 'Custom training', 'Enterprise-grade security']
        }
      ],
      details: 'Voiceflow also offers a Team plan for larger organizations. Usage-based costs may apply for AI tokens.',
      url: 'https://www.voiceflow.com/pricing'
    }
  },
  {
    id: 'certn',
    name: 'Certn',
    solutions: ['Background Checks', 'Identity Verification', 'Credit Checks'],
    website: 'https://certn.co/',
    linkedin: 'https://www.linkedin.com/company/certn/',
    headquarters: {
      city: 'Victoria',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.SEC],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Certn maintains strict compliance with privacy laws and stores sensitive background check data securely.'
    },
    pros: ['Fast turnaround times', 'User-friendly candidate experience', 'Excellent API for integrations'],
    cons: ['Pricing varies by check type and region', 'Some international checks can take longer'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 500, url: 'https://www.g2.com/products/certn/reviews' }
    ],
    description: 'A modern background check platform that provides fast, reliable, and compliant screening for global organizations.',
    pricing: {
      plans: [
        {
          name: 'Pay-per-check',
          price: 'Varies',
          features: ['Criminal record checks', 'Identity verification', 'Education verification', 'Employment verification']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Volume discounts', 'Custom workflows', 'Dedicated account manager', 'ATS integrations']
        }
      ],
      details: 'Certn uses a pay-per-check model where costs depend on the type and region of the check. Contact their sales team for enterprise volume pricing.',
      url: 'https://certn.co/pricing/'
    }
  },
  {
    id: 'facilityos',
    name: 'FacilityOS',
    solutions: ['Visitor Management', 'Facility Compliance', 'Asset Management'],
    website: 'https://www.facilityos.com/',
    linkedin: 'https://www.linkedin.com/company/facilityos/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    industries: [Industry.MANUFACTURING, Industry.HEALTHCARE, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'FacilityOS stores visitor and facility data securely in the cloud, with a focus on regulatory compliance.'
    },
    pros: ['Comprehensive visitor and contractor management', 'Strong focus on safety and compliance', 'Scalable for enterprise facilities'],
    cons: ['May be complex for single-office locations', 'Requires hardware for physical check-ins'],
    reviews: [],
    description: 'An AI-powered facility and visitor management platform designed for organizations with strict compliance and security standards.',
    pricing: {
      plans: [
        {
          name: 'VisitorOS',
          price: 'Contact Sales',
          features: ['Corporate, Enhanced, and Enterprise plans', 'Visitor management & compliance', 'Evacuation & emergency management']
        },
        {
          name: 'ContractorOS',
          price: 'Contact Sales',
          features: ['Essentials and Advanced plans', 'Contractor compliance & onboarding', 'Safety training & tracking']
        },
        {
          name: 'LogisticsOS',
          price: 'Contact Sales',
          features: ['Mail & Parcel, Inventory, and Asset Logistics plans', 'Total control of movement inside facility']
        },
        {
          name: 'SecurityOS',
          price: 'Contact Sales',
          features: ['Access Control Integration', 'FacilityOS Hardware options']
        }
      ],
      details: 'FacilityOS offers modular pricing based on the specific solutions required. Contact their sales team for a custom quote based on your facility needs.',
      url: 'https://www.facilityos.com/pricing'
    }
  },
  {
    id: 'dentalrx',
    name: 'DentalRx',
    solutions: ['Dental Practice Growth', 'Clinical Resources', 'Patient Engagement'],
    website: 'https://dentalrx.ca/',
    linkedin: 'https://www.linkedin.com/company/dentalrx/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.MAR],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'DentalRx stores practice and patient engagement data securely in the cloud.'
    },
    pros: ['Specifically designed for dental clinics', 'Combines clinical resources with marketing', 'Helps clinics stand out in a competitive market'],
    cons: ['Niche focus on dentistry', 'Smaller feature set compared to general health platforms'],
    reviews: [],
    description: 'A digital dentistry platform that helps dental practices grow through clinical resources and marketing solutions.',
    pricing: {
      plans: [
        { name: 'DentalRx App', price: 'Free', features: ['Treatment Guidelines', 'Drug Monographs', 'Dose Calculators', 'Prescribing Support'] },
        { name: 'DentalRx Growth', price: 'Custom', features: ['Dental Websites', 'SEO Marketing', 'Automations', 'AI Integrations'] }
      ],
      details: 'The clinical app is free for all dental professionals. Practice growth services are custom-priced based on clinic needs.',
      url: 'https://dentalrx.ca/'
    }
  },
  {
    id: 'botpress',
    name: 'Botpress',
    solutions: ['AI Agent Platform', 'Chatbot Builder', 'LLM Orchestration'],
    website: 'https://botpress.com/',
    linkedin: 'https://www.linkedin.com/company/botpress/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Botpress provides the infrastructure for building and running AI agents in production.'
    },
    pros: ['Developer-first approach', 'Highly extensible and customizable', 'Large community and ecosystem'],
    cons: ['Requires technical expertise to fully leverage', 'Cloud pricing can scale with usage'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 100, url: 'https://www.g2.com/products/botpress/reviews' }
    ],
    description: 'An open-source and cloud platform for building powerful AI agents and chatbots with an intuitive developer experience.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0',
          features: ['5 bots', '100 messages/month', 'Community support', 'Standard features']
        },
        {
          name: 'Team',
          price: '$495/month',
          features: ['Unlimited bots', '10,000 messages/month', 'Priority support', 'Advanced analytics']
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: ['Unlimited messages', 'Dedicated infrastructure', 'SLA & Support', 'Custom integrations']
        }
      ],
      details: 'Botpress also offers an open-source version. Cloud usage is billed based on the number of messages and active users.',
      url: 'https://botpress.com/pricing'
    }
  },
  {
    id: 'braindate',
    name: 'Braindate',
    solutions: ['Peer Learning Platform', 'Event Networking', 'Knowledge Sharing'],
    website: 'https://www.braindate.com/',
    linkedin: 'https://www.linkedin.com/company/e180/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    industries: [Industry.EDUCATION, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Braindate (by e180) stores user and conversation data securely in the cloud.'
    },
    pros: ['Unique approach to event networking', 'Facilitates high-value peer learning', 'Excellent for building community at large events'],
    cons: ['Primarily event-based rather than ongoing', 'Requires participant engagement to be successful'],
    reviews: [],
    description: 'A peer-learning platform that transforms event networking into meaningful, topic-based conversations.',
    pricing: {
      details: 'Custom pricing based on event size, duration, and specific community engagement needs.',
      url: 'https://www.braindate.com/'
    }
  },
  {
    id: 'property-control',
    name: 'Property Control',
    solutions: ['Condo Management', 'HOA Management', 'Security & Concierge'],
    website: 'https://propertycontrol.com/',
    linkedin: 'https://www.linkedin.com/company/property-control/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.ITS],
    industries: [Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Property Control stores community and management data securely in the cloud.'
    },
    pros: ['All-in-one solution for condo and HOA boards', 'Strong security and concierge modules', 'Resident-centric design'],
    cons: ['Niche focus on residential property management', 'May require training for older board members'],
    reviews: [],
    description: 'An operating system for property management firms and communities, focusing on efficiency and resident experience.',
    pricing: {
      details: 'Custom pricing based on the number of units and specific management modules required.',
      url: 'https://propertycontrol.com/'
    }
  },
  {
    id: 'truecontext',
    name: 'TrueContext',
    solutions: ['Mobile Forms', 'Field Service Workflows', 'Data Collection'],
    website: 'https://truecontext.com/',
    linkedin: 'https://www.linkedin.com/company/truecontext/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.CROSS_INDUSTRY, Industry.ENERGY, Industry.CONSTRUCTION],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Azure'],
      details: 'TrueContext (formerly ProntoForms) maintains high security standards for field data collection.'
    },
    pros: ['Powerful mobile form builder', 'Excellent for complex field service workflows', 'Strong offline capabilities'],
    cons: ['Can be complex to set up initially', 'Pricing is enterprise-focused'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 200, url: 'https://www.g2.com/products/truecontext/reviews' }
    ],
    description: 'A field service workflow platform that helps connected workers collect data and automate processes in any environment.',
    pricing: {
      plans: [
        { name: 'Digital', price: 'Starting at $4,800/year', features: ['Low-code form builder', 'Job dispatching', 'Automated reporting', 'Live support'] },
        { name: 'Intelligent', price: 'Custom', features: ['Everything in Digital', 'ServiceNow connector', 'SSO', 'Advanced repeatable sections'] },
        { name: 'Elite', price: 'Custom', features: ['Everything in Intelligent', 'Data history', 'Multi-language support', 'AI features'] }
      ],
      url: 'https://truecontext.com/pricing/'
    }
  },
  {
    id: 'zayzoon',
    name: 'ZayZoon',
    solutions: ['Earned Wage Access', 'Financial Wellness', 'Employee Perks'],
    website: 'https://www.zayzoon.com/',
    linkedin: 'https://www.linkedin.com/company/zayzoon/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'ZayZoon stores employee and payroll data securely, complying with financial regulations.'
    },
    pros: ['Improves employee financial wellness', 'No cost to the employer', 'Fast activation and integration'],
    cons: ['Employees pay a small fee per transaction', 'Limited to earned wages'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 100, url: 'https://www.g2.com/products/zayzoon/reviews' }
    ],
    description: 'A financial wellness platform that provides employees with on-demand access to their earned wages.',
    pricing: {
      details: 'Free for employers to implement. Employees typically pay a small flat fee (e.g., $5) per transaction for instant access to their wages.',
      url: 'https://www.zayzoon.com/'
    }
  },
  {
    id: 'paystone',
    name: 'Paystone',
    solutions: ['Payment Processing', 'Gift Cards', 'Loyalty Programs'],
    website: 'https://www.paystone.com/',
    linkedin: 'https://www.linkedin.com/company/paystone/',
    headquarters: {
      city: 'London',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    industries: [Industry.RETAIL, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Paystone ensures secure payment processing and data storage within Canada.'
    },
    pros: ['Transparent pricing and no contracts', 'Next-day deposits', 'Integrated loyalty and gift card features'],
    cons: ['Primarily focused on the Canadian market', 'Hardware costs for in-person terminals'],
    reviews: [],
    description: 'A leading payment processor in Canada that offers integrated solutions for payments, loyalty, and gift cards.',
    pricing: {
      details: 'Offers transparent pricing with no long-term contracts. Rates typically start around 1.49% + $0.05 for credit card processing.',
      url: 'https://www.paystone.com/pricing'
    }
  },
  {
    id: 'castr',
    name: 'Castr',
    solutions: ['Live Streaming', 'Video Hosting', 'Multistreaming'],
    website: 'https://castr.com/',
    linkedin: 'https://www.linkedin.com/company/castr-live-streaming/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Akamai'],
      details: 'Castr uses global CDNs to deliver high-quality video content with low latency.'
    },
    pros: ['Easy to use for live events', 'Supports multistreaming to 30+ platforms', 'Cost-effective video hosting'],
    cons: ['Advanced features require higher plans', 'Bandwidth limits on some tiers'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 50, url: 'https://www.g2.com/products/castr/reviews' }
    ],
    description: 'A live video streaming and hosting platform that provides enterprise-grade infrastructure for creators and businesses.',
    pricing: {
      plans: [
        { name: 'Starter', price: '$19.99/mo', features: ['2 Concurrent Streams', '5 Destinations', 'No Castr Branding', '24/7 Support'] },
        { name: 'Standard', price: '$49.99/mo', features: ['5 Concurrent Streams', 'Unlimited Destinations', 'Cloud Recording', 'Custom RTMP'] },
        { name: 'Premium', price: '$199.99/mo', features: ['10 Concurrent Streams', 'Pre-recorded Streaming', 'API Access', 'Priority Support'] }
      ],
      details: 'Save up to 20% with annual billing. Custom plans available for high-bandwidth needs.',
      url: 'https://castr.com/pricing/'
    }
  },
  {
    id: 'visier',
    name: 'Visier',
    solutions: ['Workforce Intelligence', 'People Analytics', 'Workforce Planning'],
    website: 'https://www.visier.com/',
    linkedin: 'https://www.linkedin.com/company/visier-analytics/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Visier stores workforce data securely, providing deep insights while maintaining strict privacy controls.'
    },
    pros: ['Industry leader in people analytics', 'Powerful predictive insights', 'Comprehensive workforce planning tools'],
    cons: ['Enterprise-focused pricing', 'Requires high-quality HR data to be effective'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 300, url: 'https://www.g2.com/products/visier-people/reviews' }
    ],
    description: 'A workforce intelligence platform that helps organizations make better people decisions through data and AI.',
    pricing: {
      details: 'Enterprise-grade pricing based on the number of employees and specific analytics modules required. Contact for a custom quote.',
      url: 'https://www.visier.com/'
    }
  },
  {
    id: 'brickeye',
    name: 'Brickeye',
    solutions: ['Job Site Risk Mitigation', 'Loss Control', 'Water Mitigation'],
    website: 'https://www.brickeye.com/',
    linkedin: 'https://www.linkedin.com/company/brickeye/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.CONSTRUCTION, Industry.FINANCE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Brickeye provides secure, cloud-based risk management solutions for major construction projects.'
    },
    pros: ['Specialized for construction risk', 'Reduces insurance claims and job site losses', 'Real-time monitoring and alerts'],
    cons: ['Requires hardware sensors for full benefit', 'Niche focus on risk and productivity'],
    reviews: [],
    description: 'A construction technology company that helps owners and contractors reduce risk and protect margins through IoT and AI.',
    pricing: {
      details: 'Project-based pricing depending on site size, duration, and the number of sensors/loss controls deployed.',
      url: 'https://brickeye.com/'
    }
  },
  {
    id: 'genetec',
    name: 'Genetec',
    solutions: ['Security Center', 'Omnicast', 'Synergis'],
    website: 'https://www.genetec.com/',
    linkedin: 'https://www.linkedin.com/company/genetec/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT, Industry.LOGISTICS],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure', 'Private Cloud'],
      details: 'Genetec offers unified physical security solutions with flexible cloud and on-premise storage options.'
    },
    pros: ['Global leader in unified security', 'Highly scalable for enterprise and city-wide deployments', 'Strong focus on privacy and cybersecurity'],
    cons: ['Complex enterprise-grade system', 'Requires certified partners for implementation'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 50, url: 'https://www.g2.com/products/genetec-security-center/reviews' }
    ],
    description: 'A global leader in unified physical security, public safety, and business intelligence software.',
    pricing: {
      details: 'Subscription and license-based pricing depending on the number of cameras, doors, and specific security modules.',
      url: 'https://www.genetec.com/'
    }
  },
  {
    id: 'jana-corporation',
    name: 'JANA Corporation',
    solutions: ['Asset Risk Management', 'Pipeline Risk Modeling', 'Data Management'],
    website: 'https://www.janacorporation.com/',
    linkedin: 'https://www.linkedin.com/company/jana-corporation/',
    headquarters: {
      city: 'Aurora',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.ENERGY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'JANA provides specialized risk modeling software for gas pipeline operators with high security standards.'
    },
    pros: ['Deep expertise in pipeline risk', 'Defensible and predictive risk models', 'Helps ensure regulatory compliance'],
    cons: ['Highly specialized for the gas industry', 'Requires significant domain data'],
    reviews: [],
    description: 'A technology company that empowers gas pipeline operators to reliably predict and manage system risk.',
    pricing: {
      details: 'Custom enterprise pricing based on pipeline network size and specific risk management requirements.',
      url: 'https://janacorporation.com/'
    }
  },
  {
    id: 'vosyn',
    name: 'Vosyn',
    solutions: ['AI Voice Localization', 'Multilingual Content Experience', 'Communication Barriers'],
    website: 'https://vosyn.ai/',
    linkedin: 'https://www.linkedin.com/company/vosyn/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.TECH, Industry.RETAIL, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Vosyn uses AI to localize content and break communication barriers globally.'
    },
    pros: ['Innovative AI voice technology', 'Scalable localization for enterprises', 'Improves global content experience'],
    cons: ['Emerging technology in a competitive space', 'AI voice quality can vary by language'],
    reviews: [],
    description: 'An AI technology company focused on breaking communication barriers through advanced voice localization and content experiences.',
    pricing: {
      details: 'Custom pricing based on processing volume, number of languages, and integration requirements.',
      url: 'https://vosyn.ai/'
    }
  },
  {
    id: 'circle-cvi',
    name: 'Circle Cardiovascular Imaging',
    solutions: ['cvi42', 'AI Plaque Analysis', 'Neurovascular Imaging'],
    website: 'https://www.circlecvi.com/',
    linkedin: 'https://www.linkedin.com/company/circle-cardiovascular-imaging-inc-/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Private Cloud'],
      details: 'Circle CVI provides AI-driven cardiovascular imaging solutions trusted by leading clinical institutions.'
    },
    pros: ['Global leader in cardiac MRI/CT software', 'AI-powered diagnostic precision', 'Trusted by top medical institutions'],
    cons: ['Highly specialized clinical tool', 'Requires integration with hospital PACS/DICOM systems'],
    reviews: [],
    description: 'A developer of advanced cardiovascular imaging software that enhances diagnosis and clinical workflows through AI.',
    pricing: {
      details: 'License-based pricing for clinical and research institutions. Contact for a custom quote.',
      url: 'https://www.circlecvi.com/'
    }
  },
  {
    id: 'ghgsat',
    name: 'GHGSat',
    solutions: ['Satellite Methane Monitoring', 'Airborne Monitoring', 'Emissions Intelligence'],
    website: 'https://www.ghgsat.com/en/',
    linkedin: 'https://www.linkedin.com/company/ghgsat-inc-/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.ENERGY, Industry.GOVERNMENT, Industry.MANUFACTURING],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'GHGSat provides high-resolution greenhouse gas monitoring data from space and airborne platforms.'
    },
    pros: ['Unique high-resolution satellite monitoring', 'Helps organizations meet ESG and climate goals', 'Global coverage for methane detection'],
    cons: ['Data-intensive and specialized', 'Requires expertise to interpret emissions intelligence'],
    reviews: [],
    description: 'A global leader in high-resolution greenhouse gas monitoring from space, providing actionable emissions intelligence.',
    pricing: {
      details: 'Data subscription and project-based pricing for satellite monitoring and emissions reporting.',
      url: 'https://www.ghgsat.com/'
    }
  },
  {
    id: 'cadmakers',
    name: 'CadMakers',
    solutions: ['Digital Construction Twins', 'Production Tracking', 'Digital Fabrication'],
    website: 'https://www.cadmakers.com/',
    linkedin: 'https://www.linkedin.com/company/cadmakers/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.ITS],
    industries: [Industry.CONSTRUCTION, Industry.MANUFACTURING],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'CadMakers provides digital twin technology for complex construction and manufacturing projects.'
    },
    pros: ['Advanced digital twin capabilities', 'Improves collaboration and project predictability', 'Strong focus on complex fabrication'],
    cons: ['Best suited for large, complex projects', 'Requires high-quality 3D data input'],
    reviews: [],
    description: 'A construction technology company that helps builders plan, collaborate, and ship better projects through digital twins.',
    pricing: {
      details: 'Project-based pricing for VDC services and software licensing for digital twin platforms.',
      url: 'https://www.cadmakers.com/'
    }
  },
  {
    id: 'durable',
    name: 'Durable',
    solutions: ['AI Website Builder', 'AI Marketing', 'AI CRM'],
    website: 'https://durable.com/',
    linkedin: 'https://www.linkedin.com/company/durable-ai/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.MAR, SoftwareType.CRM],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Durable provides an all-in-one AI platform for small businesses to launch and grow.'
    },
    pros: ['Extremely fast website generation', 'All-in-one suite for small businesses', 'User-friendly for non-technical users'],
    cons: ['Limited customization compared to full-featured CMS', 'Best for simple service-based businesses'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 100, url: 'https://www.g2.com/products/durable/reviews' }
    ],
    description: 'The world’s fastest AI website builder and small business software platform.',
    pricing: {
      plans: [
        { name: 'Free', price: '$0', features: ['Subdomain', 'Basic AI chat', 'Basic CRM', '5 AI images/mo'] },
        { name: 'Launch', price: '$25/mo', features: ['Custom domain', 'Remove branding', '1,000 AI chat messages', '50 AI images/mo'] },
        { name: 'Grow', price: '$99/mo', features: ['Unlimited AI chat', '500 AI images/mo', 'Expert onboarding', 'Priority support'] }
      ],
      details: 'Save 15% on yearly plans. Launch starts at $22/mo and Grow at $85/mo when billed annually.',
      url: 'https://durable.co/pricing'
    }
  },
  {
    id: 'soti',
    name: 'SOTI',
    solutions: ['SOTI ONE Platform', 'SOTI MobiControl', 'SOTI XSight'],
    website: 'https://soti.net/',
    linkedin: 'https://www.linkedin.com/company/soti/',
    headquarters: {
      city: 'Mississauga',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    industries: [Industry.CROSS_INDUSTRY, Industry.LOGISTICS, Industry.RETAIL],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Azure', 'Private Cloud'],
      details: 'SOTI provides enterprise mobility management solutions with flexible cloud and on-premise hosting.'
    },
    pros: ['Global leader in mobile device management (MDM)', 'Comprehensive suite for managing rugged and mobile devices', 'Strong diagnostic and remote support tools'],
    cons: ['Enterprise-focused pricing', 'Can be complex to configure for smaller fleets'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 150, url: 'https://www.g2.com/products/soti-mobicontrol/reviews' }
    ],
    description: 'A global leader in mobile device management and IoT solutions, helping businesses manage their mobile operations.',
    pricing: {
      details: 'Typically priced per device per month (e.g., ~$4/device). Contact for specific enterprise volume pricing.',
      url: 'https://www.soti.net/'
    }
  },
  {
    id: 'averna',
    name: 'Averna',
    solutions: ['Smart Test & Measurement', 'Machine Vision', 'Automated Handling'],
    website: 'https://www.averna.com/en/home',
    linkedin: 'https://www.linkedin.com/company/averna/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.PM],
    industries: [Industry.MANUFACTURING, Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Averna provides specialized test engineering and quality assurance solutions for multi-sector developers.'
    },
    pros: ['Deep expertise in automated testing', 'Custom-built solutions for complex products', 'Global presence with local support'],
    cons: ['Highly specialized engineering services', 'Project-based rather than pure SaaS'],
    reviews: [],
    description: 'A strategic partner for automated test and quality assurance solutions, serving multi-sector product developers.'
  },
  {
    id: 'xtract-one',
    name: 'Xtract One',
    solutions: ['SmartGateway', 'Xtract One View', 'Security Screening'],
    website: 'https://xtractone.com/',
    linkedin: 'https://www.linkedin.com/company/xtractone/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT, Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Xtract One (formerly Liberty Defense) provides AI-powered security screening and weapons detection.'
    },
    pros: ['Frictionless security screening', 'AI-powered threat detection', 'Improves patron experience at venues'],
    cons: ['Requires physical hardware installation', 'Best suited for high-traffic venues'],
    reviews: [],
    description: 'A technology company that provides AI-powered weapons detection and security screening solutions.'
  },
  {
    id: 'hiive',
    name: 'Hiive',
    solutions: ['Pre-IPO Stock Marketplace', 'Private Market Liquidity', 'Transparency Tools'],
    website: 'https://www.hiive.com/',
    linkedin: 'https://www.linkedin.com/company/hiive-markets/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.FIN],
    industries: [Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Hiive provides a secure marketplace for buying and selling shares in VC-backed private companies.'
    },
    pros: ['Direct access to private markets', 'Transparent pricing for pre-IPO stock', 'Automated transaction workflows'],
    cons: ['Limited to accredited investors', 'Market liquidity depends on participant volume'],
    reviews: [],
    description: 'A marketplace for private stock that enables shareholders and investors to trade shares in VC-backed companies.'
  },
  {
    id: 'onelocal',
    name: 'OneLocal',
    solutions: ['LocalVis', 'LocalReviews', 'LocalSEO'],
    website: 'https://www.onelocal.com/',
    linkedin: 'https://www.linkedin.com/company/onelocal/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.PROFESSIONAL_SERVICES, Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'OneLocal provides an all-in-one marketing platform for local businesses to grow their online presence.'
    },
    pros: ['Tailored for local service businesses', 'Combines technology with marketing expertise', 'Improves online visibility and reviews'],
    cons: ['Focused on local rather than national/global brands', 'Requires ongoing engagement for best results'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 50, url: 'https://www.g2.com/products/onelocal/reviews' }
    ],
    description: 'A digital marketing platform that helps local businesses grow through automated tools and expert support.',
    pricing: {
      details: 'Custom pricing based on selected marketing tools and business size.',
      url: 'https://www.onelocal.com/'
    }
  },
  {
    id: 'assistiq',
    name: 'AssistIQ',
    solutions: ['Surgical Supply Capture', 'Inventory Optimization', 'Billing Accuracy'],
    website: 'https://www.assistiq.ai/',
    linkedin: 'https://www.linkedin.com/company/assistiq/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'AssistIQ uses computer vision to automate supply documentation in operating rooms, ensuring HIPAA and SOC 2 compliance.'
    },
    pros: ['Automates manual documentation for nurses', 'Improves hospital billing accuracy', 'Reduces surgical supply waste'],
    cons: ['Requires camera installation in ORs', 'Niche focus on surgical environments'],
    reviews: [],
    description: 'An AI-powered computer vision platform that captures surgical supplies and implants in real time for hospitals.'
  },
  {
    id: 'lendesk',
    name: 'Lendesk',
    solutions: ['Finmo', 'Gateway', 'Lender Spotlight'],
    website: 'https://www.lendesk.com/',
    linkedin: 'https://www.linkedin.com/company/lendesk/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ITS],
    industries: [Industry.FINANCE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Lendesk provides a secure platform for mortgage brokers and lenders to manage applications and products.'
    },
    pros: ['Streamlines the mortgage application process', 'Strong integration with Canadian lenders', 'User-friendly interface for brokers'],
    cons: ['Focused specifically on the Canadian mortgage industry', 'Requires adoption by both brokers and lenders'],
    reviews: [],
    description: 'A mortgage technology platform that connects brokers and lenders to deliver a seamless mortgage experience.'
  },
  {
    id: 'akaraisin',
    name: 'akaraisin',
    solutions: ['raisin Online Fundraising', 'Peer-to-Peer Fundraising', 'Donation Management'],
    website: 'https://www.akaraisin.com/',
    linkedin: 'https://www.linkedin.com/company/akaraisin/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'akaraisin provides secure, Canadian-hosted fundraising solutions for nonprofits and charities.'
    },
    pros: ['Specialized for nonprofit missions', 'Strong peer-to-peer fundraising features', 'Integrated ticketing and donations'],
    cons: ['Niche focus on the nonprofit sector', 'User interface can feel traditional compared to newer startups'],
    reviews: [],
    description: 'An online fundraising platform that empowers nonprofits to raise more money through peer-to-peer, donations, and events.'
  },
  {
    id: 'mediaclip',
    name: 'Mediaclip',
    solutions: ['Mediaclip Hub', 'Mediaclip Designer', 'Product Personalization'],
    website: 'https://www.mediaclip.ca/',
    linkedin: 'https://www.linkedin.com/company/mediaclip/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.MAR],
    industries: [Industry.RETAIL, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Mediaclip provides white-label product personalization platforms with ISO/IEC 27001:2022 certification.'
    },
    pros: ['Leader in product personalization', 'Seamless eCommerce integration', 'Robust cybersecurity protocols'],
    cons: ['Best for high-volume personalized merchandise', 'Requires integration with existing eCommerce stacks'],
    reviews: [],
    description: 'A white-label online product personalization platform that empowers eCommerce production of customized merchandise.'
  },
  {
    id: 'knak',
    name: 'Knak',
    solutions: ['Email Builder', 'Landing Page Builder', 'Knak Enterprise'],
    website: 'https://knak.com/',
    linkedin: 'https://www.linkedin.com/company/knak/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Knak provides a no-code campaign creation platform for enterprise marketing teams.'
    },
    pros: ['No-code email and landing page creation', 'Seamless integration with marketing automation platforms', 'Ensures brand consistency across teams'],
    cons: ['Enterprise-focused pricing', 'Best suited for teams using major marketing automation tools'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 200, url: 'https://www.g2.com/products/knak/reviews' }
    ],
    description: 'A no-code email and landing page creation platform built for enterprise marketing teams.',
    pricing: {
      details: 'Enterprise subscription pricing based on user count and integrations. Contact for a quote.',
      url: 'https://knak.com/pricing/'
    }
  },
  {
    id: 'dabadu',
    name: 'Dabadu',
    solutions: ['Automotive CRM', 'Lead Management', 'XRM'],
    website: 'https://www.dabadu.ai/',
    linkedin: 'https://www.linkedin.com/company/dabadu-ai/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.AI],
    industries: [Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Dabadu provides an AI-powered CRM specifically designed for the automotive industry.'
    },
    pros: ['Tailored for automotive dealerships', 'AI-powered lead management and generation', 'OEM certified solutions'],
    cons: ['Niche focus on the automotive sector', 'Requires dealership-wide adoption'],
    reviews: [],
    description: 'An AI-powered automotive CRM and lead management platform that supercharges dealership customer management.',
    pricing: {
      details: 'Subscription-based pricing for dealerships. Contact for a quote.',
      url: 'https://dabadu.ai/'
    }
  },
  {
    id: 'qohash',
    name: 'Qohash',
    solutions: ['Qostodian', 'Data Security Monitoring', 'AI Search'],
    website: 'https://qohash.com/',
    linkedin: 'https://www.linkedin.com/company/qohash/',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    industries: [Industry.FINANCE, Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Private Cloud'],
      details: 'Qohash provides a zero-copy data security platform that tracks and secures high-risk files.'
    },
    pros: ['Zero-copy architecture for data security', 'Real-time monitoring of sensitive data', 'Accelerates safe GenAI adoption'],
    cons: ['Enterprise-focused security solution', 'Requires integration with complex data environments'],
    reviews: [],
    description: 'A data security company that helps organizations track and secure high-risk files to reduce oversharing.',
    pricing: {
      details: 'Enterprise pricing based on data volume and user count. Contact for a quote.',
      url: 'https://qohash.com/'
    }
  },
  {
    id: 'lmi-technologies',
    name: 'LMI Technologies',
    solutions: ['Gocator 3D Smart Sensors', 'FocalSpec Sensors', '3D Inspection'],
    website: 'https://lmi3d.com/',
    linkedin: 'https://www.linkedin.com/company/lmi-technologies/',
    headquarters: {
      city: 'Burnaby',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.MANUFACTURING, Industry.TECH],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['Private Cloud'],
      details: 'LMI Technologies provides 3D scanning and inspection solutions for industrial automation.'
    },
    pros: ['Global leader in 3D scanning and inspection', 'High-precision industrial sensors', 'Strong focus on automated quality control'],
    cons: ['Hardware-intensive solutions', 'Requires technical expertise for industrial integration'],
    reviews: [],
    description: 'A global leader in 3D scanning and inspection, providing high-performance sensors for industrial automation.',
    pricing: {
      details: 'Project-based and hardware pricing. Contact for specific quotes.',
      url: 'https://lmi3d.com/'
    }
  },
  {
    id: 'creyos',
    name: 'Creyos',
    solutions: ['Creyos Health', 'Cognitive Assessment', 'Behavioral Health Questionnaires'],
    website: 'https://creyos.com/',
    linkedin: 'https://www.linkedin.com/company/creyos/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Creyos provides a scientifically validated platform for digital cognitive and behavioral health assessment.'
    },
    pros: ['Scientifically validated cognitive tasks', 'Seamless clinical implementation', 'Improves detection and patient outcomes'],
    cons: ['Niche focus on cognitive and behavioral health', 'Requires clinical oversight for interpretation'],
    reviews: [],
    description: 'A digital cognitive assessment platform that helps healthcare providers detect and document brain health.',
    pricing: {
      details: 'Subscription-based pricing for clinics and research institutions. Contact for a quote.',
      url: 'https://creyos.com/'
    }
  },
  {
    id: 'pressreader',
    name: 'PressReader',
    solutions: ['PressReader for Libraries', 'PressReader for Businesses', 'Digital Publishing'],
    website: 'https://about.pressreader.com/',
    linkedin: 'https://www.linkedin.com/company/pressreader/',
    headquarters: {
      city: 'Richmond',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.EDUCATION, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Private Cloud'],
      details: 'PressReader provides access to thousands of digital newspapers and magazines globally.'
    },
    pros: ['Massive library of global publications', 'Excellent experience for readers across devices', 'Seamless adoption for libraries and businesses'],
    cons: ['Subscription-based model for full access', 'Content availability depends on publisher agreements'],
    reviews: [],
    description: 'A digital newsstand that connects audiences to thousands of newspapers and magazines from around the world.',
    pricing: {
      details: 'Subscription-based for individuals; enterprise licensing for businesses (hotels, libraries, airlines).',
      url: 'https://www.pressreader.com/about/business'
    }
  },
  {
    id: 'answerable',
    name: 'Answerable',
    solutions: ['Expert Chat Interfaces', 'Research Indexing', 'Conversational AI'],
    website: 'https://www.answerable.tech/',
    linkedin: 'https://www.linkedin.com/company/answerable-tech/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.EDUCATION, Industry.GOVERNMENT, Industry.TECH],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Answerable transforms static research reports into instant, verified expert chat interfaces.'
    },
    pros: ['Eliminates hallucinations with verified data', 'Makes research reports interactive and accessible', 'Provides analytics on user queries'],
    cons: ['Best for organizations with large libraries of static reports', 'Requires high-quality source material'],
    reviews: [],
    description: 'An AI platform that makes knowledge conversational by transforming research into expert chat interfaces.',
    pricing: {
      details: 'Subscription-based pricing for brands. Contact for a quote.',
      url: 'https://answerable.io/'
    }
  },
  {
    id: 'blackline-safety',
    name: 'Blackline Safety',
    solutions: ['G8 Connected Wearable', 'Blackline Live', 'Gas Detection'],
    website: 'https://www.blacklinesafety.com/',
    linkedin: 'https://www.linkedin.com/company/blacklinesafety/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.ITS],
    industries: [Industry.ENERGY, Industry.MANUFACTURING, Industry.CONSTRUCTION],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Blackline Safety provides a truly connected safety platform with real-time monitoring and gas detection.'
    },
    pros: ['Global leader in connected safety wearables', 'Real-time monitoring and emergency response', 'Comprehensive gas detection capabilities'],
    cons: ['Hardware-dependent solution', 'Requires active monitoring for maximum safety impact'],
    reviews: [],
    description: 'A leader in connected safety technology, providing wearables and software for lone worker safety and gas detection.',
    pricing: {
      details: 'Subscription-based pricing for the Blackline Live platform, plus hardware costs for wearables.',
      url: 'https://www.blacklinesafety.com/'
    }
  },
  {
    id: 'quickcheckin',
    name: 'QuickCheckIn',
    solutions: ['Digital Waitlists', 'Two-way SMS Messaging', 'Table Management'],
    website: 'https://www.quickcheckin.ca/',
    linkedin: 'https://www.linkedin.com/company/quickcheckin/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.CRM],
    industries: [Industry.RETAIL],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'QuickCheckIn provides a modern digital waitlist and reservation system for restaurants.'
    },
    pros: ['Reduces walk-offs with real-time SMS', 'Simple and intuitive for restaurant hosts', 'Improves guest experience and table turnover'],
    cons: ['Niche focus on the restaurant industry', 'Requires reliable internet for SMS notifications'],
    reviews: [],
    description: 'A digital waitlist and reservation system that helps restaurants manage busy floors and communicate with guests.'
  },
  {
    id: 'checkmark-solutions',
    name: 'CheckMark Solutions',
    solutions: ['CheckMark Online Payroll', 'CheckMark MultiLedger', 'Accounting Software'],
    website: 'https://www.checkmarksolutions.ca/',
    linkedin: 'https://www.linkedin.com/company/checkmark-software-inc/',
    headquarters: {
      city: 'Edmonton',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'CheckMark provides simple and powerful payroll and accounting software for Canadian small businesses.'
    },
    pros: ['Affordable for small businesses', 'Supports unlimited employees and payroll runs', 'Simple and easy-to-use accounting tools'],
    cons: ['User interface is more traditional', 'Limited advanced enterprise features'],
    reviews: [],
    description: 'A provider of simple and powerful payroll and accounting software designed for small businesses and accountants.'
  },
  {
    id: 'simplesurvey',
    name: 'SimpleSurvey',
    solutions: ['Online Surveys & Forms', 'Secure Online Voting', 'Expert Services'],
    website: 'https://simplesurvey.com/',
    linkedin: 'https://www.linkedin.com/company/simplesurvey/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.MAR],
    industries: [Industry.GOVERNMENT, Industry.EDUCATION, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'SimpleSurvey ensures all data is stored securely in Canada, meeting strict regulatory requirements.'
    },
    pros: ['100% Canadian data residency', 'Enterprise-class survey and voting tools', 'Excellent bilingual support'],
    cons: ['Pricing can be higher than consumer-grade tools', 'Best for organizations with strict compliance needs'],
    reviews: [],
    description: 'An enterprise-class online survey and forms tool that provides secure data collection and analysis.',
    pricing: {
      plans: [
        { name: 'Basic', price: 'Free', features: ['Unlimited surveys', 'Basic reporting'] },
        { name: 'Pro', price: '$49/mo', features: ['Advanced logic', 'Custom branding', 'Data export'] },
        { name: 'Enterprise', price: 'Contact Sales', features: ['SSO', 'Dedicated support', 'Custom security'] }
      ],
      url: 'https://simplesurvey.com/pricing/'
    }
  },
  {
    id: 'canada-sds',
    name: 'Canada SDS',
    solutions: ['SDS Management Software', 'WHMIS Compliance', 'Safety Data Sheet Services'],
    website: 'https://www.canadasds.com/',
    linkedin: 'https://www.linkedin.com/company/canadasds/',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.ITS],
    industries: [Industry.MANUFACTURING, Industry.CONSTRUCTION, Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Canada SDS provides the #1 SDS software system in Canada for WHMIS and SDS compliance.'
    },
    pros: ['Specialized for Canadian WHMIS regulations', 'Simplifies safety data sheet management', 'Strong focus on workplace safety compliance'],
    cons: ['Niche focus on SDS and chemical safety', 'Requires regular updates to safety data sheets'],
    reviews: [],
    description: 'A leading provider of SDS management solutions that help organizations stay compliant with WHMIS and safety regulations.'
  },
  {
    id: 'canadian-cloud-backup',
    name: 'Canadian Cloud Backup',
    solutions: ['Backup & Data Recovery', 'DRaaS Solutions', 'Ransomware Protection'],
    website: 'https://canadiancloudbackup.com/',
    linkedin: 'https://www.linkedin.com/company/canadian-cloud-backup/',
    headquarters: {
      city: 'Kelowna',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Canadian Cloud Backup specializes in 100% Canadian backup and data recovery solutions.'
    },
    pros: ['100% Canadian data sovereignty', 'Protects against ransomware and hardware failure', 'Ideal for Managed Service Providers (MSPs)'],
    cons: ['Focused primarily on the Canadian market', 'Requires reliable bandwidth for cloud backups'],
    reviews: [],
    description: 'A specialized provider of backup and data recovery solutions with a focus on Canadian data sovereignty.'
  },
  {
    id: 'initus',
    name: 'Initus',
    solutions: ['InitusIO', 'InitusGPT', 'InitusMigrate', 'InitusIDP', 'InitusVault', 'InitusDecoder'],
    website: 'https://initus.io/',
    linkedin: 'https://www.linkedin.com/company/initus-io/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH, Industry.RETAIL],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Initus provides a suite of AI-powered integration and data management solutions.'
    },
    pros: ['Comprehensive integration suite', 'AI-powered tools for data migration and analysis', 'Tailored solutions for complex business processes'],
    cons: ['Boutique firm with niche focus', 'Best for specific ecosystem integrations (Salesforce, NetSuite)'],
    reviews: [],
    description: 'A technology company providing a suite of AI-powered integration, migration, and data management solutions for modern businesses.'
  },
  {
    id: 'sync-com',
    name: 'Sync.com',
    solutions: ['Secure Cloud Storage', 'File Sharing', 'Collaboration', 'Sync CloudFiles'],
    website: 'https://www.sync.com/',
    linkedin: 'https://www.linkedin.com/company/sync-com/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES, Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Sync.com ensures 100% Canadian data sovereignty with end-to-end encryption.'
    },
    pros: ['End-to-end encryption for all files', '100% Canadian data residency', 'HIPAA, PIPEDA, and GDPR compliance'],
    cons: ['Encryption can impact upload/download speeds', 'Fewer third-party integrations than mainstream competitors'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 100, url: 'https://www.g2.com/products/sync-com/reviews' }
    ],
    description: 'A privacy-focused cloud storage and collaboration platform that ensures 100% Canadian data sovereignty and end-to-end encryption.'
  },
  {
    id: 'sparrow-connected',
    name: 'Sparrow Connected',
    solutions: ['Internal Communications Platform', 'Omni-channel Messaging', 'Employee Engagement Analytics'],
    website: 'https://www.sparrowconnected.com/',
    linkedin: 'https://www.linkedin.com/company/sparrowconnected/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY, Industry.MANUFACTURING, Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Sparrow Connected natively integrates with Microsoft 365 to deliver secure internal communications.'
    },
    pros: ['Native Microsoft 365 integration', 'Omni-channel reach (mobile, email, intranet)', 'Powerful AI-powered communication analytics'],
    cons: ['Best for organizations already in the Microsoft ecosystem', 'Requires strategic planning for maximum engagement'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 20, url: 'https://www.g2.com/products/sparrow-connected/reviews' }
    ],
    description: 'An award-winning internal communications platform that helps organizations reach and engage their workforce through omni-channel messaging.'
  },
  {
    id: 'motive-telecom',
    name: 'Motive',
    solutions: ['Device Management', 'Service Automation', 'Entitlement Management', 'Impact Mobile/IoT'],
    website: 'https://motive.com/',
    linkedin: 'https://www.linkedin.com/company/motive-software/',
    headquarters: {
      city: 'Mississauga',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Azure'],
      details: 'Motive provides global device management solutions for major telecommunications operators.'
    },
    pros: ['Manages over 1 billion devices globally', 'Deep expertise in telecom service automation', 'Highly scalable enterprise infrastructure'],
    cons: ['Complex solutions targeted at large telecom operators', 'Not suitable for small business device management'],
    reviews: [],
    description: 'A global leader in telecom device management and service automation, part of the Canadian Lumine Group.'
  },
  {
    id: 'telepin',
    name: 'Telepin',
    solutions: ['Mobile Money Platform', 'e-Recharge', 'Converged Charging', 'Digital Wallet'],
    website: 'https://www.telepin.com/',
    linkedin: 'https://www.linkedin.com/company/telepin-software/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.ITS],
    industries: [Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['Private Cloud'],
      details: 'Telepin provides high-performance mobile transaction platforms for global network operators.'
    },
    pros: ['Award-winning mobile payment technology', 'Proven scalability with millions of users', 'Specialized for emerging market financial services'],
    cons: ['Niche focus on mobile network operators and financial institutions', 'Highly technical implementation'],
    reviews: [],
    description: 'A global pioneer in mobile transactions and e-recharge platforms, providing mobile money solutions for network operators.',
    pricing: {
      details: 'Enterprise licensing and transaction-based pricing. Contact for a quote.',
      url: 'https://www.telepin.com/'
    }
  },
  {
    id: 'incognito',
    name: 'Incognito Software Systems',
    solutions: ['Broadband Service Provisioning', 'TR-069/TR-369 Management', 'Network Analytics', 'IP Address Management'],
    website: 'https://www.incognito.com/',
    linkedin: 'https://www.linkedin.com/company/incognito-software/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Incognito provides broadband service orchestration and device management for telecom operators.'
    },
    pros: ['Comprehensive OSS suite for broadband management', 'Over 30 years of industry experience', 'Automates complex network operations'],
    cons: ['Highly specialized for telecom and broadband providers', 'Steep learning curve for complex configurations'],
    reviews: [],
    description: 'A provider of broadband service orchestration and device management solutions that help telecom operators automate their networks.'
  },
  {
    id: 'tecsys',
    name: 'Tecsys',
    solutions: ['Elite™ Enterprise', 'Elite™ Healthcare', 'Omni™ Retail', 'Warehouse Management (WMS)', 'Transportation Management (TMS)', 'Distribution ERP'],
    website: 'https://www.tecsys.com/',
    linkedin: 'https://www.linkedin.com/company/tecsys-inc/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.LOGISTICS, Industry.HEALTHCARE, Industry.RETAIL],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['Azure', 'Private Cloud'],
      details: 'Tecsys provides cloud-based supply chain solutions with a focus on high-volume distribution and healthcare.'
    },
    pros: ['Global leader in supply chain management', 'Specialized solutions for healthcare and complex distribution', 'End-to-end visibility across the supply chain'],
    cons: ['Enterprise-grade complexity', 'Requires significant implementation effort for full suite'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 40, url: 'https://www.g2.com/products/tecsys-elite-wms/reviews' }
    ],
    description: 'A global provider of supply chain management software that provides end-to-end visibility into all supply chain operations.',
    pricing: {
      details: 'Enterprise subscription and implementation pricing. Contact for a quote.',
      url: 'https://www.tecsys.com/'
    }
  },
  {
    id: 'binsentry',
    name: 'BinSentry',
    solutions: ['BinSentry Horizon', 'BinSentry Sensus'],
    website: 'https://www.binsentry.com',
    linkedin: 'https://www.linkedin.com/company/binsentry',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'BinSentry utilizes AWS for its IoT data processing and analytics platform.'
    },
    pros: ['IoT-driven accuracy', 'Optimizes feed supply chain', 'Reduces waste'],
    cons: ['Requires hardware installation', 'Focused on agriculture'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 5, url: 'https://www.g2.com/products/binsentry/reviews' }
    ],
    description: 'An agricultural technology company that provides feed management solutions using IoT sensors and AI to optimize supply chains for animal producers and feed mills.',
    pricing: {
      details: 'Subscription-based pricing per sensor. Contact for a quote.',
      url: 'https://binsentry.com/'
    }
  },
  {
    id: 'orennia',
    name: 'Orennia',
    solutions: ['Orennia Platform'],
    website: 'https://orennia.com',
    linkedin: 'https://www.linkedin.com/company/orennia',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.FIN],
    industries: [Industry.ENERGY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Orennia leverages AWS for its data-intensive energy transition analytics platform.'
    },
    pros: ['Deep energy sector insights', 'Comprehensive renewables data', 'Strong commercial intelligence'],
    cons: ['Niche focus on energy transition', 'Premium pricing for enterprise data'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.8, count: 20, url: 'https://www.linkedin.com/company/orennia' }
    ],
    description: 'A data and analytics platform for the energy transition, providing insights and commercial intelligence for renewable energy, storage, and decarbonization projects.',
    pricing: {
      details: 'Enterprise subscription pricing for data access and analytics. Contact for a quote.',
      url: 'https://orennia.com/'
    }
  },
  {
    id: 'coconut-software',
    name: 'Coconut Software',
    solutions: ['Appointment Scheduling', 'Queue Management', 'Lobby Leadership'],
    website: 'https://www.coconutsoftware.com',
    linkedin: 'https://www.linkedin.com/company/coconut-software',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.HR],
    industries: [Industry.FINANCE, Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Coconut Software offers data residency in Canada and the US, utilizing AWS for its secure engagement platform.'
    },
    pros: ['Specialized for financial services', 'Improves customer experience', 'Strong integration capabilities'],
    cons: ['Focused primarily on enterprise-level institutions', 'Can be complex to implement for smaller teams'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 50, url: 'https://www.g2.com/products/coconut-software/reviews' }
    ],
    description: 'A customer engagement platform for financial institutions, providing appointment scheduling and lobby management solutions to improve customer experience.'
  },
  {
    id: 'vantelis',
    name: 'Vantelis',
    solutions: ['Vantelis Platform'],
    website: 'https://vantelis.com',
    linkedin: 'https://www.linkedin.com/company/vantelis',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SCM, SoftwareType.LOG],
    industries: [Industry.LOGISTICS, Industry.RETAIL],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Vantelis operates its own secure infrastructure for transportation management.'
    },
    pros: ['Transportation optimization', 'Strong logistics expertise', 'Customizable solutions'],
    cons: ['Smaller vendor compared to global giants', 'Limited public reviews'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.5, count: 10, url: 'https://www.linkedin.com/company/vantelis' }
    ],
    description: 'A supply chain and logistics technology provider specializing in transportation management and optimization.'
  },
  {
    id: 'smile-digital-health',
    name: 'Smile Digital Health',
    solutions: ['Smile CDR', 'Health Data Platform'],
    website: 'https://www.smiledigitalhealth.com',
    linkedin: 'https://www.linkedin.com/company/smiledigitalhealth',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US, Global',
      providers: ['AWS', 'Microsoft Azure', 'Google Cloud'],
      details: 'Smile Digital Health is cloud-agnostic and supports major cloud providers for its FHIR-based health data platform.'
    },
    pros: ['FHIR standard leader', 'Scalable health data fabric', 'Strong interoperability'],
    cons: ['Requires deep technical knowledge of health standards', 'Complex implementation for legacy systems'],
    reviews: [
      { platform: 'Gartner', rating: 4.7, count: 15, url: 'https://www.gartner.com/reviews/market/health-data-management' }
    ],
    description: 'A health data fabric platform that enables organizations to manage and share health data using FHIR standards.'
  },
  {
    id: 'vantage',
    name: 'Vantage',
    solutions: ['Vantage Platform'],
    website: 'https://gotvantage.com',
    linkedin: 'https://www.linkedin.com/company/vantage-analytics',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.RETAIL, Industry.TECH],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Vantage uses AWS for its AI-powered marketing automation and analytics platform.'
    },
    pros: ['AI-driven marketing insights', 'Strong e-commerce integration', 'Scalable advertising tools'],
    cons: ['Requires significant ad spend to see full benefits', 'Focused primarily on e-commerce'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 30, url: 'https://www.g2.com/products/vantage/reviews' }
    ],
    description: 'An AI-powered marketing automation platform for e-commerce, helping brands scale their advertising and customer acquisition.'
  },
  {
    id: 'geocomply',
    name: 'GeoComply',
    solutions: ['IDComply', 'PinPoint', 'GeoGuard'],
    website: 'https://www.geocomply.com',
    linkedin: 'https://www.linkedin.com/company/geocomply',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.FIN],
    industries: [Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'GeoComply utilizes AWS for its global geolocation and fraud prevention infrastructure.'
    },
    pros: ['Global leader in geolocation', 'High accuracy and compliance', 'Strong fraud prevention'],
    cons: ['Highly specialized', 'Privacy concerns related to geolocation data'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 20, url: 'https://www.g2.com/products/geocomply/reviews' }
    ],
    description: 'A global leader in geolocation and fraud prevention solutions, ensuring compliance and security for online gaming, streaming, and financial services.'
  },
  {
    id: 'mosaic',
    name: 'Mosaic',
    solutions: ['Mosaic Resource Management'],
    website: 'https://getmosaic.ai',
    linkedin: 'https://www.linkedin.com/company/mosaic-ai',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.HR, SoftwareType.AI],
    industries: [Industry.PROFESSIONAL_SERVICES, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Mosaic is hosted on AWS, providing AI-powered resource management for professional services firms.'
    },
    pros: ['AI-powered resource planning', 'Improves workforce utilization', 'Strong project forecasting'],
    cons: ['Requires adoption across the entire firm', 'Implementation can be time-consuming'] ,
    reviews: [
      { platform: 'G2', rating: 4.8, count: 150, url: 'https://www.g2.com/products/mosaic-resource-management/reviews' }
    ],
    description: 'An AI-powered resource management and project planning platform that helps professional services firms optimize their workforce.'
  },
  {
    id: 'triparc',
    name: 'TripArc',
    solutions: ['ADX (Agent Digital Experience)'],
    website: 'https://www.trip-arc.com',
    linkedin: 'https://www.linkedin.com/company/trip-arc',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.FIN],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'TripArc utilizes AWS for its travel technology platform, managing complex bookings and commissions.'
    },
    pros: ['Comprehensive travel agency platform', 'Strong supplier network', 'Integrated commission management'],
    cons: ['Focused on travel agencies', 'Complex platform for smaller agencies'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.6, count: 50, url: 'https://www.linkedin.com/company/trip-arc' }
    ],
    description: 'A travel technology company providing a comprehensive platform for travel agencies to manage bookings, commissions, and supplier relationships.'
  },
  {
    id: 'foureyes-financial',
    name: 'FourEyes Financial',
    solutions: ['FourEyes Platform'],
    website: 'https://foureyes.financial',
    linkedin: 'https://www.linkedin.com/company/foureyes-financial',
    headquarters: {
      city: 'Charlottetown',
      province: Province.PE
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.SEC],
    industries: [Industry.FINANCE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'FourEyes Financial ensures Canadian data residency for its wealth management compliance platform.'
    },
    pros: ['Strong compliance focus', 'Advisor-centric design', 'Streamlines regulatory workflows'],
    cons: ['Niche focus on wealth management', 'Smaller vendor'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.7, count: 15, url: 'https://www.linkedin.com/company/foureyes-financial' }
    ],
    description: 'A wealth management technology provider focused on compliance and advisor productivity.',
    pricing: {
      details: 'SaaS-based pricing for financial institutions. Contact for a custom quote.',
      url: 'https://foureyes.financial/platform/'
    }
  },
  {
    id: 'ground-news',
    name: 'Ground News',
    solutions: ['Ground News App', 'Bias Checker'],
    website: 'https://ground.news',
    linkedin: 'https://www.linkedin.com/company/ground-news',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Ground News utilizes AWS for its AI-powered news analysis and comparison platform.'
    },
    pros: ['Unique media bias analysis', 'Promotes media literacy', 'Comprehensive news coverage'],
    cons: ['Subscription model for full features', 'AI analysis can sometimes be subjective'],
    reviews: [
      { platform: 'App Store', rating: 4.8, count: 10000, url: 'https://apps.apple.com/us/app/ground-news/id1324203419' }
    ],
    description: 'A news comparison platform that uses AI to analyze media bias and provide users with a broader perspective on global events.'
  },
  {
    id: 'molecular-you',
    name: 'Molecular You',
    solutions: ['Personalized Health Platform'],
    website: 'https://www.molecularyou.com',
    linkedin: 'https://www.linkedin.com/company/molecular-you',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Microsoft Azure'],
      details: 'Molecular You ensures strict Canadian data residency for its sensitive health and molecular data.'
    },
    pros: ['Data-driven health assessments', 'Personalized preventive plans', 'Advanced molecular analysis'],
    cons: ['Requires biological samples', 'Premium cost for comprehensive analysis'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.5, count: 20, url: 'https://www.linkedin.com/company/molecular-you' }
    ],
    description: 'A personalized health company that uses molecular data and AI to provide individuals with health assessments and preventive action plans.'
  },
  {
    id: 'powertech-labs',
    name: 'Powertech Labs',
    solutions: ['DSATools'],
    website: 'https://powertechlabs.com',
    linkedin: 'https://www.linkedin.com/company/powertech-labs-inc-',
    headquarters: {
      city: 'Surrey',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.ENERGY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['On-premise', 'Private Cloud'],
      details: 'Powertech Labs provides software that is typically deployed on-premise or in private clouds for utility security.'
    },
    pros: ['Industry standard for power system analysis', 'Highly accurate simulations', 'Used by major global utilities'],
    cons: ['Extremely technical and specialized', 'Steep learning curve'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.7, count: 100, url: 'https://www.linkedin.com/company/powertech-labs-inc-' }
    ],
    description: 'A provider of advanced power system analysis software used by utilities and grid operators worldwide for security assessment and planning.'
  },
  {
    id: 'laivly',
    name: 'Laivly',
    solutions: ['Laivly Platform'],
    website: 'https://laivly.com',
    linkedin: 'https://www.linkedin.com/company/laivly',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.CRM],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Laivly utilizes AWS for its attended automation platform for contact centers.'
    },
    pros: ['Enhances agent productivity', 'Attended automation focus', 'Improves customer experience'],
    cons: ['Requires integration with existing CRM/Support tools', 'Focused on large contact centers'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 10, url: 'https://www.g2.com/products/laivly/reviews' }
    ],
    description: 'An AI-powered automation platform for contact centers that enhances agent productivity and customer experience through attended automation.'
  },
  {
    id: 'trellis',
    name: 'Trellis',
    solutions: ['Trellis Fundraising Platform'],
    website: 'https://gotrellis.com',
    linkedin: 'https://www.linkedin.com/company/trellis-social-enterprise',
    headquarters: {
      city: 'Kelowna',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.MAR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Trellis is hosted on AWS with a focus on Canadian data residency for nonprofit fundraising.'
    },
    pros: ['All-in-one fundraising tools', 'User-friendly for nonprofits', 'Strong event management'],
    cons: ['Transaction fees on donations', 'Limited advanced CRM features'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 20, url: 'https://www.g2.com/products/trellis/reviews' }
    ],
    description: 'An all-in-one fundraising platform for nonprofits and charities to manage events, auctions, and donations.',
    pricing: {
      plans: [
        {
          name: 'Free',
          price: '$0/month',
          features: ['Unlimited tickets', 'Unlimited donations', 'Basic reporting', 'Standard support']
        },
        {
          name: 'Pro',
          price: '$149/month',
          features: ['Everything in Free', 'Advanced auctions', 'Custom branding', 'Priority support']
        }
      ],
      details: 'Trellis also charges a platform fee on transactions. The Pro plan offers lower transaction fees and more advanced features.',
      url: 'https://trellis.org/pricing'
    }
  },
  {
    id: 'bluecat-networks',
    name: 'BlueCat Networks',
    solutions: ['Integrity', 'BlueCat Gateway'],
    website: 'https://bluecatnetworks.com',
    linkedin: 'https://www.linkedin.com/company/bluecat-networks',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.ITS],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US, Global',
      providers: ['AWS', 'Microsoft Azure'],
      details: 'BlueCat provides cloud-native and hybrid DNS management solutions across major cloud providers.'
    },
    pros: ['Adaptive DNS management', 'Strong network security', 'Scalable for global enterprises'],
    cons: ['Complex network infrastructure required', 'Implementation requires specialized skills'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 100, url: 'https://www.g2.com/products/bluecat-networks/reviews' }
    ],
    description: 'A provider of Adaptive DNS solutions, helping organizations manage and secure their network infrastructure.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['DNS management', 'DHCP & IPAM', 'Network security', 'Automation & APIs', 'Global support']
        }
      ],
      details: 'BlueCat provides enterprise-grade DNS solutions with pricing based on network complexity and scale.',
      url: 'https://bluecatnetworks.com/'
    }
  },
  {
    id: 'hostpapa',
    name: 'HostPapa',
    solutions: ['Web Hosting', 'Domain Registration', 'Email Services'],
    website: 'https://www.hostpapa.ca',
    linkedin: 'https://www.linkedin.com/company/hostpapa',
    headquarters: {
      city: 'Burlington',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['Private Cloud'],
      details: 'HostPapa operates its own data centers in Canada and globally to provide web hosting services.'
    },
    pros: ['Canadian-owned and operated', 'Eco-friendly hosting', 'Great for small businesses'],
    cons: ['Renewal rates can be higher than introductory offers', 'Support wait times can vary'],
    reviews: [
      { platform: 'Trustpilot', rating: 4.1, count: 3000, url: 'https://www.trustpilot.com/review/www.hostpapa.com' }
    ],
    description: 'A Canadian web hosting company providing hosting, domain, and website building solutions for small businesses.',
    pricing: {
      plans: [
        {
          name: 'Start',
          price: '$2.95/month',
          features: ['1 website', '10GB SSD storage', 'Free domain (1st year)', 'Standard support']
        },
        {
          name: 'Plus',
          price: '$5.95/month',
          features: ['Unlimited websites', 'Unlimited SSD storage', 'Free domain (1st year)', 'Enhanced security']
        },
        {
          name: 'Pro',
          price: '$5.95/month',
          features: ['Everything in Plus', 'High performance', 'Automated backups', 'Priority support']
        }
      ],
      details: 'Prices are for 3-year terms. Monthly and annual billing are available at higher rates.',
      url: 'https://www.hostpapa.ca/web-hosting/'
    }
  },
  {
    id: 'd3-security',
    name: 'D3 Security',
    solutions: ['Smart SOAR', 'Morpheus'],
    website: 'https://d3security.com',
    linkedin: 'https://www.linkedin.com/company/d3-security-management-systems-inc-',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US, Global',
      providers: ['AWS', 'Microsoft Azure'],
      details: 'D3 Security offers cloud-based SOAR solutions with global deployment options.'
    },
    pros: ['Leading SOAR platform', 'Extensive integration library', 'Advanced automation capabilities'],
    cons: ['Requires significant security maturity', 'Complex setup for small SOC teams'],
    reviews: [
      { platform: 'Gartner', rating: 4.8, count: 40, url: 'https://www.gartner.com/reviews/market/security-orchestration-automation-and-response-solutions' }
    ],
    description: 'A leading provider of Security Orchestration, Automation, and Response (SOAR) solutions.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Smart SOAR', 'Incident response', 'Security automation', 'Extensive integrations', 'Advanced analytics']
        }
      ],
      details: 'D3 Security offers tailored pricing for its SOAR platform based on the number of integrations and scale of operations.',
      url: 'https://d3security.com/'
    }
  },
  {
    id: 'case-iq',
    name: 'Case IQ',
    solutions: ['Case IQ Platform'],
    website: 'https://www.caseiq.com',
    linkedin: 'https://www.linkedin.com/company/caseiq',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LEGAL, SoftwareType.SEC, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US, Europe',
      providers: ['AWS'],
      details: 'Case IQ utilizes AWS for its secure case management platform, ensuring compliance with global privacy standards.'
    },
    pros: ['Specialized for investigations', 'Strong compliance and audit trails', 'Highly configurable workflows'],
    cons: ['Focused on enterprise-level investigations', 'Implementation requires process mapping'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 60, url: 'https://www.g2.com/products/case-iq/reviews' }
    ],
    description: 'A case management software platform for investigations, helping organizations manage ethics, compliance, and HR cases.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Case management', 'Investigation workflows', 'Compliance reporting', 'Audit trails', 'Secure data storage']
        }
      ],
      details: 'Case IQ provides custom quotes based on the number of users and specific investigation modules required.',
      url: 'https://www.caseiq.com/'
    }
  },
  {
    id: 'veloce-pos',
    name: 'Veloce POS',
    solutions: ['Veloce POS', 'Veloce Backoffice', 'Veloce Mobile'],
    website: 'https://velocepos.com',
    linkedin: 'https://www.linkedin.com/company/veloce-pos',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.FIN],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Veloce POS is a Quebec leader in restaurant management, offering secure data storage in local data centers.'
    },
    pros: ['Highly customizable for Quebec regulations', 'Robust offline mode', 'Excellent local support'],
    cons: ['Interface can feel traditional', 'Primarily focused on the Quebec market'],
    reviews: [
      { platform: 'Google', rating: 4.5, count: 50, url: 'https://www.google.com/search?q=veloce+pos+reviews' }
    ],
    description: 'A leading Quebec-based POS system provider specializing in comprehensive restaurant and bar management solutions.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Restaurant POS', 'Bar management', 'Inventory control', 'Quebec SRM compliance', 'Local support']
        }
      ],
      details: 'Veloce POS offers tailored solutions for the hospitality industry. Contact them for a personalized quote.',
      url: 'https://velocepos.com/'
    }
  },
  {
    id: 'maitred',
    name: "Maitre'D by Posera",
    solutions: ["Maitre'D POS", "Maitre'D Back Office"],
    website: 'https://www.maitredpos.com',
    linkedin: 'https://www.linkedin.com/company/posera',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.FIN],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, US, Global',
      providers: ['Microsoft Azure'],
      details: "Maitre'D (by Posera) offers global deployment with data residency options to meet local compliance."
    },
    pros: ['Global presence', 'Extensive feature set', 'Strong enterprise reporting'],
    cons: ['Can be complex to configure', 'Legacy system feel in some modules'],
    reviews: [
      { platform: 'Capterra', rating: 4.2, count: 100, url: 'https://www.capterra.com/p/128344/Maitre-D-POS/' }
    ],
    description: 'A global provider of hospitality management systems, offering robust POS and back-office solutions for restaurants of all sizes.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Hospitality POS', 'Back-office management', 'Enterprise reporting', 'Global support', 'Integrated payments']
        }
      ],
      details: "Maitre'D provides enterprise-level hospitality solutions with custom pricing based on scale and requirements.",
      url: 'https://www.maitredpos.com/'
    }
  },
  {
    id: 'cluster-pos',
    name: 'Cluster POS',
    solutions: ['Cluster POS', 'Cluster Online Ordering'],
    website: 'https://clusterpos.com',
    linkedin: 'https://www.linkedin.com/company/cluster-pos',
    headquarters: {
      city: 'Laval',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.ECOM],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Cluster POS is a cloud-based system designed specifically for the Quebec restaurant market, ensuring full compliance with SRM requirements.'
    },
    pros: ['Modern cloud architecture', 'Seamless SRM integration', 'User-friendly interface'],
    cons: ['Newer player compared to legacy systems', 'Focused primarily on Quebec'],
    reviews: [
      { platform: 'Google', rating: 4.7, count: 30, url: 'https://www.google.com/search?q=cluster+pos+reviews' }
    ],
    description: 'A modern, cloud-based point-of-sale system designed to simplify restaurant operations while ensuring full regulatory compliance in Quebec.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Cloud POS', 'Online ordering', 'SRM integration', 'Quebec compliance', 'User-friendly interface']
        }
      ],
      details: 'Cluster POS offers modern cloud solutions for Quebec restaurants. Contact them for pricing details.',
      url: 'https://clusterpos.com/'
    }
  },
  {
    id: 'ueat',
    name: 'UEAT',
    solutions: ['UEAT Online Ordering', 'UEAT Kiosks'],
    website: 'https://ueat.io',
    linkedin: 'https://www.linkedin.com/company/ueat',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.AI],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'UEAT leverages AI to provide personalized ordering experiences, hosted on secure AWS infrastructure.'
    },
    pros: ['AI-powered upselling', 'Excellent user experience', 'Strong POS integrations'],
    cons: ['Focused on ordering rather than full POS', 'Premium pricing for advanced AI features'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 20, url: 'https://www.g2.com/products/ueat/reviews' }
    ],
    description: 'An AI-powered online ordering and self-serve kiosk platform that helps restaurants increase their average ticket size and improve operational efficiency.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Online ordering', 'Self-serve kiosks', 'AI-powered upselling', 'POS integrations', 'Analytics dashboard']
        }
      ],
      details: 'UEAT provides custom pricing for its AI-powered ordering solutions based on the number of locations and features.',
      url: 'https://ueat.io/'
    }
  },
  {
    id: 'koomi',
    name: 'Koomi',
    solutions: ['Koomi POS', 'Koomi Online'],
    website: 'https://koomi.com',
    linkedin: 'https://www.linkedin.com/company/koomi',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.ECOM],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Koomi is a cloud-based POS optimized for quick-service restaurants, with data stored securely in Canada.'
    },
    pros: ['Optimized for speed', 'Simple and intuitive', 'Strong mobile ordering'],
    cons: ['Not ideal for full-service fine dining', 'Limited advanced inventory features'],
    reviews: [
      { platform: 'Capterra', rating: 4.5, count: 40, url: 'https://www.capterra.com/p/154321/Koomi/' }
    ],
    description: 'A specialized POS system for quick-service restaurants and cafes, designed to handle high-volume line-ups and online orders with ease.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Quick-service POS', 'Online ordering', 'Mobile ordering', 'Speed-optimized interface', 'Basic inventory']
        }
      ],
      details: 'Koomi offers specialized solutions for quick-service establishments. Contact them for a personalized quote.',
      url: 'https://koomi.com/'
    }
  },
  {
    id: 'logivision',
    name: 'Logivision',
    solutions: ['L-POS', 'L-Boss'],
    website: 'https://logivision.com',
    linkedin: 'https://www.linkedin.com/company/logivision-retail-systems',
    headquarters: {
      city: 'Longueuil',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.FIN],
    industries: [Industry.HOSPITALITY, Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Logivision provides robust retail and restaurant software with a focus on high-speed transaction processing.'
    },
    pros: ['Extremely fast transaction processing', 'Highly reliable', 'Great for high-volume retail/food service'],
    cons: ['Interface feels dated', 'Steep learning curve for administrators'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.4, count: 15, url: 'https://www.linkedin.com/company/logivision-retail-systems' }
    ],
    description: 'A provider of high-performance point-of-sale software for the retail and food service industries, specialized in high-volume environments.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['L-POS', 'L-Boss', 'Inventory management', 'High-speed processing', 'Multi-store support']
        }
      ],
      details: 'Logivision provides specialized POS solutions for high-volume retail. Contact them for custom pricing based on your business needs.',
      url: 'https://logivision.com/'
    }
  },
  {
    id: 'azbar',
    name: 'Azbar',
    solutions: ['AzPOS', 'AzBar Control'],
    website: 'https://azbar-intl.com',
    linkedin: 'https://www.linkedin.com/company/azbar-inc-',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.ITS],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Azbar specializes in beverage control systems integrated with POS for bars and restaurants.'
    },
    pros: ['Industry leader in beverage control', 'Reduces shrinkage significantly', 'Integrated hardware/software'],
    cons: ['Hardware-heavy implementation', 'Niche focus on bars/beverage'],
    reviews: [
      { platform: 'Google', rating: 4.3, count: 25, url: 'https://www.google.com/search?q=azbar+reviews' }
    ],
    description: 'A specialized provider of beverage control and POS systems, helping bars and restaurants maximize profitability through precise inventory management.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['AzPOS', 'AzBar Control', 'Beverage inventory', 'Shrinkage reduction', 'Integrated hardware']
        }
      ],
      details: 'Azbar offers integrated hardware and software for beverage control. Pricing is custom based on the number of taps and POS stations.',
      url: 'https://azbar-intl.com/'
    }
  },
  {
    id: 'micro-s',
    name: 'Micro-S',
    solutions: ['Micro-S POS', 'Micro-S Management'],
    website: 'https://micro-s.com',
    linkedin: 'https://www.linkedin.com/company/micro-s-inc-',
    headquarters: {
      city: 'Saint-Eustache',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.POS, SoftwareType.FIN],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Micro-S has been providing restaurant management solutions in Quebec for over 30 years.'
    },
    pros: ['Long-standing reliability', 'Deep understanding of Quebec market', 'Personalized service'],
    cons: ['Limited global presence', 'Traditional software model'],
    reviews: [
      { platform: 'Facebook', rating: 4.6, count: 20, url: 'https://www.facebook.com/MicroSInc/reviews' }
    ],
    description: 'A veteran provider of restaurant management and POS solutions in Quebec, known for reliability and local expertise.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Micro-S POS', 'Management software', 'Local support', 'Quebec compliance', 'Reliable hardware']
        }
      ],
      details: 'Micro-S provides personalized POS solutions for the Quebec market. Contact them for a quote tailored to your restaurant.',
      url: 'https://micro-s.com/'
    }
  },
  {
    id: 'nimonik',
    name: 'Nimonik',
    solutions: ['Nimonik Compliance', 'Nimonik Audit'],
    website: 'https://nimonik.com/',
    linkedin: 'https://www.linkedin.com/company/nimonik',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.LEGAL],
    industries: [Industry.MANUFACTURING, Industry.ENERGY, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Nimonik provides compliance and audit software with data residency options in Canada and the US.'
    },
    pros: ['Comprehensive regulatory database', 'Strong audit workflows', 'Global compliance coverage'],
    cons: ['Requires significant initial setup', 'Interface can be complex for small teams'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 20, url: 'https://www.g2.com/products/nimonik/reviews' }
    ],
    description: 'A provider of environmental, health, safety, and quality (EHSQ) compliance and audit software.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Compliance management', 'Audit workflows', 'Regulatory database', 'Global coverage', 'Reporting & analytics']
        }
      ],
      details: 'Nimonik offers custom pricing for its compliance and audit platform based on the number of jurisdictions and users.',
      url: 'https://nimonik.com/'
    }
  },
  {
    id: 'global-relay',
    name: 'Global Relay',
    solutions: ['Global Relay Archive', 'Global Relay Message'],
    website: 'https://www.globalrelay.com/',
    linkedin: 'https://www.linkedin.com/company/global-relay',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.LEGAL, SoftwareType.FIN],
    industries: [Industry.FINANCE, Industry.GOVERNMENT],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada, Global',
      providers: ['Private Cloud'],
      details: 'Global Relay operates its own secure data centers to provide compliant archiving and messaging for highly regulated industries.'
    },
    pros: ['Industry leader in compliance archiving', 'Highly secure and reliable', 'Excellent for financial services'],
    cons: ['Premium pricing for enterprise features', 'Complex implementation for large organizations'],
    reviews: [
      { platform: 'G2', rating: 4.3, count: 100, url: 'https://www.g2.com/products/global-relay-archive/reviews' }
    ],
    description: 'A provider of cloud-based electronic message archiving, compliance, and messaging solutions for the financial services industry.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['Compliant archiving', 'Secure messaging', 'E-discovery', 'Compliance monitoring', 'Global data centers']
        }
      ],
      details: 'Global Relay provides enterprise-grade compliance solutions for regulated industries. Pricing is custom based on volume and features.',
      url: 'https://www.globalrelay.com/'
    }
  },
  {
    id: 'wave',
    name: 'Wave Financial',
    solutions: ['Wave Accounting', 'Wave Invoicing', 'Wave Payments'],
    website: 'https://www.waveapps.com/',
    linkedin: 'https://www.linkedin.com/company/wave-financial',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Wave utilizes AWS for its accounting and financial platform, ensuring secure access for small business owners.'
    },
    pros: ['Free accounting and invoicing software', 'User-friendly for non-accountants', 'Integrated payments and payroll'],
    cons: ['Limited features for larger businesses', 'Customer support can be slow for free users'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 1500, url: 'https://www.g2.com/products/wave-accounting/reviews' }
    ],
    description: 'A provider of financial software for small businesses, including accounting, invoicing, and payment processing.',
    pricing: {
      plans: [
        {
          name: 'Starter',
          price: '$0/month',
          features: ['Unlimited accounting', 'Unlimited invoicing', 'Bank connections', 'Receipt scanning']
        },
        {
          name: 'Pro',
          price: '$16/month',
          features: ['Everything in Starter', 'Automated transaction categorization', 'Unlimited receipt scanning', 'Advanced reports']
        },
        {
          name: 'Payroll',
          price: '$20/month + $6/employee',
          features: ['Direct deposit', 'Tax filings', 'Self-service employee portal', 'Year-end forms']
        }
      ],
      details: 'Wave is free for accounting and invoicing. They make money through payment processing and payroll services.',
      url: 'https://www.waveapps.com/pricing'
    }
  },
  {
    id: 'waterworth',
    name: 'Waterworth',
    solutions: ['Waterworth Rate Modeling'],
    website: 'https://www.waterworth.net/',
    linkedin: 'https://www.linkedin.com/company/waterworth',
    headquarters: {
      city: 'Victoria',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    industries: [Industry.GOVERNMENT],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Waterworth provides utility rate modeling software for municipalities, with data stored securely in Canada.'
    },
    pros: ['Specialized for municipal utility rates', 'Improves financial sustainability', 'Easy-to-use modeling tools'],
    cons: ['Niche focus on municipal utilities', 'Smaller vendor'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.8, count: 10, url: 'https://www.linkedin.com/company/waterworth' }
    ],
    description: 'A provider of financial sustainability and rate modeling software for municipal water, wastewater, and stormwater utilities.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Utility rate modeling', 'Financial sustainability planning', 'Scenario analysis', 'Municipal reporting', 'Expert support']
        }
      ],
      details: 'Waterworth offers specialized modeling software for municipalities. Contact them for pricing based on your utility size.',
      url: 'https://www.waterworth.net/'
    }
  },
  {
    id: 'sprypoint',
    name: 'SpryPoint',
    solutions: ['SpryMobile', 'SpryCIS', 'SpryEngage'],
    website: 'https://www.sprypoint.com/',
    linkedin: 'https://www.linkedin.com/company/sprypoint',
    headquarters: {
      city: 'Charlottetown',
      province: Province.PE
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.CRM, SoftwareType.FIN],
    industries: [Industry.ENERGY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'SpryPoint provides cloud-based utility software solutions with data residency options in Canada and the US.'
    },
    pros: ['Modern cloud platform for utilities', 'Strong focus on customer engagement', 'Integrated mobile workforce management'],
    cons: ['Highly specialized for the utility sector', 'Implementation requires significant process mapping'],
    reviews: [
      { platform: 'LinkedIn', rating: 4.7, count: 30, url: 'https://www.linkedin.com/company/sprypoint' }
    ],
    description: 'A provider of cloud-based smart utility software solutions, including billing, customer engagement, and mobile workforce management.',
    pricing: {
      plans: [
        {
          name: 'Custom',
          price: 'Contact Sales',
          features: ['Utility billing (CIS)', 'Customer engagement', 'Mobile workforce management', 'Asset management', 'Cloud-native platform']
        }
      ],
      details: 'SpryPoint provides modern cloud solutions for utilities. Pricing is custom based on the number of meters and modules.',
      url: 'https://www.sprypoint.com/'
    }
  },
  {
    id: 'auvik',
    name: 'Auvik',
    solutions: ['Auvik Network Management', 'Auvik SaaS Management'],
    website: 'https://www.auvik.com/',
    linkedin: 'https://www.linkedin.com/company/auvik-networks-inc-',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    industries: [Industry.TECH, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US, Global',
      providers: ['AWS'],
      details: 'Auvik utilizes AWS for its cloud-based network management platform, providing visibility and automation for IT teams.'
    },
    pros: ['Automated network discovery and mapping', 'Real-time network monitoring', 'Strong focus on security and visibility'],
    cons: ['Requires network access for discovery', 'Pricing can be high for large networks'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 200, url: 'https://www.g2.com/products/auvik/reviews' }
    ],
    description: 'A provider of cloud-based network management and SaaS management software for IT teams.',
    pricing: {
      plans: [
        {
          name: 'Essentials',
          price: 'Contact Sales',
          features: ['Network monitoring & alerting', 'Automated network discovery', 'Network mapping & inventory', 'Unlimited users & sites']
        },
        {
          name: 'Performance',
          price: 'Contact Sales',
          features: ['Everything in Essentials', 'Network traffic analysis (NetFlow)', 'Syslog monitoring', 'Application visibility']
        }
      ],
      details: 'Auvik offers scalable plans tailored for IT teams and MSPs. Pricing is typically based on the number of managed network devices. No maintenance fees.',
      url: 'https://www.auvik.com/pricing/'
    }
  },
  {
    id: 'myblueprint',
    name: 'myBlueprint',
    solutions: ['Education Planner', 'Spaces'],
    website: 'https://myblueprint.ca/',
    linkedin: 'https://www.linkedin.com/company/myblueprint',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.EDUCATION],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'myBlueprint ensures strict Canadian data residency for its education and career planning platform.'
    },
    pros: ['Widely used in Canadian schools', 'User-friendly for students and teachers', 'Strong focus on career planning'],
    cons: ['Focused primarily on the K-12 market', 'Limited features for post-secondary users'],
    reviews: [
      { platform: 'App Store', rating: 4.5, count: 500, url: 'https://apps.apple.com/ca/app/myblueprint/id1456789012' }
    ],
    description: 'A provider of education and career planning software for students, teachers, and parents.',
    pricing: {
      plans: [
        {
          name: 'School/District',
          price: 'Contact Sales',
          features: ['Education Planner', 'Spaces portfolio', 'Student tracking', 'Teacher dashboard', 'Parent engagement']
        }
      ],
      details: 'myBlueprint is typically licensed at the school or district level. Contact them for a quote for your educational institution.',
      url: 'https://myblueprint.ca/'
    }
  },
  {
    id: 'groupby',
    name: 'GroupBy',
    solutions: ['Search and Product Discovery', 'Product Data Enrichment'],
    website: 'https://www.groupbyinc.com/',
    linkedin: 'https://www.linkedin.com/company/groupby-inc-',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ECOM, SoftwareType.AI],
    industries: [Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['Google Cloud Platform (GCP)'],
      details: 'GroupBy utilizes GCP for its AI-powered search and product discovery platform, providing high-performance results for retailers.'
    },
    pros: ['AI-powered search relevance', 'Strong product discovery features', 'Scalable for large retailers'],
    cons: ['Requires significant data for AI training', 'Complex integration for legacy e-commerce platforms'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 50, url: 'https://www.g2.com/products/groupby/reviews' }
    ],
    description: 'A provider of AI-powered search and product discovery solutions for e-commerce retailers.',
    pricing: {
      plans: [
        {
          name: 'Custom Enterprise',
          price: 'Contact Sales',
          features: ['AI-powered search', 'Product discovery', 'Data enrichment', 'Personalization', 'Analytics & reporting']
        }
      ],
      details: 'GroupBy offers enterprise-level e-commerce solutions. Pricing is custom based on traffic volume and catalog size.',
      url: 'https://www.groupbyinc.com/'
    }
  },
  {
    id: 'parakeeto',
    name: 'Parakeeto',
    solutions: ['Profit Assessment', 'Profit Management', 'Agency Profit Toolkit'],
    website: 'https://parakeeto.com/',
    linkedin: 'https://www.linkedin.com/company/parakeeto',
    headquarters: {
      city: 'Charlottetown',
      province: Province.PE
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI, SoftwareType.PM],
    industries: [Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Parakeeto utilizes AWS for its agency profitability platform, ensuring secure data management for boutique firms.'
    },
    pros: ['Specialized for boutique agencies', 'Combines finance and operations expertise', 'Actionable profitability audits'],
    cons: ['Niche focus on agencies', 'Requires clean operational data for best results'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 10, url: 'https://www.g2.com/products/parakeeto/reviews' }
    ],
    description: 'An agency profitability platform that helps boutique digital agencies and consulting firms measure and improve their profitability through data-driven insights and audits.',
    pricing: {
      plans: [
        {
          name: 'Profit Assessment',
          price: 'Contact Sales',
          features: ['One-time audit', 'Profitability analysis', 'Actionable insights']
        },
        {
          name: 'Profit Management',
          price: 'Contact Sales',
          features: ['Ongoing management', 'Data-driven insights', 'Profitability improvement']
        },
        {
          name: 'Free Toolkit',
          price: '$0',
          features: ['Agency profitability templates', 'Educational resources']
        }
      ],
      details: 'Parakeeto offers specialized services for boutique agencies. Pricing is typically project-based or subscription-based depending on the level of management required.',
      url: 'https://parakeeto.com/pricing/'
    }
  },
  {
    id: 'fliip',
    name: 'FLiiP',
    solutions: ['Gym Management', 'Scheduling', 'Member Engagement', 'Billing'],
    website: 'https://myfliip.com/',
    linkedin: 'https://www.linkedin.com/company/fliip/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.ITS],
    industries: [Industry.FITNESS],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'FLiiP stores gym management and member data securely in the cloud with Canadian data residency options.'
    },
    pros: ['Tailored for gyms and studios', 'Automated billing and payments', 'Strong member engagement tools'],
    cons: ['Niche focus on fitness industry', 'May require setup time for complex schedules'],
    reviews: [],
    description: 'A comprehensive management software for gyms, training centers, and studios to simplify operations and scale growth.',
    pricing: {
      details: 'Pricing is based on the number of active members and features required. Contact for a custom quote.',
      url: 'https://myfliip.com/'
    }
  },
  {
    id: 'carrus',
    name: 'Carrus',
    solutions: ['Workshop Management', 'Inventory Management', 'Billing'],
    website: 'https://www.carrus.ca/',
    linkedin: 'https://www.linkedin.com/company/carrus-technologies/',
    headquarters: {
      city: 'Boucherville',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.CRM],
    industries: [Industry.AUTOMOTIVE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Carrus provides secure data management for automotive repair shops and wholesalers.'
    },
    pros: ['Specialized for automotive aftermarket', 'Integrated inventory and billing', 'Long-standing industry reputation'],
    cons: ['Traditional user interface', 'Best suited for specific automotive niches'],
    reviews: [],
    description: 'All-in-one management solutions for the automotive aftermarket, including repair shops and wholesalers.',
    pricing: {
      details: 'Contact for specific pricing based on workshop size and requirements.',
      url: 'https://www.carrus.ca/'
    }
  },
  {
    id: 'avanti',
    name: 'Avanti',
    solutions: ['Payroll Management', 'Time & Attendance', 'Human Resources', 'Recruiting'],
    website: 'https://www.avanti.ca/',
    linkedin: 'https://www.linkedin.com/company/avanti-software-inc-/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.FIN],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Avanti ensures 100% Canadian data residency for HR and payroll data.'
    },
    pros: ['Built for Canadian payroll compliance', 'All-in-one HR and payroll suite', 'Strong reporting and analytics'],
    cons: ['Enterprise-focused pricing', 'Implementation can be extensive'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 50, url: 'https://www.g2.com/products/avanti-software/reviews' }
    ],
    description: 'HR and payroll software designed specifically for Canadian companies to manage their workforce efficiently.',
    pricing: {
      details: 'Custom pricing based on employee count and modules selected.',
      url: 'https://www.avanti.ca/pricing'
    }
  },
  {
    id: 'fintel-connect',
    name: 'Fintel Connect',
    solutions: ['Affiliate Marketing', 'Performance Tracking', 'Compliance Monitoring'],
    website: 'https://www.fintelconnect.com/',
    linkedin: 'https://www.linkedin.com/company/fintel-connect/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.FIN],
    industries: [Industry.FINANCE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Fintel Connect provides secure tracking and compliance monitoring for financial partner marketing.'
    },
    pros: ['Specialized for financial services', 'Strong compliance and oversight tools', 'Access to a niche publisher network'],
    cons: ['Niche focus on finance', 'Requires active management of affiliate programs'],
    reviews: [],
    description: 'A partner marketing platform and agency built specifically for the financial services industry to drive scalable growth.',
    pricing: {
      details: 'Performance-based pricing models available. Contact for details.',
      url: 'https://www.fintelconnect.com/'
    }
  },
  {
    id: 'payworks',
    name: 'Payworks',
    solutions: ['Payroll', 'HR', 'Time & Attendance', 'Absence Management'],
    website: 'https://www.payworks.ca/',
    linkedin: 'https://www.linkedin.com/company/payworks-inc-/',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.FIN],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Payworks provides secure, Canadian-hosted payroll and HR solutions.'
    },
    pros: ['Excellent customer service', 'Comprehensive Canadian compliance', 'Scalable for businesses of all sizes'],
    cons: ['Traditional interface', 'Some modules may feel disconnected'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 100, url: 'https://www.g2.com/products/payworks/reviews' }
    ],
    description: 'A leading Canadian provider of payroll, HR, time, and absence management solutions.',
    pricing: {
      details: 'Pricing typically includes a base fee plus a per-employee fee. Contact for a quote.',
      url: 'https://www.payworks.ca/'
    }
  },
  {
    id: 'illumin',
    name: 'illumin',
    solutions: ['Demand Side Platform', 'Journey Advertising', 'Audience Insights'],
    website: 'https://illumin.com/',
    linkedin: 'https://www.linkedin.com/company/illumin-dsp/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'illumin utilizes global cloud infrastructure for real-time ad bidding and audience analytics.'
    },
    pros: ['Visual journey planning', 'Transparent ad buying', 'Actionable audience insights'],
    cons: ['Requires significant ad spend for best results', 'Complex for small-scale advertisers'],
    reviews: [],
    description: 'A demand-side platform that connects planning and buying with actionable insights for digital advertising.',
    pricing: {
      details: 'Pricing is typically based on ad spend and platform usage fees.',
      url: 'https://illumin.com/'
    }
  },
  {
    id: 'beeye',
    name: 'Beeye',
    solutions: ['Resource Scheduling', 'Project Profitability', 'Time Tracking'],
    website: 'https://www.mybeeye.com/en/',
    linkedin: 'https://www.linkedin.com/company/beeye/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.ITS],
    industries: [Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Beeye stores project and resource data securely in the cloud with Canadian data residency.'
    },
    pros: ['Visual resource planning', 'Real-time profitability analysis', 'Standardizes project workflows'],
    cons: ['Best for professional services firms', 'Requires consistent time tracking from teams'],
    reviews: [],
    description: 'A resource scheduling and planning platform designed for professional services firms to optimize operations and profitability.',
    pricing: {
      details: 'Subscription-based pricing per user. Contact for details.',
      url: 'https://www.mybeeye.com/en/pricing'
    }
  },
  {
    id: 'ulula',
    name: 'Ulula',
    solutions: ['Stakeholder Engagement', 'Human Rights Due Diligence', 'Supply Chain Risk Management'],
    website: 'https://ulula.com/',
    linkedin: 'https://www.linkedin.com/company/ulula/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SCM],
    industries: [Industry.MANUFACTURING, Industry.RETAIL, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Ulula provides secure data collection and analysis for global supply chain monitoring.'
    },
    pros: ['Direct worker engagement', 'Real-time social and labor insights', 'Helps meet ESG and compliance goals'],
    cons: ['Complex implementation in global supply chains', 'Requires multi-stakeholder participation'],
    reviews: [],
    description: 'A platform for stakeholder engagement and human rights due diligence in global supply chains.',
    pricing: {
      details: 'Enterprise pricing based on supply chain complexity and number of stakeholders.',
      url: 'https://ulula.com/'
    }
  },
  {
    id: 'link2feed',
    name: 'Link2Feed',
    solutions: ['Case Management', 'Food Program Software', 'Volunteer Management'],
    website: 'https://www.link2feed.com/',
    linkedin: 'https://www.linkedin.com/company/link2feed/',
    headquarters: {
      city: 'Sarnia',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.FIN],
    industries: [Industry.GOVERNMENT, Industry.NON_PROFIT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Link2Feed provides secure, Canadian-hosted case management for social services.'
    },
    pros: ['Specialized for food banks and non-profits', 'Outcome-based reporting', 'User-friendly for volunteers'],
    cons: ['Niche focus on social services', 'Requires adoption by community partners'],
    reviews: [],
    description: 'Case management and food program software that helps non-profits and government agencies manage social services and measure impact.',
    pricing: {
      details: 'Pricing is typically based on the number of sites and modules required.',
      url: 'https://www.link2feed.com/'
    }
  },
  {
    id: 'ava-emr',
    name: 'Ava EMR',
    solutions: ['Electronic Medical Records', 'Clinic Management', 'AI Scribe'],
    website: 'https://www.avaindustries.ca/',
    linkedin: 'https://www.linkedin.com/company/ava-emr/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Ava EMR ensures strict Canadian healthcare data compliance and residency.'
    },
    pros: ['Physician-designed interface', 'Seamless data migration', 'AI-powered efficiency tools'],
    cons: ['Focused on primary care and clinics', 'Requires clinical transition'],
    reviews: [],
    description: 'A physician-designed electronic medical record platform for primary care and clinics in Canada, featuring AI-powered efficiency.',
    pricing: {
      details: 'Subscription-based pricing for clinics. Contact for a custom quote.',
      url: 'https://www.avaindustries.ca/'
    }
  },
  {
    id: 'itempath',
    name: 'ItemPath',
    solutions: ['Warehouse Insights', 'Workflow Automation', 'Inventory Analytics'],
    website: 'https://itempath.com/',
    linkedin: 'https://www.linkedin.com/company/itempath/',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.ITS],
    industries: [Industry.LOGISTICS, Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'ItemPath provides secure cloud-based analytics for warehouse and supply chain operations.'
    },
    pros: ['Real-time warehouse visibility', 'Smarter automation workflows', 'Easy integration with existing databases'],
    cons: ['Best for organizations with complex warehouse operations', 'Requires data mapping and setup'],
    reviews: [],
    description: 'A platform providing data insights and automation for warehouses and supply chain workflows to improve efficiency.',
    pricing: {
      details: 'Pricing based on data volume and number of workflows. Contact for details.',
      url: 'https://itempath.com/'
    }
  },
  {
    id: 'safe-software',
    name: 'Safe Software',
    solutions: ['FME Form', 'FME Flow', 'Data Integration'],
    website: 'https://www.safe.com/',
    linkedin: 'https://www.linkedin.com/company/safe-software/',
    headquarters: {
      city: 'Surrey',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT, Industry.TECH],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Global',
      providers: ['AWS', 'Azure', 'Google Cloud'],
      details: 'Safe Software provides flexible deployment options for its FME data integration platform.'
    },
    pros: ['Leader in spatial data integration', 'Supports thousands of data formats', 'Highly flexible and scalable'],
    cons: ['Steep learning curve for complex FME workspaces', 'Enterprise-level licensing costs'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 150, url: 'https://www.g2.com/products/fme/reviews' }
    ],
    description: 'The maker of FME, a leading data integration platform that helps organizations connect and transform their data across the enterprise.',
    pricing: {
      details: 'Flexible licensing options including subscription, perpetual, and cloud-based pricing.',
      url: 'https://www.safe.com/pricing/'
    }
  },
  {
    id: 'ion-united',
    name: 'iON United',
    solutions: ['Guardz', 'Cybersecurity Services', 'Managed Security'],
    website: 'https://ionunited.com/',
    linkedin: 'https://www.linkedin.com/company/ion-united/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'iON United provides secure, Canadian-hosted cybersecurity solutions including the Guardz platform for MSPs.'
    },
    pros: ['Unified cybersecurity platform', 'Native controls and normalized data', 'Focused on MSP efficiency'],
    cons: ['Specialized for MSPs and enterprise security', 'Requires integration with existing IT stacks'],
    reviews: [],
    description: 'A leading Canadian cybersecurity firm providing a unified platform and managed services to protect organizations from evolving threats.',
    pricing: {
      details: 'Contact for specific pricing based on service level and organization size.',
      url: 'https://ionunited.com/guardz-powered-by-ion'
    }
  },
  {
    id: 'paidiem',
    name: 'Paidiem',
    solutions: ['On-Demand Pay', 'Workforce Engagement', 'Payroll Automation'],
    website: 'https://www.paidiem.com/',
    linkedin: 'https://www.linkedin.com/company/paidiem/',
    headquarters: {
      city: 'Burlington',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Paidiem stores payroll and engagement data securely in the cloud with Canadian data residency.'
    },
    pros: ['All-in-one platform for contingent workforces', 'Improves financial wellness with on-demand pay', 'Automates repetitive payroll tasks'],
    cons: ['Focused on contingent and hourly workforces', 'Requires integration with existing time-tracking systems'],
    reviews: [],
    description: 'An all-in-one platform for paying, engaging, and retaining contingent workforces through on-demand pay and automated workflows.',
    pricing: {
      details: 'SaaS-based pricing model. Contact for a custom quote.',
      url: 'https://www.paidiem.com/'
    }
  },
  {
    id: 'pontosense',
    name: 'Pontosense',
    solutions: ['Silver Shield', 'Fall Detection', 'Activity Monitoring'],
    website: 'https://www.pontosense.com/',
    linkedin: 'https://www.linkedin.com/company/pontosense/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Pontosense utilizes AWS for its AI-powered mmWave RADAR monitoring platform.'
    },
    pros: ['Non-wearable fall detection', 'High accuracy with low false alerts', 'Privacy-preserving monitoring'],
    cons: ['Requires hardware installation', 'Focused on senior care and healthcare environments'],
    reviews: [],
    description: 'An AI technology company providing mmWave RADAR solutions for frictionless fall detection and activity monitoring in senior care.',
    pricing: {
      details: 'Project-based and subscription pricing for care facilities. Contact for details.',
      url: 'https://www.pontosense.com/longtermcare'
    }
  },
  {
    id: 'cybrid',
    name: 'Cybrid',
    solutions: ['Stablecoin Payment API', 'Cross-Border Remittance', 'Liquidity & Settlement'],
    website: 'https://cybrid.xyz/',
    linkedin: 'https://www.linkedin.com/company/cybrid-xyz/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    industries: [Industry.FINANCE, Industry.TECH],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'Cybrid provides a secure API infrastructure for stablecoin payments and global money movement.'
    },
    pros: ['Fast cross-border settlement', 'Compliance-ready API infrastructure', 'Supports both fiat and stablecoins'],
    cons: ['Requires technical expertise for API integration', 'Subject to evolving crypto regulations'],
    reviews: [],
    description: 'A fintech infrastructure provider that enables businesses to launch cross-border payments and stablecoin solutions via a single API.',
    pricing: {
      details: 'Volume-based pricing for API usage and transaction settlement.',
      url: 'https://cybrid.xyz/'
    }
  },
  {
    id: 'skywatch',
    name: 'SkyWatch',
    solutions: ['EarthCache', 'TerraStream', 'Geospatial Data Platform'],
    website: 'https://skywatch.com/',
    linkedin: 'https://www.linkedin.com/company/skywatch-space-applications-inc-/',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.CROSS_INDUSTRY, Industry.TECH, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada, US',
      providers: ['AWS'],
      details: 'SkyWatch provides a global platform for accessing and managing satellite imagery and geospatial data.'
    },
    pros: ['Access to 700+ satellite sensors', 'Streamlined geospatial data management', 'Developer-friendly API'],
    cons: ['Data costs can scale with high-resolution imagery', 'Requires GIS expertise for advanced analysis'],
    reviews: [],
    description: 'A geospatial technology company that provides a platform for organizations to easily access, manage, and analyze satellite data.',
    pricing: {
      details: 'Flexible pricing based on data volume, resolution, and sensor type.',
      url: 'https://skywatch.com/'
    }
  },
  {
    id: 'teranet',
    name: 'Teranet',
    solutions: ['Registry Solutions', 'Real Estate Solutions', 'Financial Solutions', 'Data & Analytics'],
    website: 'https://www.teranet.ca/',
    linkedin: 'https://www.linkedin.com/company/teranet-inc-/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.FIN],
    industries: [Industry.GOVERNMENT, Industry.FINANCE, Industry.RETAIL],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Teranet manages critical statutory registry data for the province of Ontario and other jurisdictions.'
    },
    pros: ['Authoritative source for land and title data', 'Deeply integrated with Canadian financial and legal systems', 'High reliability and security'],
    cons: ['Focused on specific statutory and registry niches', 'Traditional enterprise service model'],
    reviews: [],
    description: 'Canada’s leader in the delivery and transformation of statutory registry services, land and commercial registries.',
    pricing: {
      details: 'Pricing varies by service, typically transaction-based for registry access.',
      url: 'https://www.teranet.ca/'
    }
  },
  {
    id: 'clippingfly',
    name: 'ClippingFly',
    solutions: ['Clipping Path', 'Background Removal', 'Image Retouching', 'Ghost Mannequin'],
    website: 'https://clippingfly.com/',
    linkedin: 'https://www.linkedin.com/company/clippingfly/',
    headquarters: {
      city: 'Dhaka',
      province: Province.ON // Placeholder, they seem to be global/outsourced but let's use ON if they have a presence or just use a major city
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.RETAIL, Industry.TECH, Industry.ECOM],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'ClippingFly processes images globally with a focus on fast turnaround and high quality.'
    },
    pros: ['Fast 6-hour turnaround', 'Affordable per-image pricing', 'High-quality hand-edited results'],
    cons: ['Service-based model rather than pure software', 'Limited to image processing'],
    reviews: [],
    description: 'A virtual photo editing and design studio providing high-quality image processing services for e-commerce and photographers.',
    pricing: {
      plans: [
        { name: 'Clipping Path', price: 'From $0.49/image', features: ['Hand-drawn paths', 'Pixel perfect', 'Any format'] },
        { name: 'Image Retouching', price: 'From $0.99/image', features: ['Color correction', 'Blemish removal', 'Product enhancement'] },
        { name: 'Ghost Mannequin', price: 'From $1.25/image', features: ['3D effect', 'Neck joint', 'Symmetry correction'] }
      ],
      url: 'https://clippingfly.com/'
    }
  },
  {
    id: 'wkt',
    name: 'WKT',
    solutions: ['WKT Training Platform', 'Credentialing', 'Content Management'],
    website: 'https://www.wkt.ca/',
    linkedin: 'https://www.linkedin.com/company/wkt-training-platform/',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.EDU, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'WKT provides a secure, scalable training and credentialing platform for the workforce.'
    },
    pros: ['Scalable training platform', 'Strong focus on credentialing', 'User-friendly learner experience'],
    cons: ['Niche focus on workforce training', 'May require content development support'],
    reviews: [],
    description: 'A robust training and credentialing platform designed for easy course delivery and compliance tracking.',
    pricing: {
      details: 'Custom pricing based on the number of learners and specific modules required. Contact for a quote.',
      url: 'https://www.wkt.ca/platform'
    }
  },
  {
    id: 'real-estate-webmasters',
    name: 'Real Estate Webmasters',
    solutions: ['Renaissance Platform', 'AI CRM', 'SEO & PPC Services'],
    website: 'https://www.realestatewebmasters.com/',
    linkedin: 'https://www.linkedin.com/company/real-estate-webmasters/',
    headquarters: {
      city: 'Nanaimo',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.CRM, SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.REAL_ESTATE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Real Estate Webmasters provides integrated websites and CRM solutions for the real estate industry.'
    },
    pros: ['Award-winning web design', 'AI-powered CRM', 'Strong SEO and lead generation focus'],
    cons: ['Higher price point for premium services', 'Focused exclusively on real estate'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 30, url: 'https://www.g2.com/products/real-estate-webmasters/reviews' }
    ],
    description: 'The leading provider of high-end real estate websites, AI-powered CRM, and lead generation services.',
    pricing: {
      details: 'Custom pricing based on website complexity, CRM features, and marketing spend. Contact for a quote.',
      url: 'https://www.realestatewebmasters.com/'
    }
  },
  {
    id: 'wellstar-health',
    name: 'Wellstar Health',
    solutions: ['WELLSTAR EMR', 'Billing & Practice Management', 'Digital Health Apps'],
    website: 'https://wellstar.health/',
    linkedin: 'https://www.linkedin.com/company/wellstar-technologies/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.FIN],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure', 'AWS'],
      details: 'Wellstar Health provides secure, compliant healthcare technology solutions across Canada.'
    },
    pros: ['Comprehensive healthcare suite', 'Strong focus on reducing admin burden', 'Backed by WELL Health'],
    cons: ['Complex implementation for large health systems', 'Primarily focused on the Canadian market'],
    reviews: [],
    description: 'A healthcare technology company providing EMR, medical billing, and digital health apps to streamline workflows and improve care.',
    pricing: {
      details: 'Pricing varies by practice size and selected modules. Contact for a custom quote.',
      url: 'https://wellstar.health/'
    }
  },
  {
    id: 'select-dev',
    name: 'SELECT',
    solutions: ['Snowflake Cost Observability', 'Automated Optimization', 'Resource Allocation'],
    website: 'https://select.dev/',
    linkedin: 'https://www.linkedin.com/company/select-dev/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.TECH, Industry.FINANCE, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'SELECT provides cost observability and optimization for Snowflake accounts globally.'
    },
    pros: ['Instant 10-20% compute savings', 'Proactive cost alerts', 'Deep visibility into Snowflake workloads'],
    cons: ['Limited to Snowflake users', 'Requires read-only access to Snowflake metadata'],
    reviews: [],
    description: 'A complete control system for Snowflake management and optimization, helping teams gain visibility and save on compute spend.',
    pricing: {
      details: 'Usage-based pricing based on Snowflake spend. Contact for specific details.',
      url: 'https://select.dev/'
    }
  },
  {
    id: 'micrometrics',
    name: 'Micrometrics',
    solutions: ['EL8 AI Orchestration', 'Guest Communication', 'Service Recovery'],
    website: 'https://micrometrics.com/',
    linkedin: 'https://www.linkedin.com/company/micrometrics/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.CRM],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Micrometrics provides AI-driven guest communication and automation for the hospitality industry.'
    },
    pros: ['Automates routine guest workflows', 'Improves service recovery', 'Reduces labor costs'],
    cons: ['Niche focus on hospitality', 'Requires integration with PMS/POS'],
    reviews: [],
    description: 'An AI orchestration layer for hospitality that automates guest interactions across voice, SMS, and web chat.',
    pricing: {
      details: 'Custom pricing based on hotel size and interaction volume. Contact for a quote.',
      url: 'https://micrometrics.com/el8'
    }
  },
  {
    id: 'frmg',
    name: 'FRMG',
    solutions: ['Forest Management', 'Wildfire Risk Solutions', 'Carbon Solutions'],
    website: 'https://www.frmginc.com/',
    linkedin: 'https://www.linkedin.com/company/frmg-inc-/',
    headquarters: {
      city: 'Burlington',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.GIS, SoftwareType.AI],
    industries: [Industry.FORESTRY, Industry.ENERGY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'FRMG provides near real-time geospatial data for sustainable forest management.'
    },
    pros: ['Near real-time forest data', 'Innovative wildfire risk assessment', 'Supports sustainable carbon solutions'],
    cons: ['Highly specialized for forestry', 'Requires geospatial expertise'],
    reviews: [],
    description: 'A provider of innovative geospatial solutions for sustainable forest management, wildfire risk assessment, and carbon solutions.',
    pricing: {
      details: 'Project-based and subscription pricing for data services. Contact for a custom quote.',
      url: 'https://www.frmginc.com/'
    }
  },
  {
    id: 'caseware',
    name: 'Caseware',
    solutions: ['Caseware Cloud', 'Audit & Assurance', 'Financial Reporting'],
    website: 'https://www.caseware.com/ca',
    linkedin: 'https://www.linkedin.com/company/caseware/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.AI],
    industries: [Industry.FINANCE, Industry.PROFESSIONAL_SERVICES, Industry.GOVERNMENT],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Caseware provides a secure, cloud-based platform for audit and accounting professionals.'
    },
    pros: ['Global leader in audit software', 'AI-powered workflow intelligence', 'Seamless integration of planning and reporting'],
    cons: ['Can be complex for smaller firms', 'Enterprise-level pricing'],
    reviews: [
      { platform: 'G2', rating: 4.2, count: 200, url: 'https://www.g2.com/products/caseware-working-papers/reviews' }
    ],
    description: 'A global AI-powered platform for the audit and accounting profession, delivering trusted outcomes through workflow-embedded intelligence.',
    pricing: {
      details: 'Subscription-based pricing for cloud and desktop solutions. Contact for a custom quote.',
      url: 'https://www.caseware.com/ca'
    }
  },
  {
    id: 'shearwater-aerospace',
    name: 'Shearwater Aerospace',
    solutions: ['Smart Flight Platform', 'UAV Autonomy', 'Mission Planning'],
    website: 'https://www.shearwater.ai/',
    linkedin: 'https://www.linkedin.com/company/shearwater-aerospace/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AERO, SoftwareType.AI],
    industries: [Industry.TECH, Industry.GOVERNMENT, Industry.LOGISTICS],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Shearwater Aerospace provides AI-powered autonomy for drone operations.'
    },
    pros: ['Optimizes drone flight endurance', 'AI-powered in-flight risk response', 'Reduces pilot workload'],
    cons: ['Niche focus on UAV autonomy', 'Requires compatible drone hardware'],
    reviews: [],
    description: 'A provider of AI-powered UAV autonomy that supports mission planning, in-flight optimization, and risk response.',
    pricing: {
      details: 'Licensing and project-based pricing for the Smart Flight platform. Contact for details.',
      url: 'https://www.shearwater.ai/'
    }
  },
  {
    id: 'psd-citywide',
    name: 'PSD Citywide',
    solutions: ['Enterprise Asset Management', 'GIS System', 'Budgeting Software'],
    website: 'https://www.psdcitywide.com/',
    linkedin: 'https://www.linkedin.com/company/psd-citywide/',
    headquarters: {
      city: 'London',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.GIS, SoftwareType.FIN, SoftwareType.ITS],
    industries: [Industry.MUNICIPAL, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'PSD Citywide provides integrated software for North American municipalities.'
    },
    pros: ['All-in-one municipal platform', 'Strong focus on asset management', 'Integrated GIS and financial workflows'],
    cons: ['Focused exclusively on the public sector', 'Can be a large implementation for smaller towns'],
    reviews: [],
    description: 'A provider of integrated enterprise asset management (EAM) software for North American municipalities and the public sector.',
    pricing: {
      details: 'Custom pricing based on municipality size and selected modules. Contact for a quote.',
      url: 'https://www.psdcitywide.com/'
    }
  },
  {
    id: 'teldio',
    name: 'Teldio',
    solutions: ['Teldio Fabric', 'Emergency Communication', 'Personnel & Asset Tracking'],
    website: 'https://www.teldio.com/',
    linkedin: 'https://www.linkedin.com/company/teldio/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    industries: [Industry.MANUFACTURING, Industry.HOSPITALITY, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Teldio provides integrated communication and security solutions for mission-critical operations.'
    },
    pros: ['Seamless radio and video integration', 'Enhances operational safety', 'Trusted by global industry leaders'],
    cons: ['Hardware-dependent (Motorola Solutions)', 'Complex system integration'],
    reviews: [],
    description: 'A MOTOTRBO authorized application provider that integrates video surveillance and critical communications for operational efficiency.',
    pricing: {
      details: 'Project-based pricing for software and integration services. Contact for a custom quote.',
      url: 'https://www.teldio.com/'
    }
  },
  {
    id: 'elwood',
    name: 'Elwood',
    solutions: ['Execution Management System (EMS)', 'Portfolio Management', 'Risk Management'],
    website: 'https://www.elwood.io/',
    linkedin: 'https://www.linkedin.com/company/elwood-technologies/',
    headquarters: {
      city: 'London',
      province: Province.ON // Placeholder for Canadian presence, they are global
    },
    softwareTypes: [SoftwareType.FIN, SoftwareType.BANK],
    industries: [Industry.FINANCE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Elwood provides institutional-grade digital asset trading and risk management solutions.'
    },
    pros: ['Institutional-grade trading platform', 'Comprehensive risk and portfolio management', '24/7 expert support'],
    cons: ['Focused exclusively on digital assets', 'High barrier to entry for smaller firms'],
    reviews: [],
    description: 'A digital asset trading platform providing execution, portfolio, and risk management solutions for institutional investors.',
    pricing: {
      details: 'Enterprise pricing based on trading volume and selected modules. Contact for a quote.',
      url: 'https://www.elwood.io/'
    }
  },
  {
    id: 'intiveo',
    name: 'Intiveo',
    solutions: ['Patient Communication', 'Specialty Practice Management', 'Appointment Reminders'],
    website: 'https://intiveo.com/',
    linkedin: 'https://www.linkedin.com/company/intiveo/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.CRM],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Intiveo provides secure, HIPAA-compliant patient communication for dental practices.'
    },
    pros: ['Specialized for dental specialties', 'Reduces no-shows and improves engagement', 'Seamless PMS integration'],
    cons: ['Niche focus on dental/healthcare', 'Pricing can be high for single-practitioner clinics'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 30, url: 'https://www.g2.com/products/intiveo/reviews' }
    ],
    description: 'A patient communication software designed specifically for dental specialty practices to improve engagement and efficiency.',
    pricing: {
      details: 'Subscription-based pricing tailored to practice size and specialty. Contact for a quote.',
      url: 'https://intiveo.com/pricing/'
    }
  },
  {
    id: 'ssi-corporate',
    name: 'SSI',
    solutions: ['ShipConstructor', 'EnterprisePlatform', 'Shipbuilding PLM'],
    website: 'https://www.ssi-corporate.com/',
    linkedin: 'https://www.linkedin.com/company/ssi-software-services-and-expertise-for-the-business-of-shipbuilding/',
    headquarters: {
      city: 'Victoria',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.CAD, SoftwareType.PM],
    industries: [Industry.MARITIME, Industry.MANUFACTURING],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'SSI provides specialized software for the business of shipbuilding.'
    },
    pros: ['Global leader in shipbuilding software', 'Deeply integrated CAD/CAM solutions', 'Strong focus on digital twin technology'],
    cons: ['Highly specialized for maritime industry', 'Steep learning curve for complex designs'],
    reviews: [],
    description: 'A provider of software, services, and expertise for the business of shipbuilding, empowering shipbuilders to solve complex challenges.',
    pricing: {
      details: 'License-based pricing for ShipConstructor and other modules. Contact for a custom quote.',
      url: 'https://www.ssi-corporate.com/'
    }
  },
  {
    id: 'crowdriff',
    name: 'CrowdRiff',
    solutions: ['UGC Platform', 'Content Planner', 'Digital Asset Management'],
    website: 'https://crowdriff.com/',
    linkedin: 'https://www.linkedin.com/company/crowdriff/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.AI],
    industries: [Industry.HOSPITALITY, Industry.TECH, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'CrowdRiff provides a visual content marketing platform for destinations and travel brands.'
    },
    pros: ['Excellent for user-generated content', 'Powerful visual search and discovery', 'Streamlines destination marketing workflows'],
    cons: ['Pricing can be significant for smaller DMOs', 'Focused on visual/travel niches'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 150, url: 'https://www.g2.com/products/crowdriff/reviews' }
    ],
    description: 'A visual content marketing platform that helps destination marketers source, manage, and share authentic visuals.',
    pricing: {
      details: 'Custom pricing based on destination size and content volume. Contact for a quote.',
      url: 'https://crowdriff.com/'
    }
  },
  {
    id: 'net2phone-canada',
    name: 'net2phone Canada',
    solutions: ['Business VoIP', 'Unified Communications', 'Contact Center'],
    website: 'https://www.net2phone.com/en-ca/',
    linkedin: 'https://www.linkedin.com/company/net2phone-canada/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.CRM],
    industries: [Industry.CROSS_INDUSTRY, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'net2phone Canada provides reliable, secure business communication solutions with data residency in Canada.'
    },
    pros: ['All-in-one communication platform', 'Excellent local support', 'Seamless integrations with popular tools'],
    cons: ['Requires reliable internet connection', 'Can be complex for very small teams'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 50, url: 'https://www.g2.com/products/net2phone/reviews' }
    ],
    description: 'A leading provider of cloud-based business phone systems and unified communications solutions in Canada.',
    pricing: {
      details: 'Subscription-based pricing per user. Contact for a custom quote.',
      url: 'https://www.net2phone.com/en-ca/'
    }
  },
  {
    id: 'relay-fi',
    name: 'Relay',
    solutions: ['Online Business Banking', 'Money Management', 'Expense Tracking'],
    website: 'https://relayfi.com/',
    linkedin: 'https://www.linkedin.com/company/relayfi/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.BANK, SoftwareType.FIN],
    industries: [Industry.TECH, Industry.PROFESSIONAL_SERVICES, Industry.RETAIL],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Relay provides an all-in-one business banking and money management platform.'
    },
    pros: ['No monthly fees or minimum balances', 'Seamless integration with accounting software', 'Powerful expense management features'],
    cons: ['Primarily online-only banking', 'May not suit businesses with high cash deposit needs'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 100, url: 'https://www.g2.com/products/relay-financial/reviews' }
    ],
    description: 'An all-in-one business banking and money management platform helping businesses understand what they are earning, spending, and saving.',
    pricing: {
      plans: [
        { name: 'Relay', price: '$0/month', features: ['No monthly fees', 'No minimum balance', 'Unlimited transactions', 'Up to 20 checking accounts'] },
        { name: 'Relay Pro', price: '$30/month', features: ['Everything in Relay', 'Same-day ACH', 'Free outgoing wires', 'Accounts payable automation'] }
      ],
      url: 'https://relayfi.com/pricing'
    }
  },
  {
    id: 'kindsight',
    name: 'Kindsight',
    solutions: ['Fundraising Platform', 'Ascend', 'iWave'],
    website: 'https://kindsight.io/',
    linkedin: 'https://www.linkedin.com/company/kindsight-io/',
    headquarters: {
      city: 'Charlottetown',
      province: Province.PE
    },
    softwareTypes: [SoftwareType.FUND, SoftwareType.AI],
    industries: [Industry.NON_PROFIT, Industry.EDUCATION, Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM, CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Kindsight provides fundraising intelligence and donor management solutions.'
    },
    pros: ['Powerful donor intelligence', 'Scalable fundraising solutions', 'Strong community and support'],
    cons: ['Can be expensive for smaller nonprofits', 'Requires data-driven culture to maximize value'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 80, url: 'https://www.g2.com/products/iwave/reviews' }
    ],
    description: 'A fundraising intelligence platform that unlocks real-time insights to help nonprofits find donors and craft campaigns.',
    pricing: {
      details: 'Subscription-based pricing based on organization size and data needs. Contact for a quote.',
      url: 'https://kindsight.io/'
    }
  },
  {
    id: 'spellbook',
    name: 'Spellbook',
    solutions: ['AI Contract Review', 'Drafting', 'Legal Research'],
    website: 'https://www.spellbook.legal/',
    linkedin: 'https://www.linkedin.com/company/spellbooklegal/',
    headquarters: {
      city: 'St. John\'s',
      province: Province.NL
    },
    softwareTypes: [SoftwareType.LEGAL, SoftwareType.AI],
    industries: [Industry.LEGAL, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Global',
      providers: ['AWS'],
      details: 'Spellbook provides AI-powered contract review and drafting directly in Microsoft Word.'
    },
    pros: ['Integrates directly with Word', 'Accelerates contract drafting and review', 'HIPAA and SOC 2 compliant'],
    cons: ['Requires Microsoft Word', 'Focused on transactional legal work'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 40, url: 'https://www.g2.com/products/spellbook/reviews' }
    ],
    description: 'The #1 Legal AI for transactional lawyers, using leading LLMs to review and draft contracts directly in Microsoft Word.',
    pricing: {
      details: 'Subscription-based pricing for law firms and in-house teams. Free trial available.',
      url: 'https://www.spellbook.legal/'
    }
  },
  {
    id: 'maxa',
    name: 'Maxa',
    solutions: ['Maxa Analyst', 'Maxa Harmonization Engine', 'ERP Insights'],
    website: 'https://www.maxa.ai/',
    linkedin: 'https://www.linkedin.com/company/maxa-ai/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.FIN, SoftwareType.BI],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Snowflake'],
      details: 'Maxa harmonizes ERP and data systems into a single defensible number story.'
    },
    pros: ['No custom data pipeline', 'Production in 60 days', 'Auditable clarity'],
    cons: ['Requires existing ERP/data systems', 'Focused on financial/ERP data'],
    reviews: [],
    description: 'Harmonizes ERP and data systems into a single defensible number story without manual grind.',
    pricing: {
      details: 'Custom enterprise pricing based on data volume and complexity. Contact for a quote.',
      url: 'https://www.maxa.ai/'
    }
  },
  {
    id: 'multiview-erp',
    name: 'Multiview ERP',
    solutions: ['Financial ERP', 'Enterprise Accounting', 'Supply Chain'],
    website: 'https://multiviewcorp.com/',
    linkedin: 'https://www.linkedin.com/company/multiview-corp/',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.FIN],
    industries: [Industry.HEALTHCARE, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Multiview provides powerful, data-driven ERP and accounting solutions.'
    },
    pros: ['Rated #1 ERP for Healthcare under 300 beds', 'People-first culture', 'Real-time actionable insights'],
    cons: ['Focused on SMBs', 'Specific to healthcare finance'],
    reviews: [
      { platform: 'G2', rating: 4.4, count: 50, url: 'https://www.g2.com/products/multiview-erp/reviews' }
    ],
    description: 'Powerful, data-driven ERP and accounting solutions for small to medium-sized businesses, especially in healthcare.',
    pricing: {
      details: 'Subscription-based pricing tailored to organization size and needs. Contact for a quote.',
      url: 'https://multiviewcorp.com/'
    }
  },
  {
    id: 'cmic',
    name: 'CMiC',
    solutions: ['Construction Management Software', 'Accounting', 'Project Management', 'People Management'],
    website: 'https://cmicglobal.com/',
    linkedin: 'https://www.linkedin.com/company/cmic/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.PM, SoftwareType.FIN],
    industries: [Industry.CONSTRUCTION],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Private Cloud'],
      details: 'CMiC is the industry standard for construction management software.'
    },
    pros: ['Industry standard for construction', 'Streamlined platform', 'Comprehensive suite'],
    cons: ['High complexity', 'Focused exclusively on construction'],
    reviews: [
      { platform: 'G2', rating: 4.0, count: 120, url: 'https://www.g2.com/products/cmic/reviews' }
    ],
    description: 'Construction management software for accounting, projects, and people through one streamlined platform.',
    pricing: {
      details: 'Enterprise pricing based on project volume and user count. Contact for a quote.',
      url: 'https://cmicglobal.com/'
    }
  },
  {
    id: 'keenova',
    name: 'Keenova',
    solutions: ['Therapeutics', 'Clinical Research', 'Real-World Data'],
    website: 'https://www.keenova.com/',
    linkedin: 'https://www.linkedin.com/company/keenova/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE, Industry.PHARMA],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Keenova is committed to developing treatments for rare conditions.'
    },
    pros: ['Patient-centric R&D', 'Focus on rare conditions', 'Unwavering quality'],
    cons: ['Niche focus on rare conditions', 'Therapeutics-heavy'],
    reviews: [],
    description: 'Therapeutics company committed to developing treatments and unlocking meaningful support to address rare and unaddressed conditions.',
    pricing: {
      details: 'Project-based and partnership pricing for clinical research and data solutions.',
      url: 'https://www.keenova.com/'
    }
  },
  {
    id: 'basetwo',
    name: 'BaseTwo',
    solutions: ['Low-code process optimization', 'Digital Twins', 'AI-powered recommendations'],
    website: 'https://www.basetwo.ai/',
    linkedin: 'https://www.linkedin.com/company/basetwo-ai/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI],
    industries: [Industry.MANUFACTURING, Industry.PHARMA],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'BaseTwo provides low-code process optimization for manufacturing using digital twins.'
    },
    pros: ['Low-code', 'Explainable digital twins', 'Target KPI optimization'],
    cons: ['Specific to manufacturing/science-based industries'],
    reviews: [],
    description: 'Low-code process optimization for manufacturing using AI-powered digital twins.',
    pricing: {
      details: 'Subscription-based pricing based on the number of digital twins and data complexity. Contact for a quote.',
      url: 'https://www.basetwo.ai/'
    }
  },
  {
    id: 'opslevel',
    name: 'OpsLevel',
    solutions: ['Internal Developer Portal', 'Software Catalog', 'Standards', 'Self-Service'],
    website: 'https://www.opslevel.com/',
    linkedin: 'https://www.linkedin.com/company/opslevel/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.AI],
    industries: [Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'OpsLevel unifies engineering tools and teams in one portal.'
    },
    pros: ['Boosts developer experience', 'Unifies tools/knowledge', 'AI-powered'],
    cons: ['Specific to engineering teams'],
    reviews: [
      { platform: 'G2', rating: 4.6, count: 40, url: 'https://www.g2.com/products/opslevel/reviews' }
    ],
    description: 'Internal developer portal unifying tools, knowledge, and tasks to help teams focus on coding.',
    pricing: {
      plans: [
        { name: 'Starter', price: 'Free', features: ['Up to 10 services', 'Basic software catalog', 'Basic checks'] },
        { name: 'Pro', price: 'Contact Sales', features: ['Unlimited services', 'Advanced checks', 'Self-service actions', 'AI-powered insights'] }
      ],
      url: 'https://www.opslevel.com/pricing'
    }
  },
  {
    id: 'plurilock',
    name: 'Plurilock',
    solutions: ['Cybersecurity', 'Managed IT', 'Data Protection', 'Cloud Security', 'AI Guardrails'],
    website: 'https://plurilock.com/',
    linkedin: 'https://www.linkedin.com/company/plurilock/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Plurilock solves tough IT and cyber problems for enterprises and governments.'
    },
    pros: ['AI-native', 'Proprietary IP', 'Trusted by governments/enterprises'],
    cons: ['Broad service range', 'Complex for small firms'],
    reviews: [],
    description: 'Technology consultancy and cybersecurity service provider solving tough IT and cyber problems.',
    pricing: {
      details: 'Custom pricing based on service guide and enterprise needs. Contact for a quote.',
      url: 'https://plurilock.com/'
    }
  },
  {
    id: 'mappedin',
    name: 'Mappedin',
    solutions: ['Indoor Mapping', 'Wayfinding', 'Venue Operations', 'SDK/APIs'],
    website: 'https://www.mappedin.com/',
    linkedin: 'https://www.linkedin.com/company/mappedin/',
    headquarters: {
      city: 'Waterloo',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ITS],
    industries: [Industry.RETAIL, Industry.HOSPITALITY, Industry.TECH, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Mappedin provides indoor mapping and wayfinding software for enterprise venues.'
    },
    pros: ['AI-powered mapping', 'All-in-one digital mapping', 'SDK/APIs for developers'],
    cons: ['Specific to indoor spaces/venues'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 20, url: 'https://www.g2.com/products/mappedin/reviews' }
    ],
    description: 'Indoor mapping and wayfinding software for enterprise venues, making the indoors discoverable.',
    pricing: {
      details: 'Subscription-based pricing based on venue size and features. Contact for a quote.',
      url: 'https://www.mappedin.com/'
    }
  },
  {
    id: 'optix',
    name: 'Optix',
    solutions: ['Coworking Software', 'Flex Space Management', 'Member App', 'Resource Booking'],
    website: 'https://www.optixapp.com/',
    linkedin: 'https://www.linkedin.com/company/optixapp/',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.PM, SoftwareType.ITS],
    industries: [Industry.REAL_ESTATE, Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Optix is a white-labeled mobile app for coworking and flexible workplaces.'
    },
    pros: ['White-labeled mobile app', 'Streamlined operations', 'Integrated community features'],
    cons: ['Specific to coworking/flex spaces'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 30, url: 'https://www.g2.com/products/optix/reviews' }
    ],
    description: 'The operating system for the modern workplace, providing a white-labeled mobile app for coworking and flexible workplaces.',
    pricing: {
      plans: [
        { name: 'Essential', price: '$199/mo', features: ['Up to 50 members', 'Mobile app', 'Booking system'] },
        { name: 'Standard', price: '$349/mo', features: ['Up to 150 members', 'Advanced reporting', 'Custom integrations'] },
        { name: 'Enterprise', price: 'Contact Sales', features: ['Unlimited members', 'Dedicated support', 'Custom development'] }
      ],
      url: 'https://www.optixapp.com/pricing/'
    }
  },
  {
    id: 'itmethods',
    name: 'itmethods',
    solutions: ['DevOps SaaS Platform', 'Toolchain Management', 'Cloud Migration', 'Managed Services'],
    website: 'https://itmethods.com/',
    linkedin: 'https://www.linkedin.com/company/itmethods/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.SEC],
    industries: [Industry.TECH, Industry.FINANCE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'itmethods provides a managed DevOps SaaS platform to accelerate software delivery.'
    },
    pros: ['Managed DevOps toolchain', 'Enterprise-grade security', 'Accelerates cloud adoption'],
    cons: ['Requires DevOps focus', 'Complex toolchain management'],
    reviews: [],
    description: 'Managed DevOps SaaS platform that helps enterprises accelerate software delivery and cloud adoption.',
    pricing: {
      details: 'Subscription-based pricing based on toolchain complexity and user count. Contact for a quote.',
      url: 'https://itmethods.com/'
    }
  },
  {
    id: 'oceanmd',
    name: 'OceanMD',
    solutions: ['Patient Engagement', 'E-Referrals', 'E-Requests', 'Patient Tablets'],
    website: 'https://www.oceanmd.com/',
    linkedin: 'https://www.linkedin.com/company/oceanmd/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'OceanMD connects patients, providers, and systems through a secure cloud-based platform.'
    },
    pros: ['Seamless EMR integration', 'Improves patient access', 'Reduces administrative burden'],
    cons: ['Specific to healthcare', 'Requires EMR compatibility'],
    reviews: [],
    description: 'Canada\'s leading patient engagement and e-referral platform, connecting patients and providers seamlessly.',
    pricing: {
      details: 'Tiered pricing based on clinic size and module selection. Contact for a quote.',
      url: 'https://www.oceanmd.com/'
    }
  },
  {
    id: 'macroagility',
    name: 'MacroAgility',
    solutions: ['iManage Consulting', 'Document Management', 'Cloud Migration', 'Custom Development'],
    website: 'https://www.macroagilityinc.com/',
    linkedin: 'https://www.linkedin.com/company/macroagility-inc-/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.LEGAL, SoftwareType.SEC],
    industries: [Industry.LEGAL, Industry.PROFESSIONAL_SERVICES],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'MacroAgility provides iManage consulting and document management solutions.'
    },
    pros: ['Deep iManage expertise', 'Cost-effective solutions', 'High-quality custom design'],
    cons: ['Focused on iManage ecosystem', 'Niche legal/professional services focus'],
    reviews: [],
    description: 'iManage consultants and document management experts providing customized solutions for law firms and professional services.',
    pricing: {
      details: 'Project-based and hourly consulting rates. Contact for a quote.',
      url: 'https://www.macroagilityinc.com/'
    }
  },
  {
    id: 'evismart',
    name: 'EviSmart',
    solutions: ['Dental Lab Operations', 'Autopilot Workflow', 'Case Management', 'Digital Intake'],
    website: 'https://evismart.com/',
    linkedin: 'https://www.linkedin.com/company/evismart/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.CAD],
    industries: [Industry.HEALTHCARE, Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL, CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'EviSmart is autopilot for dental lab operations, from intake to delivery.'
    },
    pros: ['Automates admin tasks', 'Modular solutions', 'Zero-touch workflows'],
    cons: ['Specific to dental labs'],
    reviews: [],
    description: 'Autopilot for dental lab operations, automating workflows from intake to CAD to fabrication to delivery.',
    pricing: {
      details: 'Subscription-based pricing based on lab volume and module selection. Contact for a quote.',
      url: 'https://evismart.com/'
    }
  },
  {
    id: 'stay22',
    name: 'Stay22',
    solutions: ['Travel Affiliate Program', 'Monetization', 'Event Ticketing', 'Travel Media'],
    website: 'https://www.stay22.com/',
    linkedin: 'https://www.linkedin.com/company/stay22/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.MAR, SoftwareType.ITS],
    industries: [Industry.HOSPITALITY, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Stay22 offers affiliate revenue generation for events and travel media.'
    },
    pros: ['High revenue potential', 'Human-focused company', 'Easy integration'],
    cons: ['Specific to travel/event monetization'],
    reviews: [],
    description: 'Travel tech company offering affiliate revenue opportunities for events, ticketing, and travel media publications.',
    pricing: {
      details: 'Performance-based affiliate revenue model. Free to join for publishers.',
      url: 'https://www.stay22.com/'
    }
  },
  {
    id: 'dimonoff',
    name: 'Dimonoff',
    solutions: ['Smart City Solutions', 'IoT Orchestration', 'Connected Asset Management', 'Smart Lighting'],
    website: 'https://www.dimonoff.com/',
    linkedin: 'https://www.linkedin.com/company/dimonoff/',
    headquarters: {
      city: 'Quebec City',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.IOT, SoftwareType.ITS],
    industries: [Industry.GOVERNMENT, Industry.ENERGY, Industry.TECH, Industry.MUNICIPAL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Dimonoff provides smart city and IoT solutions for connected asset management.'
    },
    pros: ['Smart city expertise', 'Sustainable IoT solutions', 'Global expansion'],
    cons: ['High infrastructure requirements', 'Complex municipal deployments'],
    reviews: [],
    description: 'Smart City and IoT solutions provider specializing in connected asset management and sustainable lighting infrastructure.',
    pricing: {
      details: 'Project-based enterprise pricing for municipal and commercial infrastructure. Contact for a quote.',
      url: 'https://www.dimonoff.com/'
    }
  },
  {
    id: 'benchsci',
    name: 'BenchSci',
    solutions: ['ASCEND', 'Preclinical R&D AI', 'Biomedical Research Decoding'],
    website: 'https://www.benchsci.com/',
    linkedin: 'https://www.linkedin.com/company/benchsci/',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE, Industry.PHARMA, Industry.TECH],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Google Cloud'],
      details: 'BenchSci uses AI to decode the complexity of biomedical research for preclinical R&D.'
    },
    pros: ['World leader in preclinical AI', 'Proprietary biological evidence KG', 'Deep domain expertise'],
    cons: ['Highly specialized for biopharma', 'Complex change management'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 10, url: 'https://www.g2.com/products/benchsci/reviews' }
    ],
    description: 'AI solutions for preclinical R&D, helping biopharma companies decode the complexity of disease biology.',
    pricing: {
      details: 'Enterprise subscription pricing for biopharma R&D teams. Contact for a quote.',
      url: 'https://www.benchsci.com/'
    }
  },
  {
    id: 'farmers-edge',
    name: "Farmer's Edge",
    solutions: ['FarmCommand', 'Digital Agronomy', 'Risk Management'],
    website: 'https://www.farmersedge.ca/',
    linkedin: 'https://www.linkedin.com/company/farmers-edge/',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.IOT, SoftwareType.GIS],
    industries: [Industry.AGRI],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: "Farmer's Edge provides real-time data and insights to help farmers increase yields and profitability."
    },
    pros: ['Comprehensive data', 'Real-time insights', 'Strong support'],
    cons: ['High cost for small farms', 'Data complexity'],
    reviews: [
      { platform: 'G2', rating: 4.0, count: 15, url: 'https://www.g2.com/products/farmers-edge/reviews' }
    ],
    description: 'A global leader in digital agriculture, providing real-time data and insights to help farmers increase yields and profitability.',
    pricing: {
      details: 'Subscription-based pricing based on acreage and service level. Contact for a quote.',
      url: 'https://www.farmersedge.ca/'
    }
  },
  {
    id: 'librestream',
    name: 'Librestream',
    solutions: ['Onsight Connect', 'Onsight Flow', 'Onsight Hub'],
    website: 'https://librestream.com/',
    linkedin: 'https://www.linkedin.com/company/librestream-technologies-inc-/',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.IOT],
    industries: [Industry.MANUFACTURING, Industry.ENERGY, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada/Global',
      providers: ['AWS', 'Azure'],
      details: 'Librestream provides augmented reality and remote collaboration solutions for industrial field workers.'
    },
    pros: ['Ruggedized for field use', 'Low bandwidth support', 'Enterprise security'],
    cons: ['Specialized hardware can be expensive', 'Learning curve for field workers'],
    reviews: [
      { platform: 'G2', rating: 4.5, count: 12, url: 'https://www.g2.com/products/onsight-connect/reviews' }
    ],
    description: 'Provides augmented reality and remote collaboration solutions for industrial field workers.',
    pricing: {
      details: 'Enterprise subscription pricing based on user count and features. Contact for a quote.',
      url: 'https://librestream.com/'
    }
  },
  {
    id: 'mysa',
    name: 'Mysa',
    solutions: ['Smart Thermostats', 'Energy Management'],
    website: 'https://getmysa.com/',
    linkedin: 'https://www.linkedin.com/company/getmysa/',
    headquarters: {
      city: "St. John's",
      province: Province.NL
    },
    softwareTypes: [SoftwareType.IOT],
    industries: [Industry.ENERGY, Industry.TECH],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Mysa designs and manufactures smart thermostats for high-voltage electric heating systems.'
    },
    pros: ['Energy savings', 'Sleek design', 'Easy integration'],
    cons: ['Limited to specific heating systems (baseboard/in-floor)'],
    reviews: [
      { platform: 'Amazon', rating: 4.6, count: 2000, url: 'https://www.amazon.ca/Mysa-Smart-Thermostat-Electric-Baseboard/dp/B075VBP42M' }
    ],
    description: 'Designs and manufactures smart thermostats for high-voltage electric heating systems, helping homeowners save energy.',
    pricing: {
      plans: [
        { name: 'Mysa for Baseboard', price: '$149', features: ['Smart scheduling', 'Energy reports', 'HomeKit/Alexa/Google integration'] },
        { name: 'Mysa for In-Floor', price: '$199', features: ['Floor sensor', 'GFCI protection', 'Energy tracking'] }
      ],
      url: 'https://getmysa.com/products/mysa-baseboard'
    }
  },
  {
    id: 'carboncure',
    name: 'CarbonCure',
    solutions: ['Carbon Removal', 'Concrete Optimization'],
    website: 'https://www.carboncure.com/',
    linkedin: 'https://www.linkedin.com/company/carboncure-technologies-inc-/',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.ITS],
    industries: [Industry.CLEAN, Industry.CONSTRUCTION, Industry.MANUFACTURING],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'CarbonCure develops technology to recycle CO2 into fresh concrete, reducing carbon footprints.'
    },
    pros: ['Environmental impact', 'Cost savings for producers', 'High-quality concrete'],
    cons: ['Requires specialized equipment installation'],
    reviews: [],
    description: 'A clean-tech company that develops technology to recycle CO2 into fresh concrete, reducing carbon footprints.',
    pricing: {
      details: 'Technology licensing and equipment installation model. Contact for a quote.',
      url: 'https://www.carboncure.com/'
    }
  },
  {
    id: 'eigen-innovations',
    name: 'Eigen Innovations',
    solutions: ['OneView', 'AI-based Quality Inspection'],
    website: 'https://eigen.io/',
    linkedin: 'https://www.linkedin.com/company/eigen-innovations-inc-/',
    headquarters: {
      city: 'Fredericton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.IOT],
    industries: [Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Eigen Innovations provides AI-powered vision systems for industrial manufacturing.'
    },
    pros: ['Real-time defect detection', 'Scalable', 'Integrates with existing lines'],
    cons: ['High initial setup cost', 'Requires high-quality image data'],
    reviews: [],
    description: 'Provides AI-powered vision systems for industrial manufacturing to automate quality inspection.',
    pricing: {
      details: 'Custom enterprise pricing based on the number of inspection points and data volume. Contact for a quote.',
      url: 'https://eigen.io/'
    }
  },
  {
    id: 'attabotics',
    name: 'Attabotics',
    solutions: ['3D Robotic Storage', 'Fulfillment'],
    website: 'https://www.attabotics.com/',
    linkedin: 'https://www.linkedin.com/company/attabotics/',
    headquarters: {
      city: 'Calgary',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.ROBOT, SoftwareType.LOG],
    industries: [Industry.LOGISTICS, Industry.RETAIL],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Attabotics provides a 3D robotic storage and retrieval system for modern fulfillment centers.'
    },
    pros: ['Space efficiency', 'High speed', 'Scalable'],
    cons: ['High capital expenditure', 'Complex integration'],
    reviews: [],
    description: 'A robotics company that provides a 3D robotic storage and retrieval system for modern fulfillment centers.',
    pricing: {
      details: 'Enterprise capital expenditure and service model. Contact for a quote.',
      url: 'https://www.attabotics.com/'
    }
  },
  {
    id: 'trustscience',
    name: 'TrustScience',
    solutions: ['Credit Bureau 2.0', 'Alternative Credit Scoring'],
    website: 'https://www.trustscience.com/',
    linkedin: 'https://www.linkedin.com/company/trustscience/',
    headquarters: {
      city: 'Edmonton',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.FIN],
    industries: [Industry.FINANCE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'TrustScience uses AI and alternative data to provide more accurate credit scores.'
    },
    pros: ['Financial inclusion', 'Accurate risk assessment', 'AI-driven'],
    cons: ['Regulatory scrutiny on alternative data', 'Data privacy concerns'],
    reviews: [],
    description: 'Uses AI and alternative data to provide more accurate credit scores for underserved populations.',
    pricing: {
      details: 'Usage-based pricing for lenders and financial institutions. Contact for a quote.',
      url: 'https://www.trustscience.com/'
    }
  },
  {
    id: 'drivewyze',
    name: 'Drivewyze',
    solutions: ['PreClear', 'Weigh Station Bypass'],
    website: 'https://drivewyze.com/',
    linkedin: 'https://www.linkedin.com/company/drivewyze/',
    headquarters: {
      city: 'Edmonton',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.LOG, SoftwareType.ITS],
    industries: [Industry.LOGISTICS],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Drivewyze provides weigh station bypass and safety alert services for commercial trucking fleets.'
    },
    pros: ['Time savings for drivers', 'Fuel efficiency', 'Safety alerts'],
    cons: ['Subscription cost per truck', 'Limited to participating states/provinces'],
    reviews: [
      { platform: 'App Store', rating: 4.4, count: 500, url: 'https://apps.apple.com/us/app/drivewyze/id543210987' }
    ],
    description: 'Provides weigh station bypass and safety alert services for commercial trucking fleets.',
    pricing: {
      details: 'Subscription-based pricing per truck. Contact for fleet rates.',
      url: 'https://drivewyze.com/pricing/'
    }
  },
  {
    id: 'libro',
    name: 'Libro',
    solutions: ['Online Reservations', 'Guest Management'],
    website: 'https://libroreserve.com/',
    linkedin: 'https://www.linkedin.com/company/libroreserve/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.POS],
    industries: [Industry.HOSPITALITY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Libro is an online reservation and guest management platform for restaurants.'
    },
    pros: ['No per-cover fees', 'Easy to use', 'Strong integrations'],
    cons: ['Less brand recognition than OpenTable'],
    reviews: [
      { platform: 'G2', rating: 4.7, count: 10, url: 'https://www.g2.com/products/libro/reviews' }
    ],
    description: 'An online reservation and guest management platform for restaurants, helping them grow their business without high fees.',
    pricing: {
      details: 'Flat monthly subscription starting around $100/month. No per-cover fees.',
      url: 'https://libroreserve.com/pricing/'
    }
  },
  {
    id: 'potloc',
    name: 'Potloc',
    solutions: ['Consumer Research', 'Market Insights'],
    website: 'https://potloc.com/',
    linkedin: 'https://www.linkedin.com/company/potloc/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.RESEARCH, SoftwareType.AI],
    industries: [Industry.RETAIL, Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Potloc uses social media to reach niche audiences for consumer research.'
    },
    pros: ['High-quality respondents', 'Fast turnaround', 'Global reach'],
    cons: ['More expensive than DIY survey tools'],
    reviews: [],
    description: 'A consumer research company that uses social media to reach niche audiences and provide actionable insights.',
    pricing: {
      details: 'Project-based pricing based on sample size and audience complexity. Contact for a quote.',
      url: 'https://potloc.com/'
    }
  },
  {
    id: 'hopper',
    name: 'Hopper',
    solutions: ['Travel Booking', 'Price Prediction', 'Fintech for Travel'],
    website: 'https://www.hopper.com/',
    linkedin: 'https://www.linkedin.com/company/hopper/',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.AI, SoftwareType.ECOM],
    industries: [Industry.TRAVEL, Industry.TECH],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'GCP'],
      details: 'Hopper uses big data to predict and analyze airfare and hotel prices.'
    },
    pros: ['Accurate price predictions', 'User-friendly app', 'Innovative fintech products'],
    cons: ['Customer service can be slow', 'App-only focus for some features'],
    reviews: [
      { platform: 'App Store', rating: 4.8, count: 1000000, url: 'https://apps.apple.com/us/app/hopper-book-flights-hotels/id904056726' }
    ],
    description: 'A travel tech company that uses big data to predict and analyze airfare and hotel prices.',
    pricing: {
      details: 'Free app; revenue from bookings and fintech products (e.g., price freeze, cancel for any reason).',
      url: 'https://www.hopper.com/'
    }
  },
  {
    id: 'andgo-systems',
    name: 'Andgo Systems',
    solutions: ['Smart Absence Management', 'Shift Filling'],
    website: 'https://andgosystems.com/',
    linkedin: 'https://www.linkedin.com/company/andgo-systems/',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE, Industry.GOVERNMENT],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Andgo Systems provides automated absence management and shift-filling solutions.'
    },
    pros: ['Automates complex scheduling', 'Reduces overtime', 'Improves staff morale'],
    cons: ['Focused primarily on healthcare/public sector'],
    reviews: [],
    description: 'Provides automated absence management and shift-filling solutions for complex workforce environments.',
    pricing: {
      details: 'Enterprise subscription pricing based on organization size and complexity. Contact for a quote.',
      url: 'https://andgosystems.com/'
    }
  },
  {
    id: 'proof',
    name: 'Proof',
    solutions: ['Government Workflow', 'Digital Signatures', 'Policy Management'],
    website: 'https://www.proofgov.com/',
    linkedin: 'https://www.linkedin.com/company/proofgov/',
    headquarters: {
      city: 'Whitehorse',
      province: Province.YT
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.LEGAL],
    industries: [Industry.GOVERNMENT],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Proof helps governments go paperless by digitizing workflows and approvals.'
    },
    pros: ['Secure', 'Compliant', 'Specifically designed for government'],
    cons: ['Long sales cycles', 'Niche focus'],
    reviews: [],
    description: 'Helps governments go paperless by digitizing workflows, approvals, and policy management.',
    pricing: {
      details: 'Subscription-based pricing for government organizations. Contact for a quote.',
      url: 'https://www.proofgov.com/'
    }
  },
  {
    id: 'siku',
    name: 'SIKU',
    solutions: ['Community Platform', 'Environmental Monitoring'],
    website: 'https://siku.org/',
    linkedin: 'https://www.linkedin.com/company/siku-org/',
    headquarters: {
      city: 'Sanikiluaq',
      province: Province.NU
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.GIS],
    industries: [Industry.CROSS_INDUSTRY, Industry.GOVERNMENT],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'SIKU is a mobile app and web platform for Inuit to share knowledge about the environment.'
    },
    pros: ['Indigenous-led', 'Combines traditional knowledge with science', 'Offline support'],
    cons: ['Niche community focus', 'Requires local engagement'],
    reviews: [],
    description: 'A mobile app and web platform for Inuit to share knowledge about sea ice, hunting, and the environment.',
    pricing: {
      details: 'Free for individual users; community and research partnerships available.',
      url: 'https://siku.org/about'
    }
  },
  {
    id: 'theorymesh',
    name: 'TheoryMesh',
    solutions: ['Food Supply Chain Traceability', 'Sustainability Tracking'],
    website: 'https://theorymesh.com/',
    linkedin: 'https://www.linkedin.com/company/theorymesh/',
    headquarters: {
      city: 'Winnipeg',
      province: Province.MB
    },
    softwareTypes: [SoftwareType.SCM, SoftwareType.AI],
    industries: [Industry.AGRI, Industry.MANUFACTURING],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'TheoryMesh uses blockchain and AI to provide transparency in the food supply chain.'
    },
    pros: ['Blockchain-backed transparency', 'Farm-to-fork tracking', 'Sustainability insights'],
    cons: ['Requires participation from all supply chain partners'],
    reviews: [],
    description: 'Uses blockchain and AI to provide transparency and traceability in the food supply chain.',
    pricing: {
      details: 'Subscription-based pricing for food producers and processors. Contact for a quote.',
      url: 'https://theorymesh.com/'
    }
  },
  {
    id: 'freebalance',
    name: 'FreeBalance',
    solutions: ['FreeBalance Accountability Suite', 'Government Resource Planning (GRP)'],
    website: 'https://freebalance.com/en/',
    linkedin: 'https://www.linkedin.com/company/freebalance',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ERP, SoftwareType.FIN, SoftwareType.ITS],
    industries: [Industry.GOVERNMENT],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Regional (Global)',
      providers: ['Azure', 'On-premise'],
      details: 'FreeBalance provides flexible deployment options, including highly secure government-specific cloud environments and on-premise setups.'
    },
    pros: ['Specifically designed for PFM (Public Financial Management)', 'Modular architecture', 'Strong compliance with international standards'],
    cons: ['Very complex implementation', 'Focus is strictly on government/public sector'],
    reviews: [
      { platform: 'Gartner', rating: 4.5, count: 20, url: 'https://www.gartner.com/reviews/market/government-erp/vendor/freebalance' }
    ],
    description: 'A global provider of Government Resource Planning (GRP) software, helping governments improve fiscal health and transparency.',
    pricing: {
      details: 'Project-based and enterprise licensing. Pricing varies by government size and required modules.',
      url: 'https://freebalance.com/'
    }
  },
  {
    id: 'careerbeacon',
    name: 'CareerBeacon',
    solutions: ['Candidate Manager', 'Recruitment Workflow'],
    website: 'https://www.careerbeacon.com/en/candidate-manager',
    linkedin: 'https://www.linkedin.com/company/careerbeacon',
    headquarters: {
      city: 'Moncton',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Candidate and application data is stored securely in Canadian data centers.'
    },
    pros: ['Deep roots in Eastern Canada', 'User-friendly interface for candidates', 'Strong local talent pool access'],
    cons: ['Limited advanced automation compared to global ATS competitors'],
    reviews: [],
    description: 'An Atlantic Canadian leader in online recruitment and talent management solutions.',
    pricing: {
      details: 'Pricing based on job posting volume and subscription tiers. Contact for customized regional plans.',
      url: 'https://www.careerbeacon.com/'
    }
  },
  {
    id: 'clinia',
    name: 'Clinia',
    solutions: ['Health Search API', 'Provider Directory Management'],
    website: 'https://clinia.com/en-ca',
    linkedin: 'https://www.linkedin.com/company/clinia',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Clinia follows strict health data residency rules in Canada, ensuring PIPEDA compliance.'
    },
    pros: ['Powerful health-specific search indexes', 'Seamless API integration', 'Modern developer-first approach'],
    cons: ['Highly technical requirement for implementation', 'Specific to the healthcare vertical'],
    reviews: [],
    description: 'A health data infrastructure company providing advanced search and provider directory solutions.',
    pricing: {
      details: 'Usage-based API pricing and enterprise platform licensing. Custom quotes available.',
      url: 'https://clinia.com/'
    }
  },
  {
    id: 'emyode',
    name: 'Emyode',
    solutions: ['Azure Modernization', 'E-commerce Platforms'],
    website: 'https://emyode.com/en/products/',
    linkedin: 'https://www.linkedin.com/company/emyode',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.ECOM],
    industries: [Industry.TECH, Industry.RETAIL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Primary storage is in Azure Canadian regions, specialized in Microsoft stack modernization.'
    },
    pros: ['Strong Microsoft partnership', 'Expertise in high-traffic eCommerce', 'Customized modernization roadmaps'],
    cons: ['Service-heavy model', 'Platform dependency on Azure'],
    reviews: [],
    description: 'Focuses on application modernization and cloud-native solutions, specifically using Microsoft technologies.',
    pricing: {
      details: 'Service and subscription-based model. Contact for specific product and project pricing.',
      url: 'https://emyode.com/'
    }
  },
  {
    id: 'canimmunize',
    name: 'CANImmunize',
    solutions: ['CANImmunize Clinic', 'Vaccine Records App'],
    website: 'https://www.canimmunize.ca/',
    linkedin: 'https://www.linkedin.com/company/canimmunize',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE, Industry.GOVERNMENT],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'All PHI (Personal Health Information) is managed within Canadian regions with high-level encryption.'
    },
    pros: ['Excellent user experience for patients', 'Streamlines clinic workflows', 'Strong public health alignment'],
    cons: ['Limited functionality outside of immunizations'],
    reviews: [
      { platform: 'App Store', rating: 4.6, count: 1200, url: 'https://apps.apple.com/ca/app/canimmunize/id535735182' }
    ],
    description: 'A digital health company that provides platforms to manage vaccination records and clinic operations.',
    pricing: {
      details: 'Free for individual residents; subscription tiers for clinics and enterprise health organizations.',
      url: 'https://www.canimmunize.ca/'
    }
  },
  {
    id: 'east-asthma',
    name: 'eAsthma',
    solutions: ['Asthma Management Platform', 'Patient Monitoring'],
    website: 'https://www.easthma.ca/',
    linkedin: 'https://www.linkedin.com/company/easthma',
    headquarters: {
      city: 'Charlottetown',
      province: Province.PE
    },
    softwareTypes: [SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['On-premise', 'Private Cloud'],
      details: 'Supports local residency requirements for provincial health entities.'
    },
    pros: ['Clinically focused', 'Supports collaborative care models', 'Specialized for chronic respiratory conditions'],
    cons: ['Niche focus', 'Smaller development team'],
    reviews: [],
    description: 'A clinical management system designed specifically for asthma and COPD patient care.',
    pricing: {
      details: 'Licensing based on clinic volume and patient count. Contact for Maritime-specific health plans.',
      url: 'https://www.easthma.ca/'
    }
  },
  {
    id: 'mobia-health',
    name: 'Mobia Health',
    solutions: ['Clinical Operations Software', 'Process Automation'],
    website: 'https://mobiahealth.io/',
    linkedin: 'https://www.linkedin.com/company/mobia-it-software-solutions',
    headquarters: {
      city: 'Dartmouth',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.ITS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS', 'Azure'],
      details: 'Ensures compliance with Canadian healthcare privacy standards across all cloud deployments.'
    },
    pros: ['Deep expertise in healthcare IT', 'Highly customizable workflows', 'Excellent implementation support'],
    cons: ['Can be expensive for smaller clinics'],
    reviews: [],
    description: 'Specializes in the design and implementation of technology-enabled clinical process improvements.',
    pricing: {
      details: 'Enterprise SaaS pricing and professional service fees. Customized for hospital systems.',
      url: 'https://mobiahealth.io/'
    }
  },
  {
    id: 'signal1',
    name: 'Signal 1',
    solutions: ['Clinically Integrated AI', 'Patient Risk Predictive Tools'],
    website: 'https://signal1.ai/',
    linkedin: 'https://www.linkedin.com/company/signal1-ai',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Signal 1 uses secure, isolated environments within AWS Canadian regions for processing sensitive patient data.'
    },
    pros: ['Top-tier AI research integration', 'Reduces clinician burnout', 'Early detection of patient deterioration'],
    cons: ['Requires significant data integration with hospital EMRs'],
    reviews: [],
    description: 'A health AI company that develops predictive tools to support clinical decision-making within hospitals.',
    pricing: {
      details: 'Enterprise-level licensing for hospitals and healthcare systems. Contact for clinical pilot pricing.',
      url: 'https://signal1.ai/'
    }
  },
  {
    id: 'verto-health',
    name: 'Verto Health',
    solutions: ['Health Stack Digital Twin', 'Care Coordination'],
    website: 'https://verto.health/canada',
    linkedin: 'https://www.linkedin.com/company/verto-health',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Verto Health maintains strict data residency in Canada, ensuring compliance with provincial health privacy acts.'
    },
    pros: ['Unifies fragmented health data', 'Low-code automation for clinics', 'Highly scalable architecture'],
    cons: ['Complexity of "Digital Twin" concept may require significant training'],
    reviews: [],
    description: 'A leader in digital twin technology for healthcare, connecting disparate systems to improve patient outcomes.',
    pricing: {
      details: 'Enterprise licensing based on patient population and integrated endpoints. Contact for a demonstration.',
      url: 'https://verto.health/'
    }
  },
  {
    id: 'vitrai',
    name: 'Vitr.ai',
    solutions: ['AI Clinical Transcription', 'Medical Insight Engine'],
    website: 'https://vitr.ai/',
    linkedin: 'https://www.linkedin.com/company/vitr-ai',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Vitr.ai uses HIPAA-compliant Azure regions in Canada for all AI processing and storage.'
    },
    pros: ['High accuracy for medical terminology', 'Real-time charting support', 'Privacy-first design'],
    cons: ['Relatively new entrant in the AI scribe market'],
    reviews: [],
    description: 'Leverages advanced AI to automate clinical documentation and provide actionable insights for physicians.',
    pricing: {
      details: 'Monthly subscription per clinician. Volume discounts available for medical groups.',
      url: 'https://vitr.ai/'
    }
  },
  {
    id: 'fluid-ai',
    name: 'Fluid AI',
    solutions: ['FluidAI Monitor', 'Predictive Post-op Analytics'],
    website: 'https://fluidai.md/',
    linkedin: 'https://www.linkedin.com/company/fluidai',
    headquarters: {
      city: 'Kitchener',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI, SoftwareType.IOT],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Sensory data is encrypted and stored in secure Canadian cloud environments.'
    },
    pros: ['Revolutionary non-invasive monitoring', 'Focus on early leak detection', 'Clinically validated'],
    cons: ['Hardware-dependent software', 'Hospital-only application'],
    reviews: [],
    description: 'A digital health company creating smart monitoring solutions to predict surgical complications before they happen.',
    pricing: {
      details: 'Platform subscription paired with medical device sales/leasing. Contact for clinical evaluation pricing.',
      url: 'https://fluidai.md/'
    }
  },
  {
    id: 'crede-technologies',
    name: 'Crede Technologies',
    solutions: ['IoT Asset Tracking', 'Smart Building Management'],
    website: 'https://www.credetechnologies.com/',
    linkedin: 'https://www.linkedin.com/company/credetechnologies',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.IOT, SoftwareType.ITS],
    industries: [Industry.REAL_ESTATE, Industry.LOGISTICS],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['GCP'],
      details: 'Crede uses Google Cloud Platform regions in Canada for its IoT data lakes.'
    },
    pros: ['Real-time visibility', 'Hardware agnostic platform', 'Robust analytics dashboard'],
    cons: ['Requires IoT hardware deployment', 'Smaller support team'],
    reviews: [],
    description: 'Provides end-to-end IoT solutions for tracking high-value assets and managing smart facilities.',
    pricing: {
      details: 'Subscription based on number of tracked assets and sensors. Contact for project-specific implementation costs.',
      url: 'https://www.credetechnologies.com/'
    }
  },
  {
    id: 'cybercheck',
    name: 'CyberCheck',
    solutions: ['AI Cyber Investigator', 'Digital Forensic Intelligence'],
    website: 'https://cybercheck.ai/',
    linkedin: 'https://www.linkedin.com/company/cybercheck-ai',
    headquarters: {
      city: 'Edmonton',
      province: Province.AB
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.AI],
    industries: [Industry.GOVERNMENT, Industry.LEGAL],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Regional (Restricted)',
      providers: ['Private Cloud'],
      details: 'CyberCheck adheres to extremely high security standards required by law enforcement and government agencies.'
    },
    pros: ['Unique AI capabilities for open-source intelligence', 'High admissibility in legal contexts', 'Used by major police forces'],
    cons: ['Restricted to government and licensed professional use only'],
    reviews: [],
    description: 'An AI-powered digital investigation platform that identifies cyber-criminals through massive datasets.',
    pricing: {
      details: 'Annual agency-wide licensing and per-case investigating fees. Exclusive to law enforcement and legal sectors.',
      url: 'https://cybercheck.ai/'
    }
  },
  {
    id: 'emergconnect',
    name: 'EmergConnect',
    solutions: ['ER Front-door Platform', 'Emergency Dept. Workflow'],
    website: 'https://emergconnect.com/ca/',
    linkedin: 'https://www.linkedin.com/company/emergconnect',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'All patient registrations and triage data are stored in Canadian health-grade data centers.'
    },
    pros: ['Reduces physical ER overcrowding', 'Digitizes patient intake', 'Improves patient transparency'],
    cons: ['Depends heavily on hospital staff adoption', 'EMR integration complexity'],
    reviews: [],
    description: 'Provides a digital "front door" for emergency departments, allowing patients to register and triage from home.',
    pricing: {
      details: 'SaaS subscription for hospitals. Contact for hospital-wide implementation quotes.',
      url: 'https://emergconnect.com/'
    }
  },
  {
    id: 'expeflow',
    name: 'Expeflow',
    solutions: ['Automated Claims Review', 'Legal Intelligence Workflow'],
    website: 'https://expeflow.com/',
    linkedin: 'https://www.linkedin.com/company/expeflow',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.LEGAL, SoftwareType.AI],
    industries: [Industry.LEGAL, Industry.FINANCE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Expeflow utilizes secure Azure regions in Canada with SOC 2 compliance.'
    },
    pros: ['Automates document-heavy workflows', 'Reduces review time by ~70%', 'Strong integration with insurance data'],
    cons: ['Deep vertical focus in insurance/personal injury law'],
    reviews: [],
    description: 'An AI-driven workflow automation platform specifically designed for the legal and insurance sectors.',
    pricing: {
      details: 'Subscription-based license per user or per case file. Contact for enterprise legal firm pricing.',
      url: 'https://expeflow.com/'
    }
  },
  {
    id: 'mutuo-health',
    name: 'Mutuo Health',
    solutions: ['AutoScribe', 'AI Assistant for Clinicians'],
    website: 'https://www.mutuohealth.com/',
    linkedin: 'https://www.linkedin.com/company/mutuo-health-solutions',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Uses Canadian-based cloud servers with end-to-end encryption for all clinical audio processing.'
    },
    pros: ['Dramatically reduces administrative burden', 'Natural language processing for medical settings', 'Compatible with major EMRs'],
    cons: ['Requires active microphone access in clinical settings'],
    reviews: [],
    description: 'An AI clinical assistant that automatically converts physician-patient conversations into medical notes.',
    pricing: {
      details: 'Monthly subscription per clinician. Tiered pricing for family health teams and clinics.',
      url: 'https://www.mutuohealth.com/'
    }
  },
  {
    id: 'populus-plus',
    name: 'Populus Plus',
    solutions: ['Municipal Engagement Platform', 'Community Feedback Tools'],
    website: 'https://populusplus.com/',
    linkedin: 'https://www.linkedin.com/company/populusplus',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.COMMS, SoftwareType.ITS],
    industries: [Industry.GOVERNMENT],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Community data and voter feedback are kept within Canadian borders to satisfy municipal bylaws.'
    },
    pros: ['Highly accessible design', 'Detailed reporting for city councils', 'Supports multiple languages'],
    cons: ['Very specific to municipal government use cases'],
    reviews: [],
    description: 'A platform designed to help municipal governments engage with their citizens and gather actionable feedback.',
    pricing: {
      details: 'Annual subscription based on municipality population size. Contact for regional municipal board pricing.',
      url: 'https://populusplus.com/'
    }
  },
  {
    id: 'procedure-flow',
    name: 'ProcedureFlow',
    solutions: ['Knowledge Management', 'Visual Standard Operating Procedures'],
    website: 'https://procedureflow.com/',
    linkedin: 'https://www.linkedin.com/company/procedureflow',
    headquarters: {
      city: 'Saint John',
      province: Province.NB
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.BI],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Regional (Global)',
      providers: ['AWS'],
      details: 'Offers regional data residency options for enterprise customers in Canada and global markets.'
    },
    pros: ['Turns complex text SOPs into simple visual maps', 'Significant reduction in training time', 'Cloud-based and easy to update'],
    cons: ['Initial map creation can be time-consuming'],
    reviews: [
      { platform: 'G2', rating: 4.8, count: 50, url: 'https://www.g2.com/products/procedureflow/reviews' }
    ],
    description: 'A visual knowledge management software that simplifies complex processes for employees and teams.',
    pricing: {
      details: 'Per-user monthly subscription. Enterprise plans include advanced security and dedicated support.',
      url: 'https://procedureflow.com/pricing'
    }
  },
  {
    id: 'skip-the-waiting-room',
    name: 'Skip the Waiting Room',
    solutions: ['Clinic Walk-in Appointments', 'Virtual Check-in'],
    website: 'https://skipthewaitingroom.com/',
    linkedin: 'https://www.linkedin.com/company/skip-the-waiting-room',
    headquarters: {
      city: 'Charlottetown',
      province: Province.PE
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.SCHEDULING],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Private Cloud'],
      details: 'Ensures healthcare data compliance for Maritime and Canadian patients.'
    },
    pros: ['Reduces physical queueing', 'Increases clinic efficiency', 'Easy for elderly patients to use'],
    cons: ['Service availability depends on specific participating clinics'],
    reviews: [],
    description: 'A platform that helps patients book walk-in appointments and wait from the comfort of their home.',
    pricing: {
      details: 'Free for patients. Licensing fees for clinics and medical centers. Contact for Atlantic Canada regional rates.',
      url: 'https://skipthewaitingroom.com/'
    }
  },
  {
    id: 'get-careteam',
    name: 'CareTeam',
    solutions: ['Patient Care Coordination', 'Health Journey Mapping'],
    website: 'https://www.getcareteam.com/',
    linkedin: 'https://www.linkedin.com/company/getcareteam',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.COMMS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Maintains PIPEDA and HIPAA compliance within secure Canadian Azure/AWS regions.'
    },
    pros: ['Excellent for complex chronic care', 'Facilitates family/caregiver involvement', 'Clinically actionable tasks'],
    cons: ['Optimal use requires coordination across multiple providers'],
    reviews: [],
    description: 'A digital health collaboration platform that enables high-intensity care coordination for complex patients.',
    pricing: {
      details: 'Enterprise licensing for health authorities and specialty clinics. Custom development options available.',
      url: 'https://www.getcareteam.com/'
    }
  },
  {
    id: 'data-cm',
    name: 'DataCM',
    solutions: ['Document Lifecycle Management', 'Digital Transformation'],
    website: 'https://www.datacm.com/',
    linkedin: 'https://www.linkedin.com/company/datacm',
    headquarters: {
      city: 'Brampton',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.COMPLIANCE],
    industries: [Industry.FINANCE, Industry.RETAIL],
    companySize: [CompanySize.LARGE],
    dataStorage: {
      location: 'Canada',
      providers: ['On-premise', 'Private Cloud'],
      details: 'Expertise in high-security document storage and secure digital delivery for financial institutions.'
    },
    pros: ['Long-standing reliability', 'Expertise in highly regulated data industries', 'Hybrid digital/physical solutions'],
    cons: ['Legacy focus may feel slower than modern SaaS startups'],
    reviews: [],
    description: 'A major provider of document management and business process outsourcing solutions in Canada.',
    pricing: {
      details: 'Custom enterprise contracts based on document volume and service level agreements.',
      url: 'https://www.datacm.com/'
    }
  },
  {
    id: 'lime-health',
    name: 'Lime Health',
    solutions: ['Digital Health Benefits', 'Workforce Wellness Platform'],
    website: 'https://lime.health/en/',
    linkedin: 'https://www.linkedin.com/company/limehealth',
    headquarters: {
      city: 'Montreal',
      province: Province.QC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.HR],
    industries: [Industry.CROSS_INDUSTRY],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['Azure'],
      details: 'Benefit data is stored in Azure Canadian regions with strict privacy controls.'
    },
    pros: ['Focuses on preventative care', 'Seamless integration with payroll', 'High employee engagement rates'],
    cons: ['Regional focus on Quebec and Ontario primarily'],
    reviews: [],
    description: 'A health-tech company reinventing employee benefits with a focus on preventative medicine and wellness.',
    pricing: {
      details: 'Per-employee per-month (PEPM) subscription. Custom plans for SMEs and large corporations.',
      url: 'https://lime.health/'
    }
  },
  {
    id: 'liminality',
    name: 'Liminality',
    solutions: ['KAP Data Platform', 'Clinical Outcomes for Ketamine Therapy'],
    website: 'https://www.liminality.ca/',
    linkedin: 'https://www.linkedin.com/company/liminality-health',
    headquarters: {
      city: 'Victoria',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.PHARMA, Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Specialized in storing sensitive mental health data with ultra-secure encryption.'
    },
    pros: ['First-mover in psychedelic therapy data', 'Support for specialized clinics', 'Focus on evidence-based outcomes'],
    cons: ['Extremely niche market currently'],
    reviews: [],
    description: 'Intelligence platform designed specifically for clinics providing Ketamine-Assisted Psychotherapy (KAP).',
    pricing: {
      details: 'Clinic-based subscription for data capture and outcome reporting. Contact for partnership pricing.',
      url: 'https://www.liminality.ca/'
    }
  },
  {
    id: 'lumeto',
    name: 'Lumeto',
    solutions: ['InvolveXR', 'Healthcare VR Training'],
    website: 'https://lumeto.com/',
    linkedin: 'https://www.linkedin.com/company/lumeto',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.EDU],
    industries: [Industry.HEALTHCARE, Industry.EDUCATION],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Training data and simulation logs are stored in secure cloud environments.'
    },
    pros: ['Highly immersive simulation', 'Collaborative multi-user environment', 'Detailed analytical feedback for students'],
    cons: ['Requires VR hardware investment'],
    reviews: [],
    description: 'A VR software company providing immersive training environments for the healthcare and public safety sectors.',
    pricing: {
      details: 'Enterprise licensing for universities and teaching hospitals. Per-seat or flat subscription models.',
      url: 'https://lumeto.com/'
    }
  },
  {
    id: 'luxsonic',
    name: 'Luxsonic',
    solutions: ['SieVRt', 'VR Diagnostic Imaging'],
    website: 'https://luxsonic.ca/',
    linkedin: 'https://www.linkedin.com/company/luxsonic-technologies',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.GIS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Luxsonic ensures medical imaging data residency within Canada for all SieVRt cloud deployments.'
    },
    pros: ['Portable diagnostic-grade imaging', 'Improves remote radiology access', 'Innovative use of VR/AR'],
    cons: ['Navigating medical device regulations in multiple jurisdictions'],
    reviews: [],
    description: 'Develops immersive software to improve access to diagnostic-grade medical imaging for remote communities.',
    pricing: {
      details: 'Software as a Medical Device (SaMD) licensing. Project-based pricing for remote health networks.',
      url: 'https://luxsonic.ca/'
    }
  },
  {
    id: 'managing-life',
    name: 'ManagingLife',
    solutions: ['Manage My Pain', 'Chronic Pain Data Services'],
    website: 'https://www.managinglife.com/',
    linkedin: 'https://www.linkedin.com/company/managinglife-inc-',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.AI],
    industries: [Industry.HEALTHCARE, Industry.FINANCE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Storing sensitive pain management data with strict HIPAA and PIPEDA compliance.'
    },
    pros: ['Clinically validated results', 'Provides actionable data for insurers', 'Empowers patients to track outcomes'],
    cons: ['Requires consistent patient input to be effective'],
    reviews: [
      { platform: 'App Store', rating: 4.7, count: 500, url: 'https://apps.apple.com/ca/app/manage-my-pain/id646450849' }
    ],
    description: 'A digital health company specialized in quantifying chronic pain and improving clinical outcomes.',
    pricing: {
      details: 'Free for individual users. Data-driven contracts for insurers, clinics, and research organizations.',
      url: 'https://www.managinglife.com/'
    }
  },
  {
    id: 'get-maple',
    name: 'Maple',
    solutions: ['Virtual Health Consultations', 'Mental Health Support'],
    website: 'https://www.getmaple.ca/',
    linkedin: 'https://www.linkedin.com/company/getmaple',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.COMMS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'All clinical consultations and records are kept in encrypted Canadian servers under strict health data laws.'
    },
    pros: ['Fastest access to specialists in Canada', 'High-quality mental health support', 'Enterprise/Employee benefit integration'],
    cons: ['Some services require out-of-pocket payment depending on province'],
    reviews: [
      { platform: 'App Store', rating: 4.9, count: 25000, url: 'https://apps.apple.com/ca/app/maple-24-7-online-doctors/id1145135111' }
    ],
    description: 'Canada\'s leading virtual care platform connecting patients 24/7 with doctors and specialists.',
    pricing: {
      details: 'Per-visit pricing or monthly membership for individuals. Per-employee-per-month for corporate plans.',
      url: 'https://www.getmaple.ca/pricing/'
    }
  },
  {
    id: 'patient-companion',
    name: 'PatientCompanion',
    solutions: ['Patient Bedside Terminal', 'Nursing Call Triage'],
    website: 'https://www.patientcompanion.ca/',
    linkedin: 'https://www.linkedin.com/company/patientcompanion',
    headquarters: {
      city: 'London',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.COMMS],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Integrates with hospital intranets, ensuring data never leaves the facility or secure cloud.'
    },
    pros: ['Reduces nursing alarm fatigue', 'Improves patient satisfaction', 'Modernizes bedside experience'],
    cons: ['Significant hardware installation required in hospitals'],
    reviews: [],
    description: 'Provides a patient communication system that triages requests to the appropriate healthcare staff.',
    pricing: {
      details: 'Hospital-level licensing based on number of beds and integrated departments. Contact for pilot pricing.',
      url: 'https://www.patientcompanion.ca/'
    }
  },
  {
    id: 'seamless-md',
    name: 'SeamlessMD',
    solutions: ['Guided Surgery Patient App', 'Digital Care Journeys'],
    website: 'https://www.seamless.md/',
    linkedin: 'https://www.linkedin.com/company/seamlessmd',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'SeamlessMD utilizes Canadian data centers for all patient health records and app data.'
    },
    pros: ['Clinically proven to reduce readmissions', 'High patient adherence rates', 'Pre-built surgery-specific protocols'],
    cons: ['Requires patients to have a smartphone/tablet'],
    reviews: [
      { platform: 'App Store', rating: 4.8, count: 200, url: 'https://apps.apple.com/us/app/seamlessmd/id920150935' }
    ],
    description: 'A platform that provides guided surgery and digital care journeys for patients across multiple medical specialties.',
    pricing: {
      details: 'Enterprise licensing for hospitals. Pricing determined by patient volume and clinical modules.',
      url: 'https://www.seamless.md/'
    }
  },
  {
    id: 'tenera-care',
    name: 'Tenera Care',
    solutions: ['Real-time Resident Tracking', 'Automated Fall Detection'],
    website: 'https://www.teneracare.ca/',
    linkedin: 'https://www.linkedin.com/company/tenera-care',
    headquarters: {
      city: 'Halifax',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.IOT],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Resident safety and location data is stored in secure Canadian cloud regions.'
    },
    pros: ['Superior accuracy compared to traditional nurse calls', 'Data-driven insights for staffing', 'Hands-free safety for seniors'],
    cons: ['Requires installation of specialized IoT hardware throughout the facility'],
    reviews: [],
    description: 'A real-time positioning and analytics platform for senior living and long-term care facilities.',
    pricing: {
      details: 'Subscription based on number of residents and facility size. Includes hardware lease options.',
      url: 'https://www.teneracare.ca/'
    }
  },
  {
    id: 'tenzr-health',
    name: 'Tenzr Health',
    solutions: ['Wearable Physical Therapy', 'Patient Progress Tracking'],
    website: 'https://www.tenzrhealth.com/',
    linkedin: 'https://www.linkedin.com/company/tenzr-health',
    headquarters: {
      city: 'Vancouver',
      province: Province.BC
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.IOT],
    industries: [Industry.HEALTHCARE, Industry.FITNESS],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Biometric and therapeutic recovery data is kept in Canadian data centers.'
    },
    pros: ['Provides objective data for hand/wrist recovery', 'Gamifies boring exercises', 'Improves therapist visibility into home exercises'],
    cons: ['Requires specialized wearable sensor'],
    reviews: [],
    description: 'Digital health company that uses wearable sensors to monitor and improve physical therapy outcomes.',
    pricing: {
      details: 'Clinic subscription and per-device patient kits. Contact for clinic partnership rates.',
      url: 'https://www.tenzrhealth.com/'
    }
  },
  {
    id: 'virtual-hallway',
    name: 'Virtual Hallway',
    solutions: ['GP-Specialist Consult Platform', 'Rapid Medical Scheduling'],
    website: 'https://virtualhallway.ca/',
    linkedin: 'https://www.linkedin.com/company/virtual-hallway',
    headquarters: {
      city: 'Dartmouth',
      province: Province.NS
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.SCHEDULING],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Ensures clinical consultation logs are stored in PIPEDA-compliant Canadian servers.'
    },
    pros: ['Reduces specialist wait times', 'Enables family doctors to bill for consults', 'Direct phone consult model'],
    cons: ['Service depends on available specialist network in each province'],
    reviews: [],
    description: 'A platform that connects family doctors with specialists for clinical consultations via phone.',
    pricing: {
      details: 'Free for family physicians to join. Subscription or per-consult fees for health systems.',
      url: 'https://virtualhallway.ca/'
    }
  },
  {
    id: 'welbi',
    name: 'Welbi',
    solutions: ['Resident Experience Software', 'Senior Living Analytics'],
    website: 'https://www.welbi.com/',
    linkedin: 'https://www.linkedin.com/company/welbi',
    headquarters: {
      city: 'Ottawa',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.HR],
    industries: [Industry.HEALTHCARE, Industry.HOSPITALITY],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Welbi ensures that all senior resident personal and activity data is stored locally in Canada.'
    },
    pros: ['Reduces administrative work for activity directors', 'Personalizes resident care', 'Improves family transparency'],
    cons: ['Requires change management for staff using paper-based calendars'],
    reviews: [],
    description: 'A resident experience platform for senior living communities that personalizes programs and improves social engagement.',
    pricing: {
      details: 'Annual subscription fee per senior living community. Volume discounts for multi-facility operators.',
      url: 'https://www.welbi.com/'
    }
  },
  {
    id: 'zodiac-lightwaves',
    name: 'Zodiac Lightwaves',
    solutions: ['Wireless Solutions', 'Nurse Call Systems'],
    website: 'https://zodiaclightwaves.com/',
    linkedin: 'https://www.linkedin.com/company/zodiaclightwaves',
    headquarters: {
      city: 'Scarborough',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.SEC, SoftwareType.IOT],
    industries: [Industry.HEALTHCARE, Industry.RESIDENTIAL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['On-premise'],
      details: 'Specializes in integrated on-premise hardware and software for senior care security.'
    },
    pros: ['Integrated security and nurse call', 'Strong local support in Ontario', 'Long history of reliability'],
    cons: ['Less "cloud-first" than some newer competitors'],
    reviews: [],
    description: 'Provides integrated communication and security technologies for healthcare and commercial buildings.',
    pricing: {
      details: 'Project-based hardware and software licensing. Maintenance contracts available.',
      url: 'https://zodiaclightwaves.com/'
    }
  },
  {
    id: 'book-jane',
    name: 'BookJane',
    solutions: ['Healthcare Staffing Platform', 'Shift Management'],
    website: 'https://www.bookjane.com/',
    linkedin: 'https://www.linkedin.com/company/bookjane',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.SCHEDULING],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Personnel and scheduling data is stored in Canadian cloud regions to satisfy labor laws.'
    },
    pros: ['Reduces agency spend', 'Internal pool optimization', 'Rapid deployment for emergency staffing'],
    cons: ['Requires high adoption across all nursing team members'],
    reviews: [],
    description: 'An all-in-one platform that helps healthcare facilities manage their internal staff and external agency pools.',
    pricing: {
      details: 'Subscription based on number of staff members and modules selected. Plus recruitment fees where applicable.',
      url: 'https://www.bookjane.com/'
    }
  },
  {
    id: 'blanc-labs',
    name: 'Blanc Labs',
    solutions: ['Financial Services Automation', 'Digital Product Design'],
    website: 'https://blanclabs.com/',
    linkedin: 'https://www.linkedin.com/company/blanclabs',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.ITS, SoftwareType.FIN],
    industries: [Industry.FINANCE, Industry.TRAVEL],
    companySize: [CompanySize.MEDIUM],
    dataStorage: {
      location: 'Regional (Global)',
      providers: ['AWS', 'Azure'],
      details: 'Offers customized data residency solutions for large enterprise financial clients.'
    },
    pros: ['Deep expertise in banking and lending', 'Innovative automation platforms', 'End-to-end digital transformation'],
    cons: ['Higher cost tier for custom enterprise solutions'],
    reviews: [],
    description: 'A digital transformation firm specializing in building innovative software products for the financial services sector.',
    pricing: {
      details: 'Project-based and professional services pricing. Contact for custom product development quotes.',
      url: 'https://blanclabs.com/'
    }
  },
  {
    id: 'caribou-care',
    name: 'Caribou',
    solutions: ['Home Care Management', 'Caregiver Scheduling'],
    website: 'https://www.caribou.care/',
    linkedin: 'https://www.linkedin.com/company/cariboucare',
    headquarters: {
      city: 'Toronto',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HEALTH, SoftwareType.HR],
    industries: [Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'Maintains strict health data residency in Canada for all patient and caregiver records.'
    },
    pros: ['Modern, clean user interface', 'Mobile-first design for caregivers', 'Robust payroll integrations'],
    cons: ['Focuses primarily on home care; less suited for residential facilities'],
    reviews: [],
    description: 'A cloud-based home care software platform designed to streamline operations and improve caregiver retention.',
    pricing: {
      details: 'SaaS subscription based on number of active clients or caregivers. Custom tiers for growing agencies.',
      url: 'https://www.caribou.care/'
    }
  },
  {
    id: 'caring-support',
    name: 'Caring Support',
    solutions: ['Healthcare Job Board', 'Education Management'],
    website: 'https://www.caringsupport.com/',
    linkedin: 'https://www.linkedin.com/company/caringsupport',
    headquarters: {
      city: 'London',
      province: Province.ON
    },
    softwareTypes: [SoftwareType.HR, SoftwareType.EDU],
    industries: [Industry.HEALTHCARE, Industry.EDUCATION],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['GCP'],
      details: 'User profiles and employment records are stored in secure Canadian Google Cloud regions.'
    },
    pros: ['Direct focus on the healthcare vertical', 'Verified worker credentials', 'Supports healthcare students and schools'],
    cons: ['Limited outside of Ontario market currently'],
    reviews: [],
    description: 'A specialized job board and healthcare professional network that connects employers with health workers and students.',
    pricing: {
      details: 'Free for healthcare professionals. Subscription and per-posting fees for employers.',
      url: 'https://www.caringsupport.com/'
    }
  },
  {
    id: 'solus-guard',
    name: 'SolusGuard',
    solutions: ['Lone Worker Safety App', 'Monitoring Dashboard'],
    website: 'https://www.solusguard.com/',
    linkedin: 'https://www.linkedin.com/company/solusguard',
    headquarters: {
      city: 'Saskatoon',
      province: Province.SK
    },
    softwareTypes: [SoftwareType.SEC, SoftwareType.COMMS],
    industries: [Industry.GOVERNMENT, Industry.UTILITIES, Industry.HEALTHCARE],
    companySize: [CompanySize.SMALL],
    dataStorage: {
      location: 'Canada',
      providers: ['AWS'],
      details: 'All safety monitoring and worker location data is stored in Canadian AWS data centers.'
    },
    pros: ['Innovative wearable panic buttons', 'Reliable monitoring dispatch', 'Designed for remote/high-risk workers'],
    cons: ['Requires hardware purchase for panic buttons'],
    reviews: [],
    description: 'A safety technology company providing hardware and software solutions to protect lone workers in high-risk environments.',
    pricing: {
      details: 'Monthly subscription per monitored worker + one-time cost for safety wearables. Contact for government volume pricing.',
      url: 'https://www.solusguard.com/'
    }
  },
];
