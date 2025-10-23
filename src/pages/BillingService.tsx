import { ArrowLeft, FileText, CreditCard, Receipt, Clock } from 'lucide-react';

interface BillingServiceProps {
  onBack: () => void;
}

export default function BillingService({ onBack }: BillingServiceProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">帳務服務</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90">本期帳單金額</p>
              <p className="text-3xl font-bold mt-1">NT$ 1,688</p>
            </div>
            <FileText className="w-12 h-12 opacity-80" />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-blue-600 py-2 rounded-lg font-medium">
              立即繳費
            </button>
            <button className="flex-1 bg-blue-700 text-white py-2 rounded-lg font-medium">
              查看明細
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">近期帳單</h2>
          {[
            { month: '2025年09月', amount: 1688, status: '已繳清', color: 'text-green-600' },
            { month: '2025年08月', amount: 1688, status: '已繳清', color: 'text-green-600' },
            { month: '2025年07月', amount: 1688, status: '已繳清', color: 'text-green-600' },
          ].map((bill, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <Receipt className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium">{bill.month}</p>
                  <p className="text-sm text-gray-500">NT$ {bill.amount}</p>
                </div>
              </div>
              <span className={`text-sm font-medium ${bill.color}`}>{bill.status}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">快速功能</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: CreditCard, label: '繳費方式', color: 'bg-orange-50 text-orange-600' },
              { icon: Clock, label: '繳費紀錄', color: 'bg-blue-50 text-blue-600' },
              { icon: FileText, label: '帳單設定', color: 'bg-green-50 text-green-600' },
              { icon: Receipt, label: '發票查詢', color: 'bg-purple-50 text-purple-600' },
            ].map((item, idx) => (
              <button key={idx} className={`${item.color} rounded-xl p-4 flex flex-col items-center gap-2`}>
                <item.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
