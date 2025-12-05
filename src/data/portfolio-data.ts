import { Mail, Phone, MapPin } from 'lucide-react'

export const NAVIGATION_ITEMS = [
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Certificate', href: '#certificates' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#internships' },
    { name: 'Contact', href: '#contact' }
]

export const CERTIFICATES = [
    {
        id: 'ibm-data-analyst',
        title: 'IBM Data Analyst Professional Certificate',
        issuer: 'IBM',
        date: 'Nov 5, 2024',
        startDate: 'Oct 2025',
        endDate: 'Nov 2025',
        completionTime: '2 Months',
        courseCount: '11',
        certificateType: 'Professional Certificate',
        level: 'Professional',
        description: 'This IBM Professional Certificate is earned after successfully completing 11 courses on various topics in Data Analytics. The learner understands the core principles of data analysis and has worked hands-on with a variety of data sources, project scenarios, and data analysis tools, including Excel, SQL, Relational Databases, Python, Jupyter Notebooks, and Cognos Analytics, gaining practical experience with data manipulation, data analysis, and data visualization.',
        skills: [
            'Data Analysis', 'Python Programming', 'SQL', 'Data Visualization',
            'Microsoft Excel', 'Dashboard Creation', 'Statistical Analysis',
            'Predictive Modelling', 'Exploratory Data Analysis', 'Business Intelligence',
            'Data Cleansing', 'Data Wrangling', 'Pandas', 'Numpy', 'Matplotlib',
            'Seaborn', 'Folium', 'Cognos Analytics', 'Pivot Tables', 'Hypothesis Testing',
            'Generative AI'
        ],
        highlights: [
            'Completed 11 rigorous courses covering the entire data analysis lifecycle',
            'Built comprehensive portfolio projects demonstrating end-to-end analysis',
            'Mastered Python for Data Science, SQL databases, and visualization tools',
            'Analyzed real-world datasets across multiple industries and business scenarios',
            'Gained hands-on experience with industry-standard tools and best practices'
        ],
        courses: [
            'Introduction to Data Analytics',
            'Excel Basics for Data Analysis',
            'Data Visualization and Dashboards with Excel and Cognos',
            'Python for Data Science, AI & Development',
            'Python Project for Data Science',
            'Databases and SQL for Data Science with Python',
            'Data Analysis with Python',
            'Data Visualization with Python',
            'IBM Data Analyst Capstone Project',
            'Generative AI: Enhance your Data Analytics Career',
            'Data Analyst Career Guide and Interview Preparation'
        ],
        credentialId: 'FPC586MR2YCN',
        certificateUrl: '/certificates/IBM-Data-Analyst-Certificate.pdf',
        verificationUrl: 'https://coursera.org/verify/professional-cert/FPC586MR2YCN',
        platform: 'Coursera',
        skillCategories: {
            'Core Data Analysis': [
                'Data Analysis',
                'EDA (Exploratory Data Analysis)',
                'Data Storytelling',
                'Data Presentation'
            ],
            'Programming & Query Languages': [
                'Python Programming',
                'SQL'
            ],
            'Data Engineering': [
                'Data Wrangling',
                'Data Transformation',
                'ETL (Extract, Transform, Load)',
                'Data Import/Export'
            ],
            'Visualization & Dashboards': [
                'Data Visualization',
                'Statistical Visualization',
                'Interactive Data Visualization',
                'Dashboard',
                'Plotly',
                'Data Visualization Software'
            ],
            'Business Intelligence & Tools': [
                'IBM Cognos Analytics',
                'Microsoft Excel',
                'Excel Formulas'
            ],
            'Emerging Technologies': [
                'Generative AI'
            ],
            'Professional Development': [
                'Professional Networking'
            ]
        }
    },
    {
        id: 'myskill-excel',
        title: 'Microsoft Excel Professional Skill Certificate',
        issuer: 'MySkill',
        date: 'Sep 2025',
        startDate: 'Sep 2025',
        endDate: 'Sep 2025',
        completionTime: '1 Month',
        courseCount: '5',
        certificateType: 'Professional Skill',
        level: 'Professional',
        description: 'Completed a Full Learning Path with Professional Skill during 59 hours in Microsoft Excel. This comprehensive program covers Excel from basic to advanced levels, including data manipulation, forecasting, regression, and statistical analysis. Gained hands-on experience with data cleansing, visualization, pivot tables, Power Pivot, VBA macros, and advanced analytical techniques.',
        courses: [
            'Microsoft Excel Basic (Cleanse, Sort, Filter, Format, Aggregate, Conditional IF)',
            'Microsoft Excel Intermediate (Lookup & Index Match, Data Visualization, Pivot Table, Math Function, Date & Time Manipulation, Logical & Information Function, Dynamic Array, Referencing Cell & Text)',
            'Microsoft Excel Advanced (Power Pivot, What-If Analysis, Macro VBA)',
            'Data Manipulation',
            'Forecasting, Regression and Statistic (Time Series Analysis, Linear Regression, Forecasting Time Series, Descriptive Statistic)'
        ],
        credentialId: 'MS-3/9/2025-FWQ2FpFLDH393DhfzzzY',
        verificationUrl: '/certificates/Microsoft-Excel-Certificate.pdf',
        platform: 'MySkill',
        skillCategories: {
            'Excel Fundamentals': [
                'Data Cleansing',
                'Sorting & Filtering',
                'Data Formatting',
                'Aggregate Functions',
                'Conditional IF'
            ],
            'Intermediate Excel': [
                'VLOOKUP & HLOOKUP',
                'INDEX MATCH',
                'Pivot Tables',
                'Data Visualization',
                'Math Functions',
                'Date & Time Manipulation',
                'Logical Functions',
                'Dynamic Arrays',
                'Cell Referencing'
            ],
            'Advanced Excel': [
                'Power Pivot',
                'What-If Analysis',
                'Macro VBA',
                'Automation'
            ],
            'Data Analysis': [
                'Data Manipulation',
                'Time Series Analysis',
                'Linear Regression',
                'Forecasting',
                'Descriptive Statistics'
            ]
        }
    }
]

