import { Carousel, Image } from "react-bootstrap";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <Carousel
      touch={true}
      controls={true}
      fade={true}
      indicators={false}
      interval={5000}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <Image
              fluid
              src={image}
              alt={`Photo ${index + 1}`}
              className="photo-image rounded-5"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
