function Thumbnail({ video }) {
  return <img src={video.thumbnail} alt={video.title} />;
}

export default Thumbnail;