---
icon: material/home
---

<style>
  .hero {
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 100vw;
    left: calc(50% - 50vw);
    min-height: 78vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
  }
  .hero > *:not(.blob) {
    position: relative;
    z-index: 1;
  }
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: .55;
    pointer-events: none;
    z-index: 0;
  }
  .blob-1 {
    width: 440px;
    height: 440px;
    background: #c9adb0;
    top: -90px;
    left: -110px;
    animation: blob-drift1 14s ease-in-out infinite;
  }
  .blob-2 {
    width: 380px;
    height: 380px;
    background: #a9b8a3;
    bottom: -70px;
    right: -90px;
    animation: blob-drift2 17s ease-in-out infinite;
  }
  .blob-3 {
    width: 320px;
    height: 320px;
    background: #b9b0cb;
    top: 38%;
    left: 62%;
    animation: blob-drift3 20s ease-in-out infinite;
  }
  .blob-4 {
    width: 260px;
    height: 260px;
    background: #c2b7a4;
    top: 10%;
    left: 72%;
    animation: blob-drift4 23s ease-in-out infinite;
  }
  @keyframes blob-drift1 {
    0%   { transform: translate(0, 0) scale(1);      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
    25%  { transform: translate(110px, -80px) scale(1.18); border-radius: 44% 56% 58% 42% / 52% 44% 56% 48%; }
    50%  { transform: translate(210px, 50px) scale(.92);   border-radius: 58% 42% 44% 56% / 42% 58% 42% 58%; }
    75%  { transform: translate(90px, 150px) scale(1.22);  border-radius: 46% 54% 60% 40% / 56% 46% 54% 44%; }
    100% { transform: translate(-50px, 40px) scale(1.05);  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
  }
  @keyframes blob-drift2 {
    0%   { transform: translate(0, 0) scale(1);     border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
    25%  { transform: translate(-120px, 90px) scale(1.15); border-radius: 58% 42% 44% 56% / 44% 56% 44% 56%; }
    50%  { transform: translate(-230px, -40px) scale(.9);  border-radius: 42% 58% 56% 44% / 58% 42% 58% 42%; }
    75%  { transform: translate(-100px, -150px) scale(1.2); border-radius: 56% 44% 40% 60% / 44% 56% 44% 56%; }
    100% { transform: translate(40px, -50px) scale(1.05);   border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
  }
  @keyframes blob-drift3 {
    0%   { transform: translate(0, 0) scale(1);     border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
    25%  { transform: translate(-90px, -110px) scale(1.2); border-radius: 42% 58% 56% 44% / 58% 42% 58% 42%; }
    50%  { transform: translate(-180px, 60px) scale(.95);  border-radius: 58% 42% 44% 56% / 42% 58% 42% 58%; }
    75%  { transform: translate(-60px, 140px) scale(1.18); border-radius: 46% 54% 60% 40% / 56% 46% 54% 44%; }
    100% { transform: translate(60px, 30px) scale(1.04);   border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
  }
  @keyframes blob-drift4 {
    0%   { transform: translate(0, 0) scale(1);     border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
    25%  { transform: translate(80px, 120px) scale(1.15);  border-radius: 56% 44% 40% 60% / 44% 56% 44% 56%; }
    50%  { transform: translate(170px, -50px) scale(.92);  border-radius: 44% 56% 58% 42% / 52% 44% 56% 48%; }
    75%  { transform: translate(70px, -160px) scale(1.22); border-radius: 58% 42% 44% 56% / 44% 56% 44% 56%; }
    100% { transform: translate(-40px, -60px) scale(1.05); border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; }
  }
  .hero .eyebrow {
    font-size: 1.05rem;
    letter-spacing: 0.8em;
    text-indent: 0.4em;
    color: #a0988c;
    margin: 0 0 1.4rem 0;
    font-weight: 400;
    white-space: nowrap;
  }
  .hero .site-title {
    margin: 0 0 1.8rem 0;
    line-height: 1.15;
    transition: transform .15s ease-out;
  }
  .hero .site-title-en,
  .hero .site-title-cn {
    position: relative;
    overflow: hidden;
    display: block;
    font-weight: 800;
    color: #5c584f;
    animation: title-float 4s ease-in-out infinite;
  }
  .hero .site-title-en {
    font-size: clamp(4rem, 8.5vw, 7.5rem);
  }
  .hero .site-title-cn {
    display: block;
    margin-top: 1.7rem;
    font-size: clamp(2.2rem, 4.4vw, 3.6rem);
    font-weight: 700;
    letter-spacing: 0.6em;
    text-indent: 0.3em;
  }
  .hero .title-rule {
    display: block;
    width: 56px;
    height: 3px;
    margin: 0 auto 1.8rem auto;
    border-radius: 2px;
    background: linear-gradient(90deg, #9dab96, #9fb1c1);
  }
  .hero .subtitle {
    font-size: clamp(1.1rem, 2.2vw, 1.5rem);
    color: #8a857b;
    margin: 0 0 3.5rem 0;
    font-weight: 300;
    letter-spacing: 0.15em;
  }
  .hero .cards {
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero .card {
    display: block;
    width: 210px;
    padding: 2rem 1.2rem;
    border: 1px solid #dcd5c8;
    border-radius: 18px;
    text-decoration: none;
    color: #6b665c;
    background: rgba(255, 255, 255, .78);
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 20px rgba(140, 128, 110, .08);
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  }
  .hero .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(140, 128, 110, .16);
    border-color: #c3b7a3;
  }
  .hero .card .name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 .6rem 0;
    color: #5c584f;
  }
  .hero .card .desc {
    font-size: 1rem;
    color: #a0988c;
    margin: 0;
  }

  .hero .char {
    display: inline-block;
    opacity: 0;
    animation: char-in .6s ease forwards;
    animation-delay: calc(0.15s + var(--i) * 0.09s);
    transition: transform .3s ease;
  }
  @keyframes char-in {
    from { opacity: 0; transform: translateY(0.6em); }
    to { opacity: 1; transform: translateY(0); }
  }
  .hero .site-title-en:hover .char,
  .hero .site-title-cn:hover .char {
    transform: translateY(-0.3em);
    transition-delay: calc(var(--i) * 0.035s);
  }
  @keyframes title-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-0.12em); }
  }
  .hero .site-title-en::after,
  .hero .site-title-cn::after {
    content: "";
    position: absolute;
    top: 0;
    left: -60%;
    width: 45%;
    height: 100%;
    background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .5), transparent);
    animation: title-shine 4s ease-in-out infinite;
    animation-delay: 1.2s;
  }
  @keyframes title-shine {
    0% { left: -60%; }
    60%, 100% { left: 130%; }
  }

  .hero .interact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin-top: 1.2rem;
  }
  .hero .like-btn {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .45rem 1.1rem;
    border: 1px solid #dcd5c8;
    border-radius: 999px;
    background: rgba(255, 255, 255, .78);
    color: #6b665c;
    font-size: .95rem;
    cursor: pointer;
    transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
  }
  .hero .like-btn:hover {
    transform: translateY(-2px);
    border-color: #c3b7a3;
    box-shadow: 0 6px 16px rgba(140, 128, 110, .12);
  }
  .hero .like-btn.liked {
    border-color: #c4a4a7;
    color: #a0767a;
    background: #f8efef;
  }
  .hero .danmaku-form {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
  }
  .hero .danmaku-form input {
    width: 180px;
    padding: .45rem .8rem;
    border: 1px solid #dcd5c8;
    border-radius: 999px;
    font-size: .9rem;
    outline: none;
    background: rgba(255, 255, 255, .78);
    color: #5c584f;
  }
  .hero .danmaku-form input:focus {
    border-color: #b9ad99;
  }
  .hero .danmaku-form button {
    padding: .45rem 1rem;
    border: 1px solid #dcd5c8;
    border-radius: 999px;
    background: rgba(255, 255, 255, .78);
    color: #6b665c;
    font-size: .9rem;
    cursor: pointer;
    transition: background .2s ease, color .2s ease;
  }
  .hero .danmaku-form button:hover {
    background: #9dab96;
    border-color: #9dab96;
    color: #fff;
  }
  .hero .stats {
    font-size: .85rem;
    color: #a0988c;
    letter-spacing: .05em;
  }
  .hero .stats b {
    color: #8a857b;
    font-weight: 700;
  }
  #danmaku-layer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 40;
  }
  .danmaku-item {
    position: absolute;
    left: 0;
    top: 10%;
    white-space: nowrap;
    font-size: 1.05rem;
    color: #6b665c;
    background: rgba(255, 255, 255, .9);
    padding: .2rem .8rem;
    border-radius: 999px;
    box-shadow: 0 2px 8px rgba(140, 128, 110, .15);
    animation: danmaku-run 9s linear forwards;
  }
  @keyframes danmaku-run {
    from { transform: translateX(110vw); }
    to { transform: translateX(-120%); }
  }
  #fx {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 60;
  }
  .comments {
    max-width: 720px;
    margin: 3.5rem auto 2.5rem;
    padding: 0 1rem;
  }
  .comments h2 {
    text-align: center;
    font-size: 1.4rem;
    color: #5c584f;
    margin: 0 0 1.2rem 0;
  }
  .wave {
    position: relative;
    pointer-events: none;
  }
  .wave svg {
    display: block;
    width: 100%;
  }
  .wave.wave-back {
    margin-top: -42px;
    z-index: 1;
  }
  .wave.wave-back svg {
    height: 80px;
  }
  .wave.wave-front {
    margin-top: -26px;
    z-index: 2;
  }
  .wave.wave-front svg {
    height: 56px;
  }
  .easter-msg {
    position: fixed;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 70;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(180deg, #ff9a9e, #fad0c4);
    padding: .8rem 1.8rem;
    border-radius: 999px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .25);
    opacity: 0;
    pointer-events: none;
    transition: opacity .4s ease;
  }
  .easter-msg.show {
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero .char { opacity: 1; animation: none; }
    .hero .site-title { transition: none; }
    .hero .site-title-en,
    .hero .site-title-cn { animation: none; }
    .hero .site-title-en::after,
    .hero .site-title-cn::after { display: none; }
    .blob { animation: none; }
  }
