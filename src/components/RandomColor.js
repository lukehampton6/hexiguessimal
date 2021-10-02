import {useState} from 'react'

function RandomColor({mappedColor, correctColor}) {
    const [show, setShow] = useState(false);

    //check hex for clicked choice
    const click = function(playerGuess) {
        if (playerGuess === correctColor) {
            console.log('correct!')
        } else if (playerGuess !== correctColor) {
            setShow(true)
            console.log('wrong...')
        }
    }

    return (
        <li className={show ? 'hidden colorDiv' : 'colorDiv'} onClick={() => click(mappedColor)}  style={{backgroundColor: mappedColor}}></li>
    )
}

export default RandomColor;