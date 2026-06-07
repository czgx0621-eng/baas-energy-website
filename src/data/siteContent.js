export const brand = {
  name: 'BAAS ENERGY',
  line: {
    en: 'Building the Energy OS for AI Infrastructure.',
    zh: '为 AI 算力基础设施构建能源操作系统。',
  },
}

export const navItems = [
  { path: '/platform', label: { en: 'Platform', zh: '平台' } },
  { path: '/solutions', label: { en: 'Solutions', zh: '解决方案' } },
  { path: '/products', label: { en: 'Products', zh: '产品' } },
  { path: '/partners', label: { en: 'Partners', zh: '合作伙伴' } },
  { path: '/about', label: { en: 'About', zh: '关于我们' } },
]

export const ui = {
  contact: { en: 'Assess Your AI Energy Site', zh: '评估您的 AI 能源站点' },
  explore: { en: 'Explore', zh: '了解更多' },
  viewProduct: { en: 'View product', zh: '查看产品' },
  viewSolution: { en: 'View solution', zh: '查看方案' },
  capabilities: { en: 'Core capabilities', zh: '核心能力' },
  value: { en: 'Customer value', zh: '客户价值' },
  system: { en: 'Connected system', zh: '系统连接' },
  constraints: { en: 'The constraints', zh: '客户痛点' },
  response: { en: 'The BAAS response', zh: 'BAAS 方案' },
  outcome: { en: 'Expected outcome', zh: '预期结果' },
  process: { en: 'Deployment path', zh: '部署路径' },
}

export const home = {
  hero: {
    title: { en: 'Energy OS for AI Infrastructure', zh: 'AI 算力基础设施的能源操作系统' },
    body: {
      en: 'BAAS ENERGY combines intelligent power gateways, modular energy pods, and compute-energy orchestration software to help distributed AI nodes connect faster, operate cheaper, and become grid-flexible assets.',
      zh: 'BAAS ENERGY 提供智能配电网关、模块化能源舱和算力能源调度平台，让分布式 AI 算力节点更快接电、更低成本运行，并成为可调度的电网资产。',
    },
    tags: [
      { en: 'Faster Power Access', zh: '更快接电' },
      { en: 'Lower Energy Cost', zh: '更低运行成本' },
      { en: 'Grid-Flexible AI Nodes', zh: '可调度算力资产' },
    ],
  },
  challenge: {
    title: {
      en: 'AI infrastructure is becoming an energy problem.',
      zh: 'AI 基础设施的核心瓶颈，正在从算力转向能源。',
    },
    body: {
      en: 'AI workloads are reshaping how power is consumed inside data centers, enterprise AI rooms, edge inference sites, and campus compute hubs. The challenge is how quickly a site can access power, how safely it can support high-density loads, and how intelligently energy assets can respond to cost, capacity, reliability, and grid conditions.',
      zh: 'AI 工作负载正在改变数据中心、企业 AI 机房、边缘推理节点和园区智算中心的用能方式。客户面临的问题不再只是能部署多少 GPU，而是能否更快获得电力容量，能否安全支撑高密度负载，能否在电价、容量、可靠性和电网状态之间实现智能调度。',
    },
  },
  platform: {
    title: {
      en: 'A three-layer Energy OS for distributed AI nodes.',
      zh: '面向分布式 AI 节点的三层能源操作系统。',
    },
    body: {
      en: 'BAAS coordinates the gateway, modular energy assets, and PowerFlex OS into one operating layer for AI compute sites.',
      zh: 'BAAS 将智能网关、模块化能源资产和 PowerFlex OS 协同为面向 AI 算力站点的统一能源操作层。',
    },
  },
  operating: {
    title: {
      en: 'Productized deployment. Software-driven operations. Partner-ready integration.',
      zh: '产品化部署，软件化运营，伙伴化集成。',
    },
    body: {
      en: 'BAAS provides the gateway, modular energy assets, software platform, and integration standards needed to turn AI compute sites into controllable and optimizable energy systems.',
      zh: 'BAAS 提供智能网关、模块化能源资产、软件平台和集成标准，将 AI 算力站点转化为可控制、可优化、可持续运营的能源系统。',
    },
  },
}

