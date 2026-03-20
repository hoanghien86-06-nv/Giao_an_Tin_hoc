
export interface LessonItem {
  name: string;
  sections?: string[]; 
}

export interface SubTopicItem {
  name: string;
  lessons: LessonItem[];
}

export interface MainTopicItem {
  name: string;
  subTopics: SubTopicItem[];
}

export interface GradeCurriculum {
  mainTopics: MainTopicItem[];
}

const REVIEW_TOPIC: MainTopicItem = {
  name: "Ôn tập và Kiểm tra",
  subTopics: [
    {
      name: "Học kỳ I",
      lessons: [
        { name: "Ôn tập học kỳ I", sections: ["Hệ thống hóa kiến thức các chủ đề đã học", "Luyện tập các kỹ năng sử dụng máy tính"] },
        { name: "Kiểm tra học kỳ I", sections: ["Ma trận đề kiểm tra", "Nội dung kiểm tra"] }
      ]
    },
    {
      name: "Cuối năm",
      lessons: [
        { name: "Ôn tập cuối năm", sections: ["Tổng kết kiến thức toàn năm học", "Thực hành sản phẩm tổng hợp"] },
        { name: "Kiểm tra cuối năm", sections: ["Nội dung kiểm tra lý thuyết", "Nội dung kiểm tra thực hành"] }
      ]
    }
  ]
};

