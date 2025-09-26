import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./pages/const";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    //画面遷移を司る
    <BrowserRouter basename="/FE-practice">
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
