/* ============================================================================
   李圣宇 · 个人网站内容配置
   ---------------------------------------------------------------------------
   你只需要修改这一个文件，就能更新网站上的所有文字、数据和链接。
   规则很简单：
   1) 中英文都写成 { zh: '中文', en: 'English' } 的形式；
   2) 只要英文，可以写成 { zh: 'English text', en: 'English text' }；
   3) 数组里加一项，页面就会多一个卡片（项目、经历、技能都能这样加）；
   4) 带 TODO 的地方是留给你补充的，改完保存、刷新浏览器即可看到效果。
   ========================================================================== */

window.SITE = {
  /* ------------------------------------------------------------------
     1. 全局设置（语言、主题色、预留区块开关）
     ------------------------------------------------------------------ */
  settings: {
    defaultLang: 'zh', // 打开网站时的默认语言：'zh' 或 'en'

    // 主题色：想换风格只改这 4 个色值即可
    theme: {
      accent: '#0F6B52', // 主色（深绿，代表绿色建筑）
      accent2: '#B8863B', // 辅助色（暖金，用于数字和强调）
      bg: '#F6F8F5',     // 页面底色
      ink: '#12211C'     // 正文字色
    },

    // 预留区块开关：false = 隐藏（内容不会被删掉，随时可以打开）
    sections: {
      insights: false,     // 「文章 / 观点 / 分享」区块
      otherProjects: true, // 「其他项目」简表
      cvDownload: false,   // 顶部「下载简历」按钮（把 PDF 放进 assets/files/ 后改为 true）
      wechat: false,       // 是否公开微信号
      phone: false         // 是否公开手机号（默认关闭，避免被爬虫抓取）
    }
  },

  /* 界面固定文案 */
  ui: {
    nav: {
      about: { zh: '关于我', en: 'About' },
      expertise: { zh: '专业方向', en: 'Expertise' },
      services: { zh: '咨询服务', en: 'Consulting' },
      projects: { zh: '项目经验', en: 'Projects' },
      experience: { zh: '职业经历', en: 'Experience' },
      skills: { zh: '技能认证', en: 'Skills' },
      insights: { zh: '观点分享', en: 'Insights' },
      contact: { zh: '联系我', en: 'Contact' }
    },
    langLabel: { zh: 'EN', en: '中文' }, // 语言切换按钮上显示的字
    cvButton: { zh: '下载简历', en: 'Download CV' },
    heroPrimary: { zh: '查看咨询服务', en: 'Consulting Services' },
    heroSecondary: { zh: '查看项目经验', en: 'View Projects' },
    linkedinLabel: { zh: '领英主页', en: 'LinkedIn' },
    consultingCta: { zh: '聊聊你的项目', en: 'Discuss your project' },
    projectsOtherTitle: { zh: '其他参与项目', en: 'Other Project Involvement' },
    footerNote: {
      zh: '本站内容基于个人简历整理，欢迎交流绿色建筑与建筑性能设计。',
      en: 'Built from my professional portfolio. Always happy to talk about green buildings and building performance.'
    }
  },

  /* ------------------------------------------------------------------
     2. 首页主视觉
     ------------------------------------------------------------------ */
  profile: {
    name: { zh: '李圣宇', en: 'Shengyu Li' },
    title: { zh: '绿色建筑工程师', en: 'Green Building Engineer' },
    eyebrow: {
      zh: '绿色建筑认证 · 建筑性能模拟 · 气流组织分析',
      en: 'Green Building Certification · Building Performance Simulation · CFD'
    },
    tagline: {
      zh: '专注绿色建筑认证咨询与建筑物理性能分析，用模拟数据支撑设计决策，让低碳、舒适与可落地在同一栋建筑里共存。',
      en: 'I combine green building certification consultancy with building physics simulation, turning performance data into design decisions that make low-carbon, comfortable buildings actually buildable.'
    },
    location: { zh: '中国 · 上海', en: 'Shanghai, China' },
    avatar: 'assets/img/portrait.jpg', // TODO: 换成你的照片，文件名可改；没有照片会显示占位框
    badges: ['LEED', 'WELL', 'BREEAM AP', '中国绿建三星'],

    stats: [
      {
        value: { zh: '210万+', en: '2.1M+' },
        label: { zh: 'm² 参与项目的建筑面积', en: 'm² of project floor area' }
      },
      {
        value: { zh: '10+', en: '10+' },
        label: { zh: '高大空间气流与微气候模拟项目', en: 'CFD & microclimate simulation projects' }
      },
      {
        value: { zh: '3★', en: '3★' },
        label: { zh: '中国绿色建筑最高等级认证经验', en: 'China Green Building highest rating' }
      }
    ]
  },

  /* ------------------------------------------------------------------
     3. 关于我
     ------------------------------------------------------------------ */
  about: {
    title: { zh: '关于我', en: 'About Me' },
    lead: {
      zh: '建筑环境与能源应用工程出身，伦敦大学学院（UCL）健康、福利与可持续建筑硕士，现为华东建筑设计研究院绿色建筑工程师。',
      en: 'Trained in architectural environment engineering, with an MSc in Health, Wellbeing and Sustainable Buildings from UCL, now working as a green building engineer at ECADI.'
    },
    paragraphs: [
      {
        zh: '过去几年我主导并参与了交通、办公、商业、医疗等多种业态大型项目的绿色建筑专项设计与咨询，从方案阶段到施工图阶段做全周期技术把控，负责绿建专篇、节能报告、绿建模拟报告等核心文件编制，参与项目建筑面积累计超过 210 万 m²。',
        en: 'I have led and contributed to full-cycle green building design and consultancy for large transport, office, commercial and healthcare projects, from concept to construction drawings — preparing green building chapters, energy-saving reports and simulation reports for a cumulative floor area of over 2.1 million m².'
      },
      {
        zh: '相比只做合规判断，我更习惯用数据说话：通过能耗、采光、太阳辐射与 CFD 模拟找出设计的真实短板，再把优化方案翻译成其他专业可以直接执行的做法。',
        en: 'Rather than judging compliance alone, I work with data: energy, daylight, solar radiation and CFD simulations reveal where a design really falls short, and the optimisation is then translated into instructions other disciplines can act on.'
      }
    ],
    highlights: [
      {
        title: { zh: '全周期认证把控', en: 'End-to-end certification' },
        text: {
          zh: '熟悉中国绿建星级与 LEED / WELL / BREEAM 体系，统筹认证策划、技术协调与申报文件。',
          en: 'Fluent in China Green Building ratings and LEED / WELL / BREEAM, coordinating strategy, technical alignment and submissions.'
        }
      },
      {
        title: { zh: '数据驱动的优化', en: 'Data-driven optimisation' },
        text: {
          zh: '用模拟结果定位问题，给出可落地、可量化的被动式与主动式组合策略。',
          en: 'Simulation pinpoints the problem; the output is a buildable, quantifiable mix of passive and active strategies.'
        }
      },
      {
        title: { zh: '以人为本的舒适度', en: 'Human comfort first' },
        text: {
          zh: '关注热舒适、室内空气质量与眩光控制，把使用者的真实感受写进技术指标。',
          en: 'Thermal comfort, indoor air quality and glare control — occupant experience written into the technical targets.'
        }
      }
    ]
  },

  /* ------------------------------------------------------------------
     4. 专业方向（可自由增删卡片）
     ------------------------------------------------------------------ */
  expertise: {
    title: { zh: '专业方向', en: 'What I Do' },
    lead: {
      zh: '从认证目标到技术措施，再到模拟验证，我可以独立完成一条完整链路。',
      en: 'From certification target to technical measures to simulation verification — I can own the whole chain.'
    },
    items: [
      {
        icon: 'leaf',
        title: { zh: '绿色建筑认证咨询', en: 'Green Building Certification' },
        text: {
          zh: '中国绿色建筑评价标准、LEED、WELL、BREEAM 全周期咨询：认证策划、技术要点把控、绿建专篇与申报文件编制、与各专业的技术协调。',
          en: 'Full-cycle consultancy for China Green Building Standards, LEED, WELL and BREEAM: strategy, technical compliance, dedicated chapters and submission documents, plus coordination across disciplines.'
        },
        tags: ['GB/T 50378', 'LEED', 'WELL', 'BREEAM']
      },
      {
        icon: 'chart',
        title: { zh: '建筑性能模拟', en: 'Building Performance Simulation' },
        text: {
          zh: '建筑能耗、采光与眩光、太阳辐射、碳排放模拟，量化建筑被动与主动性能，并评估屋面光伏潜力与可再生能源利用率。',
          en: 'Energy, daylight and glare, solar radiation and carbon simulations to quantify passive and active performance, including rooftop PV potential and renewable energy share.'
        },
        tags: ['EnergyPlus', 'IESVE', 'DesignBuilder', 'eQuest', 'Ladybug & Honeybee']
      },
      {
        icon: 'air',
        title: { zh: '气流组织与微气候分析', en: 'CFD & Microclimate Analysis' },
        text: {
          zh: '高大空间中庭与大堂的气流组织、自然通风策略优化、屋面油烟排放与室外微气候分析，定位不舒适区与污染扩散风险。',
          en: 'Airflow in atria and lobbies, natural ventilation strategies, kitchen exhaust dispersion and outdoor microclimate analysis to locate discomfort and pollution risks.'
        },
        tags: ['ANSYS Fluent', '自然通风', '热舒适', '污染扩散']
      },
      {
        icon: 'shield',
        title: { zh: '被动式与超低能耗设计', en: 'Passive & Ultra-Low Energy Design' },
        text: {
          zh: '围护结构节能方案、遮阳与天窗系统优化、通风与采光精细化设计，支撑超低能耗与节能率目标的落地。',
          en: 'Envelope strategies, shading and skylight optimisation, refined ventilation and daylighting design to deliver ultra-low energy and energy-saving targets.'
        },
        tags: ['围护结构', '遮阳设计', '自然通风', '超低能耗']
      }
    ]
  },

  /* ------------------------------------------------------------------
     5. 咨询服务（对外接咨询用，可直接增删服务项）
     ------------------------------------------------------------------ */
  services: {
    title: { zh: '咨询服务', en: 'Consulting Services' },
    lead: {
      zh: '面向开发商、设计院与业主团队，提供绿色建筑认证与建筑性能专项咨询。既可以整段承接专项工作，也可以作为外部技术支持嵌入你的设计团队。',
      en: 'I work with developers, design institutes and building owners on green building certification and building performance. I can own a specialist package end to end, or slot into your design team as an external technical resource.'
    },
    items: [
      {
        icon: 'shield',
        title: { zh: '绿色建筑认证全周期咨询', en: 'End-to-end Certification Consultancy' },
        text: {
          zh: '认证策略与目标策划、技术要点落地、绿建专篇与申报文件编制、评审与答疑支持，覆盖中国绿色建筑星级、LEED、WELL 与 BREEAM。',
          en: 'Certification strategy and target setting, technical measures that survive design development, green building chapters and submission documents, plus review and query response — across China Green Building ratings, LEED, WELL and BREEAM.'
        },
        tags: ['中国绿建星级', 'LEED', 'WELL', 'BREEAM']
      },
      {
        icon: 'chart',
        title: { zh: '建筑性能模拟与优化', en: 'Performance Simulation & Optimisation' },
        text: {
          zh: '能耗、采光与眩光、太阳辐射、碳排放模拟，方案比选与针对性优化建议，并评估屋面光伏潜力与可再生能源利用率。',
          en: 'Energy, daylight and glare, solar radiation and carbon studies; option comparison with targeted optimisation measures; rooftop PV potential and renewable energy share assessment.'
        },
        tags: ['EnergyPlus', 'IESVE', 'Ladybug & Honeybee', '光伏潜力']
      },
      {
        icon: 'air',
        title: { zh: 'CFD 气流组织与微气候分析', en: 'CFD Airflow & Microclimate Analysis' },
        text: {
          zh: '中庭、大堂等高大空间气流组织模拟，自然通风策略优化，屋面油烟排放扩散分析，室外风环境与行人舒适度评估。',
          en: 'Airflow modelling for atria and lobbies, natural ventilation strategies, kitchen exhaust dispersion, outdoor wind environment and pedestrian comfort assessment.'
        },
        tags: ['ANSYS Fluent', '自然通风', '热舒适', '污染扩散']
      },
      {
        icon: 'leaf',
        title: { zh: '被动式与超低能耗专项', en: 'Passive & Ultra-Low Energy Packages' },
        text: {
          zh: '围护结构节能方案、遮阳与天窗系统优化、自然通风与采光精细化设计，把节能率与舒适度目标落到构造做法上。',
          en: 'Envelope energy strategies, shading and skylight optimisation, refined ventilation and daylighting — translating energy and comfort targets into buildable details.'
        },
        tags: ['围护结构', '遮阳设计', '超低能耗', '自然通风']
      },
      {
        icon: 'doc',
        title: { zh: '技术文件与课题支持', en: 'Technical Documents & Research Support' },
        text: {
          zh: '绿建专篇、节能报告、专项模拟报告编制；地方标准与技术导则类课题的框架搭建、章节撰写与指标制定。',
          en: 'Green building chapters, energy reports and specialist simulation reports; framework, chapter writing and target setting for local standards and technical guidelines.'
        },
        tags: ['绿建专篇', '节能报告', '技术导则']
      }
    ],
    engagementTitle: { zh: '合作方式', en: 'How We Can Work Together' },
    engagement: [
      { zh: '项目制专项咨询：按项目节点交付认证策划、模拟分析与核心报告', en: 'Project-based package: certification strategy, simulation studies and core reports delivered to your design milestones' },
      { zh: '阶段性技术支持：在方案、初设或施工图某一阶段补齐专项能力', en: 'Stage-based support: filling the specialist gap at concept, preliminary or construction-drawing stage' },
      { zh: '认证可行性评估：设计前期快速自查，明确目标星级、风险点与工作量', en: 'Feasibility review: a fast early-stage check on achievable rating, risk points and workload' }
    ],
    processTitle: { zh: '合作流程', en: 'Typical Workflow' },
    process: [
      { zh: '需求沟通：项目概况、所在气候区、目标认证等级与时间节点', en: 'Briefing: project profile, climate zone, target rating and programme' },
      { zh: '现状诊断：梳理设计条件与达标差距，确定技术路线与优化重点', en: 'Diagnosis: review the design conditions, identify compliance gaps, agree the technical route' },
      { zh: '模拟分析与优化：量化性能表现，给出可执行的设计优化措施', en: 'Analysis & optimisation: quantify performance and issue actionable design measures' },
      { zh: '成果交付：报告与专篇编制，配合内部评审及外部专家评审答疑', en: 'Delivery: reports and chapters, plus support through internal and external reviews' }
    ],
    cta: {
      zh: '欢迎把项目概况、所在地区与认证目标发到邮箱，我会尽快回复并给出初步建议。',
      en: 'Send me the project profile, location and certification target — I will come back with an initial view.'
    }
  },

  /* ------------------------------------------------------------------
     6. 项目经验（重点展示，建议保留 4–6 个）
        · featured: true 的项目会显示为完整卡片（含图片位置和成果数据）
        · 想减少首页长度时，把 featured 改成 false 即可
     ------------------------------------------------------------------ */
  projects: {
    title: { zh: '代表项目', en: 'Selected Projects' },
    lead: {
      zh: '交通枢纽、商业办公、公共建筑 —— 每个项目都在认证合规之外，给出可量化的节能与舒适度成果。',
      en: 'Transport hubs, commercial and public buildings — each project delivering measurable energy and comfort outcomes beyond compliance.'
    },
    items: [
      {
        featured: true,
        name: {
          zh: '昆明长水国际机场 T2 航站楼及综合交通中心',
          en: "Kunming Changshui International Airport Terminal 2"
        },
        location: { zh: '云南 · 昆明', en: 'Kunming, Yunnan' },
        role: { zh: '绿色建筑三星级 / 建筑性能分析优化 / 课题研究', en: 'Sustainability Consultant' },
        image: 'assets/img/project-kunming-airport.jpg', // TODO: 换成项目照片（航站楼外观 / 模拟云图）
        metrics: [
          { value: { zh: '81万+ m²', en: '810,000+ m²' }, label: { zh: '认证面积', en: 'Certified area' } },
          { value: { zh: '90%+', en: '90%+' }, label: { zh: '主要空间自然通风达标', en: 'Key spaces ventilated naturally' } },
          { value: { zh: '29%', en: '29%' }, label: { zh: '空调季节能率', en: 'Cooling-season energy saving' } }
        ],
        bullets: [
          {
            zh: '参与云南省首个绿色建筑三星级预评价项目，覆盖新建 T2 航站楼及综合交通中心，并为航站区配套酒店、办公等建筑提供绿色建筑咨询与节能设计。',
            en: 'Contributed to the first 3-Star Green Building pre-assessment in Yunnan, covering the new Terminal 2 and transport centre, plus green building consultancy for hotels and offices on the campus.'
          },
          {
            zh: '运用 Ladybug & Honeybee 进行采光与太阳辐射模拟，优化幕墙、天窗系统与遮阳设计，在充分利用自然采光的同时避免眩光与热辐射，并据此完善航站区光伏策略。',
            en: 'Used Ladybug & Honeybee for daylight and solar radiation studies to optimise the curtain wall, skylights and shading — maximising daylight while controlling glare and heat gain — and to refine the campus PV strategy.'
          },
          {
            zh: '通过 CFD 气流模拟优化自然通风方案，优化开窗位置与面积形成水平、竖向贯通的通风效果，使 90% 以上主要空间在使用时段依靠自然通风满足热舒适需求，空调季节能率超过 29%。',
            en: 'Refined the natural ventilation strategy with CFD, adjusting window placement and area to create both horizontal and vertical airflow paths — 90%+ of key spaces meet comfort requirements by natural ventilation, cutting cooling-season energy use by over 29%.'
          },
          {
            zh: '作为主要编写人员参与云南省科技委课题《航站楼人因环境设计与运行技术导则》，负责「建筑采光与遮阳」「自然通风」两大板块的技术框架与指标制定。',
            en: 'Principal author of a provincial research project — Technical Guidelines for Terminal Building Ergonomic Design and Operation — owning the daylight/shading and natural ventilation sections and their performance targets.'
          }
        ],
        tags: ['绿色建筑三星级', '采光与遮阳', '自然通风', '光伏策略', '技术导则编制'],
        link: '' // TODO: 如果有项目介绍链接或获奖新闻，填在这里
      },
      {
        featured: true,
        name: {
          zh: '南外滩金融中心',
          en: 'South Bund Financial Center'
        },
        location: { zh: '上海', en: 'Shanghai' },
        role: { zh: '绿色建筑三星级 / 被动式设计优化', en: 'Sustainability Consultant' },
        image: 'assets/img/project-southbund.jpg',
        metrics: [
          { value: { zh: '409,800 m²', en: '409,800 m²' }, label: { zh: '项目规模', en: 'Project area' } },
          { value: { zh: '三星级', en: '3-Star' }, label: { zh: '绿色建筑认证', en: 'Green Building rating' } }
        ],
        bullets: [
          {
            zh: '参与绿色建筑三星级咨询与相关报告编制，并提供满足超低能耗设计要求的围护结构方案。',
            en: 'Contributed to the 3-Star certification and reporting, and prepared envelope solutions meeting ultra-low energy design requirements.'
          },
          {
            zh: '结合场地风环境与日照条件优化被动式设计，通过高效围护结构与精细化构件实现建筑节能、有效采光与自然通风。',
            en: 'Optimised passive design against site wind and solar conditions, using high-efficiency envelopes and refined components for energy saving, daylighting and natural ventilation.'
          }
        ],
        tags: ['绿色建筑三星级', '超低能耗', '围护结构', '被动式设计'],
        link: ''
      },
      {
        featured: true,
        name: { zh: '张家港山姆会员商店', en: "Sam's Club Zhangjiagang Store" },
        location: { zh: '江苏 · 张家港', en: 'Zhangjiagang, Jiangsu' },
        role: { zh: '绿色建筑三星级 / 被动式节能设计', en: 'Sustainability Consultant' },
        image: 'assets/img/project-sams-club.jpg',
        metrics: [
          { value: { zh: '97.6%', en: '97.6%' }, label: { zh: '过渡季自然通风达标面积', en: 'Natural ventilation compliance' } },
          { value: { zh: '30%', en: '30%' }, label: { zh: '夏季遮阳减少辐射得热', en: 'Reduced solar heat gain' } },
          { value: { zh: '15%+', en: '15%+' }, label: { zh: '降低空调负荷', en: 'Lower cooling load' } },
          { value: { zh: '26.44万 kWh', en: '264,400 kWh' }, label: { zh: '年光伏发电量', en: 'Annual PV generation' } }
        ],
        bullets: [
          {
            zh: '主导被动式节能设计：过渡季自然通风达标面积达 97.6%，夏季遮阳减少辐射得热 30%，助力降低空调负荷 15% 以上。',
            en: 'Led passive design: 97.6% of the area meets natural ventilation targets in transition seasons, summer shading cuts radiant heat gain by 30%, and cooling loads drop by over 15%.'
          },
          {
            zh: '整合主动式技术体系，确定光伏发电与高效机电设备方案，实现可再生能源利用率 5.66%、综合节能率 20.23%、单位面积能耗 ≤160 kWh/m²。',
            en: 'Integrated active systems and a 768.6 kWp rooftop PV installation with high-efficiency MEP, achieving a 5.66% renewable energy share, 20.23% overall energy saving and ≤160 kWh/m² energy use intensity.'
          }
        ],
        tags: ['绿色建筑三星级', '光伏发电', '自然通风', '遮阳', '可再生能源'],
        link: ''
      },
      {
        featured: true,
        name: {
          zh: '淮安涟水国际机场 T2 / 大理机场 T3 航站楼',
          en: "Huai'an Lianshui Airport T2 / Dali Airport T3"
        },
        location: { zh: '江苏 淮安 · 云南 大理', en: "Huai'an · Dali" },
        role: { zh: '绿色建筑二星级 / 建筑性能分析优化', en: 'Sustainability Consultant' },
        image: 'assets/img/project-airport-t2t3.jpg',
        metrics: [
          { value: { zh: '二星级', en: '2-Star' }, label: { zh: '绿色建筑认证', en: 'Green Building rating' } },
          { value: { zh: '2', en: '2' }, label: { zh: '不同气候区航站楼', en: 'Climate zones covered' } }
        ],
        bullets: [
          {
            zh: '针对不同气候区与航站楼设计特点，提供适宜的围护结构节能方案，满足相应节能指标要求。',
            en: 'Tailored envelope energy strategies to different climate zones and terminal typologies, meeting the relevant energy targets.'
          },
          {
            zh: '运用 Ladybug & Honeybee 与 CFD 模拟优化幕墙、天窗与自然通风策略，避免不舒适眩光、减少过渡季空调使用。',
            en: 'Used Ladybug & Honeybee and CFD to optimise curtain wall, skylight and natural ventilation strategies, avoiding uncomfortable glare and reducing air-conditioning use in transition seasons.'
          }
        ],
        tags: ['绿色建筑二星级', '采光与眩光', '自然通风', '多气候区'],
        link: ''
      },
      {
        featured: true,
        name: {
          zh: '商业办公综合体 CFD 气流组织与微气候项目群',
          en: 'Commercial & Office CFD Portfolio'
        },
        location: { zh: '上海 / 天津 / 广东东莞', en: 'Shanghai / Tianjin / Dongguan' },
        role: { zh: 'CFD 气流组织模拟', en: 'CFD Simulation Consultant' },
        image: 'assets/img/project-cfd.jpg',
        metrics: [
          { value: { zh: '10+', en: '10+' }, label: { zh: '项目实施数量', en: 'Projects delivered' } },
          { value: { zh: '-3°C', en: '-3°C' }, label: { zh: '大堂峰值温度降低', en: 'Peak temperature reduction' } }
        ],
        bullets: [
          {
            zh: '运用 CFD 对中庭、大堂等高大空间进行气流组织模拟，量化人行高度的温度场与速度场，定位空调失效区域。',
            en: 'Modelled airflow in atria and lobbies, quantifying temperature and velocity fields at occupant height and locating areas where air conditioning fails.'
          },
          {
            zh: '提出并落实中庭增补排风、大堂风口移位等优化措施，解决中庭局部高温问题，显著提升大堂温度均匀性。',
            en: 'Proposed and implemented measures such as extra atrium exhaust and relocated lobby diffusers, resolving local overheating and greatly improving temperature uniformity.'
          },
          {
            zh: '通过屋面油烟排放 CFD 分析定位污染扩散区域，制定针对性方案，避免油烟异味影响室外人行空间与周边建筑。',
            en: 'Identified exhaust dispersion risks through CFD studies and defined mitigation measures to keep kitchen odours away from pedestrian areas and neighbouring buildings.'
          }
        ],
        tags: ['ANSYS Fluent', '高大空间', '油烟排放', '微气候'],
        link: ''
      }
    ],

    /* featured: false 的项目会显示为「其他参与项目」的简表 */
    otherItems: [
      {
        name: { zh: '某半导体企业科研配套用房', en: 'R&D Support Building for a Semiconductor Company' },
        location: { zh: '上海', en: 'Shanghai' },
        role: { zh: '绿色建筑三星级咨询与报告编制', en: '3-Star certification consultancy & reporting' }
      },
      {
        name: { zh: '中大医院龙王山院区', en: 'Zhongda Hospital Longwangshan Campus' },
        location: { zh: '江苏 南京', en: 'Nanjing, Jiangsu' },
        role: { zh: '绿色建筑二星级咨询与报告编制', en: '2-Star certification consultancy & reporting' }
      },
      {
        name: { zh: '北外滩 91 街坊 480m 超高层 / 嘉里金陵路', en: 'North Bund Plot 91 (480m super high-rise) / Kerry Jinling Road' },
        location: { zh: '上海', en: 'Shanghai' },
        role: { zh: '建筑节能设计与节能报告', en: 'Energy efficiency design & energy reports' }
      },
      {
        name: { zh: '前滩中心 / 前滩太古里二期 / 新世界 K11 二期', en: 'Qiantan Place / Taikoo Li Qiantan Phase 2 / K11 Phase 2' },
        location: { zh: '上海', en: 'Shanghai' },
        role: { zh: 'CFD 气流组织与微气候分析', en: 'CFD airflow & microclimate analysis' }
      },
      {
        name: { zh: '三林滨江南片区 11、12 单元 / 华润置地中心东莞银行总部大厦 / 东莞万象城', en: 'Sanlin Riverside Units 11&12 / CR Land Dongguan Bank HQ / MixC Dongguan' },
        location: { zh: '上海 / 广东 东莞', en: 'Shanghai / Dongguan' },
        role: { zh: 'CFD 气流组织与油烟排放分析', en: 'CFD airflow & exhaust dispersion analysis' }
      }
    ]
  },

  /* ------------------------------------------------------------------
     7. 职业经历
     ------------------------------------------------------------------ */
  experience: {
    title: { zh: '职业经历', en: 'Experience' },
    items: [
      {
        company: { zh: '华东建筑设计研究院有限公司（ECADI）', en: 'East China Architectural Design & Research Institute (ECADI)' },
        role: { zh: '绿色建筑工程师', en: 'Green Building Engineer' },
        period: { zh: '2023.12 – 2026.07', en: 'Dec 2023 – Jul 2026' },
        location: { zh: '上海', en: 'Shanghai, China' },
        bullets: [
          {
            zh: '绿色建筑认证咨询：主导或参与交通、办公、商业、医疗等多业态项目的绿色建筑与节能专项设计，精通中国绿色建筑标准及 LEED、WELL、BREEAM 体系，负责从方案到施工图的全周期认证策划、技术把控与核心报告编制。',
            en: 'Certification consultancy: led or contributed to green building and energy efficiency design across transport, office, commercial and healthcare projects; fluent in China Green Building Standards plus LEED, WELL and BREEAM; owned full-cycle strategy, technical compliance and core reporting from concept to tender drawings.'
          },
          {
            zh: '建筑性能模拟：运用能耗模拟、采光与辐射分析工具，分析建筑采光、辐射热、能耗及室内热舒适表现，提供针对性优化方案，并评估屋面光伏潜力。',
            en: 'Performance simulation: ran energy, daylight and radiation studies to assess daylight, heat gain, energy use and thermal comfort, delivering targeted optimisation measures and assessing rooftop PV potential.'
          },
          {
            zh: '气流组织分析：完成十余个高大空间气流分析与室外微气候分析，优化暖通空调与自然通风策略，在保障热舒适的同时降低空调能耗。',
            en: 'Airflow analysis: delivered 10+ high-volume space and outdoor microclimate studies, optimising HVAC and natural ventilation strategies for comfort with lower cooling energy.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------
     8. 教育背景
     ------------------------------------------------------------------ */
  education: {
    title: { zh: '教育背景', en: 'Education' },
    items: [
      {
        school: { zh: '伦敦大学学院（UCL）', en: 'University College London' },
        degree: { zh: '健康、福利与可持续建筑 · 理学硕士', en: 'MSc Health, Wellbeing and Sustainable Buildings' },
        period: { zh: '2022.09 – 2023.12', en: 'Sep 2022 – Dec 2023' },
        location: { zh: '英国 · 伦敦', en: 'London, United Kingdom' },
        courses: {
          zh: '建筑环境中的健康与舒适 · 基于健康与福利的建筑设计 · 环境分析方法 · 建筑室内空气质量',
          en: 'Health, Comfort and Wellbeing in the Built Environment · Wellbeing in Buildings · Environmental Analysis Methods · Indoor Air Quality in Buildings'
        }
      },
      {
        school: { zh: '宁波诺丁汉大学', en: 'University of Nottingham Ningbo China' },
        degree: { zh: '建筑环境与能源应用工程 · 工学学士', en: 'BEng Architectural Environment Engineering' },
        period: { zh: '2018.09 – 2022.07', en: 'Sep 2018 – Jul 2022' },
        location: { zh: '中国 · 宁波', en: 'Ningbo, China' },
        courses: {
          zh: '建筑工程设计 · 建筑能耗性能模拟 · 建筑环境控制系统 · 传热与流体 · 声学与光学',
          en: 'Architectural Engineering Design · Environmental Performance Modelling · Control Systems for the Built Environment · Thermofluids · Acoustics and Lighting'
        }
      }
    ]
  },

  /* ------------------------------------------------------------------
     9. 技能与认证
     ------------------------------------------------------------------ */
  skills: {
    title: { zh: '技能与认证', en: 'Skills & Credentials' },
    groups: [
      {
        title: { zh: '模拟与分析工具', en: 'Simulation & Analysis' },
        items: ['EnergyPlus', 'IESVE', 'DesignBuilder', 'eQuest', 'Ladybug & Honeybee', 'ANSYS Fluent', '绿建斯维尔 GBSware', 'PKPM']
      },
      {
        title: { zh: '认证体系', en: 'Certification Systems' },
        items: ['中国绿色建筑评价标准', 'LEED', 'WELL', 'BREEAM', '超低能耗建筑', '建筑节能设计']
      },
      {
        title: { zh: '专业认证', en: 'Professional Accreditation' },
        items: ['BREEAM Accredited Professional (BREEAM AP)']
      },
      {
        title: { zh: '语言能力', en: 'Languages' },
        items: [{ zh: '中文（母语）', en: 'Chinese (native)' }, { zh: '英语（流利，IELTS 6.5）', en: 'English (fluent, IELTS 6.5)' }]
      }
    ]
  },

  /* ------------------------------------------------------------------
     10. 预留区块：文章 / 观点 / 分享
        把 settings.sections.insights 改成 true 即可显示
     ------------------------------------------------------------------ */
  insights: {
    title: { zh: '观点分享', en: 'Insights' },
    lead: {
      zh: '这里可以放你的技术文章、项目复盘、演讲或课程内容。',
      en: 'A space for technical notes, project retrospectives, talks and teaching material.'
    },
    items: [
      {
        title: { zh: '待补充：文章标题', en: 'Add your title here' },
        date: { zh: '2026', en: '2026' },
        summary: {
          zh: 'TODO：一两句话概括这篇内容的看点，例如「航站楼自然通风策略如何在 90% 空间达标的同时降低 29% 空调能耗」。',
          en: 'TODO: one or two sentences on the key takeaway.'
        },
        link: '' // TODO: 文章链接
      }
    ]
  },

  /* ------------------------------------------------------------------
     11. 联系方式
     ------------------------------------------------------------------ */
  contact: {
    title: { zh: '联系我', en: 'Get in Touch' },
    lead: {
      zh: '欢迎交流绿色建筑认证、建筑性能模拟与气流组织分析相关的工作与合作机会。',
      en: 'Happy to talk about green building certification, performance simulation and airflow analysis — or just exchange notes.'
    },
    email: 'shengyuli61@gmail.com',
    linkedin: { label: 'Shengyu Li', url: 'https://www.linkedin.com/in/shengyu-li-b8bb32184' },
    phone: '+86 150 2193 9196',                 // 需要在网站上公开时，把 settings.sections.phone 改成 true
    wechat: '',                                 // TODO: 需要公开微信时填写微信号，并把 settings.sections.wechat 改成 true
    cvFile: 'assets/files/CV_Shengyu-Li.pdf'    // TODO: 把简历 PDF 放进 assets/files/ 后启用 cvDownload
  }
};
