const GiphyDisplay = ({giphy}) => {
    const loaded = () => {
        return (
            <div>
                <img src={giphy.images.original.url} alt={giphy.title} />
            </div>
        )
    }

    const loading = () => {
        return <h1></h1>
    }
  
    return giphy ? loaded() : loading();
};

export default GiphyDisplay;
