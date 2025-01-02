import "./App.css";
import { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const WorkDetail = lazy(() => import("./pages/Works/WorkDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));;

function App() {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/detail/:id" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
