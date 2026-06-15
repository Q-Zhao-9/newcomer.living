export type SchoolProvince = "ontario" | "british-columbia" | "alberta" | "manitoba";

export type SchoolStage = "child-care" | "kindergarten" | "elementary" | "high-school" | "general";

export type SchoolSource = {
  title: string;
  publisher: string;
  url: string;
};

export type SchoolGuide = {
  title: string;
  slug: string;
  category: "school";
  province?: SchoolProvince;
  stage?: SchoolStage;
  description: string;
  updatedAt: string;
  readingTime: string;
  summary: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  checklist?: string[];
  warnings?: string[];
  sources?: SchoolSource[];
  relatedGuides?: string[];
  relatedTools?: string[];
};

export const schoolProvinces: Record<SchoolProvince, { name: string; nameZh: string; href?: string; active: boolean }> = {
  ontario: { name: "Ontario", nameZh: "安省", href: "/school/ontario", active: true },
  "british-columbia": { name: "British Columbia", nameZh: "BC 省", active: false },
  alberta: { name: "Alberta", nameZh: "阿尔伯塔省", active: false },
  manitoba: { name: "Manitoba", nameZh: "曼尼托巴省", active: false },
};

export function guidesForProvince(province: SchoolProvince) {
  return schoolGuides.filter((guide) => guide.province === province);
}

export function toolsForCategory(category: "school") {
  return schoolTools.filter((tool) => tool.category === category);
}

export const schoolStageCards = [
  {
    title: "Preschool / Child Care",
    titleZh: "托儿与学前阶段",
    description: "了解 daycare、child care、等待名单和费用补助的一般概念。",
    href: "/school/ontario",
  },
  {
    title: "Kindergarten",
    titleZh: "幼儿园",
    description: "安省通常有 Junior Kindergarten 和 Senior Kindergarten，入学年龄与教育局规则有关。",
    href: "/school/ontario/school-system",
  },
  {
    title: "Elementary School",
    titleZh: "小学阶段",
    description: "从住址对应学校、注册文件到 ESL 支持，帮助家长先建立框架。",
    href: "/school/ontario/registration-documents",
  },
  {
    title: "High School",
    titleZh: "高中阶段",
    description: "了解学分、必修课、选课和毕业要求，避免只按中国年级经验判断。",
    href: "/school/ontario/school-system",
  },
];

export const parentQuestions = [
  {
    question: "孩子应该上几年级？",
    answer: "先用出生日期和当年入学年份做粗略估算，再以教育局或学校最终安排为准。",
    href: "/tools/ontario-grade-estimator",
  },
  {
    question: "注册学校需要什么文件？",
    answer: "通常会涉及身份证明、住址证明、学生身份文件、免疫记录等，具体由教育局确认。",
    href: "/school/ontario/registration-documents",
  },
  {
    question: "父母是学签/工签，孩子能上学吗？",
    answer: "资格与家庭身份、居住地和教育局规则有关，建议同时查看 IRCC 与本地教育局说明。",
    href: "/school/ontario/study-permit-for-children",
  },
  {
    question: "英语不好怎么办？",
    answer: "很多学校会评估英语水平并提供 ESL/ELL 支持，家长可以主动询问适应安排。",
    href: "/school/ontario/school-system",
  },
  {
    question: "Ontario Grade 9 怎么选课？",
    answer: "高中选课会影响未来 Grade 11/12 路径。新家庭应尽早联系 guidance counsellor。",
    href: "/school/ontario/school-system",
  },
  {
    question: "4U / 4M / 4C / 4E 是什么意思？",
    answer: "这些代码常见于安省高中课程路径，涉及大学、学院、混合或就业方向。",
    href: "/school/ontario/school-system",
  },
];

export const ontarioSchoolSources: SchoolSource[] = [
  {
    title: "Going to school in Ontario",
    publisher: "Ontario.ca",
    url: "https://www.ontario.ca/page/going-school-ontario",
  },
  {
    title: "Register your child for school",
    publisher: "Ontario.ca",
    url: "https://www.ontario.ca/page/register-your-child-school",
  },
  {
    title: "Find your school board",
    publisher: "Ontario.ca",
    url: "https://www.ontario.ca/page/find-school-board",
  },
  {
    title: "Minor children studying in Canada",
    publisher: "Immigration, Refugees and Citizenship Canada",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/minor-children.html",
  },
];

