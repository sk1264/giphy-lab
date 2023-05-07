import { useState } from "react";
import Giphy from "./Giphy";

function Giphies ({ giphies, setGiphies }) {
    const [giphyForm, setGiphyForm] = useState({
        giphy: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setGiphyForm((previousFormState) => ({
            ...previousFormState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setGiphies([giphyForm]);
        setGiphyForm({ giphy: "" });
    }

    return (
            <div><h1>Giphy</h1>
                <form onSubmit={handleSubmit}>
                <label>
                    <span></span>
                    <input
                        type="text"
                        name="giphy"
                        value={giphyForm.giphy}
                        onChange={handleChange} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {giphies.map((giphy, index) => {
                return(
                    <div key={index}>
                        <Giphy giphy={giphy} />
                    </div>
                )
            })}
        </div>
    )
}

export default Giphies;