export const painPoints = [
  {
    number: '01',
    title: { en: 'Power Access Bottleneck', zh: '接电与扩容慢' },
    body: {
      en: 'Grid upgrades and facility power expansion often take longer than AI deployment cycles. Distributed AI nodes need a faster path to usable power.',
      zh: '电网扩容和现场供配电改造周期往往慢于 AI 部署节奏。分布式 AI 节点需要更快获得可用电力。',
    },
  },
  {
    number: '02',
    title: { en: 'High and Unpredictable Energy Cost', zh: '运行成本高且不可控' },
    body: {
      en: 'High-density GPU loads can increase peak demand, power quality risks, and operating cost. Energy needs to be measured, controlled, and optimized at the site level.',
      zh: '高密度 GPU 负载会推高最大需量、电能质量风险和运维成本。能源系统需要被实时监测、控制和优化。',
    },
  },
  {
    number: '03',
    title: { en: 'Disconnected Systems', zh: '系统割裂，难以调度' },
    body: {
      en: 'Power distribution, UPS, batteries, cooling, DCIM, and compute scheduling often operate separately. AI infrastructure needs a unified energy control layer.',
      zh: '配电、UPS、储能、冷却、DCIM 和算力调度系统往往彼此分离。AI 基础设施需要统一的能源控制层。',
    },
  },
]

export const layers = [
  {
    number: '01',
    title: { en: 'AI Workloads', zh: 'AI 工作负载' },
    body: { en: 'GPU clusters, inference nodes, campus compute hubs', zh: 'GPU 集群、推理节点、园区智算中心' },
  },
  {
    number: '02',
    title: { en: 'BAAS PowerFlex OS', zh: 'BAAS PowerFlex OS' },
    body: { en: 'Optimization, reporting, orchestration, fleet control', zh: '优化、报表、调度、多站点控制' },
  },
  {
    number: '03',
    title: { en: 'BAAS Energy Gateway', zh: 'BAAS Energy Gateway' },
    body: { en: 'Power data, equipment interfaces, edge collection', zh: '能源数据、设备接口、边缘采集' },
  },
  {
    number: '04',
    title: { en: 'BAAS AI Energy Pod', zh: 'BAAS AI Energy Pod' },
    body: { en: 'Storage, backup, peak shaving, energy flexibility', zh: '储能、备电、削峰、能源灵活性' },
  },
  {
    number: '05',
    title: { en: 'Grid & Energy Markets', zh: '电网与能源市场' },
    body: { en: 'Pricing, carbon, demand response, VPP readiness', zh: '电价、碳数据、需求响应、VPP 准备' },
  },
]

export const architecture = [
  {
    number: '01',
    name: 'BAAS Energy Gateway',
    label: { en: 'The site-level energy data and control entry point.', zh: '站点级能源数据与控制入口。' },
    image: '/images/photos/gateway-cabinet.png',
    bullets: {
      en: ['Circuit-level monitoring', 'Power quality visibility', 'UPS/BESS integration'],
      zh: ['回路级用电监测', '电能质量可视化', 'UPS / 储能接入'],
    },
  },
  {
    number: '02',
    name: 'BAAS AI Energy Pod',
    label: { en: 'A modular energy pod for capacity, backup, peak shaving, and flexibility.', zh: '用于容量、备电、削峰和能源灵活性的模块化能源舱。' },
    image: '/images/photos/energy-pod.png',
    bullets: {
      en: ['Battery energy storage', 'Power conversion', 'Fast modular deployment'],
      zh: ['储能系统', '电力转换', '快速模块化部署'],
    },
  },
  {
    number: '03',
    name: 'BAAS PowerFlex OS',
    label: { en: 'The orchestration layer between compute, power, storage, and the grid.', zh: '连接算力、电力、储能与电网的调度平台。' },
    image: '/images/photos/operations-center.png',
    bullets: {
      en: ['Energy optimization', 'Storage dispatch', 'DR/VPP readiness'],
      zh: ['能源优化', '储能调度', '需求响应 / VPP 准备'],
    },
  },
]

