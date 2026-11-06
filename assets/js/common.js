export async function loadData(name) {
  const res = await fetch(new URL(`../../data/${name}.json`, import.meta.url));
  if (!res.ok) throw new Error(`加载 ${name} 失败: ${res.status}`);
  return res.json();
}

export function navHtml(base) {
  return `<nav><a href="${base}index.html">首页</a><a href="${base}flashcards/">闪卡</a><a href="${base}courseware/">课件</a><a href="${base}cases/">案例</a></nav>`;
}

export function mount(base, title) {
  document.title = title;
  document.querySelector("header").innerHTML = `<h1>${title}</h1>${navHtml(base)}`;
}

export function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
