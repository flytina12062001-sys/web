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
      image: 'https://picsum.photos/500/500?random=1',
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
      image: 'https://picsum.photos/500/500?random=2',
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
      image: 'https://picsum.photos/500/500?random=3',
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
      image: 'https://picsum.photos/500/500?random=4',
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
      image: 'https://picsum.photos/500/500?random=5',
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
      image: 'https://picsum.photos/500/500?random=6',
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
      image: 'https://picsum.photos/500/500?random=7',
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
      image: 'https://picsum.photos/500/500?random=8',
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
      image: 'https://picsum.photos/500/500?random=9',
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
      image: 'https://picsum.photos/500/500?random=10',
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
      image: 'https://picsum.photos/500/500?random=11',
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
      image: 'https://picsum.photos/500/500?random=12',
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
      image: 'https://picsum.photos/500/500?random=13',
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
      image: 'https://picsum.photos/500/500?random=14',
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
      image: 'https://picsum.photos/500/500?random=15',
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
      image: 'https://picsum.photos/500/500?random=16',
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
      image: 'https://picsum.photos/500/500?random=17',
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
      image: 'https://picsum.photos/500/500?random=18',
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