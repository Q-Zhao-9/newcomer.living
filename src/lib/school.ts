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
  province?: "ontario";
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
    href: "/tools/ontario-grade-estimator",
  },
  {
    slug: "ontario-school-registration-checklist",
    title: "Ontario School Registration Checklist",
    titleZh: "安省学校注册文件清单",
    description: "按文件类别勾选身份证明、住址证明、身份文件、免疫和学校沟通事项。",
    href: "/tools/ontario-school-registration-checklist",
  },
];

export const schoolGuides: SchoolGuide[] = [
  {
    title: "Ontario School System / 安省学校体系基础",
    slug: "school-system",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "面向新移民家长的安省学校体系入门：教育局、年级、学期、高中学分、ESL 支持和家校沟通。",
    updatedAt: "2026-06-12",
    readingTime: "9 分钟",
    summary: [
      "安省公立教育通常由当地 school board 管理，住址、年龄、身份文件和教育局规则都会影响注册流程。",
      "小学和高中阶段的年级、课程代码、ESL 支持与中国学校经验不同，建议家长先建立基本词汇表。",
      "本文为一般参考，具体安排应以 Ontario.ca、所在教育局和学校回复为准。",
    ],
    sections: [
      {
        heading: "先认识 school board 和 home school",
        body: [
          "在安省，很多家庭不是直接向省政府注册学校，而是通过当地教育局或学校完成注册。通常情况下，家庭住址会对应一个或多个可申请的学校范围，但具体边界、项目和名额需要查看教育局页面。",
          "如果你刚到加拿大，建议先确认住址属于哪个 school board，再查看该教育局的新生注册说明。部分城市还会区分英文公校、天主教学校、法语教育局或特殊项目。",
        ],
      },
      {
        heading: "年级和年龄只是起点，不是最终决定",
        body: [
          "家长常问“孩子在中国读几年级，来加拿大应该读几年级”。一般来说，学校会参考孩子出生日期、过往成绩单、英语能力、身份文件和教育经历。年龄估算可以帮助准备，但最终分班通常由学校或教育局决定。",
          "如果孩子年龄接近分界线，或者曾经跳级、休学、转学，建议准备好成绩单、在读证明和翻译件，并提前向教育局说明。",
        ],
      },
      {
        heading: "高中需要特别关注课程路径",
        body: [
          "安省高中不仅是“读几年级”，还涉及学分、必修课、社区服务、读写要求和不同课程类型。Grade 9 之后的选课会逐步影响 Grade 11/12 以及大学、学院或就业路径。",
          "新移民家庭不要只按照国内文理分科经验做判断。建议尽早联系 guidance counsellor，了解课程代码、先修课和毕业要求。",
        ],
      },
      {
        heading: "英语支持和适应期",
        body: [
          "很多学校会对新来的英语学习者进行评估，并根据情况提供 ESL/ELL 支持。家长可以询问孩子是否需要语言评估、是否有 newcomer support、是否可以安排翻译或双语工作人员协助沟通。",
          "刚开始的几个月，孩子可能需要适应课堂表达、作业方式、同伴关系和校园规则。家长可以定期查看学校邮件、线上平台和老师反馈。",
        ],
      },
    ],
    checklist: [
      "确认住址对应的 school board 和学校范围",
      "保存孩子护照、出生证明、过往成绩单和疫苗记录",
      "询问是否需要英语水平评估或 ESL/ELL 支持",
      "高中生尽早预约 guidance counsellor 讨论选课",
      "所有重要结论以教育局和学校书面回复为准",
    ],
    warnings: [
      "不要只按中国年级直接套用加拿大年级。",
      "不要在没有确认教育局规则前租房只为了某一所学校。",
    ],
    sources: ontarioSchoolSources,
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