</style>

<div class="hero">

  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <div class="blob blob-4"></div>

  <img class="hero-logo" src="https://commons.wikimedia.org/wiki/Special:FilePath/Zhejiang_University_logo.svg?width=128" alt="浙江大学" onerror="this.remove()">

  <p class="eyebrow">W.PAPER 的在线空间</p>

  <h1 class="site-title">
    <span class="site-title-en">
      <span class="char" style="--i:0">w</span><span class="char" style="--i:1">.</span><span class="char" style="--i:2">p</span><span class="char" style="--i:3">a</span><span class="char" style="--i:4">p</span><span class="char" style="--i:5">e</span><span class="char" style="--i:6">r</span>
    </span>
    <span class="site-title-cn">
      <span class="char" style="--i:7">的</span><span class="char" style="--i:8">小</span><span class="char" style="--i:9">站</span>
    </span>
  </h1>
  <span class="title-rule"></span>

  <p class="subtitle">记录学习 · 整理课程 · 链接朋友</p>

  <div class="cards">
    <a class="card" href="course/">
      <p class="name">课程</p>
      <p class="desc">课程讲义与学习笔记</p>
    </a>
    <a class="card" href="sports/">
      <p class="name">运动</p>
      <p class="desc">训练计划与运动记录</p>
    </a>
    <a class="card" href="fun/">
      <p class="name">娱乐</p>
      <p class="desc">游戏影音与生活分享</p>
    </a>
    <a class="card" href="music/">
      <p class="name">音乐</p>
      <p class="desc">歌单与音乐推荐</p>
    </a>
    <a class="card" href="reading/">
      <p class="name">阅读</p>
      <p class="desc">读书笔记与书单</p>
    </a>
    <a class="card" href="friends/">
      <p class="name">友链</p>
      <p class="desc">朋友的优秀站点</p>
    </a>
    <a class="card" href="about/">
      <p class="name">关于</p>
      <p class="desc">认识一下 w.paper</p>
    </a>
  </div>

  <div class="interact">
    <button class="like-btn" id="like-btn" type="button">👍 点赞 <b id="like-count">0</b></button>
    <form class="danmaku-form" id="danmaku-form">
      <input id="danmaku-input" type="text" maxlength="30" placeholder="发一条弹幕…" autocomplete="off">
      <button type="submit">发射</button>
    </form>
    <span class="stats">本站访客 <b id="site-uv">--</b> 人次 · 浏览 <b id="site-pv">--</b> 次</span>
  </div>

