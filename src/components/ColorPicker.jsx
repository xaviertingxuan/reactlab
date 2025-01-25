import React, {useState} from 'react'

export const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

  return (
    <div className='color-picker-container'>
            <h1>ColorPicker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
                <label>Select a Color:</label>
                <input type='color' value={color} onChange={(e) => setColor(e.target.value)}></input>

            
    </div>
  )
}
