
// Dữ liệu tham chiếu chuẩn cho giáo án Tin học theo Chương trình GDPT 2018 và Khung Năng lực số (NLS)

export const NLS_INDICATORS_DEFINITION = `
GIẢI NGHĨA MÃ CHỈ BÁO NĂNG LỰC SỐ (NLS) - TIỂU HỌC:
- 1.1.CB1a/2a: Xác định nhu cầu thông tin, tìm kiếm đơn giản.
- 1.2.CB1a/2a: Phát hiện độ chính xác, tin cậy của thông tin.
- 1.3.CB1a/2a: Nhận biết thành phần thiết bị, cách tổ chức dữ liệu.
- 2.1.CB1a/2a: Tương tác qua thiết bị/môi trường số.
- 2.2.CB1a/2a: Chia sẻ thông tin qua công nghệ số đơn giản.
- 2.4.CB1a/2a: Chọn công cụ số để cộng tác.
- 2.5.CB2a: Phân biệt chuẩn mực hành vi trong môi trường số.
- 3.1.CB1a/2a: Tạo và chỉnh sửa nội dung số đơn giản.
- 3.2.CB1a/2a: Tích hợp nội dung đơn giản (ảnh + chữ).
- 3.3.CB2a: Xác định quy tắc bản quyền và giấy phép.
- 3.4.CB1a/2a: Lập trình/Thiết lập dãy hướng dẫn cho máy tính.
- 4.1.CB1a/2a: Sử dụng thiết bị an toàn, đúng cách.
- 4.2.CB1a/2a: Bảo vệ dữ liệu cá nhân/quyền riêng tư.
- 4.3.CB1a/2a: Tránh rủi ro sức khỏe khi dùng công nghệ.
- 5.1.CB1a/2a: Xác định và giải quyết lỗi kỹ thuật đơn giản.
- 5.2.CB1a/2a: Xác định nhu cầu cá nhân/giải pháp dựa trên thông tin.
- 5.3.CB1a/2a: Sử dụng công cụ số để tạo tri thức/sản phẩm mới.
- 5.4.CB2a/2b: Nhận ra NLS cần cải thiện, tìm cơ hội phát triển.
- 6.1.CB1a: Nhận diện khái niệm xử lí thông tin hệ thống.
`;

export const DIGITAL_COMPETENCY_FRAMEWORK_MAPPING = `
BẢNG TRA CỨU MÃ NLS THEO BÀI (YÊU CẦU TRÍCH XUẤT CHÍNH XÁC):

LỚP 3 (Cấp độ CB1):
- Bài 1 (Thành phần máy tính): 1.3.CB1a, 5.1.CB1a, 4.1.CB1a
- Bài 2 (Những máy tính thông dụng): 1.1.CB1a, 1.2.CB1a, 1.3.CB1b
- Bài 3 (Em tập sử dụng chuột): 4.1.CB1a, 5.1.CB1a, 5.1.CB1b
- Bài 4 (Bắt đầu sử dụng máy tính): 4.1.CB1a, 5.1.CB1a, 4.3.CB1a
- Bài 5 (Bảo vệ sức khoẻ): 4.3.CB1a, 4.1.CB1b, 4.2.CB1a, 4.1.CB1c
- A2-Bài 1 (Thông tin quyết định): 1.1.CB1a, 1.2.CB1a, 5.2.CB1a
- A3-Bài 1 (Bàn phím): 3.1.CB1a, 4.1.CB1a
- E2-Bài 1 (Mouse Skills): 5.1.CB1a
- F1-Bài 1 (Làm việc theo bước): 3.4.CB1a, 5.4.CB1a, 5.3.CB1b

LỚP 4 (Cấp độ CB2):
- Bài 1 (Phần cứng máy tính): 1.3.CB2a, 5.1.CB2a
- Bài 2 (Phần mềm máy tính): 1.3.CB2b, 4.1.CB2a
- B-Bài 1 (Thông tin trang web): 1.1.CB2a, 1.2.CB2a
- E2-Bài 1 (Làm quen Word): 3.1.CB2a, 5.3.CB2a

LỚP 5 (Cấp độ CB2):
- Bài 1 (Lợi ích máy tính): 1.1.CB2a, 2.1.CB2b, 2.4.CB2a
- Bài 2 (Thực hành sản phẩm số): 3.1.CB2b, 5.3.CB2a
- Bài 3 (Thành thạo máy tính): 5.4.CB2a, 5.4.CB2b
- Scratch (Bút vẽ): 3.4.CB2a, 5.3.CB2a
- Scratch (Vẽ hình đơn giản): 3.4.CB2a, 5.1.CB2a
`;

