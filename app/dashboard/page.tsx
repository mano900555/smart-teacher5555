import Link from 'next/link';
import { 
  Users, Layers, CheckCircle2, XCircle, 
  CalendarClock, UserPlus, ScanLine, CheckSquare, PlusCircle, ArrowLeft
} from 'lucide-react';

export default function DashboardPage() {
  const stats = {
    totalStudents: 127,
    totalGroups: 6,
    todayAttendanceRate: 94,
    todayPresent: 45,
    todayAbsent: 3,
    totalRevenue: 10000,
    totalExpenses: 4000,
    netProfit: 6000,
    remainingSubscriptionDays: 24,
  };

  const todayClasses = [
    { time: '4:00 م', group: 'أولى ثانوي - مجموعة A', room: 'القاعة الكبرى' },
    { time: '6:00 م', group: 'ثانية ثانوي - مجموعة B', room: 'قاعة 2' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">مرحبًا مستر إياد 👋</h1>
          <p className="text-sm text-gray-500">إليك نظرة عامة على نشاط اليوم وأداء طلابك</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 w-fit">
          <CalendarClock className="w-4 h-4" />
          <span>متبقي في الاشتراك: <strong>{stats.remainingSubscriptionDays} يومًا</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Link 
          href="/students/new" 
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
        >
          <UserPlus className="w-4 h-4" />
          <span>+ إضافة طالب</span>
        </Link>
        <Link 
          href="/scanner" 
          className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
        >
          <ScanLine className="w-4 h-4" />
          <span>📷 Scan ID</span>
        </Link>
        <Link 
          href="/attendance" 
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
        >
          <CheckSquare className="w-4 h-4" />
          <span>✓ تسجيل حضور</span>
        </Link>
        <Link 
          href="/exams/new" 
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ إضافة اختبار</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">إجمالي الطلاب</p>
            <p className="text-xl font-bold text-gray-900">{stats.totalStudents} طالب</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">المجموعات</p>
            <p className="text-xl font-bold text-gray-900">{stats.totalGroups} مجموعات</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">حضور اليوم</p>
            <p className="text-xl font-bold text-emerald-600">{stats.todayAttendanceRate}% ({stats.todayPresent})</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">غياب اليوم</p>
            <p className="text-xl font-bold text-rose-600">{stats.todayAbsent} طلاب</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-base">الملخص المالي السريع</h2>
            <Link href="/finance" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
              التفاصيل <ArrowLeft className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
              <p className="text-xs text-emerald-700 font-medium mb-1">الإيرادات</p>
              <p className="text-lg font-bold text-emerald-800">{stats.totalRevenue.toLocaleString()} ج.م</p>
            </div>
            <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100">
              <p className="text-xs text-rose-700 font-medium mb-1">المصروفات</p>
              <p className="text-lg font-bold text-rose-800">{stats.totalExpenses.toLocaleString()} ج.م</p>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100">
              <p className="text-xs text-blue-700 font-medium mb-1">صافي المبلغ</p>
              <p className="text-lg font-bold text-blue-800">{stats.netProfit.toLocaleString()} ج.م</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-base">حصص اليوم</h2>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
              {todayClasses.length} حصص
            </span>
          </div>

          <div className="space-y-3">
            {todayClasses.map((c, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-800">{c.group}</p>
                  <p className="text-xs text-gray-500">{c.room}</p>
                </div>
                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
                  {c.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}