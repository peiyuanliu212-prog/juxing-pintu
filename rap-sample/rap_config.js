// Rap sample config v2 — all numbers live here (no magic numbers in game code).
var RAP_CONFIG = {
  dims: ['控场','音准','Flow','押韵','填词','气息','声线','即兴','爆发','感染力','人气','格局'],
  draftRounds: 12,
  draftOptions: 5,
  swapsPerGame: 3,
  battles: [
    { name: '第一回合 · 天桥底下即兴场', oppName: '天桥艺术家联队', oppBase: 95, desc: '没有剧本，没有提词器，连音响都是借的。选个打法，开麦——用最离谱的那一面打。',
      tactics: [
        { name: '张嘴就来', desc: '只比即兴 · 词还在路上，嘴先到了', dims: [7], swing: 16, oppMod: 0 },
        { name: '踩着拍子遛弯', desc: '比 Flow＋控场 · 不慌，主打一个松弛', dims: [2, 0], swing: 7, oppMod: 0 },
        { name: '开场先吓他一跳', desc: '比 爆发＋感染力 · 气势这一块拿捏了', dims: [8, 9], swing: 10, oppMod: 1 }
      ] },
    { name: '第二回合 · 棚里见真章', oppName: '录音棚常驻大神', oppBase: 97, desc: '进了棚就没滤镜了。词、准、密，总得占一样——一样都不占的话，当我没说。',
      tactics: [
        { name: '把词怼他脸上', desc: '只比填词 · 波动大，字字带刺', dims: [4], swing: 16, oppMod: 0 },
        { name: '一个音都不许飘', desc: '比 音准＋声线 · 稳得像开了修音，但其实没开', dims: [1, 6], swing: 7, oppMod: 0 },
        { name: '嘴皮子开连发', desc: '比 押韵＋气息 · 一口气下去，听的人先喘', dims: [3, 5], swing: 10, oppMod: 1 }
      ] },
    { name: '决胜回合 · 格局之夜', oppName: '胡同口下棋大爷联队', oppBase: 85, desc: '最后一场不比技术了。大爷们棋盘一推：年轻人，就看你稳不稳得住。',
      tactics: [
        { name: '只拼格局', desc: '只比格局 · 你懂的', dims: [11], swing: 8, oppMod: 0 },
        { name: '走心局', desc: '比 格局＋人气 · 不飙高音，专攻眼眶', dims: [11, 10], swing: 8, oppMod: 2 },
        { name: '把家底全掏了', desc: '比 12 维总评 · 拼整个构筑，输了也不亏', dims: 'ALL', swing: 9, oppMod: 4 }
      ] }
  ],
  events: [
    { after: 0, title: '中场插曲 · 对面发小作文了', text: '对面连夜发了篇小作文阴阳你，说你的拼将是草台班子、麦都是租的。吃瓜群众已经搬好小板凳了。',
      choices: [
        { name: '当场开麦回怼', desc: '比 人气＋感染力 · 成了下一回合 +4，砸了 -4', dims: [10, 9], threshold: 84, win: 4, lose: -4 },
        { name: '已读乱回', desc: '不比 · 回他一个表情包，下一回合稳稳 +1', dims: null, threshold: 0, win: 1, lose: 1 },
        { name: '把麦递给队友', desc: '比 控场 · 成了下一回合 +3，砸了 0（队友背锅）', dims: [0], threshold: 80, win: 3, lose: 0 }
      ] },
    { after: 1, title: '决胜前夜 · 你妈来电话了', text: '决胜前夜，你妈打来电话：「赢不赢无所谓，唱完早点回来，锅里给你留了排骨。」你的手，突然就不抖了。',
      choices: [
        { name: '把排骨的祝福带上台', desc: '比 格局 · 成了决胜回合 +5，砸了也有 +1', dims: [11], threshold: 78, win: 5, lose: 1 },
        { name: '卷！连夜再练两小时', desc: '比 气息 · 成了决胜回合 +4，砸了 -2（卷过头也累）', dims: [5], threshold: 82, win: 4, lose: -2 },
        { name: '听妈妈的话，早点睡', desc: '不比 · 决胜回合 +2（妈妈的话要听）', dims: null, threshold: 0, win: 2, lose: 2 }
      ] }
  ],
  endings: [
    { wins: 3, name: '当晚封神', desc: '三回合全胜。胡同口连夜贴出了你的海报——虽然海报是你自己贴的。' },
    { wins: 2, name: '小有名气', desc: '两胜一负。已经有人在打听你了，主要是打听你的麦是在哪租的。' },
    { wins: 1, name: '首秀翻车，但翻得有节目效果', desc: '只赢了一回合。技术先放一边，综艺感这块你已经赢了。' },
    { wins: 0, name: '麦克风都没拿稳', desc: '三回合全负。没事，评委说了，你掉麦的姿势很有巨星潜质。' }
  ],
  gejuHintThreshold: 95,
  sessionKey: 'rap_sample_session_v2'
};
if (typeof window !== 'undefined') window.RAP_CONFIG = RAP_CONFIG;
if (typeof module !== 'undefined') module.exports = RAP_CONFIG;
