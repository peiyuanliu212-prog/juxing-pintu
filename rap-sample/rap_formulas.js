// Rap sample formulas — pure calculation, never mutates state.
var RapFormulas = (function () {
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function composite(attrs, dims) {
    var s = 0;
    for (var i = 0; i < dims.length; i++) s += attrs[dims[i]];
    return s / dims.length;
  }
  // One battle round: my composite + swing vs opponent base + swing.
  function battleRound(myAttrs, battle, rng) {
    var mine = composite(myAttrs, battle.dims) + rng() * RAP_CONFIG.rngSwing;
    var opp = battle.oppBase + rng() * RAP_CONFIG.rngSwing;
    return { mine: mine, opp: opp, win: mine >= opp };
  }
  function total(attrs) { return attrs.reduce(function (a, b) { return a + b; }, 0); }
  return { mulberry32: mulberry32, composite: composite, battleRound: battleRound, total: total };
})();
if (typeof window !== 'undefined') window.RapFormulas = RapFormulas;
if (typeof module !== 'undefined') module.exports = RapFormulas;
