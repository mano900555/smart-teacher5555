'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, CreditCard, FolderGroup, 
  CheckSquare, Calendar, RefreshCw, BookOpen, 
  FileCheck, FlaskConical, Wallet, Landmark, 
  BarChart3, MessageSquare, Bell, Settings 
} from 'lucide-react';

const menuGroups = [
  {
    title: 'الإدارة الرئيسية',
    items: [
      { name: 'الرئيسية', href: '/dashboard', icon: LayoutDashboard },
      { name: 'الطلاب', href: '/students', icon: Users },
      { name: 'كروت ID', href: '/cards', icon: CreditCard },
      { name: 'المجموعات', href: '/groups', icon: FolderGroup },
    ]
  },
  {
    title: 'التدريس والجدول',
    items: [
      { name: 'الحضور', href: '/attendance', icon: CheckSquare },
      { name: 'الجدول', href: '/schedule', icon: Calendar },
      { name: 'تعويض الحصص', href: '/compensation', icon: RefreshCw },
    ]
  },
  {
    title: 'المحتوى والتقييم',
    items: [
      { name: 'المحتوى التعليمي', href: '/content', icon: BookOpen },
      { name: 'الواجبات', href: '/assignments', icon: FileCheck },
      { name: 'الاختبارات', href: '/exams', icon: FlaskConical },
    ]
  },
  {
    title: 'المالية والتقارير',
    items: [
      { name: 'المالية', href: '/finance', icon: Wallet },
      { name: 'الخزنة', href: '/vault', icon: Landmark },
      { name: 'التقارير', href: '/reports', icon: BarChart3 },
    ]
  },
  {
    title: 'التواصل والنظام',
    items: [
      { name: 'WhatsApp', href: '/whatsapp', icon: MessageSquare },
      { name: 'الإشعارات', href: '/notifications', icon: Bell },
      { name: 'الإعدادات', href: '/settings', icon: Settings },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-l border-gray-200 h-screen sticky top-0 p-4 overflow-y-auto dir-rtl">
      <div className="mb-6 px-2 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <h1 className="text-xl font-bold text-gray-800">Smart Teacher</h1>
      </div>

      <div className="space-y-6">
        {menuGroups.map((group, idx) => (
          <div key={idx}>
            <p className="text-xs font-semibold text-gray-400 mb-2 px-2">{group.title}</p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 font-semibold' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}