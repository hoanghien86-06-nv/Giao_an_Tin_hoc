
// Added React and hook imports to fix "Cannot find name" and "Cannot find namespace" errors
import React, { useState, useMemo, useEffect } from 'react';
import { GradeLevel, LessonInput } from '../types';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface Props {
  onSubmit: (data: LessonInput) => void;
  isLoading: boolean;
}

const DEFAULT_STRUCTURE = [
  'I. YÊU CẦU CẦN ĐẠT',
  'II. ĐỒ DÙNG DẠY HỌC',
  'III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU',
  'IV. ĐIỀU CHỈNH SAU BÀI DẠY'
];

const LessonForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<LessonInput>({
    grade: GradeLevel.Grade3,
    mainTopic: '',
    subTopic: '',
    lessonName: '',
    periodCount: 1,
    week: 1,
    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD for date input
    sections: [],
    planStructure: [...DEFAULT_STRUCTURE]
  });

  const mainTopics = useMemo(() => CURRICULUM_DATA[formData.grade]?.mainTopics || [], [formData.grade]);
  const subTopics = useMemo(() => mainTopics.find(t => t.name === formData.mainTopic)?.subTopics || [], [mainTopics, formData.mainTopic]);
  const lessons = useMemo(() => subTopics.find(t => t.name === formData.subTopic)?.lessons || [], [subTopics, formData.subTopic]);

  useEffect(() => { setFormData(p => ({ ...p, mainTopic: '', subTopic: '', lessonName: '', sections: [] })); }, [formData.grade]);
  useEffect(() => { setFormData(p => ({ ...p, subTopic: '', lessonName: '', sections: [] })); }, [formData.mainTopic]);
  useEffect(() => { setFormData(p => ({ ...p, lessonName: '', sections: [] })); }, [formData.subTopic]);

  const handleLessonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    const selectedLesson = lessons.find(l => l.name === name);
    setFormData(prev => ({ ...prev, lessonName: name, sections: selectedLesson?.sections || [] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'lessonName') { handleLessonChange(e as React.ChangeEvent<HTMLSelectElement>); return; }
    setFormData(p => ({ ...p, [name]: name === 'periodCount' || name === 'week' ? parseInt(value) || 0 : value }));
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newStructure = [...(formData.planStructure || [])];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newStructure.length) return;
    [newStructure[index], newStructure[targetIndex]] = [newStructure[targetIndex], newStructure[index]];
    setFormData(p => ({ ...p, planStructure: newStructure }));
  };

  const removeSection = (index: number) => {
    const newStructure = (formData.planStructure || []).filter((_, i) => i !== index);
    setFormData(p => ({ ...p, planStructure: newStructure }));
  };

  const addSection = () => {
    const name = prompt('Nhập tên phần mới:');
    if (name && name.trim()) {
      setFormData(p => ({ ...p, planStructure: [...(p.planStructure || []), name.trim()] }));
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Khối lớp & Số tiết</label>
        <div className="grid grid-cols-2 gap-2">
          <select name="grade" value={formData.grade} onChange={handleChange} className="w-full p-2 border rounded text-sm bg-gray-50 focus:border-blue-500 outline-none">
            <option value={GradeLevel.Grade3}>Lớp 3</option>
            <option value={GradeLevel.Grade4}>Lớp 4</option>
            <option value={GradeLevel.Grade5}>Lớp 5</option>
          </select>
          <input type="number" name="periodCount" value={formData.periodCount} onChange={handleChange} min={1} className="w-full p-2 border rounded text-sm focus:border-blue-500 outline-none" placeholder="Số tiết" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Chủ đề lớn</label>
        <select name="mainTopic" value={formData.mainTopic} onChange={handleChange} required className="w-full p-2 border rounded text-sm bg-gray-50 focus:border-blue-500 outline-none">
          <option value="">-- Chọn chủ đề lớn --</option>
          {mainTopics.map((t, idx) => <option key={idx} value={t.name}>{t.name}</option>)}
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Chủ đề nhỏ</label>
        <select name="subTopic" value={formData.subTopic} onChange={handleChange} required disabled={!formData.mainTopic} className="w-full p-2 border rounded text-sm bg-gray-50 disabled:opacity-50 focus:border-blue-500 outline-none">
          <option value="">-- Chọn chủ đề nhỏ --</option>
          {subTopics.map((t, idx) => <option key={idx} value={t.name}>{t.name}</option>)}
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Tên bài học</label>
        <select name="lessonName" value={formData.lessonName} onChange={handleChange} required disabled={!formData.subTopic} className="w-full p-2 border rounded text-sm bg-gray-50 disabled:opacity-50 focus:border-blue-500 outline-none font-medium">
          <option value="">-- Chọn bài học --</option>
          {lessons.map((l, idx) => <option key={idx} value={l.name}>{l.name}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Tuần</label>
          <input type="number" name="week" value={formData.week} onChange={handleChange} className="w-full p-2 border rounded text-sm focus:border-blue-500 outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Ngày dạy</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded text-sm focus:border-blue-500 outline-none" />
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-500 uppercase">Cấu trúc giáo án</label>
          <button type="button" onClick={addSection} className="text-[10px] text-blue-600 hover:underline font-bold">+ THÊM PHẦN</button>
        </div>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
          {formData.planStructure?.map((section, idx) => (
            <div key={idx} className="flex items-center gap-1 bg-gray-50 p-1.5 rounded border border-gray-100 group">
              <span className="text-[11px] font-medium text-gray-700 flex-1 truncate">{idx + 1}. {section}</span>
              <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button type="button" onClick={() => moveSection(idx, 'up')} disabled={idx === 0} className="p-1 hover:bg-gray-200 rounded disabled:opacity-30">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                </button>
                <button type="button" onClick={() => moveSection(idx, 'down')} disabled={idx === (formData.planStructure?.length || 0) - 1} className="p-1 hover:bg-gray-200 rounded disabled:opacity-30">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <button type="button" onClick={() => removeSection(idx)} className="p-1 hover:bg-red-100 text-red-500 rounded">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !formData.lessonName}
        className={`w-full py-3 mt-4 rounded-lg font-bold text-white shadow transition-all ${
          isLoading || !formData.lessonName ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
        }`}
      >
        {isLoading ? 'Đang tạo...' : 'Tạo Kế Hoạch Bài Dạy'}
      </button>
    </form>
  );
};

export default LessonForm;
