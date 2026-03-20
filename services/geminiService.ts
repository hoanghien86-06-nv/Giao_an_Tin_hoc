
import { GoogleGenAI, Type } from "@google/genai";
import { GradeLevel, LessonInput } from "../types";
import {
  DIGITAL_COMPETENCY_FRAMEWORK_MAPPING,
  NLS_INDICATORS_DEFINITION,
  SAMPLE_LESSON_PLAN_STRUCTURE,
} from "../data/educationContext";

// Initialize the Google GenAI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Xử lý ngày tháng thủ công để đảm bảo định dạng Việt Nam chính xác
 */
const getVietnameseDateDetails = (dateStr: string) => {
  if (!dateStr) return { dayOfWeek: "...", formattedDate: "..." };
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  
  const days = ["Chủ nhật", "thứ Hai", "thứ Ba", "thứ Tư", "thứ Năm", "thứ Sáu", "thứ Bảy"];
  const dayOfWeek = days[d.getDay()];
  const formattedDate = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
  
  return { dayOfWeek, formattedDate };
};

export const generateLessonPlan = async (input: LessonInput): Promise<string> => {
  const { grade, lessonName, mainTopic, subTopic, week, periodCount, sections, date, planStructure } = input;

  const { dayOfWeek, formattedDate } = getVietnameseDateDetails(date);
  const fullTimeInfo = `${dayOfWeek}, ngày ${formattedDate}`;

  // Build curriculum sections text for prompt
  const sectionsList = sections?.map((s) => s).join(", ") || "";
  const structureList = planStructure?.map((s, i) => `${i + 1}. ${s}`).join("\n") || "";

  const prompt = `
    HÃY SOẠN GIÁO ÁN TIN HỌC CHI TIẾT THEO CÁC QUY TẮC ĐỊNH DẠNG SAU (TUYỆT ĐỐI TUÂN THỦ):
    
    1. HEADER (KHỐI TIÊU ĐỀ): Căn giữa toàn bộ.
       - Dòng 1: <b>KẾ HOẠCH BÀI DẠY TUẦN ${week}</b>
       - Dòng 2: <b><u>MÔN TIN HỌC LỚP ${grade}</u></b>
       - Dòng 3: <b>${mainTopic.toUpperCase()}</b>
       - Dòng 4: <b>${subTopic.toUpperCase()}</b>
       - Dòng 5: <b>BÀI: ${lessonName.toUpperCase()}</b>
       - Dòng 6: Số tiết: ${periodCount.toString().padStart(2, '0')}
       - Dòng 7: <i>*Thời gian thực hiện: ${fullTimeInfo}*</i>

    2. CẤU TRÚC GIÁO ÁN (PHẢI TUÂN THỦ THỨ TỰ VÀ TÊN CÁC MỤC SAU):
    ${structureList}

    3. QUY TẮC CHI TIẾT CHO CÁC MỤC:
       - Đối với mục "I. YÊU CẦU CẦN ĐẠT":
         * 1. Kiến thức, kĩ năng: CHỈ dùng gạch đầu dòng (-), KHÔNG đánh số 1. 2.
         * 2. Năng lực: 
           - * Năng lực chung: Liệt kê các năng lực như "Tự chủ và tự học", "Giải quyết vấn đề và sáng tạo". Tên năng lực in nghiêng, theo sau là dấu hai chấm và mô tả. Dùng gạch đầu dòng (-).
           - * Năng lực đặc thù (Tin học): Liệt kê các mã NL (NLa, NLb, NLc, NLd, NLe) phù hợp. Mã NL in nghiêng, theo sau là dấu hai chấm và mô tả. Dùng gạch đầu dòng (-).
           - * Định hướng phát triển năng lực số: Trích xuất mã NLS từ: ${DIGITAL_COMPETENCY_FRAMEWORK_MAPPING}. Mã NLS in nghiêng, theo sau là dấu hai chấm và giải nghĩa. Dùng gạch đầu dòng (-).
         * 3. Phẩm chất: Liệt kê các phẩm chất như "Chăm chỉ", "Trách nhiệm". Tên phẩm chất in nghiêng, theo sau là dấu hai chấm và mô tả. Dùng gạch đầu dòng (-).
       
       - Đối với mục "II. ĐỒ DÙNG DẠY HỌC":
         * Trình bày rõ ràng: 1. Giáo viên: [Liệt kê]; 2. Học sinh: [Liệt kê]. In đậm tiêu đề "1. Giáo viên:" và "2. Học sinh:".

       - Đối với mục "III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU":
         * Trình bày trong BẢNG 2 cột (GV và HS). 
         * Hàng tiêu đề hoạt động (1. KHỞI ĐỘNG, 2. HÌNH THÀNH KIẾN THỨC MỚI,...) PHẢI CĂN TRÁI (text-align: left) và in đậm.
         * CHI TIẾT CÁC MỤC TRONG CỘT GIÁO VIÊN:
           - Các nhãn PHẢI viết <b><i>VỪA ĐẬM VỪA NGHIÊNG</i></b>: <b><i>* Mục tiêu:</i></b>, <b><i>* Định hướng năng lực số:</i></b>, <b><i>* Cách tiến hành:</i></b>.
           - QUY TẮC NĂNG LỰC SỐ: Nội dung (mã và giải nghĩa) PHẢI xuống dòng và bắt đầu bằng dấu gạch đầu dòng (-).
           - QUY TẮC CÁCH TIẾN HÀNH: KHÔNG viết "Bước 1, Bước 2...". SỬ DỤNG CÁC DẤU GẠCH ĐẦU DÒNG (-) để mô tả các hành động sư phạm cực kỳ chi tiết.
         * HOẠT ĐỘNG 2: Triển khai các tiểu mục (2.1, 2.2...) dựa trên nội dung: ${sectionsList}.

       - Đối với mục "IV. ĐIỀU CHỈNH SAU BÀI DẠY":
         * TUYỆT ĐỐI KHÔNG viết thêm bất kỳ nội dung nào. 
         * CHỈ để lại một dòng chấm kẻ dài (........................................................................................................................).

    4. ĐỊNH DẠNG: Font Times New Roman, 14pt. Trả về HTML sạch, không dùng markdown.

    **DỮ LIỆU ĐẦU VÀO:**
    - Bài học: ${lessonName}
    - Bám sát phong cách cấu trúc: ${SAMPLE_LESSON_PLAN_STRUCTURE}
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      temperature: 0.1,
    }
  });

  let cleanText = (response.text || "").replace(/```html/g, '').replace(/```/g, '').trim();
  return cleanText;
};

export const getImagePrompts = async (lessonHtml: string): Promise<string[]> => {
  const prompt = `Suggest 3 visual aid ideas for this lesson plan. Return JSON array. Content:\n${lessonHtml}`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
      },
    },
  });
  try {
    const text = response.text;
    return text ? JSON.parse(text) : ["Informatics illustration"];
  } catch { return ["Informatics illustration"]; }
};

export const generateIllustration = async (description: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: `Professional educational graphic for primary school informatics: ${description}` }] },
    });
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch { return null; }
};
