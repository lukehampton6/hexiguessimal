import { useSelector } from "react-redux";

function Answer() {
    const answerValue = useSelector((state) => state.answerValue);

    return (
        <div>
            {answerValue == "correct" &&
            <h1 className="header correct">Correct!</h1>
            }
            {answerValue == "incorrect" &&
            <h1 className="header incorrect">Incorrect...</h1>
            }
        </div>
    )
}

export default Answer;