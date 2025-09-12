(function () {
  const items = Array.from(document.querySelectorAll('#scroll .list span'));

  const centerOf = el => {
    const r = el.getBoundingClientRect();
    return r.top + r.height / 2;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const viewportCenter = window.innerHeight * 0.5;
      let closest = null;
      let bestDist = Infinity;
      for (const el of items) {
        const d = Math.abs(centerOf(el) - viewportCenter);
        if (d < bestDist) { bestDist = d; closest = el; }
      }
      if (closest) {
        for (const el of items) el.classList.toggle('activ', el === closest);
      }
    });
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
(function () {
  const items = Array.from(document.querySelectorAll('#choose .list span'));

  const centerOf = el => {
    const r = el.getBoundingClientRect();
    return r.top + r.height / 2;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const viewportCenter = window.innerHeight * 0.5;
      let closest = null;
      let bestDist = Infinity;
      for (const el of items) {
        const d = Math.abs(centerOf(el) - viewportCenter);
        if (d < bestDist) { bestDist = d; closest = el; }
      }
      if (closest) {
        for (const el of items) el.classList.toggle('activ', el === closest);
      }
    });
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();
