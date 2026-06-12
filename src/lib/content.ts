export type Category = {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  icon: string;
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  updated: string;
  readingTime: string;
  excerpt: string;
  summary: string[];
  sections: { heading: string; body: string[] }[];
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
    readingTime: "8 分钟",
    excerpt: "用实际预算类别了解新移民第一个月常见支出，包含房租、押金、交通、电话和基本生活用品。",
    summary: [
      "以下为一般参考，城市、家庭人数和生活方式会明显影响预算。",
      "第一个月通常会有一次性支出，例如租房押金、家具、冬衣或交通卡。",
      "建议把固定支出、一次性支出和应急金分开规划，并以官方或服务商信息为准。",
    ],
    sections: [
      { heading: "为什么第一个月通常更贵？", body: ["刚到加拿大时，很多支出并不是每个月都会出现。例如租房可能需要首月租金和押金，手机套餐可能有开通费，购买床垫、厨具、冬衣、交通卡也会集中发生。", "如果是家庭一起登陆，还需要考虑孩子用品、学校注册材料、临时住宿和交通安排。以下金额不代表保证价格，只适合作为做预算前的框架。"] },
      { heading: "常见固定支出", body: ["固定支出通常包括房租、水电暖、手机、网络、食品、公共交通或车险油费。大城市市中心租金通常较高，合租或住在城市外围可能降低成本，但需要额外考虑通勤时间。", "食品预算也会因是否经常外食而变化。通常情况下，自己做饭会更容易控制开支。"] },
      { heading: "容易忽略的一次性支出", body: ["很多新人会忽略临时住宿、搬家交通、床上用品、基础厨具、插排、冬靴、药品和证件照片等小额项目。这些支出单项不大，但加起来可能影响现金流。", "建议为第一个月单独准备一笔缓冲资金，金额可以根据城市、家庭人数和是否已提前租房来调整。"] },
      { heading: "如何更稳妥地做预算", body: ["可以先用本网站的月生活成本计算器估算每月固定支出，再另列一次性启动成本。对房租、保险、学费或政府相关事项，建议进一步确认官方信息或直接联系服务机构。", "如果预算紧张，优先确保住房、食品、通信、交通和必要文件办理，非急需的大件物品可以分阶段购买。"] },
    ],
    checklist: ["列出首月租金、押金和临时住宿预算", "确认手机、网络和交通方案", "准备基础生活用品清单", "为冬季衣物或车用物品留出预算", "保留至少一笔应急资金"],
    related: ["canada-phone-plan-guide", "grocery-saving-canada", "renting-without-credit-history"],
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
