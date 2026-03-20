
import React, { useRef } from 'react';
import { GeneratedImage } from '../types';

interface Props {
  content: string;
  illustrations?: GeneratedImage[];
  isGeneratingImages?: boolean;
}

const LessonDisplay: React.FC<Props> = ({ content, illustrations = [], isGeneratingImages = false }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (contentRef.current) {
      const range = document.createRange();
      range.selectNode(contentRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      alert('Đã sao chép nội dung vào bộ nhớ tạm. Bạn có thể dán (Paste) vào Word!');
    }
  };

  if (!content) return null;

  return (
    <div className="space-y-8 pb-20">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-white px-8 py-4 border-b flex justify-between items-center sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <h3 className="text-base font-bold text-gray-700 uppercase tracking-tight">Văn bản Kế hoạch bài dạy</h3>
          </div>
          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            Sao chép để dán vào Word
          </button>
        </div>
        
        <div 
          ref={contentRef}
          className="p-12 bg-white overflow-x-auto text-black selection:bg-blue-100"
        >
          <div 
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </div>

      {/* Section for Visual Resources */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center border-b pb-4">
          <span className="mr-3 p-2 bg-blue-100 rounded-lg text-blue-600">💡</span> 
          Học liệu & Trò chơi minh họa (AI đề xuất)
        </h3>
        
        {isGeneratingImages && (
          <div className="flex flex-col items-center py-12 text-blue-500">
             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mb-4"></div>
             <p className="font-medium animate-pulse">Đang thiết kế hình ảnh minh họa bài học...</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {illustrations.map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300">
              <div className="bg-gray-100 h-52 flex items-center justify-center p-4">
                <img src={img.url} alt={img.prompt} className="max-h-full max-w-full rounded shadow-sm object-contain" />
              </div>
              <div className="p-4 bg-white border-t">
                <div className="text-[10px] font-bold text-blue-500 uppercase mb-1">
                  {idx === 0 ? "Sơ đồ tư duy" : idx === 1 ? "Trò chơi" : "Giao diện"}
                </div>
                <p className="text-xs text-gray-700 leading-relaxed italic line-clamp-2">{img.prompt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lesson-content {
          font-family: 'Times New Roman', Times, serif !important;
          font-size: 14pt !important;
          line-height: 1.5 !important;
        }
        .lesson-content h3 { font-size: 16pt; margin-bottom: 20px; }
        .lesson-content p { margin-bottom: 8px; text-align: justify; }
        .lesson-content table { width: 100% !important; border-collapse: collapse !important; border: 1px solid black !important; margin: 15px 0 !important; }
        .lesson-content th, .lesson-content td { border: 1px solid black !important; padding: 10px !important; vertical-align: top !important; }
        .lesson-content b { font-weight: bold; }
        .lesson-content i { font-style: italic; }
      `}</style>
    </div>
  );
};

export default LessonDisplay;
