import {useState} from 'react'

const Form = ({giphySearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        giphySearch(searchTerm);
        setSearchTerm('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}



export default Form;
