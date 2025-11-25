import Album from "./Album";

export default function AlbumList({ album }) {
  return (
    <div>
      <h3>Album List</h3>
      <Album
        albumName={album.albumName}
        artist={album.artist}
        songs={album.songs}
      />
    </div>
  );
};
