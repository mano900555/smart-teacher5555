'use client';

import { useState } from 'react';
import { User, Bell, Save } from 'lucide-react';

export default function SettingsPage() {
  const [teacherName, setTeacherName] = useState('مستر إياد الطيب');
  const [subject, setSubject] = useState('التاريخ');
  const [whatsappNumber, setWhatsappNumber] = useState('01000000000');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم حفظ الإعدادات بنجاح!');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">إعدادات النظام</h1>
        <p className="text-sm text-gray-500">إدارة معلومات المدرس، الإشعارات، وبيانات الحساب</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-gray-800 text-base">البيانات الشخصية والتدريس</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">اسم المدرس</label>
              <input
                type="text"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">المادة الدراسية</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">رقم الواتساب الرئيسي</label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <Bell className="w-5 h-5 text-emerald-600" />
            <h2 className="font-bold text-gray-800 text-base">إشعارات الواتساب والغياب</h2>
          </div>

          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
              <span className="text-gray-700 font-medium">إرسال رسالة تلقائية لولي الأمر فور تسجيل الغياب</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
              <span className="text-gray-700 font-medium">إرسال تقرير بدرجات الاختبارات أسبوعيًا</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-md active:scale-95 w-full sm:w-auto"
        >
          <Save className="w-4 h-4" />
          <span>حفظ التغيرات</span>
        </button>
      </form>
    </div>
  );
}