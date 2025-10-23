import { ArrowLeft, Wifi, Tv, Phone, Settings, BarChart3 } from 'lucide-react';

interface MyServicesProps {
  onBack: () => void;
}

export default function MyServices({ onBack }: MyServicesProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">我的服務</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">會員等級</p>
              <p className="text-2xl font-bold">鑽石會員</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90 mb-1">續約年資</p>
              <p className="text-2xl font-bold">8年</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">我的服務方案</h2>
          <div className="space-y-3">
            {[
              {
                icon: Wifi,
                name: '光纖寬頻 60M',
                status: '使用中',
                expiry: '2026/03/01',
                color: 'bg-blue-50 text-blue-600',
                statusColor: 'text-green-600',
              },
              {
                icon: Tv,
                name: '數位電視豪華套餐',
                status: '使用中',
                expiry: '2026/03/01',
                color: 'bg-purple-50 text-purple-600',
                statusColor: 'text-green-600',
              },
              {
                icon: Phone,
                name: '市話基本方案',
                status: '使用中',
                expiry: '2026/03/01',
                color: 'bg-orange-50 text-orange-600',
                statusColor: 'text-green-600',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`${service.color} rounded-lg p-2`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-xs text-gray-500 mt-1">到期日: {service.expiry}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${service.statusColor}`}>{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">本月使用統計</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: '網路流量', value: '328GB', icon: BarChart3, color: 'bg-blue-50 text-blue-600' },
              { label: '電視觀看', value: '156小時', icon: Tv, color: 'bg-purple-50 text-purple-600' },
            ].map((stat, idx) => (
              <div key={idx} className={`${stat.color} rounded-xl p-4`}>
                <stat.icon className="w-6 h-6 mb-2" />
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">快速設定</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Settings, label: '服務設定', color: 'bg-gray-50' },
              { icon: Wifi, label: 'WiFi設定', color: 'bg-gray-50' },
            ].map((item, idx) => (
              <button key={idx} className={`${item.color} rounded-xl p-4 flex flex-col items-center gap-2`}>
                <item.icon className="w-6 h-6 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
