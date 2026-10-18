export type CityLocation = {
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  slug: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  hubs: string;
  industries: string;
  keywords: string;
};

export const locations: CityLocation[] = [
  {
    "tier": "Tier 1",
    "slug": "bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "lat": 12.9716,
    "lng": 77.5946,
    "hubs": "Koramangala, HSR Layout, Whitefield, Electronic City, Indiranagar, Manyata Tech Park",
    "industries": "SaaS, EdTech, Tech Startups, Real Estate Telesales",
    "keywords": "Telecalling CRM Bangalore, SIM Based Sales CRM Bangalore, Call Recording Software Bengaluru, EdTech Calling App Bangalore, Real Estate Telecalling Software Bangalore"
  },
  {
    "tier": "Tier 1",
    "slug": "delhi-ncr",
    "city": "Delhi NCR (Gurgaon & Noida)",
    "state": "Delhi / Haryana / UP",
    "lat": 28.6139,
    "lng": 77.209,
    "hubs": "Cyber City Gurgaon, Golf Course Road, Sector 62 Noida, Connaught Place, Okhla Industrial Area",
    "industries": "Real Estate Developers, Loan DSAs, BPO Outbound Agencies, Solar Telesales",
    "keywords": "Telecalling CRM Gurgaon, Real Estate Calling App Noida, SIM Based Dialer Delhi NCR, DSA Loan Telecalling CRM Delhi, Sales Call Recording App Gurgaon"
  },
  {
    "tier": "Tier 1",
    "slug": "mumbai",
    "city": "Mumbai (MMR)",
    "state": "Maharashtra",
    "lat": 19.076,
    "lng": 72.8777,
    "hubs": "Bandra Kurla Complex (BKC), Andheri East, Lower Parel, Vashi Navi Mumbai, Thane West",
    "industries": "Insurance POSP, NBFCs & Lending, Wealth Management, Stock Broking",
    "keywords": "Telecalling CRM Mumbai, Insurance Calling Software Mumbai, SIM Based Dialer Navi Mumbai, NBFC Loan Telecalling App Thane, Sales Calling CRM BKC"
  },
  {
    "tier": "Tier 1",
    "slug": "hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "lat": 17.385,
    "lng": 78.4867,
    "hubs": "HITEC City, Madhapur, Gachibowli, Banjara Hills, Jubilee Hills, Kondapur",
    "industries": "IT Services Telesales, Higher Ed Counseling, Healthcare & Pharma Calling",
    "keywords": "Telecalling CRM Hyderabad, Admission Counseling Dialer Hyderabad, SIM Calling App Madhapur, Healthcare Telecalling CRM HITEC City"
  },
  {
    "tier": "Tier 1",
    "slug": "pune",
    "city": "Pune",
    "state": "Maharashtra",
    "lat": 18.5204,
    "lng": 73.8567,
    "hubs": "Hinjewadi IT Park, Viman Nagar, Kharadi, Baner, Shivajinagar",
    "industries": "Automobile Dealerships, IT Telesales, Real Estate Builders, Higher Ed",
    "keywords": "Telecalling CRM Pune, Automobile Showroom Calling App Pune, SIM Based CRM Hinjewadi, Real Estate Dialer Baner"
  },
  {
    "tier": "Tier 1",
    "slug": "ahmedabad",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "lat": 23.0225,
    "lng": 72.5714,
    "hubs": "SG Highway, Prahlad Nagar, Ashram Road, Sindhu Bhavan Road, Sanand",
    "industries": "MSME Manufacturing, Financial Services, Real Estate, Textile Exports",
    "keywords": "Telecalling CRM Ahmedabad, SIM Based Calling App SG Highway, Sales Dialer Ahmedabad, SME Lead Management Gujarat"
  },
  {
    "tier": "Tier 1",
    "slug": "chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.0827,
    "lng": 80.2707,
    "hubs": "OMR (Old Mahabalipuram Road), Guindy, Anna Nagar, T. Nagar, Mount Road",
    "industries": "Automobile Sales, Manufacturing Telesales, SaaS & IT Support",
    "keywords": "Telecalling CRM Chennai, SIM Based Sales Dialer OMR, Auto Dealership Calling App Chennai, Call Recording Software Guindy"
  },
  {
    "tier": "Tier 1",
    "slug": "kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "lat": 22.5726,
    "lng": 88.3639,
    "hubs": "Salt Lake Sector V, Rajarhat New Town, Park Street, Camac Street, Dalhousie",
    "industries": "Financial Broking, Outbound Telesales, Higher Ed Admissions",
    "keywords": "Telecalling CRM Kolkata, Salt Lake Telecalling Dialer, Call Recording App Kolkata, Educational Counselor CRM West Bengal"
  },
  {
    "tier": "Tier 2",
    "slug": "jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.9124,
    "lng": 75.7873,
    "hubs": "Malviya Nagar, Mansarovar, C-Scheme, Vaishali Nagar, Tonk Road",
    "industries": "Coaching & Test Prep, Real Estate, Gems & Jewelry B2B, Tourism Telesales",
    "keywords": "Telecalling CRM Jaipur, Coaching Institute Calling App Jaipur, SIM Calling Dialer Rajasthan, Real Estate CRM Vaishali Nagar"
  },
  {
    "tier": "Tier 2",
    "slug": "indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "lat": 22.7196,
    "lng": 75.8577,
    "hubs": "Vijay Nagar, Palasia, Super Corridor, AB Road, Bhawarkua",
    "industries": "Financial Advisory, Coaching Hub, Real Estate, Pharma Telesales",
    "keywords": "Telecalling CRM Indore, Financial Advisory Dialer Indore, SIM Based CRM Vijay Nagar, Sales Call Recording App MP"
  },
  {
    "tier": "Tier 2",
    "slug": "lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.8467,
    "lng": 80.9462,
    "hubs": "Gomti Nagar, Hazratganj, Alambagh, Indira Nagar, Shaheed Path",
    "industries": "Government Project Vendors, Real Estate Developers, Education Admissions",
    "keywords": "Telecalling CRM Lucknow, Real Estate Calling App Gomti Nagar, SIM CRM Lucknow, Education Admissions Dialer UP"
  },
  {
    "tier": "Tier 2",
    "slug": "chandigarh",
    "city": "Chandigarh Tricity",
    "state": "Punjab / Haryana",
    "lat": 30.7333,
    "lng": 76.7794,
    "hubs": "Sector 17, Mohali Phase 8, Panchkula Industrial Area, IT Park Chandigarh",
    "industries": "Overseas Immigration & Visa Counselors, EdTech, IT Telesales",
    "keywords": "Telecalling CRM Chandigarh, Study Visa Calling App Mohali, SIM Based Dialer Tricity, Immigration Counselor CRM Punjab"
  },
  {
    "tier": "Tier 2",
    "slug": "surat",
    "city": "Surat",
    "state": "Gujarat",
    "lat": 21.1702,
    "lng": 72.8311,
    "hubs": "Ring Road, Varachha, Adajan, Vesu, Sachin GIDC",
    "industries": "Textile Manufacturers, Diamond Trading, Real Estate, Industrial Supplies",
    "keywords": "Telecalling CRM Surat, Textile B2B Sales App Surat, SIM Calling Software Gujarat, Diamond Broker Telesales CRM"
  },
  {
    "tier": "Tier 2",
    "slug": "nagpur",
    "city": "Nagpur",
    "state": "Maharashtra",
    "lat": 21.1458,
    "lng": 79.0882,
    "hubs": "MIHAN, Civil Lines, Dharampeth, Sitabuldi, Wardha Road",
    "industries": "Logistics & Supply Chain, Medical Equipment, Real Estate",
    "keywords": "Telecalling CRM Nagpur, Logistics Telesales App Nagpur, SIM CRM Vidarbha, Real Estate Calling Software Nagpur"
  },
  {
    "tier": "Tier 2",
    "slug": "bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.2599,
    "lng": 77.4126,
    "hubs": "MP Nagar, Arera Colony, Kolar Road, Hoshangabad Road",
    "industries": "Engineering Admissions, Banking DSA, Healthcare & Diagnostic Reminders",
    "keywords": "Telecalling CRM Bhopal, Admission Counseling Dialer MP Nagar, Loan DSA Calling App Bhopal, SIM Calling Software MP"
  },
  {
    "tier": "Tier 2",
    "slug": "kochi",
    "city": "Kochi",
    "state": "Kerala",
    "lat": 9.9312,
    "lng": 76.2673,
    "hubs": "Kakkanad InfoPark, MG Road, Edappally, Marine Drive, Kalamassery",
    "industries": "IT & Overseas Recruitment, Tourism & Wellness, Real Estate",
    "keywords": "Telecalling CRM Kochi, InfoPark Telesales Software Kerala, SIM Calling App Ernakulam, Overseas Recruitment Dialer Kochi"
  },
  {
    "tier": "Tier 2",
    "slug": "coimbatore",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "lat": 11.0168,
    "lng": 76.9558,
    "hubs": "RS Puram, Gandhipuram, Peelamedu, TIDEL Park Coimbatore",
    "industries": "Textile Machinery, Engineering SMEs, Higher Education Counseling",
    "keywords": "Telecalling CRM Coimbatore, Industrial SME Calling App Coimbatore, SIM CRM Tamil Nadu, College Admission Dialer"
  },
  {
    "tier": "Tier 2",
    "slug": "patna",
    "city": "Patna",
    "state": "Bihar",
    "lat": 25.5941,
    "lng": 85.1376,
    "hubs": "Fraser Road, Boring Road, Kankarbagh, Bailey Road, Exhibition Road",
    "industries": "Competitive Exam Coaching, Loan DSA, Automobile Showrooms",
    "keywords": "Telecalling CRM Patna, Coaching Institute Calling App Boring Road, SIM Calling Dialer Bihar, DSA Calling CRM Patna"
  },
  {
    "tier": "Tier 2",
    "slug": "bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "lat": 20.2961,
    "lng": 85.8245,
    "hubs": "Infocity, Saheed Nagar, Patia, Chandrasekharpur, Rasulgarh",
    "industries": "IT Services, Higher Education Counseling, Mining Supply Sales",
    "keywords": "Telecalling CRM Bhubaneswar, Infocity Telesales App Odisha, College Admission Dialer Patia, SIM CRM Bhubaneswar"
  },
  {
    "tier": "Tier 2",
    "slug": "vadodara",
    "city": "Vadodara",
    "state": "Gujarat",
    "lat": 22.3072,
    "lng": 73.1812,
    "hubs": "Alkapuri, Gotri, Sayajigunj, Manjalpur, Makarpura GIDC",
    "industries": "Chemical Engineering, Pharma Equipment, Financial Distribution",
    "keywords": "Telecalling CRM Vadodara, Chemical B2B Calling App Gujarat, SIM Based Dialer Alkapuri, Sales Management App Baroda"
  },
  {
    "tier": "Tier 3",
    "slug": "ludhiana",
    "city": "Ludhiana",
    "state": "Punjab",
    "lat": 30.901,
    "lng": 75.8573,
    "hubs": "Ferozepur Road, Model Town, Industrial Area A & B, Sarabha Nagar",
    "industries": "Hosiery & Garment Exports, Bicycle Components, SME Trading",
    "keywords": "Telecalling CRM Ludhiana, Garment Export Telesales App Punjab, SIM Calling Software Ludhiana, SME Sales Dialer"
  },
  {
    "tier": "Tier 3",
    "slug": "kanpur",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "lat": 26.4499,
    "lng": 80.3319,
    "hubs": "Civil Lines, Swaroop Nagar, Mall Road, Fazalganj Industrial Estate",
    "industries": "Leather Goods B2B, Defense Ancillaries, Education & Coaching",
    "keywords": "Telecalling CRM Kanpur, Leather Trade Telesales App Kanpur, SIM CRM Uttar Pradesh, Coaching Counselor Dialer"
  },
  {
    "tier": "Tier 3",
    "slug": "raipur",
    "city": "Raipur",
    "state": "Chhattisgarh",
    "lat": 21.2514,
    "lng": 81.6296,
    "hubs": "Telibandha, Pandri, Shankar Nagar, Tatibandh, VIP Road",
    "industries": "Steel & Sponge Iron B2B, Mining Equipment, Automobile Dealerships",
    "keywords": "Telecalling CRM Raipur, Steel Trading Calling App Chhattisgarh, SIM Based Dialer Raipur, Auto Showroom Telesales"
  },
  {
    "tier": "Tier 3",
    "slug": "nashik",
    "city": "Nashik",
    "state": "Maharashtra",
    "lat": 19.9975,
    "lng": 73.7898,
    "hubs": "College Road, Gangapur Road, Ambad MIDC, Satpur MIDC",
    "industries": "Automobile Ancillary, Agri-Business, Real Estate Developers",
    "keywords": "Telecalling CRM Nashik, MIDC Industrial Calling App Maharashtra, SIM Dialer Nashik, Real Estate Telecalling Software"
  },
  {
    "tier": "Tier 3",
    "slug": "dehradun",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "lat": 30.3165,
    "lng": 78.0322,
    "hubs": "Rajpur Road, Jakhan, Subhash Nagar, Saharanpur Road",
    "industries": "Boarding School Admissions, Hospitality Sales, Real Estate",
    "keywords": "Telecalling CRM Dehradun, School Admission Counselor App Dehradun, SIM Calling Software Uttarakhand, Real Estate Dialer"
  },
  {
    "tier": "Tier 3",
    "slug": "gwalior",
    "city": "Gwalior",
    "state": "Madhya Pradesh",
    "lat": 26.2183,
    "lng": 78.1828,
    "hubs": "City Centre, Lashkar, Morar, Maharaj Bada",
    "industries": "Coaching Institutes, Small Commercial Trading, Automobile Dealerships",
    "keywords": "Telecalling CRM Gwalior, Student Admission Dialer City Centre, SIM CRM Gwalior, Sales Telecalling App MP"
  },
  {
    "tier": "Tier 3",
    "slug": "jabalpur",
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "lat": 23.1815,
    "lng": 79.9864,
    "hubs": "Civil Lines, Wright Town, Russell Chowk, Napier Town",
    "industries": "Defense Suppliers, Trading Agencies, Coaching Centers",
    "keywords": "Telecalling CRM Jabalpur, Sales Call Recording App Wright Town, SIM Dialer Jabalpur, Coaching Telecalling CRM"
  },
  {
    "tier": "Tier 3",
    "slug": "jodhpur",
    "city": "Jodhpur",
    "state": "Rajasthan",
    "lat": 26.2389,
    "lng": 73.0243,
    "hubs": "Sardarpura, Shastri Nagar, Pal Road, Basni Industrial Area",
    "industries": "Handicrafts & Furniture Exports, Solar EPC Telesales, Coaching",
    "keywords": "Telecalling CRM Jodhpur, Handicraft Export Calling App Rajasthan, Solar Telecalling CRM Jodhpur, SIM Dialer"
  },
  {
    "tier": "Tier 3",
    "slug": "varanasi",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "lat": 25.3176,
    "lng": 82.9739,
    "hubs": "Sigra, Cantt, Bhelupur, Lanka, Maldahiya",
    "industries": "Handloom B2B, Tourism Agencies, Education Counselors",
    "keywords": "Telecalling CRM Varanasi, Tourism Agency Telesales App Varanasi, SIM Calling Dialer Sigra, Student Counseling CRM"
  },
  {
    "tier": "Tier 3",
    "slug": "meerut",
    "city": "Meerut",
    "state": "Uttar Pradesh",
    "lat": 28.9845,
    "lng": 77.7064,
    "hubs": "Shastri Nagar, Civil Lines, Delhi Road, Partapur Industrial Area",
    "industries": "Sports Goods Manufacturers, Publishers, Real Estate",
    "keywords": "Telecalling CRM Meerut, Sports Goods B2B Calling App Meerut, SIM CRM Western UP, Real Estate Calling Dialer"
  }
];

export function getLocation(slug: string): CityLocation | undefined {
  const normalized = slug.toLowerCase().trim();
  return locations.find((l) => l.slug === normalized);
}

export function getLocationsByTier(tier: 'Tier 1' | 'Tier 2' | 'Tier 3'): CityLocation[] {
  return locations.filter((l) => l.tier === tier);
}
