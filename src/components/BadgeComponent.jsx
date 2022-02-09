import { Badge } from "react-bootstrap";

const BadgeComponent = (prop) => {
  return (
    <div>
        <Badge style={{ backgroundColor: prop.bgSecondary }} >Badge</Badge>
    </div>
  );
};

export default BadgeComponent;
