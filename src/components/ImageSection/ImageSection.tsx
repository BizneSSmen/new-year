import { Row, Col, Container } from "react-bootstrap";
import { ImageCarousel } from "./ImageCarousel";

interface ImageSectionProps {
  titleText: string;
  mainText: JSX.Element;
  images: string[];
  reverse?: boolean;
}

export const ImageSection = ({
  titleText,
  mainText,
  images,
  reverse = false,
}: ImageSectionProps) => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>{titleText}</h1>
        </Col>
      </Row>
      <Row>
        {!reverse ? (
          <>
            <Col xs={12} md={8}>
              <ImageCarousel images={images} />
            </Col>
            <Col xs={12} md={4}>
              {mainText}
            </Col>
          </>
        ) : (
          <>
            <Col xs={12} md={4}>
              {mainText}
            </Col>
            <Col xs={12} md={8}>
              <ImageCarousel images={images} />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
