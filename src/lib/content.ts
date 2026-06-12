export type Category = {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  icon: string;
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
  name: "Canada Life Toolkit",
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
  { slug: "renting-without-credit-history", title: "没有加拿大信用记录如何租房？", category: "renting", updated: "2026-06-10", readingTime: "6 分钟", excerpt: "了解无本地信用记录时可准备的材料和沟通方式。", summary: ["房东通常关注收入稳定性、身份文件和支付能力。", "可以准备录取信、工作信、银行流水或推荐信作为辅助材料。"], sections: [{ heading: "可准备的材料", body: ["通常情况下，可以准备身份证明、学校录取信或雇主信、银行余额证明、过往租房推荐信等。不同房东和城市要求不同，建议提前询问。"] }, { heading: "沟通方式", body: ["说明自己刚到加拿大、暂无本地信用记录，并提供可核验材料。不要提供不必要的敏感信息，重要条款应写入租约。"] }], checklist: ["准备身份证明", "准备资金或收入证明", "阅读租约", "确认押金规则"], related: ["newcomer-monthly-cost-canada"] },
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
