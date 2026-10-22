function initData() {
  const categoriesData = [
    { "id": "home", "title": "Trang chủ", "type": "home" },
    { "id": "dt360", "title": "Dân trí 360", "type": "external" },
    { "id": "latest", "title": "Mới nhất", "type": "category" },
    {
      "id": "the-gioi", "title": "Thế giới", "type": "category",
      "children": [
        { "id": "quan-su", "title": "Quân sự" },
        { "id": "phan-tich", "title": "Phân tích - Bình luận" },
        { "id": "the-gioi-do-day", "title": "Thế giới đó đây" }
      ]
    },
    {
      "id": "thoi-su", "title": "Thời sự", "type": "category",
      "children": [
        { "id": "chinh-tri", "title": "Chính trị" },
        { "id": "giao-thong", "title": "Giao thông" },
        { "id": "moi-truong", "title": "Môi trường" }
      ]
    }
  ];

  const defaultPostsData = [
    {
      "id": "dtri-1",
      "title": "Thiếu gia Ấn Độ quyết cưới cô gái Việt Nam vì hành động không ngờ",
      "slug": "thieu-gia-an-do-quyet-cuoi-co-gai-viet-nam",
      "excerpt": "Yêu cô gái Việt, Abhishek vấp phải sự phản đối từ gia đình vì khác biệt văn hóa, khoảng cách địa lý.",
      "content": "Câu chuyện tình yêu vượt qua rào cản văn hóa giữa chàng trai Ấn Độ và cô gái Việt Nam đã nhận được hàng nghìn lượt tương tác trên mạng xã hội...",
      "author": { "name": "Thanh Vân" },
      "category": ["Thế giới", "Thế giới đó đây"],
      "publishedAt": "2026-09-28 10:15",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/the-gioi/thieu-gia-an-do.htm",
      "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800"
    },
    {
      "id": "dtri-2",
      "title": "Cô gái Việt tiết lộ cảnh chưa từng thấy giữa Bangkok ngập lụt diện rộng",
      "slug": "co-gai-viet-tiet-lo-canh-bangkok-ngap-lut",
      "excerpt": "Cơn mưa lớn kéo dài khiến nhiều tuyến đường trung tâm Bangkok chìm trong biển nước.",
      "content": "Trận mưa lịch sử tại thủ đô Bangkok khiến hoạt động giao thông đình trệ nghiêm trọng trong nhiều giờ liền...",
      "author": { "name": "Minh Khôi" },
      "category": ["Thế giới"],
      "publishedAt": "2026-09-28 09:00",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/the-gioi/bangkok-ngap-lut.htm",
      "image": "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800"
    },
    {
      "id": "dtri-3",
      "title": "Ông bố ở Bắc Ninh khóc như mưa tiễn con gái về nhà chồng",
      "slug": "ong-bo-bac-ninh-khoc-tien-con-gai",
      "excerpt": "Khoảnh khắc người cha lưu luyến tiễn con gái về nhà chồng dù cách nhà chỉ 6km khiến nhiều người xúc động.",
      "content": "Hình ảnh lưu luyến xúc động của người cha trong ngày vui của con gái nhận được nhiều đồng cảm từ cộng đồng...",
      "author": { "name": "Ngọc Ánh" },
      "category": ["Thời sự", "Nóng trên mạng"],
      "publishedAt": "2026-09-28 08:30",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/thoi-su/ong-bo-bac-ninh.htm",
      "image": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
    },
    {
      "id": "dtri-4",
      "title": "Cô gái Việt trồng rau, làm vườn 100m2 trên đất Mỹ để đỡ nhớ nhà",
      "slug": "co-gai-viet-trong-rau-tren-dat-my",
      "excerpt": "Để vơi đi nỗi nhớ quê nhà, chị Trinh cải tạo lại mảnh đất trống quanh nhà thành khu vườn 100m2.",
      "content": "Khu vườn phủ xanh các loại rau củ đặc trưng Việt Nam giúp gia đình chị Trinh luôn có nguồn thực phẩm tươi sạch...",
      "author": { "name": "Hà Anh" },
      "category": ["Thế giới"],
      "publishedAt": "2026-09-28 07:00",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/the-gioi/trong-rau-dat-my.htm",
      "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800"
    },
    {
      "id": "dtri-5",
      "title": "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
      "slug": "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
      "excerpt": "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng.",
      "content": "Hà Nội đang nghiên cứu đề xuất chính sách bồi thường linh hoạt nhằm tháo gỡ vướng mắc mặt bằng...",
      "author": { "name": "Văn Hưng" },
      "category": ["Thời sự", "Giao thông"],
      "publishedAt": "2026-09-28 06:15",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm",
      "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
    },
    {
      "id": "dtri-6",
      "title": "28 năm đi bộ vòng quanh thế giới, nhà thám hiểm Anh còn một thử thách cuối",
      "slug": "28-nam-di-bo-vong-quanh-the-gioi",
      "excerpt": "Sau 28 năm và hành trình dài khoảng 50.000km, nhà thám hiểm Karl Bushby chuẩn bị hoàn thành hành trình vĩ đại.",
      "content": "Thử thách cuối cùng của nhà thám hiểm người Anh là vượt qua eo biển Manche để trở về quê nhà...",
      "author": { "name": "Đức Anh" },
      "category": ["Thế giới"],
      "publishedAt": "2026-09-27 20:00",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/the-gioi/nha-tham-hiem-anh.htm",
      "image": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800"
    },
    {
      "id": "dtri-7",
      "title": "Nữ sinh viên đứng đợi cả tiếng dưới mưa, để lại thư xin lỗi vì làm trầy ô tô",
      "slug": "nu-sinh-vien-dung-doi-duoi-mua-xin-loi",
      "excerpt": "Sau khi lỡ va quẹt gây trầy xước ô tô đậu bên đường, 2 nữ sinh viên năm nhất tại Huế kiên trì đứng chờ chủ xe.",
      "content": "Hành động trung thực và ý thức trách nhiệm cao của 2 nữ sinh nhận được nhiều lời khen ngợi từ cộng đồng...",
      "author": { "name": "Hoài Nam" },
      "category": ["Thời sự", "Nóng trên mạng"],
      "publishedAt": "2026-09-27 18:30",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/thoi-su/nu-sinh-vien-hue.htm",
      "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
    },
    {
      "id": "dtri-8",
      "title": "Cháu gái 15 tuổi của Tổng thống Trump xinh đẹp đa tài, nói tốt tiếng Trung",
      "slug": "chau-gai-15-tuoi-cua-tong-thong-trump",
      "excerpt": "Cháu gái của Tổng thống Trump - Arabella Kushner năm nay 15 tuổi, gây chú ý nhờ ngoại hình nổi bật.",
      "content": "Arabella thể hiện khả năng ngoại ngữ ấn tượng cùng phong thái tự tin trong các sự kiện gia đình...",
      "author": { "name": "Phương Thảo" },
      "category": ["Thế giới"],
      "publishedAt": "2026-09-27 15:45",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/the-gioi/chau-gai-trump.htm",
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800"
    },
    {
      "id": "dtri-9",
      "title": "Đề xuất mở rộng các tuyến xe buýt kết nối ngoại thành Hà Nội",
      "slug": "de-xuat-mo-rong-xe-buyt-ha-noi",
      "excerpt": "Sở Giao thông Vận tải Hà Nội đang lấy ý kiến về việc bổ sung 10 tuyến xe buýt mới kết nối các huyện ngoại thành.",
      "content": "Việc tăng cường phương tiện vận tải hành khách công cộng giúp giảm tải áp lực giao thông nội đô...",
      "author": { "name": "Quốc Anh" },
      "category": ["Thời sự", "Giao thông"],
      "publishedAt": "2026-09-27 11:20",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/thoi-su/mo-rong-xe-buyt.htm",
      "image": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800"
    },
    {
      "id": "dtri-10",
      "title": "Tăng cường kiểm soát ô nhiễm không khí tại các đô thị lớn",
      "slug": "tang-cuong-kiem-soat-o-nhiem-khong-khi",
      "excerpt": "Bộ Tài nguyên và Môi trường vừa ban hành văn bản chỉ đạo các địa phương đẩy mạnh giải pháp giảm bụi mịn.",
      "content": "Các biện pháp bao gồm siết chặt kiểm định khí thải xe cơ giới và kiểm soát hoạt động xây dựng...",
      "author": { "name": "Lê Hoàng" },
      "category": ["Thời sự", "Môi trường"],
      "publishedAt": "2026-09-27 09:10",
      "source": "dantri.com.vn",
      "url": "https://dantri.com.vn/thoi-su/o-nhiem-khong-khi.htm",
      "image": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800"
    }
  ];

  // Tự động cập nhật trực tiếp dữ liệu chuẩn mỗi lần tải trang
  localStorage.setItem('categories', JSON.stringify(categoriesData));
  localStorage.setItem('posts', JSON.stringify(defaultPostsData));
}

initData();