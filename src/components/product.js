import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
function Product(props) {
  const { product } = props;
  return (
    <Card >
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>

      <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <p>
            {" "}
            <strong>${product.price}</strong>
          </p>
        </Link>
      
      </div>
    </Card>
  );
}
export default Product;