export const products = [
  {
    slug: 'energy-gateway',
    name: 'BAAS Energy Gateway',
    image: '/images/photos/gateway-cabinet.png',
    eyebrow: { en: 'Observe & connect', zh: '观测与连接' },
    title: { en: 'The power intelligence layer for AI compute sites.', zh: 'AI 算力站点的能源智能入口。' },
    summary: {
      en: 'A site-level energy gateway that monitors and connects power distribution, circuit-level loads, power quality, UPS/BESS systems, and operational signals at AI compute sites.',
      zh: '面向 AI 算力站点的站点级能源网关，连接并监测配电系统、回路级负载、电能质量、UPS / 储能系统和运行状态。',
    },
    capabilities: {
      en: ['Circuit-level power monitoring', 'Power quality visibility', 'Peak demand insight', 'UPS, BESS, PCS, and meter integration', 'Local edge data collection', 'Cloud dashboard and reporting', 'Gateway-to-PowerFlex OS connectivity'],
      zh: ['回路级用电监测', '电能质量可视化', '最大需量识别', 'UPS、BESS、PCS 和计量设备接入', '本地边缘数据采集', '云端看板与报告', '接入 PowerFlex OS'],
    },
    system: {
      en: 'Creates the trusted site data foundation that connects physical power infrastructure to PowerFlex OS.',
      zh: '建立可信的站点数据基础，将实体电力基础设施连接至 PowerFlex OS。',
    },
    value: {
      en: 'Helps customers understand where energy constraints exist, how AI loads behave, and what actions can reduce cost, risk, and deployment delays.',
      zh: '帮助客户理解能源瓶颈在哪里、AI 负载如何变化，以及哪些措施可以降低成本、风险和部署延迟。',
    },
  },
  {
    slug: 'ai-energy-pod',
    name: 'BAAS AI Energy Pod',
    image: '/images/photos/energy-pod.png',
    eyebrow: { en: 'Deploy & support', zh: '部署与支撑' },
    title: { en: 'Modular energy capacity for distributed AI infrastructure.', zh: '面向分布式 AI 基础设施的模块化能源容量。' },
    summary: {
      en: 'A modular energy unit designed for AI compute sites that need additional capacity, backup support, peak demand control, or energy flexibility.',
      zh: '面向 AI 算力站点的模块化能源单元，用于解决容量补充、备电支持、削峰和能源灵活性需求。',
    },
    capabilities: {
      en: ['Battery energy storage', 'PCS and power conversion', 'UPS or backup support interface', 'Power distribution and protection', 'Local energy management', 'Gateway and PowerFlex OS integration', 'Optional renewable and generator interfaces'],
      zh: ['储能系统', 'PCS 与电力转换', 'UPS 或备电接口', '配电与保护', '本地能源管理', 'Gateway 与 PowerFlex OS 接入', '可选绿电或发电设备接口'],
    },
    system: {
      en: 'Adds a configurable physical asset layer between the site, its compute loads, and the grid.',
      zh: '在站点、算力负荷和电网之间增加可配置的实体能源资产层。',
    },
    value: {
      en: 'Reduces dependency on long utility upgrade cycles, improves backup readiness, manages peak demand, and creates an asset layer for future energy flexibility.',
      zh: '降低对长期电网扩容周期的依赖，提升备电能力，管理最大需量，并为未来能源灵活性形成实体资产基础。',
    },
  },
  {
    slug: 'powerflex-os',
    name: 'BAAS PowerFlex OS',
    image: '/images/photos/operations-center.png',
    eyebrow: { en: 'Orchestrate & optimize', zh: '调度与优化' },
    title: { en: 'Compute-energy orchestration for AI infrastructure.', zh: 'AI 基础设施的算力能源调度平台。' },
    summary: {
      en: 'The orchestration platform connecting AI workloads, power systems, energy storage, pricing signals, carbon data, and grid-flexibility programs.',
      zh: '连接 AI 工作负载、供配电系统、储能、电价信号、碳数据和电网灵活性机制的调度平台。',
    },
    capabilities: {
      en: ['Site Monitor', 'Energy Optimizer', 'Demand Management', 'Storage Dispatch', 'SLA-Aware Load Coordination', 'Carbon and Green Energy Reporting', 'DR/VPP Readiness', 'Fleet Control'],
      zh: ['站点监控', '能源优化', '需量管理', '储能调度', 'SLA 感知的负荷协同', '碳与绿电报告', '需求响应 / 虚拟电厂接入准备', '多站点调度'],
    },
    system: {
      en: 'Coordinates site-level signals and assets into one software-defined operating layer.',
      zh: '将站点级信号和资产协同为统一的软件定义运营层。',
    },
    value: {
      en: 'Turns site-level data into operating decisions and prepares AI infrastructure for multi-site energy optimization.',
      zh: '将站点数据转化为运营决策，并为多站点能源优化做好准备。',
    },
  },
]

