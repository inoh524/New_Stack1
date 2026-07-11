import Content from "@/Components/content";
import Video from "../Components/videos.jsx";
import { CarouselDemo } from "../Components/carousel.jsx";


function Landing_page(){
    return(
      <div className="flex items-center justify-center gap-4">
        <div>
          <CarouselDemo />
        </div>
        <div>
          <Content/>
          <Video />
        </div>
      </div>
    );
}

export default Landing_page