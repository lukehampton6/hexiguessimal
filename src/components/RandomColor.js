function RandomColor() {
    const generateColor = function() {
       let randomColor = '#'
       while (randomColor.length < 7) {
           randomColor += (Math.round(Math.random() * 15)).toString(16)
       }
       return randomColor;
    }

    const correctColor = generateColor();
    const colorArray = [];

    const generateColorArray = function() {
        for (let i = 0; i < 5; i++) {
            const newColor = generateColor()
            colorArray.push(newColor);
        }
    }
    generateColorArray();
    colorArray.push(correctColor);
    const shuffledColors = colorArray.sort(() => Math.random() - 0.5);

    return (
        <div>
            <h1 style={{color: correctColor}}>{correctColor}</h1>
            <div>
            {shuffledColors.map((mappedColor) => {
                console.log(mappedColor)
                return (
                    <h1 key={mappedColor} style={{color: mappedColor}}>lol</h1>
                )
            })}
            </div>
        </div>
    )
}

export default RandomColor;