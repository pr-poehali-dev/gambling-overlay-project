import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GamblingLanding = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 flex flex-col items-center justify-center p-4">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-montserrat">
          🎰 CASINO
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 font-roboto">
          Выбери свою удачу
        </p>
      </div>

      {/* Основные кнопки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Кнопка 1 - Слоты */}
        <Button
          onClick={() => openLink("https://t.me/+v_-CZBwlYqg1OWZi")}
          className="h-32 md:h-40 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl md:text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/50"
        >
          <div className="flex flex-col items-center gap-3">
            <Icon name="Zap" size={48} />
            <span className="font-montserrat">telegram + bonus</span>
          </div>
        </Button>

        {/* Кнопка 2 - Покер */}
        <Button
          onClick={() =>
            openLink("https://1wllkg.life/casino/list?open=register&p=sbpl")
          }
          className="h-32 md:h-40 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xl md:text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-500/50"
        >
          <div className="flex flex-col items-center gap-3">
            <Icon name="Spade" size={48} />
            <span className="font-montserrat">ПОКЕР</span>
          </div>
        </Button>

        {/* Кнопка 3 - Рулетка */}
        <Button
          onClick={() =>
            openLink("https://1wllkg.life/casino/list?open=register&p=sbpl")
          }
          className="h-32 md:h-40 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl md:text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50"
        >
          <div className="flex flex-col items-center gap-3">
            <Icon name="Circle" size={48} />
            <span className="font-montserrat">РУЛЕТКА</span>
          </div>
        </Button>
      </div>

      {/* Дополнительная информация */}
      <div className="mt-12 text-center">
        <p className="text-purple-200 text-lg font-roboto">
          🎲 Играй ответственно • 18+ • Удача ждет!
        </p>
      </div>

      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
    </div>
  );
};

export default GamblingLanding;
