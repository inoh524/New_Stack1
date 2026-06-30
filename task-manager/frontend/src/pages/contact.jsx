import image1 from "../assets/meme.jpg";
import image2 from "../assets/meme1.jpg";
import image3 from "../assets/meme2.jpg";

export default function Contact(){
    const contact_image=[image1, image2, image3];

    return(
        <div>
            <Gallery />
        </div>
    );

    function Gallery(){
        return(
            <div className="grid grid-cols-3">
                {contact_image.map((image, index)=>(
                    <img key={index} src={contact_image} alt="image" />
                ))}
            </div>
        );
      }
}
