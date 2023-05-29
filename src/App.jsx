import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import All from './components/All';
import Active from './components/Active';
import Complete from './components/Complete';
import USA from './components/USA';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path='/all' element={<All></All>}></Route>
          <Route path='/active' element={<Active></Active>}></Route>
          <Route path='/completed' element={<Complete></Complete>}></Route>
          <Route path='/usa' element={<USA></USA>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
