import { Link, Routes } from "react-router-dom";
import { ROUTES } from "./const";


export default function HomePage() {
  return (
    <>
        <h1>小テスト</h1>
        <Link to={ROUTES.QUIZ}>Start</Link>
    </>
  )
}