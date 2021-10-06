import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_GUESS } from '../utils/actions';
import RandomColor from "./RandomColor";

function GenerateColors() {  
    const guessValue = useSelector((state) => state.guessValue);
    const [mode, setMode] = useState(2);
    const dispatch = useDispatch();

    //rerender page if guess was correct
    if (guessValue === "correct") {
        dispatch({
            type: UPDATE_GUESS,
            guessValue: "none"
        });
    };
    
    // generate random hexcode
    const generateColor = function() {
       let randomColor = '#'
       while (randomColor.length < 7) {
           randomColor += (Math.round(Math.random() * 15)).toString(16)
       }
       return randomColor;
    }

    //store one hexcode for correct choice and create empty array for other hexcodes
    const correctColor = generateColor();
    const colorArray = [];

    //create multiple hexcodes for wrong answers and push to array
    const generateColorArray = function() {
        for (let i = 0; i < mode; i++) {
            const newColor = generateColor()
            colorArray.push(newColor);
        }
    }
    generateColorArray();

    //add correct choice to array then shuffle order
    colorArray.push(correctColor);
    const shuffledColors = colorArray.sort(() => Math.random() - 0.5);   

    const difficultySelect = function(num) {
        setMode(num);
    };

    return (
        <div>
            <h1 className="header">HEXIGUESSIMAL</h1>
            <ul className="modeList">
                <li className="mode" onClick={() => difficultySelect(2)}>easy</li>
                <li className="mode" onClick={() => difficultySelect(5)}>medium</li>
                <li className="mode" onClick={() => difficultySelect(8)}>hard</li>
            </ul>
            <h1 className="hexcode" style={{color: correctColor}}>{correctColor}</h1>
            <div>
                <ul className="colorList">
            {shuffledColors.map((mappedColor) => {
                return (
                    <RandomColor key={mappedColor}
                    mappedColor={mappedColor}
                    correctColor={correctColor}
                    />
                )
            })}
            </ul>
            </div>
        </div>
    )
}

export default GenerateColors;