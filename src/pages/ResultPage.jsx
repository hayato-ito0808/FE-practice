import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "./const";
import Result from "../components/Result/Result";
import Loding from "../components/Loding/Loding";
import { useEffect, useState } from "react";
import Hantei from "../components/Hantei/Hantei";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  useEffect(() => {
    
    setTimeout(() => {setActive(true)}, 3000)
  }, [])

  return (
    <>
      <Loding active={active}/>
      <Hantei maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}/>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}/>
      <Link to={ROUTES.HOME}>もう一度チャレンジ</Link>
    </>
  )
}
