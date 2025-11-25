import FavoriteSongs from './FavoriteSongs'

const Main = () => {

    let myFavoriteSongs = ['Born to Die', 'Romantic Homicide', 'Young and Beautiful', 'Celling', 'Each Time You Fall in Love'];

    return (
        <div>
            <strong><h3>My favorite songs</h3></strong>
            {myFavoriteSongs.map((song) => <FavoriteSongs song={song}/>)}
        </div>
    )
}
export default Main;