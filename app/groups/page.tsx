'use client';

import Link from 'next/link';
import { PlusCircle, Users, Clock, Calendar } from 'lucide-react';

export default function GroupsPage() {
  const groups = [
    {
      id: '1',
      name: 'مجموعة A - سنتر التفوق',
      grade: 'الصف الأول الثانوي',
      subject: 'التاريخ',
      days: ['الأحد', 'الأربعاء'],
      time: '04:00 مساءً',
      studentsCount: 32,
    },
    {
      id: '2',
      name: 'مجموعة B - سنتر الأوائل',
      grade: 'الصف الثاني الثانوي',
      subject: 'التاريخ',
      days: ['الإثنين', 'الخميس'],
      time: '06:00 مساءً',
      studentsCount: 28,
    },
    {
      id: '3',
      name: 'مجموعة C - المراجعة النهائية',
      grade: 'الصف الثالث الثانوي',
      subject: 'التاريخ',
      days: ['السبت', 'الثلاثاء'],
      time: '02:00 مساءً',
      studentsCount: 45,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة المجموعات</h1>
          <p className="text-sm text-gray-500">تنظيم المجموعات الدراسية وأوقات الحصص</p>
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95 w-fit"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ إضافة مجموعة جديدة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg mb-1">
                  {group.grade}
                </span>
                <h3 className="font-bold text-gray-900 text-base">{group.name}</h3>
                <p className="text-xs text-gray-500">المادة: {group.subject}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-50 space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <span>الأيام: <strong>{group.days.join(' ، ')}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>الموعد: <strong>{group.time}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600 shrink-0" />
                <span>عدد الطلاب: <strong>{group.studentsCount} طالب</strong></span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-2">
              <Link
                href={`/attendance?group=${group.id}`}
                className="flex-1 text-center py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold transition-colors"
              >
                تسجيل حضور المجموعة
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}