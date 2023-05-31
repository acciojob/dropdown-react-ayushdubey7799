import React from "react";



const SelectCity = (props) => {
    const { setCity, setLandmark, state } = props;
    const handleChange = e => {
        let x = state[0].city.filter((city) => city.name == e.target.value);
        setCity(x);
        setLandmark({});
    }
    return <div>
        <label htmlFor="city">Choose a city:</label>
        <select id="city" name="city" onChange={handleChange}>
            {
                state[0].city.map((element, key) => {
                    return (
                        <option key={key} value={element.name} >{element.name}</option>
                    )
                })

            }
        </select>

    </div>
}

export default SelectCity;