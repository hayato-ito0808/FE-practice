import Confetti from 'react-confetti';

export default function Hantei({maxQuizLen, correctNumLen}) {
    let hantei;
    if(correctNumLen / maxQuizLen >= 0.6){
        hantei = true;
    } else {
        hantei = false;
    }
    return (
        <>
            <h1>{`${hantei ? "合格" : "不合格"}`}</h1>
            {hantei ? <Confetti/> : ""}
        </>
    )
}
