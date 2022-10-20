import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage"
import { Shopping } from "../pages/Shopping/Shopping"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/shopping'} element={<Shopping/>}/>
      </Routes>
    </BrowserRouter>
  );
};
