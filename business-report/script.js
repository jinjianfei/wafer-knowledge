// ===== 数据定义 =====
const categories = [
  {
    key: 'cognition', name: '认知篇', range: '01-04', color: '#2563eb',
    slides: [
      { id: 'slide01', num: '01', title: '经营分析会是战略落地关键抓手', subtitle: 'DSTE战略执行的核心枢纽' },
      { id: 'slide02', num: '02', title: '经营分析会是作战会议', subtitle: '聚焦打仗，而非汇报' },
      { id: 'slide03', num: '03', title: '经营分析报告为谁而写', subtitle: '面向行动，而非面向领导' },
      { id: 'slide04', num: '04', title: '一报一会的终极目的', subtitle: '对齐目标、识别差距、落实行动' },
    ]
  },
  {
    key: 'system', name: '制度篇', range: '05-06', color: '#0891b2',
    slides: [
      { id: 'slide05', num: '05', title: '会议管理制度', subtitle: '四层会议体系与闭环机制' },
      { id: 'slide06', num: '06', title: '经营分析会输入与输出', subtitle: '会前准备、会中控制、会后跟踪' },
    ]
  },
  {
    key: 'method', name: '方法篇', range: '07-10', color: '#059669',
    slides: [
      { id: 'slide07', num: '07', title: '3GAP + 3LIST 前瞻管理', subtitle: '从差距出发，以清单落地' },
      { id: 'slide08', num: '08', title: '五步差距分析法', subtitle: '看清现状、找到根因、明确机会' },
      { id: 'slide09', num: '09', title: '根因分析方法（5Why/鱼骨图）', subtitle: '穿透表象，定位真因' },
      { id: 'slide10', num: '10', title: '滚动预测方法论', subtitle: '基于事实预测，动态调整资源' },
    ]
  },
  {
    key: 'budget', name: '预算篇', range: '11-14', color: '#d97706',
    slides: [
      { id: 'slide11', num: '11', title: '全面预算管理体系', subtitle: '战略→预算→执行→考核的闭环' },
      { id: 'slide12', num: '12', title: '预算执行监控机制', subtitle: '预实对比、预警分析、动态调整' },
      { id: 'slide13', num: '13', title: '资源配置效率分析', subtitle: '人效、费效、投效三维评估' },
      { id: 'slide14', num: '14', title: '预算调整与追加规则', subtitle: '弹性预算与刚性约束的平衡' },
    ]
  },
  {
    key: 'strategy', name: '策略篇', range: '15-16', color: '#dc2626',
    slides: [
      { id: 'slide15', num: '15', title: '策略制定与解码', subtitle: '从战略意图到战术行动的转化' },
      { id: 'slide16', num: '16', title: '行动计划与PDCA闭环', subtitle: '计划→执行→检查→改进' },
    ]
  },
];

const allSlides = categories.flatMap(c => c.slides);

// ===== DOM 元素 =====
const sidebar = document.getElementById('sidebar');
const navContainer = document.getElementById('navContainer');
const mainContent = document.getElementById('mainContent');
const mobileOverlay = document.getElementById('mobileOverlay');

// ===== 初始化导航 =====
function initNav() {
  navContainer.innerHTML = '';
  categories.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';
    catDiv.dataset.cat = cat.key;

    const headerBtn = document.createElement('button');
    headerBtn.className = 'cat-header';
    headerBtn.innerHTML = `
      <span class="cat-dot" style="background:${cat.color}"></span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-range">${cat.range}</span>
      <svg class="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    `;

    const subItems = document.createElement('div');
    subItems.className = 'sub-items';
    cat.slides.forEach(slide => {
      const item = document.createElement('a');
      item.className = 'sub-item';
      item.href = `#${slide.id}`;
      item.dataset.target = slide.id;
      item.innerHTML = `
        <span class="sub-num" style="color:${cat.color}">${slide.num}</span>
        <span>${slide.title}</span>
      `;
      item.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSlide(slide.id);
        closeMobileMenu();
      });
      subItems.appendChild(item);
    });

    // 点击分类头部：展开/收起子项 + 旋转箭头
    headerBtn.addEventListener('click', () => {
      const isOpen = subItems.classList.contains('open');
      const arrow = headerBtn.querySelector('.cat-arrow');
      if (isOpen) {
        subItems.classList.remove('open');
        if (arrow) arrow.classList.remove('expanded');
      } else {
        subItems.classList.add('open');
        if (arrow) arrow.classList.add('expanded');
      }
    });

    catDiv.appendChild(headerBtn);
    catDiv.appendChild(subItems);
    navContainer.appendChild(catDiv);
  });
}

// ===== 一键展开/收起所有 =====
let allExpanded = true;
function toggleAllCategories() {
  allExpanded = !allExpanded;
  document.querySelectorAll('.category').forEach(catDiv => {
    const subItems = catDiv.querySelector('.sub-items');
    const arrow = catDiv.querySelector('.cat-arrow');
    if (allExpanded) {
      subItems.classList.add('open');
      if (arrow) arrow.classList.add('expanded');
    } else {
      subItems.classList.remove('open');
      if (arrow) arrow.classList.remove('expanded');
    }
  });
}

// ===== 视图切换 =====
function showSlideView() {
  document.querySelectorAll('.slide').forEach(s => s.style.display = 'block');
  const reportsPage = document.getElementById('reportsPage');
  if (reportsPage) reportsPage.style.display = 'none';
  const pdfPage = document.getElementById('pdfPage');
  if (pdfPage) pdfPage.style.display = 'none';
  updateNavActive(window.location.hash || '#slide01');
}

