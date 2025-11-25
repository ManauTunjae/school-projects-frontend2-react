const FavoriteSongs = ({song}) => {
    return (
        <div className='favoriteSongs'>
            <ul>
                <li>{song}</li>
            </ul>
        </div>
    );
};
export default FavoriteSongs;