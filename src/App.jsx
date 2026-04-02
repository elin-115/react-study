import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import CounterController from "./components/CounterController";
import MouseTracker from "./components/MouseTracker";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import Blog from "./components/Blog";
import Ecommerce from "./components/Ecommerce";
import ProductDetail from "./components/Ecommerce/ProductDetail";
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="counter" element={<CounterController />} />
          <Route path="tracker" element={<MouseTracker />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="timer" element={<Timer />} />
          <Route path="blog" element={<Blog />} />

          {/* 1. 상품 목록 페이지 */}
          <Route path="ecommerce" element={<Ecommerce />} />
          
          {/* 2. 상품 상세 페이지 추가 (파라미터 :id 가 핵심!) */}
          <Route path="products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
