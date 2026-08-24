'use client';

import { useState } from 'react';
import { Wallet, ArrowDownRight, ArrowUpRight, PlusCircle } from 'lucide-react';

export default function FinancePage() {
  const [transactions] = useState([
    { id: '1', type: 'INCOME', title: 'اشتراكات شهر أغسطس - مجموعة A', amount: 4800, date: '2026-08-20' },
    { id: '2', type: 'EXPENSE', title: 'طباعة ملازم ومراجعات', amount: 1200, date: '2026-08-22' },
    { id: '3', type: 'EXPENSE', title: 'نسبة السنتر (40%)', amount: 1920, date: '2026-08-23' },
  ]);

  const totalIncome = transactions
    .filter(t => t.type === 'INCOME')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'EXPENSE')
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalIncome - totalExpenses;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">المالية والخزنة</h1>
          <p className="text-sm text-gray-500">متابعة الإيرادات، المصروفات، ونسب السنتر</p>
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95 w-fit"
        >
          <PlusCircle className="w-4 h-4" />
          <span>+ إضافة معاملة جديدة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">إجمالي الإيرادات</p>
            <p className="text-xl font-bold text-emerald-600">{totalIncome.toLocaleString()} ج.م</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <ArrowDownRight className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">إجمالي المصروفات والنسب</p>
            <p className="text-xl font-bold text-rose-600">{totalExpenses.toLocaleString()} ج.م</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">صافي الأرباح</p>
            <p className="text-xl font-bold text-blue-600">{netProfit.toLocaleString()} ج.م</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-sm">سجل المعاملات المالية</h2>
          <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
            {transactions.length} معاملات
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {transactions.map((t) => (
            <div key={t.id} className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    t.type === 'INCOME' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {t.type === 'INCOME' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.date}</p>
                </div>
              </div>

              <span
                className={`font-bold text-sm ${
                  t.type === 'INCOME' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {t.type === 'INCOME' ? '+' : '-'}{t.amount.toLocaleString()} ج.م
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}