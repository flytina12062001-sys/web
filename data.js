// Product Data Database
const PRODUCTS = {
  categories: [
    { id: 'dimensional', name: 'Dimensional Metrology', icon: '📏' },
    { id: 'testing', name: 'Testing Instruments', icon: '⚙️' },
    { id: 'optical', name: 'Optical Measurement', icon: '🔬' },
    { id: 'software', name: 'Data & Software', icon: '📊' },
    { id: 'machine', name: 'On-Machine Measurement', icon: '🏭' },
    { id: 'specialized', name: 'Specialized Equipment', icon: '🔧' }
  ],
  models: [
    // Dimensional Metrology
    {
      id: 'ICP-001',
      name: 'Digital Calipers',
      category: 'dimensional',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><circle cx="100" cy="100" r="40" fill="%23ff6b35"/><rect x="60" y="95" width="80" height="10" fill="%2364b5f6"/></svg>',
      shortDescription: 'High-precision electronic calipers with LCD display for accurate measurements up to 0.01mm',
      specifications: {
        'Range': '0-150mm',
        'Resolution': '0.01mm',
        'Accuracy': '±0.03mm',
        'Display': 'LCD Digital',
        'Material': 'Stainless Steel',
        'Power': 'Battery (LR44)'
      },
      features: [
        'Large LCD display with automatic zeroing',
        'Stainless steel hardened measuring surfaces',
        'Battery powered with low battery indicator',
        'Data hold function for convenient reading',
        'Metric and inch conversion',
        'Water-resistant design'
      ],
      applications: [
        'Component dimensional verification',
        'Quality control inspections',
        'Manufacturing workshops',
        'Research laboratories',
        'Product measurement'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/ICP-001-catalog.pdf'
    },
    {
      id: 'MIC-002',
      name: 'Mechanical Micrometers',
      category: 'dimensional',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="50" y="60" width="100" height="80" fill="%2364b5f6" stroke="%23ff6b35" stroke-width="3" rx="5"/><circle cx="100" cy="100" r="20" fill="%23ff6b35"/></svg>',
      shortDescription: 'Precision micrometers for exact measurement of small dimensions with carbide measuring surfaces',
      specifications: {
        'Range': '0-25mm',
        'Resolution': '0.01mm',
        'Accuracy': '±0.004mm',
        'Type': 'Outside Micrometer',
        'Material': 'Hardened Steel',
        'Calibration': 'Pre-calibrated'
      },
      features: [
        'Carbide-tipped measuring surfaces',
        'Ratchet stop for consistent pressure',
        'Rotating sleeve with friction thimble',
        'Graduation marks for direct reading',
        'Case hardened barrel',
        'Fine tuning screw'
      ],
      applications: [
        'Precision part measurement',
        'Material thickness gauging',
        'Industrial quality control',
        'Calibration work',
        'Laboratory measurements'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/MIC-002-catalog.pdf'
    },
    {
      id: 'HGE-003',
      name: 'Height Gauges',
      category: 'dimensional',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="80" y="40" width="40" height="120" fill="%2364b5f6"/><circle cx="100" cy="30" r="12" fill="%23ff6b35"/><line x1="60" y1="120" x2="140" y2="120" stroke="%23ff6b35" stroke-width="3"/></svg>',
      shortDescription: 'Precision height gauges with ceramic measuring surface for accurate height measurements',
      specifications: {
        'Range': '0-300mm',
        'Resolution': '0.05mm',
        'Base Size': '100x70mm',
        'Measurement Surface': 'Ceramic',
        'Material': 'Cast Iron',
        'Weight': '2.5kg'
      },
      features: [
        'Ceramic measuring surface resistant to scratching',
        'Heavy base for stability',
        'Fine adjustment mechanism',
        'Clear graduation marks',
        'Spring-loaded measuring head',
        'Anti-corrosion coating'
      ],
      applications: [
        'Step measurement on flat surfaces',
        'Layout and marking work',
        'Component height verification',
        'Precision surface measurement',
        'Machine tool setup'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/HGE-003-catalog.pdf'
    },
    {
      id: 'BOR-004',
      name: 'Bore Gauges',
      category: 'dimensional',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><circle cx="100" cy="100" r="50" fill="none" stroke="%2364b5f6" stroke-width="8"/><circle cx="100" cy="100" r="25" fill="%23ff6b35" opacity="0.5"/><line x1="100" y1="50" x2="100" y2="150" stroke="%23ff6b35" stroke-width="2"/></svg>',
      shortDescription: 'Versatile bore gauges for measuring internal diameters with high accuracy',
      specifications: {
        'Range': '6-35mm',
        'Resolution': '0.01mm',
        'Accuracy': '±0.025mm',
        'Type': 'Mechanical Bore Gauge',
        'Material': 'Hardened Steel',
        'Contacts': 'Interchangeable'
      },
      features: [
        'Self-centering mechanism',
        'Hardened steel measuring contacts',
        'Smooth operation with minimal friction',
        'Easy zero setting',
        'Replaceable measuring tips',
        'Protective carrying case'
      ],
      applications: [
        'Internal hole diameter measurement',
        'Bearing bore verification',
        'Precision component gauging',
        'Assembly inspection',
        'Quality control'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/BOR-004-catalog.pdf'
    },
    // Testing Instruments
    {
      id: 'DHT-101',
      name: 'Digital Hardness Testers',
      category: 'testing',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="40" y="30" width="120" height="140" fill="%2364b5f6" rx="10"/><rect x="50" y="40" width="100" height="60" fill="%23fff" stroke="%23ff6b35" stroke-width="2"/><circle cx="100" cy="150" r="15" fill="%23ff6b35"/><line x1="60" y1="60" x2="140" y2="60" stroke="%23ff6b35" stroke-width="1" opacity="0.5"/></svg>',
      shortDescription: 'Automatic hardness testers supporting Brinell, Vickers, and Rockwell scales',
      specifications: {
        'Scales Supported': 'Brinell, Vickers, Rockwell, Leeb',
        'Display': 'LED Digital with Backlight',
        'Load Range': '10-3000kgf',
        'Measurement Speed': '< 20 seconds',
        'Power': 'AC/DC Powered',
        'Dimensions': '500x300x800mm'
      },
      features: [
        'Four hardness scales in one unit',
        'Automatic load application and withdrawal',
        'Large backlit LCD display',
        'USB connectivity for data export',
        'Built-in standards reference',
        'Thermal printer included'
      ],
      applications: [
        'Material quality assessment',
        'Hardness verification in manufacturing',
        'Material research and development',
        'Incoming material inspection',
        'Product certification testing'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/DHT-101-catalog.pdf'
    },
    {
      id: 'FLD-102',
      name: 'Ultrasonic Flaw Detectors',
      category: 'testing',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="50" y="50" width="100" height="100" fill="%2364b5f6" rx="8"/><circle cx="70" cy="70" r="8" fill="%23ff6b35"/><circle cx="130" cy="70" r="8" fill="%23ff6b35"/><polyline points="60,120 80,100 100,110 120,90 140,100" fill="none" stroke="%23ff6b35" stroke-width="2"/></svg>',
      shortDescription: 'Advanced ultrasonic flaw detectors for non-destructive testing and defect identification',
      specifications: {
        'Technology': 'Ultrasonic Pulse-Echo',
        'Frequency': '2.5MHz / 5MHz',
        'Display': 'Digital LCD Color',
        'Detection Range': 'Up to 5000mm',
        'Material': 'Steel/Cast Iron',
        'Power': 'Rechargeable Battery'
      },
      features: [
        'Dual frequency for better detection',
        'High resolution color display',
        'A-scan and B-scan modes',
        'Data recording capability',
        'Portable and lightweight design',
        'Multiple probe options'
      ],
      applications: [
        'Weld defect detection',
        'Material integrity testing',
        'Aircraft and automotive inspection',
        'Pipeline integrity assessment',
        'Railroad rail inspection'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/FLD-102-catalog.pdf'
    },
    {
      id: 'FGM-103',
      name: 'Force Gauges & Load Cells',
      category: 'testing',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="50" y="40" width="100" height="120" fill="%2364b5f6"/><line x1="100" y1="30" x2="100" y2="50" stroke="%23ff6b35" stroke-width="4"/><rect x="80" y="150" width="40" height="30" fill="%23ff6b35"/><text x="100" y="170" font-size="20" text-anchor="middle" fill="%23fff" font-weight="bold">N</text></svg>',
      shortDescription: 'Digital force measurement instruments for tension, compression, and peel force testing',
      specifications: {
        'Measurement Range': '0-500N',
        'Resolution': '0.1N',
        'Accuracy': '±0.5% of reading',
        'Display': 'LED Digital',
        'Sample Rate': '100Hz',
        'Power': 'Battery/USB'
      },
      features: [
        'Peak hold function',
        'Overload protection',
        'Data output to computer',
        'Multiple attachment options',
        'Long battery life',
        'Real-time data logging'
      ],
      applications: [
        'Material tensile testing',
        'Product durability assessment',
        'Component force verification',
        'Packaging seal strength testing',
        'Material property evaluation'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/FGM-103-catalog.pdf'
    },
    {
      id: 'TRQ-104',
      name: 'Torque Wrenches & Testers',
      category: 'testing',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><path d="M 60 100 Q 100 60 140 100" fill="none" stroke="%2364b5f6" stroke-width="15"/><circle cx="60" cy="100" r="8" fill="%23ff6b35"/><circle cx="140" cy="100" r="8" fill="%23ff6b35"/><path d="M 120 80 L 130 70 L 135 75" fill="%23ff6b35"/></svg>',
      shortDescription: 'Calibrated torque measuring instruments and wrenches for precise fastening control',
      specifications: {
        'Range': '5-250 Nm',
        'Accuracy': '±4% of reading',
        'Type': 'Click-type Adjustable',
        'Scale': 'Dual scale (Nm/kgf·cm)',
        'Material': 'Hardened Steel',
        'Calibration': 'ISO 6789'
      },
      features: [
        'Audible and tactile click indication',
        'Easy-to-read graduation marks',
        'Reversible for tightening and loosening',
        'Durable hardened steel construction',
        'Calibration certificate included',
        'Protective carrying case'
      ],
      applications: [
        'Fastener assembly control',
        'Equipment maintenance',
        'Automotive assembly',
        'Industrial equipment installation',
        'Precision assembly work'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/TRQ-104-catalog.pdf'
    },
    // Optical Measurement
    {
      id: 'VMS-201',
      name: 'Vision Measuring Systems',
      category: 'optical',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="35" y="35" width="130" height="110" fill="%2364b5f6" rx="8" stroke="%23ff6b35" stroke-width="2"/><circle cx="100" cy="90" r="35" fill="none" stroke="%23ff6b35" stroke-width="2"/><circle cx="100" cy="90" r="20" fill="%23ff6b35" opacity="0.3"/><rect x="50" y="155" width="100" height="20" fill="%2364b5f6" rx="2"/></svg>',
      shortDescription: 'Advanced optical measurement systems for 2D and 3D component measurement with software analysis',
      specifications: {
        'Measurement Field': '100x75mm',
        'Resolution': 'Up to 0.5 microns',
        'Magnification': '100-600x',
        'Camera': 'CCD 1280x1024',
        'Software': 'Advanced CAD-based',
        'Accuracy': '±0.5 microns'
      },
      features: [
        'CCD camera with high resolution',
        'LED ring illumination',
        '3D measurement capability',
        'Automated edge detection',
        'SPC data collection',
        'Multi-language support'
      ],
      applications: [
        'Complex component inspection',
        'PCB and electronic assembly',
        'Precision gear measurement',
        'Medical device verification',
        'Tool and die inspection'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/VMS-201-catalog.pdf'
    },
    {
      id: 'PPJ-202',
      name: 'Profile Projectors',
      category: 'optical',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="40" y="30" width="120" height="90" fill="%2364b5f6" rx="5"/><circle cx="60" cy="50" r="12" fill="%23ff6b35"/><path d="M 80 40 L 100 60 L 80 80 Z" fill="%23ff6b35" opacity="0.6"/><circle cx="100" cy="110" r="40" fill="none" stroke="%23ff6b35" stroke-width="2"/><line x1="70" y1="110" x2="130" y2="110" stroke="%23ff6b35" stroke-width="1" opacity="0.5"/></svg>',
      shortDescription: 'Optical profile projectors for magnified inspection of complex part profiles and dimensions',
      specifications: {
        'Screen Size': '250mm (10 inch)',
        'Magnification': '10x, 20x, 50x optional',
        'Stage Size': '150x100mm',
        'Illumination': 'LED 6500K',
        'Accuracy': '±0.02mm',
        'Weight': '45kg'
      },
      features: [
        'Large screen for easy viewing',
        'Interchangeable lens modules',
        'Rotating stage for profile tracing',
        'Adjustable focus and zoom',
        'LED illumination for clarity',
        'Cross-hair and measurement guides'
      ],
      applications: [
        'Screw and thread inspection',
        'Tool profile verification',
        'Gear tooth checking',
        'Complex contour measurement',
        'Precision part inspection'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/PPJ-202-catalog.pdf'
    },
    {
      id: 'MIC-203',
      name: 'Stereo Microscopes',
      category: 'optical',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="50" y="20" width="100" height="140" fill="%2364b5f6"/><circle cx="75" cy="40" r="15" fill="%23ff6b35"/><circle cx="125" cy="40" r="15" fill="%23ff6b35"/><rect x="45" y="110" width="110" height="50" fill="%23fff" opacity="0.3" stroke="%23ff6b35" stroke-width="2"/><rect x="70" y="160" width="60" height="20" fill="%23ff6b35"/></svg>',
      shortDescription: 'Stereo microscopes and digital magnifiers for detailed surface inspection and measurement',
      specifications: {
        'Magnification': '7x-45x variable zoom',
        'Working Distance': '110mm',
        'Field of View': '16mm (at 10x)',
        'Light Source': 'LED (adjustable)',
        'Objective': 'Apochromatic',
        'Image Sensor': 'Optional 5MP'
      },
      features: [
        'Binocular viewing for depth perception',
        'Variable magnification zoom',
        'Incident and transmitted lighting',
        'USB camera option available',
        'Rotating stage for specimen positioning',
        'Focus drive system'
      ],
      applications: [
        'Surface defect detection',
        'Microassembly inspection',
        'Solder joint examination',
        'Material surface analysis',
        'Jewelry and coin inspection'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/MIC-203-catalog.pdf'
    },
    // Data & Software
    {
      id: 'DDO-301',
      name: 'Data Collection Systems',
      category: 'software',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="40" y="40" width="120" height="100" fill="%2364b5f6" rx="8"/><rect x="50" y="50" width="100" height="35" fill="%23fff" stroke="%23ff6b35" stroke-width="1"/><circle cx="60" cy="100" r="6" fill="%23ff6b35"/><circle cx="80" cy="100" r="6" fill="%23ff6b35"/><circle cx="100" cy="100" r="6" fill="%23ff6b35"/><circle cx="120" cy="100" r="6" fill="%23ff6b35"/><circle cx="140" cy="100" r="6" fill="%23ff6b35"/><line x1="50" y1="120" x2="150" y2="120" stroke="%23ff6b35" stroke-width="2"/></svg>',
      shortDescription: 'Wireless data collection modules for connecting measuring instruments to computers and tablets',
      specifications: {
        'Connection': 'Wireless 2.4GHz / USB',
        'Range': 'Up to 100m (wireless)',
        'Compatibility': 'All standard measuring tools',
        'Data Storage': 'Internal memory 500+ readings',
        'Battery': 'Rechargeable Li-ion',
        'Frequency': '2.4GHz ISM band'
      },
      features: [
        'Wireless and wired connectivity options',
        'Real-time data transmission',
        'Automatic timestamp recording',
        'Battery-powered receiver unit',
        'Cross-platform compatibility',
        'Encrypted data transmission'
      ],
      applications: [
        'Production line data collection',
        'Statistical process control',
        'Quality documentation',
        'Real-time monitoring',
        'Paperless quality management'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/DDO-301-catalog.pdf'
    },
    {
      id: 'MES-302',
      name: 'Quality Management Software',
      category: 'software',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="30" y="30" width="140" height="100" fill="%2364b5f6" rx="5" stroke="%23ff6b35" stroke-width="2"/><polyline points="40,110 60,90 80,100 100,70 120,80 140,50" fill="none" stroke="%23ff6b35" stroke-width="2"/><circle cx="40" cy="110" r="3" fill="%23ff6b35"/><circle cx="140" cy="50" r="3" fill="%23ff6b35"/><rect x="50" y="140" width="20" height="40" fill="%23ff6b35" opacity="0.6"/><rect x="80" y="120" width="20" height="60" fill="%23ff6b35" opacity="0.8"/></svg>',
      shortDescription: 'Comprehensive software solutions for measurement data management, analysis, and quality reporting',
      specifications: {
        'Platform': 'Windows / Linux / Cloud',
        'Database': 'SQL Server / PostgreSQL',
        'Reports': 'Customizable dashboards',
        'Users': 'Multi-user with access control',
        'Data Capacity': 'Unlimited',
        'Integration': 'API support'
      },
      features: [
        'Real-time SPC charts',
        'Automated report generation',
        'Data trending and analysis',
        'GD&T compliance checking',
        'Email alert notifications',
        'Mobile app support'
      ],
      applications: [
        'Manufacturing execution systems',
        'Measurement data analysis',
        'Quality assurance documentation',
        'Regulatory compliance reporting',
        'Supply chain quality management'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/MES-302-catalog.pdf'
    },
    // On-Machine Measurement
    {
      id: 'OMP-401',
      name: 'On-Machine Probe Systems',
      category: 'machine',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="60" y="20" width="80" height="100" fill="%2364b5f6" rx="8"/><circle cx="100" cy="50" r="20" fill="none" stroke="%23ff6b35" stroke-width="3"/><line x1="100" y1="35" x2="100" y2="20" stroke="%23ff6b35" stroke-width="2"/><path d="M 80 120 L 70 150 M 100 125 L 100 160 M 120 120 L 130 150" stroke="%23ff6b35" stroke-width="3" fill="none"/></svg>',
      shortDescription: 'Real-time measurement probes for in-process inspection on CNC machines and production lines',
      specifications: {
        'Measurement Range': '5-50mm',
        'Accuracy': '±0.05mm',
        'Response Time': '< 100ms',
        'Interface': 'CNC compatible (Fanuc/Siemens)',
        'Mounting': 'Spindle mount',
        'Temperature': '-10°C to +50°C'
      },
      features: [
        'Integrated CNC communication',
        'Fast measurement cycle',
        'Automatic tolerance checking',
        'Tool breakage detection',
        'Wireless data transmission',
        'Multi-axis capability'
      ],
      applications: [
        'CNC machine on-board inspection',
        'Automatic part sorting',
        'Tool offset compensation',
        'Production efficiency improvement',
        'In-process quality control'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/OMP-401-catalog.pdf'
    },
    {
      id: 'AIS-402',
      name: 'Automatic Inspection Systems',
      category: 'machine',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><rect x="30" y="35" width="140" height="95" fill="%2364b5f6" rx="5" stroke="%23ff6b35" stroke-width="2"/><circle cx="50" cy="55" r="10" fill="%23ff6b35"/><circle cx="100" cy="55" r="10" fill="%23ff6b35"/><circle cx="150" cy="55" r="10" fill="%23ff6b35"/><rect x="35" y="80" width="130" height="30" fill="%23fff" opacity="0.2"/><polyline points="40,135 65,120 90,130 115,110 140,125 160,115" fill="none" stroke="%23ff6b35" stroke-width="2"/></svg>',
      shortDescription: 'Automated measurement solutions for high-volume production quality control and sorting',
      specifications: {
        'Throughput': '20-100 parts/min',
        'Measurement Speed': '< 5 seconds per part',
        'Accuracy': '±0.1mm',
        'Data Recording': 'Real-time to server',
        'Camera Resolution': '5MP',
        'Sorting Capacity': 'Multi-bin options'
      },
      features: [
        'High-speed vision camera system',
        'Automated part positioning',
        'Pass/fail sorting mechanism',
        'Statistical analysis engine',
        'Integration with ERP systems',
        '24/7 continuous operation'
      ],
      applications: [
        'High-volume production lines',
        'Automated quality gates',
        'Plastic and metal part inspection',
        'Electronic component screening',
        'Defect sorting and traceability'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/AIS-402-catalog.pdf'
    },
    // Specialized Equipment
    {
      id: 'DSB-501',
      name: 'Digital Scales',
      category: 'specialized',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="35" y="30" width="130" height="100" fill="%2364b5f6" rx="8"/><rect x="50" y="45" width="100" height="40" fill="%23fff" stroke="%23ff6b35" stroke-width="2"/><text x="100" y="75" font-size="28" text-anchor="middle" fill="%23ff6b35" font-weight="bold">88</text><rect x="45" y="110" width="110" height="15" fill="%23ff6b35" opacity="0.6"/><circle cx="65" cy="118" r="3" fill="%23fff"/><circle cx="135" cy="118" r="3" fill="%23fff"/></svg>',
      shortDescription: 'Precision digital weighing instruments for mass measurement in laboratories and production',
      specifications: {
        'Capacity': '300kg',
        'Resolution': '0.1kg',
        'Accuracy': '±0.2%',
        'Display': 'LCD Digital 2-line',
        'Platform': 'Stainless Steel',
        'Power': 'AC/Battery'
      },
      features: [
        'Stainless steel weighing platform',
        'Tare function for container weight',
        'Backlit display for clear reading',
        'AC/Battery powered',
        'Data output to computer',
        'Overload protection'
      ],
      applications: [
        'Material receiving inspection',
        'Component mass verification',
        'Laboratory measurement',
        'Production batch weighing',
        'Ingredient batching'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/DSB-501-catalog.pdf'
    },
    {
      id: 'PGE-502',
      name: 'Pressure Gauges',
      category: 'specialized',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23154a9c" width="200" height="200"/><circle cx="100" cy="100" r="60" fill="%2364b5f6" stroke="%23ff6b35" stroke-width="3"/><circle cx="100" cy="100" r="50" fill="none" stroke="%23fff" stroke-width="1" opacity="0.3"/><line x1="100" y1="70" x2="100" y2="55" stroke="%23ff6b35" stroke-width="3"/><path d="M 100 100 L 130 90" stroke="%23ff6b35" stroke-width="2" stroke-linecap="round"/><text x="100" y="130" font-size="14" text-anchor="middle" fill="%23ff6b35">0-250 bar</text></svg>',
      shortDescription: 'Analog and digital pressure measurement instruments for various industrial applications',
      specifications: {
        'Range': '0-250 bar',
        'Class': 'Class 1.6 (±1.6%)',
        'Connection': 'M20x1.5 SAE',
        'Type': 'Analog glycerin filled',
        'Dial Size': '63mm',
        'Material': 'Stainless Steel'
      },
      features: [
        'Glycerin-damped needle movement',
        'Stainless steel case',
        'Easy-to-read scale markings',
        'Temperature compensated',
        'Bottom or back connection',
        'Shock-resistant design'
      ],
      applications: [
        'Hydraulic system monitoring',
        'Pneumatic pressure control',
        'Pump discharge pressure reading',
        'Air compressor output monitoring',
        'System pressure verification'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/PGE-502-catalog.pdf'
    },
    {
      id: 'ELE-503',
      name: 'Digital Levels',
      category: 'specialized',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%230b2c5f" width="200" height="200"/><rect x="30" y="70" width="140" height="30" fill="%2364b5f6" rx="5" stroke="%23ff6b35" stroke-width="2"/><circle cx="60" cy="85" r="8" fill="%23ff6b35"/><circle cx="100" cy="85" r="8" fill="%23ff6b35"/><circle cx="140" cy="85" r="8" fill="%23ff6b35"/><rect x="50" y="50" width="100" height="15" fill="%23fff" stroke="%23ff6b35" stroke-width="1"/><line x1="90" y1="55" x2="110" y2="55" stroke="%23ff6b35" stroke-width="2"/><polyline points="40,130 80,125 120,130 160,125" fill="none" stroke="%23ff6b35" stroke-width="2" opacity="0.6"/></svg>',
      shortDescription: 'Digital spirit levels with Bluetooth connectivity for precise leveling and angle measurement',
      specifications: {
        'Length': '600mm',
        'Accuracy': '±0.5mm/m',
        'Display': 'LCD Digital 2-line',
        'Features': 'Bluetooth 5.0 connectivity',
        'Range': '-90° to +90°',
        'Power': 'AAA Batteries'
      },
      features: [
        'Digital angle measurement display',
        'Bluetooth data transmission',
        'Water-resistant design (IP65)',
        'Magnetic base included',
        'Automatic calibration',
        'Hold/Max functions'
      ],
      applications: [
        'Equipment installation and alignment',
        'Structural leveling',
        'Angle measurement',
        'Precision surface setup',
        'Machinery alignment'
      ],
      catalogPdf: 'https://assets.insize.com/catalogs/ELE-503-catalog.pdf'
    }
  ]
};