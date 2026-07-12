import Thumbnail from "./Thumbnail";
import LikeButton from "./like_button.jsx";

function Video() {
  const video = {
  title: "React Tutorial",
  description: "Learn React with Vite and Tailwind CSS",
  url: "https://react.dev",
  thumbnail: "https://via.placeholder.com/300x180"
  };

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-gray-100 max-w-3xl h-32">
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton />
    </div>
  );
}

export default Video;