export const schoolTools = [
  {
    slug: "ontario-grade-estimator",
    title: "Ontario Grade Estimator",
    titleZh: "安省年级估算器",
    description: "根据孩子出生年份和目标入学年份，粗略估算可能对应的安省年级。",
    category: "school",
    href: "/tools/ontario-grade-estimator",
  },
  {
    slug: "ontario-school-registration-checklist",
    title: "Ontario School Registration Checklist",
    titleZh: "安省学校注册文件清单",
    description: "按文件类别勾选身份证明、住址证明、身份文件、免疫和学校沟通事项。",
    category: "school",
    href: "/tools/ontario-school-registration-checklist",
  },
];

export const schoolGuides: SchoolGuide[] = [
  {
    title: "Ontario 学校系统介绍：新移民家长入门指南",
    slug: "school-system",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "用中文解释 Ontario 中小学体系、school board、住址对应学校、幼儿园到高中阶段，以及新移民家长注册前需要先理解的关键概念。",
    updatedAt: "2026-06-13",
    readingTime: "13 分钟",
    summary: [
      "Ontario 的中小学教育主要由省级教育体系和本地 school boards 管理。家长通常需要先了解孩子所在地址对应的 school board、学校阶段、注册要求以及孩子身份相关要求。",
      "公立学校、天主教学校、法语学校和私立学校的管理方式、入学条件和费用安排可能不同，不建议只凭朋友经验判断。",
      "以下为一般信息参考。不同 school board 的流程和文件要求可能不同，实际注册前应查看本地 school board 官方页面，并以学校或教育局书面回复为准。",
    ],
    sections: [
      {
        heading: "快速结论：先弄清 school board，再看具体学校",
        body: [
          "Ontario 的基础教育不是由每一所学校完全独立决定。通常情况下，省级教育部门制定总体框架，本地 school board 负责具体学校、边界、注册流程、交通安排和部分项目。新移民家长最实用的第一步，不是直接问“哪所学校最好”，而是先确认家庭住址对应哪个 school board，以及该 school board 对新生注册的要求。",
          "很多 school board 会要求家长提供孩子身份证明、出生日期、住址证明、监护人信息、免疫记录和身份相关文件。高中阶段还可能需要过往成绩单、课程说明或英语水平评估。由于不同教育局和家庭身份可能不同，本文只帮助你建立基本框架，不替代教育局、学校或专业人士的判断。",
        ],
      },
      {
        heading: "这篇文章适合谁",
        body: [
          "这篇指南主要面向刚搬到 Ontario、准备带孩子注册学校的中文新移民家庭、留学生家庭、工签家庭、陪读家庭，以及正在比较住址和学校选择的家长。它适合在阅读注册文件清单、study permit 问题或年级估算工具之前先看一遍。",
          "如果你的孩子已经进入高中、涉及国际学生学费、特殊教育支持、监护人安排或复杂身份问题，建议把本文作为背景资料，同时直接联系对应 school board 或学校 registration office。涉及移民身份、学习许可、费用资格等问题时，应以 IRCC 和 school board 官方信息为准。",
        ],
      },
      {
        heading: "Ontario school system overview：安省学校系统如何大致运作",
        body: [
          "Ontario 的中小学通常包括 Kindergarten、Elementary School 和 Secondary/High School。孩子通常根据出生年份、过往学习经历和学校评估进入相应阶段。对于刚从中国或其他国家转来的孩子，学校可能会同时参考年龄、成绩单、英语能力和适应情况。",
          "省级层面会提供课程和教育政策框架，但家长日常接触更多的是 school board 和具体学校。School board 会管理辖区内学校、注册入口、校车或交通说明、特殊项目、语言支持、学校边界和家校沟通系统。实际操作时，家长通常需要在本地教育局网站上查找 registration、school locator、boundary map 或 newcomer information。",
        ],
      },
      {
        heading: "公立学校、天主教学校、法语学校、私立学校有什么基本区别",
        body: [
          "Ontario 常见的学校类型包括 English public school board、English Catholic school board、French-language public/catholic school board，以及 private school。不同系统的入学条件、宗教要求、语言要求、边界规则、交通安排和费用结构可能不同。",
          "很多新移民家庭最先接触的是英文公立教育局，但这不代表所有家庭都只能选择一种系统。天主教学校可能涉及宗教相关要求；法语学校可能有法语资格或语言背景要求；私立学校通常有自己的申请流程和费用。家长在决定前应查看对应 school board 或学校官网，而不是只用中文社群里的经验替代官方确认。",
        ],
      },
      {
        heading: "Kindergarten、Elementary、High School：各阶段通常怎么理解",
        body: [
          "Kindergarten 通常包括 Junior Kindergarten 和 Senior Kindergarten，具体入学年龄与出生年份和教育局安排有关。Elementary School 一般覆盖小学到初中阶段，但不同 school board 的学校组合可能不同，例如有些学校是 JK–Grade 8，有些可能分为 elementary 和 middle school。",
          "High School 通常从 Grade 9 开始。高中阶段家长需要特别关注学分、必修课、课程代码、先修课、英语支持、社区服务和毕业要求。新移民高中生不应只按中国年级经验直接套用，因为 Ontario 的选课路径可能影响之后的大学、学院或就业方向。",
        ],
      },
      {
        heading: "School board 是什么，为什么家长必须知道",
        body: [
          "School board 可以理解为本地教育局或教育委员会。家长注册学校、查询学校边界、提交文件、询问校车、了解 ESL/ELL 支持、确认入学资格或费用问题时，很多时候都要通过 school board 的网页或工作人员完成。",
          "如果你只知道住址附近某所学校的名字，但不知道它属于哪个 school board，后续可能会找错注册入口。建议家长先用 Ontario.ca 或本地教育局的 school locator 工具确认 school board，再进入该教育局网站查看 registration 页面。",
        ],
      },
      {
        heading: "School boundary 和 home address：为什么住址很重要",
        body: [
          "很多 Ontario 学校会按家庭住址划分服务范围。住址可能影响孩子应联系哪所学校、是否有校车、是否能申请某些项目，以及是否需要提供额外证明。租房或买房前，如果家长非常在意某个学校，建议先查看 school board boundary map，并向教育局确认当前规则。",
          "需要注意的是，边界、项目容量和注册流程可能变化。不要只凭房产广告、社交媒体帖子或过期截图判断孩子一定可以进入某所学校。比较稳妥的做法是保存官方页面链接，并在关键决定前向 school board 或学校取得书面确认。",
        ],
      },
      {
        heading: "新移民家长常见问题",
        body: [
          "问题一：孩子英文不好能不能上学？很多 school board 会评估英语水平，并可能提供 ESL/ELL 或 newcomer support，但具体安排由学校或教育局决定。问题二：从中国转学需要成绩单吗？通常建议准备过往成绩单、在读证明和必要翻译，尤其是高中生。",
          "问题三：父母是学签或工签，孩子是否需要 study permit 或是否要交费？这个问题不能简单回答，取决于家庭身份、孩子情况、居住安排和教育局要求。建议同时查看 IRCC 关于 minor children studying in Canada 的说明，以及本地 school board 的 registration/admission 页面。",
        ],
      },
      {
        heading: "常见误区",
        body: [
          "误区一：以为所有 Ontario school board 的文件要求完全一样。实际上，不同教育局可能接受不同类型的住址证明、身份文件或线上注册流程。误区二：只看学校排名，不看通勤、语言支持、孩子适应和家庭住址稳定性。",
          "误区三：认为年龄估算就是最终分班。年级估算只是准备工具，实际年级可能由 school board 或学校根据出生日期、过往学习经历、英语能力和评估结果决定。误区四：在没有确认身份和费用问题前做出重大决定。涉及 study permit、国际学生费用或复杂身份时，应以官方信息为准，必要时咨询合格专业人士。",
        ],
      },
      {
        heading: "下一步：注册文件、身份问题和实用工具",
        body: [
          "了解学校系统后，建议继续阅读 Ontario 学校注册文件指南，整理孩子身份、住址、监护人、免疫和过往学校材料。如果你不确定孩子大概对应几年级，可以先使用 Ontario 年级估算器，但结果只能作为一般参考。",
          "如果家庭涉及父母学签、工签、孩子作为国际学生或其他临时身份，请继续阅读 study permit 与 school status 相关说明，并直接联系本地 school board。本站的 Ontario 学校注册清单也可以帮助你把准备事项逐项勾选。",
        ],
      },
    ],
    checklist: [
      "确认当前住址对应的 Ontario school board 和学校范围",
      "查看本地 school board 的 registration 或 newcomer 页面",
      "整理孩子身份证明、出生日期证明、住址证明和监护人信息",
      "如孩子从海外转学，准备成绩单、在读证明和必要翻译",
      "高中生尽早询问学分、ESL/ELL、选课和 guidance counsellor 支持",
      "涉及 study permit、费用或身份问题时，同时核对 IRCC 和 school board 官方信息",
    ],
    warnings: [
      "本文仅供一般信息参考，不保证每个孩子都一定符合免费入学或特定学校入学条件。",
      "不要只凭房源广告、社交媒体或他人经验判断 school boundary、注册资格或文件要求。",
      "涉及移民身份、study permit 或费用问题时，请以 IRCC 和相关 school board 官方信息为准。",
    ],
    sources: [
      ...ontarioSchoolSources,
      { title: "Toronto District School Board - Registration", publisher: "Toronto District School Board", url: "https://www.tdsb.on.ca/Find-your/School/Registration" },
      { title: "Peel District School Board - Register for school", publisher: "Peel District School Board", url: "https://www.peelschools.org/register-for-school" },
    ],
    relatedGuides: ["registration-documents", "study-permit-for-children"],
    relatedTools: ["ontario-grade-estimator", "ontario-school-registration-checklist"],
  },
  {
    title: "Ontario 学校注册需要准备哪些文件？",
    slug: "registration-documents",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "安省孩子入学注册常见文件清单：身份、住址、监护人、移民身份、免疫记录和过往学校材料。",
    updatedAt: "2026-06-12",
    readingTime: "8 分钟",
    summary: [
      "注册材料通常包括孩子身份证明、家长/监护人信息、住址证明、身份或移民文件、免疫记录和过往学校记录。",
      "不同教育局、学校和家庭身份要求可能不同，不建议只凭网上清单一次性判断。",
      "建议把原件、电子扫描件和必要翻译件分开整理，并在提交前查看教育局官网。",
    ],
    sections: [
      {
        heading: "常见文件类别",
        body: [
          "通常情况下，学校或教育局会要求确认孩子身份、年龄、住址和监护关系。常见材料可能包括护照、出生证明、永久居民卡或其他身份文件、租约或水电账单、父母身份证明、免疫记录和过往成绩单。",
          "如果孩子刚从中国或其他国家转来，学校可能会要求过往成绩单、在读证明或课程说明。高中阶段尤其建议准备英文翻译或至少清晰扫描件，方便学校判断课程衔接。",
        ],
      },
      {
        heading: "住址证明要特别核对",
        body: [
          "很多教育局会根据住址安排学校，因此住址证明非常重要。租房家庭常用租约、房东信、水电账单、银行账单或政府信件等文件，但可接受类型由教育局决定。",
          "如果刚抵达还住在临时酒店或朋友家，建议先询问教育局是否可以先登记、是否需要补交长期住址证明，以及孩子何时可以开始上课。",
        ],
      },
      {
        heading: "免疫记录和健康文件",
        body: [
          "安省学校通常会关注孩子免疫记录。来自中国的疫苗本、翻译件、家庭医生或公共卫生部门记录可能都需要整理。具体要求和补交方式应以当地 public health 或教育局说明为准。",
          "不要因为材料暂时不完整就放弃联系学校。更稳妥的做法是先说明现有文件，询问是否可以后补、是否需要翻译，以及应该联系哪个机构。",
        ],
      },
      {
        heading: "提交前的整理方法",
        body: [
          "建议为每个孩子建立一个文件夹：身份证明、住址证明、移民/身份文件、免疫记录、成绩单、联系人信息、紧急联系人和特殊需求说明。扫描件文件名可以写成孩子姓名、文件类型和日期。",
          "如果需要通过线上系统上传，尽量使用清晰 PDF 或图片，并保留提交确认邮件。所有涉及身份、入学资格或收费的问题，建议向教育局取得书面回复。",
        ],
      },
    ],
    checklist: [
      "孩子护照或出生证明等身份证明",
      "父母或监护人身份证明和联系方式",
      "租约、账单或教育局接受的住址证明",
      "孩子在加拿大身份或相关移民文件",
      "免疫记录、过往成绩单和必要翻译件",
    ],
    warnings: ["不同教育局接受的住址证明可能不同，提交前请查看本地教育局页面。"],
    sources: ontarioSchoolSources,
    relatedGuides: ["school-system", "study-permit-for-children"],
    relatedTools: ["ontario-school-registration-checklist", "ontario-grade-estimator"],
  },
  {
    title: "父母是学签或工签，孩子在安省上学要注意什么？",
    slug: "study-permit-for-children",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "整理陪读、学签/工签家庭、未成年孩子在加拿大上学时常见的身份和学校注册问题。",
    updatedAt: "2026-06-12",
    readingTime: "8 分钟",
    summary: [
      "未成年孩子在加拿大读书的规则涉及联邦移民规定、省内教育安排和本地教育局要求。",
      "父母持学签、工签或其他身份时，孩子是否需要 study permit、是否收费、如何注册，都应分别确认。",
      "本文不构成移民或法律建议，重要决定请以 IRCC、Ontario.ca 和教育局官方信息为准。",
    ],
    sections: [
      {
        heading: "为什么这个问题不能简单回答",
        body: [
          "很多家长会问“父母有学签/工签，孩子是不是一定可以免费上公校”。这个问题通常不能只用一句话回答，因为它可能同时涉及孩子年龄、居住地、父母身份类型、学习或工作状态、教育局政策和学校名额。",
          "比较稳妥的做法是把问题拆开：孩子在加拿大是否需要 study permit、所在教育局注册时需要哪些文件、是否可能产生学费或国际学生流程、入学时间和年级如何安排。",
        ],
      },
      {
        heading: "先查看 IRCC 关于未成年孩子读书的说明",
        body: [
          "IRCC 对 minor children studying in Canada 有专门说明，家长应优先查看。不同情形下，孩子可能需要或不需要 study permit。不要只根据微信群或短视频结论做决定。",
          "如果孩子身份、父母身份或入境计划比较复杂，建议咨询合格的移民顾问或律师，并保留官方页面截图和书面咨询记录。",
        ],
      },
      {
        heading: "再确认教育局注册要求",
        body: [
          "即使联邦层面的问题已确认，学校注册仍要看本地教育局要求。教育局可能会要求父母工作或学习证明、住址证明、孩子身份文件、监护人信息和过往学校记录。",
          "如果不确定是否需要通过 international student office 或普通本地注册流程，建议直接写邮件给教育局，把家庭身份和孩子年龄说明清楚。",
        ],
      },
      {
        heading: "常见准备动作",
        body: [
          "抵达前可以准备孩子护照、出生证明、父母学签/工签或批准信、学校录取或雇主证明、住址证明、免疫记录和成绩单。抵达后尽快确认住址对应教育局，并询问注册步骤。",
          "对于高中生，还要尽早讨论学分转换、英语评估、课程选择和毕业路径。不要等开学前最后几天才第一次联系学校。",
        ],
      },
    ],
    checklist: [
      "阅读 IRCC 未成年孩子在加拿大读书官方说明",
      "确认所在教育局对父母学签/工签家庭的文件要求",
      "准备孩子和父母身份文件、住址证明、免疫和成绩单",
      "如涉及收费或国际学生流程，要求教育局书面确认",
      "复杂身份问题咨询合格专业人士",
    ],
    warnings: ["本文不判断任何家庭是否一定符合免费入学或免学签条件。重要身份问题请以官方信息和专业意见为准。"],
    sources: ontarioSchoolSources,
    relatedGuides: ["registration-documents", "school-system"],
    relatedTools: ["ontario-school-registration-checklist"],
  },
];

export function getSchoolGuide(slug: string) {
  return schoolGuides.find((guide) => guide.slug === slug);
}

export function getSchoolTool(slug: string) {
  return schoolTools.find((tool) => tool.slug === slug);
}
