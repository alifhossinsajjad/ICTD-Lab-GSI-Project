import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Complete translations for the entire website
const translations = {
  en: {
    // Navigation
    home: 'Home',
    notice: 'Notice',
    about: 'About',
    goals: 'Goals',
    gallery: 'Gallery',
    team: 'Team',
    vendors: 'Vendors',
    contact: 'Contact',
    labs: 'Labs',
    manuals: 'Manuals',
    allNotices: 'All Notices',
    
    // Navbar
    home: 'Home',
    tourPlaces: 'Tour Places',
    contact: 'Contact',
    login: 'Login',
    governmentOfBangladesh: 'Government of Bangladesh',
    
    // Hero Section
    heroSlides: [
      "BANGLADESH IS THE MOST POPULATED COUNTRIES.",
      "DISCOVER THE BEAUTY OF BANGLADESH",
      "EXPLORE RICH CULTURAL HERITAGE",
      "EXPERIENCE NATURAL WONDERS"
    ],
    
    // Tourism Cards
    exploreTitle: 'Explore Bangladesh',
    exploreDescription: 'Discover the beauty, culture, and natural wonders of Bangladesh through our comprehensive tourism platform',
    luxury: 'Luxury',
    luxuryDesc: 'Experience luxury resorts and premium accommodations',
    seaBeaches: 'Sea Beaches',
    seaBeachesDesc: 'Discover pristine beaches and coastal beauty',
    heritage: 'Heritage',
    heritageDesc: 'Explore historical sites and cultural heritage',
    foods: 'Foods',
    foodsDesc: 'Taste authentic Bangladeshi cuisine',
    waterFall: 'Water Fall',
    waterFallDesc: 'Visit stunning waterfalls and natural wonders',
    greenTourism: 'Green Tourism',
    greenTourismDesc: 'Experience eco-friendly and sustainable tourism',
    exploreNow: 'Explore Now',
    
    // GIS Section
    gisTitle: 'Advanced GIS Capabilities',
    gisSubtitle: 'Geographic Information System',
    gisDescription: 'Explore Bangladesh through interactive maps with detailed division and district information, powered by cutting-edge geospatial technology',
    interactiveMapping: 'Interactive Mapping',
    interactiveMappingDesc: 'Real-time geographic data visualization',
    preciseLocation: 'Precise Location',
    preciseLocationDesc: 'Accurate GPS coordinates and boundaries',
    communityData: 'Community Data',
    communityDataDesc: 'Population and demographic insights',
    division: 'Division',
    
    // Notice Section
    latestNotices: 'Latest Notices',
    viewAll: 'View All',
    readMore: 'Read More',
    important: 'Important',
    event: 'Event',
    update: 'Update',
    advisory: 'Advisory',
    news: 'News',
    
    // About Section
    aboutTitle: 'About Our Platform',
    aboutDescription: 'The ICTD Lab GIS Platform is a comprehensive digital solution designed to promote and manage tourism in Bangladesh. Our platform combines advanced Geographic Information System (GIS) technology with user-friendly interfaces to provide detailed information about tourist destinations, cultural heritage sites, and natural wonders across the country.',
    interactiveMaps: 'Interactive Maps',
    interactiveMapsDesc: 'Detailed GIS mapping of all tourist destinations',
    heritageSites: 'Heritage Sites',
    heritageSitesDesc: 'Comprehensive database of cultural landmarks',
    communityDriven: 'Community Driven',
    communityDrivenDesc: 'Supporting local communities and businesses',
    
    // Goals Section
    goalsTitle: 'Our Goals & Objectives',
    goalsDescription: 'We are committed to transforming Bangladesh\'s tourism landscape through innovative technology and sustainable practices',
    promoteTourism: 'Promote Tourism',
    promoteTourismDesc: 'Showcase Bangladesh\'s natural beauty and cultural heritage to the world',
    communityDevelopment: 'Community Development',
    communityDevelopmentDesc: 'Support local communities through sustainable tourism practices',
    qualityService: 'Quality Service',
    qualityServiceDesc: 'Provide exceptional tourism experiences with world-class standards',
    digitalInnovation: 'Digital Innovation',
    digitalInnovationDesc: 'Leverage GIS technology for enhanced tourism planning and management',
    
    // Team Section
    ourTeam: 'Our Team',
    teamDescription: 'Meet the dedicated professionals behind our platform',
    viewAllTeam: 'View All Team',
    projectDirector: 'Project Director',
    gisSpecialist: 'GIS Specialist',
    tourismCoordinator: 'Tourism Coordinator',
    dataAnalyst: 'Data Analyst',
    experience: 'years',
    
    // Vendor Section
    trustedPartners: 'Trusted Partners',
    partnersDescription: 'Our verified tourism service providers',
    viewAllPartners: 'View All Partners',
    tourOperator: 'Tour Operator',
    beachTours: 'Beach Tours',
    ecoTourism: 'Eco Tourism',
    culturalTours: 'Cultural Tours',
    adventureTours: 'Adventure Tours',
    viewDetails: 'View Details',
    
    // Contact Section
    getInTouch: 'Get In Touch',
    contactDescription: 'Have questions about Bangladesh tourism? We\'re here to help you plan your perfect journey',
    phoneSupport: 'Phone Support',
    emailSupport: 'Email Support',
    visitUs: 'Visit Us',
    
    // Footer
    beautifulBangladesh: 'Beautiful Bangladesh',
    exploreBangladesh: 'Explore Bangladesh',
    contactUs: 'Contact Us',
    aboutUs: 'About Us',
    termsCondition: 'Terms & Condition',
    privacyPolicy: 'Privacy Policy',
    internationalAirports: 'International Airports',
    cityFlights: 'City Flights',
    stayUpdate: 'Stay Update',
    emailPlaceholder: 'Enter your email',
    send: 'Send',
    getItOn: 'GET IT ON',
    googlePlay: 'Google Play',
    downloadOn: 'Download on the',
    appStore: 'App Store',
    copyright: 'Copyright © 2024 by Beautiful Bangladesh All Rights Reserved.',
    
    // Common
    more: 'More',
    loading: 'Loading...',
    error: 'Error occurred',
    success: 'Success',
    
    // App Navigation
    gisMapping: 'GIS Mapping System',
    navigation: 'Navigation',
    interactiveMap: 'Interactive Map',
    dashboard: 'Dashboard',
    userManagement: 'User Management',
    training: 'Training',
    
    // Map
    layers: 'Layers',
    filters: 'Filters',
    searchLocation: 'Search location...',
    export: 'Export',
    mapLoading: 'Interactive Map Loading',
    mapLoadingDesc: 'Advanced GIS mapping system will be available here',
    mapFeatures: 'Map Features',
    layerManagement: 'Layer Management',
    dataVisualization: 'Data Visualization',
    spatialAnalysis: 'Spatial Analysis',
    
    // Dashboard
    dashboardDesc: 'Overview of system statistics and analytics',
    totalLocations: 'Total Locations',
    activeUsers: 'Active Users',
    dataPoints: 'Data Points',
    monthlyGrowth: 'Monthly Growth',
    fromLastMonth: 'from last month',
    dateRange: 'Date Range',
    exportReport: 'Export Report',
    locationTrends: 'Location Trends',
    userActivity: 'User Activity',
    chartPlaceholder: 'Chart will be displayed here',
    
    // User Management
    userManagementDesc: 'Manage system users and permissions',
    addUser: 'Add User',
    searchUsers: 'Search users...',
    allUsers: 'All Users',
    name: 'Name',
    email: 'Email',
    role: 'Role',
    status: 'Status',
    lastLogin: 'Last Login',
    actions: 'Actions',
    
    // Training Management
    trainingManagement: 'Training Management',
    trainingManagementDesc: 'Manage training programs and participants',
    addTraining: 'Add Training',
    totalTrainings: 'Total Trainings',
    activeTrainings: 'Active Trainings',
    totalParticipants: 'Total Participants',
    completionRate: 'Completion Rate',
    allTrainings: 'All Trainings',
    participants: 'participants',
    
    // Notice Section
    latestNotices: 'Latest Notices',
    recentNotices: 'Recent Notices',
    allNotices: 'All Notices',
    viewAllNotices: 'View All Notices',
    completeNoticeList: 'Complete Notice List',
    searchNotices: 'Search notices...',
    noticesFound: 'notices found',
    view: 'View',
    download: 'Download'
  },
  
  bn: {
    // Navigation
    home: 'হোম',
    notice: 'নোটিশ',
    about: 'সম্পর্কে',
    goals: 'লক্ষ্য',
    gallery: 'গ্যালারি',
    team: 'দল',
    vendors: 'বিক্রেতা',
    contact: 'যোগাযোগ',
    labs: 'ল্যাব',
    manuals: 'ম্যানুয়াল',
    allNotices: 'সব নোটিশ',
    
    // Navbar
    home: 'হোম',
    tourPlaces: 'ভ্রমণ স্থান',
    contact: 'যোগাযোগ',
    login: 'লগইন',
    governmentOfBangladesh: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
    
    // Hero Section
    heroSlides: [
      "বাংলাদেশ সবচেয়ে জনবহুল দেশগুলির মধ্যে একটি।",
      "বাংলাদেশের সৌন্দর্য আবিষ্কার করুন",
      "সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য অন্বেষণ করুন",
      "প্রাকৃতিক বিস্ময়ের অভিজ্ঞতা নিন"
    ],
    
    // Tourism Cards
    exploreTitle: 'বাংলাদেশ অন্বেষণ করুন',
    exploreDescription: 'আমাদের ব্যাপক পর্যটন প্ল্যাটফর্মের মাধ্যমে বাংলাদেশের সৌন্দর্য, সংস্কৃতি এবং প্রাকৃতিক বিস্ময় আবিষ্কার করুন',
    luxury: 'বিলাসবহুল',
    luxuryDesc: 'বিলাসবহুল রিসোর্ট এবং প্রিমিয়াম আবাসনের অভিজ্ঞতা নিন',
    seaBeaches: 'সমুদ্র সৈকত',
    seaBeachesDesc: 'নির্মল সৈকত এবং উপকূলীয় সৌন্দর্য আবিষ্কার করুন',
    heritage: 'ঐতিহ্য',
    heritageDesc: 'ঐতিহাসিক স্থান এবং সাংস্কৃতিক ঐতিহ্য অন্বেষণ করুন',
    foods: 'খাবার',
    foodsDesc: 'খাঁটি বাংলাদেশী খাবারের স্বাদ নিন',
    waterFall: 'জলপ্রপাত',
    waterFallDesc: 'অত্যাশ্চর্য জলপ্রপাত এবং প্রাকৃতিক বিস্ময় দেখুন',
    greenTourism: 'সবুজ পর্যটন',
    greenTourismDesc: 'পরিবেশ বান্ধব এবং টেকসই পর্যটনের অভিজ্ঞতা নিন',
    exploreNow: 'এখনই অন্বেষণ করুন',
    
    // GIS Section
    gisTitle: 'উন্নত জিআইএস সক্ষমতা',
    gisSubtitle: 'ভৌগোলিক তথ্য ব্যবস্থা',
    gisDescription: 'অত্যাধুনিক ভূ-স্থানিক প্রযুক্তি দ্বারা চালিত বিস্তারিত বিভাগ এবং জেলার তথ্য সহ ইন্টারেক্টিভ মানচিত্রের মাধ্যমে বাংলাদেশ অন্বেষণ করুন',
    interactiveMapping: 'ইন্টারেক্টিভ ম্যাপিং',
    interactiveMappingDesc: 'রিয়েল-টাইম ভৌগোলিক ডেটা ভিজুয়ালাইজেশন',
    preciseLocation: 'নির্ভুল অবস্থান',
    preciseLocationDesc: 'নির্ভুল জিপিএস স্থানাঙ্ক এবং সীমানা',
    communityData: 'কমিউনিটি ডেটা',
    communityDataDesc: 'জনসংখ্যা এবং জনতাত্ত্বিক অন্তর্দৃষ্টি',
    division: 'বিভাগ',
    
    // Notice Section
    latestNotices: 'সর্বশেষ নোটিশ',
    viewAll: 'সব দেখুন',
    readMore: 'আরও পড়ুন',
    important: 'গুরুত্বপূর্ণ',
    event: 'ইভেন্ট',
    update: 'আপডেট',
    advisory: 'পরামর্শ',
    news: 'সংবাদ',
    
    // About Section
    aboutTitle: 'আমাদের প্ল্যাটফর্ম সম্পর্কে',
    aboutDescription: 'আইসিটিডি ল্যাব জিআইএস প্ল্যাটফর্ম বাংলাদেশে পর্যটন প্রচার এবং পরিচালনার জন্য ডিজাইন করা একটি ব্যাপক ডিজিটাল সমাধান। আমাদের প্ল্যাটফর্ম উন্নত ভৌগোলিক তথ্য ব্যবস্থা (জিআইএস) প্রযুক্তিকে ব্যবহারকারী-বান্ধব ইন্টারফেসের সাথে একত্রিত করে দেশজুড়ে পর্যটন গন্তব্য, সাংস্কৃতিক ঐতিহ্যবাহী স্থান এবং প্রাকৃতিক বিস্ময় সম্পর্কে বিস্তারিত তথ্য প্রদান করে।',
    interactiveMaps: 'ইন্টারেক্টিভ মানচিত্র',
    interactiveMapsDesc: 'সমস্ত পর্যটন গন্তব্যের বিস্তারিত জিআইএস ম্যাপিং',
    heritageSites: 'ঐতিহ্যবাহী স্থান',
    heritageSitesDesc: 'সাংস্কৃতিক ল্যান্ডমার্কের ব্যাপক ডাটাবেস',
    communityDriven: 'কমিউনিটি চালিত',
    communityDrivenDesc: 'স্থানীয় সম্প্রদায় এবং ব্যবসাকে সহায়তা করা',
    
    // Goals Section
    goalsTitle: 'আমাদের লক্ষ্য ও উদ্দেশ্য',
    goalsDescription: 'আমরা উদ্ভাবনী প্রযুক্তি এবং টেকসই অনুশীলনের মাধ্যমে বাংলাদেশের পর্যটন ল্যান্ডস্কেপ রূপান্তরিত করতে প্রতিশ্রুতিবদ্ধ',
    promoteTourism: 'পর্যটন প্রচার',
    promoteTourismDesc: 'বিশ্বের কাছে বাংলাদেশের প্রাকৃতিক সৌন্দর্য এবং সাংস্কৃতিক ঐতিহ্য তুলে ধরা',
    communityDevelopment: 'কমিউনিটি উন্নয়ন',
    communityDevelopmentDesc: 'টেকসই পর্যটন অনুশীলনের মাধ্যমে স্থানীয় সম্প্রদায়কে সহায়তা করা',
    qualityService: 'মানসম্পন্ন সেবা',
    qualityServiceDesc: 'বিশ্বমানের মানদণ্ড সহ ব্যতিক্রমী পর্যটন অভিজ্ঞতা প্রদান',
    digitalInnovation: 'ডিজিটাল উদ্ভাবন',
    digitalInnovationDesc: 'উন্নত পর্যটন পরিকল্পনা এবং ব্যবস্থাপনার জন্য জিআইএস প্রযুক্তির ব্যবহার',
    
    // Team Section
    ourTeam: 'আমাদের দল',
    teamDescription: 'আমাদের প্ল্যাটফর্মের পিছনে নিবেদিত পেশাদারদের সাথে পরিচিত হন',
    viewAllTeam: 'সমস্ত দল দেখুন',
    projectDirector: 'প্রকল্প পরিচালক',
    gisSpecialist: 'জিআইএস বিশেষজ্ঞ',
    tourismCoordinator: 'পর্যটন সমন্বয়কারী',
    dataAnalyst: 'ডেটা বিশ্লেষক',
    experience: 'বছরের অভিজ্ঞতা',
    
    // Vendor Section
    trustedPartners: 'বিশ্বস্ত অংশীদার',
    partnersDescription: 'আমাদের যাচাইকৃত পর্যটন সেবা প্রদানকারী',
    viewAllPartners: 'সমস্ত অংশীদার দেখুন',
    tourOperator: 'ট্যুর অপারেটর',
    beachTours: 'সৈকত ট্যুর',
    ecoTourism: 'ইকো ট্যুরিজম',
    culturalTours: 'সাংস্কৃতিক ট্যুর',
    adventureTours: 'অ্যাডভেঞ্চার ট্যুর',
    viewDetails: 'বিস্তারিত দেখুন',
    
    // Contact Section
    getInTouch: 'যোগাযোগ করুন',
    contactDescription: 'বাংলাদেশ পর্যটন সম্পর্কে প্রশ্ন আছে? আমরা আপনার নিখুঁত যাত্রা পরিকল্পনা করতে সাহায্য করতে এখানে আছি',
    phoneSupport: 'ফোন সাপোর্ট',
    emailSupport: 'ইমেইল সাপোর্ট',
    visitUs: 'আমাদের দেখুন',
    
    // Footer
    beautifulBangladesh: 'সুন্দর বাংলাদেশ',
    exploreBangladesh: 'বাংলাদেশ অন্বেষণ করুন',
    contactUs: 'যোগাযোগ করুন',
    aboutUs: 'আমাদের সম্পর্কে',
    termsCondition: 'শর্তাবলী',
    privacyPolicy: 'গোপনীয়তা নীতি',
    internationalAirports: 'আন্তর্জাতিক বিমানবন্দর',
    cityFlights: 'শহরের ফ্লাইট',
    stayUpdate: 'আপডেট থাকুন',
    emailPlaceholder: 'আপনার ইমেইল লিখুন',
    send: 'পাঠান',
    getItOn: 'পান',
    googlePlay: 'গুগল প্লে',
    downloadOn: 'ডাউনলোড করুন',
    appStore: 'অ্যাপ স্টোর',
    copyright: 'কপিরাইট © ২০২৪ সুন্দর বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।',
    
    // Common
    more: 'আরও',
    loading: 'লোড হচ্ছে...',
    error: 'ত্রুটি ঘটেছে',
    success: 'সফল',
    
    // App Navigation
    gisMapping: 'জিআইএস ম্যাপিং সিস্টেম',
    navigation: 'নেভিগেশন',
    interactiveMap: 'ইন্টারেক্টিভ মানচিত্র',
    dashboard: 'ড্যাশবোর্ড',
    userManagement: 'ব্যবহারকারী ব্যবস্থাপনা',
    training: 'প্রশিক্ষণ',
    
    // Map
    layers: 'স্তর',
    filters: 'ফিল্টার',
    searchLocation: 'অবস্থান খুঁজুন...',
    export: 'রপ্তানি',
    mapLoading: 'ইন্টারেক্টিভ মানচিত্র লোড হচ্ছে',
    mapLoadingDesc: 'উন্নত জিআইএস ম্যাপিং সিস্টেম এখানে উপলব্ধ হবে',
    mapFeatures: 'মানচিত্রের বৈশিষ্ট্য',
    layerManagement: 'স্তর ব্যবস্থাপনা',
    dataVisualization: 'ডেটা ভিজুয়ালাইজেশন',
    spatialAnalysis: 'স্থানিক বিশ্লেষণ',
    
    // Dashboard
    dashboardDesc: 'সিস্টেম পরিসংখ্যান এবং বিশ্লেষণের সংক্ষিপ্ত বিবরণ',
    totalLocations: 'মোট অবস্থান',
    activeUsers: 'সক্রিয় ব্যবহারকারী',
    dataPoints: 'ডেটা পয়েন্ট',
    monthlyGrowth: 'মাসিক বৃদ্ধি',
    fromLastMonth: 'গত মাস থেকে',
    dateRange: 'তারিখের পরিসর',
    exportReport: 'রিপোর্ট রপ্তানি',
    locationTrends: 'অবস্থানের প্রবণতা',
    userActivity: 'ব্যবহারকারীর কার্যকলাপ',
    chartPlaceholder: 'চার্ট এখানে প্রদর্শিত হবে',
    
    // User Management
    userManagementDesc: 'সিস্টেম ব্যবহারকারী এবং অনুমতি পরিচালনা করুন',
    addUser: 'ব্যবহারকারী যোগ করুন',
    searchUsers: 'ব্যবহারকারী খুঁজুন...',
    allUsers: 'সমস্ত ব্যবহারকারী',
    name: 'নাম',
    email: 'ইমেইল',
    role: 'ভূমিকা',
    status: 'অবস্থা',
    lastLogin: 'শেষ লগইন',
    actions: 'কার্যক্রম',
    
    // Training Management
    trainingManagement: 'প্রশিক্ষণ ব্যবস্থাপনা',
    trainingManagementDesc: 'প্রশিক্ষণ কর্মসূচি এবং অংশগ্রহণকারীদের পরিচালনা করুন',
    addTraining: 'প্রশিক্ষণ যোগ করুন',
    totalTrainings: 'মোট প্রশিক্ষণ',
    activeTrainings: 'সক্রিয় প্রশিক্ষণ',
    totalParticipants: 'মোট অংশগ্রহণকারী',
    completionRate: 'সমাপনীর হার',
    allTrainings: 'সমস্ত প্রশিক্ষণ',
    participants: 'অংশগ্রহণকারী',
    
    // Notice Section
    latestNotices: 'সর্বশেষ নোটিশ',
    recentNotices: 'সাম্প্রতিক নোটিশ',
    allNotices: 'সব নোটিশ',
    viewAllNotices: 'সব নোটিশ দেখুন',
    completeNoticeList: 'সম্পূর্ণ নোটিশ তালিকা',
    searchNotices: 'নোটিশ খুঁজুন...',
    noticesFound: 'নোটিশ পাওয়া গেছে',
    view: 'দেখুন',
    download: 'ডাউনলোড'
  }
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('selectedLanguage')
    return saved || 'en'
  })

  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage)
  }, [currentLanguage])

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'bn' : 'en')
  }

  const t = (key) => {
    return translations[currentLanguage][key] || key
  }

  const value = {
    language: currentLanguage,
    currentLanguage,
    setLanguage: setCurrentLanguage,
    setCurrentLanguage,
    toggleLanguage,
    t,
    translations: translations[currentLanguage]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}