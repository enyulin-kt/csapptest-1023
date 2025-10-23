import { ArrowLeft, Wifi, Tv, Phone, AlertCircle, CheckCircle } from 'lucide-react';

interface OnlineRepairProps {
  onBack: () => void;
}

export default function OnlineRepair({ onBack }: OnlineRepairProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">線上報修</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-green-400">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h2 className="font-semibold text-lg">系統狀態正常</h2>
          </div>
          <p className="text-sm text-gray-600">您的網路與服務目前運作正常</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">選擇報修項目</h2>
          <div className="space-y-3">
            {[
              { icon: Wifi, label: '網路問題', desc: '連線異常、斷線、速度慢', color: 'bg-blue-50 text-blue-600' },
              { icon: Tv, label: '電視問題', desc: '無畫面、訊號異常', color: 'bg-purple-50 text-purple-600' },
              { icon: Phone, label: '電話問題', desc: '無法撥打、雜音', color: 'bg-orange-50 text-orange-600' },
            ].map((item, idx) => (
              <button key={idx} className="w-full bg-gray-50 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-100 transition">
                <div className={`${item.color} rounded-lg p-3`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">報修紀錄</h2>
          {[
            { id: 'R202510001', date: '2025/10/15', status: '已完成', type: '網路維修', color: 'text-green-600' },
            { id: 'R202509088', date: '2025/09/20', status: '已完成', type: '電視調整', color: 'text-green-600' },
          ].map((record, idx) => (
            <div key={idx} className="py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-sm">{record.type}</p>
                <span className={`text-sm font-medium ${record.color}`}>{record.status}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>單號: {record.id}</span>
                <span>{record.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">溫馨提醒</p>
            <p>若有緊急問題，請直接撥打客服專線：0800-123-456</p>
          </div>
        </div>
      </main>
    </div>
  );
}
