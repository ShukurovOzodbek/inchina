import Header from './componentsRu/Header'
import Direction from './componentsRu/Direction'
import WhyChina from './componentsRu/WhyChina'
import PopularPrograms from './componentsRu/PopularPrograms'
import InChinaNumbers from './componentsRu/InChinaNumbers'
import Instruction from './componentsRu/Instruction'
import Reviews from './componentsRu/Reviews'
import Questions from './componentsRu/Questions'
import Timer from './componentsRu/Timer'
import Footer from './componentsRu/Footer'
import {ConsultModal} from './componentsRu/ConsultModal'
import Header2 from './componentsUz/Header'
import Direction2 from './componentsUz/Direction'
import WhyChina2 from './componentsUz/WhyChina'
import PopularPrograms2 from './componentsUz/PopularPrograms'
import InChinaNumbers2 from './componentsUz/InChinaNumbers'
import Instruction2 from './componentsUz/Instruction'
import Reviews2 from './componentsUz/Reviews'
import Questions2 from './componentsUz/Questions'
import Timer2 from './componentsUz/Timer'
import Footer2 from './componentsUz/Footer'
import {ConsultModal2} from './componentsUz/ConsultModal'
import './App.css';
import {Route, Routes} from "react-router-dom";
import Thank2 from "./componentsUz/Thank";
import Thank from "./componentsRu/Thank";

function App() {
    return (
        <Routes>
            <Route index element={<div className="bg-[#F9F9F9] w-full overflow-hidden">
                <Header/>
                <Direction/>
                <WhyChina/>
                <PopularPrograms/>
                <InChinaNumbers/>
                <Instruction/>
                <Reviews/>
                <Questions/>
                <Timer/>
                <Footer/>
                <ConsultModal/>
            </div>} />
            <Route path={'/uz'} element={<div className="bg-[#F9F9F9] w-full overflow-hidden">
                <Header2/>
                <Direction2/>
                <WhyChina2/>
                <PopularPrograms2/>
                <InChinaNumbers2/>
                <Instruction2/>
                <Reviews2/>
                <Questions2/>
                <Timer2/>
                <Footer2/>
                <ConsultModal2/>
            </div>} />
            <Route path={'/uz/thank'} element={<Thank2 />} />
            <Route path={'/thank'} element={<Thank />} />
        </Routes>
    );
}

export default App;