export const solutions = [
  {
    slug: 'enterprise-ai-rooms',
    image: '/images/photos/enterprise-ai-room.png',
    title: { en: 'Enterprise AI Rooms', zh: '企业 AI 机房' },
    tagline: { en: 'Power intelligence before GPU expansion.', zh: '在 GPU 扩容之前，先建立能源智能。' },
    intro: {
      en: 'For companies deploying GPU servers inside existing offices, labs, factories, or enterprise data rooms.',
      zh: '面向在现有办公楼、实验室、厂区或企业机房内部署 GPU 服务器的客户。',
    },
    constraints: {
      en: ['Unknown available capacity', 'Circuit overload and peak-demand risk', 'Limited visibility before expansion'],
      zh: ['可用容量不清晰', '回路过载与峰值需量风险', '扩容前缺少能源可视性'],
    },
    response: {
      en: ['Assess site power capacity', 'Monitor circuit-level loads', 'Evaluate modular energy support'],
      zh: ['评估站点电力容量', '监测回路级负载', '评估模块化能源支持'],
    },
    outcome: {
      en: 'A clearer, safer path to enterprise GPU deployment.',
      zh: '为企业 GPU 部署建立更清晰、更安全的路径。',
    },
  },
  {
    slug: 'idc-gpu-retrofit',
    image: '/images/photos/idc-retrofit.png',
    title: { en: 'IDC GPU Retrofit', zh: '旧 IDC GPU 改造' },
    tagline: { en: 'Upgrade legacy power for high-density AI.', zh: '升级老旧电力系统，支撑高密度 AI。' },
    intro: {
      en: 'For existing data center sites upgrading from traditional server loads to high-density GPU workloads.',
      zh: '面向从传统服务器负载升级到高密度 GPU 负载的数据中心站点。',
    },
    constraints: {
      en: ['Higher rack density', 'Load fluctuation and power-quality risk', 'Backup constraints'],
      zh: ['机柜功率密度提高', '负载波动与电能质量风险', '备电能力约束'],
    },
    response: {
      en: ['Map legacy power infrastructure', 'Deploy visibility and control', 'Coordinate storage and backup assets'],
      zh: ['梳理既有供配电基础设施', '部署可视化与控制能力', '协同储能与备电资产'],
    },
    outcome: {
      en: 'A controlled transition from traditional data center loads to AI compute.',
      zh: '实现从传统数据中心负载到 AI 算力的可控升级。',
    },
  },
  {
    slug: 'campus-ai-compute',
    image: '/images/photos/campus-compute.png',
    title: { en: 'Campus AI Compute', zh: '园区智算节点' },
    tagline: { en: 'Coordinate compute, storage, and site energy.', zh: '协同算力、储能与园区能源。' },
    intro: {
      en: 'For industrial parks, university campuses, enterprise campuses, and regional compute hubs.',
      zh: '面向产业园区、大学园区、企业园区和区域智算中心。',
    },
    constraints: {
      en: ['Distributed compute loads', 'Grid-connection limits', 'Pricing and sustainability requirements'],
      zh: ['分布式算力负荷', '电网接入容量限制', '电价与可持续发展要求'],
    },
    response: {
      en: ['Connect distributed energy assets', 'Coordinate site-level operations', 'Prepare for grid-flexibility programs'],
      zh: ['连接分布式能源资产', '协同站点级运营', '为电网灵活性机制做好准备'],
    },
    outcome: {
      en: 'One coordinated energy layer across the campus compute environment.',
      zh: '为园区智算环境建立统一协同的能源操作层。',
    },
  },
  {
    slug: 'edge-ai-inference',
    image: '/images/photos/edge-inference.png',
    title: { en: 'Edge AI Inference', zh: '边缘 AI 推理节点' },
    tagline: { en: 'Standardized energy for resilient edge deployment.', zh: '以标准化能源支撑可靠的边缘部署。' },
    intro: {
      en: 'For smaller distributed AI nodes that need fast deployment, low latency, and resilient power.',
      zh: '面向需要快速部署、低延迟和稳定供电的小型分布式 AI 节点。',
    },
    constraints: {
      en: ['Remote and distributed locations', 'Limited on-site operations', 'Resilient-power requirements'],
      zh: ['远程与分布式站点', '有限的现场运维能力', '稳定供电要求'],
    },
    response: {
      en: ['Standardize energy modules', 'Enable remote monitoring', 'Operate energy through software'],
      zh: ['标准化能源模块', '启用远程监控', '通过软件运营能源'],
    },
    outcome: {
      en: 'Faster deployment and more reliable operation for edge AI nodes.',
      zh: '提升边缘 AI 节点的部署效率和运行可靠性。',
    },
  },
]

