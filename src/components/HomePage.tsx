import { Bell, ChevronDown, ChevronRight, Home, Sparkles, LayoutGrid, User, Menu, FileText, Link2, MapPin, Package, Shield } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="font-semibold text-lg">Kbro</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
            <User className="w-5 h-5 text-red-500" />
          </div>
          <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center relative">
            <Bell className="w-5 h-5 text-yellow-600" />
          </div>
        </div>
      </header>

      <main className="px-4 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <span className="text-gray-800 font-medium">本期帳單總覽</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              推銷師
            </button>
          </div>
          <div className="mb-4">
            <div className="text-gray-600 text-sm mb-1">金額：</div>
            <div className="text-green-600 text-3xl font-bold">$ 1,688元</div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('payment')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-md">
              我要繳費
            </button>
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl px-6 py-3 flex items-center gap-2 shadow-md">
              <ChevronRight className="w-5 h-5 text-white" />
              <span className="text-white font-medium">MyVideo</span>
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mb-4">
          <div className="w-16 h-1 bg-gray-300 rounded"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>

        <div className="flex justify-around mb-6">
          <button onClick={() => onNavigate('billing')} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">帳務服務</span>
          </button>
          <button onClick={() => onNavigate('repair')} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition">
              <Link2 className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">線上報修</span>
          </button>
          <button onClick={() => onNavigate('locations')} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition">
              <MapPin className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">服務據點</span>
          </button>
          <button onClick={() => onNavigate('store')} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition">
              <Package className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">商品門市</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition">
              <Shield className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">電視/搜尋</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border-l-4 border-yellow-400">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="mb-2">
                <span className="text-gray-800 font-medium">寬頻速率：</span>
                <span className="text-orange-600 font-bold text-lg">60M</span>
              </div>
              <div className="text-gray-600 text-sm mb-3">
                合約到期日：2026/03/01
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md">
                  我要續約
                </button>
                <span className="text-blue-600 text-xl font-bold">$999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-green-400">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-800">訊號品質：</span>
                <span className="text-gray-800 font-bold">正常</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-800">家戶WIFI：</span>
                <span className="text-gray-800 font-bold">正常</span>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-md">
                線上報修
              </button>
            </div>
            <div className="flex items-end">
              <div className="relative w-24 h-20">
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-300 rounded"></div>
                <div className="absolute bottom-0 left-6 w-8 h-12 bg-blue-400 rounded"></div>
                <div className="absolute bottom-0 left-12 w-8 h-16 bg-blue-500 rounded"></div>
                <div className="absolute bottom-0 right-0 w-8 h-6 bg-orange-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-blue-600">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">首頁</span>
          </button>
          <button onClick={() => onNavigate('services')} className="flex flex-col items-center gap-1 text-gray-400">
            <Sparkles className="w-6 h-6" />
            <span className="text-xs">我的服務</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <LayoutGrid className="w-6 h-6" />
            <span className="text-xs">智慧家庭</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">會員中心</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Menu className="w-6 h-6" />
            <span className="text-xs">功能選單</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