export const SAMPLE_LESSON_PLAN_STRUCTURE = `
<div style="font-family: 'Times New Roman', Times, serif; font-size: 14pt; line-height: 1.3; color: black; width: 100%;">
  <div style="text-align: center; margin-bottom: 30px; width: 100%;">
    <p style="font-weight: bold; text-transform: uppercase; margin: 0;">KẾ HOẠCH BÀI DẠY TUẦN [WEEK]</p>
    <p style="font-weight: bold; text-transform: uppercase; margin: 0; text-decoration: underline;">MÔN TIN HỌC LỚP [GRADE]</p>
    <p style="font-weight: bold; text-transform: uppercase; margin: 10px 0 0 0;">[MAIN_TOPIC]</p>
    <p style="font-weight: bold; text-transform: uppercase; margin: 0;">[SUB_TOPIC]</p>
    <p style="font-weight: bold; text-transform: uppercase; margin: 5px 0;">BÀI: [LESSON_NAME]</p>
    <p style="margin: 0;">Số tiết: [PERIOD]</p>
    <p style="margin: 0; font-style: italic;">*Thời gian thực hiện: [TIME]*</p>
  </div>

  <p style="font-weight: bold; text-transform: uppercase; margin-top: 20px;">I. YÊU CẦU CẦN ĐẠT</p>
  <p style="font-weight: bold; margin-bottom: 5px;">1. Kiến thức, kĩ năng:</p>
  <div style="padding-left: 15px; margin-bottom: 10px;">
    <p style="margin: 2px 0;">- [Nội dung gạch đầu dòng 1]</p>
    <p style="margin: 2px 0;">- [Nội dung gạch đầu dòng 2]</p>
  </div>
  
  <p style="font-weight: bold; margin-bottom: 5px;">2. Năng lực</p>
  <p style="font-weight: bold; margin: 5px 0;">* Năng lực chung:</p>
  <div style="padding-left: 15px; margin-bottom: 10px;">
    <p style="margin: 2px 0;">- <i>Tự chủ và tự học</i>: [Mô tả]</p>
    <p style="margin: 2px 0;">- <i>Giải quyết vấn đề và sáng tạo</i>: [Mô tả]</p>
  </div>
  
  <p style="font-weight: bold; margin: 5px 0;">* Năng lực đặc thù (Tin học):</p>
  <div style="padding-left: 15px; margin-bottom: 10px;">
    <p style="margin: 2px 0;">- <i>[Mã NL]</i>: [Mô tả]</p>
  </div>
  
  <p style="font-weight: bold; margin: 5px 0;">* Định hướng phát triển năng lực số:</p>
  <div style="padding-left: 15px; margin-bottom: 10px;">
    <p style="margin: 2px 0;">- <i>[Mã NLS]</i>: [Giải nghĩa]</p>
  </div>
  
  <p style="font-weight: bold; margin-bottom: 5px;">3. Phẩm chất</p>
  <div style="padding-left: 15px; margin-bottom: 10px;">
    <p style="margin: 2px 0;">- <i>Chăm chỉ</i>: [Mô tả]</p>
    <p style="margin: 2px 0;">- <i>Trách nhiệm</i>: [Mô tả]</p>
  </div>

  <p style="font-weight: bold; text-transform: uppercase; margin-top: 20px;">II. ĐỒ DÙNG DẠY HỌC</p>
  <p style="margin: 5px 0;"><b>1. Giáo viên:</b> [Danh sách đồ dùng]</p>
  <p style="margin: 5px 0;"><b>2. Học sinh:</b> [Danh sách đồ dùng]</p>

  <p style="font-weight: bold; text-transform: uppercase; margin-top: 20px;">III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU</p>
  <table border="1" style="width: 100%; border-collapse: collapse; border: 1px solid black;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th style="width: 55%; padding: 8px; border: 1px solid black; text-align: center;">HOẠT ĐỘNG CỦA GIÁO VIÊN</th>
        <th style="width: 45%; padding: 8px; border: 1px solid black; text-align: center;">HOẠT ĐỘNG CỦA HỌC SINH</th>
      </tr>
    </thead>
    <tbody>
      <tr><td colspan="2" style="padding: 8px; border: 1px solid black; font-weight: bold; text-align: left;">1. HOẠT ĐỘNG KHỞI ĐỘNG</td></tr>
      <tr>
        <td style="padding: 8px; border: 1px solid black;">
          <p><b><i>* Mục tiêu:</i></b> [Mô tả]</p>
          <p><b><i>* Định hướng năng lực số:</i></b></p>
          <p>- <i>[Mã]</i>: [Giải nghĩa]</p>
          <p><b><i>* Cách tiến hành:</i></b></p>
          <p>- [Hành động gạch đầu dòng 1]</p>
          <p>- [Hành động gạch đầu dòng 2]</p>
        </td>
        <td style="padding: 8px; border: 1px solid black;">- [HS thực hiện]</td>
      </tr>
      <tr><td colspan="2" style="padding: 8px; border: 1px solid black; font-weight: bold; text-align: left;">2. HOẠT ĐỘNG HÌNH THÀNH KIẾN THỨC MỚI</td></tr>
      <tr>
        <td style="padding: 8px; border: 1px solid black;">
          <p><b>2.1. [Tên tiểu mục SGK]</b></p>
          <p><b><i>* Mục tiêu:</i></b> [Mô tả]</p>
          <p><b><i>* Định hướng năng lực số:</i></b></p>
          <p>- <i>[Mã]</i>: [Giải nghĩa]</p>
          <p><b><i>* Cách tiến hành:</i></b></p>
          <p>- [GV trình chiếu/thuyết trình...]</p>
          <p>- [GV đặt câu hỏi...]</p>
          <p>- [GV chốt kiến thức...]</p>
        </td>
        <td style="padding: 8px; border: 1px solid black;">- [HS quan sát/thảo luận...]</td>
      </tr>
      <tr><td colspan="2" style="padding: 8px; border: 1px solid black; font-weight: bold; text-align: left;">3. HOẠT ĐỘNG LUYỆN TẬP</td></tr>
      <tr>
        <td style="padding: 8px; border: 1px solid black;">
          <p><b><i>* Mục tiêu:</i></b> [Mô tả]</p>
          <p><b><i>* Cách tiến hành:</i></b></p>
          <p>- [GV giao nhiệm vụ...]</p>
          <p>- [GV quan sát/hướng dẫn...]</p>
        </td>
        <td style="padding: 8px; border: 1px solid black;">- [HS thực hành...]</td>
      </tr>
      <tr><td colspan="2" style="padding: 8px; border: 1px solid black; font-weight: bold; text-align: left;">4. HOẠT ĐỘNG VẬN DỤNG</td></tr>
      <tr>
        <td style="padding: 8px; border: 1px solid black;">
          <p><b><i>* Mục tiêu:</i></b> [Mô tả]</p>
          <p><b><i>* Cách tiến hành:</i></b></p>
          <p>- [GV đưa ra thử thách...]</p>
        </td>
        <td style="padding: 8px; border: 1px solid black;">- [HS ứng dụng...]</td>
      </tr>
    </tbody>
  </table>

  <p style="margin-top: 30px;"><b>IV. ĐIỀU CHỈNH SAU BÀI DẠY</b></p>
  <p>........................................................................................................................</p>
</div>
`;
