import {Card, Button, Container, Col, Row} from 'react-bootstrap'
import books from'../data/fantasy.json'

const SingleBookComponent =()=>{
    return(
      <Container>
        <Row>
          {books.map((book) => (
            <Col xs={12} md={4} lg={3} key={book.asin}>
              <Card key={book.asin}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">{book.category}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    )
      
}

export default SingleBookComponent