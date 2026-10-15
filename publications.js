(() => {
  const list = document.querySelector('#publications .publication-list');
  if (!list) return;
  const older = Array.from(list.children).filter(card => card.classList.contains('publication-card')).slice(5);
  if (!older.length) return;
  const year = older[0].querySelector('time')?.textContent.trim();
  const details = document.createElement('details');
  details.className = 'older-publications';
  const summary = document.createElement('summary');
  const label = `Show more (${year ? `${year} and earlier · ` : ''}${older.length} publications)`;
  summary.textContent = label;
  const group = document.createElement('div');
  group.className = 'publication-list';
  older.forEach(card => group.append(card));
  details.append(summary, group);
  list.after(details);
  details.addEventListener('toggle', () => {
    summary.textContent = details.open ? 'Show fewer publications' : label;
  });
})();
