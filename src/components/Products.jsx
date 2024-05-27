import { Card, Row, Col, Button } from 'react-bootstrap';

function Products({ products }) {
  return (
    <Row>
    {products.map(product => (
      <Col md={3} className='d-flex justify-content-center my-2' key={product._id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imageURL} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>₹{product.price}.00</Card.Text>
            <Card.Text>
              {[...new Array(product.rating)].map((rating, index) => (
                <span key={index}>⭐</span>
              ))}
            </Card.Text>
            <Button variant="warning" style={{ marginRight: '5px' }}>
              Add to cart
            </Button>
            <Button variant="success">Buy now</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
    </Row>
  );
}

export default Products;