</div>

<div class="wave wave-back">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,45 C220,75 460,15 720,38 C980,60 1220,22 1440,45 L1440,0 L0,0 Z" fill="#c9cdbf"/>
  </svg>
</div>
<div class="wave wave-front">
  <svg viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,28 C220,52 460,6 720,28 C980,50 1220,12 1440,28 L1440,0 L0,0 Z" fill="#f6f2ec"/>
  </svg>
</div>

<div id="danmaku-layer"></div>
<canvas id="fx"></canvas>
<div class="easter-msg" id="easter-msg">🎉 恭喜触发彩蛋！</div>

<div class="comments">
  <h2>留言板</h2>
  <div class="giscus"></div>
</div>

<!-- 留言板配置：把下方 4 处 YOUR_ 开头的占位符换成你 GitHub 仓库的真实 ID 后即可生效
     （需要：仓库开启 Discussions、站点部署到 GitHub Pages） -->
<script src="https://giscus.app/client.js"
  data-repo="YOUR_USERNAME/YOUR_REPO"
  data-repo-id="YOUR_REPO_ID"
  data-category="YOUR_CATEGORY"
  data-category-id="YOUR_CATEGORY_ID"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-theme="preferred_color_scheme"
  data-lang="zh-CN"
  crossorigin="anonymous"
  async>
</script>

