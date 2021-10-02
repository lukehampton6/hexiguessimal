function RandomColor() {
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
        for (let i = 0; i < 5; i++) {
            const newColor = generateColor()
            colorArray.push(newColor);
        }
    }
    generateColorArray();

    //add correct choice to array then shuffle order
    colorArray.push(correctColor);
    const shuffledColors = colorArray.sort(() => Math.random() - 0.5);

    //check hex for clicked choice
    const click = function(playerGuess) {
        if (playerGuess === correctColor) {
            console.log('correct!')
        } else if (playerGuess !== correctColor) {
            console.log('wrong...')
        }
    }

    return (
        <div>
            <h1 className="hexcode" style={{color: correctColor}}>{correctColor}</h1>
            <div>
                <ul className="colorList">
            {shuffledColors.map((mappedColor) => {
                return (
                    <li key={mappedColor} className="colorDiv" onClick={() => click(mappedColor)}  style={{backgroundColor: mappedColor}}></li>
                )
            })}
            </ul>
            </div>
        </div>
    )
}

export default RandomColor;