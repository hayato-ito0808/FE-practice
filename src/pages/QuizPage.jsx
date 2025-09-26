import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "./const";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);

  //画面遷移をするときにstateという形でデータを受け渡すことができる
  const navigation = useNavigate();

  //問題数を格納
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      //...　スプレッド構文：用途は様々、今回はansworLogsの配列をすべて引っ張り出してそこにtrueを格納している
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    //引数prevには現在のquizIndexの値が入る ※引数名は任意
    setQuizIndex((prev) => prev + 1);
  };

  useEffect(() => {
    //useEffect関数：第二引数が更新されたときの処理を記述
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter((answer) => {
        return answer === true;
      });
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length //正解数 [true, true, true...]
        }
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

  return (
    <div>
      {quizData[quizIndex] && (
        <Display>
          {/* テンプレート文字列 */}
          {`問${quizIndex + 1}    ${quizData[quizIndex].question}`}
        </Display>
      )}
      {/* map((目的配列の値を格納、何番目の要素か?) => {}) */}
      {/* map()はkey属性を設定しなければならない
      　➡複数の要素が変更されるときにどの要素にアクセスしているのかわかりやすくするため
      */}
      {quizData[quizIndex] &&
        quizData[quizIndex].options.map((option, index) => {
          return (
            <Button onClick={() => handleClick(index)} key={`option-${index}`}>
              {option}
            </Button>
          );
        })}
    </div>
  );
}
