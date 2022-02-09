import { InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import books from '../data/fantasy.json'

const FilterBookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Book Name"
        onChange={(e) => {
            setSearchTerm(e.target.value)
        }}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2"></InputGroup.Text>
    </InputGroup>

    {books.filter((value) => {
        if (searchTerm ==""){
            return value
        } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value
        }
    })}.map((value, key) => {
        return(
            <Col xs={12} md={4} lg={3} key={book.asin}>
            <Card key={book.asin}>
              <Card.Img variant="top" src={value.img} />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.price}</Card.Text>
                <Button variant="primary">{value.category}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
    )}

export default FilterBookList;