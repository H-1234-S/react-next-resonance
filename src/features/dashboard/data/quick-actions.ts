export interface QuickAction {
  title: string;       // 标题
  description: string; // 描述
  gradient: string;    // 渐变色类名 (Tailwind CSS)
  href: string;        // 跳转链接（包含预设的演示文本）
};

export const quickActions: QuickAction[] = [
  {
    title: "故事讲述",
    description: "通过富有表现力的 AI 旁白赋予角色生命力",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=在一个掩映在云雾缭绕的山脉间的村庄里，住着一位老钟表匠，他的钟表从不显示准确的时间——但它们总是诉说着真相。一个下雨的傍晚，一位陌生人走了进来，想要一块能向他展示未来的钟表。",
  },
  {
    title: "录制广告",
    description: "使用逼真的 AI 语音创作专业的商业广告",
    gradient: "from-pink-400 to-pink-100",
    href: "/text-to-speech?text=为您介绍 BrightBean 咖啡——您品尝过的最丝滑的烘焙。源自高海拔农场，经过完美的慢火烘焙，每周新鲜送达您的家门。在非凡的味觉中醒来。立即尝试 BrightBean，首袋免费。",
  },
  {
    title: "导演电影片段",
    description: "为电影和视频生成富有戏剧性的对话",
    gradient: "from-violet-500 to-violet-100",
    href: "/text-to-speech?text=雨水拍打着窗户，她转身面向他。“你一直都知道，对吧？”她低声说道，声音几乎难以支撑。他走上前，下颌紧绷。“我做了我必须做的事。”他们之间的沉默比窗外的风暴还要响亮。",
  },
  {
    title: "游戏角色配音",
    description: "通过动态的角色声音构建沉浸式世界",
    gradient: "from-orange-400 to-orange-100",
    href: "/text-to-speech?text=听好了，冒险者。艾申维尔王国正在崩溃，永恒水晶已被粉碎成七块。你是唯一能重新组装它的人。拿出你的勇气，磨利你的刀刃，在黎明之门与我汇合。时间不在我们这边。",
  },
  {
    title: "播客开场白",
    description: "从第一秒起就抓住听众的耳朵",
    gradient: "from-blue-500 to-blue-100",
    href: "/text-to-speech?text=大家好，欢迎回到《好奇心》的新一期节目。在这个播客中，我们会深入探讨塑造我们世界的故事、科学和奇思妙想。我是你们的主持人，今天我们请到了一位令人惊叹的嘉宾，他将挑战你过去认知的一切。",
  },
  {
    title: "冥想引导",
    description: "为康养内容创作舒缓放松的音频",
    gradient: "from-lime-400 to-lime-100",
    href: "/text-to-speech?text=闭上你的眼睛，深呼吸……憋气，轻轻地……然后呼气。感受一整天的重担正在慢慢融化。随着每一次呼吸，你正沉浸在更深层的平静中。现在你哪儿都不需要去。就在这里。就在当下。吸入平静，呼出压力。",
  },
];