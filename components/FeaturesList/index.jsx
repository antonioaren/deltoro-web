import { Col, Container, Row, Button } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import FeatureCard from "./FeatureCard";
import FeaturesData from "../../components/FeaturesList/featuresData";


const FeaturesList = () => {

  const features = FeaturesData

  return (
    <Container>
      {features.map((entry, index) => {
        return (
              <FeatureCard
                header={entry.header}
                content={entry.content}
                footer={entry.footer}
                imgSrc={entry.imgSrc}
                invertCols={index % 2 === 0 ? true : false}
              ></FeatureCard>
        );
      })}
    </Container>
  );
};

export default FeaturesList;
