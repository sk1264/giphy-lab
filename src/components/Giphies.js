import { useState } from "react";

function Giphies () {
    const [giphies, setGiphies] = useState([{
        giphy: "happy"
    }]);
    const [giphyForm, setGiphyForm] = useState(
        {
            giphy: ""
        }
    )

        function handleChange(e) {
            console.log(e.target)
            setGiphyForm((previousFormState) => ({
                ...previousFormState,
                [e.target.giphy]: e.target.value
            }))
        }

    return (
        <>
            <h2></h2>
            {giphies.map((giphy, index) => {
                return(
                    <div key={index}>
                        {/* <h2>Giphy: {giphy.giphy}</h2> */}
                    </div>
                )
            })}
            <form>
                <label>
                    <span></span>
                    <input
                        placeholder="type of giphy"
                        giphy="giphy"
                        onChange={handleChange} 
                    />
                </label>

            </form>
        </>
    )
}

export default Giphies;
