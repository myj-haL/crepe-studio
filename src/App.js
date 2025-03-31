import { useEffect } from 'react';
import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Works = lazy(() => import('./pages/Works'));
const WorkDetail = lazy(() => import('./pages/Works/WorkDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const WorkWrite = lazy(() => import('./pages/Works/WorkWrite'));
const WorkEdit = lazy(() => import('./pages/Works/WorkEdit'));

function App() {
  return (
    <BrowserRouter basename="/">
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        outerScale={4}
        color="230, 87, 6"
        outerAlpha={0.6}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
      />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/write" element={<WorkWrite />} />
          <Route path="/works/:uuid" element={<WorkDetail />} />
          <Route path="/works/:uuid/edit" element={<WorkEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
