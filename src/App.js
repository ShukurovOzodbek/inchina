import Header from './components/Header'
import Direction from './components/Direction'
import WhyChina from './components/WhyChina'
import PopularPrograms from './components/PopularPrograms'
import InChinaNumbers from './components/InChinaNumbers'
import Instruction from './components/Instruction'
import Reviews from './components/Reviews'
import Questions from './components/Questions'
import Timer from './components/Timer'
import Footer from './components/Footer'
import { ConsultModal } from './components/ConsultModal'
import './App.css';

function App() {
  return (
    <div className="bg-[#F9F9F9] w-full overflow-hidden">
      <Header />
      <Direction />
      <WhyChina />
      <PopularPrograms />
      <InChinaNumbers />
      <Instruction />
      <Reviews />
      <Questions />
      <Timer />
      <Footer />
      <ConsultModal />
    </div>
  );
}

export default App;
