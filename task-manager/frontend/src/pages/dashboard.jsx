import Content from "@/Components/content";
import Video from "../Components/Videos.jsx";
import image4 from "/src/assets/me.png";
import { CarouselDemo } from "../Components/carousel.jsx";


function Dashboard(){
    return(
      <main>
        {/* hero section */}
        <section className="flex justify-center relative z-10 overflow-hidden items-center">
          <div className="">
            <div>
              <h1 className="text-white text-7xl font-mono font-bold">
                MARCELINO
              </h1>
              <h2 className="text-white text-5xl font-">
                SUSANO
              </h2>
            </div>
          </div>
          <div>
            <img src={image4} alt="me" />
          </div>
          <div>
            <div>
              <h1 className="text-white text-7xl font-mono font-bold">
                WEB <span className="text-[#00fffb]">UI/UX</span>
              </h1>
              <h2 className="text-white text-6xl font-mono font-bold">
                DESIGNER
              </h2>
            </div>
          </div>
        </section>
          
        <section>

        </section>
      </main>
    
    );
}

export default Dashboard


{/* <div className="flex gap-5">
        <div className="flex w-1/3 scale-90 items-center justify-center gap-4">
            <CarouselDemo />
          <div>
            <Content />
           <Video />
          </div>
        </div> */}