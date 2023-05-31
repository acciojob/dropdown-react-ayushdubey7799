import React from "react";



const SelectLandmark = (props) => {
    const { setLandmark, city } = props;

    const check = (x) => Object.keys(x).length != 0;

    const handleChange = e => {
        let x = city[0].landmarks.filter((city) => city.name == e.target.value);
        setLandmark(x);
    }
    return <div>
        <label htmlFor="landmark">Choose a landmark:</label>
        <select id="landmark" name="landmark" onChange={handleChange}>
            {check(city) &&
                city[0].landmarks.map((element, key) => {
                    return (
                        <option key={key} value={element.name} >{element.name}</option>
                    )
                })

            }
        </select>

    </div>
}

export default SelectLandmark;