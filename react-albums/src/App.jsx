import "./App.css";
import AlbumList from "./components/AlbumList";
function App() {
  const myAlbums = [
    {
      albumName: "Abbey Road",
      artist: "The Beatles",
      songs: [
        "Come Together",
        "Something",
        "Here Comes the Sun",
        "Golden Slumbers",
      ],
    },
    {
      albumName: "Thriller",
      artist: "Michael Jackson",
      songs: [
        "Wanna Be Startin' Somethin'",
        "Thriller",
        "Beat It",
        "Billie Jean",
      ],
    },
    {
      albumName: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      songs: ["Speak to Me", "Time", "Money", "Us and Them"],
    },
  ];

  return (
    <div className="App">
      <h1>My albums</h1>
      {myAlbums.map((album) => (
        <AlbumList album={album} />
      ))}
    </div>
  );
}

export default App;
