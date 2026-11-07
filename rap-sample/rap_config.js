// Rap sample config — all numbers live here (no magic numbers in game code).
var RAP_CONFIG = {
  dims: ['控场','音准','Flow','押韵','填词','气息','声线','即兴','爆发','感染力','人气','格局'],
  draftRounds: 12,
  draftOptions: 5,
  swapsPerGame: 3,
  rngSwing: 10,
  battles: [
    { name: '第一回合 · 街头即兴场', dims: [7, 2], oppName: '街头队', oppBase: 91, desc: '比即兴与 Flow——临场变向，就是 Freestyle。对面是高手，构筑不够硬过不去。' },
    { name: '第二回合 · 录音室场', dims: [4, 1], oppName: '录音室队', oppBase: 92, desc: '比填词与音准——写得狠，还得唱得准。对面是高手，构筑不够硬过不去。' },
    { name: '决胜回合 · 格局场', dims: [11], oppName: '老江湖队', oppBase: 85, desc: '只比格局。深情、顾家、包容——这一项，全场没几个人够得着。' }
  ],
  endings: [
    { wins: 3, name: '地下传奇', desc: '三回合全胜。你拼出来的这个人，根本不该存在。' },
    { wins: 2, name: '小有名气', desc: '两胜一负。已经有人开始打听你的名字了。' },
    { wins: 1, name: '首秀翻车', desc: '只赢了一回合。舞台认人，下次把构筑再磨一磨。' },
    { wins: 0, name: '麦克风都没拿稳', desc: '三回合全负。没关系，传奇都是从第一次上台开始的——大概。' }
  ],
  gejuHintThreshold: 95,
  sessionKey: 'rap_sample_session_v1'
};
if (typeof window !== 'undefined') window.RAP_CONFIG = RAP_CONFIG;
if (typeof module !== 'undefined') module.exports = RAP_CONFIG;
