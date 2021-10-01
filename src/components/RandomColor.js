function RandomColor() {
    // const randomCode = Math.floor(Math.random()*16777215).toString(16);
    // const randomColor = "#" + randomCode;
    const generateColor = function() {
       let randomColor = '#'
       while (randomColor.length < 7) {
           randomColor += (Math.round(Math.random() * 15)).toString(16)
       }
       return randomColor;
    }

    return (
        <div style={{backgroundColor: generateColor()}}>
            <h1 style={{color: generateColor()}}>{generateColor()}</h1>
        </div>
    )
}

export default RandomColor;