export const INTERNSHIPS = [
    {
        id: 'kimia-farma-intern',
        title: 'Big Data Analytics Project-Based Internship',
        company: 'Kimia Farma',
        period: 'Oct 2025 - Nov 2025',
        startDate: 'Oct 2025',
        endDate: 'Nov 2025',
        completionTime: '2 Months',
        certificateType: 'Project-Based Internship',
        level: 'Excellent',
        description: 'Successfully completed the Kimia Farma Big Data Analytics Project-Based Internship Program, demonstrating Excellent performance as a student. Gained hands-on experience in data analysis, big data processing, and scheduling.',
        skills: [
            'Data Analysis',
            'Big Data',
            'Big Data Processing',
            'Big Data Scheduling',
            'Data Analytics',
            'Project Management'
        ],
        achievements: [
            'Achieved Excellent rating with 89.05 average score',
            'Completed Big Data Analytics project',
            'Mastered Big Data Processing and Scheduling'
        ],
        credentialId: '352967IAPDGIK3112025',
        verificationUrl: '/certificates/Rakamin-Kimia-Farma-PBI.pdf',
        platform: 'Kimia Farma'
    }
]

export const PROJECTS = [
    {
        id: 'customer-segmentation',
        title: 'Customer Segmentation Model',
        description: 'Machine learning model that segments customers based on behavior, increasing targeted marketing effectiveness by 35%.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
        impact: '35% increase in marketing ROI'
    }
]

export const SKILLS = {
    'Data Analysis Tools': ['IBM Cognos Analytics', 'Data Analysis', 'Data Visualization', 'Data Wrangling', 'Plotly', 'Exploratory Data Analysis', 'Dashboard', 'Microsoft Excel', 'Data Cleansing'],
    'Programming & Querying': ['Python Programming', 'SQL'],
    'Data Management': ['Data Storytelling', 'Big Data', 'Data Transformation']
}

export const CONTACT_INFO = {
    email: 'setyonugrohodwibudi@gmail.com',
    phone: '+62 851 8611 1556',
    location: 'East Java, Indonesia',
    linkedin: 'https://www.linkedin.com/'
}

export const getDropdownItems = (sectionName: string) => {
    switch (sectionName) {
        case 'Project':
            return PROJECTS.map(p => ({ label: p.title, href: `#${p.id}` }))
        case 'Certificate':
            return CERTIFICATES.map(c => ({ label: c.title, href: `#${c.id}` }))
        case 'Experience':
            return INTERNSHIPS.map(i => ({ label: i.title, href: `#${i.id}` }))
        case 'Skill':
            return Object.keys(SKILLS).map(category => ({
                label: category,
                href: `#skills-${category.toLowerCase().replace(/\s+/g, '-')}`
            }))
        default:
            return []
    }
}