export const process = [
  {
    number: '01',
    title: { en: 'Assess the Site', zh: '站点评估' },
    body: { en: 'Evaluate power capacity, load profile, backup requirements, energy cost, and AI deployment plans.', zh: '评估现场电力容量、负载曲线、备电需求、用能成本和 AI 部署计划。' },
  },
  {
    number: '02',
    title: { en: 'Deploy the Gateway', zh: '部署 Gateway' },
    body: { en: 'Create visibility into circuit-level loads, power quality, operational status, and equipment interfaces.', zh: '通过智能配电网关获取回路级负载、电能质量、设备状态和关键接口数据。' },
  },
  {
    number: '03',
    title: { en: 'Configure the Energy Pod', zh: '配置 Energy Pod' },
    body: { en: 'Configure modular energy pods when capacity, backup, or peak demand becomes a constraint.', zh: '当现场受到容量、备电或最大需量限制时，根据站点数据配置模块化能源舱。' },
  },
  {
    number: '04',
    title: { en: 'Orchestrate with PowerFlex OS', zh: '通过 PowerFlex OS 持续调度' },
    body: { en: 'Continuously optimize energy storage, load behavior, site operations, and grid-flexibility readiness.', zh: '持续优化储能、负载、站点运行和电网灵活性接入能力。' },
  },
]

export const operatingModels = [
  {
    title: { en: 'Product Deployment', zh: '产品部署' },
    body: { en: 'Gateway and energy pod deployment for AI compute sites.', zh: '为 AI 算力站点部署 Gateway 和能源舱。' },
  },
  {
    title: { en: 'Software Subscription', zh: '软件订阅' },
    body: { en: 'PowerFlex OS for monitoring, optimization, reporting, and orchestration.', zh: '通过 PowerFlex OS 提供监测、优化、报表和调度能力。' },
  },
  {
    title: { en: 'Energy Operations', zh: '能源运营服务' },
    body: { en: 'Ongoing site optimization, demand management, and grid-flexibility readiness.', zh: '提供持续站点优化、需量管理和电网灵活性接入准备。' },
  },
  {
    title: { en: 'Partner Integration', zh: '伙伴集成' },
    body: { en: 'Integration with contractors, GPU infrastructure providers, energy companies, and VPP partners.', zh: '与电气承包商、GPU 基础设施服务商、能源公司和 VPP 伙伴协同交付。' },
  },
]

export const partnerTypes = [
  {
    title: { en: 'Technology Partners', zh: '技术伙伴' },
    body: { en: 'For hardware, software, metering, controls, UPS, BESS, PCS, and DCIM integrations.', zh: '面向硬件、软件、计量、控制、UPS、BESS、PCS 和 DCIM 集成。' },
  },
  {
    title: { en: 'Deployment Partners', zh: '交付伙伴' },
    body: { en: 'For electrical contractors, engineering firms, commissioning teams, and O&M providers.', zh: '面向电气承包商、工程公司、调试团队和运维服务商。' },
  },
  {
    title: { en: 'AI Infrastructure Partners', zh: 'AI 基础设施伙伴' },
    body: { en: 'For GPU server companies, IDC operators, edge AI providers, and campus compute operators.', zh: '面向 GPU 服务器公司、IDC 运营商、边缘 AI 服务商和园区智算运营方。' },
  },
  {
    title: { en: 'Energy Market Partners', zh: '能源市场伙伴' },
    body: { en: 'For retail energy providers, demand response aggregators, VPP platforms, renewable energy partners, and asset financing partners.', zh: '面向售电公司、需求响应聚合商、虚拟电厂平台、绿电伙伴和资产资金伙伴。' },
  },
]