export const CURRICULUM_DATA: Record<string, GradeCurriculum> = {
  "3": {
    mainTopics: [
      {
        name: "CHỦ ĐỀ A. MÁY TÍNH VÀ EM",
        subTopics: [
          {
            name: "Chủ đề A1. Khám phá máy tính",
            lessons: [
              { name: "Bài 1. Các thành phần của máy tính", sections: ["Khám phá lợi ích của máy tính", "Tìm hiểu các thành phần của máy tính và chức năng của chúng"] },
              { name: "Bài 2. Những máy tính thông dụng", sections: ["Những máy tính thông dụng", "Các thành phần cơ bản của từng loại máy tính"] },
              { name: "Bài 3. Em tập sử dụng chuột", sections: ["Cầm chuột đúng cách", "Các thao tác cơ bản khi sử dụng chuột"] },
              { name: "Bài 4. Em bắt đầu sử dụng máy tính", sections: ["Bước đầu làm việc với máy tính", "Tắt máy tính"] },
              { name: "Bài 5. Bảo vệ sức khoẻ khi dùng máy tính", sections: ["Tìm hiểu cách ngồi đúng tư thế khi làm việc với máy tính", "Thực hiện quy tắc an toàn về điện"] },
            ]
          },
          {
            name: "Chủ đề A2. Thông tin và xử lí thông tin",
            lessons: [
              { name: "Bài 1. Thông tin và quyết định", sections: ["Dựa vào thông tin để quyết định", "Dựa vào thông tin để hành động"] },
              { name: "Bài 2. Các dạng thông tin thường gặp", sections: ["Thông tin dạng chữ", "Thông tin dạng hình ảnh", "Thông tin dạng âm thanh"] },
              { name: "Bài 3. Xử lí thông tin", sections: ["Bộ não con người xử lí thông tin", "Thiết bị số thông minh xử lí thông tin"] },
              { name: "Bài 4. Ôn tập về thông tin và xử lí thông tin", sections: ["Ôn tập các dạng thông tin", "Ôn tập về xử lí thông tin"] },
            ]
          },
          {
            name: "Chủ đề A3. Làm quen với cách gõ bàn phím",
            lessons: [
              { name: "Bài 1. Em làm quen với bàn phím", sections: ["Khu vực chính của bàn phím", "Các hàng phím"] },
              { name: "Bài 2. Em tập gõ hàng phím cơ sở", sections: ["Đặt tay đúng trên hàng phím cơ sở", "Tập gõ phím với phần mềm RapidTyping"] },
              { name: "Bài 3. Em tập gõ hàng phím trên và dưới", sections: ["Cách gõ các phím ở hàng phím trên và dưới"] },
              { name: "Bài 4. Cùng thi đua gõ phím", sections: ["Luyện tập gõ phím nhanh và chính xác"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ B. MẠNG MÁY TÍNH VÀ INTERNET",
        subTopics: [
          {
            name: "Xem tin tức và giải trí trên trang web",
            lessons: [
              { name: "Bài 1. Thông tin trên Internet", sections: ["Xem tin tức và chương trình giải trí trên Internet", "Tìm trên Internet những thông tin không có sẵn trong máy tính"] },
              { name: "Bài 2. Nhận biết những thông tin trên Internet không phù hợp với em", sections: ["Trên Internet có những thông tin không phù hợp với em", "Xem trên Internet những thông tin phù hợp với em"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ C. TỔ CHỨC LƯU TRỮ, TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN",
        subTopics: [
          {
            name: "Chủ đề C1. Sắp xếp để dễ tìm",
            lessons: [
              { name: "Bài 1. Sự cần thiết của sắp xếp", sections: ["Sắp xếp để tìm được nhanh hơn", "Em tập sắp xếp"] },
              { name: "Bài 2. Sơ đồ hình cây", sections: ["Biết cách tìm nhanh một vật khi đã được sắp xếp", "Sơ đồ hình cây biểu diễn sắp xếp phân loại"] },
            ]
          },
          {
            name: "Chủ đề C2. Làm quen với thư mục lưu trữ thông tin trong máy tính",
            lessons: [
              { name: "Bài 1. Sắp xếp phân loại các tệp dữ liệu trong máy tính", sections: ["Xem thông tin trong máy tính", "Tìm hiểu tệp, thư mục và ổ đĩa"] },
              { name: "Bài 2. Cây thư mục", sections: ["Vai trò cây thư mục", "Cấu trúc cây thư mục"] },
              { name: "Bài 3. Em tập thao tác với thư mục", sections: ["Tạo, xoá và đổi tên thư mục", "Tìm tệp trong thư mục"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ D. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ",
        subTopics: [
          {
            name: "Sử dụng thông tin cá nhân phù hợp",
            lessons: [
              { name: "Bài học. Bảo vệ thông tin cá nhân", sections: ["Thông tin cá nhân có thể được lưu trữ và trao đổi nhờ máy tính", "Bảo vệ thông tin cá nhân khi giao tiếp qua máy tính"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ E. ỨNG DỤNG TIN HỌC",
        subTopics: [
          {
            name: "Chủ đề E1. Làm quen với bài trình chiếu đơn giản",
            lessons: [
              { name: "Bài 1. Em làm quen với phần mềm trình chiếu", sections: ["Làm quen với người bạn mới", "Tạo bài trình chiếu đầu tiên"] },
              { name: "Bài 2. Thêm ảnh vào trang trình chiếu", sections: ["Mở tệp trình chiếu đã lưu", "Thêm ảnh vào trang trình chiếu"] },
              { name: "Bài 3. Bài trình chiếu của em", sections: ["Chuẩn bị cho bài trình chiếu", "Tạo và trình diễn bài trình chiếu"] },
            ]
          },
          {
            name: "Chủ đề E2. Sử dụng phần mềm luyện tập thao tác chuột",
            lessons: [
              { name: "Bài 1. Làm quen với phần mềm Mouse Skills", sections: ["Khám phá phần mềm Mouse Skills", "Thao tác với nút cuộn chuột"] },
              { name: "Bài 2. Em luyện tập sử dụng chuột", sections: ["Luyện tập sử dụng phần mềm Mouse Skills"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ F. GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH",
        subTopics: [
          {
            name: "Chủ đề F1. Thực hiện công việc theo các bước",
            lessons: [
              { name: "Bài 1. Làm việc theo từng bước", sections: ["Thực hiện nhiệm vụ theo từng bước", "Chia việc thành những việc nhỏ hơn"] },
              { name: "Bài 2. Thực hiện một việc tuỳ thuộc vào điều kiện", sections: ["Tuỳ vào điều kiện để thực hiện một việc", "Sử dụng cách nói Nếu... thì..."] },
              { name: "Bài 3. Em tập làm người chỉ huy giỏi", sections: ["Điều khiển robot di chuyển"] },
            ]
          },
          {
            name: "Chủ đề F2. Nhiệm vụ của em và sự trợ giúp của máy tính",
            lessons: [
              { name: "Bài 1. Phát biểu nhiệm vụ và tìm sự trợ giúp của máy tính", sections: ["Cách phát biểu một nhiệm vụ", "Tìm sự trợ giúp của máy tính"] },
              { name: "Bài 2. Thực hành – nhiệm vụ và sản phẩm", sections: ["Nhiệm vụ của em", "Thu hoạch sau bài tập nhóm"] },
            ]
          }
        ]
      },
      REVIEW_TOPIC
    ],
  },
  "4": {
    mainTopics: [
      {
        name: "CHỦ ĐỀ A. MÁY TÍNH VÀ EM",
        subTopics: [
          {
            name: "Chủ đề A1. Phần cứng và phần mềm",
            lessons: [
              { name: "Bài 1. Phần cứng máy tính", sections: ["Phần cứng và thiết bị ngoại vi", "Tìm hiểu về các thiết bị phần cứng bên trong thân máy"] },
              { name: "Bài 2. Phần mềm máy tính", sections: ["Phần mềm và mối quan hệ với phần cứng", "Thao tác không đúng cách sẽ gây lỗi phần mềm và phần cứng"] },
            ]
          },
          {
            name: "Chủ đề A2. Lợi ích của việc gõ bàn phím đúng cách",
            lessons: [
              { name: "Bài 1. Em tập gõ hàng phím số", sections: ["Phân công các ngón tay gõ hàng phím số", "Cách gõ phím trên hàng phím số"] },
              { name: "Bài 2. Thực hành gõ bàn phím đúng cách", sections: ["Lợi ích của việc gõ bàn phím đúng cách", "Thực hành gõ bàn phím"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ B. MẠNG MÁY TÍNH VÀ INTERNET",
        subTopics: [
          {
            name: "Thông tin trên trang web",
            lessons: [
              { name: "Bài 1. Các loại thông tin chính trên trang web", sections: ["Văn bản, hình ảnh và âm thanh", "Siêu liên kết"] },
              { name: "Bài 2. Tác hại của việc xem những trang web không phù hợp lứa tuổi", sections: ["Đoán thông tin từ địa chỉ trang web", "Tác hại của việc truy cập những trang web không phù hợp lứa tuổi"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ C. TỔ CHỨC LƯU TRỮ, TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN",
        subTopics: [
          {
            name: "Chủ đề C1. Bước đầu tìm kiếm thông tin trên Internet",
            lessons: [
              { name: "Bài 1. Tìm kiếm thông tin trên Internet", sections: ["Cách dùng máy tìm kiếm để tìm kiếm thông tin", "Xác định từ khoá tìm kiếm"] },
              { name: "Bài 2. Em tập tìm thông tin trên Internet", sections: ["Tìm kiếm thông tin", "Tìm kiếm hình ảnh"] },
            ]
          },
          {
            name: "Chủ đề C2. Tổ chức cây thư mục lưu trữ thông tin trong máy tính",
            lessons: [
              { name: "Bài 1. Tạo và xoá thư mục, đổi tên và xoá tệp", sections: ["Đổi tên tệp", "Xoá thư mục, tệp"] },
              { name: "Bài 2. Di chuyển, sao chép thư mục và tệp", sections: ["Di chuyển tệp, thư mục", "Sao chép tệp, thư mục"] },
              { name: "Bài 3. Thực hành tạo, sao chép, xoá thư mục và đổi tên, di chuyển tệp", sections: ["Thực hành tạo, sao chép thư mục", "Thực hành di chuyển, đổi tên, xoá thư mục"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ D. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ",
        subTopics: [
          {
            name: "Bản quyền sử dụng phần mềm",
            lessons: [
              { name: "Bài học. Tôn trọng quyền tác giả của phần mềm", sections: ["Phần mềm miễn phí và phần mềm không miễn phí", "Không được vi phạm bản quyền phần mềm"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ E. ỨNG DỤNG TIN HỌC",
        subTopics: [
          {
            name: "Chủ đề con E1. Tạo bài trình chiếu",
            lessons: [
              { name: "Bài 1. Bố cục của trang chiếu", sections: ["Kích hoạt và ra khỏi phần mềm trình chiếu", "Tạo các trang chiếu có bố cục khác nhau"] },
              { name: "Bài 2. Định dạng văn bản trên trang chiếu", sections: ["Định dạng chữ", "Sử dụng công cụ gạch đầu dòng"] },
              { name: "Bài 3. Hiệu ứng chuyển trang chiếu", sections: ["Hiệu ứng chuyển trang chiếu", "Lưu bài trình chiếu"] },
            ]
          },
          {
            name: "Chủ đề con E2. Tập soạn thảo văn bản",
            lessons: [
              { name: "Bài 1. Làm quen với phần mềm soạn thảo văn bản", sections: ["Tạo tệp mới và nhập văn bản", "Lưu tệp văn bản"] },
              { name: "Bài 2. Soạn thảo văn bản tiếng Việt và lưu tệp với tên mới", sections: ["Mở tệp văn bản và lưu tệp với tên mới", "Soạn thảo văn bản tiếng Việt"] },
              { name: "Bài 3. Thực hành mở tệp, soạn thảo và lưu tệp văn bản", sections: ["Thực hành tạo tệp văn bản mới", "Thực hành mở tệp và lưu văn bản sang tệp mới"] },
              { name: "Bài 4. Chèn ảnh vào văn bản", sections: ["Chèn ảnh vào văn bản", "Thay đổi kích thước và vị trí của ảnh trong văn bản"] },
              { name: "Bài 5. Thực hành soạn thảo văn bản có ảnh minh họa", sections: ["Soạn thảo văn bản theo chủ đề và có ảnh minh họa", "Văn bản có ảnh lấy từ Internet"] },
              { name: "Bài 6. Các thao tác cơ bản với khối văn bản", sections: ["Chọn và xoá một khối văn bản", "Di chuyển và sao chép một khối văn bản"] },
              { name: "Bài 7. Thực hành tổng hợp chủ đề Tập soạn thảo văn bản", sections: ["Thực hành các thao tác cơ bản về tệp và về khối văn bản", "Thực hành tạo văn bản để viết về một chủ đề, có ảnh minh hoạ"] },
            ]
          },
          {
            name: "Chủ đề con Lựa chọn 1. Sử dụng công cụ đa phương tiện để tìm hiểu lịch sử, văn hoá",
            lessons: [
              { name: "Bài 1. Máy tính giúp em tìm hiểu lịch sử Việt Nam", sections: ["Tìm hiểu lịch sử Việt Nam qua Internet", "Sử dụng công cụ đa phương tiện"] },
              { name: "Bài 2. Máy tính giúp em tìm hiểu về các Quốc gia", sections: ["Khám phá văn hoá các quốc gia", "Tìm kiếm thông tin đa phương tiện"] },
            ]
          },
          {
            name: "Chủ đề con Lựa chọn 2. Sử dụng phần mềm luyện gõ bàn phím",
            lessons: [
              { name: "Bài 1. Em tìm hiểu phần mềm luyện gõ bàn phím", sections: ["Làm quen với phần mềm luyện gõ", "Các bài tập gõ phím cơ bản"] },
              { name: "Bài 2. Luyện gõ phím Shift", sections: ["Cách sử dụng phím Shift", "Thực hành gõ các ký tự hoa và ký tự đặc biệt"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ F. GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH",
        subTopics: [
          {
            name: "Làm quen với lập trình trực quan",
            lessons: [
              { name: "Bài 1. Làm quen với lập trình trực quan", sections: ["Giới thiệu về Scratch", "Lệnh và nhóm lệnh Scratch"] },
              { name: "Bài 2. Tạo chương trình Scratch đầu tiên", sections: ["Một số lệnh cơ bản trong nhóm lệnh Sự kiện", "Tạo chương trình Giới thiệu bản thân"] },
              { name: "Bài 3. Tạo chương trình có phông nền thay đổi", sections: ["Thêm, đổi tên phông nền", "Tạo chương trình Địa điểm yêu thích"] },
              { name: "Bài 4. Tạo chương trình có nhiều nhân vật", sections: ["Thêm, đổi tên, xoá nhân vật", "Tạo chương trình Cuộc thi chạy"] },
              { name: "Bài 5. Tạo chương trình có nhân vật chuyển động", sections: ["Nhóm lệnh Chuyển động", "Tạo chương trình Khám phá đại dương"] },
              { name: "Bài 6. Tạo chương trình có nhân vật thay đổi kích thước, màu sắc", sections: ["Tạo các hiệu ứng hình ảnh", "Tạo chương trình Cá biến hình"] },
              { name: "Bài 7. Thực hành tạo chương trình của em", sections: ["Nhiệm vụ của nhóm em", "Thu hoạch sau bài tập nhóm"] },
            ]
          }
        ]
      },
      REVIEW_TOPIC
    ],
  },
  "5": {
    mainTopics: [
      {
        name: "CHỦ ĐỀ A. MÁY TÍNH VÀ EM",
        subTopics: [
          {
            name: "Những việc em có thể làm được nhờ máy tính",
            lessons: [
              { name: "Bài 1. Lợi ích của máy tính", sections: ["Những việc em có thể làm được nhờ máy tính", "Lợi ích của máy tính"] },
              { name: "Bài 2. Thực hành tạo sản phẩm số", sections: ["Phần mềm em đã biết", "Thực hành tạo sản phẩm số"] },
              { name: "Bài 3. Lợi ích của việc sử dụng máy tính thành thạo", sections: ["Phần mềm soạn thảo văn bản giúp em tạo được văn bản đẹp", "Sử dụng được nhiều phần mềm sẽ tạo được nhiều loại sản phẩm"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ B. MẠNG MÁY TÍNH VÀ INTERNET",
        subTopics: [
          {
            name: "Tìm kiếm thông tin trên website",
            lessons: [
              { name: "Bài 1. Tìm thông tin trên website", sections: ["Tìm hiểu các thành phần của một website", "Tìm thông tin trên website"] },
              { name: "Bài 2. Hợp tác, tìm kiếm và chia sẻ thông tin", sections: ["Hợp tác, tìm kiếm thông tin", "Hợp tác, chia sẻ thông tin"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ C. TỔ CHỨC LƯU TRỮ, TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN",
        subTopics: [
          {
            name: "Chủ đề C1. Tìm kiếm thông tin trong giải quyết vấn đề",
            lessons: [
              { name: "Bài 1. Thu thập và tìm kiếm thông tin trong giải quyết vấn đề", sections: ["Vai trò của thông tin trong giải quyết vấn đề", "Thu thập và tìm kiếm thông tin"] },
              { name: "Bài 2. Thực hành tìm kiếm và chọn thông tin trong giải quyết vấn đề", sections: ["Giải ô chữ", "Tìm kiếm thông tin và hợp tác trong giải quyết vấn đề"] },
            ]
          },
          {
            name: "Chủ đề C2. Cây thư mục và tìm kiếm tệp trên máy tính",
            lessons: [
              { name: "Bài 1. Thực hành tạo cây thư mục", sections: ["Sơ đồ tổ chức cây thư mục", "Thực hành tạo cây thư mục"] },
              { name: "Bài 2. Tìm kiếm tệp và thư mục", sections: ["Các bước tìm kiếm tệp bằng công cụ Search", "Lựa chọn kiểu bố cục hiển thị để xem các tệp và thư mục"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ D. ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ",
        subTopics: [
          {
            name: "Bản quyền nội dung thông tin",
            lessons: [
              { name: "Bài học. Tôn trọng quyền tác giả khi sử dụng nội dung thông tin", sections: ["Bản quyền nội dung thông tin", "Tôn trọng bản quyền nội dung thông tin", "Tôn trọng sự bảo mật và tính riêng tư của thông tin"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ E. ỨNG DỤNG TIN HỌC",
        subTopics: [
          {
            name: "Thực hành soạn thảo văn bản",
            lessons: [
              { name: "Bài 1. Thực hành chọn và sao chép khối văn bản", sections: ["Thực hành bài tập điền từ", "Thực hành soạn thảo văn bản có nhiều cụm từ trùng lặp"] },
              { name: "Bài 2. Thực hành xoá và di chuyển khối văn bản", sections: ["Thực hành bài tập xoá khối văn bản", "Thực hành bài tập di chuyển khối văn bản"] },
              { name: "Bài 3. Thực hành chèn ảnh vào văn bản", sections: ["Thực hành chèn ảnh có trong máy tính vào văn bản", "Thực hành chèn ảnh được tìm từ Internet vào văn bản"] },
              { name: "Bài 4. Định dạng kí tự", sections: ["Nhóm lệnh định dạng kí tự Font", "Thực hành định dạng kí tự"] },
              { name: "Bài 5. Thực hành tổng hợp soạn thảo văn bản", sections: ["Thực hành sử dụng định dạng kí tự và chèn ảnh để trình bày văn bản", "Thực hành các thao tác mới về chỉnh sửa văn bản"] },
            ]
          },
          {
            name: "Lựa chọn 1. Sử dụng phần mềm đồ hoạ tạo sản phẩm số đơn giản",
            lessons: [
              { name: "Bài 1. Làm quen với phần mềm Paint", sections: ["Tìm hiểu phần mềm Paint", "Sử dụng công cụ vẽ, hình khối và bảng màu"] },
              { name: "Bài 2. Thực hành vẽ tranh trên phần mềm Paint", sections: ["Các bước lưu bài vẽ", "Thực hành vẽ tranh theo nhóm"] },
            ]
          },
          {
            name: "Lựa chọn 2. Sử dụng công cụ đa phương tiện hỗ trợ tạo sản phẩm đơn giản",
            lessons: [
              { name: "Bài 1. Sử dụng website YouTube Kids", sections: ["Tìm hiểu website YouTube Kids", "Một số chức năng điều khiển video trên YouTube Kids"] },
              { name: "Bài 2. Tạo sản phẩm thủ công theo video trên YouTube Kids", sections: ["Thực hành tạo sản phẩm thủ công bằng giấy", "Thu hoạch sau thực hành"] },
            ]
          }
        ]
      },
      {
        name: "CHỦ ĐỀ F. GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH",
        subTopics: [
          {
            name: "Chơi và khám phá trong môi trường lập trình trực quan",
            lessons: [
              { name: "Bài 1. Nhóm lệnh bút vẽ", sections: ["Thêm nhóm lệnh bút vẽ", "Sử dụng các lệnh trong nhóm lệnh bút vẽ"] },
              { name: "Bài 2. Thực hành tạo chương trình vẽ hình đơn giản", sections: ["Thực hành tạo chương trình vẽ hình vuông", "Thực hành tạo chương trình vẽ hàng cây"] },
              { name: "Bài 3. Trang phục của nhân vật", sections: ["Khám phá trang phục của nhân vật", "Nhóm lệnh thay đổi trang phục của nhân vật"] },
              { name: "Bài 4. Thực hành tạo chương trình hoạt hình cho nhân vật", sections: ["Tạo hoạt hình thay đổi trang phục quần áo", "Tạo hoạt hình thay đổi trang phục động tác, tư thế"] },
              { name: "Bài 5. Cấu trúc tuần tự", sections: ["Tìm hiểu về cấu trúc tuần tự", "Chương trình có cấu trúc tuần tự"] },
              { name: "Bài 6. Cấu trúc lặp với số lần biết trước", sections: ["Lặp với số lần biết trước", "Sử dụng lệnh lặp lại trong Scratch"] },
              { name: "Bài 7. Cấu trúc lặp có điều kiện", sections: ["Cấu trúc lặp có điều kiện", "Các biểu thức điều kiện trong nhóm lệnh Cảm biến", "Lệnh Lặp lại cho đến khi"] },
              { name: "Bài 8. Cấu trúc lặp liên tục", sections: ["Cấu trúc lặp liên tục", "Lệnh lặp liên tục trong Scratch"] },
              { name: "Bài 9. Biến và cách dùng biến", sections: ["Cách dùng biến có sẵn", "Tạo biến của người dùng"] },
              { name: "Bài 10. Các phép toán số học cơ bản và phép kết hợp", sections: ["Các phép toán số học cơ bản trong Scratch", "Phép kết hợp từ và các biến"] },
              { name: "Bài 11. Các phép so sánh", sections: ["Phép so sánh", "Phép lấy số ngẫu nhiên"] },
              { name: "Bài 12. Cấu trúc rẽ nhánh", sections: ["Cấu trúc rẽ nhánh", "Lệnh rẽ nhánh khuyết và lệnh rẽ nhánh đủ"] },
              { name: "Bài 13. Chạy thử, phát hiện và sửa lỗi chương trình", sections: ["Chạy thử và phát hiện lỗi của chương trình", "Sửa lỗi của chương trình"] },
              { name: "Bài 14. Thực hành viết kịch bản và tạo chương trình", sections: ["Lên ý tưởng kịch bản", "Thực hành tạo chương trình theo kịch bản"] },
            ]
          }
        ]
      },
      REVIEW_TOPIC
    ],
  },
};
