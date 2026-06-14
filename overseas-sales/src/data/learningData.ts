export interface Lesson {
  id: string;
  title: string;
  content: string;
  tips?: string[];
  checklist?: string[];
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface FabSite {
  id: string;
  name: string;
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  type: string;
  focus: string;
  cultureNotes: string[];
  taboos: string[];
  tips: string[];
  contacts: string;
}

// ===== ST Fab Sites Data =====
export const fabSites: FabSite[] = [
  {
    id: 'crolles',
    name: 'Crolles',
    city: 'Crolles',
    country: 'France',
    countryCode: 'FR',
    lat: 45.28,
    lng: 5.88,
    type: '300mm 先进逻辑',
    focus: '28nm/18nm FD-SOI, 先进CMOS',
    cultureNotes: [
      '位于格勒诺布尔附近，阿尔卑斯山脚下，风景优美',
      '法国高科技走廊"Grenoble Isere"的核心',
      'R&D氛围浓厚，工程师偏向技术讨论',
      '许多员工会说英语，但法语仍是工作语言',
      '午餐时间较长，通常是1.5小时'
    ],
    taboos: [
      '不要比较法国与德国的工作效率',
      '不要忽视Dress Code（Business Casual起步）',
      '不要在8月尝试安排会议（全法度假季）',
      '12:00-14:00不要安排会议（午餐时间神圣）'
    ],
    tips: [
      'Crolles 2是全球最先进的FD-SOI产线之一，对EPI硅片质量要求极高',
      '与GlobalFoundries共享部分产能，注意保密边界',
      'Engineers appreciate technical depth - 准备好深入讨论材料科学',
      '周边住宿推荐Grenoble市中心，到Crolles约30分钟车程',
      '机场：Lyon-Saint Exupery (LYS)，开车到Crolles约1小时'
    ],
    contacts: 'Manufacturing, R&D, Procurement'
  },
  {
    id: 'rousset',
    name: 'Rousset',
    city: 'Rousset',
    country: 'France',
    countryCode: 'FR',
    lat: 43.48,
    lng: 5.47,
    type: '200mm 模拟/功率IC',
    focus: 'BCD工艺, 模拟IC, MCU',
    cultureNotes: [
      '位于普罗旺斯，地中海气候，阳光充足',
      '工厂历史较长，员工忠诚度高',
      '氛围相对传统和保守',
      '午餐文化浓厚，当地餐厅以地中海菜为主',
      '周五下午通常比较轻松'
    ],
    taboos: [
      '不要催促决策，Rousset的审批流程相对较长',
      '不要忽视Dress Code，Business Casual起步'
    ],
    tips: [
      'Rousset是ST BCD工艺的发源地，BCD技术全球领先',
      '200mm硅片需求稳定，适合作为入门突破口',
      '附近的Aix-en-Provence是美丽的历史名城，适合宴请客户',
      '机场为Marseille Provence (MRS)，到工厂约40分钟'
    ],
    contacts: 'Manufacturing, Procurement, Quality'
  },
  {
    id: 'tours',
    name: 'Tours',
    city: 'Tours',
    country: 'France',
    countryCode: 'FR',
    lat: 47.39,
    lng: 0.69,
    type: '封装测试/功率器件',
    focus: 'MOSFET, IGBT, 封装',
    cultureNotes: [
      '位于卢瓦尔河谷，法国历史文化名城',
      '规模相对较小，氛围亲切',
      '城堡之乡，周边有众多世界文化遗产'
    ],
    taboos: [
      '不要忽视工厂规模较小的现实，资源有限'
    ],
    tips: [
      'Tours规模较小，硅片需求相对有限',
      '适合作为关系维护型拜访，不必每次都去',
      '可以结合卢瓦尔河谷酒庄体验做客户活动',
      'TGV从巴黎到Tours约1小时'
    ],
    contacts: 'Manufacturing, Procurement'
  },
  {
    id: 'agrate',
    name: 'Agrate Brianza',
    city: 'Agrate',
    country: 'Italy',
    countryCode: 'IT',
    lat: 45.57,
    lng: 9.35,
    type: '200mm 混合信号/MEMS',
    focus: 'MEMS传感器, 功率IC, MCU',
    cultureNotes: [
      '位于米兰东北部，意大利工业核心地带',
      'Lombardy大区节奏快，商务文化比南部更国际化',
      '许多员工英语流利',
      '午餐时间1小时，晚餐social很重要',
      '时尚之都米兰影响着周边，Dress Code要注意'
    ],
    taboos: [
      '不要比较南北意大利',
      '不要在午餐时聊太多工作'
    ],
    tips: [
      'Agrate是ST在意大利最大的综合性基地',
      'MEMS传感器需求特殊硅片（SOI），是差异化机会',
      '米兰的机场是MXP（Malpensa），到工厂约40分钟',
      '可以安排在米兰市中心的dinner，餐厅选择丰富'
    ],
    contacts: 'Manufacturing, MEMS Division, Procurement'
  },
  {
    id: 'catania',
    name: 'Catania',
    city: 'Catania',
    country: 'Italy',
    countryCode: 'IT',
    lat: 37.50,
    lng: 15.09,
    type: '150mm/200mm SiC/GaN',
    focus: 'SiC MOSFET, SiC二极管, 功率器件',
    cultureNotes: [
      '位于西西里岛东海岸，Etna火山脚下',
      '地中海气候，冬季温和，夏季炎热',
      '西西里人以热情好客闻名',
      '食物文化极其丰富，Arancini和Pasta alla Norma是当地特色',
      '节奏较慢，"La Dolce Vita"（甜蜜生活）的态度',
      '英语普及率不如米兰，但工厂工程师OK'
    ],
    taboos: [
      '绝对不要提及Mafia/Cosa Nostra/黑手党（即使是玩笑）',
      '不要问"这里安全吗"',
      '不要说"这里和教父电影里一样"',
      '不要比较南北意大利',
      '不要谈论政治和宗教'
    ],
    tips: [
      'Catania是ST SiC业务的核心基地，全球SiC器件制造的标杆',
      'SiC衬底需求爆发式增长，是你最大的机会窗口',
      '准备小礼物（中国茶叶，精美包装），西西里人重视人情',
      '机场代码CTA，到工厂约20分钟',
      '如果对方提起Etna火山，表现出兴趣——西西里人为之骄傲',
      '推荐餐厅：Catania Fish Market周边的传统Sicilian餐厅'
    ],
    contacts: 'SiC Business Unit, Manufacturing, Procurement'
  },
  {
    id: 'amk',
    name: 'AMK (Ang Mo Kio)',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    lat: 1.37,
    lng: 103.85,
    type: '200mm 存储器/模拟IC',
    focus: 'NOR Flash, 模拟IC, 亚太枢纽',
    cultureNotes: [
      '多元文化融合：华人、马来、印度、西方',
      '极度高效，会议准时',
      'Meritocracy文化，靠结果说话',
      '英语是工作语言，Singlish有时候难懂',
      '炎热潮湿，全年夏季',
      'Kiasu（怕输）精神，追求卓越'
    ],
    taboos: [
      '种族敏感话题绝对避免',
      '宗教节日期间不要安排重要会议',
      '不要说"打点关系"之类的话（新加坡法律极严）',
      '不要迟到——新加坡比欧洲严格得多'
    ],
    tips: [
      'AMK是ST亚太制造枢纽，面向亚太市场的出货中心',
      'Flash存储器对硅片质量要求高（缺陷敏感）',
      'Singapore客户期待24小时邮件回复',
      '机场SIN，出租车/Grab到工厂约30分钟',
      'Clarke Quay和Marina Bay是商务dinner的热门区域',
      '可以考虑安排客户去中国出差时见面（如果他们在亚太出差多）'
    ],
    contacts: 'Manufacturing, AP Procurement, Quality'
  }
];

// ===== Learning Modules =====
export const learningModules: Module[] = [
  {
    id: 'st-deep-dive',
    title: 'ST意法半导体深度解析',
    subtitle: '从组织架构到全球Fab分布的全景认知',
    description: 'ST是你在欧洲最重要的客户。深入了解ST的组织架构、技术战略、6个全球制造基地的布局和采购决策流程，是开展一切销售活动的基础。本模块包含3个主题课程和1个交互式全球Fab地图。',
    icon: 'Building2',
    color: '#4facfe',
    lessons: [
      {
        id: 'st1',
        title: 'ST公司概况与组织架构',
        content: `STMicroelectronics（NYSE: STM）是全球领先的半导体IDM公司：

**基本信息：**
- 总部：瑞士日内瓦（Geneva）
- 2024年营收：约161亿美元
- 全球员工：约50,000人
- 专利组合：18,000+项

**组织架构——你需要对接的部门：**

1. **Front-End Manufacturing（前道制造）**
   - 各Site的Manufacturing/Operations部门
   - 负责晶圆投片决策和生产排程
   - 你的硅片直接使用者

2. **Strategic Procurement（战略采购）**
   - 位于Geneva的中央采购团队
   - 负责供应商审核、合同谈判、价格决策
   - 通常按Category划分（Raw Materials, Equipment等）

3. **Quality Assurance（质量保证）**
   - Incoming Quality Control (IQC)
   - Supplier Quality Engineering (SQE)
   - 负责供应商审核（On-site Audit）

4. **R&D / Technology Development**
   - 位于Crolles的Central R&D
   - 负责先进工艺开发和新材料导入
   - 对硅片Spec有关键话语权

5. **Finance**
   - Payment Terms negotiation
   - Annual Price Review

**关键决策链：**
Site-level RFQ → Central Procurement RFP → Technical Review (R&D+Quality) → Supplier Selection Committee → Contract Award`,
        tips: ['ST的采购体系非常decentralized，各Site有一定自主权，但Strategic Contract由Geneva统一谈'],
        checklist: ['记住ST总部位置', '了解前道制造部门的角色', '掌握采购决策流程', '熟悉SQE审核要求']
      },
      {
        id: 'st2',
        title: 'ST全球Fab分布与技术路线',
        content: `ST拥有全球布局的制造基地，你需服务的6个Site：

**法国（France）：**
- **Rousset（普罗旺斯）**：
  - 主要产品：模拟/功率IC、MCU
  - 工艺节点：0.35μm - 130nm BCD
  - 特色：BCD（Bipolar-CMOS-DMOS）工艺先驱

- **Crolles（格勒诺布尔附近）**：
  - ST与GlobalFoundries合作的300mm先进逻辑基地
  - 工艺节点：28nm, 18nm FD-SOI
  - 核心地位：ST最先进逻辑工艺研发中心
  - 对EPI硅片需求量最大

- **Tours（图尔）**：
  - 主要产品：功率MOSFET、IGBT
  - 封装测试为主，也有前道

**意大利（Italy）：**
- **Agrate（米兰附近）**：
  - 主要产品：MEMS传感器、功率IC、MCU
  - 工艺节点：0.35μm - 90nm
  - ST在意大利最大的综合性基地

- **Catania（西西里岛）**：
  - **全球SiC/GaN功率器件的标杆工厂**
  - 主要产品：SiC MOSFET、SiC二极管
  - ST的SiC衬底（Substrate）需求集中于此
  - 与Cree/Wolfspeed合作紧密

**新加坡（Singapore）：**
- **AMK（Ang Mo Kio）**：
  - 主要产品：存储器（NOR Flash）、模拟IC
  - 工艺节点：90nm - 40nm
  - 面向亚太市场的制造枢纽`,
        tips: ['Catania工厂目前是ST增长最快的Site，SiC业务年增速50%+，是你最有机会的突破口'],
        checklist: ['掌握每个Site的主要产品', '了解各Site的工艺节点', '识别硅片需求最大的Site', '关注Crolles和Catania的机会']
      },
      {
        id: 'st3',
        title: 'ST的供应商管理体系',
        content: `进入ST供应商名单需要经过严格流程：

**供应商审核流程（Supplier Qualification）：**

1. **Pre-qualification Survey**
   - 公司背景、产能、质量体系问卷
   - 通常由Procurement发起

2. **On-site Audit**
   - ST SQE团队到工厂实地考察
   - 审核内容：质量体系（ISO/TS 16949）、制程能力、设备状态、ESD防护、洁净室等级
   - 审核周期：1-2天

3. **Sample Qualification**
   - 提供A Sample（工程样品）
   - ST IQC进行incoming inspection
   - Fab进行试投片（Pilot Run）
   - 良率验证（Yield Verification）

4. **PSW（Part Submission Warrant）**
   - 类似汽车行业的PPAP
   - 提交完整文件包

5. **小批量试产 → 大批量量产**

**供应商分级体系：**
- Preferred Supplier：优先供应商，最高配额
- Approved Supplier：合格供应商
- Conditional Supplier：有条件使用
- Disqualified：淘汰

**年度审核机制：**
- Annual Business Review (ABR)
- Score Card评分（Quality/Delivery/Price/Service）
- Corrective Action Request (CAR) 处理时效`,
        tips: ['第一次Audit至关重要，建议提前做内部模拟审核，确保ESD和洁净室管理达标'],
        checklist: ['了解完整的Qualification流程', '准备Audit所需文件', '理解Sample Qualification要求', '掌握供应商分级体系']
      }
    ]
  },
  {
    id: 'cross-culture',
    title: '跨文化商务沟通',
    subtitle: '法国·意大利·新加坡三国文化密码',
    description: '从国内销售到海外销售，最大的挑战不是产品知识，而是文化差异。了解每个国家的商务文化、沟通风格、社交礼仪和绝对禁忌，是建立信任的第一步。',
    icon: 'Globe',
    color: '#ff4e50',
    lessons: [
      {
        id: 'c1',
        title: '法国商务文化与沟通策略',
        content: `法国是ST总部所在国，也是你在欧洲最重要的商务目的地。

**核心文化特征：**
- **La France Profonde（深层法国）**：法国人对自己的文化极度自豪，商务交流中尊重法国文化能快速拉近距离
- **Hierarchie（等级制）**：法国企业等级分明，决策通常需要层层上报，不要期望一线工程师能快速拍板
- **Intellectualism**：重视理论、逻辑和辩论，商务会议中展现深度思考比单纯推销更受尊重

**商务礼仪要点：**

**见面礼仪：**
- 初次见面：握手（Poignee de main），眼神接触，说"Bonjour/Enchanté"
- 熟悉后：La Bise（贴面礼），但职场初期建议等对方主动
- 称呼：用"Monsieur/Madame + 姓氏"，切勿直接用名字（除非对方要求）
- 英语：年轻一代工程师英语不错，但管理层可能偏好法语，重要会议可带翻译

**会议文化：**
- 午餐时间（12:00-14:00）神圣不可侵犯，绝不要安排会议
- 8月是全法国度假月，基本无法推进商务
- 会议开始通常会闲聊（la parole en l'air），不要着急进入正题
- 法国人欣赏"Contrarian thinking"，适度提出不同意见反而加分

**沟通风格：**
- Direct but diplomatic：直接但有外交辞令，不会明说"No"，但会说"Ce n'est pas evident"（这不简单）
- 邮件：正式且详尽，开头要用礼貌问候语，结尾要有完整签名

**ST法国Site特别注意事项：**
- **Rousset**：普罗旺斯氛围，午餐文化浓厚，周五下午轻松
- **Crolles**：R&D氛围浓，阿尔卑斯山区，工程师偏好技术讨论
- **Tours**：规模较小，卢瓦尔河谷地区，节奏较慢

**禁忌清单：**
- 不要拿法国与德国比较（尤其不要说德国效率更高）
- 不要在晚餐时聊工作
- 不要忽视Dress Code（Business Casual起步，高级别会议穿西装）
- 不要打断别人说话
- 不要过度热情（法国人喜欢保持一定的个人距离）`,
        tips: ['学会几句法语问候（Bonjour, Merci, Au revoir）能极大加分，哪怕你英语说得很好', '去法国前了解一下当地的美食和葡萄酒，是很好的破冰话题'],
        checklist: ['了解法国等级制文化', '掌握见面礼仪和称呼方式', '记住午餐和8月禁忌', '学习基本法语问候', '了解三个法国Site的特点']
      },
      {
        id: 'c2',
        title: '意大利商务文化与西西里岛特别指南',
        content: `意大利是ST第二大制造基地所在国，Catania工厂的战略地位日益重要。

**核心文化特征：**
- **Relazioni（关系）至上**：意大利人做生意极度依赖个人关系，没有信任基础很难推进
- **La Bella Figura（好形象）**：外在形象（穿着、车子、手表）在社交中很重要
- **Flessibilita（灵活性）**：意大利人对时间、规则的态度比德国法国灵活很多，计划经常变

**意大利北部（Agrate/Milan地区）商务文化：**
- 米兰是意大利商务中心，节奏较快，国际化程度高
- 英语普及率较高，但学几句意大利语会很受欢迎
- 见面：握手+轻微拍肩（熟悉后），称呼"Signore/Signora"
- 午餐是建立关系的好时机，意大利人热衷美食

**ST Agrate要点：**
- Agrate在Lombardy大区，工业气息浓厚
- 许多员工英语流利
- 午餐时间1小时，晚餐social很重要
- 时尚之都米兰影响着周边，Dress Code要注意

**西西里岛（Catania）—— 特别特别特别注意：**

西西里岛有着独特的历史和文化背景。Catania是ST的SiC核心工厂所在地，你很可能需要经常去。

**⚠️ 绝对禁忌（Taboos）—— 违反任何一条都可能毁掉关系：**
- **永远不要提及"Mafia"、"Cosa Nostra"、"黑手党"**
  - 即使是玩笑也不行
  - 不要问"这里安全吗？"
  - 不要说"西西里看起来和电影教父里一样"
  - 不要做任何与黑手党相关的手势或暗示
  - Catania乃至整个西西里岛都在努力摆脱黑手党的历史标签，提到这个话题是极度冒犯
- **不要比较南北意大利**：不要说"北方比南方发达"之类的话
- **不要谈论政治和宗教**

**Catania 实地指南：**
- Etna火山就在附近，可以聊火山和地质（正面话题）
- 西西里人极其热情好客，接受他们的 hospitality
- 食物是通用语言：Arancini（炸饭团）、Pasta alla Norma、Cannoli
- 英语普及率低于米兰，但工厂工程师基本OK
- 机场（CTA）到工厂约20分钟
- 时间安排更flexible，会议可能延迟开始
- 气候：夏季炎热干燥，冬季温和

**沟通风格：**
- 手势丰富，声音较大，表情夸张——这是正常表达，不是生气
- 关系建立比合同更重要，先做朋友再做生意
- "Domani"（明天）不一定指明天，可能是"以后再说"
- 他们喜欢反复讨论细节，耐心是关键

**实用建议：**
- 带上中国茶叶作为小礼物（'piccolo regalo'），配合包装精美，效果极佳
- 如果对方提起Etna火山，表现出兴趣和惊叹——西西里人为自己的火山骄傲
- 推荐餐厅：Catania Fish Market周边的传统Sicilian餐厅
- 考虑学几句意大利语：Ciao（你好/再见）、Grazie（谢谢）、Prego（不客气）`,
        tips: ['在Catania，餐厅推荐：Trattoria da Nuccio（传统西西里菜）、A Putia dell\'Ostello（当地小吃）', '西西里岛的咖啡豆很有名，可以买一些带回中国'],
        checklist: ['牢记黑手党绝对禁忌', '了解关系至上的文化', '掌握西西里的正面话题（火山、美食）', '准备小礼物', '学习基本意大利语问候']
      },
      {
        id: 'c3',
        title: '新加坡商务文化与AMK工厂对接',
        content: `新加坡是ST亚太制造枢纽，AMK工厂虽然比欧洲小，但商务文化截然不同。

**核心文化特征：**
- **Multiculturalism（多元文化）**：华人、马来、印度、西方文化融合
- **Efficiency（效率至上）**：比欧洲高效得多，会议准时开始准时结束
- **Meritocracy（精英制）**：靠能力和结果说话，相对扁平
- **Kiasu（怕输精神）**：新加坡人骨子里的竞争意识，凡事追求完美

**种族与文化构成：**
- 华人（约74%）：受中华文化影响，但已经非常西化
- 马来人（约13%）：穆斯林文化，注意饮食禁忌
- 印度人（约9%）：印度教/佛教/基督教/锡克教多元
- 欧亚混血和其他（约4%）

**ST AMK 对接要点：**

**见面礼仪：**
- 握手为主，简短有力
- 华人同事可能接受微微点头
- 名片用双手递接，看一眼再收好（尤其对华人和日本同事）
- 英语是工作语言，Singlish（新加坡英语）可能有点难懂
  - Singlish特点：融合中文、马来语、 Tamil词汇，语法简化
  - 例如："Can or not?"（行不行？）、"Don't worry lah"（别担心啦）

**会议文化：**
- 极度准时，迟到5分钟就要道歉
- Agenda-driven，会前发议程，会后要Summary
- 决策速度快，但需要有数据支撑
- 喜欢PPT简洁、数据驱动（Data-driven）
- 会议中不要过度闲聊，直入主题

**沟通风格：**
- 比欧洲人更间接（尤其华人员工），负面反馈可能委婉表达
- 邮件：简洁、要点化、Action Item要明确
- 微信/WhatsApp在商务沟通中常用（比欧洲随意）
- 回复速度期望：24小时内

**与欧洲ST Site的区别：**
- 新加坡工厂更注重"Immediate Response"，回复邮件要快
- 投诉会直接说，不绕弯子
- 商务 dinners 通常在 Clarke Quay 或 Marina Bay 区域
- 气候：全年炎热潮湿（25-35°C），穿轻便商务装
- 商务午餐常见（Hawker Centre或商场餐厅），不一定正式晚宴

**特殊注意事项：**
- 种族敏感话题绝对避免（尤其是 affirmative action 相关政策）
- 宗教节日期间不要安排重要会议：
  - Hari Raya Puasa（马来开斋节）
  - Deepavali（印度排灯节）
  - Chinese New Year（华人春节，新加坡非常重视）
- 新加坡法律极其严格，商务场合不要有任何违规暗示（比如随口说"打点关系"）
- 不要chewing gum（新加坡禁止口香糖）
- 不要 littering（乱扔垃圾罚款极重）

**餐饮文化：**
- Hawker Centre（小贩中心）是当地特色，可以带客户体验
  - 推荐：海南鸡饭、辣椒螃蟹、Laksa（叻沙）、Char Kway Teow（炒粿条）
- 如果要正式宴请，Marina Bay Sands或Clarke Quay的餐厅
- 注意马来同事不吃猪肉，印度同事可能素食`,
        tips: ['新加坡客户期待24小时内邮件回复，即使只是回一个"Received, will revert by XX"', '带客户去Hawker Centre体验本地美食是很好的关系建立方式'],
        checklist: ['了解多元文化背景', '掌握高效会议风格', '注意准时和邮件回复速度', '避免种族和宗教话题', '了解宗教节日时间', '学几句Singlish会拉近距离']
      }
    ]
  },
  {
    id: 'international-trade',
    title: '国际贸易实务',
    subtitle: '从报价到收汇的全流程操作',
    description: '海外销售不仅是拜访客户和吃饭，更涉及复杂的国际贸易操作。Incoterms、出口管制、信用证、物流，每个环节出错都可能导致重大损失。',
    icon: 'Ship',
    color: '#f9d423',
    lessons: [
      {
        id: 't1',
        title: '国际贸易术语（Incoterms 2020）',
        content: `硅片出口常用的Incoterms，必须烂熟于心：

**最常用术语：**

**1. EXW（Ex Works）工厂交货**
- 卖方责任最小：工厂交货，买方负责一切运输和出口清关
- 适用：买方有自己的国际物流团队
- 注意：出口许可证由买方办理，如果涉及敏感物项可能有问题

**2. FCA（Free Carrier）货交承运人**
- 卖方将货物交给买方指定的承运人即完成交货
- 适合：空运/海运集装箱，卖方负责出口清关
- 风险转移点：交给承运人时

**3. CPT（Carriage Paid To）运费付至**
- 卖方支付运费至目的港/机场
- 风险转移：货交第一承运人时（注意：风险和费用转移点不同）

**4. CIP（Carriage and Insurance Paid To）**
- CPT + 卖方购买保险
- 保险最低要求：ICC(C)条款，建议升级为ICC(A)
- 硅片属于高价值精密货物，强烈建议全险

**5. DAP（Delivered at Place）目的地交货**
- 卖方承担所有费用和风险直到货物到达买方指定地点
- 适合：卖方有很强的国际物流能力
- 注意：进口清关由买方负责

**6. DDP（Delivered Duty Paid）完税后交货**
- 卖方责任最大：包含进口清关和关税
- 适合：卖方在买方国家有代理或子公司
- 欧洲客户经常要求DDP

**硅片出口特别注意：**
- 硅片属于精密易碎品，运输中的温湿度控制至关重要
- 包装要求：真空包装+防静电袋+泡沫缓冲+木箱
- 运输方式：通常是空运（urgent）或海运（大批量）
- 保险金额：按CIF价值的110%投保`,
        tips: ['欧洲客户最喜欢DDP，因为省心。但做DDP前必须确认你有能力处理进口国的VAT和关税'],
        checklist: ['掌握6个核心Incoterms', '理解风险转移点与费用转移点的区别', '了解硅片包装要求', '熟悉保险条款']
      },
      {
        id: 't2',
        title: '出口管制与合规（Export Control）',
        content: `半导体是中国重点管控的出口商品，合规是生命线：

**中国出口管制法规：**
- 《出口管制法》（2020年12月生效）
- 《两用物项和技术出口许可证管理目录》
- 硅片本身不敏感，但达到一定规格可能需要许可证

**目标国管制（尤其重要）：**

**美国出口管制（EAR）的外溢效应：**
- ST虽然是欧洲公司，但如果其产品最终用于军事或特定实体，可能触发美国长臂管辖
- 了解"最终用户"（End User）和"最终用途"（End Use）
- 如果客户提到"我们帮XX代工"，要问清楚XX是谁

**欧盟出口管制：**
- EU Dual-Use Regulation (Regulation 2021/821)
- ST通常已经处理了欧盟内部的合规
- 但作为供应商，你需要确保你的出口不违反任何管制

**合规检查清单（必须做）：**
1. 客户是否在制裁名单（SDN, EU Consolidated List, UN名单）
2. 最终用户和最终用途声明
3. 是否有转出口（Re-export）风险
4. 技术转让是否涉及受限内容

**建议：**
- 与公司法务/合规团队密切合作
- 保留所有合规文件至少5年
- 定期更新对制裁名单的了解
- 如果客户要求"不走正规报关"，立即终止合作并上报`,
        tips: ['合规问题没有灰色地带。宁可丢单，不可踩线。一次违规可能导致整个公司被制裁'],
        checklist: ['了解中国出口管制法', '熟悉美国EAR的外溢效应', '掌握客户筛查流程', '建立合规文件管理体系']
      },
      {
        id: 't3',
        title: '报价、合同与跨境支付',
        content: `从Quotation到Payment的全流程：

**报价（Quotation）：**
- 币种：通常是USD或EUR，ST偏好EUR
- 有效期：30天或60天
- 价格结构：FOB/CIF/DDP价格 + Payment Terms
- 汇率锁定：如果报的是USD，要考虑汇率波动风险

**合同（Contract/PO）：**
- ST通常发Purchase Order (PO)，你回签即可
- 关键条款检查：
  - Incoterms
  - Delivery Schedule（ST对OTD - On Time Delivery要求极严）
  - Quality Requirements（Spec, Inspection标准）
  - Warranty（质保期通常为12个月）
  - Force Majeure（不可抗力条款）
  - Governing Law（适用法律，通常是瑞士法或法国法）

**支付方式：**

**1. T/T（电汇）**
- 最常见，但对卖方风险较大
- 预付（Advance Payment）：最安全，但大客户通常不接受
- 货到付款（COD）：风险最大
- 常见折中：30%预付 + 70%见提单副本付款

**2. L/C（信用证）**
- 银行信用代替商业信用，安全性高
- 但费用高（开证费1-3‰）、手续繁琐
- 大型跨国企业如ST通常用L/C或Open Account
- 注意"软条款"（Soft Clause），可能是陷阱

**3. Open Account（赊销）**
- 大客户最常用，发货后30/60/90天付款
- 风险最高，建议购买出口信用保险（中信保Sinosure）
- ST通常要求Net 60或Net 90

**信用管理：**
- 新客户先做Credit Check（Dun & Bradstreet, Euler Hermes）
- 设定Credit Limit和Payment Term
- 定期Review应收账款`,
        tips: ['与ST这样的大客户，争取Net 30而不是Net 90——现金流比利润更重要'],
        checklist: ['掌握三种支付方式', '理解合同关键条款', '建立Credit Check流程', '了解出口信用保险']
      }
    ]
  },
  {
    id: 'business-english',
    title: '商务英语与技术沟通',
    subtitle: '从邮件写作到技术谈判的语言武器',
    description: '英语是海外销售的必备工具。商务英语和技术英语与考试英语完全不同，需要的是精准、简洁、专业的表达能力。本模块覆盖邮件模板、行业术语和谈判话术。',
    icon: 'MessageSquare',
    color: '#00f2fe',
    lessons: [
      {
        id: 'e1',
        title: '商务邮件写作模板与技巧',
        content: `海外销售的80%沟通通过邮件完成，写一封好邮件是基本功。

**邮件结构（Best Practice）：**

**Subject Line：**
- 清晰的Subject能让客户3秒内理解邮件内容
- ✅ "Quotation for 300mm P<100> Prime Wafer - RFQ-2024-0567"
- ❌ "About the order"

**Opening：**
- Formal: "Dear Mr./Ms. [Last Name],"
- After first meeting: "Dear [First Name],"
- Follow-up: "Following up on our meeting in Catania on [Date]..."

**Body - 核心原则：**
- BLUF（Bottom Line Up Front）：结论先行
- Bullet points > 长段落
- 一段一个主题
- 控制在5个段落以内

**Closing：**
- "Best regards,"（最常用，不冷不热）
- "Kind regards,"（稍正式）
- "Best,"（熟悉后）
- 签名档要包含全名、职位、公司、电话、邮箱

**常用句式模板：**

**报价：**
"Please find attached our quotation based on [Incoterms] terms, valid until [Date]. Unit price: EUR [XXX]/wafer for volume of [YYY] wafers/quarter."

**跟进：**
"I wanted to follow up on the quotation sent on [Date]. Please let me know if you need any additional information or if a technical call would be helpful."

**催促：**
"I am writing to kindly inquire about the status of the PO for [Product]. Our production schedule requires confirmation by [Date] to ensure on-time delivery."

**延期：**
"Due to [Reason], we regret to inform you that the delivery for PO#[Number] will be delayed by [X] weeks. The revised ETD is [Date]. We sincerely apologize for the inconvenience."

**拒绝（但保留关系）：**
"Unfortunately, we are unable to accommodate this request at the current price level. However, we remain committed to supporting ST's growth and would welcome a discussion on alternative volume commitments or payment terms."

**不要用的表达：**
- "Please reply me as soon as possible"（太pushy）
- "I think..."（不专业，用"We recommend..."）
- 全大写（像在SHOUTING）`,
        tips: ['每封邮件发送前用Grammarly检查语法，哪怕你觉得自己英语很好', '重要邮件写完后放2小时再发，重新审视'],
        checklist: ['掌握BLUF写作法', '记住报价/跟进/催促模板', '避免不专业的表达', '优化签名档']
      },
      {
        id: 'e2',
        title: '半导体行业技术英语',
        content: `与ST的技术对接中，必须使用精准的行业术语：

**硅片相关术语：**
| 英文 | 含义 |
|------|------|
| CZ Crystal Growth | Czochralski晶体生长 |
| Resistivity | 电阻率 |
| Epi Layer / Epitaxial Layer | 外延层 |
| CMP (Chemical Mechanical Polishing) | 化学机械抛光 |
| TTV (Total Thickness Variation) | 总厚度偏差 |
| LPD (Light Point Defect) | 光点缺陷 |
| Edge Exclusion | 边缘排除区 |
| Flatness / SORI / GBIR | 平整度指标 |
| Notch | 定位槽（300mm） |
| Primary Flat | 主定位面（200mm） |
| Crystal Orientation | 晶向 <100> / <111> |
| OISF (Oxidation Induced Stacking Fault) | 氧化层错 |

**制程相关术语（Fab常用）：**
- Lithography / Photolithography 光刻
- Etching 蚀刻
- Ion Implantation 离子注入
- Thermal Oxidation 热氧化
- CVD (Chemical Vapor Deposition) 化学气相沉积
- PVD (Physical Vapor Deposition) 物理气相沉积
- CMP Slurry CMP研磨液
- Cleanroom 洁净室
- Yield 良率

**质量相关：**
- "The resistivity uniformity across the wafer meets your specification of ±5%."
- "We guarantee LPD < 20 counts per wafer for particles > 0.12μm."
- "Our process capability index (Cpk) for thickness control is > 1.33."
- "All wafers are shipped in Class 100 cleanroom-compatible packaging."

**技术讨论场景：**
- "What is your target EPI thickness for the 28nm FD-SOI process?"
- "Can you share your incoming spec for particle count on 300mm bare wafers?"
- "We can provide different resistivity ranges: 1-10 ohm-cm for your CMOS logic, or 0.001-0.01 ohm-cm for your power devices."
- "Would you like us to provide a test lot for your qualification process?"`,
        tips: ['准备一个行业术语的Glossary文档，随时查阅'],
        checklist: ['掌握硅片核心术语英文', '熟悉制程流程英文', '练习技术对话场景', '准备Glossary文档']
      },
      {
        id: 'e3',
        title: '商务谈判英语与话术',
        content: `与ST的谈判场景实战话术：

**开场白：**
- "Thank you for taking the time to meet with us today. We're excited to discuss how we can support ST's silicon wafer requirements."
- "Before we get into the details, I'd like to understand your current supply situation and any challenges you're facing."

**探询需求：**
- "What volumes are you currently consuming per quarter for [Product]?"
- "Are you looking to diversify your supplier base, or is this a cost-reduction initiative?"
- "What are the key criteria for your supplier selection—price, quality, delivery, or local support?"

**价值陈述：**
- "Our advantage is not just price—it's supply chain resilience. With our dual-site manufacturing capability, we can ensure business continuity even in disruptions."
- "We offer dedicated technical support within 24 hours response time, which our current customers highly value."

**价格谈判：**
- "Based on a volume commitment of [X] wafers per year, we can offer a price of EUR [Y]/wafer on DDP [Destination] terms."
- "If you can commit to a 3-year contract with annual volume growth of 10%, we can lock in the price with only 2% annual escalation."
- "I understand your target price is lower. Let me see what we can do if we adjust the payment terms to Net 30 instead of Net 60."

**应对压价：**
- "I appreciate your price expectations. To help me justify a better price to my management, could you share the volume ramp-up plan over the next 3 years?"
- "We want to be competitive, but we also need to ensure sustainable quality. A price that doesn't cover our quality investments will hurt both of us in the long run."

**Close/Next Steps：**
- "To summarize, we agreed on [X]. Next steps: I'll prepare the formal quotation by [Date], and we'll schedule a technical review on [Date]. Does that work for you?"
- "Shall we set up a conference call next week to align on the spec details with your engineering team?"

**非语言沟通：**
- 法国人：眼神接触表示自信，手势表示热情
- 意大利人：靠近说话表示信任，拍肩表示友好
- 新加坡人：保持适当距离，点头表示理解（不一定是同意）`,
        tips: ['谈判前准备好3个数字：Best Price, Target Price, Walk-away Price'],
        checklist: ['掌握开场和需求探询话术', '练习价值陈述', '准备价格谈判策略', '了解不同文化的非语言沟通']
      }
    ]
  },
  {
    id: 'crm',
    title: '客户关系管理',
    subtitle: '从首次接触到战略合作伙伴的长效经营',
    description: '海外客户关系管理是一个长期系统工程。对于ST这样的战略客户，需要的不是一锤子买卖，而是建立持久的合作伙伴关系。',
    icon: 'Users',
    color: '#b76cfd',
    lessons: [
      {
        id: 'crm1',
        title: '客户分级与资源分配策略',
        content: `不是所有客户都值得同等投入，学会分级管理：

**客户分级模型：**

**S级 - 战略客户（如ST整体）：**
- 年采购额 > 500万美元
- 行业标杆，有示范效应
- 投入：CEO/VP级别互动，Dedicated FAE，季度Business Review
- 目标：成为"Strategic Partner"而不仅是"Vendor"

**A级 - 核心客户（如ST单个Site）：**
- 年采购额 100-500万美元
- 稳定的订单流
- 投入：销售经理级别，月度Review
- 目标：提升Share of Wallet（钱包份额）

**B级 - 成长客户：**
- 年采购额 20-100万美元
- 有增长潜力
- 投入：标准服务，季度Review
- 目标：推动Volume Growth

**C级 - 普通客户：**
- 年采购额 < 20万美元
- 维持性业务
- 投入：最小化，有问题处理即可
- 目标：维持现状，降低成本

**ST内部的"客户分级"：**
即使ST是S级客户，内部也要按Site细分：
- Crolles：S+级（最先进工艺，最大EPI需求）
- Catania：S级（SiC增长最快）
- Rousset：A级（传统模拟，量稳但不大）
- Agrate：A级（综合性）
- Tours：B级（量相对小）
- AMK Singapore：A级（亚太枢纽）

**资源分配原则：**
- 70%时间给S和A级客户
- 每季度Review分级，动态调整
- 新客户导入期给予额外资源支持`,
        tips: ['每年做一次"Account Portfolio Review"，评估每个客户的增长潜力和战略价值'],
        checklist: ['建立客户分级体系', '制定不同级别的服务标准', '学会计算Wallet Share', '定期Review分级']
      },
      {
        id: 'crm2',
        title: '定期Review机制与关系维护',
        content: `系统化的客户Review机制是维持关系的核心：

**Quarterly Business Review (QBR) 模板：**

**1. Performance Review（前季度表现回顾）**
- Quality Metrics：DPPM（百万分之缺陷率）、RMA（退货）数量
- Delivery Performance：OTD（On Time Delivery）百分比
- Cost Savings：是否有降本举措
- Issue Log：未关闭问题清单

**2. Market & Industry Update（市场动态）**
- 硅片市场供需趋势
- 原材料价格变动（Polysilicon价格）
- 地缘政治影响分析
- ST竞争对手动态

**3. Joint Business Planning（联合业务规划）**
- 下季度Forecast确认
- 新产品/新工艺导入计划
- Capacity Expansion支持
- 降本路线图（Cost Roadmap）

**4. Relationship Health Check（关系健康度）**
- 各Contact的满意度
- 是否有新决策者加入
- 竞争对手动向
- 下一步行动计划

**非正式关系维护：**
- **行业展会：** SEMICON Europa（慕尼黑）、SEMICON China（上海）
- **工厂参观：**邀请客户到你的工厂参观（熟悉后）
- **节日问候：**圣诞节、中国春节的个性化问候
- **生日记住：**关键Decision Maker的生日
- **私人聚餐：** dinners不要总在酒店，找当地特色餐厅

**ST各Site的关系维护要点：**
- Crolles：技术导向，多聊先进工艺和新材料
- Catania：关系导向，聊美食和火山，不要太正式
- Rousset：文化导向，聊法国文化，尊重当地传统
- AMK：效率导向，聊数据和业绩，用数字说话`,
        tips: ['准备一个Excel表格，记录每个Contact的生日、爱好、家庭情况、上次见面日期——这是你的私人CRM'],
        checklist: ['建立QBR模板', '掌握QBR的4个模块', '规划非正式关系维护活动', '记录客户个人信息']
      },
      {
        id: 'crm3',
        title: '客诉处理与危机管理',
        content: `客诉处理是检验供应商能力的关键时刻，处理好了反而能加深关系。

**客诉处理流程（8D方法）：**

**D1 - 组建团队（Team Formation）**
- 24小时内指定Team Leader
- 通知客户团队已成立

**D2 - 问题描述（Problem Description）**
- 用5W2H描述问题：What/Where/When/Who/Why/How/How much
- 获取不良样品（if available）

**D3 - 遏制措施（Containment Action）**
- 立即停止出货（Hold Shipment）
- 隔离在途和在库产品
- 24小时内给出临时对策

**D4 - 根本原因分析（Root Cause Analysis）**
- 用5 Whys或鱼骨图（Ishikawa Diagram）
- 区分Root Cause和Contributing Factors
- 如果根因在客户，也要委婉表达

**D5 - 纠正措施（Corrective Action）**
- 针对根本原因制定永久对策
- 需要可执行、可验证

**D6 - 验证措施有效性**
- 跟踪至少3个Lot的数据
- 确认问题不再发生

**D7 - 预防措施**
- 更新SOP、FMEA
- 横向展开到同类产品

**D8 - 结案表彰**
- 客户确认Closure
- 内部Team庆祝（Learning）

**危机升级路径：**
- Level 1（一般问题）：销售处理
- Level 2（重复问题/批量问题）：销售+质量+技术
- Level 3（停线风险/重大质量事故）：VP级别介入

**ST的客诉特点：**
- 客诉通常由Site Quality发起，非常formal
- 要求24小时内初步回复
- 如果连续3次客诉同一问题，可能触发Supplier Audit
- SiC衬底的客诉标准更严（毕竟是功率器件，关系到汽车安全）`,
        tips: ['客诉的第一反应速度比完美解决方案更重要。先回复"我们已收到，正在处理"，争取时间'],
        checklist: ['掌握8D方法', '建立分级响应机制', '练习快速响应', '理解ST的客诉流程']
      }
    ]
  },
  {
    id: 'market-development',
    title: '海外市场开拓',
    subtitle: '从展会到商务拜访的实战技巧',
    description: '海外市场开拓不只是飞到欧洲拜访客户，而是一个系统化的市场开发流程。从前期调研到后期跟进，每个环节都需要精心设计。',
    icon: 'TrendingUp',
    color: '#4facfe',
    lessons: [
      {
        id: 'm1',
        title: '欧洲半导体市场分析与机会识别',
        content: `了解欧洲半导体版图，才能找到你的目标客户：

**欧洲半导体产业格局：**

**IDM（Integrated Device Manufacturer）：**
- STMicroelectronics（意大利/法国）- 你的主攻客户
- Infineon Technologies（德国慕尼黑）- 功率/汽车半导体龙头
- NXP Semiconductors（荷兰埃因霍温）- 汽车/IoT
- Bosch Semiconductor（德国罗伊特林根）- 汽车传感器
- ams OSRAM（奥地利）- 传感器/光学
- X-FAB（德国/法国）- 模拟/混合信号Foundry

**Foundry（晶圆代工厂）：**
- GlobalFoundries（德国德累斯顿）- 22FDX
- Tower Semiconductor（意大利Agrate）- 模拟/RF
- TSMC（德国在建工厂）- 2027年投产

**Fabless（无晶圆厂设计公司）：**
- ARM（英国剑桥）- 不直接采购硅片
- Dialog Semiconductor（瑞萨子公司）- 电源管理
- Nordic Semiconductor（挪威）- 低功耗蓝牙

**市场机会分析：**
- **SiC/GaN功率器件**：欧洲Green Deal推动，Catania/Infineon/NXP都在扩产
- **FD-SOI生态**：GlobalFoundries Dresden + ST Crolles，对EPI硅片需求巨大
- **MCU短缺后补库存**：2024-2025年欧洲MCU厂扩产潮
- **中国硅片替代日本**：地缘政治推动供应链重组

**信息来源：**
- SEMI Europe报告
- European Chips Act政策文件
- 各公司Annual Report和Investor Presentation
- LinkedIn跟踪客户动态`,
        tips: ['除了ST，Infineon和NXP也是欧洲Tier-1 IDM，值得同时开拓'],
        checklist: ['绘制欧洲半导体产业地图', '识别目标客户清单', '分析市场机会', '建立信息收集渠道']
      },
      {
        id: 'm2',
        title: '展会与行业活动实战指南',
        content: `展会是海外销售最高效的客户接触渠道：

**必参加的展会：**

**SEMICON Europa（每年11月，慕尼黑）**
- 欧洲最大半导体设备/材料展
- ST、Infineon、NXP都会参展或参观
- 提前1个月约Meeting，展会期间到booth拜访
- 晚宴机会多，是social的好时机

**European Microwave Week（每年9-10月，轮流城市）**
- RF/Microwave领域，ST的Agrate团队会去
- 相对小但更focused

**PCIM Europe（每年6月，纽伦堡）**
- 功率电子展，SiC/GaN相关
- ST Catania的功率团队必去
- 你的SiC衬底推广最佳场合

**展会前准备：**
1. **约Meeting**：提前2-3周邮件/LinkedIn约客户见面
2. **准备Pitch**：30秒Elevator Pitch + 10分钟Detailed Pitch
3. **样品/演示**：带实物样品（硅片）和Technical Brochure
4. **名片**：中英文双面，印刷精美
5. **预约dinners**：展会期间的dinner slots要提前抢

**展会期间：**
- 穿舒适的鞋（一天走2万步）
- 带便携充电宝
- 随身带Notebook记录客户反馈
- 每晚整理当天收集的名片和notes
- 展会第二天发Follow-up邮件

**展会后：**
- 48小时内发Follow-up邮件给所有新联系人
- 按优先级排序，S级客户先跟进
- 更新CRM系统
- 评估ROI（投入vs产出）`,
        tips: ['展会晚宴不要只顾着聊生意，聊当地文化、美食、旅行经历更能拉近距离'],
        checklist: ['制定年度展会计划', '掌握展会前中后的SOP', '准备Pitch', '建立展会ROI评估机制']
      },
      {
        id: 'm3',
        title: '海外商务拜访全流程',
        content: `从准备到回国的完整SOP：

**拜访前（Pre-trip）：**

**1. 设定目标**
- 主目标：是什么？（如：推进Catania SiC样品认证）
- 副目标：2-3个backup目标
- 成功标准：如何定义这次trip成功？

**2. 行程规划**
- 优先安排S级客户，再插A级
- 同一Region的Site集中拜访（如法国三个Site可以一趟跑完）
- 每个Site之间预留交通时间+缓冲
- 尽量约lunch/dinner增加非正式沟通时间

**3. 材料准备**
- Company Profile（中英文，精美装订）
- Product Catalog
- Spec Sheets for target products
- 样品（如有需要）
- Price List（带Valid until日期）
- 名片
- 小礼物（中国特色，精美包装）

**4. 物流准备**
- 签证（申根签证注意入境国规则）
- 机票酒店（提前2周订）
- 当地交通（租车/打车软件Bolt/Uber）
- 现金（少量欧元备用）
- 漫游/当地SIM卡

**拜访中（On-site）：**

**到达前1小时：**
- 检查仪表（衣服、头发、口气、手机静音）
- 回顾客户背景和目标
- 准备好开场白

**Meeting Structure：**
1. Opening（5min）：寒暄+确认Agenda
2. Recap（5min）：回顾上次沟通/当前合作状态
3. Main Discussion（30-40min）：核心议题
4. Next Steps（10min）：明确下一步+时间表
5. Closing（5min）：感谢+确认后续联系

**关键行为：**
- 提前5-10分钟到达
- 带Notebook记录（不要只用手机）
- 主动提出拍照（如果氛围好）
- 要对方的名片/联系信息
- 提出dinner invitation（如果关系到位）

**拜访后（Post-trip）：**

**24小时内：**
- 发Thank you邮件
- Summary of discussion + Next steps
- 如有承诺的材料，尽快发出

**1周内：**
- 更新CRM
- 内部汇报Trip结果
- 启动后续行动

**差旅tips：**
- 法国/意大利/新加坡，食物文化差异大，保持开放心态
- 带常用药（肠胃药、感冒药）
- 用Google Maps离线地图
- 学会用当地打车软件（法国Bolt，意大利FreeNow，新加坡Grab）`,
        tips: ['每次trip回来写一份Trip Report，记录关键信息和心得，这是你个人知识库的核心资产'],
        checklist: ['制定拜访前SOP', '掌握Meeting Structure', '准备拜访材料清单', '建立Trip Report模板']
      }
    ]
  }
];
