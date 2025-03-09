import Header from '../components/Header';
import Banner from '../components/Banner';
import GameCarousel from '../components/GameCarousel';
import { Game } from '../types';
import gamesData from '../data/games.json';

export default function Home() {
  // Use the imported games data
  const carouselGames: Game[] = gamesData;
  const robloxGames: Game[] = gamesData.filter(game => game.type === 'roblox');

  return (
    <main className="min-h-screen bg-gray-900 text-white bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('background.gif')" }}>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content with higher z-index */}
      <div className="relative z-20">
        <Header />
        <Banner />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Popular Games</h2>
          <GameCarousel games={carouselGames} />
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">New Games</h2>
          <GameCarousel games={robloxGames} />
        </div>
      </div>
    </main>
  );
}