export const about = {
  title: { en: 'We build the Energy OS for AI infrastructure.', zh: '我们为 AI 算力基础设施构建能源操作系统。' },
  intro: {
    en: 'BAAS ENERGY is an energy technology company focused on the power and energy layer of AI infrastructure. As AI workloads move from centralized hyperscale data centers to distributed enterprise, campus, IDC retrofit, and edge environments, energy systems need to become more observable, controllable, modular, and software-defined.',
    zh: 'BAAS ENERGY 是一家聚焦 AI 基础设施能源层的能源科技公司。随着 AI 工作负载从超大规模数据中心走向企业、园区、旧 IDC 改造和边缘推理场景，能源系统需要变得更加可观测、可控制、模块化和软件定义。',
  },
  mission: {
    en: 'To make AI infrastructure energy-aware, flexible, and resilient.',
    zh: '让 AI 基础设施具备能源感知、能源灵活性和能源韧性。',
  },
  beliefs: [
    { en: 'AI infrastructure should not be limited by slow power access.', zh: 'AI 基础设施不应被漫长的电力接入周期限制。' },
    { en: 'Distributed AI nodes should understand and control their energy behavior.', zh: '分布式 AI 节点应当理解并控制自身的能源行为。' },
    { en: 'Batteries, power electronics, compute workloads, and the grid should operate as one coordinated system.', zh: '储能、电力电子、算力负荷和电网应当形成统一协同系统。' },
    { en: 'The next generation of AI infrastructure will be built with energy intelligence from day one.', zh: '下一代 AI 基础设施从第一天起就应具备能源智能。' },
  ],
}

export const contact = {
  title: { en: 'Assess your AI energy site.', zh: '评估您的 AI 能源站点。' },
  body: {
    en: 'Tell us about your AI compute site, power constraints, and deployment timeline. BAAS can help evaluate whether your site needs gateway monitoring, modular energy support, or compute-energy orchestration.',
    zh: '请告诉我们您的 AI 算力站点、电力约束和部署计划。BAAS 可以帮助评估您的站点是否需要智能网关监测、模块化能源支持或算力能源调度能力。',
  },
  challenges: [
    { en: 'Power access or expansion delay', zh: '接电或扩容周期长' },
    { en: 'Peak demand cost', zh: '最大需量成本高' },
    { en: 'Backup power limitation', zh: '备电能力不足' },
    { en: 'Power quality risk', zh: '电能质量风险' },
    { en: 'Energy storage planning', zh: '储能规划' },
    { en: 'Grid flexibility or VPP readiness', zh: '电网灵活性或 VPP 接入准备' },
    { en: 'Unsure / need assessment', zh: '不确定，需要评估' },
  ],
}

export const seo = {
  home: {
    title: 'BAAS ENERGY | Energy OS for AI Infrastructure',
    description: {
      en: 'BAAS ENERGY builds the Energy OS for AI infrastructure, combining intelligent power gateways, modular AI energy pods, and compute-energy orchestration software for distributed AI nodes.',
      zh: 'BAAS ENERGY 是面向 AI 算力基础设施的能源操作系统公司，提供智能配电网关、模块化能源舱和算力能源调度平台。',
    },
  },
  platform: { title: 'Platform | BAAS ENERGY', description: home.platform.body },
  products: { title: 'Products | BAAS ENERGY', description: products[0].summary },
  solutions: { title: 'Solutions | BAAS ENERGY', description: solutions[0].intro },
  partners: { title: 'Partners | BAAS ENERGY', description: partnerTypes[0].body },
  about: { title: 'About | BAAS ENERGY', description: about.intro },
  contact: { title: 'Contact | BAAS ENERGY', description: contact.body },
}
