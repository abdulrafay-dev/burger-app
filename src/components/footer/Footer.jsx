import Container from 'react-bootstrap/Container';
import ItemButton from './ItemButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Footer(props) {
  return (
    <Container fluid className="bg-dark text-white p-1 pb-2">
      <Container fluid className="w-25">
        <Row>
          <Col>Current price: <strong>${(3.00+(props.lettuce*0.5)+(props.tomato*0.7)+(props.cheese*0.4)+(props.beef*1.3)+(props.onion*0.3)).toFixed(2)}</strong></Col>
        </Row>
        <ItemButton item="Lettuce" add={props.addLettuce} remove={props.removeLettuce} itemCount={props.lettuce} />
        <ItemButton item="Tomato" add={props.addTomato} remove={props.removeTomato} itemCount={props.tomato} />
        <ItemButton item="Onion" add={props.addOnion} remove={props.removeOnion} itemCount={props.onion} />
        <ItemButton item="Cheese" add={props.addCheese} remove={props.removeCheese} itemCount={props.cheese} />
        <ItemButton item="Beef" add={props.addBeef} remove={props.removeBeef} itemCount={props.beef} />
        <Row>
          <Col>
            <Button disabled={props.lettuce+props.tomato+props.onion+props.cheese+props.beef === 0}>SignUp To Order</Button>
          </Col>
        </Row>
      </Container>
    </Container>
   );
}

export default Footer;
