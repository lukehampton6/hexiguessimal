function RandomColor() {
    const generateColor = function() {
       let randomColor = '#'
       while (randomColor.length < 7) {
           randomColor += (Math.round(Math.random() * 15)).toString(16)
       }
       return randomColor;
    }

    const hex = generateColor();
    const colorDivs = [];

    const generateColorDivs = function() {
        for (let i = 0; i < 5; i++) {
            const newColor = generateColor()
            colorDivs.push(newColor);
        }
    }
    generateColorDivs();

    return (
        <div>
            <h1 style={{color: hex}}>{hex}</h1>
            <div>
            {colorDivs.map((mappedColor) => {
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