<script>
(function () {
  var hero = document.querySelector('.hero');
  var title = document.querySelector('.site-title');
  if (!hero || !title) return;
  var ticking = false;
  hero.addEventListener('mousemove', function (e) {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      title.style.transform = 'perspective(500px) rotateY(' + (x * 25) + 'deg) rotateX(' + (-y * 25) + 'deg)';
      ticking = false;
    });
  });
  hero.addEventListener('mouseleave', function () {
    title.style.transform = '';
  });
})();

(function () {
  var h = new Date().getHours();
  var greet = h < 6 ? '夜深了' : h < 12 ? '上午好' : h < 14 ? '中午好' : h < 18 ? '下午好' : '晚上好';
  var eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = greet + '，欢迎来到我的小站';
})();

(function () {
  var btn = document.getElementById('like-btn');
  var countEl = document.getElementById('like-count');
  if (!btn || !countEl) return;
  var KEY = 'wpaper_likes';
  var liked = localStorage.getItem('wpaper_liked') === '1';
  var count = parseInt(localStorage.getItem(KEY) || '0', 10);
  var render = function () {
    countEl.textContent = count;
    btn.classList.toggle('liked', liked);
  };
  btn.addEventListener('click', function () {
    if (!liked) {
      liked = true;
      count += 1;
      localStorage.setItem(KEY, String(count));
      localStorage.setItem('wpaper_liked', '1');
      render();
    }
  });
  render();
})();

(function () {
  var layer = document.getElementById('danmaku-layer');
  var form = document.getElementById('danmaku-form');
  var input = document.getElementById('danmaku-input');
  if (!layer || !form || !input) return;
  var KEY = 'wpaper_danmaku';
  var msgs = [];
  try { msgs = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { msgs = []; }
  var shoot = function (text) {
    var el = document.createElement('div');
    el.className = 'danmaku-item';
    el.textContent = text;
    el.style.top = (8 + Math.random() * 65) + '%';
    el.style.animationDuration = (7 + Math.random() * 4) + 's';
    layer.appendChild(el);
    setTimeout(function () { el.remove(); }, 12000);
  };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim().slice(0, 30);
    if (!text) return;
    msgs.push(text);
    if (msgs.length > 50) msgs.shift();
    localStorage.setItem(KEY, JSON.stringify(msgs));
    shoot(text);
    input.value = '';
  });
  msgs.forEach(function (m, i) {
    setTimeout(function () { shoot(m); }, 800 + i * 2200);
  });
})();

(function () {
  var uvEl = document.getElementById('site-uv');
  var pvEl = document.getElementById('site-pv');
  if (!uvEl || !pvEl) return;
  var fpv = parseInt(localStorage.getItem('wpaper_fpv') || '1', 10);
  var fuv = parseInt(localStorage.getItem('wpaper_fuv') || '1', 10);
  localStorage.setItem('wpaper_fpv', String(fpv + 1));
  if (!localStorage.getItem('wpaper_seen')) {
    localStorage.setItem('wpaper_seen', '1');
    localStorage.setItem('wpaper_fuv', String(fuv + 1));
  }
  uvEl.textContent = fuv;
  pvEl.textContent = fpv;
  var sc = document.createElement('script');
  sc.async = true;
  sc.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  document.head.appendChild(sc);
  setTimeout(function () {
    if (window.busuanzi && busuanzi.site_pv) {
      uvEl.textContent = busuanzi.site_uv || fuv;
      pvEl.textContent = busuanzi.site_pv || fpv;
    }
  }, 4000);
})();

(function () {
  var seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  var idx = 0;
  var msgEl = document.getElementById('easter-msg');
  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === seq[idx]) {
      idx += 1;
    } else {
      idx = k === seq[0] ? 1 : 0;
    }
    if (idx === seq.length) {
      idx = 0;
      fireworks();
      if (msgEl) {
        msgEl.classList.add('show');
        setTimeout(function () { msgEl.classList.remove('show'); }, 3500);
      }
    }
  });

  function fireworks() {
    var canvas = document.getElementById('fx');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var particles = [];
    var colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff9f43', '#c56cf0'];
    var end = Date.now() + 3200;
    var burst = function () {
      var x = canvas.width / 2 + (Math.random() - 0.5) * 300;
      var y = canvas.height * (0.3 + Math.random() * 0.4);
      for (var i = 0; i < 46; i++) {
        var a = Math.random() * Math.PI * 2;
        var sp = 2 + Math.random() * 5;
        particles.push({
          x: x, y: y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp,
          life: 1,
          decay: 0.012 + Math.random() * 0.02,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    var loop = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.life -= p.decay;
        if (p.life > 0) {
          ctx.globalAlpha = Math.max(p.life, 0);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      particles = particles.filter(function (p) { return p.life > 0; });
      if (Date.now() < end) { burst(); }
      if (particles.length > 0) {
        requestAnimationFrame(loop);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    loop();
  }
})();
</script>
