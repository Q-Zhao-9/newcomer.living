export type Category = {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  icon: string;
};

export type Source = {
  label: string;
  href: string;
  description?: string;
};

export type GuideSection = {
  heading: string;
  body: string[];
  table?: { headers: string[]; rows: string[][] };
  links?: { label: string; href: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  updated: string;
  readingTime: string;
  excerpt: string;
  summary: string[];
  sources?: Source[];
  relatedTools?: string[];
  sections: GuideSection[];
  checklist: string[];
  related: string[];
};

export type Tool = {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  category: string;
};

export const site = {
  name: "Newcomer Living",
  nameZh: "加拿大生活工具箱",
  tagline: "从租房、找工作、孩子上学、生活成本到冬季驾驶，帮你把复杂问题拆成可执行的步骤。",
  englishTagline: "Practical guides, checklists, and calculators for Chinese newcomers in Canada.",
  description: "为加拿大留学生、新移民和华人家庭提供实用生活指南、清单和计算工具，涵盖租房、生活成本、找工作、孩子上学和冬季生活。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://newcomer.living",
};

export const categories: Category[] = [
  { slug: "renting", title: "Renting", titleZh: "租房", icon: "🏠", description: "租房流程、看房清单、押金与信用记录等实用指南。" },
  { slug: "jobs", title: "Jobs", titleZh: "找工作", icon: "💼", description: "兼职、简历、面试和工作权益的一般参考。" },
  { slug: "school", title: "School", titleZh: "孩子上学", icon: "🎒", description: "孩子入学注册、学校沟通和常见文件准备。" },
  { slug: "car-winter-driving", title: "Car & Winter Driving", titleZh: "买车与冬季驾驶", icon: "🚗", description: "买二手车、保险、冬胎和冬季驾驶基础。" },
  { slug: "cost-of-living", title: "Cost of Living", titleZh: "生活成本", icon: "💰", description: "房租、食品、交通、电话等日常预算工具与指南。" },
  { slug: "student-life", title: "Student Life", titleZh: "留学生生活", icon: "🎓", description: "SIN、电话卡、住宿、打工和校园生活入门。" },
  { slug: "documents", title: "Documents", titleZh: "文件办理", icon: "📄", description: "常见证件、号码、银行和生活文件的准备清单。" },
  { slug: "customs-travel", title: "Customs & Travel", titleZh: "入境与旅行", icon: "🧳", description: "入境携带物品、旅行准备和官方信息核对提醒。" },
];

export const tools: Tool[] = [
  { slug: "monthly-cost-calculator", title: "Canada Monthly Cost Calculator", titleZh: "加拿大月生活成本计算器", category: "cost-of-living", description: "输入房租、食品、交通等项目，快速估算每月和每年生活成本。" },
  { slug: "newcomer-checklist", title: "Newcomer First Month Checklist", titleZh: "加拿大新移民第一个月清单", category: "documents", description: "按阶段勾选抵达前、第一周、第一个月、住房、银行、学校等事项。" },
  { slug: "ontario-grade-estimator", title: "Ontario Grade Estimator", titleZh: "安省年级估算器", category: "school", description: "根据孩子出生年份和目标入学年份，粗略估算可能对应的 Ontario 年级。" },
  { slug: "ontario-school-registration-checklist", title: "Ontario School Registration Checklist", titleZh: "安省学校注册文件清单", category: "school", description: "按文件类别勾选安省孩子学校注册常见准备事项。" },
];

export const guides: Guide[] = [
  {
    slug: "newcomer-monthly-cost-canada",
    title: "加拿大新移民第一个月生活成本大概需要多少钱？",
    category: "cost-of-living",
    updated: "2026-06-12",
    readingTime: "14 分钟",
    excerpt: "用 Thunder Bay、Toronto/GTA 和安省小城市家庭案例，区分每月固定开支和第一个月一次性安置成本。",
    summary: [
      "以下为一般参考：单人留学生第一个月常见现金需求可能约为 CAD 2,800–5,500；单人工作人士可能约为 CAD 3,500–7,000；三口之家可能约为 CAD 7,000–14,000，城市差异很大。",
      "第一个月通常比平时更贵，因为房租押金、临时住宿、床具厨具、冬衣、交通卡或车辆准备等支出会集中出现。",
      "建议把每月固定支出、一次性安置成本和应急金分开计算，再用本网站工具做个性化估算，并以官方信息和实际报价为准。",
    ],
    sources: [
      { label: "Government of Canada - Living in Canada", href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada.html", description: "加拿大政府面向新移民的生活信息入口。" },
      { label: "Service Canada", href: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html", description: "SIN、福利和联邦服务相关信息入口。" },
      { label: "CBSA - Travel and border", href: "https://www.cbsa-asfc.gc.ca/travel-voyage/menu-eng.html", description: "入境、申报和边境相关官方信息。" },
    ],
    relatedTools: ["monthly-cost-calculator", "newcomer-checklist"],
    sections: [
      {
        heading: "快速结论：先按三类钱来准备",
        body: [
          "新移民或留学生做预算时，不建议只问“一个月多少钱”。更实用的做法是把钱分成三类：每月固定支出、第一月一次性安置成本、以及应急缓冲。这样即使城市、住房和家庭情况不同，也能快速发现压力最大的项目。",
          "如果你已经在加拿大租好房、带齐冬衣、学校或雇主已经安排部分事项，第一月成本会低很多；如果需要临时住宿、找房、买家具或买车，第一月现金需求会明显上升。以下数字不是报价承诺，只适合作为出发前和落地初期的预算框架。",
        ],
        table: {
          headers: ["用户场景", "平时每月固定支出参考", "第一个月现金需求参考", "主要变量"],
          rows: [
            ["Thunder Bay 单人留学生", "CAD 1,400–2,300", "CAD 2,800–4,800", "合租房租、是否住校外、冬衣和床具厨具"],
            ["Toronto/GTA 单人留学生", "CAD 2,100–3,600", "CAD 4,000–7,000", "房租、通勤距离、临时住宿天数"],
            ["Ontario 小城市三口之家", "CAD 3,800–6,000", "CAD 7,000–11,000", "两居室房租、孩子用品、是否买车"],
            ["GTA 三口之家", "CAD 5,000–8,500+", "CAD 9,000–14,000+", "住房位置、车险、托育或课后活动"],
          ],
        },
      },
      {
        heading: "这个指南适合谁？",
        body: [
          "这篇指南主要适合准备来加拿大的中文留学生、新移民家庭、拿到工作机会准备登陆的人，以及正在比较城市生活成本的人。它不替代移民、税务、法律或财务建议，也不能覆盖每个省市的特殊规则。",
          "如果你已经确定城市，可以把本文当作第一版预算，再逐项向房东、学校、银行、电信公司、保险经纪或政府官网确认。对住房押金、SIN、健康卡、学校注册、入境申报等事项，建议优先查看官方页面。",
        ],
      },
      {
        heading: "第一个月为什么比平时更贵？",
        body: [
          "平时生活成本主要是房租、食品、手机、交通和水电网等重复开支；第一个月还会叠加一次性费用。例如临时酒店或 Airbnb、首月房租、最后一个月房租或押金、床垫被子、锅碗瓢盆、插排、冬靴、手机开通费、交通卡押金、证件照片、搬家交通等。",
          "对家庭来说，还可能有儿童安全座椅、学习用品、校车或公交安排、冬季衣物、家庭医生或药品准备等。对计划开车的人来说，保险、车辆检查、冬胎和基础车用物品可能让第一月预算明显提高。",
        ],
        table: {
          headers: ["费用类型", "是否每月重复", "常见说明"],
          rows: [
            ["房租、水电网、手机、食品、交通", "通常重复", "用于估算长期每月现金流"],
            ["床具、厨具、冬衣、搬家、证件照片", "多为一次性", "第一个月集中发生，之后不一定重复"],
            ["押金、首末月房租、临时住宿", "视住房情况", "不同省份和房东要求不同，应查看当地规则和租约"],
            ["应急资金", "建议长期保留", "用于航班延误、找房时间拉长、医疗或交通突发情况"],
          ],
        },
      },
      {
        heading: "主要开支项目：从房租到冬季用品",
        body: [
          "房租通常是最大支出。合租房间、地下室、一居室、两居室和独立屋价格差异很大；城市中心、学校附近和公交便利区域通常更贵。没有加拿大信用记录时，房东可能更关注收入证明、录取信、工作信、银行余额或推荐信。",
          "手机和网络建议先选择灵活方案，避免在不了解覆盖和合约条款时签长期计划。食品方面，自己做饭、查看 flyer、比较单位价格和使用会员价通常能降低成本。交通方面，没有车时要考虑公交月票和住处位置；有车时要把保险、油费、停车、维修和冬胎都算进去。",
          "如果在秋冬抵达加拿大，冬衣、雪靴、手套、帽子、保暖袜和室内加湿用品可能是必要开支。带孩子的家庭还要预留学校注册、午餐盒、书包、文具、冬季外套和课后活动等费用。",
        ],
      },
      {
        heading: "示例预算表：四种常见场景",
        body: [
          "下面示例是为了帮助你建立预算结构，不代表具体城市的实时价格。实际金额会受到租房位置、是否合租、是否有车、是否带孩子、是否需要临时住宿和购买家具等因素影响。建议用这些行项目复制到自己的表格里，再填入真实报价。",
        ],
        table: {
          headers: ["项目", "Thunder Bay 单人留学生", "Toronto 单人留学生", "安省小城市三口之家", "GTA 三口之家"],
          rows: [
            ["每月房租/住房", "800–1,200", "1,300–2,300", "1,800–2,800", "2,800–4,500+"],
            ["水电网手机", "120–250", "150–300", "300–550", "350–650"],
            ["食品日用品", "350–550", "450–750", "900–1,400", "1,100–1,800"],
            ["交通/车相关", "80–250", "150–450", "400–1,000", "500–1,300+"],
            ["第一月一次性安置", "800–2,000", "1,200–3,000", "2,000–4,000", "2,500–5,000+"],
          ],
        },
      },
      {
        heading: "如何降低第一个月成本？",
        body: [
          "第一，优先确定安全稳定的临时住宿和通信方式，不要急着一次性买齐所有家具。很多生活用品可以先买基础款，等熟悉城市后再升级。第二，租房时比较总成本，而不只看房租：通勤、暖气、电费、洗衣、停车和网络都可能影响实际支出。",
          "第三，留学生可以关注学校的住宿办公室、学生会、二手群和校园资源；家庭可以提前联系当地教育局了解注册文件，减少到达后反复补材料的时间成本。第四，购物前列清单，先买必需品，非紧急物品等打折或二手渠道。",
        ],
      },
      {
        heading: "常见误区",
        body: [
          "误区一：只准备一个月房租。实际落地时可能还需要押金、临时住宿和基础用品。误区二：用大城市价格判断所有加拿大城市，或用小城市价格低估 Toronto/GTA、Vancouver 等高房租地区。误区三：忽略冬季准备，特别是第一次在加拿大过冬的人。",
          "误区四：看到网上单个案例就直接套用。不同省份规则、房源、家庭人数和消费习惯差异很大，重要事项应进一步确认，并保留截图、合同或官方链接。",
        ],
      },
      {
        heading: "相关工具和可信信息来源",
        body: [
          "你可以先用月生活成本计算器估算长期固定支出，再用新移民第一个月清单检查抵达前后事项。涉及官方流程时，建议查看加拿大政府、Service Canada、CBSA、省政府、城市交通机构、学校或教育局官网。",
        ],
        links: [
          { label: "使用月生活成本计算器", href: "/tools/monthly-cost-calculator" },
          { label: "查看新移民第一个月清单", href: "/tools/newcomer-checklist" },
          { label: "Service Canada", href: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html" },
          { label: "CBSA 入境信息", href: "https://www.cbsa-asfc.gc.ca/travel-voyage/menu-eng.html" },
        ],
      },
    ],
    checklist: [
      "把每月固定支出和第一月一次性安置成本分开列预算",
      "至少比较 2–3 个真实房源，确认房租包含哪些费用",
      "确认手机、网络、交通或车险的实际报价和合同条款",
      "如果秋冬抵达，为冬衣、雪靴或车用冬季物品留出预算",
      "准备一笔应急资金，并保留重要合同、收据和官方链接",
    ],
    related: ["renting-without-credit-history", "canada-phone-plan-guide", "grocery-saving-canada"],
  },
  {
    slug: "thunder-bay-newcomer-cost",
    title: "Thunder Bay 新移民生活成本参考",
    category: "cost-of-living",
    updated: "2026-06-12",
    readingTime: "8 分钟",
    excerpt: "以 Thunder Bay 单人留学生和小家庭为例，整理房租、食品、交通、电话网络和第一月安置预算。",
    summary: [
      "Thunder Bay 的总体生活成本通常低于 Toronto/GTA，但仍要重点准备房租、冬季用品、食品和交通预算。",
      "单人合租或校外租房每月现金流可先按 CAD 1,400–2,300 做保守估算；第一月因为安置用品和押金可能更高。",
      "以下为一般参考，具体金额应以真实房源、学校信息、公交票价和个人消费习惯为准。",
    ],
    sections: [
      { heading: "适合谁参考？", body: ["这篇文章适合计划到 Thunder Bay 上学、工作或陪读的新移民家庭。小城市生活节奏相对稳定，但冬季较长，住房位置、是否需要车、离学校或工作地点的距离会显著影响预算。"] },
      {
        heading: "主要月度支出参考",
        body: ["Thunder Bay 生活成本的关键是住房和交通。住得离学校或工作地点近，可以减少通勤压力；如果住处离公交不方便，买车、保险、油费和冬胎会让总预算明显增加。"],
        table: {
          headers: ["项目", "单人参考", "两到三口之家参考", "说明"],
          rows: [
            ["房租/住房", "CAD 800–1,300", "CAD 1,600–2,600", "合租、地下室、公寓和整租差异较大"],
            ["食品日用品", "CAD 350–550", "CAD 800–1,300", "自己做饭、看 flyer 和会员价会影响较大"],
            ["电话网络", "CAD 60–140", "CAD 120–250", "先选灵活方案，确认覆盖后再长期签约"],
            ["交通", "CAD 80–250", "CAD 250–900", "公交、打车、买车和车险差异很大"],
            ["冬季准备", "CAD 300–900", "CAD 600–1,800", "冬衣、雪靴、手套、车辆冬季用品"],
          ],
        },
      },
      { heading: "第一月特别要预留什么？", body: ["第一月常见额外支出包括临时住宿、首月房租、可能的押金或末月房租、床具、锅具、基础家具、冬季衣物和交通安排。建议先列必需品，不要到达当天一次性购买所有非紧急物品。"] },
      { heading: "下一步怎么做", body: ["先用本站月生活成本计算器填入自己的房租、食品、手机和交通预算，再对照新移民第一个月清单安排抵达前后事项。"], links: [{ label: "使用月生活成本计算器", href: "/tools/monthly-cost-calculator" }, { label: "查看新移民第一个月清单", href: "/tools/newcomer-checklist" }, { label: "阅读加拿大第一个月生活成本总览", href: "/guides/newcomer-monthly-cost-canada" }] },
    ],
    checklist: ["确认真实房源价格和包含费用", "估算公交或买车总成本", "为冬季衣物和用品预留预算", "把第一月一次性开支单独列出", "以学校、房东、公交和官方信息为准"],
    related: ["newcomer-monthly-cost-canada", "student-monthly-living-cost-canada", "renting-without-credit-history"],
  },
  {
    slug: "toronto-newcomer-cost",
    title: "Toronto 新移民生活成本参考",
    category: "cost-of-living",
    updated: "2026-06-12",
    readingTime: "8 分钟",
    excerpt: "用 Toronto/GTA 场景拆解房租、通勤、食品、手机网络和第一月预算，帮助新人避免低估成本。",
    summary: ["Toronto/GTA 最大变量通常是住房位置和通勤方式。", "单人预算建议把房租、交通和临时住宿分开算，家庭还要考虑孩子、车险和停车。", "价格变化很快，本文只作预算框架，签约前应核对真实报价。"],
    sections: [
      { heading: "为什么 Toronto 要单独做预算？", body: ["Toronto 和 GTA 的房租、通勤时间、停车、车险和生活便利度差异很大。同样是一居室或合租，地铁沿线、学校附近、郊区和需要开车的位置，总成本可能完全不同。"] },
      { heading: "常见预算区间", body: ["以下数字用于出发前做保守预算，不代表实时市场价格。建议至少查看多个真实房源，并把交通、网络、水电和临时住宿加进总成本。"], table: { headers: ["场景", "平时每月参考", "第一月现金需求参考", "主要风险"], rows: [["单人合租", "CAD 2,100–3,200", "CAD 4,000–6,500", "临时住宿、押金、通勤距离"], ["单人一居/Studio", "CAD 2,800–4,500", "CAD 5,500–9,000", "房租高、家具和网络开通"], ["三口之家", "CAD 5,000–8,500+", "CAD 9,000–14,000+", "两居室、车险、孩子用品、停车"]] } },
      { heading: "租房和通勤要一起看", body: ["房租便宜不一定总成本低。如果通勤需要长时间公交、GO Transit 或开车，月票、油费、停车和时间成本都要算进去。看房时建议记录离学校、工作地点、超市、诊所和公交站的距离。"] },
      { heading: "相关工具", body: ["如果你还不确定城市，可以先阅读全国第一月生活成本指南，再用计算器建立自己的版本。"], links: [{ label: "加拿大第一个月生活成本总览", href: "/guides/newcomer-monthly-cost-canada" }, { label: "月生活成本计算器", href: "/tools/monthly-cost-calculator" }, { label: "加拿大租房看房清单", href: "/guides/canada-rental-viewing-checklist" }] },
    ],
    checklist: ["至少比较 3–5 个真实房源", "把通勤费用和时间加入预算", "确认房租是否含水电暖网", "不要忽略临时住宿费用", "重要条款写入租约"],
    related: ["newcomer-monthly-cost-canada", "canada-rental-deposit-first-month-rent", "canada-rental-viewing-checklist"],
  },
  {
    slug: "student-monthly-living-cost-canada",
    title: "留学生在加拿大每月生活费大概多少？",
    category: "cost-of-living",
    updated: "2026-06-12",
    readingTime: "7 分钟",
    excerpt: "按住宿、食品、手机、交通、教材和冬季用品拆解留学生月生活费预算。",
    summary: ["留学生月生活费通常受城市、住宿方式和是否自己做饭影响最大。", "做预算时应把学费之外的房租、食品、电话、交通、教材、保险和冬季用品分开。", "校内资源、合租和清单购物通常能帮助控制成本。"],
    sections: [
      { heading: "先区分学费和生活费", body: ["很多留学生只看学费，却低估了住宿、食品、交通、手机、教材、衣物和临时支出。建议把学费、固定月支出和第一月安置成本分成三张表。"] },
      { heading: "月生活费组成", body: ["以下为一般预算框架。学校所在城市、是否住校、是否合租、是否买公交月票和是否经常外食都会影响实际金额。"], table: { headers: ["项目", "低预算参考", "常见参考", "提醒"], rows: [["住宿", "CAD 700–1,100", "CAD 1,100–2,300+", "学校宿舍、合租和大城市差异很大"], ["食品", "CAD 300–450", "CAD 450–750", "自己做饭通常更可控"], ["手机/网络", "CAD 40–100", "CAD 70–160", "确认是否已包含在房租或宿舍费中"], ["交通", "CAD 0–120", "CAD 120–250", "查看学校公交 U-Pass 或城市月票"], ["教材和杂费", "CAD 30–150", "CAD 100–300", "可考虑二手书和图书馆资源"]] } },
      { heading: "第一月为什么容易超支？", body: ["刚到加拿大时可能需要床品、厨具、冬衣、SIM 卡、交通卡、临时住宿和证件办理相关小额费用。建议带一笔独立于学费的缓冲金，不要把所有预算都压在房租上。"] },
      { heading: "相关下一步", body: ["办理 SIN、找兼职、选择手机套餐和租房都会影响留学生预算。涉及学校政策和工作资格时，请以学校和政府官方信息为准。"], links: [{ label: "留学生办理 SIN", href: "/guides/student-sin-canada" }, { label: "兼职简历怎么写", href: "/guides/canada-part-time-resume" }, { label: "月生活成本计算器", href: "/tools/monthly-cost-calculator" }] },
    ],
    checklist: ["确认住宿是否含水电网", "查看学校交通福利", "为第一月用品预留预算", "记录每周食品支出", "重要规则以学校和官方信息为准"],
    related: ["thunder-bay-newcomer-cost", "toronto-newcomer-cost", "canada-phone-plan-guide"],
  },
  {
    slug: "canada-rental-deposit-first-month-rent",
    title: "加拿大租房押金和首月房租怎么理解？",
    category: "renting",
    updated: "2026-06-12",
    readingTime: "7 分钟",
    excerpt: "解释首月房租、末月房租、押金、钥匙押金和租约付款安排的常见区别。",
    summary: ["租房付款规则可能因省份不同而不同，签约前应确认当地法规和租约条款。", "不要只问月租，还要问入住前需要支付哪些款项、是否可退、何时退。", "所有付款建议保留收据和书面记录。"],
    sections: [
      { heading: "常见付款项目", body: ["加拿大不同省份对押金、末月房租和其他费用有不同规则。新人租房时常见的词包括 first month rent、last month rent、security deposit、key deposit 和 application fee。不要默认所有城市都一样。"] },
      { heading: "看懂付款表", body: ["签约前可以请房东或物业写清楚入住前、入住当天和每月固定需要支付的金额。下面表格帮助你提问。"], table: { headers: ["项目", "常见含义", "需要确认"], rows: [["首月房租", "入住第一个月租金", "是否签约时支付、覆盖哪段日期"], ["末月房租", "部分地区常见，用于最后一个月", "是否符合法规、是否计息或抵扣"], ["押金", "可能用于损坏或其他约定", "当地是否允许、金额上限、退款条件"], ["钥匙/门禁押金", "用于钥匙、门禁卡等", "金额是否合理、退还时间"], ["水电网停车", "可能另付", "是否包含在房租里" ]] } },
      { heading: "降低风险的做法", body: ["付款前确认对方身份、房源真实性和租约条款。不要向无法核实的人转大额款项。尽量使用可追踪付款方式，保存广告截图、沟通记录、租约和收据。"] },
      { heading: "延伸阅读", body: ["如果你还没有本地信用记录，可以先准备材料再看房；如果已开始看房，可使用看房清单逐项确认。"], links: [{ label: "没有加拿大信用记录如何租房", href: "/guides/renting-without-credit-history" }, { label: "加拿大租房看房清单", href: "/guides/canada-rental-viewing-checklist" }, { label: "第一个月生活成本", href: "/guides/newcomer-monthly-cost-canada" }] },
    ],
    checklist: ["问清入住前总付款", "确认每笔费用是否可退", "查看当地租房规则", "保留付款记录", "不要向不可核实对象转账"],
    related: ["renting-without-credit-history", "canada-rental-viewing-checklist", "canada-rental-lease-things-to-check"],
  },
  {
    slug: "canada-rental-viewing-checklist",
    title: "加拿大租房看房清单",
    category: "renting",
    updated: "2026-06-12",
    readingTime: "6 分钟",
    excerpt: "看房时检查位置、安全、费用、取暖、洗衣、停车、网络和租约细节。",
    summary: ["看房不要只看照片和月租，要同时检查房屋状态、费用包含项、交通和安全。", "建议现场拍照记录问题，并把承诺写进租约或邮件。"],
    sections: [
      { heading: "看房前先筛选", body: ["确认房源地址大致位置、到学校或工作的通勤方式、是否包含水电暖网、入住时间、租期和是否允许宠物。价格明显低于市场时要特别谨慎。"] },
      { heading: "现场检查清单", body: ["看房时尽量白天去，检查门窗、地面、墙面、插座、水压、热水、取暖、烟雾报警器、洗衣设施、垃圾处理、停车和网络覆盖。"], table: { headers: ["检查项", "为什么重要", "可问的问题"], rows: [["取暖/空调", "加拿大冬季舒适度和费用", "房租是否含暖气？温控在哪里？"], ["水电网", "影响实际月支出", "哪些费用另付？历史账单大概多少？"], ["洗衣", "影响日常便利", "室内、楼内还是附近 laundromat？"], ["交通/停车", "影响时间和成本", "公交多久一班？停车是否收费？"], ["安全", "新人尤其需要关注", "门锁、照明、入口和周边环境如何？"]] } },
      { heading: "看完后怎么比较", body: ["建议用同一张表比较 3 个以上房源，把房租、额外费用、通勤时间、入住成本和风险备注放在一起看，而不是只选月租最低的。"] },
      { heading: "相关页面", body: ["看房后通常会进入付款和签约阶段，建议继续阅读押金和租约注意事项。"], links: [{ label: "租房押金和首月房租", href: "/guides/canada-rental-deposit-first-month-rent" }, { label: "租房合同注意事项", href: "/guides/canada-rental-lease-things-to-check" }, { label: "新移民第一个月清单", href: "/tools/newcomer-checklist" }] },
    ],
    checklist: ["白天看房并确认地址", "问清水电暖网停车", "检查取暖、门窗、水压和洗衣", "记录问题并拍照", "比较总成本而不是只看房租"],
    related: ["canada-rental-deposit-first-month-rent", "canada-rental-lease-things-to-check", "renting-without-credit-history"],
  },
  {
    slug: "canada-rental-lease-things-to-check",
    title: "加拿大租房合同需要注意什么？",
    category: "renting",
    updated: "2026-06-12",
    readingTime: "7 分钟",
    excerpt: "签租约前核对租期、租金、包含费用、押金、维修、转租、提前搬走和室友责任。",
    summary: ["租约是租房关系的核心文件，口头承诺应尽量写入合同或邮件。", "签字前要确认金额、日期、费用包含项、维修责任和提前结束租约的规则。", "涉及权利义务时应查看当地官方租房信息或咨询专业人士。"],
    sections: [
      { heading: "签约前先确认基础信息", body: ["核对房东或物业名称、房屋地址、租期开始和结束日期、每月租金、付款方式、押金或末月房租安排、包含费用和额外费用。任何让你不理解的条款，都应在签字前问清。"] },
      { heading: "重点条款清单", body: ["不同省份可能有标准租约或特定规则。以下问题适合签约前逐项确认。"], table: { headers: ["条款", "要确认什么", "新人提醒"], rows: [["租期", "固定租期还是月租", "提前搬走可能有责任"], ["费用", "水电暖网停车是否包含", "总成本比月租更重要"], ["维修", "谁负责报修、多久处理", "入住前拍照记录状态"], ["室友", "共同签约还是单独租房", "共同责任可能影响押金和欠租"], ["转租/提前退租", "是否允许、流程是什么", "不要只听口头承诺"]] } },
      { heading: "签约后保留哪些记录", body: ["保存租约 PDF 或照片、付款收据、房屋入住状态照片、钥匙交接记录和与房东的重要沟通。将来如果出现维修或费用争议，这些记录会更有帮助。"] },
      { heading: "相关指南", body: ["如果你还在看房阶段，先用看房清单筛选；如果已经准备付款，先理解押金和首月房租。"], links: [{ label: "加拿大租房看房清单", href: "/guides/canada-rental-viewing-checklist" }, { label: "租房押金和首月房租", href: "/guides/canada-rental-deposit-first-month-rent" }, { label: "月生活成本计算器", href: "/tools/monthly-cost-calculator" }] },
    ],
    checklist: ["核对租期、金额和地址", "确认费用包含项", "理解维修和提前搬走条款", "入住前拍照", "保存租约和付款记录"],
    related: ["canada-rental-viewing-checklist", "canada-rental-deposit-first-month-rent", "renting-without-credit-history"],
  },
  {
    slug: "renting-without-credit-history",
    title: "没有加拿大信用记录如何租房？",
    category: "renting",
    updated: "2026-06-12",
    readingTime: "8 分钟",
    excerpt: "了解无本地信用记录时可准备的材料、沟通方式、看房策略和付款风险。",
    summary: ["没有加拿大信用记录并不代表不能租房，但需要更清楚地证明身份、支付能力和入住计划。", "可以准备录取信、工作信、银行余额、推荐信或担保信息，但不要过度提供敏感资料。", "重要条款应写入租约，涉及押金和预付款时应查看当地规则。"],
    sections: [
      { heading: "房东通常担心什么？", body: ["房东或物业通常希望确认你能按时付款、会遵守租约、身份和入住人数真实。新移民或留学生没有本地信用记录时，可以用其他可核验材料帮助对方理解你的情况。"] },
      { heading: "可准备的材料", body: ["材料越清晰，沟通越顺畅；但也要注意保护隐私，不要把 SIN、完整银行账号或过多身份证件随意发给陌生人。"], table: { headers: ["材料", "适用场景", "注意"], rows: [["身份证明", "确认姓名和身份", "遮盖不必要号码，谨慎发送"], ["录取信/工作信", "学生或新工作人士", "用于说明来加目的和城市"], ["银行余额或资金证明", "证明支付能力", "可遮盖账号，只保留必要信息"], ["推荐信", "有海外租房或雇主推荐时", "不一定每个房东接受"], ["共同签约/担保", "家庭或学生场景", "要理解共同责任"]] } },
      { heading: "沟通方式", body: ["说明自己刚到加拿大、暂无本地信用记录，并主动提供可核验材料清单。不要急着承诺超出预算的预付款，重要条款应写入租约或邮件。"] },
      { heading: "下一步", body: ["找到意向房源后，继续用看房清单核对房屋状态，并确认押金、首月房租和租约条款。"], links: [{ label: "加拿大租房看房清单", href: "/guides/canada-rental-viewing-checklist" }, { label: "租房押金和首月房租", href: "/guides/canada-rental-deposit-first-month-rent" }, { label: "月生活成本计算器", href: "/tools/monthly-cost-calculator" }] },
    ],
    checklist: ["准备身份证明", "准备资金或收入证明", "说明无本地信用记录的原因", "阅读租约", "确认押金和预付款规则"],
    related: ["canada-rental-deposit-first-month-rent", "canada-rental-viewing-checklist", "newcomer-monthly-cost-canada"],
  },
  { slug: "canada-part-time-resume", title: "加拿大兼职工作简历怎么写？", category: "jobs", updated: "2026-06-09", readingTime: "5 分钟", excerpt: "适合留学生和新人找兼职的英文简历结构。", summary: ["兼职简历应简洁、突出可用时间和相关经验。"], sections: [{ heading: "简历重点", body: ["建议控制在一页，包含联系方式、可工作时间、技能、工作或志愿经历。避免写过多与岗位无关的信息。"] }], checklist: ["一页简历", "写清可工作时间", "突出沟通和服务经验"], related: ["student-sin-canada"] },
  { slug: "ontario-school-registration-documents", title: "安省孩子上学注册需要哪些文件？", category: "school", updated: "2026-06-08", readingTime: "6 分钟", excerpt: "安省孩子入学注册常见文件清单。", summary: ["不同教育局要求可能不同，以下为一般参考。"], sections: [{ heading: "常见文件", body: ["一般可能包括孩子身份证明、住址证明、监护人信息、疫苗记录和移民身份相关文件。请以当地教育局官方要求为准。"] }], checklist: ["查找对应教育局", "准备住址证明", "整理疫苗记录"], related: ["newcomer-first-month-checklist"] },
  { slug: "winter-driving-first-time-canada", title: "加拿大冬天第一次开车要注意什么？", category: "car-winter-driving", updated: "2026-06-07", readingTime: "7 分钟", excerpt: "冬胎、除雪、车距和应急用品基础指南。", summary: ["冬季驾驶风险更高，建议提前练习并关注天气。"], sections: [{ heading: "基础准备", body: ["建议检查冬胎、雨刷、防冻液和电瓶。车内可放雪刷、手套、毯子、充电线和少量应急食品。"] }], checklist: ["安装或检查冬胎", "准备雪刷", "查看天气和路况"], related: ["used-car-checklist-canada"] },
  { slug: "student-sin-canada", title: "留学生在加拿大如何办理 SIN？", category: "student-life", updated: "2026-06-06", readingTime: "5 分钟", excerpt: "SIN 用途、办理渠道和注意事项的一般说明。", summary: ["SIN 涉及个人敏感信息，应妥善保管。"], sections: [{ heading: "SIN 是什么", body: ["SIN 通常用于工作和税务相关场景。办理资格和材料请以 Service Canada 官方信息为准。不要随意把 SIN 发给不可信对象。"] }], checklist: ["查看 Service Canada 要求", "准备学习许可等材料", "妥善保存 SIN"], related: ["canada-part-time-resume"] },
  { slug: "canada-phone-plan-guide", title: "加拿大手机套餐如何选择？", category: "documents", updated: "2026-06-05", readingTime: "5 分钟", excerpt: "比较预付费、合约、流量和覆盖范围。", summary: ["先看覆盖、流量需求和是否需要合约。"], sections: [{ heading: "选择思路", body: ["新人可以先选择灵活的预付费或月付方案，等稳定后再比较长期优惠。注意是否包含开通费、自动扣款和国际通话。"] }], checklist: ["确认覆盖范围", "估算流量", "比较总价和合约条款"], related: ["newcomer-monthly-cost-canada"] },
  { slug: "used-car-checklist-canada", title: "买二手车前应该检查什么？", category: "car-winter-driving", updated: "2026-06-04", readingTime: "7 分钟", excerpt: "二手车历史、试驾、保险和第三方检查。", summary: ["买车前建议做车辆历史和机械检查。"], sections: [{ heading: "检查重点", body: ["查看车况报告、保养记录、轮胎刹车、锈蚀和仪表盘警示灯。价格较高时，建议找可信技师做购前检查。"] }], checklist: ["查看车辆历史", "试驾", "报价保险", "安排机械检查"], related: ["winter-driving-first-time-canada"] },
  { slug: "grocery-saving-canada", title: "加拿大超市购物如何省钱？", category: "cost-of-living", updated: "2026-06-03", readingTime: "5 分钟", excerpt: "用传单、会员价、冷冻食品和清单购物控制预算。", summary: ["食品支出可通过计划和比价降低。"], sections: [{ heading: "实用方法", body: ["购物前列清单，查看每周 flyer，比较会员价和大包装单价。冷冻蔬菜、豆类和当季食材通常更容易控制成本。"] }], checklist: ["看 flyer", "列购物清单", "比较单位价格"], related: ["newcomer-monthly-cost-canada"] },
  { slug: "china-to-canada-customs-items", title: "从中国入境加拿大哪些物品需要特别注意？", category: "customs-travel", updated: "2026-06-02", readingTime: "6 分钟", excerpt: "食品、药品、现金和申报事项的一般提醒。", summary: ["入境规则可能更新，务必以 CBSA 官方信息为准。"], sections: [{ heading: "需要谨慎的物品", body: ["食品、植物、肉类、药品、大额现金和商业用途物品需要特别注意。以下不是法律建议，出发前应查询 CBSA 官方页面。"] }], checklist: ["查询 CBSA 官方信息", "保留药品说明", "如实申报"], related: ["newcomer-monthly-cost-canada"] },
];

export function getCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
export function getTool(slug: string) { return tools.find((tool) => tool.slug === slug); }
export function guidesByCategory(slug: string) { return guides.filter((guide) => guide.category === slug); }
export function toolsByCategory(slug: string) { return tools.filter((tool) => tool.category === slug); }

export const firstContentClusterSlugs = [
  "newcomer-monthly-cost-canada",
  "thunder-bay-newcomer-cost",
  "toronto-newcomer-cost",
  "student-monthly-living-cost-canada",
  "renting-without-credit-history",
  "canada-rental-deposit-first-month-rent",
  "canada-rental-viewing-checklist",
  "canada-rental-lease-things-to-check",
] as const;

export function firstContentClusterGuides() {
  return firstContentClusterSlugs.map((slug) => getGuide(slug)).filter((guide): guide is Guide => Boolean(guide));
}
