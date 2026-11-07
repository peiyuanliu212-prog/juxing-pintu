// Rap sample config v2 — all numbers live here (no magic numbers in game code).
var RAP_CONFIG = {
  dims: ['控场','音准','Flow','押韵','填词','气息','声线','即兴','爆发','感染力','人气','格局'],
  draftRounds: 12,
  draftOptions: 5,
  swapsPerGame: 3,
  battles: [
    { name: '第一回合 · 街头即兴场', oppName: '街头队', oppBase: 95, desc: '地下场子，没有剧本。选一个打法再开麦——用你最硬的那一面打。',
      tactics: [
        { name: '纯即兴硬刚', desc: '只比即兴 · 波动大，赢了很炸', dims: [7], swing: 16, oppMod: 0 },
        { name: 'Flow 带节奏', desc: '比 Flow＋控场 · 稳扎稳打', dims: [2, 0], swing: 7, oppMod: 0 },
        { name: '先炸场再说', desc: '比 爆发＋感染力 · 气势压人', dims: [8, 9], swing: 10, oppMod: 1 }
      ] },
    { name: '第二回合 · 录音室场', oppName: '录音室队', oppBase: 97, desc: '进了棚，拼的是真功夫。选一个打法——词、准、密，总得占一样。',
      tactics: [
        { name: '词狠压人', desc: '只比填词 · 波动大', dims: [4], swing: 16, oppMod: 0 },
        { name: '唱准为王', desc: '比 音准＋声线 · 求稳', dims: [1, 6], swing: 7, oppMod: 0 },
        { name: '密词连珠炮', desc: '比 押韵＋气息 · 词密气足', dims: [3, 5], swing: 10, oppMod: 1 }
      ] },
    { name: '决胜回合 · 格局场', oppName: '老江湖队', oppBase: 85, desc: '最后一场，不比技术了。比的是这个人站在台上，稳不稳得住。',
      tactics: [
        { name: '只拼格局', desc: '只比格局 · 你懂的', dims: [11], swing: 8, oppMod: 0 },
        { name: '深情加人气', desc: '比 格局＋人气 · 口碑局', dims: [11, 10], swing: 8, oppMod: 2 },
        { name: '全部本事砸出去', desc: '比 12 维总评 · 拼整个构筑', dims: 'ALL', swing: 9, oppMod: 4 }
      ] }
  ],
  events: [
    { after: 0, title: '中场插曲 · 对手放话', text: '对面在网上放话，说你的拼将就是个草台班子。全场都在等你回应。',
      choices: [
        { name: '当场回怼', desc: '比 人气＋感染力 · 成了下一回合 +4，砸了 -4', dims: [10, 9], threshold: 84, win: 4, lose: -4 },
        { name: '笑笑不理', desc: '不比 · 下一回合稳稳 +1', dims: null, threshold: 0, win: 1, lose: 1 },
        { name: '把话筒递给队友', desc: '比 控场 · 成了下一回合 +3，砸了 0', dims: [0], threshold: 80, win: 3, lose: 0 }
      ] },
    { after: 1, title: '决胜前夜 · 家里来电话', text: '决胜前夜，家里打来电话，就一句：「唱你的，别管别人怎么说。」你的手，不抖了。',
      choices: [
        { name: '把这份稳当带上台', desc: '比 格局 · 成了决胜回合 +5，砸了也有 +1', dims: [11], threshold: 78, win: 5, lose: 1 },
        { name: '连夜再练两小时', desc: '比 气息 · 成了决胜回合 +4，砸了 -2（练过头也累）', dims: [5], threshold: 82, win: 4, lose: -2 },
        { name: '早点睡', desc: '不比 · 决胜回合 +2', dims: null, threshold: 0, win: 2, lose: 2 }
      ] }
  ],
  endings: [
    { wins: 3, name: '地下传奇', desc: '三回合全胜。你拼出来的这个人，根本不该存在。' },
    { wins: 2, name: '小有名气', desc: '两胜一负。已经有人开始打听你的名字了。' },
    { wins: 1, name: '首秀翻车', desc: '只赢了一回合。舞台认人，下次把构筑再磨一磨。' },
    { wins: 0, name: '麦克风都没拿稳', desc: '三回合全负。没关系，传奇都是从第一次上台开始的——大概。' }
  ],
  gejuHintThreshold: 95,
  sessionKey: 'rap_sample_session_v2'
};
if (typeof window !== 'undefined') window.RAP_CONFIG = RAP_CONFIG;
if (typeof module !== 'undefined') module.exports = RAP_CONFIG;
