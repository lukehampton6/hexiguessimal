import {useState} from 'react'
import { useDispatch } from "react-redux";
import { UPDATE_GUESS, UPDATE_ANSWER } from '../utils/actions';

function RandomColor({mappedColor, correctColor}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    //check hex for clicked choice
    const click = function(playerGuess) {
        if (playerGuess === correctColor) {
            dispatch({
                type: UPDATE_GUESS,
                guessValue: "correct"
            });
            dispatch({
                type: UPDATE_ANSWER,
                answerValue: "correct"
            });
        } else if (playerGuess !== correctColor) {
            setShow(true);
            dispatch({
                type: UPDATE_ANSWER,
                answerValue: "incorrect"
            });
        }
    }

    return (
        <li className={show ? 'hidden colorDiv' : 'colorDiv'} onClick={() => click(mappedColor)}  style={{backgroundColor: mappedColor}}></li>
    )
}

export default RandomColor;