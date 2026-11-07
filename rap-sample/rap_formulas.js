// Rap sample formulas v2 — pure calculation, never mutates state.
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
  function resolveDims(attrs, dims) {
    if (dims === 'ALL') return attrs.map(function (_, i) { return i; });
    return dims;
  }
  function composite(attrs, dims) {
    var ds = resolveDims(attrs, dims), s = 0;
    for (var i = 0; i < ds.length; i++) s += attrs[ds[i]];
    return s / ds.length;
  }
  // One battle round with a chosen tactic: my composite + swing + event bonus vs opp base + tactic mod + swing.
  function battleRound(attrs, battle, tactic, rng, bonus) {
    var mine = composite(attrs, tactic.dims) + rng() * tactic.swing + (bonus || 0);
    var opp = battle.oppBase + tactic.oppMod + rng() * tactic.swing;
    return { mine: mine, opp: opp, win: mine >= opp };
  }
  // Event choice resolution. dims null = safe option, always applies its (win) value.
  function eventResult(attrs, choice, rng, bonus) {
    if (!choice.dims) return { ok: true, bonus: choice.win };
    var ok = composite(attrs, choice.dims) + (bonus || 0) + rng() * 6 >= choice.threshold + rng() * 6;
    return { ok: ok, bonus: ok ? choice.win : choice.lose };
  }
  function total(attrs) { return attrs.reduce(function (a, b) { return a + (b || 0); }, 0); }
  return { mulberry32: mulberry32, composite: composite, battleRound: battleRound, eventResult: eventResult, total: total, resolveDims: resolveDims };
})();
if (typeof window !== 'undefined') window.RapFormulas = RapFormulas;
if (typeof module !== 'undefined') module.exports = RapFormulas;
