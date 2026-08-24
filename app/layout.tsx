import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/navigation/sidebar';
import MobileNav from '@/components/navigation/mobile-nav';

const cairo = Cairo({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: 'Smart Teacher | نظام إدارة وتشغيل المدرس',
  description: 'نظام متكامل لإدارة الطلاب، المجموعات، الحضور، والاختبارات',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-gray-50 min-h-screen antialiased text-gray-900`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 pb-16 md:pb-6 p-4 md:p-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}