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

    const log = function(key) {
        if (key === correctColor) {
            console.log('correct!')
        }
    }

    return (
        <div>
            <h1 style={{color: correctColor}}>{correctColor}</h1>
            <div>
            {shuffledColors.map((mappedColor) => {
                return (
                    <h1 key={mappedColor} onClick={() => log(mappedColor)} className="colorDiv" style={{backgroundColor: mappedColor}}>lol</h1>
                )
            })}
            </div>
        </div>
    )
}

export default RandomColor;