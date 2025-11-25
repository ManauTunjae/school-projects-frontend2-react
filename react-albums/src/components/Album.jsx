export default function Album({ albumName, artist, songs }) {
  return (
    <div className="Album">
      <h3 className="Album-title">Album namn: {albumName}</h3>{" "}
      {/* Byt ut mot en variabel. */}
      <h3>Artist: {artist}</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
}
