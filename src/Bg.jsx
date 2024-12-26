import React from 'react'

const Bg = () => {

    const redChange = () => {
        document.body.style.backgroundColor = "red"
    }
    const yellowChange = () => {
        document.body.style.backgroundColor = "yellow"
    }
    const greenChange = () => {
        document.body.style.backgroundColor = "green"
    }
    const pinkChange = () => {
        document.body.style.backgroundColor = "pink"
    }
    const violetChange = () => {
        document.body.style.backgroundColor = "violet"
    }
    return (
        <div className='container'>
            <div className="colors">
                <button onClick={redChange} style={{ backgroundColor: 'red' }} className='btn'></button>
                <button onClick={yellowChange} style={{ backgroundColor: 'yellow' }} className='btn'></button>
                <button onClick={greenChange} style={{ backgroundColor: 'green' }} className='btn'></button>
                <button onClick={pinkChange} style={{ backgroundColor: 'pink' }} className='btn'></button>
                <button onClick={violetChange} style={{ backgroundColor: 'violet' }} className='btn'></button>
            </div>
        </div>
    )
}

export default Bg 