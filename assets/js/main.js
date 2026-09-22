/* ============================================================================
   渲染逻辑 —— 一般不需要修改这个文件
   想改文字 / 项目 / 经历，请编辑 data/content.js
   ========================================================================== */
(function () {
  'use strict';

  var data = window.SITE || {};
  var settings = data.settings || {};
  var ui = data.ui || {};
  var sections = settings.sections || {};

  var STORAGE_KEY = 'site-lang';
  var lang = 'zh';
  try {
    lang = localStorage.getItem(STORAGE_KEY) || settings.defaultLang || 'zh';
  } catch (e) {
    lang = settings.defaultLang || 'zh';
  }
  if (lang !== 'zh' && lang !== 'en') lang = 'zh';

  /* ---------- 基础工具 ---------- */
  function t(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'object') {
      return value[lang] || value.zh || value.en || '';
    }
    return String(value);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function render(hostName, nodes) {
    var host = document.querySelector('[data-render="' + hostName + '"]');
    if (!host) return null;
    host.textContent = '';
    (Array.isArray(nodes) ? nodes : [nodes]).forEach(function (node) {
      if (node) host.appendChild(node);
    });
    return host;
  }

  /* 生成区块标题（小标签 + 标题 + 导语） */
  function sectionHead(key, kicker) {
    var block = data[key] || {};
    var wrap = el('div', 'section-head');
    if (kicker) {
      wrap.appendChild(el('p', 'eyebrow', t(kicker)));
    }
    wrap.appendChild(el('h2', 'section-title', t(block.title)));
    if (block.lead) wrap.appendChild(el('p', 'section-lead', t(block.lead)));
    return wrap;
  }

  /* 图片位：图片存在时显示图片，不存在时显示占位提示 */
  function media(src, alt, extraClass) {
    var box = el('div', 'media' + (extraClass ? ' ' + extraClass : ''));
    var hint = el('div', 'media-hint');
    hint.appendChild(el('span', null, lang === 'zh' ? '图片位置' : 'Image slot'));
    hint.appendChild(el('code', null, src || 'assets/img/your-photo.jpg'));
    box.appendChild(hint);

    if (src) {
      var img = el('img');
      img.alt = alt || '';
      img.loading = 'lazy';
      img.addEventListener('load', function () { box.classList.add('has-image'); });
      img.addEventListener('error', function () { box.classList.add('is-empty'); });
      img.src = src;
      box.appendChild(img);
    }
    return box;
  }

  /* 图标（内置 SVG，不依赖任何外部资源） */
  var ICONS = {
    leaf: '<path d="M12 3c5 2 8 6 8 11a8 8 0 0 1-8 8 8 8 0 0 1-8-8c0-5 3-9 8-11z"/><path d="M12 21V7"/>',
    chart: '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/>',
    air: '<path d="M3 8h10a3 3 0 1 0-3-3"/><path d="M3 12h14a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
    shield: '<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/>'
  };

  /* LinkedIn 小图标 */
  var LINKEDIN_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
    + '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z"/></svg>';

  function icon(name) {
    var wrap = el('span', 'card-icon');
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'
      + (ICONS[name] || ICONS.leaf) + '</svg>';
    return wrap;
  }

  /* 带图标的超链接（目前用于领英） */
  function linkedinLink(className) {
    var info = (data.contact || {}).linkedin || {};
    if (!info.url) return null;
    var link = el('a', className, t(ui.linkedinLabel));
    link.href = info.url;
    link.target = '_blank';
    link.rel = 'noopener';
    var mark = el('span', 'linkedin-mark');
    mark.setAttribute('aria-hidden', 'true');
    mark.innerHTML = LINKEDIN_SVG;
    link.insertBefore(mark, link.firstChild);
    var arrow = el('span', 'link-arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    link.appendChild(arrow);
    return link;
  }

  /* ---------- 各区块渲染 ---------- */

  function renderBrand() {
    var p = data.profile || {};
    var nameNodes = document.querySelectorAll('[data-bind="name"]');
    var titleNodes = document.querySelectorAll('[data-bind="title"]');
    Array.prototype.forEach.call(nameNodes, function (n) { n.textContent = t(p.name); });
    Array.prototype.forEach.call(titleNodes, function (n) { n.textContent = t(p.title); });
  }

  function renderNav() {
    var nav = ui.nav || {};
    Array.prototype.forEach.call(document.querySelectorAll('[data-nav]'), function (link) {
      var key = link.getAttribute('data-nav');
      if (nav[key]) link.textContent = t(nav[key]);
    });

    var insightsLink = document.querySelector('[data-nav="insights"]');
    if (insightsLink) insightsLink.hidden = !sections.insights;

    var langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = t(ui.langLabel);

    var cvBtn = document.getElementById('cvButton');
    if (cvBtn) {
      cvBtn.textContent = t(ui.cvButton);
      cvBtn.hidden = !sections.cvDownload;
      cvBtn.onclick = function () {
        window.open((data.contact || {}).cvFile || '#', '_blank');
      };
    }
  }

  function renderHero() {
    var p = data.profile || {};

    var left = el('div', 'hero-copy');
    if (p.eyebrow) left.appendChild(el('p', 'eyebrow', t(p.eyebrow)));
    left.appendChild(el('h1', 'hero-name', t(p.name)));
    left.appendChild(el('p', 'hero-title', t(p.title)));
    left.appendChild(el('p', 'hero-tagline', t(p.tagline)));

    var actions = el('div', 'hero-actions');
    var primary = el('a', 'btn btn-primary', t(ui.heroPrimary));
    primary.href = '#services';
    var secondary = el('a', 'btn btn-outline', t(ui.heroSecondary));
    secondary.href = '#projects';
    actions.appendChild(primary);
    actions.appendChild(secondary);
    left.appendChild(actions);

    if (Array.isArray(p.stats) && p.stats.length) {
      var stats = el('dl', 'stat-row');
      p.stats.forEach(function (s) {
        var item = el('div', 'stat');
        item.appendChild(el('dt', 'stat-value', t(s.value)));
        item.appendChild(el('dd', 'stat-label', t(s.label)));
        stats.appendChild(item);
      });
      left.appendChild(stats);
    }

    var right = el('div', 'hero-media');
    var card = el('div', 'portrait-card');
    card.appendChild(media(p.avatar, t(p.name), 'portrait'));
    if (Array.isArray(p.badges) && p.badges.length) {
      var badges = el('ul', 'badge-row');
      p.badges.forEach(function (b) { badges.appendChild(el('li', null, b)); });
      card.appendChild(badges);
    }
    var loc = el('p', 'hero-location');
    loc.textContent = t(p.location);
    card.appendChild(loc);
    var social = linkedinLink('hero-social');
    if (social) card.appendChild(social);
    right.appendChild(card);

    render('hero', [left, right]);
  }

  function renderAbout() {
    var a = data.about || {};
    var head = sectionHead('about');
    var layout = el('div', 'about-layout');
    var text = el('div', 'about-text');
    (a.paragraphs || []).forEach(function (para) {
      text.appendChild(el('p', null, t(para)));
    });
    layout.appendChild(text);

    var highlights = el('ul', 'highlight-list');
    (a.highlights || []).forEach(function (h) {
      var li = el('li', 'highlight');
      li.appendChild(el('h3', null, t(h.title)));
      li.appendChild(el('p', null, t(h.text)));
      highlights.appendChild(li);
    });
    layout.appendChild(highlights);

    render('about', [head, layout]);
  }

  function renderExpertise() {
    var e = data.expertise || {};
    var grid = el('div', 'card-grid');
    (e.items || []).forEach(function (item) {
      var card = el('article', 'card');
      card.appendChild(icon(item.icon));
      card.appendChild(el('h3', 'card-title', t(item.title)));
      card.appendChild(el('p', 'card-text', t(item.text)));
      if (Array.isArray(item.tags) && item.tags.length) {
        var tags = el('ul', 'tag-list');
        item.tags.forEach(function (tag) { tags.appendChild(el('li', 'tag', t(tag))); });
        card.appendChild(tags);
      }
      grid.appendChild(card);
    });
    render('expertise', [sectionHead('expertise'), grid]);
  }

  function renderServices() {
    var s = data.services || {};
    var nodes = [sectionHead('services')];

    var grid = el('div', 'card-grid');
    (s.items || []).forEach(function (item) {
      var card = el('article', 'card');
      card.appendChild(icon(item.icon));
      card.appendChild(el('h3', 'card-title', t(item.title)));
      card.appendChild(el('p', 'card-text', t(item.text)));
      if (Array.isArray(item.tags) && item.tags.length) {
        var tags = el('ul', 'tag-list');
        item.tags.forEach(function (tag) { tags.appendChild(el('li', 'tag', t(tag))); });
        card.appendChild(tags);
      }
      grid.appendChild(card);
    });
    nodes.push(grid);

    var split = el('div', 'service-split');

    var eng = el('div', 'service-block');
    eng.appendChild(el('h3', 'service-block-title', t(s.engagementTitle)));
    var engList = el('ul', 'pill-list');
    (s.engagement || []).forEach(function (x) {
      engList.appendChild(el('li', 'pill-item', t(x)));
    });
    eng.appendChild(engList);
    split.appendChild(eng);

    var proc = el('div', 'service-block');
    proc.appendChild(el('h3', 'service-block-title', t(s.processTitle)));
    var steps = el('ol', 'step-list');
    (s.process || []).forEach(function (x, index) {
      var item = el('li', 'step-item');
      var num = String(index + 1);
      item.appendChild(el('span', 'step-index', num.length < 2 ? '0' + num : num));
      item.appendChild(el('span', 'step-text', t(x)));
      steps.appendChild(item);
    });
    proc.appendChild(steps);
    split.appendChild(proc);

    nodes.push(split);

    if (s.cta) {
      var cta = el('div', 'service-cta');
      cta.appendChild(el('p', 'service-cta-text', t(s.cta)));
      var mail = el('a', 'btn btn-primary', t(ui.consultingCta));
      mail.href = 'mailto:' + ((data.contact || {}).email || '');
      cta.appendChild(mail);
      nodes.push(cta);
    }

    render('services', nodes);
  }

  function projectCard(item) {
    var card = el('article', 'project' + (item.featured === false ? ' project-compact' : ''));

    var head = el('div', 'project-head');
    head.appendChild(el('h3', 'project-name', t(item.name)));
    var meta = el('p', 'project-meta');
    [t(item.location), t(item.role)].filter(Boolean).forEach(function (part, i) {
      if (i > 0) meta.appendChild(el('span', 'dot', '·'));
      meta.appendChild(el('span', null, part));
    });
    head.appendChild(meta);
    card.appendChild(head);

    var body = el('div', 'project-body');
    body.appendChild(media(item.image, t(item.name), 'project-media'));

    var detail = el('div', 'project-detail');
    if (Array.isArray(item.metrics) && item.metrics.length) {
      var metrics = el('dl', 'metric-row');
      item.metrics.forEach(function (m) {
        var mWrap = el('div', 'metric');
        mWrap.appendChild(el('dt', 'metric-value', t(m.value)));
        mWrap.appendChild(el('dd', 'metric-label', t(m.label)));
        metrics.appendChild(mWrap);
      });
      detail.appendChild(metrics);
    }
    if (Array.isArray(item.bullets) && item.bullets.length) {
      var ul = el('ul', 'bullet-list');
      item.bullets.forEach(function (b) { ul.appendChild(el('li', null, t(b))); });
      detail.appendChild(ul);
    }
    if (Array.isArray(item.tags) && item.tags.length) {
      var tags = el('ul', 'tag-list');
      item.tags.forEach(function (tag) { tags.appendChild(el('li', 'tag', t(tag))); });
      detail.appendChild(tags);
    }
    if (item.link) {
      var link = el('a', 'project-link', lang === 'zh' ? '查看项目介绍 →' : 'More about this project →');
      link.href = item.link;
      link.target = '_blank';
      link.rel = 'noopener';
      detail.appendChild(link);
    }
    body.appendChild(detail);
    card.appendChild(body);
    return card;
  }

  function renderProjects() {
    var p = data.projects || {};
    var nodes = [sectionHead('projects')];
    var featured = (p.items || []).filter(function (i) { return i.featured !== false; });
    featured.forEach(function (item) { nodes.push(projectCard(item)); });

    if (sections.otherProjects && Array.isArray(p.otherItems) && p.otherItems.length) {
      var wrap = el('div', 'other-projects');
      wrap.appendChild(el('h3', 'other-title', t(ui.projectsOtherTitle)));
      var list = el('ul', 'other-list');
      p.otherItems.forEach(function (item) {
        var li = el('li', 'other-item');
        li.appendChild(el('span', 'other-name', t(item.name)));
        var meta = el('span', 'other-meta');
        meta.textContent = [t(item.location), t(item.role)].filter(Boolean).join(' · ');
        li.appendChild(meta);
        list.appendChild(li);
      });
      wrap.appendChild(list);
      nodes.push(wrap);
    }
    render('projects', nodes);
  }

  function renderExperience() {
    var e = data.experience || {};
    var timeline = el('ol', 'timeline');
    (e.items || []).forEach(function (item) {
      var li = el('li', 'timeline-item');
      var head = el('div', 'timeline-head');
      head.appendChild(el('h3', 'timeline-title', t(item.company)));
      var meta = el('p', 'timeline-meta');
      meta.textContent = [t(item.role), t(item.period), t(item.location)].filter(Boolean).join(' · ');
      head.appendChild(meta);
      li.appendChild(head);

      var ul = el('ul', 'bullet-list');
      (item.bullets || []).forEach(function (b) { ul.appendChild(el('li', null, t(b))); });
      li.appendChild(ul);
      timeline.appendChild(li);
    });
    render('experience', [sectionHead('experience'), timeline]);
  }

  function renderEducation() {
    var e = data.education || {};
    var grid = el('div', 'edu-grid');
    (e.items || []).forEach(function (item) {
      var card = el('article', 'edu-card');
      card.appendChild(el('p', 'edu-period', t(item.period)));
      card.appendChild(el('h3', 'edu-school', t(item.school)));
      card.appendChild(el('p', 'edu-degree', t(item.degree)));
      card.appendChild(el('p', 'edu-location', t(item.location)));
      if (item.courses) {
        var courses = el('p', 'edu-courses');
        courses.appendChild(el('strong', null, lang === 'zh' ? '主修课程：' : 'Core modules: '));
        courses.appendChild(document.createTextNode(t(item.courses)));
        card.appendChild(courses);
      }
      grid.appendChild(card);
    });
    render('education', [sectionHead('education'), grid]);
  }

  function renderSkills() {
    var s = data.skills || {};
    var grid = el('div', 'skill-grid');
    (s.groups || []).forEach(function (group) {
      var box = el('div', 'skill-group');
      box.appendChild(el('h3', 'skill-title', t(group.title)));
      var list = el('ul', 'skill-list');
      (group.items || []).forEach(function (item) {
        list.appendChild(el('li', null, t(item)));
      });
      box.appendChild(list);
      grid.appendChild(box);
    });
    render('skills', [sectionHead('skills'), grid]);
  }

  function renderInsights() {
    var section = document.getElementById('insights');
    if (section) section.hidden = !sections.insights;
    if (!sections.insights) return;

    var ins = data.insights || {};
    var grid = el('div', 'insight-grid');
    (ins.items || []).forEach(function (item) {
      var card = el('article', 'card insight-card');
      card.appendChild(el('p', 'insight-date', t(item.date)));
      card.appendChild(el('h3', 'card-title', t(item.title)));
      card.appendChild(el('p', 'card-text', t(item.summary)));
      if (item.link) {
        var link = el('a', 'card-link', lang === 'zh' ? '阅读全文 →' : 'Read more →');
        link.href = item.link;
        link.target = '_blank';
        link.rel = 'noopener';
        card.appendChild(link);
      }
      grid.appendChild(card);
    });
    render('insights', [sectionHead('insights'), grid]);
  }

  function renderContact() {
    var c = data.contact || {};
    var box = el('div', 'contact-box');
    box.appendChild(el('h2', 'section-title', t(c.title)));
    box.appendChild(el('p', 'section-lead', t(c.lead)));

    var list = el('ul', 'contact-list');

    function addItem(label, valueNode) {
      var li = el('li', 'contact-item');
      li.appendChild(el('span', 'contact-label', label));
      li.appendChild(valueNode);
      list.appendChild(li);
    }

    if (c.email) {
      var mail = el('a', 'contact-value', c.email);
      mail.href = 'mailto:' + c.email;
      addItem(lang === 'zh' ? '邮箱' : 'Email', mail);
    }
    var li = (c.linkedin || {});
    if (li.url) {
      var lnk = linkedinLink('contact-value contact-link');
      if (lnk) addItem('LinkedIn', lnk);
    } else if (li.label) {
      var pending = el(
        'span',
        'contact-value contact-pending',
        li.label + (lang === 'zh' ? '（待补充链接）' : ' (link to be added)')
      );
      addItem('LinkedIn', pending);
    }
    if (sections.phone && c.phone) {
      addItem(lang === 'zh' ? '电话' : 'Phone', el('span', 'contact-value', c.phone));
    }
    if (sections.wechat && c.wechat) {
      addItem(lang === 'zh' ? '微信' : 'WeChat', el('span', 'contact-value', c.wechat));
    }
    box.appendChild(list);

    // 可选的微信二维码：填写 contact.wechatQr 并打开 settings.sections.wechat 后再显示
    if (sections.wechat && c.wechatQr) {
      box.appendChild(media(c.wechatQr, lang === 'zh' ? '微信二维码' : 'WeChat QR code', 'contact-qr'));
    }

    render('contact', box);
  }

  function renderFooter() {
    var p = data.profile || {};
    var box = el('div', 'footer-wrap');
    box.appendChild(el('p', 'footer-name', '© ' + new Date().getFullYear() + ' ' + t(p.name)));
    box.appendChild(el('p', 'footer-note', t(ui.footerNote)));
    render('footer', box);
  }

  /* ---------- 主题与语言 ---------- */
  function applyTheme() {
    var theme = settings.theme || {};
    var root = document.documentElement;
    if (theme.accent) root.style.setProperty('--accent', theme.accent);
    if (theme.accent2) root.style.setProperty('--accent-2', theme.accent2);
    if (theme.bg) root.style.setProperty('--bg', theme.bg);
    if (theme.ink) root.style.setProperty('--ink', theme.ink);
  }

  function renderAll() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh'
      ? '李圣宇 | 绿色建筑工程师 · 建筑性能模拟与气流组织分析'
      : 'Shengyu Li | Green Building Engineer · Performance Simulation & CFD';
    renderBrand();
    renderNav();
    renderHero();
    renderAbout();
    renderExpertise();
    renderServices();
    renderProjects();
    renderExperience();
    renderEducation();
    renderSkills();
    renderInsights();
    renderContact();
    renderFooter();
    markReveals();
  }

  /* 给主要卡片加上滚动出现动画（不会影响悬停效果） */
  var revealObserver = null;
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }

  function markReveals() {
    var targets = document.querySelectorAll(
      '.card, .project, .other-projects, .highlight, .edu-card, .skill-group, .timeline-item'
    );
    Array.prototype.forEach.call(targets, function (node) {
      node.classList.add('reveal');
      if (revealObserver) revealObserver.observe(node);
      else node.classList.add('is-visible');
    });
  }

  /* ---------- 交互 ---------- */
  function initInteractions() {
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        lang = lang === 'zh' ? 'en' : 'zh';
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
        renderAll();
      });
    }

    var navToggle = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          nav.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    var header = document.getElementById('siteHeader');
    var toTop = document.getElementById('toTop');
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle('is-stuck', y > 12);
      if (toTop) toTop.hidden = y < 600;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 当前所在区块高亮
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    if ('IntersectionObserver' in window) {
      var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach(function (link) {
        var target = document.querySelector(link.getAttribute('href'));
        if (target) sectionObserver.observe(target);
      });
    }
  }

  /* ---------- 启动 ---------- */
  applyTheme();
  renderAll();
  initInteractions();
})();
