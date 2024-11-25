import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page0 from '../page0';
import Page1 from '../page1';
import Page2 from '../page2';
// import Page3 from '../page3';
import Page4 from '../page4';
// import Page5 from '../page5';
import Page6 from '../page6';
// import Page7 from '../page7';
// import Page8 from '../page8';
// import Page9 from '../page9';
import Page10 from '../page10';
import Page11 from '../page11';
import Page12 from '../page12';
import Page13 from '../page13';
import Page18 from '../page18';
import Page20 from '../page20';
import Page21 from '../page21';


function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <Navigation />  */}
      <Routes>
      <Route path="/page0" element={<Page0 />} />
        {/* <Route path="/" element={<Page1 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
        <Route path="/Page7" element={<Page7 />} />
        <Route path="/Page8" element={<Page8 />} />
        <Route path="/Page9" element={<Page9 />} /> */}
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="Page4" element={<Page4 />} />
        <Route path="/Page6" element={<Page6 />} />
        <Route path="/Page10" element={<Page10/>} />
        <Route path="/Page11" element={<Page11/>} />
        <Route path="/Page12" element={<Page12/>} />
        <Route path="/Page13" element={<Page13/>} />
        <Route path="/Page18" element={<Page18/>} />
        <Route path="/Page20" element={<Page20/>} />
        <Route path="/Page21" element={<Page21/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
