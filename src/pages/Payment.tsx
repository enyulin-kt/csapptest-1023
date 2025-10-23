import { ArrowLeft, CreditCard, Building2, Smartphone, Wallet } from 'lucide-react';

interface PaymentProps {
  onBack: () => void;
}

export default function Payment({ onBack }: PaymentProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">我要繳費</h1>
      </header>

      <main className="px-4 py-6">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-lg mb-6">
          <div className="text-white text-sm mb-2">本期應繳金額</div>
          <div className="text-white text-4xl font-bold mb-4">$ 1,688</div>
          <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
            <span className="text-white text-sm">繳費期限：2025/11/15</span>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-gray-700 font-medium mb-3 px-1">選擇付款方式</h2>

          <div className="space-y-3">
            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-orange-500">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800">信用卡</div>
                <div className="text-sm text-gray-500">快速安全付款</div>
              </div>
            </button>

            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-orange-500">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800">行動支付</div>
                <div className="text-sm text-gray-500">LINE Pay / 街口支付</div>
              </div>
            </button>

            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-orange-500">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Wallet className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800">電子錢包</div>
                <div className="text-sm text-gray-500">悠遊付 / 一卡通</div>
              </div>
            </button>

            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-800">ATM轉帳</div>
                <div className="text-sm text-gray-500">虛擬帳號繳費</div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 mt-6">
          <h3 className="text-gray-800 font-medium mb-2">繳費說明</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 繳費後約需1-2個工作天完成入帳</li>
            <li>• 逾期繳費將酌收滯納金</li>
            <li>• 如有疑問請洽客服專線：0800-888-000</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
