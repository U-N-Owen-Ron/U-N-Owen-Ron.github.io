(function () {
  var grid = document.querySelector('.md-tabs .md-grid');
  if (!grid) return;
  var a = document.createElement('a');
  a.className = 'zju-badge';
  a.href = 'https://www.zju.edu.cn';
  a.target = '_blank';
  a.rel = 'noopener';
  a.title = '浙江大学';
  var img = document.createElement('img');
  img.className = 'zju-logo';
  img.alt = '浙江大学校徽';
  img.src = 'https://commons.wikimedia.org/wiki/Special:FilePath/Zhejiang_University_logo.svg?width=128';
  img.onerror = function () {
    img.outerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">' +
        '<circle cx="24" cy="24" r="23" fill="#9fb1c1"/>' +
        '<circle cx="24" cy="24" r="19" fill="#f6f2ec"/>' +
        '<text x="24" y="23" text-anchor="middle" font-size="13" font-weight="bold" fill="#b0655e" font-family="serif">求是</text>' +
        '<text x="24" y="34" text-anchor="middle" font-size="6" fill="#8a857b" font-family="sans-serif">ZHEJIANG</text>' +
      '</svg>';
  };
  a.appendChild(img);
  var span = document.createElement('span');
  span.textContent = '浙江大学';
  a.appendChild(span);
  grid.appendChild(a);
})();
