document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();

  if (document.getElementById('top-section')) {
    renderPostsList();
  }
});

function getAuthorName(author) {
  if (!author) return "Ban Biên Tập";
  if (typeof author === 'object') return author.name || "Ban Biên Tập";
  return author;
}

function renderNavbar() {
  const categoriesData = JSON.parse(localStorage.getItem('categories')) || { menu: [] };
  const categories = categoriesData.menu || categoriesData;
  const navMenu = document.getElementById('nav-menu');
  if (!navMenu) return;

  navMenu.innerHTML = categories.map(cat => {
    let hasChildren = cat.children && cat.children.length > 0;
    return `
      <li>
        <a href="index.html?cat=${cat.id}">${cat.title}</a>
        ${hasChildren ? `
          <ul class="dropdown">
            ${cat.children.map(child => `<li><a href="index.html?cat=${child.id}">${child.title}</a></li>`).join('')}
          </ul>
        ` : ''}
      </li>
    `;
  }).join('') + '<li><a href="crawler.html" style="color:red; font-weight:bold;">Crawler Page</a></li>';
}

function renderPostsList() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCat = urlParams.get('cat') || 'home';

  let filteredPosts = posts;

  if (selectedCat !== 'home' && selectedCat !== 'latest' && selectedCat !== '') {
    filteredPosts = posts.filter(p => p.catIds && p.catIds.includes(selectedCat));
  } else if (selectedCat === 'latest') {
    filteredPosts = [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  const topSection = document.getElementById('top-section');
  const postsList = document.getElementById('posts-list');

  if (filteredPosts.length === 0) {
    topSection.innerHTML = '<h3 style="padding: 20px 0;">Chưa có bài viết thuộc chuyên mục này.</h3>';
    postsList.innerHTML = '';
    return;
  }

  if (filteredPosts.length >= 3) {
    const top3 = filteredPosts.slice(0, 3);
    topSection.innerHTML = `
      <div class="featured-post">
        <a href="article.html?id=${top3[0].id}">
          <img src="${top3[0].image || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800'}" alt="${top3[0].title}">
          <h2>${top3[0].title}</h2>
          <p>${top3[0].excerpt}</p>
        </a>
      </div>
      <div class="side-posts">
        ${top3.slice(1, 3).map(post => `
          <div class="side-item">
            <a href="article.html?id=${post.id}">
              <img src="${post.image \vert{}\vert{} 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800'}" alt="${post.title}">
              <h4>${post.title}</h4>
            </a>
          </div>
        `).join('')}
      </div>
    `;

    const remainingPosts = filteredPosts.slice(3);
    postsList.innerHTML = remainingPosts.map(post => `
      <div class="post-card">
        <img src="${post.image || 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800'}" alt="${post.title}">
        <div class="post-card-content">
          <div>
            <h3><a href="article.html?id=${post.id}">${post.title}</a></h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="post-meta">
            <span>Tác giả: <strong>${getAuthorName(post.author)}</strong></span> | 
            <span>Ngày đăng: ${post.publishedAt}</span>
          </div>
        </div>
      </div>
    `).join('');
  } else {
    topSection.innerHTML = `
      <div class="featured-post" style="grid-column: span 2;">
        <a href="article.html?id=${filteredPosts[0].id}">
          <img src="${filteredPosts[0].image || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800'}" alt="${filteredPosts[0].title}">
          <h2>${filteredPosts[0].title}</h2>
          <p>${filteredPosts[0].excerpt}</p>
        </a>
      </div>
    `;

    const remainingPosts = filteredPosts.slice(1);
    postsList.innerHTML = remainingPosts.map(post => `
      <div class="post-card">
        <img src="${post.image || 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800'}" alt="${post.title}">
        <div class="post-card-content">
          <div>
            <h3><a href="article.html?id=${post.id}">${post.title}</a></h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="post-meta">
            <span>Tác giả: <strong>${getAuthorName(post.author)}</strong></span> | 
            <span>Ngày đăng: ${post.publishedAt}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}