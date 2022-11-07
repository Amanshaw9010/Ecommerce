import './App.css';
import Checkout from './Component/Checkout';
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Second from './Component/Second';
import HomeContainer from './container/HomeContainer';
import HeaderContainer from './container/HeaderContainer';


function App() {
  return (
    <>
      <HeaderContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<HomeContainer />} />

        </Routes>

      </BrowserRouter>

      {/* <HeaderContainer />
      <HomeContainer /> */}
    </>



    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Ecommerce />} />
    //     <Route path="/quiz" element={<Quiz />} />
    //     <Route path="/endquiz" element={<EndQuiz />} />
    //   </Routes>
    // </BrowserRouter>


  );
}

export default App;
