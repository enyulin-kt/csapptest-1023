import { ArrowLeft, Wifi, TrendingUp, Check } from 'lucide-react';

interface RenewalProps {
  onBack: () => void;
}

export default function Renewal({ onBack }: RenewalProps) {
  const plans = [
    {
      speed: '60M',
      price: 999,
      originalPrice: 1299,
      features: ['基本上網速度', '適合1-2人使用', '一般網頁瀏覽'],
      current: true
    },
    {
      speed: '100M',
      price: 1299,
      originalPrice: 1599,
      features: ['流暢上網體驗', '適合2-3人使用', '影片串流順暢'],
      recommended: true
    },
    {
      speed: '300M',
      price: 1599,
      originalPrice: 1999,
      features: ['極速上網', '適合3-5人使用', '多裝置同時使用'],
    },
    {
      speed: '500M',
      price: 1999,
      originalPrice: 2499,
      features: ['超高速體驗', '適合5人以上', '4K串流無延遲'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">寬頻續約升級</h1>
      </header>

      <main className="px-4 py-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-2 text-white mb-3">
            <Wifi className="w-6 h-6" />
            <span className="text-lg font-semibold">目前方案</span>
          </div>
          <div className="text-white text-4xl font-bold mb-2">60M</div>
          <div className="text-white/90 text-sm">合約到期日：2026/03/01</div>
        </div>

        <div className="mb-4">
          <h2 className="text-gray-700 font-semibold text-lg mb-4 px-1">選擇續約方案</h2>

          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-5 shadow-sm border-2 transition-all ${
                  plan.recommended
                    ? 'border-orange-500 shadow-md'
                    : plan.current
                    ? 'border-blue-500'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    熱門推薦
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    目前方案
                  </div>
                )}

                <div className="flex items-start justify-between mb-4 mt-2">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-gray-800">{plan.speed}</span>
                      {!plan.current && (
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">升級</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm line-through mb-1">
                      ${plan.originalPrice}
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      ${plan.price}
                    </div>
                    <div className="text-xs text-gray-500">每月</div>
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                      : plan.current
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.current ? '續約此方案' : '選擇此方案'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 mt-6 border-l-4 border-yellow-400">
          <h3 className="text-gray-800 font-medium mb-2">續約優惠</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 續約享首3個月7折優惠</li>
            <li>• 升級方案免收安裝費</li>
            <li>• 合約期間2年，提前解約需支付違約金</li>
            <li>• 如有疑問請洽客服專線：0800-888-000</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
