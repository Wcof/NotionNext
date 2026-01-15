/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '欢迎来到我的博客，点击进入博客', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '学习是思考、打磨、谅解也是生活', // 英雄区文字
  PROXIO_HERO_TITLE_2: '通过记录，学会复盘。通过欲望，学会控制', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我的最新动态',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: false, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我',
  PROXIO_FEATURE_TEXT_1: 'B 端实战沉淀，用产品思维驱动业务增长',
  PROXIO_FEATURE_TEXT_2: '全栈产品能力 + AI 数据赋能 + 高效落地交付，为项目保驾护航',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // 全栈产品 + 多领域经验图标 fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '全栈产品功底 + 实战经验',
  PROXIO_FEATURE_1_TEXT_1:
    '大数据 / 中台 / 企业级 SaaS 产品经验，覆盖 0→1 从规划到商业化全流程，具备前后端开发能力，能精准预估开发成本、规避风险，精通 Axure、BI 等工具与敏捷流程。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments', //AI + 数据驱动图标
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: 'AI + 数据驱动赋能',
  PROXIO_FEATURE_2_TEXT_1: '融合 LLM、NL2SQL 等技术 0→1 打造智能 BI 工具，重构数据中台五大模块，实现交付效率提升 50%、API 种类增长 4 倍，以数据治理与分析驱动业务优化。',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',// 协作 + 落地交付图标
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '高效协作 + 落地能力',
  PROXIO_FEATURE_3_TEXT_1:
    '跨部门协同经验丰富，擅长推动资源落地，主导项目实现千万、审批效率提升2倍、库存周转率提高50%等成果，兼顾商业价值与用户体验。',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: '', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '生涯',
  PROXIO_CAREER_TEXT: '以下是我的职业生涯',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: '中电信人工智能科技公司',
      bio: '2023-2025',
      text: 'As a freelance architect, I worked on a range of residential and commercial projects, balancing form and function. I collaborated with clients and contractors to transform concepts into reality, ensuring each design was both aesthetically pleasing and structurally sound.'
    },
    {
      title: '全友家私销售有限公司',
      bio: '2021-2023',
      text: 'At Spotify, I helped shape innovative features for millions of users globally. My focus was on creating seamless music discovery experiences, enhancing user interfaces, and optimizing cross-platform navigation, which led to an improved product flow and increased user satisfaction.'
    },
    {
      title: '兴久盛科技有限公司',
      bio: '2019-2021',
      text: 'Now I design user-centric products that align with client visions. As a freelance product designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.'
    }
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '朋友的评价',
  PROXIO_TESTIMONIALS_TEXT_1: '朋友怎么评价我',
  PROXIO_TESTIMONIALS_TEXT_2:
    '和他合作过的伙伴都觉得，他是个「专业又靠谱」的产品人 —— 既能用数据拆解需求、精准把控落地节奏，又能跨部门顺畅协同推进项目；做事不贪快、重沉淀，总能把复杂问题简化，交付的成果既兼顾商业价值又贴合用户体验，是让人放心托付项目的伙伴。',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '和燈辉共事 2 年，他绝对是团队里的「定海神针」！当时一起推进星海数据中台重构，面对五大模块的历史债务和跨部门协作阻力，他不仅用产品思维拆解出清晰的重构路线图，还主动协调技术、业务、销售团队对齐目标。印象最深的是他设计的 License 授权模式，直接打开了中小企业市场，年营收增长超 30%，专业度和落地能力真的没得说，靠谱又能扛事。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '赵X伟',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '某运营商智能公司AI产品负责人',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '作为燈辉的前领导，最欣赏他的「数据敏感度 + 落地执行力」从 CRM 拓客宝从 0 到 1 都是他主导，不仅挖掘出门店私域运营的核心痛点，还联动技术团队快速落地，3 个月就实现 GMV600 万，门店客资翻了一倍。遇到跨部门数据不通的难题，他主动牵头建立数据治理体系，把人工周转时间从 3 天压到 1 天，还能耐心协调各部门对齐数据口径，沟通和推动能力远超同级别产品经理。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '严X',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '某家具公司 YOYO365 产品负责人',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '我和燈辉在行业交流会上认识，后来合作过 AI 取数工具的需求对接，他的专业度真的惊艳到我！作为某大厂的产品，我们对技术落地细节要求很高，但他不仅能快速理解复杂需求，还能结合 LLM、NL2SQL 技术给出可落地的方案，甚至提前预判了开发风险。更难得的是，他会把复杂的技术逻辑转化成通俗的业务语言，沟通效率超高，合作下来完全不用操心，是我愿意长期对接的靠谱伙伴。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '陈X',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: ' 某大厂智能客服业务线 负责人',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '燈辉是我西南交大的同门，也是多年好友！从上学时就觉得他逻辑清晰、做事踏实',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '何X欢',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '某后车市场独角兽公司 技术总监',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '之前和燈辉合作推进智能 BI 工具，他的「化繁为简」能力太突出了！当时企业客户普遍觉得数据分析门槛高，他硬是结合自然语言交互，把原本需要 1 天的取数流程缩短到 3 分钟，还拿到了信通院认证。合作中不管是对接客户需求，还是协调技术团队落地，他都能把控节奏，甚至会主动帮客户做 POC 演示、解答疑问，帮我们快速建立客户信任。他做事不贪快、重沉淀，每次交付的成果都又扎实又超出预期，是个让人放心托付项目的产品人。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '骆X何',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '某大厂 数据中台 产品负责人',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: false, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: 'NotionNext有帮助文档吗？',
      a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署'
    },
    {
      q: '部署后要如何编写文章？',
      a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>'
    },
    {
      q: '站点部署失败，更新失败？',
      a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助'
    },
    {
      q: '文章没有实时同步？',
      a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于作者',
  PROXIO_ABOUT_TEXT_1: '我叫李燈辉，常用 Wcof 作为我的笔名/网名，希望我能坚持学习下去',
  PROXIO_ABOUT_TEXT_2:
    '工作中习惯用产品思维拆解需求、打磨体验，在长期主义里沉淀专业深度；生活里坚持用脚步丈量山野，在成都周边的溪流与山道间，寻找理性与感性的平衡。不卷不躺平，既深耕 B 端产品的用户信任构建，也热爱户外探索的自由与松弛；开博客记录产品思考与徒步见闻，愿以「慢沉淀、稳前行」的态度，分享成长路上的干货与感悟。',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '经验年限',
  PROXIO_ABOUT_VAL_1: '7年产品经验',
  PROXIO_ABOUT_KEY_2: '服务客户',
  PROXIO_ABOUT_VAL_2: '1000+',
  PROXIO_ABOUT_KEY_3: '交付项目',
  PROXIO_ABOUT_VAL_3: '100+',
  PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
  PROXIO_ABOUT_VAL_4: '10000+',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '敏捷开发',
    '瀑布式开发',
    'Story Map',
    'Axure',
    '前后端开发',
    'CSS+HTML',
    'UniApp',
    '思维导图',
    'Spring Boot',
    'MySQL+ReDis+SQLlite',
    '商业化'
  ],

  PROXIO_FOOTER_SLOGAN: '产品思维驱动，数据智能赋能，记录产品人的专业沉淀与生活',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: '人人都是产品经理',
          href: 'https://www.woshipm.com/u/734945'
        },
        {
          title: 'PMCAFF',
          href: 'https://www.pmcaff.com/'
        }
      ]
    },
    {
      name: '开发者',
      menus: [
        { title: 'Github', href: 'https://github.com/Wcof/NotionNext' },
        {
          title: '开发帮助',
          href: ''
        },
        {
          title: '功能反馈',
          href: ''
        },
        {
          title: '技术讨论',
          href: ''
        },
        {
          title: '关于作者',
          href: ''
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: false,
  PROXIO_CTA_TITLE: '与我建立联系',
  PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
  PROXIO_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
