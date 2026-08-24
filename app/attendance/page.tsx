'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScanLine, Search, Check, X, Clock } from 'lucide-react';

export default function AttendancePage() {
  const [selectedGroup, setSelectedGroup] = useState('مجموعة A');
  const [searchTerm, setSearchTerm] = useState('');

  const [students, setStudents] = useState([
    { id: '1', centerId: '00125', name: 'أحمد محمد علي', status: 'PRESENT' },
    { id: '2', centerId: '00126', name: 'محمود حسن إبراهيم', status: 'ABSENT' },
    { id: '3', centerId: '00127', name: 'سارة خالد السيد', status: 'LATE' },
    { id: '4', centerId: '00128', name: 'عمر شريف فتحي', status: 'UNMARKED' },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const filteredStudents = students.filter(
    s => s.name.includes(searchTerm) || s.centerId.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">تسجيل الحضور والغياب</h1>
          <p className="text-sm text-gray-500">سجّل حضور الطلاب يدويًا أو عبر الماسح الضوئي</p>
        </div>
        <Link
          href="/scanner"
          className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95 w-fit"
        >
          <ScanLine className="w-4 h-4" />
          <span>فتح الكاميرا (Scan)</span>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 mb-1">اختر المجموعة</label>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="مجموعة A">أولى ثانوي - مجموعة A (4:00 م)</option>
            <option value="مجموعة B">ثانية ثانوي - مجموعة B (6:00 م)</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 mb-1">البحث</label>
          <div className="relative">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="اسم الطالب أو Center ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-9 pl-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-sm">قائمة الطلاب ({filteredStudents.length})</h2>
          <span className="text-xs text-gray-500">تاريخ اليوم: {new Date().toLocaleDateString('ar-EG')}</span>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredStudents.map((student) => (
            <div key={student.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/50 transition-colors">
              <div>
                <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mb-1">
                  ID: {student.centerId}
                </span>
                <p className="font-bold text-gray-900 text-sm">{student.name}</p>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  onClick={() => updateStatus(student.id, 'PRESENT')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    student.status === 'PRESENT'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>حاضر</span>
                </button>

                <button
                  onClick={() => updateStatus(student.id, 'ABSENT')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    student.status === 'ABSENT'
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                  <span>غائب</span>
                </button>

                <button
                  onClick={() => updateStatus(student.id, 'LATE')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    student.status === 'LATE'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>متأخر</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}