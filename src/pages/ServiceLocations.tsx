import { ArrowLeft, MapPin, Clock, Phone, Navigation } from 'lucide-react';

interface ServiceLocationsProps {
  onBack: () => void;
}

export default function ServiceLocations({ onBack }: ServiceLocationsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">服務據點</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <input
            type="text"
            placeholder="搜尋地區或門市名稱"
            className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {['全部', '台北市', '新北市', '桃園市', '台中市', '高雄市'].map((city) => (
            <button
              key={city}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                city === '全部' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {[
            {
              name: '台北信義門市',
              address: '台北市信義區信義路五段7號',
              phone: '02-2345-6789',
              hours: '週一至週日 10:00-21:00',
              distance: '1.2km',
            },
            {
              name: '台北東區門市',
              address: '台北市大安區忠孝東路四段181號',
              phone: '02-2345-1234',
              hours: '週一至週日 10:00-21:00',
              distance: '2.5km',
            },
            {
              name: '台北南港門市',
              address: '台北市南港區南港路一段368號',
              phone: '02-2345-5678',
              hours: '週一至週日 10:00-21:00',
              distance: '3.8km',
            },
          ].map((location, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{location.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{location.distance}</span>
                  </div>
                </div>
                <button className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                  <Navigation className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{location.hours}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium text-sm">
                  預約服務
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium text-sm">
                  撥打電話
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
