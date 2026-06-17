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
    href: "/school/ontario/english-support-newcomers",
  },
  {
    question: "Ontario Grade 9 怎么选课？",
    answer: "高中选课会影响未来 Grade 11/12 路径。新家庭应尽早联系 guidance counsellor。",
    href: "/school/ontario/grade-9-course-selection",
  },
  {
    question: "4U / 4M / 4C / 4E 是什么意思？",
    answer: "这些代码常见于安省高中课程路径，涉及大学、学院、混合或就业方向。",
    href: "/school/ontario/ontario-high-school-course-codes",
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
    relatedGuides: ["registration-documents", "study-permit-for-children", "english-support-newcomers", "grade-9-course-selection", "ontario-high-school-course-codes"],
    relatedTools: ["ontario-grade-estimator", "ontario-school-registration-checklist"],
  },
  {
    title: "Ontario 孩子注册学校需要哪些文件？新移民家长清单",
    slug: "registration-documents",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "面向新移民家长的 Ontario 学校注册文件指南，整理孩子身份证明、住址证明、家长文件、身份材料、免疫记录和注册前准备步骤。",
    updatedAt: "2026-06-13",
    readingTime: "12 分钟",
    summary: [
      "Ontario 孩子注册学校时，通常可能需要孩子身份证明、出生日期证明、家长或监护人身份证明、Ontario 居住地址证明、身份相关文件、免疫记录和过往学校记录。",
      "很多 school board 会要求家长先通过线上系统或 registration office 提交资料，但不同 school board 的具体要求可能不同。",
      "请以本地 school board 官方 registration 页面为准；涉及孩子身份、study permit 或费用问题时，建议进一步确认 IRCC 与教育局信息。",
    ],
    sections: [
      {
        heading: "快速结论：先查本地 school board，再整理文件",
        body: [
          "Ontario 学校注册没有一个适用于所有家庭、所有城市的固定清单。通常情况下，家长需要先确认住址对应的 school board，再查看该教育局 registration 页面列出的文件要求和提交方式。不同 school board 可能接受不同类型的住址证明、身份文件或线上表格。",
          "如果你刚到 Ontario，建议先把文件分成几类：孩子身份与出生日期、家长/监护人身份、Ontario 居住地址、移民或临时身份、免疫记录、过往学校材料。这样即使教育局要求略有不同，也更容易快速补充。",
        ],
      },
      {
        heading: "这篇文章适合谁",
        body: [
          "这篇文章适合刚搬到 Ontario、准备给孩子注册公立或其他 school board 学校的中文新移民家庭，也适合父母持工签、学签、永久居民身份或正在转换身份的家庭做一般准备。",
          "如果孩子是国际学生、父母身份较复杂、或教育局提到 fee-paying/international admission，请不要只按普通注册清单操作。建议直接联系 school board registration office 或 international student office，并保留书面回复。",
        ],
      },
      {
        heading: "注册前先确认什么",
        body: [
          "第一，确认家庭 Ontario 地址对应哪个 school board 和哪所 home school。第二，查看该 school board 对 newcomer registration、online registration 或 student admission 的说明。第三，确认孩子年龄、预计入学时间、过往年级和是否需要语言评估。",
          "如果你还住在临时地址、租约尚未开始、或刚搬家，建议先询问教育局是否可以开始注册、需要哪类临时证明、以及何时必须补交正式住址文件。不要只根据房东、房产经纪或朋友说法判断学校边界。",
        ],
      },
      {
        heading: "常见文件类型：孩子身份证明和出生日期证明",
        body: [
          "很多 school board 会要求能证明孩子姓名、出生日期和身份的文件，例如护照、出生证明、永久居民卡或其他政府文件。不同家庭可用文件不同，具体接受哪些文件应以教育局页面为准。",
          "如果文件不是英文，学校或教育局可能要求翻译件或补充说明。建议准备清晰扫描件，并把文件名写清楚，例如 child-passport、birth-certificate、landing-document 等，方便线上提交和后续查找。",
        ],
      },
      {
        heading: "常见文件类型：家长或监护人身份证明",
        body: [
          "注册时通常需要提供父母或监护人的姓名、联系方式、身份证明和与孩子关系说明。常见材料可能包括护照、驾照、省身份证、永久居民卡或其他身份文件。",
          "如果孩子由非父母监护人照顾，或者父母暂时不在加拿大，可能涉及额外监护文件或授权说明。此类情况比较敏感，建议直接联系 school board 确认，不要自行假设某一种文件一定足够。",
        ],
      },
      {
        heading: "常见文件类型：Ontario 住址证明",
        body: [
          "住址证明通常用于确认孩子是否属于某个 school boundary。可被接受的文件可能包括租约、房产文件、水电账单、银行账单、政府信件或其他显示姓名和地址的文件。具体列表由本地 school board 决定。",
          "刚到加拿大的家庭常遇到的问题是：还没有账单、银行地址刚更新、或暂住亲友家。建议把现有材料列出来，向教育局询问是否可以先提交临时证明、房东信或后补文件。",
        ],
      },
      {
        heading: "常见文件类型：身份、免疫和过往学校材料",
        body: [
          "如果孩子或父母持 study permit、work permit、visitor record、permanent resident 文件或其他身份文件，教育局可能会要求查看相关材料。涉及孩子是否需要 study permit、是否需要缴费或走国际学生流程时，应以 IRCC 和 school board 官方信息为准。",
          "免疫记录在 Ontario 学校注册中也常被提到。来自中国或其他国家的疫苗记录，可能需要翻译、录入公共卫生系统或补充接种。过往成绩单、在读证明、课程说明和老师评语对高年级学生尤其有帮助。",
        ],
      },
      {
        heading: "不同身份家庭可能遇到的问题",
        body: [
          "永久居民或加拿大公民家庭通常需要重点准备身份、住址、免疫和过往学校材料。父母持 work permit 或 study permit 的家庭，除了常规文件外，还应确认孩子入学资格、是否需要 study permit、是否涉及费用或特定 admission 流程。",
          "Visitor、临时居民、国际学生或监护安排复杂的情况，不建议根据社交媒体答案做决定。请直接向本地 school board 描述家庭身份、孩子年龄、预计居住时间和学习计划，并同时查看 IRCC 相关页面。",
        ],
      },
      {
        heading: "注册流程示例",
        body: [
          "一个常见流程是：先确认住址和 school board；阅读 registration 页面；在线填写学生资料；上传孩子身份、住址、监护人、免疫和学校记录；等待学校或 registration office 联系；必要时补交文件或预约评估。",
          "实际流程可能因城市、教育局、学校阶段和家庭身份而变化。有些 school board 可能要求先联系 central registration，有些由学校直接处理。提交后请保存确认邮件、reference number 和工作人员回复。",
        ],
      },
      {
        heading: "家长常见误区",
        body: [
          "误区一：以为只要有租约就一定能上某所学校。住址证明、边界、项目容量和学校安排仍需教育局确认。误区二：以为所有教育局文件要求一样。不同 school board 可能对住址、免疫、身份和线上注册有不同要求。",
          "误区三：高中生只准备年龄证明，不准备成绩单。高中阶段可能涉及学分评估、课程衔接和英语支持，建议尽量准备过往成绩单或课程说明。误区四：涉及 study permit 或费用时只听他人经验，不查看 IRCC 和教育局官方信息。",
        ],
      },
      {
        heading: "入学前准备清单如何使用",
        body: [
          "注册前建议准备：孩子身份证明、家长/监护人身份证明、Ontario 居住地址证明、孩子出生日期证明、过往成绩单或学校记录（如有）、疫苗记录（如本地要求）、移民或身份相关文件（如适用）。",
          "你可以先使用本站的 Ontario 学校注册清单，把已准备和待确认项目逐项勾选。清单不能替代教育局要求，但能帮助家庭减少遗漏，尤其适合刚落地、事情很多的新移民家长。",
        ],
      },
    ],
    checklist: [
      "孩子身份证明，例如护照、出生证明或其他教育局接受的文件",
      "孩子出生日期证明",
      "家长/监护人身份证明和联系方式",
      "Ontario 居住地址证明，例如租约、账单或教育局接受的其他文件",
      "孩子和家长的移民/身份相关文件，如适用",
      "过往成绩单、在读证明或学校记录，如有",
      "疫苗或 immunization record，如本地要求",
      "教育局线上注册确认邮件或 reference number",
    ],
    warnings: [
      "不同 school board 的具体要求可能不同，请以本地 school board 官方 registration 页面为准。",
      "本页不保证任何孩子的入学资格、费用状态或具体文件一定被接受。",
      "涉及 study permit、国际学生费用或复杂身份问题时，请同时查看 IRCC 和教育局官方说明。",
    ],
    sources: [
      ...ontarioSchoolSources,
      { title: "Immunization for children at school", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/vaccines-children-school" },
      { title: "Toronto District School Board - Registration", publisher: "Toronto District School Board", url: "https://www.tdsb.on.ca/Find-your/School/Registration" },
      { title: "Peel District School Board - Register for school", publisher: "Peel District School Board", url: "https://www.peelschools.org/register-for-school" },
    ],
    relatedGuides: ["school-system", "study-permit-for-children"],
    relatedTools: ["ontario-school-registration-checklist", "ontario-grade-estimator"],
  },
  {
    title: "孩子来 Ontario 上学需要 Study Permit 吗？家长常见情况说明",
    slug: "study-permit-for-children",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "谨慎整理孩子来 Ontario 上学时 study permit、家庭身份、school board 注册和官方信息确认方式，帮助家长知道应该问谁、查什么。",
    updatedAt: "2026-06-13",
    readingTime: "12 分钟",
    summary: [
      "孩子是否需要 study permit，通常不能只用一句话回答。它可能取决于孩子年龄、在加拿大身份、父母身份、学习计划、居住情况和 school board 要求。",
      "家长应同时查看 IRCC 关于 minor children studying in Canada 的官方说明、本地 Ontario school board 注册页面，以及学校 registration office 的书面回复。",
      "本页面仅供一般信息参考，不构成移民、法律或教育申请建议；重要决定请以 IRCC 和相关 school board 官方信息为准，必要时咨询合格专业人士。",
    ],
    sections: [
      {
        heading: "快速结论：不要只听一个简单答案",
        body: [
          "很多家长会问：孩子来 Ontario 上学到底需不需要 study permit？这个问题通常不能简单回答。IRCC 对未成年孩子在加拿大读书有专门说明，但每个家庭的身份、入境计划、居住时间、孩子年龄和学习安排都可能不同。",
          "比较稳妥的做法是：先阅读 IRCC 官方页面，再查看本地 school board 的 registration/admission 说明，最后把自己的家庭情况写清楚，向 school board 或 registration office 取得书面确认。不要只根据微信群、短视频或个别家庭经验做决定。",
        ],
      },
      {
        heading: "为什么这个问题不能简单回答",
        body: [
          "Study permit 属于联邦移民规则相关问题，而学校注册又涉及省级教育体系和本地 school board 流程。一个家庭可能在 IRCC 层面需要确认孩子身份，同时在 school board 层面还要确认注册方式、文件、费用状态和入学安排。",
          "例如，父母是永久居民、工签、学签、访问身份，或孩子自己作为国际学生来加拿大，不同情形可能对应不同文件和流程。即使两个家庭看起来相似，具体结果也可能因为身份细节、居住地、学校阶段或教育局政策不同而不同。",
        ],
      },
      {
        heading: "常见家庭情况：父母是 PR 或加拿大公民",
        body: [
          "如果父母是永久居民或加拿大公民，孩子的学校注册通常更接近普通本地家庭流程，但仍需提供孩子身份、年龄、住址、监护关系、免疫和过往学校材料。孩子本人的身份文件也需要按教育局要求准备。",
          "即便如此，也不建议在没有确认 school board 要求前假设所有文件都一样。刚登陆、地址未稳定、孩子曾在海外就读或监护安排复杂时，仍应联系教育局确认。",
        ],
      },
      {
        heading: "常见家庭情况：父母持 study permit 或 work permit",
        body: [
          "父母持 study permit 或 work permit 时，孩子是否需要 study permit、是否需要缴纳费用、能否按本地注册流程入学，可能需要同时看 IRCC 和本地 school board 规则。很多 school board 会要求查看父母的 permit、录取或雇主信息、住址证明和孩子身份文件。",
          "这类家庭尤其建议在抵达前准备好父母 permit 或批准信、孩子护照、出生证明、住址计划、免疫记录和过往学校材料。若涉及费用或国际学生流程，请要求 school board 书面确认。",
        ],
      },
      {
        heading: "常见家庭情况：孩子作为国际学生或 visitor/temporary resident",
        body: [
          "如果孩子是以国际学生身份来加拿大，通常需要查看学校或 school board 的 international student admission 页面，并按其流程申请。此类流程可能与普通本地注册不同，可能涉及学费、监护人、保险、录取信和 study permit 申请。",
          "如果孩子只是短期访问、家庭临时停留、身份正在转换，情况会更复杂。本文不判断任何孩子一定能或不能入学，也不判断是否一定需要 study permit。请优先查看 IRCC，并直接咨询对应 school board。",
        ],
      },
      {
        heading: "哪些机构的信息需要查看",
        body: [
          "第一是 IRCC。它负责解释未成年孩子在加拿大读书时 study permit 相关规则。第二是 Ontario 或本地 school board。它们负责具体注册要求、文件、学校分配和可能的费用流程。第三是学校或 registration office。它们可以根据你的地址和孩子情况说明下一步。",
          "如果不同来源的信息看起来不一致，建议不要自己拼凑结论，而是把 IRCC 链接、school board 页面和自己的家庭情况整理成邮件，要求 school board 给出书面回复。复杂移民问题建议咨询合格移民顾问或律师。",
        ],
      },
      {
        heading: "家长需要确认的问题清单",
        body: [
          "你可以向 school board 确认：孩子是否应走普通 registration 还是 international student admission；需要哪些身份文件；是否需要 study permit 或其他状态文件；是否可能产生学费；如果地址暂时不稳定能否先注册；孩子过往成绩单和免疫记录如何提交。",
          "还可以确认：孩子预计进入几年级；是否需要英语评估；是否有 ESL/ELL 支持；高中生如何评估学分；开学前是否需要预约；如果材料暂时不完整，哪些可以后补。",
        ],
      },
      {
        heading: "常见误区",
        body: [
          "误区一：听说某个朋友孩子不需要 study permit，就认为自己孩子一定一样。误区二：只看 IRCC，不看 school board 文件要求。误区三：只看 school board，不确认联邦身份问题。误区四：在没有书面确认前假设一定免费或一定能注册。",
          "误区五：把 school registration 和 immigration advice 混在一起。学校工作人员可以解释注册流程，但未必能提供个人移民建议。涉及身份、permit 或法律判断时，应以官方信息为准，必要时咨询合格专业人士。",
        ],
      },
      {
        heading: "给 school board 发邮件可以问什么",
        body: [
          "你可以用英文简短说明家庭情况，并请求对方确认注册流程和文件要求。邮件示例：Subject: Question about school registration eligibility for my child. Dear [School Board/Registration Office], My family recently moved to Ontario, and I would like to ask about the school registration process for my child. Could you please let me know what documents are required and whether there are any specific requirements based on our immigration status? Thank you.",
          "发送前建议补充孩子年龄、预计年级、所在地址或 postal code、父母身份类型、预计入学时间，并避免在邮件里发送不必要的敏感证件照片。等对方回复需要哪些文件后，再按安全方式提交。",
        ],
      },
      {
        heading: "强免责声明",
        body: [
          "本页面仅供一般信息参考，不构成移民、法律或教育申请建议。孩子是否需要 study permit、是否需要缴纳国际学生费用、是否符合本地 school board 入学要求，取决于孩子和家长的具体身份、居住情况、学习计划和本地规定。",
          "请以 IRCC 和相关 school board 的官方信息为准，必要时咨询合格专业人士。本站不会根据单个家庭情况判断最终资格，也不替代政府、教育局或专业顾问意见。",
        ],
      },
    ],
    checklist: [
      "阅读 IRCC 未成年孩子在加拿大读书官方说明",
      "确认孩子和父母当前身份文件、permit 或批准信",
      "查看本地 school board registration/admission 页面",
      "询问孩子是否应走普通注册或 international student 流程",
      "确认是否可能涉及 study permit、学费、监护人或额外文件",
      "把 school board 的关键回复保存为邮件或 PDF",
      "复杂身份问题咨询合格移民顾问或律师",
    ],
    warnings: [
      "本页不判断任何孩子一定需要或一定不需要 study permit。",
      "本页不保证任何孩子一定符合免费入学、普通注册或特定 school board 要求。",
      "涉及移民身份、study permit、费用或监护安排时，请以 IRCC 和 school board 官方信息为准。",
    ],
    sources: [
      { title: "Minor children studying in Canada", publisher: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/minor-children.html" },
      { title: "Study permit: Who needs a study permit", publisher: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html" },
      { title: "Going to school in Ontario", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/going-school-ontario" },
      { title: "Register your child for school", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/register-your-child-school" },
      { title: "Toronto District School Board - International Students", publisher: "Toronto District School Board", url: "https://www.tdsb.on.ca/About-Us/International-Students" },
    ],
    relatedGuides: ["registration-documents", "school-system"],
    relatedTools: ["ontario-school-registration-checklist"],
  },
  {
    title: "孩子英语不好，在 Ontario 上学怎么办？ESL/ELL 支持入门",
    slug: "english-support-newcomers",
    category: "school",
    province: "ontario",
    stage: "general",
    description: "为新移民家长解释孩子英语基础较弱时在 Ontario 学校可能遇到的语言评估、ESL/ELL 支持、课堂适应和家校沟通问题。",
    updatedAt: "2026-06-14",
    readingTime: "10 分钟",
    summary: [
      "孩子英语不好并不代表不能开始适应学校生活。很多 Ontario school board 会根据学生情况进行语言或学习背景评估，并可能提供 ESL/ELL 或 newcomer support。",
      "支持方式、评估流程和课程安排可能因 school board、学校和孩子年级不同而变化，家长应主动询问本地学校。",
      "以下为一般参考，不替代学校、教育局或专业评估意见。涉及特殊教育、心理健康或身份问题时，请进一步确认官方渠道。",
    ],
    sections: [
      {
        heading: "快速结论：先让学校了解孩子的真实情况",
        body: [
          "如果孩子刚从中文环境来到 Ontario，英语听说读写跟不上是常见情况。家长不需要把孩子包装成“完全没问题”，也不建议只说“英语不好”。更有帮助的做法是说明孩子过去几年在哪里读书、主要学习语言、英语学习经历、优势科目、阅读和写作大概水平。",
          "很多学校会根据需要安排语言评估或 newcomer orientation，再决定是否提供 ESL/ELL 支持、课堂调整或额外沟通安排。不同 school board 的流程可能不同，实际安排应以学校和教育局说明为准。",
        ],
      },
      {
        heading: "ESL / ELL 通常是什么意思",
        body: [
          "ESL 常指 English as a Second Language，ELL 常指 English Language Learner。不同学校或教育局使用的名称可能不同，但核心都是帮助英语学习者逐步适应英语课堂、作业、阅读和校园沟通。",
          "支持形式不一定是单独上一门课。可能包括语言评估、小组支持、课堂老师调整任务、额外阅读材料、词汇支持、写作反馈、同伴帮助或定期跟进。家长应询问孩子所在学校具体如何安排。",
        ],
      },
      {
        heading: "家长应该主动问哪些问题",
        body: [
          "注册或入学初期，家长可以问：孩子是否需要语言评估？学校是否有 ESL/ELL teacher 或 newcomer support？老师如何判断孩子已经理解课堂内容？作业是否可以提供说明或示例？家长如果英文有限，是否可以使用翻译协助沟通？",
          "如果孩子进入高中，还应询问英语课程路径、必修英语学分、ESL 课程是否影响毕业计划，以及未来 Grade 11/12 课程选择。不要只看年级数字，忽略语言适应对选课和成绩的影响。",
        ],
      },
      {
        heading: "家庭可以怎么帮助孩子适应",
        body: [
          "在家里可以先建立稳定的阅读和沟通习惯：每天读一点学校通知、记录不会的词、练习给老师写简短邮件、鼓励孩子参加低压力活动。刚开始不要只用分数评价适应情况，也要观察孩子是否敢问问题、是否知道作业在哪里、是否能使用学校线上平台。",
          "如果孩子压力很大、长期拒绝上学、睡眠或情绪明显变化，建议尽早联系老师、guidance counsellor 或学校支持人员。语言适应和心理适应经常同时发生，家长不应只把问题归因于“英语差”。",
        ],
      },
      {
        heading: "常见误区",
        body: [
          "误区一：英语不好就一定要降级。实际年级安排可能参考年龄、过往学习经历、语言能力和学校评估，不应只按英语水平判断。误区二：只在家补语法，不联系学校。学校提供的支持和课堂要求才是孩子每天最直接面对的环境。",
          "误区三：认为 ESL/ELL 是负面标签。通常情况下，合理支持可以帮助孩子更快理解课堂要求。误区四：高中生忽视英语路径和毕业要求。高中阶段尤其需要和 guidance counsellor 确认课程安排。",
        ],
      },
    ],
    checklist: [
      "准备孩子过往学校记录和主要学习语言说明",
      "询问是否需要语言评估或 newcomer assessment",
      "确认学校是否有 ESL/ELL、新移民或 guidance 支持",
      "请老师说明作业平台、沟通方式和需要家长配合的事项",
      "高中生额外确认英语课程、学分和未来选课影响",
    ],
    warnings: [
      "不要只根据英语水平自行判断孩子应该降级或跳级。",
      "ESL/ELL 支持方式可能因 school board 和学校不同而变化。",
      "如果孩子出现明显情绪或适应困难，请尽早联系学校支持人员或合格专业人士。",
    ],
    sources: [
      ...ontarioSchoolSources,
      { title: "English language learners", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/english-language-learners" },
      { title: "STEP: Steps to English Proficiency", publisher: "Ontario Ministry of Education", url: "https://www.dcp.edu.gov.on.ca/en/assessment-evaluation/step" },
    ],
    relatedGuides: ["school-system", "registration-documents", "grade-9-course-selection"],
    relatedTools: ["ontario-grade-estimator", "ontario-school-registration-checklist"],
  },
  {
    title: "Ontario Grade 9 怎么选课？新移民家庭入门指南",
    slug: "grade-9-course-selection",
    category: "school",
    province: "ontario",
    stage: "high-school",
    description: "解释 Ontario Grade 9 选课时新移民家庭应关注的课程类型、必修课、英语支持、未来 Grade 11/12 路径和 guidance counsellor 沟通。",
    updatedAt: "2026-06-14",
    readingTime: "11 分钟",
    summary: [
      "Ontario Grade 9 选课不只是选几门喜欢的课。它会影响孩子如何适应高中、之后 Grade 10–12 的课程衔接，以及未来大学、学院或就业方向。",
      "新移民家庭应尽早联系 guidance counsellor，确认必修课、英语支持、数学/科学路径、选修课、学分和毕业要求。",
      "以下为一般参考。不同 school board 和高中可能有不同 course calendar、时间表和支持方式，请以学校官方信息为准。",
    ],
    sections: [
      {
        heading: "快速结论：Grade 9 是建立高中路径的第一步",
        body: [
          "对刚来 Ontario 的家庭来说，Grade 9 不是简单等同于中国初三或高一。学校通常会根据年龄、过往学习经历、英语能力、成绩单和课程安排来决定孩子进入哪些课程。选课时需要同时考虑孩子现在能否适应，以及未来 Grade 11/12 是否能顺利衔接目标课程。",
          "家长最应该做的是尽早预约 guidance counsellor，带上成绩单或课程说明，询问 course calendar、必修课、ESL/ELL 支持、数学和科学路径、选修课，以及如果之后想申请大学或学院需要提前注意什么。",
        ],
      },
      {
        heading: "Grade 9 通常要看哪些课程类别",
        body: [
          "常见科目可能包括 English、Math、Science、Geography、French、Health and Physical Education、Arts 或其他选修。具体课程组合由学校、school board 和学生情况决定。近年来 Ontario Grade 9 部分课程有 de-streamed 变化，家长应查看最新学校 course calendar。",
          "如果孩子英语仍在适应阶段，家长应确认 English 或 ESL 相关安排如何影响时间表和学分。如果孩子数学基础强，也不要只看年级名称，应确认课程内容、评估方式和后续先修要求。",
        ],
      },
      {
        heading: "为什么 guidance counsellor 很重要",
        body: [
          "Guidance counsellor 通常可以帮助学生理解课程选择、毕业要求、学分、先修课和未来路径。新移民家庭不熟悉 Ontario 高中体系时，应该主动预约，而不是等系统自动安排。",
          "沟通时可以问：孩子现在应该选哪些必修课？是否需要英语支持？过往成绩单如何评估？如果未来想读大学或学院，Grade 10–12 需要注意哪些课程？如果选错课或适应困难，是否有更改时间表的窗口？",
        ],
      },
      {
        heading: "新移民学生常见挑战",
        body: [
          "第一是语言和课堂表达。即使孩子学科基础不错，也可能需要时间适应课堂讨论、项目作业、presentation 和英文写作。第二是课程代码和先修课概念。某些 Grade 11/12 课程可能要求先修课程，不能只看孩子想学什么。",
          "第三是家长不了解学校线上系统和选课截止时间。建议把 course selection deadline、timetable change deadline 和 guidance appointment 写进日历，并保留学校邮件。",
        ],
      },
      {
        heading: "给家长的选课步骤",
        body: [
          "第一步，拿到学校 course calendar 或选课说明。第二步，列出必修课、可选课和孩子感兴趣方向。第三步，带着过往成绩单或课程说明联系 guidance counsellor。第四步，确认英语支持、数学/科学衔接和未来 Grade 11/12 先修要求。",
          "如果孩子刚来加拿大，不建议为了追求“难课”而忽略适应压力。比较稳妥的做法是让孩子在语言、学习方法和社交适应之间取得平衡，同时保持未来路径的基本选择空间。",
        ],
      },
    ],
    checklist: [
      "下载或保存学校 Grade 9 course calendar",
      "确认必修课、选修课和选课截止日期",
      "准备过往成绩单、课程说明和英语学习背景",
      "预约 guidance counsellor 讨论课程衔接",
      "询问 ESL/ELL 支持、先修课和未来 Grade 11/12 影响",
    ],
    warnings: [
      "不同高中课程表和可选课程可能不同，请以学校 course calendar 为准。",
      "不要只按中国年级经验判断 Ontario Grade 9 的课程难度和路径。",
      "涉及毕业要求和升学路径时，建议取得学校 guidance counsellor 的确认。",
    ],
    sources: [
      ...ontarioSchoolSources,
      { title: "High school graduation requirements", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/high-school-graduation-requirements" },
      { title: "Ontario curriculum, Grades 9 and 10", publisher: "Ontario Ministry of Education", url: "https://www.dcp.edu.gov.on.ca/en/curriculum/secondary" },
    ],
    relatedGuides: ["school-system", "english-support-newcomers", "ontario-high-school-course-codes"],
    relatedTools: ["ontario-grade-estimator"],
  },
  {
    title: "Ontario 高中课程代码 4U / 4M / 4C / 4E 是什么意思？",
    slug: "ontario-high-school-course-codes",
    category: "school",
    province: "ontario",
    stage: "high-school",
    description: "用中文解释 Ontario 高中课程代码中的年级数字、U/M/C/E 等结尾字母、先修课和新移民家长常见误区。",
    updatedAt: "2026-06-14",
    readingTime: "11 分钟",
    summary: [
      "Ontario 高中课程代码通常包含年级、科目和课程类型信息。家长常见的 4U、4M、4C、4E 多出现在 Grade 12 课程路径中。",
      "U、M、C、E 等字母通常与大学、大学/学院、学院或就业准备方向有关，但具体含义和入学要求应查看学校 course calendar 与目标院校要求。",
      "以下为一般参考，不保证某门课程一定满足某个大学、学院或专业要求。申请前必须以学校、college/university 和 Ontario 官方信息为准。",
    ],
    sections: [
      {
        heading: "快速结论：课程代码是路径提示，不是录取保证",
        body: [
          "很多家长看到 ENG4U、MHF4U、SBI4U、BOH4M 这类代码会很困惑。通常情况下，数字 4 代表 Grade 12 层级，最后的 U/M/C/E 等字母提示课程类型或准备方向。它可以帮助家长理解课程路径，但不能单独决定孩子是否符合某个专业申请要求。",
          "大学、学院和具体专业可能要求特定 Grade 12 课程、最低成绩和先修课组合。家长和学生应同时查看高中 course calendar、guidance counsellor 建议，以及目标院校 admission requirements。",
        ],
      },
      {
        heading: "代码里的数字通常代表什么",
        body: [
          "Ontario 高中课程代码中常见数字 1、2、3、4 通常对应 Grade 9、10、11、12。比如 ENG4U 里的 4 通常表示 Grade 12 英语课程。不同科目代码有不同前三个字母，例如 ENG 常见于 English，MHF 常见于 Advanced Functions。",
          "不过，家长不应只凭代码猜课程内容。学校 course calendar 会说明课程描述、先修课、学分和适合对象。新移民学生如果过往课程体系不同，尤其应让 guidance counsellor 协助判断。",
        ],
      },
      {
        heading: "U / M / C / E 一般怎么理解",
        body: [
          "U 通常指 university preparation；M 通常指 university/college preparation；C 通常指 college preparation；E 通常指 workplace preparation。部分低年级课程还可能出现其他字母或本地课程类型。具体解释请以 Ontario Ministry of Education、学校 course calendar 和 guidance counsellor 为准。",
          "对准备申请大学的学生来说，很多专业会要求特定 4U 或 4M 课程；对申请 college 的学生来说，要求可能不同。不能简单认为某个字母“更好”或“更差”，关键是是否适合孩子能力、毕业要求和未来目标。",
        ],
      },
      {
        heading: "先修课为什么重要",
        body: [
          "很多 Grade 11/12 课程有 prerequisite。比如想在 Grade 12 修某门大学准备课程，可能需要先完成对应 Grade 11 课程。如果 Grade 9/10 没有规划好，后面可能需要 summer school、online course 或调整时间表。",
          "新移民高中生尤其要注意过往成绩单如何被学校认可。即使孩子在国内学过类似内容，Ontario 学校仍可能需要根据本地课程要求安排评估或补课。请提前和 guidance counsellor 确认。",
        ],
      },
      {
        heading: "家长常见误区",
        body: [
          "误区一：只要选了 4U 就一定能申请任何大学专业。实际还要看具体科目、成绩、先修课和院校要求。误区二：看到 C 或 E 就认为没有价值。不同学生目标不同，college、apprenticeship、就业和大学路径都需要根据孩子情况选择。",
          "误区三：等 Grade 12 才开始研究课程代码。很多关键先修课从 Grade 10/11 就开始影响未来选择。误区四：只让孩子自己选课，家长完全不看 course calendar 和截止日期。",
        ],
      },
    ],
    checklist: [
      "保存学校 course calendar，并查每门课的完整描述",
      "确认课程代码中的年级数字和 U/M/C/E 等类型",
      "查看目标大学或学院专业的 admission requirements",
      "确认 Grade 11/12 课程的 prerequisite",
      "与 guidance counsellor 讨论孩子目前成绩、英语适应和未来路径",
    ],
    warnings: [
      "课程代码解释只能作为一般参考，不能替代学校或院校录取要求。",
      "申请大学或学院前，请逐项核对目标专业的最新 admission requirements。",
      "不同 school board 和学校 course calendar 可能存在差异。",
    ],
    sources: [
      ...ontarioSchoolSources,
      { title: "High school course types", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/high-school-course-types" },
      { title: "High school graduation requirements", publisher: "Ontario.ca", url: "https://www.ontario.ca/page/high-school-graduation-requirements" },
      { title: "Ontario curriculum, secondary", publisher: "Ontario Ministry of Education", url: "https://www.dcp.edu.gov.on.ca/en/curriculum/secondary" },
    ],
    relatedGuides: ["grade-9-course-selection", "school-system", "english-support-newcomers"],
    relatedTools: ["ontario-grade-estimator"],
  },
];

export function getSchoolGuide(slug: string) {
  return schoolGuides.find((guide) => guide.slug === slug);
}

export function getSchoolTool(slug: string) {
  return schoolTools.find((tool) => tool.slug === slug);
}
