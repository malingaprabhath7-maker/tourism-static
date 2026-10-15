// Shared browser behaviour: theme, currency and the saved-trip counter.
const RATE = 300;
const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
};

document.getElementById('theme')?.addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  store.set('tl-theme', dark ? 'dark' : 'light');
});

export const currency = () => (store.get('tl-currency') === 'LKR' ? 'LKR' : 'USD');
export const money = (usd: number) =>
  currency() === 'LKR' ? `Rs. ${Math.round(usd * RATE).toLocaleString('en-LK')}` : `$${usd.toLocaleString('en-US')}`;

export function renderPrices() {
  document.querySelectorAll<HTMLElement>('[data-usd]').forEach((el) => { el.textContent = money(Number(el.dataset.usd)); });
  document.querySelectorAll<HTMLElement>('[data-currency]').forEach((b) => (b.textContent = currency()));
  document.dispatchEvent(new CustomEvent('tl:currency'));
}
document.querySelectorAll<HTMLElement>('[data-currency]').forEach((b) => b.addEventListener('click', () => {
  store.set('tl-currency', currency() === 'USD' ? 'LKR' : 'USD');
  renderPrices();
}));

export const saved = (): string[] => { try { return JSON.parse(store.get('tl-trip') ?? '[]'); } catch { return []; } };
export function setSaved(list: string[]) { store.set('tl-trip', JSON.stringify(list)); renderCount(); }
export function renderCount() {
  const n = saved().length;
  document.querySelectorAll<HTMLElement>('[data-plan-count]').forEach((el) => { el.textContent = String(n); el.classList.toggle('hidden', n === 0); });
}

// save buttons: data-save="slug" with data-label-save / data-label-saved
export function renderSaveButtons() {
  const list = saved();
  document.querySelectorAll<HTMLButtonElement>('[data-save]').forEach((b) => {
    const on = list.includes(b.dataset.save!);
    b.setAttribute('aria-pressed', String(on));
    b.textContent = on ? b.dataset.labelSaved! : b.dataset.labelSave!;
  });
}
document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-save]');
  if (!b) return;
  const list = saved();
  const slug = b.dataset.save!;
  setSaved(list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]);
  renderSaveButtons();
});

renderPrices();
renderCount();
renderSaveButtons();
