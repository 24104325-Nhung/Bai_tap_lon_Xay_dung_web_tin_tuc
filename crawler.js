function createSlug(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/([^0-9a-z-\s])/g, "")
    .replace(/(\s+)/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 1. Hàm bóc tách bài viết từ HTML trang bài viết
function parseArticleFromUrl(url, htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  const title = doc.querySelector('.e-magazine__title, .title-page, h1')?.innerText.trim() || "Tiêu đề bài viết";
  const excerpt = doc.querySelector('.singular-sapo, .sapo')?.innerText.trim() || "";
  const content = doc.querySelector('.singular-content, .e-magazine__body')?.innerText.trim() || "";
  const authorName = doc.querySelector('.author-name, .singular-author b')?.innerText.trim() || "Văn Hưng";
  const categoryName = doc.querySelector('.breadcrumbs li:nth-child(2) a')?.innerText.trim() || "Bất động sản";
  const publishedAt = doc.querySelector('.author-time, .singular-start-time')?.innerText.trim() || "2026-09-28 12:22";

  const matchId = url.match(/(\d+)\.htm$/);
  const id = matchId ? "dtri-" + matchId[1] : "dtri-" + Date.now();

  return {
    id: id,
    title: title,
    slug: createSlug(title),
    excerpt: excerpt,
    content: content,
    author: authorName,
    category: categoryName,
    publishedAt: publishedAt,
    source: "dantri.com.vn",
    url: url
  };
}

// 2. Hàm THU THẬP DỮ LIỆU CÂY PHÂN CẤP CHUYÊN MỤC TRỰC TIẾP TỪ DÂN TRÍ
async function crawlCategoriesFromDantri() {
  const targetUrl = "https://dantri.com.vn/";
  const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(targetUrl);

  try {
    const response = await fetch(proxyUrl);
    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    // Tìm các phần tử menu trên header Dân Trí
    const navItems = doc.querySelectorAll('header nav ul > li, .menu-nav > li');
    const menuList = [
      { "id": "home", "title": "Home", "url": "https://dantri.com.vn/", "type": "home" },
      { "id": "dt360", "title": "Dân trí 360", "url": "https://dantri.com.vn/dt360.htm", "type": "external" },
      { "id": "latest", "title": "Mới nhất", "url": "https://dantri.com.vn/tin-moi-nhat.htm", "type": "category" }
    ];

    navItems.forEach(item => {
      const mainLink = item.querySelector('a');
      if (mainLink) {
        const title = mainLink.innerText.trim();
        const url = mainLink.href;
        const id = createSlug(title);

        if (title && id && !menuList.some(m => m.id === id)) {
          const catObj = {
            id: id,
            title: title,
            url: url,
            type: "category"
          };

          // Tìm các danh mục con (dropdown menu)
          const subLinks = item.querySelectorAll('ul li a, .submenu a');
          if (subLinks.length > 0) {
            catObj.children = [];
            subLinks.forEach(subLink => {
              const subTitle = subLink.innerText.trim();
              const subUrl = subLink.href;
              const subId = createSlug(subTitle);
              if (subTitle && subId) {
                catObj.children.push({
                  id: subId,
                  title: subTitle,
                  url: subUrl
                });
              }
            });
          }
          menuList.push(catObj);
        }
      }
    });

    const categoriesResult = { "menu": menuList };
    localStorage.setItem('categories', JSON.stringify(categoriesResult));
    console.log("Đã crawl thành công Cây chuyên mục Dân Trí:", categoriesResult);
    return categoriesResult;

  } catch (err) {
    console.warn("Lỗi CORS khi crawl menu trực tiếp, sử dụng dữ liệu cây phân cấp cấu trúc chuẩn:");
    return null;
  }
}

// 3. Thực thi Crawl Bài viết
async function executeCrawl() {
  const urlInput = document.getElementById('crawlUrl').value.trim();
  if (!urlInput) {
    alert("Vui lòng nhập URL bài viết!");
    return;
  }

  try {
    const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(urlInput);
    const response = await fetch(proxyUrl);
    const htmlText = await response.text();

    const crawledArticle = parseArticleFromUrl(urlInput, htmlText);

    document.getElementById('jsonResult').value = JSON.stringify(crawledArticle, null, 2);

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const index = posts.findIndex(p => p.id === crawledArticle.id);
    if (index !== -1) {
      posts[index] = crawledArticle;
    } else {
      posts.unshift(crawledArticle);
    }
    localStorage.setItem('posts', JSON.stringify(posts));

    alert("Đã crawl và lưu bài viết vào LocalStorage thành công!");
  } catch (err) {
    alert("Không thể tải URL trực tiếp do chặn kết nối CORS!");
  }
}