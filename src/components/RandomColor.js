function RandomColor() {
    const randomCode = Math.floor(Math.random()*16777215).toString(16);
    const randomColor = "#" + randomCode;

    return (
        <div>
            <h1 style={{color: randomColor}}>{randomColor}</h1>
        </div>
    )
}

export default RandomColor;