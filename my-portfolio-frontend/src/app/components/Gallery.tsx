import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css"; // Import your CSS file for styling

const Gallery: React.FC = () => {
  // const images = [
  //   "/images/IMG-20250428-WA0004.jpg",
  //   "/images/IMG-20250428-WA0005.jpg",
  //   "/images/IMG-20250428-WA0007.jpg",
  // ];
  return (
    <section className="gallery-background">
      <div className="container text-center mt-4">
        <h1 className="mb-4">Dhikrullah Abdullah Ademola</h1>
        <h3 className="mb-5">Software Engineer | Technical Farm Manager</h3>
        {/* <div className="row">
          {images.map((image, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="image-wrapper">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
export default Gallery;
//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Gallery</h2>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img src="/portfolio/my-portfolio-frontend/public/images/IMG-20250428-WA0004.jpg" alt="Gallery Image 1" className="img-fluid" />
//         </div>
//         <div className="col-md-4 mb-4">
//           <img src="/portfolio/my-portfolio-frontend/public/images/IMG-20250428-WA0005.jpg" alt="Gallery Image 2" className="img-fluid" />
//         </div>
//         <div className="col-md-4 mb-4">
//           <img src="/portfolio/my-portfolio-frontend/public/images/IMG-20250428-WA0007.jpg" alt="Gallery Image 3" className="img-fluid" />
//         </div>
//       </div>
//     </div>
//   );
// }
