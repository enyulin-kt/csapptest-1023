import { ArrowLeft, Smartphone, Wifi, Tv, ShoppingCart } from 'lucide-react';

interface ProductStoreProps {
  onBack: () => void;
}

export default function ProductStore({ onBack }: ProductStoreProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">商品門市</h1>
        <div className="ml-auto relative">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </div>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white shadow-md">
          <h2 className="text-2xl font-bold mb-2">雙11特惠</h2>
          <p className="text-sm opacity-90 mb-3">精選商品最低5折起</p>
          <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-medium text-sm">
            立即搶購
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {['熱門', '手機', '配件', '網路設備', '電視', '智慧家電'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                category === '熱門' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            {
              name: 'WiFi 6 路由器',
              price: 2990,
              originalPrice: 3990,
              image: Wifi,
              tag: '熱銷',
              color: 'bg-blue-50 text-blue-600',
            },
            {
              name: '4K智慧電視盒',
              price: 1990,
              originalPrice: 2990,
              image: Tv,
              tag: '新品',
              color: 'bg-purple-50 text-purple-600',
            },
            {
              name: '5G智慧手機',
              price: 12990,
              originalPrice: 15990,
              image: Smartphone,
              tag: '特惠',
              color: 'bg-orange-50 text-orange-600',
            },
            {
              name: 'Mesh網路系統',
              price: 5990,
              originalPrice: 7990,
              image: Wifi,
              tag: '推薦',
              color: 'bg-green-50 text-green-600',
            },
          ].map((product, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className={`${product.color} h-40 flex items-center justify-center relative`}>
                <product.image className="w-16 h-16" />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-red-600 font-bold text-lg">NT$ {product.price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-400 line-through mb-2">NT$ {product.originalPrice.toLocaleString()}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                  加入購物車
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
