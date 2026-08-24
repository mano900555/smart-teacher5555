'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, UserPlus, Phone } from 'lucide-react';

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const [students] = useState([
    {
      id: '1',
      centerId: '00125',
      name: 'أحمد محمد علي',
      phone: '01012345678',
      parentPhone: '01112345678',
      group: 'مجموعة A - أولى ثانوي',
      status: 'ACTIVE',
    },
    {
      id: '2',
      centerId: '00126',
      name: 'محمود حسن إبراهيم',
      phone: '01212345678',
      parentPhone: '01512345678',
      group: 'مجموعة B - ثانية ثانوي',
      status: 'ACTIVE',
    },
    {
      id: '3',
      centerId: '00127',
      name: 'سارة خالد السيد',
      phone: '01098765432',
      parentPhone: '01198765432',
      group: 'مجموعة A - أولى ثانوي',
      status: 'INACTIVE',
    },
  ]);

  const filteredStudents = students.filter(
    (s) =>
      s.name.includes(searchTerm) ||
      s.centerId.includes(searchTerm) ||
      s.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة الطلاب</h1>
          <p className="text-sm text-gray-500">عرض، بحث، وإضافة الطلاب للسنتر</p>
        </div>
        <Link
          href="/students/new"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95 w-fit"
        >
          <UserPlus className="w-4 h-4" />
          <span>+ إضافة طالب جديد</span>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="البحث باسم الطالب، Center ID، أو رقم الهاتف..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-9 pl-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-sm">قائمة الطلاب ({filteredStudents.length})</h2>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-gray-50/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    ID: {student.centerId}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      student.status === 'ACTIVE'
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {student.status === 'ACTIVE' ? 'نشط' : 'غير نشط'}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base">{student.name}</h3>
                <p className="text-xs text-gray-500">{student.group}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>طالب: {student.phone}</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ولي الأمر: {student.parentPhone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}