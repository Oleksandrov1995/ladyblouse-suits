import { Products } from 'pages/Products/Products';
import { MainPage } from '../pages/MainPage/MainPage';
import './App.css';


import { Route, Routes } from 'react-router-dom';
import { AgreementPage } from 'pages/AgreementPage/AgreemantPage';
export const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path='/agreement' element={<AgreementPage/>}/>
        </Routes>
      </div>
    
    </>
  );
};
