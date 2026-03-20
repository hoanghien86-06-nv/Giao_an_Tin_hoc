
import React, { useState } from 'react';
import LessonForm from './components/LessonForm';
import LessonDisplay from './components/LessonDisplay';
import { LessonInput, GeneratedImage } from './types';
import { generateLessonPlan, getImagePrompts, generateIllustration } from './services/geminiService';

const App: React.FC = () => {
  const [lessonContent, setLessonContent] = useState<string>('');
  const [illustrations, setIllustrations] = useState<GeneratedImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (input: LessonInput) => {
    setLoading(true);
    setError(null);
    setLessonContent('');
    setIllustrations([]);
    
    try {
      const content = await generateLessonPlan(input);
      setLessonContent(content);
      setLoading(false);

      setImageLoading(true);
      const prompts = await getImagePrompts(content);
      
      const imagePromises = prompts.slice(0, 3).map(async (promptText) => {
        const url = await generateIllustration(promptText);
        if (url) return { url, prompt: promptText };
        return null;
      });

      const results = await Promise.all(imagePromises);
      const filteredResults = results.filter((img): img is GeneratedImage => img !== null);
      
      setIllustrations(filteredResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi không xác định.');
      setLoading(false);
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Top Banner */}
      <div className="w-full bg-blue-900 text-white text-center py-2 text-xs md:text-sm font-medium shadow-md flex justify-center items-center gap-4 shrink-0">
        <span className="opacity-80">Hoàng Hiền - Tiểu học Nam Vân - TP Nam Định</span>
        <span className="h-4 w-px bg-blue-700"></span>
        <span className="font-bold">Hệ thống soạn Kế hoạch bài dạy Tin học Cánh Diều</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Cố định 20% chiều rộng */}
        <aside className="w-1/5 min-w-[280px] border-r bg-white shadow-sm overflow-y-auto p-4 flex flex-col">
          <header className="mb-6 text-center border-b pb-4">
            <h1 className="text-xl font-bold text-blue-900 uppercase leading-tight">
              Tùy Chọn Bài Dạy
            </h1>
            <p className="text-xs text-slate-500 mt-1">Chuẩn CV 2345 & NL Đặc thù</p>
          </header>
          
          <div className="flex-1">
            <LessonForm onSubmit={handleGenerate} isLoading={loading} />
          </div>

          {error && (
            <div className="mt-4 bg-red-50 border-l-4 border-red-500 text-red-700 p-3 text-sm rounded">
              <p className="font-bold">Lỗi</p>
              <p>{error}</p>
            </div>
          )}
          
          <div className="mt-6 pt-4 border-t text-[10px] text-gray-400 text-center uppercase tracking-widest">
            AI Assisted Planning v2.0
          </div>
        </aside>

        {/* Main Content - Cố định 80% chiều rộng */}
        <main className="w-4/5 bg-gray-100 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            {!lessonContent && !loading && (
              <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400">
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-dashed border-gray-300 flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.586.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-lg italic text-center">Vui lòng chọn thông tin ở thanh bên trái<br/>để bắt đầu khởi tạo kế hoạch bài dạy.</p>
                </div>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center h-[70vh]">
                <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-blue-600 mb-6"></div>
                <h3 className="text-xl font-bold text-blue-800 animate-pulse">Hệ thống đang thiết kế giáo án chuẩn sư phạm...</h3>
                <p className="text-gray-500 mt-2">Ánh xạ năng lực NLa - NLe phù hợp với nội dung bài dạy.</p>
              </div>
            )}

            {lessonContent && (
              <div className="animate-fade-in">
                <LessonDisplay 
                  content={lessonContent} 
                  illustrations={illustrations} 
                  isGeneratingImages={imageLoading}
                />
              </div>
            )}
          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
