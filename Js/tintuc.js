const news = {
  1: { 
    title:'Bão số 1 đổ bộ vào khu vực phía Bắc',
    content:'Hồi 7 giờ ngày 11/6, vị trí tâm bão số 1 Wutip ở vào khoảng 16,1 độ vĩ bắc; 113,7 độ kinh đông trên vùng biển phía đông quần đảo Hoàng Sa. Sức gió mạnh nhất vùng gần tâm bão mạnh cấp 8 (62 - 74km/giờ), giật cấp 10. Dự báo trong 24 giờ tới, áp thấp nhiệt đới di chuyển theo hướng Tây Tây Bắc với tốc độ khoảng 10 km/giờ và có khả năng mạnh thêm.',
    video: 'https://youtu.be/umYbEaDkpyg?si=py2q5N1Qp5ZG-mwk'
  },
  2: { 
    title:'Nắng nóng kéo dài tại khu vực Miền Trung',
    content:'Dự báo, ngày 16-17/6, khu vực từ Thanh Hóa đến Phú Yên tiếp tục có nắng nóng, có nơi nắng nóng gay gắt với nhiệt độ cao nhất phổ biến 35-37 độ C, có nơi trên 38 độ C. Cơ quan khí tượng cảnh báo, nắng nóng ở Trung Bộ có khả năng kéo dài trong những ngày tiếp theo. Theo Trung tâm Dự báo khí tượng thủy văn quốc gia, hôm nay (15/6), tại khu vực Bắc Bộ và Thanh Hóa, Nghệ An, thời tiết nắng nóng, có nơi nắng nóng gay gắt với nhiệt độ lúc 13 giờ phổ biến 35-37 độ C, có nơi trên 37 độ C như: Yên Châu (Sơn La) 37,3 độ C, Chi Nê (Hòa Bình) 38,1 độ C,… Độ ẩm tương đối lúc 13 giờ phổ biến 55-65%.',
    image:'img/nang.jpg'
  },
  3: { 
    title:'Nguy cơ ngập lụt ở Đồng bằng sông Cửu Long trong nửa cuối tháng Chín',
    content:'Nhiều nơi ở ĐBSCL trong nửa cuối tháng Chín này sẽ có nguy cơ ngập lụt nghiêm trọng do sự kết hợp của lũ từ thượng nguồn sông Mekong đổ về, triều cường dâng cao và khả năng xuất hiện mưa lớn tại chỗ. Viện Quy hoạch Thủy lợi Miền Nam ngày 14/9 phát đi bản tin đột xuất cảnh báo nguy cơ ngập lụt nghiêm trọng tại nhiều khu vực thuộc Đồng bằng sông Cửu Long trong nửa cuối tháng Chín này.',
    video:'https://youtu.be/iTtOY8fPh54?si=eEhd0DmjgLIV_Jql'
  },
  4: {
    title: 'Cảnh báo lũ quét, sạt lở đất tại một số địa phương trong tỉnh',
    content: 'Các khu vực có nguy cơ xảy ra lũ quét, sạt lở đất đá gồm: Thượng Hà, Điện Quan, Bảo Hà, Kim Sơn, Xuân Hòa, Yên Sơn, Xuân Thượng, Tân Tiến, Phố Ràng, Điện Quan, Kim Sơn, Vĩnh Yên (Bảo Yên); Nậm Lúc, Bản Cái, Nậm Mòn, Thải Giàng Phố (Bắc Hà); Bản Lầu, Nậm Chảy, Nấm Lư, Tung Chung Phố, Lùng Khấu Nhin (Mường Khương); Bản Qua, thị trấn Bát Xát, Cốc Ly, Phìn Ngan, Trung Lèng Hồ (Bát Xát). Do ảnh hưởng của mưa lớn cục bộ, nguy cơ xảy ra lũ quét trên các sông, suối nhỏ vùng núi; sạt lở đất trên sườn dốc, sụt lún đất tại khu vực các huyện: Bát Xát, Bắc Hà, Bảo Yên, Văn Bàn, Mường Khương; ngập úng tại các vùng trũng thấp ven sông, suối, khu đô thị các huyện, thị.',
    video: 'https://youtu.be/H-OkV2FF7R0?si=mPSNQynqzJjA0cU3'
  }
};

document.querySelectorAll("#newsList li").forEach(function(item) {
  item.addEventListener("click", function(){
    const id = this.dataset.id;
    const item = news[id];
    let media = '';
    if (item.image) {
      media = `<img src="${item.image}" alt="${item.title}">`;
    }
    if (item.video) {
      // Chuyển từ youtu.be sang embed
      const videoId = item.video.split('/').pop().split('?')[0];
      const embedURL = `https://www.youtube.com/embed/${videoId}`;

      media = `
        <iframe src="${embedURL}" 
                width="560" 
                height="315" 
                frameborder="0" 
                allowfullscreen>
        </iframe>`;
    }
    document.querySelector("#newsContent").innerHTML = `
      <h2>${item.title}</h2>
      ${media}
      <p>${item.content}</p>`;
  });
});

// Hiển thị luôn tin tức đầu khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  const first = document.querySelector("#newsList li");

  if (first) {
    first.click();
  }
});

