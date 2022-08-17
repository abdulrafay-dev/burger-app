import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ItemButton(props) {
  return (
    <>
      <Row className="p-2">
        <Col>
          {props.item}
        </Col>
        <Col>
          <Button onClick={props.remove} disabled={props.itemCount===0}>Less</Button>
        </Col>
        <Col>
          <Button onClick={props.add}>More</Button>
        </Col>
      </Row>
    </>
   );
}

export default ItemButton;
