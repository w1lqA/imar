import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru',
    lng: 'ru',
    returnObjects: true,
    resources: {
    en: {
        translation: {
            navbar: {
              main: 'Main', 
              projects: 'Projects',
              services: 'Services',
              career: 'Career'
            },
            headerButton: 'about us',
            activitiesSectionTitle: 'Areas of Our Activity',
            activities: [
            {
                title: 'Civil Engineering',
                description: 'Shaping the landscape with visionary architecture and robust civil engineering.',
            },
            {
                title: 'Construction of infrastructure facilities',
                description: 'Building essential connections through transportation, utilities, and urban development projects.',
            },
            {
                title: 'Construction of power engineering and alternative energy facilities',
                description: 'Empowering communities with sustainable electricity and renewable energy initiatives.',
            },
            {
                title: 'Industrial construction',
                description: 'Expertly navigating the world of energy extraction, processing, and distribution.',
            },
            {
                title: 'Construction of marine  structures',
                description: 'Harnessing the power of the seas with advanced maritime solutions.',
            },
            ],
            about: {
            title: 'ABOUT US',
            listElements: [
                {
                boldText: 'Expert Construction Services',
                description: 'A team of specialists in the field of construction and technical engineering for the implementation of projects of any scale and complexity.',
                },
                {
                boldText: 'Sustainable Development Leaders',
                description: 'In each project, we strive to bring true value to the client and a high level of service, which determine the approach to our work.',
                },
                {
                boldText: 'Project Success Through Experience',
                description: 'We help the world develop safely and efficiently, moving towards a sustainable future.',
                },
                {
                boldText: 'Global Engineering Adaptability',
                description: 'We implement projects on a global scale, following developing technologies and engineering approaches, we adapt to the technical and administrative peculiarities of the country.',
                },
            ],
            paragraphs: [
                '➤ By creating cost-effective and technologically advanced solutions, we help you reduce the cost of installation, design and operation of your facility, while providing convenience in work processes.',
                '➤ We make it easier for you to implement your projects by sharing our experience with you. With proper management of personnel, materials and finances, we carry out the processes of implementing your project without any failures.',
                '➤ We take over the management of all processes during construction in accordance with design drawings, general and special specifications, as well as within the framework of the rules of engineering ethics and occupational safety requirements.',
            ],
            consultation: 'Leave a request and we will contact you',
            contactFormButton: 'contact form',
            },
            servicesSectionTitle: 'FULL-SERVICE CONSTRUCTION COMPANY',
            services: [
                {
                    title: 'ENGINEERING',
                    description: [
                        'Turnkey construction and installation works',
                        'Attracting a full staff of employees to the facility',
                        'Quick mobilization and high-quality coordinated work of the team',
                    ],
                },
                {
                    title: 'DESIGN',
                    description: [
                        'Design of engineering system drawings',
                        'Delivery of the complete list of documentation to the customer',
                        'Support during the construction process',
                    ],
                },
                {
                    title: 'MANAGEMENT',
                    description: [
                        'Professional service',
                        'Efficient maintenance technology',
                        'Saving of effort and money as a result of proper operation',
                    ],
                },
            ],
            hero: {
                description: "IMAR GROUP - We are an international construction company. We implement projects taking into account modern innovative methods of construction engineering.",
                button: "ABOUT US"
            },
            projects: {
                project1: "RESIDENTIAL COMPLEX",
                project2: "AMUR GPP",
                project3: "RESIDENTIAL DISTRICT",
                project4: "AMUR GCC",
                project5: "KUZMINKI MALL",
                project6: "G-DRIVE ARENA",
                project7: "Industrial Park",
                project8: "«Magadan» Airport",
                project9: "Min. vody airport",
                project10: "Roshchino Airport",
                project11: "ISLAND RC",
                project12: "PERM STATE ART GALLERY",
                project13: "EDUCATIONAL COMPLEX “POINT OF THE FUTURE”",
                project14: "COKE BATTERY №2",
                project15: "SINTERING PLANT GAS CLEANING",
                project16: "STEEL COIL STORAGE WAREHOUSE",
                project17: "REHEATING FURNACE №3",
                description1: "Electrical and mechanical work",
                description2: "Construction and installation works",
                projectCardButton: "See more"
            },
            projectsSectionTitle: "OUR PROJECTS",
            geographyTitle: "GEOGRAPHY OF THE PROJECTS",
            career: {
                title: "We are always on the lookout for ambitious people",
                description: "If you would like to join the IMAR GROUP, please leave an application form and we will contact you.",
                button: "learn more"
            },
            contacts: {
                title1: 'contact us',
                title2: 'career in imar',
                location: ['109147, Moscow, Tagansky Municipal District, 20,', 'bldg. 8, Marksistskaya St., premise 1/1'],
                phone: '+7 (991) 773-48-28',
                email: 'info@imar-group.com',
            },
            contactForm: {
                errorMessages: {
                    0: ' ',
                    1: 'Fill in all the fields to continue',
                    2: 'Accept the user agreement to continue',
                    3: 'Your message is successfully sent!',
                    4: 'Something went wrong :('
                },
                agreement: 'I accept the user agreement and privacy policy',
                labelName: 'Name',
                labelEmail: 'Email',
                labelPhone: 'Phone',
                button: 'Send',
            },
            footer: {
              phone: 'Phone',
              email: 'Email',
              copyright: 'All rights reserved'
            },
            projectInfoSection: { title: 'ABOUT THIS PROJECT' },
            projectPage: {
              header: {
                title: [
                  'Start / Finish: ',
                  'Scope of Works: ',
                  'Client: '
                ]
              },
              
            projectInfo: [
              {
                title: ['SYMBOL RC'],
                headerInfo: ['2022-2023', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'MULTIFUNCTIONAL RESIDENTIAL COMPLEX WITH UNDERGROUND PARKING, RC “SYMBOL”, BUILDINGS 16-17-18 in MOSCOW',
                  'Three buildings are connected by a two-story stylobate and a single two-level underground parking for 449 cars. The total area of the project is 93,729 square meters.',
                  'The courtyard territory of the buildings is fenced and equipped with vehicle access control through the checkpoint. On the territory of the complex, it is planned to place: an attached supermarket; an integrated fitness and wellness complex (FWC); catering enterprises for up to 50 seats each; office premises.'
                ]
              },
              {
                title: ['AMUR GPP'],
                headerInfo: ['2018-2022', 'Electrical and mechanical works', 'YAMATA'],
                description: [
                  'The main construction site of the plant is about 900 hectares (comparable to the area of 1100 football fields). During the construction, more than 430 thousand cubic meters of concrete were poured, and over 170 thousand tons of metal structures were installed (comparable to the weight of 23 Eiffel Towers).',
                  'The design processing capacity is 42 billion cubic meters of natural gas per year. For the construction of the Amur GPP, large-scale infrastructure was created on the adjacent territories: 27 km of access roads, a berth on the Zeya River, about 40 km of railways.',
                  'The construction of the Amur gas processing plant in the Svobodny area of the Amur region has been ongoing since October 2015 as part of Gazprom’s Eastern Gas Program.'
                ]
              },
              {
                title: ['MICRODISTRICT', 'SVOBODNY CITY'],
                headerInfo: ['2020-2021', 'Construction and installation works', 'GORIZONT'],
                description: [
                  'Residential microdistrict for Amur GPP employees. For the operational staff of the Amur GPP in Svobodny, the “Alekseevsky” residential microdistrict for 5 thousand residents was built. A total of 42 five-story buildings with 1540 apartments and 36 townhouses with 148 apartments were constructed. All housing has improved layouts, high ceilings, furniture, household appliances, mirrors, and chandeliers. The courtyard area is equipped with parking lots and sports and playground complexes.',
                  'Also, the microdistrict will include a kindergarten with an indoor pool for 350 children, a school for 900 students, a clinic with adult and children’s departments, a cultural and leisure center, a universal store, a household service center, and a universal sports training complex.',
                  'For the water supply of the microdistrict, artesian wells were drilled. A water purification complex and modern treatment facilities for household sewage are provided. Heat and hot water are supplied by a gas boiler house. All facilities are designed for the Far Eastern climate with temperature fluctuations from minus 40 to plus 40 degrees.'
                ]
              },
              {
                title: ['Amur GHK'],
                headerInfo: ['2024 - present', 'Electrical and mechanical works', 'ESTA Construction'],
                description: [
                  'Amur Gas Chemical Complex (AGHK) is a joint venture between SIBUR and China Petroleum & Chemical Corporation (Sinopec) for the production of polyethylene and polypropylene of popular grades on the Russian and world markets. The complex’s production capacity will be up to 2.7 million tons of finished products per year.',
                  'The construction area of the Amur GHK is over 300 hectares. The complex is being built in the Svobodny district, 15 km from Svobodny city.',
                  "The world's largest pyrolysis units by individual capacity – 2.3 million tons per year – have been built, with 9 pyrolysis furnaces, 8 main and 1 reserve."
                ]
              },
              {
                title: ['MALL', 'KUZMINKI MALL'],
                headerInfo: ['2023-2024', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'Project for the construction of a new shopping and entertainment center “Kuzminki Mall” in Moscow. Kuzminki Mall is located 200 meters from the Kuzminki metro station on one of the main transport arteries of the city.',
                  'The shopping and entertainment center has become a central shopping destination. The mall includes a supermarket, popular fashion and sports brands, as well as a gastronomic space with cafes and restaurants. In front of the main entrance to the mall, there is a landscaped square with atmospheric lighting, and inside – spacious atriums with wide lounge areas.'
                ]
              },
              {
                title: ['G-Drive Arena'],
                headerInfo: ['2021-2022', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'The multifunctional sports complex “G-DRIVE Arena” is designed for: KHL, VHL, and WJC hockey matches; hockey training processes; mass ice skating; other sports and entertainment events.',
                  'During free time from sports events, the area around the sports complex is used for walks and recreation for citizens, as well as for holding city-wide cultural and mass events.'
                ]
              },
              {
                title: ['Industrial Park “Chernyakhovsk”'],
                headerInfo: ['2021-2022', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'Construction of a production complex for the production of silicon wafers and photovoltaic converters, located in Chernyakhovsk, Kaliningrad region (Industrial Park “Chernyakhovsk”). This is the largest solar wafer and cell factory in Eastern Europe.',
                  'During the project implementation, the design documentation was adjusted with state expertise, working documentation was developed in BIM, and construction works were carried out “turnkey”, including the full scope of electromechanical works.'
                ]
              },
              {
                title: ['Magadan Airport'],
                headerInfo: ['2024 - present', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'As part of the project, the construction of a new terminal complex for domestic flights of the Magadan International Airport is underway.',
                  'The construction of a new station square, a new 10kV distribution substation, treatment facilities, and other auxiliary facilities.',
                  'The new terminal of Magadan International Airport will be equipped with 2 telescopic gangways and an automated baggage handling system, and will implement modern passenger service technologies.'
                ]
              },
              {
                title: ['Mineralnye Vody Airport'],
                headerInfo: ['2024 - present', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  "As a result of the construction, the area of the new domestic terminal will be 28,000 square meters. The new terminal of Mineralnye Vody International Airport will increase the capacity to 1,000 passengers per hour and the total annual volume to 3,800,000 passengers per year.",
                  "In addition to the construction of the new terminal building 'turnkey', the general contractor will lay engineering and communication networks, as well as carry out landscaping of the forecourt area. The new domestic terminal will be equipped with five telescopic bridges, modern passenger service systems, and baggage handling systems.",
                  "According to the contract with the general contractor, the work is expected to start in mid-April 2023 and be completed in January 2025."
                ]
              },
              {
                title: ['Roshchino Airport'],
                headerInfo: ['2024 - present', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  "During the reconstruction, the area of the new terminal, combined with the existing one, will increase from 27,000 to 46,000 square meters. The reconstruction of Roshchino International Airport will increase the capacity to 1,900 passengers per hour, with a total annual volume of up to 3,800,000 passengers. ",
                  "In addition to the terminal building, the project includes the reconstruction of the engineering networks of buildings and structures, the forecourt area, and the apron.",
                  "The new terminal will be equipped with seven telescopic bridges, modern passenger service systems, and baggage handling systems."
                ]
              },  
              {
                title: ['ISLAND RC', 'QUARTER №5'],
                headerInfo: ['2022-2024', 'Construction and installation works', 'LMS Group'],
                description: [
                  'Multifunctional residential complex, Quarter №5 of "Island" Residential Complex, buildings 1-8 in Moscow',
                  'The general contractor develops working documentation, BIM model, performs construction, installation and finishing works "turnkey", including common areas, as well as landscaping.',
                  'The total area of buildings is 155,844 m². The complex includes: 8 buildings with 17-22 floors, 1,193 apartments, two-level underground parking for 896 cars. The quarter will house 26 commercial premises: shops, restaurants, a fitness center and a preschool institution.'
                ]
              },
              {
                title: ['OSTROV RESIDENTIAL COMPLEX', 'BLOCK №5'],
                headerInfo: ['2022–2024', 'Construction and installation works', 'LMS Group'],
                description: [
                  'Multifunctional residential development, Block №5 of the "Ostrov" residential complex, buildings 1–8 in Moscow.',
                  'The general contractor is responsible for developing working documentation, BIM modeling, performing turnkey construction and finishing works including public areas and site landscaping.',
                  'Total building area is 155,844 m². The complex includes 8 buildings ranging from 17 to 22 floors, 1,193 apartments, and a two-level underground parking for 896 cars. The block will feature 26 commercial premises: shops, restaurants, a fitness and wellness center, and a preschool institution.'
                ]
              },
              {
                title: ['PERM STATE', 'ART GALLERY'],
                headerInfo: ['2022–2024', 'Construction works', 'LMS Group'],
                description: [
                  'Building of the Perm State Art Gallery in Perm.',
                  'The architectural complex combines preserved historical buildings with a new structure stylized in the traditional architecture of the Perm region. Total building area – 21,639 m² on a 1.9 ha site.',
                  'The project includes exhibition halls, administrative areas, an educational center, restoration workshops, a café, and other functional zones. Special attention is paid to integrating the new building with its historical surroundings.'
                ]
              },
              {
                title: ['EDUCATIONAL COMPLEX', '“TOCHKA BUDUSHCHEGO”'],
                headerInfo: ['2023–2025', 'Integrated construction', 'LMS Group'],
                description: [
                  'Educational complex in Zhatai, Sakha Republic (Yakutia).',
                  'The project includes 7 academic buildings, a residential house for teachers and foster families, a heated parking facility with a transport terminal, and sports facilities. The total site area is 263,397 m².',
                  'The complex is supported by the “New Home” charitable foundation and is designed for an innovative educational process adapted to the Arctic environment.'
                ]
              },
              {
                title: ['RECONSTRUCTION OF', 'COKE BATTERY №2'],
                headerInfo: ['2022–2025', 'Industrial construction', 'EVRAZ ZSMK'],
                description: [
                  'Reconstruction of the coke battery complex in Novokuznetsk.',
                  'Construction of a new coke battery with a capacity of 705,000 tons/year, consisting of 77 ovens, a dust-free coke discharge system, and chemical trapping systems.',
                  'The project includes a full cycle of works from dismantling the old facilities to commissioning new ones, significantly improving environmental safety and production efficiency.'
                ]
              },
              {
                title: ['SULFUR-GAS', 'PURIFICATION FACILITIES'],
                headerInfo: ['2024–2026', 'Environmental project', 'EVRAZ ZSMK'],
                description: [
                  'Exhaust gas purification system for the sinter plant in Novokuznetsk.',
                  'The project includes the construction of an exhaust tower, an absorber building, a limestone solution preparation unit, and the installation of all technological equipment.',
                  'The wet limestone scrubbing method will significantly reduce sulfur dioxide emissions, improving the region’s environmental situation.'
                ]
              },
              {
                title: ['ROLLED STEEL', 'WAREHOUSE'],
                headerInfo: ['2024–2025', 'Industrial construction', 'Severstal'],
                description: [
                  'Steel warehouse on the territory of the hot rolling mill 2000 in Cherepovets.',
                  'Construction of a new warehouse complex as part of the capacity expansion program of the rolling mill.',
                  'The project provides for the creation of modern conditions for the storage and logistics of metal products in accordance with technological requirements.'
                ]
              },
              {
                title: ['RECONSTRUCTION OF', 'REHEATING FURNACE №3'],
                headerInfo: ['2024–2025', 'Industrial construction', 'Severstal'],
                description: [
                  'Reconstruction of the walking beam furnace in Cherepovets.',
                  'Complete replacement of two existing furnaces with new ones with a capacity of 400 tons/hour each.',
                  'The project includes a full cycle from design and dismantling to hot commissioning of the new equipment.'
                ]
              }

              ]
            },
            servicePage: {
              serviceInfo: [

                {
                  title: 'IMAR ENGINEERING AND CONSTRUCTION',
                  info: [
                    '• TURNKEY CONSTRUCTION AND INSTALLATION WORKS',
                    '• ATTRACTING A FULL STAFF OF EMPLOYEES TO THE FACILITY',
                    '• QUICK MOBILIZATION AND HIGH-QUALITY COORDINATED WORK OF THE TEAM'
                    ],
                  descriptionTitle: 'Provides construction and installation services for electromechanical systems:',
                  description: [
                    ['➤ Installation of industrial equipment',
                    '➤ Installation of process pipelines',
                    '<br/>',
                    '➤ ES: Electrical Supply',
                    '➤ EM: Electrical Equipment',
                    '➤ EG: Lightning Protection and Grounding',
                    '➤ AMR: Automated Meter Reading',
                    ],
                    ['➤ Installation of prefabricated buildings and structures',
                    '➤ Installation of metal structures',
                    '<br/>',
                    "➤ APS Automatic Fire Alarm System",
                    "➤ Smoke protection automation system",
                    "➤ SUE System of warning and control of evacuation of people in case of fire",
                    "➤ ACS Access Control and Management System",
                    "➤ CCTV Video Surveillance System",
                    "➤ SCS Structured Cabling System",
                    "➤ SRF Radio System",
                    "➤ SPP Automatic Parking System (paid parking system)",
                    "➤ OS Security alarm system",
                    "➤ TS Alarm system",
                    "➤ ECH Electrical Chasification System",
                    "➤ SES Emergency communication system for immobile groups of population",
                    ],
                    [
                      "➤ OV Heating Ventilation and Air Conditioning",
                      "➤ OV1 Heating and Heat Supply System",
                      "➤ OV2 System of general-exchange ventilation",
                      "➤ OV3 Air-conditioning system",
                      "➤ ОВ4 Smoke ventilation system",
                      "➤ VK Sewerage",
                      "➤ BK1 Internal sewerage systems",
                      "➤ BK2 Storm water drainage",
                      "➤ BK3 Industrial sewerage",
                      "➤ WS Water Supply System",
                      "➤ CC Refrigeration system",
                      "➤ AUPT Automatic water fire extinguishing system",
                      "➤ VPV Internal fire-fighting water supply system",
                    ]
                  ],
                  
                },
                {
                  title: 'IMAR PROJECT',
                  info: [ '• DESIGN OF ENGINEERING SYSTEM DRAWINGS',
                      '• DELIVERY OF THE COMPLETE LIST OF DOCUMENTATION TO THE CUSTOMER',
                      '• SUPPORT DURING THE CONSTRUCTION PROCESSS'],
                  descriptionTitle: 'Provides electromechanical system design services:',
                  description: [
                      ['➤ ES: Electrical Supply',
                      '➤ EM: Electrical Equipment',
                      '➤ EG: Lightning Protection and Grounding',
                      '➤ ASCME: Automated System of Control and Metering of Electricity'
                      ],
                      ['➤ APS: Automatic fire alarm system',
                      '➤ ASPS: Smoke protection automation system',
                      '➤ SUE: Smoke alarm system: System of automation of smoke protection',
                      '➤ SUE: System of notification and control of evacuation of people in case of fire',
                      '➤ ACS: Access Control and Management System',
                      '➤ CCTV: Video Surveillance System',
                      '➤ SCS: Structured Cabling System',
                      '➤ SRF: Radio system',
                      '➤ SPP: Automatic Parking System (Paid Parking System)',
                      '➤ OS: Security Alarm System',
                      '➤ TS: Panic alarm system',
                      '➤ EC: Electrical Chasification system',
                      '➤ EES: Emergency communication system for immobile groups of the population'
                      ],
                      ['➤ HVAC: Heating, Ventilation, and Air Conditioning',
                      '➤ HVAC1: Heating and Heat Supply System',
                      '➤ HVAC2: General Exchange Ventilation System',
                      '➤ HVAC3: Air Conditioning System',
                      '➤ HVAC4: Smoke Ventilation System',
                      '➤ WC: Sewerage',
                      '➤ WC1: Internal Sewerage Systems',
                      '➤ WC2: Storm Sewerage',
                      '➤ WC3: Industrial Sewerage',
                      '➤ WS: Water Supply System',
                      '➤ HC: Cold Supply System',
                      '➤ AUPT: Automatic Water Fire Extinguishing Systems',
                      '➤ WFW: Internal Fire-Fighting Water Supply System'
                      ],
                  ],
                  
                },
                {
                  title: 'IMAR MANAGEMENT',
                  info: [
                    '• DESIGN OF ENGINEERING SYSTEM DRAWINGS',
                    '• DELIVERY OF THE COMPLETE LIST OF DOCUMENTATION TO THE CUSTOMER',
                    '• SUPPORT DURING THE CONSTRUCTION PROCESS'],
                  descriptionTitle: 'Provides commercial real estate maintenance services:',
                  description: [
                    ['➤ Maintenance of engineering systems and operation and repair activities',
                    '➤ Round-the-clock dispatch, emergency and technical services',
                    '➤ Development and implementation of preventive maintenance activities',
                    '➤ Ensuring daily uninterrupted and safe operation of the facility',
                    '➤ Administrative services',
                    '➤ Ensuring security of the facility',
                    '➤ Recommendations for additional services to make the facility more attractive to potential clients and investors for potential customers and investors',
                    '➤ Guarantor of a full range of high-quality services in the sphere of real estate management',
                    "➤ Due to the unique experience gained in the course of many years of practice, as well as professionalism and qualification of the company's personnel",
                    '➤ We save effort and money due to competent operation, timely implementation of preventive measures',
                    '➤ We work according to the scheme of trust cooperation, when all functions are delegated to our employees, but the main strategic decisions and unified control of the object remain in the hands of the owner'
                    ],
                  ],
                  
                },
            ]
            }

        },
      },
      ru: {
        translation: {
            headerButton: 'о нас',
            navbar: {
              main: 'Главная', 
              projects: 'Проекты',
              services: 'Услуги',
              career: 'Карьера'
            },
            activitiesSectionTitle: 'сферы деятельности',
            activities: [
                {
                    title: 'Гражданское строительство',
                    description: 'Формирование ландшафта с помощью видения архитектуры и надежного гражданского проектирования.',
                },
                {
                    title: 'Строительство объектов инфраструктуры',
                    description: 'Построение необходимых связей через транспорт, коммунальные услуги и проекты городского развития.',
                },
                {
                    title: 'Строительство объектов энергетики и альтернативных источников энергии',
                    description: 'Повышение благосостояния обществ с помощью устойчивой электроэнергии и инициатив по возобновляемой энергии.',
                },
                {
                    title: 'Промышленное строительство',
                    description: 'Опытное управление миром добычи, переработки и распределения энергии.',
                },
                {
                    title: 'Строительство морских сооружений',
                    description: 'Использование сил морей с помощью передовых морских решений.',
                },
            ],
            about: {
                title: 'О НАС',
                listElements: [
                    {
                        boldText: 'Экспертные строительные услуги',
                        description: 'Команда специалистов в области строительства и технического проектирования для реализации проектов любого масштаба и сложности.',
                    },
                    {
                        boldText: 'Лидеры в области устойчивого развития',
                        description: 'В каждом проекте мы стремимся приносить реальную ценность клиенту и высокий уровень сервиса, который определяет подход к нашей работе.',
                    },
                    {
                        boldText: 'Успех проекта через опыт',
                        description: 'Мы помогаем миру развиваться безопасно и эффективно, двигаясь в сторону устойчивого будущего.',
                    },
                    {
                        boldText: 'Глобальная инженерная адаптивность',
                        description: 'Мы реализуем проекты в масштабах мирового уровня, следуя развивающимся технологиям и инженерным подходам, адаптируясь к техническим и административным особенностям страны.',
                    },
                ],
                paragraphs: [
                    '➤ Создавая экономически эффективные и технологически продвинутые решения, мы помогаем вам снизить затраты на установку, проектирование и эксплуатацию вашего объекта, обеспечивая удобство в рабочих процессах.',
                    '➤ Мы упрощаем для вас реализацию ваших проектов. С правильным управлением персоналом, материалами и финансами мы проводим процессы реализации вашего проекта без каких-либо сбоев.',
                    '➤ Мы берем на себя управление всеми процессами во время строительства в соответствии с чертежами, общими и специальными спецификациями, а также в рамках правил инженерной этики и требований безопасности труда.',
                ],
                consultation: 'Оставьте заявку, и мы свяжемся с вами',
                contactFormButton: 'оставить заявку',
            },
            servicesSectionTitle: 'СТРОИТЕЛЬНАЯ КОМПАНИЯ ПОЛНОГО ЦИКЛА',
            services: [
              {
                title: 'Инжиниринг',
                description: [
                  'Комплекс строительно-монтажных работ "под ключ"',
                  'Привлечение полного штата сотрудников на объект',
                  'Быстрая мобилизация и высококачественная согласованная работа команды',
                ],
              },
              {
                title: 'Проектирование',
                description: [
                  'Проектирование чертежей инженерных систем',
                  'Поставка полного списка документации заказчику',
                  'Поддержка в процессе строительства',
                ],
              },
              {
                title: 'Менеджмент',
                description: [
                  'Профессиональное обслуживание',
                  'Эффективные технологии обслуживания',
                  'Экономия усилий и денег в результате правильной эксплуатации',
                ],
              },
            ],
            hero: {
              description: "IMAR GROUP - Мы международная строительная компания. Реализуем проекты с учетом современных инновационных методов строительной инженерии.",
              button: "О НАС"
            },
            projects: {
              project1: "ЖИЛОЙ КОМПЛЕКС",
              project2: "АМУРСКИЙ ГПЗ",
              project3: "ЖИЛОЙ МИКРОРАЙОН",
              project4: "АМУРСКИЙ ГХК",
              project5: "КУЗЬМИНКИ МОЛЛ",
              project6: "АРЕНА G-DRIVE",
              project7: "Индустриальный парк",
              project8: "Аэропорт «Магадан»",
              project9: "Аэропорт Мин. воды",
              project10: "Аэропорт Рощино",
              project11: "ЖК ОСТРОВ",
              project12: "ПЕРМСКАЯ ХУДОЖЕСТВЕННАЯ ГАЛЕРЕЯ",
              project13: "ОБР. КОМПЛЕКС «ТОЧКА БУДУЩЕГО»",
              project14: "КОКСОВАЯ БАТАРЕЯ №2",
              project15: "СЕРО-ГАЗООЧИСТКА АГЛОФАБРИКИ",
              project16: "СКЛАД РУЛОННОЙ СТАЛИ",
              project17: "НАГРЕВАТЕЛЬНАЯ ПЕЧЬ №3",
              description1: "Электромонтажные и механические работы",
              description2: "Строительно-монтажные работы",
              projectCardButton: "Подробнее"
            },
            projectsSectionTitle: "НАШИ ПРОЕКТЫ",
            geographyTitle: "ГЕОГРАФИЯ ПРОЕКТОВ",
            career: {
              title: "Мы всегда в поисках амбициозных людей",
              description: "Если вы хотите присоединиться к команде IMAR, пожалуйста, оставьте заявку, и мы свяжемся с вами.",
              button: "Узнать больше"
            },
            contacts: {
              title1: 'Свяжитесь с нами',
              title2: 'Карьера в IMAR',
              location: ['109147, г. Москва, вн.тер.г. Муниципальный Округ' ,'Таганский, ул Марксистская, д. 20, стр. 8, помещ. 1/1'],
              phone: '+7 (991) 773-48-28',
              email: 'info@imar-group.com',
            },
            contactForm: {
              errorMessages: {
                0: ' ',
                1: 'Заполните все поля, чтобы продолжить',
                2: 'Примите пользовательское соглашение, чтобы продолжить',
                3: 'Ваше сообщение успешно отправлено!',
                4: 'Что-то пошло не так :('
              },
              agreement: 'Я принимаю пользовательское соглашение и политику конфиденциальности',
              labelName: 'Имя',
              labelEmail: 'Email',
              labelPhone: 'Телефон',
              button: 'Отправить',
            },
            footer: {
              phone: 'Телефон',
              email: 'Email',
              copyright: 'Все права защищены'
            },
            projectInfoSection: {title: 'О ПРОЕКТЕ'},
            projectPage: {
              header: {title: [
                'Начало / Конец: ',
                'Тип работ: ',
                'Заказчик: '
              ]},
              projectInfo:[
                {
                  title: ['ЖК СИМВОЛ'],
                  headerInfo: ['2022-2023','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'МНОГОФУНКЦИОНАЛЬНАЯ КОМПЛЕКСНАЯ ЖИЛАЯ ЗАСТРОЙКА С ПОДЗЕМНОЙ АВТОСТОЯНКОЙ, ЖК «СИМВОЛ», КОРПУСА 16-17-18 в г.МОСКВА',
                    'Три корпуса объединены двухэтажным стилобатом и единым двухуровневым подземным паркингом на 449 машиномест. Общая площадь проекта составляет 93 729 квадратных метров.',
                    'Территория внутреннего двора домов огорожена и оборудована контролем доступа автотранспорта через КПП.На территории застройки, в жилом комплексе, предполагается разме- стить:пристроенный супермаркет;встроенно-пристроенный физкультурно-оздоровительный комплекс (ФОК);предприятия общественного питания до 50 посадочных мест каждое;офисные помещения.',
                  ],
                },
                {
                  title: ['АМУРСКИЙ ГПЗ'],
                  headerInfo: ['2018-2022','Электрические и механические работы','YAMATA'],
                  description: [
                    'Размер основной строительной площадки завода — порядка 900 га (сравнимо с площадью 1100 футбольных полей). В ходе строительства залито более 430 тыс. куб. м бетона, смонтировано более 170 тыс. тонн металлоконструкций (сопоставимо с весом 23 Эйфелевых башен).',
                    'Проектная мощность переработки — 42 млрд куб. м природного газа в год. Для строительства Амурского ГПЗ на прилегающих территориях создана масштабная инфраструктура: 27 км подъездных автодорог, причал на р. Зее, порядка 40 км железнодорожных путей.',
                    'Строительство Амурского газоперерабатывающего завода в районе г. Свободного Амурской области ведется с октября 2015 года в рамках реализации Восточной газовой программы «Газпрома»',
                  ],
                },
                {
                  title: ['МИКРОРАЙОН','г.СВОБОДНЫЙ'],
                  headerInfo: ['2020-2021','Строительные и монтажные работы','GORIZONT'],
                  description: [
                    'Жилой микрорайон для сотрудников Амурского ГПЗ.Для эксплуатационного персонала Амурского ГПЗ в г. Свободном построен жилой микрорайон «Алексеевский» на 5 тыс. жителей. Всего возведено 42 пятиэтажных дома на 1540 квартир и 36 таунхаусов на 148 квартир. Всё жилье улучшенной планировки, с высокими потолками, мебелью, бытовой техникой, зеркалами и люстрами. Придомовая территория оснащена автопарковками и спортивно-игровыми комплексами.',
                    'Также на территории микрорайона разместятся детский сад с крытым бассейном на 350 мест, школа на 900 учащихся, поликлиника со взрослым и детским отделениями, Центр культуры и досуга, универсальный магазин, центр бытового обслуживания, универсальный спортивно-тренировочный комплекс. ',
                    'Для водоснабжения микрорайона пробурены артезианские скважины. Предусмотрены комплекс очистки воды и современные очистные сооружения хозяйственно-бытовых стоков. Тепло и горячую воду поставляет собственная газовая котельная. Все объекты рассчитаны на дальневосточный климат с перепадом температур от минус 40, до плюс 40 градусов.',
                  ],
                },
                {
                  title: ['Амурский ГХК'],
                  headerInfo: ['2024 - настоящее время','Электромонтажные и механические работы','ESTA Construction'],
                  description: [
                    'Амурский газохимический комплекс (АГХК) - совместное предприятие СИБУРа и China Petroleum & Chemical Corporation (Sinopec) по производству полиэтилена и полипропилена востребованных на российском и мировом рынках марок. Производственная мощность комплекса составит до 2,7 миллионов тонн готовой продукции в год.',
                    'Площадь объектов строительства Амурского ГХК - более 300 гектаров. Комплекс возводится на территории Свободненского района, в 15 км отг. Свободный.',
                    'Крупнейшие в мире установки пиролиза по единичной мощности - 2,3 млн тонн в год, построены 9 печей пиролиза, 8 основных и 1 резервная.',
                  ],
                },
                {
                  title: ['ТРЦ', 'КУЗЬМИНКИ МОЛЛ'],
                  headerInfo: ['2023-2024','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Проект строительства нового торгово-развлекательного центра «Кузьминки Молл» в г.Москве. Кузьминки Молл - расположен в 200 метрах от станции метро «Кузьминки» на одной из основных транспортных артерий города. ',
                    'Торгово-развлекательный центр стал центральным местом шоппинга.ТЦ включает супермаркет, популярные fashion и спортивные бренды, а также гастрономическое пространство с кафе и ресторанами. Перед главным входом в молл расположен благоустроенный сквер с атмосферной подсветкой, внутри - просторные атриумы с просторными лаунж зонами.',
                  ],
                },
                {
                  title: ['Арена G-Drive'],
                  headerInfo: ['2021-2022','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Многофункциональный спортивный комплекс «G-DRIVE Arena» предназначена для: Хоккейных матчей под эгидой КХЛ, ВХЛ, МЧМ; Учебно-тренировочного процесса по хоккею; Массового катания на коньках; Иных спортивно-зрелищных мероприятий',
                    'В свободное от спортивных мероприятий время территория вокруг спортивного комплекса используется для прогулок и отдыха горожан, а также для проведения общегородских культурно-массовых мероприятий.',
                  ],
                },
                {
                  title: ['Индустриальный парк «Черняховск»'],
                  headerInfo: ['2021-2022','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Строительство производственного комплекса по выпуску кремниевых пластин и фотоэлектрических преобразователей, расположенного в г. Черняховск Калининградской области (Индустриальный парк «Черняховск»). Это крупнейший в Восточной Европе завод по производству солнечных пластин и ячеек.',
                    'В ходе реализации проекта была выполнена корректировка проектной документации с прохождением государственной экспертизы, разработка рабочей документации в BIM, выполнение строительных работ «под ключ», включая полный объем электромеханических работ.',
                  ],
                },
                {
                  title: ['Аэропорт «Магадан»'],
                  headerInfo: ['2024 - настоящее время','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'В рамках реализации проекта ведётся строительство нового аэровокзального комплекса внутренних воздушных авиалиний Международного аэропорта Магадан.',
                    'Строительство новой привокзальной площади, новой распределительной электрической подстанции 10кВ, очистных сооружений и других вспомогательных объектов.',
                    'Новый терминал Международного аэропорта Магадан будет оснащен 2 телескопическими трапами и автоматической системой обработки багажа, в нем будут реализованы современные технологии обслуживания пассажиров.',
                  ],
                },
                {
                  title: ['Аэропорт', 'Минеральные воды'],
                  headerInfo: ['2024 - настоящее время','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    "В результате строительства площадь нового терминала внутренних воздушных линий составит 28 тыс. м2. Новый терминал международного аэропорта Минеральные Воды позволит увеличить пропускную способность до 1 000 пасс./час., а общий годовой объем до 3 800 000 пасс./год.",
                    'Помимо строительства нового здания аэровокзала «под ключ», генподрядчиком будут проложены инженерные и коммуникационные сети, а также выполнены работы по благоустройству привокзальной площади. Новый терминал внутренних воздушных линий будет оснащен пятью телескопическими трапами, современными системами обслуживания пассажиров и обработки багажа.',
                    'По договору с генеральной подрядной организацией работы предполагается начать в середине апреля 2023 года и завершить в январе 2025 года.',
                  ],
                },
                {
                  title: ['Аэропорт Рощино'],
                  headerInfo: ['2024 - настоящее время','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'В ходе реконструкции площадь нового терминала с существующей - 27 тыс. м2, увеличится до 46 тыс. м2. Реконструкция международного аэропорта Рощино позволит увеличить пропускную способность до 1 900 пасс./час., а общий годовой объем до 3 800 000 пасс./год. ',
                    'Помимо здания аэровокзала в рамках строительства будет произведена реконструкция инженерных сетей зданий и сооружений, привокзальная площадь и перрон.',
                    'Новый терминал будет оснащен семью телескопическими трапами, современными системами обслуживания пассажиров и обработки багажа.',
                  ],
                },
                {
                  title: ['ЖК ОСТРОВ', 'КВАРТАЛ №5'],
                  headerInfo: ['2022-2024', 'Строительно-монтажные работы', 'ГК "ЛМС"'],
                  description: [
                    'Многофункциональная комплексная жилая застройка, Квартал №5 ЖК «Остров», корпуса 1-8 в г. Москва',
                    'Генеральный подрядчик строительства разрабатывает рабочую документацию, BIM-модель, выполняет строительно-монтажные и отделочные работы "под ключ", включая места общего пользования, а также благоустройство территории.',
                    'Общая площадь зданий составляет 155 844 м². В составе комплекса: 8 корпусов высотой от 17 до 22 этажей, 1193 квартиры, двухуровневая подземная парковка на 896 машиномест. На территории квартала разместятся 26 коммерческих помещений: магазины, рестораны, физкультурно-оздоровительный комплекс и дошкольное учреждение.'
                  ]
                },
                {
                  title: ['ПЕРМСКАЯ ГОСУДАРСТВЕННАЯ', 'ХУДОЖЕСТВЕННАЯ ГАЛЕРЕЯ'],
                  headerInfo: ['2022-2024', 'Строительные работы', 'ГК "ЛМС"'],
                  description: [
                    'Здание Пермской государственной художественной галереи в г. Пермь',
                    'Архитектурный комплекс объединяет сохранившиеся исторические постройки с новым зданием, стилизованным под традиционную архитектуру Пермского края. Общая площадь здания - 21 639 м² на участке 1.9 га.',
                    'Проект включает выставочные залы, административные помещения, образовательный центр, реставрационные мастерские, кафе и другие функциональные зоны. Особое внимание уделено интеграции нового сооружения с историческим окружением.'
                  ]
                },
                {
                  title: ['ОБРАЗОВАТЕЛЬНЫЙ КОМПЛЕКС', '«ТОЧКА БУДУЩЕГО»'],
                  headerInfo: ['2023-2025', 'Комплексное строительство', 'ГК "ЛМС"'],
                  description: [
                    'Образовательный комплекс в г. Жатай, Республика Саха (Якутия)',
                    'Проект включает 7 учебных корпусов, жилой дом для учителей и приемных семей, отапливаемый паркинг с транспортным терминалом и спортивные сооружения. Общая площадь участка - 263 397 м².',
                    'Комплекс создан при поддержке благотворительного фонда "Новый дом" и предназначен для инновационного образовательного процесса в условиях Крайнего Севера.'
                  ]
                },
                {
                  title: ['РЕКОНСТРУКЦИЯ', 'КОКСОВОЙ БАТАРЕИ №2'],
                  headerInfo: ['2022-2025', 'Промышленное строительство', 'ЕВРАЗ ЗСМК'],
                  description: [
                    'Реконструкция комплекса коксовой батареи в г. Новокузнецк',
                    'Строительство новой коксовой батареи производительностью 705,000 тонн/год с 77 печами, системами беспылевой выдачи кокса и химического улавливания.',
                    'Проект включает полный цикл работ от демонтажа старых до ввода новых мощностей, что значительно повысит экологичность и эффективность производства.'
                  ]
                },
                {
                  title: ['СООРУЖЕНИЯ', 'СЕРО-ГАЗООЧИСТКИ'],
                  headerInfo: ['2024-2026', 'Экологический проект', 'ЕВРАЗ ЗСМК'],
                  description: [
                    'Система очистки дымовых газов аглофабрики в г. Новокузнецк',
                    'Проект включает строительство вытяжной башни, здания адсорберов, узла приготовления известнякового раствора и монтаж всего технологического оборудования.',
                    'Мокрый известняковый метод очистки позволит значительно снизить выбросы диоксида серы, улучшив экологическую ситуацию в регионе.'
                  ]
                },
                {
                  title: ['СКЛАД', 'РУЛОННОЙ СТАЛИ'],
                  headerInfo: ['2024-2025', 'Промышленное строительство', 'Северсталь'],
                  description: [
                    'Склад стали на территории стана 2000 горячей прокатки в г. Череповец',
                    'Строительство нового складского комплекса как часть программы расширения мощностей прокатного стана.',
                    'Проект предусматривает создание современных условий для хранения и логистики металлопродукции с учетом требований технологического процесса.'
                  ]
                },
                {
                  title: ['РЕКОНСТРУКЦИЯ', 'НАГРЕВАТЕЛЬНОЙ ПЕЧИ №3'],
                  headerInfo: ['2024-2025', 'Промышленное строительство', 'Северсталь'],
                  description: [
                    'Реконструкция печи с шагающими балками в г. Череповец',
                    'Полная замена двух существующих печей на новые производительностью 400 тонн/час каждая.',
                    'Проект включает полный цикл работ от проектирования и демонтажа до горячего пуска нового оборудования.'
                  ]
                },
              ]
            },

            servicePage: {
              serviceInfo: [
                {
                  title: 'IMAR ENGINEERING AND CONSTRUCTION',
                  info: [
                    '• СТРОИТЕЛЬСТВО ПОД КЛЮЧ И МОНТАЖНЫЕ РАБОТЫ',
                    '• ПРИВЛЕЧЕНИЕ ПОЛНОГО ШТАТА СОТРУДНИКОВ НА ОБЪЕКТ',
                    '• БЫСТРАЯ МОБИЛИЗАЦИЯ И ВЫСОКОКАЧЕСТВЕННАЯ СКООРДИНИРОВАННАЯ РАБОТА КОМАНДЫ'
                  ],
                  descriptionTitle: 'Оказывает услуги по строительству и монтажу электромеханических систем:',
                  description: [
                    ['➤ Монтаж промышленного оборудования',
                    '➤ Монтаж технологических трубопроводов',
                    '<br/>',
                    '➤ ЭС: Электроснабжение',
                    '➤ ЭМ: Электрооборудование',
                    '➤ ЭГ: Молниезащита и заземление',
                    '➤ АСКУЭ: Автоматизированная система контроля и учета электроэнергии',
                    ],
                    ['➤ Монтаж сборных зданий и сооружений',
                    '➤ Монтаж металлических конструкций',
                    '<br/>',
                    "➤ АПС Система автоматической пожарной сигнализации",
                    "➤ АСПЗ Система автоматизации противо дымной защиты",
                    "➤ СОУЭ Система оповещения и управления эвакуацией людей при пожаре",
                    "➤ СКУД Система контроля и управления доступом",
                    "➤ СВН Система видеонаблюдения",
                    "➤ СКС Структурированная кабельная система",
                    "➤ СРФ Система радиофикации",
                    "➤ СПП Автоматическая парковочная система (система платной парковки)",
                    "➤ ОС Система охранной сигнализации",
                    "➤ ТС Система тревожной сигнализации",
                    "➤ ЭЧ Система электрочасофикации",
                    "➤ СЭС Система экстренной связи для маломобильных групп населения",
                    ],
                    ["➤ ОВ Отопление вентиляция и кондиционирование",
                    "➤ ОВ1 Система отопления и теплоснабжения",
                    "➤ ОВ2 Система обще-обменной вентиляции",
                    "➤ ОВ3 Система кондиционирования",
                    "➤ ОВ4 Система противо дымной вентиляции",
                    "➤ ВК Канализация",
                    "➤ ВК1 Внутренние системы канализации",
                    "➤ ВК2 Ливневая канализация",
                    "➤ ВК3 Производственная канализация",
                    "➤ ВВ Система водоснабжения",
                    "➤ ХС Система холодоснабжения",
                    "➤ АУПТ Автоматические установки водяного пожаротушения",
                    "➤ ВПВ Внутренний противопожарный водопровод",
                    ]
                  ],
                },
                {
                  title: 'IMAR PROJECT',
                  info: [ '• ПРОЕКТИРОВАНИЕ ЧЕРТЕЖЕЙ ИНЖЕНЕРНЫХ СИСТЕМ',
                      '• ПРЕДОСТАВЛЕНИЕ ПОЛНОГО ПЕРЕЧНЯ ДОКУМЕНТАЦИИ ЗАКАЗЧИКУ',
                      '• СОПРОВОЖДЕНИЕ В ХОДЕ СТРОИТЕЛЬСТВА'],
                  descriptionTitle: 'Оказывает услуги по проектированию электромеханических систем:',
                  description: [
                      [
                        '➤ ЭС: Электроснабжение',
                        '➤ ЭМ: Электрооборудование',
                        '➤ ЭГ: Молниезащита и заземление',
                        '➤ АСКУЭ: Автоматизированная система контроля и учета электроэнергии',
                      ],
                      [
                      "➤ АПС Система автоматической пожарной сигнализации",
                      "➤ АСПЗ Система автоматизации противо дымной защиты",
                      "➤ СОУЭ Система оповещения и управления эвакуацией людей при пожаре",
                      "➤ СКУД Система контроля и управления доступом",
                      "➤ СВН Система видеонаблюдения",
                      "➤ СКС Структурированная кабельная система",
                      "➤ СРФ Система радиофикации",
                      "➤ СПП Автоматическая парковочная система (система платной парковки)",
                      "➤ ОС Система охранной сигнализации",
                      "➤ ТС Система тревожной сигнализации",
                      "➤ ЭЧ Система электрочасофикации",
                      "➤ СЭС Система экстренной связи для маломобильных групп населения",
                      ],
                      ["➤ ОВ Отопление вентиляция и кондиционирование",
                        "➤ ОВ1 Система отопления и теплоснабжения",
                        "➤ ОВ2 Система обще-обменной вентиляции",
                        "➤ ОВ3 Система кондиционирования",
                        "➤ ОВ4 Система противо дымной вентиляции",
                        "➤ ВК Канализация",
                        "➤ ВК1 Внутренние системы канализации",
                        "➤ ВК2 Ливневая канализация",
                        "➤ ВК3 Производственная канализация",
                        "➤ ВВ Система водоснабжения",
                        "➤ ХС Система холодоснабжения",
                        "➤ АУПТ Автоматические установки водяного пожаротушения",
                        "➤ ВПВ Внутренний противопожарный водопровод",
                        ]
                  ],
                  
                },
                {
                  title: 'IMAR MANAGEMENT',
                  info: [
                    '• ПРОЕКТИРОВАНИЕ ЧЕРТЕЖЕЙ ИНЖЕНЕРНЫХ СИСТЕМ',
                    '• ПРЕДОСТАВЛЕНИЕ ПОЛНОГО ПЕРЕЧНЯ ДОКУМЕНТАЦИИ ЗАКАЗЧИКУ',
                    '• СОПРОВОЖДЕНИЕ В ХОДЕ СТРОИТЕЛЬСТВА'],
                  descriptionTitle: 'Оказывает услуги по обслуживанию коммерческой недвижимости:',
                  description: [
                    ['➤ Обслуживание инженерных систем и проведение ремонтных работ',
                    '➤ Круглосуточная диспетчерская, аварийная и техническая службы',
                    '➤ Разработка и внедрение профилактических мероприятий',
                    '➤ Обеспечение ежедневной бесперебойной и безопасной работы объекта',
                    '➤ Административные услуги',
                    '➤ Обеспечение безопасности объекта',
                    '➤ Рекомендации по дополнительным услугам для повышения привлекательности объекта для потенциальных клиентов и инвесторов',
                    '➤ Гарант полного спектра качественных услуг в сфере управления недвижимостью',
                    '➤ Благодаря уникальному опыту, полученному в ходе многолетней практики, а также профессионализму и квалификации персонала компании',
                    '➤ Мы экономим усилия и средства за счет грамотной эксплуатации, своевременного выполнения профилактических мер',
                    '➤ Мы работаем по схеме доверительного сотрудничества, когда все функции делегированы нашим сотрудникам, но основные стратегические решения и единый контроль объекта остаются в руках собственника'
                    ],
                  ],
                  
                },
              ]
            }
            
            
          },
      }
    },
  });

export default i18n;