function showReports() {
  document.querySelectorAll('.slide').forEach(s => s.style.display = 'none');
  const reportsPage = document.getElementById('reportsPage');
  if (reportsPage) {
    reportsPage.style.display = 'block';
    reportsPage.scrollIntoView({ behavior: 'instant' });
  }
  const pdfPage = document.getElementById('pdfPage');
  if (pdfPage) pdfPage.style.display = 'none';
  document.querySelectorAll('.sub-item').forEach(i => i.classList.remove('active'));
}

function showPDF(filename, title) {
  document.querySelectorAll('.slide').forEach(s => s.style.display = 'none');
  const reportsPage = document.getElementById('reportsPage');
  if (reportsPage) reportsPage.style.display = 'none';
  const pdfPage = document.getElementById('pdfPage');
  if (pdfPage) {
    pdfPage.style.display = 'block';
    pdfPage.scrollIntoView({ behavior: 'instant' });
    document.getElementById('pdfTitle').textContent = title;
    document.getElementById('pdfFrame').src = `reports/${filename}`;
  }
  document.querySelectorAll('.sub-item').forEach(i => i.classList.remove('active'));
}

function backToReports() {
  showReports();
}

// ===== 滚动到指定slide =====
function scrollToSlide(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, null, `#${id}`);
    updateNavActive(`#${id}`);
    updateBottomNav(id);
  }
}

// ===== 更新导航高亮 =====
function updateNavActive(hash) {
  const targetId = hash.replace('#', '');
  document.querySelectorAll('.sub-item').forEach(item => {
    item.classList.toggle('active', item.dataset.target === targetId);
  });

  // 自动展开所在分类
  categories.forEach(cat => {
    if (cat.slides.some(s => s.id === targetId)) {
      const catDiv = document.querySelector(`.category[data-cat="${cat.key}"]`);
      if (catDiv) {
        const subItems = catDiv.querySelector('.sub-items');
        const arrow = catDiv.querySelector('.cat-arrow');
        if (subItems && !subItems.classList.contains('open')) {
          subItems.classList.add('open');
          if (arrow) arrow.classList.add('expanded');
        }
      }
    }
  });
}

// ===== 底部导航更新 =====
function updateBottomNav(currentId) {
  const idx = allSlides.findIndex(s => s.id === currentId);
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageInfo = document.getElementById('pageInfo');

  if (idx > 0) {
    prevBtn.disabled = false;
    prevBtn.onclick = () => scrollToSlide(allSlides[idx - 1].id);
  } else {
    prevBtn.disabled = true;
  }

  if (idx >= 0 && idx < allSlides.length - 1) {
    nextBtn.disabled = false;
    nextBtn.onclick = () => scrollToSlide(allSlides[idx + 1].id);
  } else {
    nextBtn.disabled = true;
  }

  if (pageInfo && idx >= 0) {
    pageInfo.textContent = `${allSlides[idx].num} / ${allSlides.length.toString().padStart(2, '0')}`;
  }
}

// ===== 滚动监听（高亮当前slide） =====
let currentSlideId = '';
function onScroll() {
  const slides = document.querySelectorAll('.slide');
  let closest = null;
  let minDist = Infinity;

  slides.forEach(slide => {
    const rect = slide.getBoundingClientRect();
    const dist = Math.abs(rect.top);
    if (dist < minDist) {
      minDist = dist;
      closest = slide.id;
    }
  });

  if (closest && closest !== currentSlideId) {
    currentSlideId = closest;
    updateNavActive(`#${closest}`);
    updateBottomNav(closest);
  }

  // 回到顶部按钮
  const backtop = document.getElementById('backtop');
  if (backtop) {
    backtop.classList.toggle('show', window.scrollY > 400);
  }
}

// ===== 移动菜单 =====
function toggleMobileMenu() {
  sidebar.classList.toggle('open');
  mobileOverlay.classList.toggle('show');
}

function closeMobileMenu() {
  sidebar.classList.remove('open');
  mobileOverlay.classList.remove('show');
}

// ===== 键盘导航 =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn && !prevBtn.disabled) prevBtn.click();
  } else if (e.key === 'ArrowRight') {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn && !nextBtn.disabled) nextBtn.click();
  }
});

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();

  // 默认展开所有分类
  document.querySelectorAll('.category').forEach(catDiv => {
    const subItems = catDiv.querySelector('.sub-items');
    const arrow = catDiv.querySelector('.cat-arrow');
    if (subItems) subItems.classList.add('open');
    if (arrow) arrow.classList.add('expanded');
  });

  // 绑定滚动监听
  window.addEventListener('scroll', onScroll, { passive: true });

  // 初始高亮
  const hash = window.location.hash || '#slide01';
  if (hash.startsWith('#slide')) {
    updateNavActive(hash);
    updateBottomNav(hash.replace('#', ''));
    setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, 100);
  }

  // 点击overlay关闭菜单
  mobileOverlay.addEventListener('click', closeMobileMenu);

  // 绑定一键展开/收起（大板块标题按钮）
  const collapseBtn = document.getElementById('collapseAllBtn');
  if (collapseBtn) collapseBtn.addEventListener('click', toggleAllCategories);

  // 初始化底部导航
  updateBottomNav('slide01');
});
