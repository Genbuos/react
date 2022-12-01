import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Store } from "../Store";
import {useContext} from 'react';
import axios from "axios";
function Product(props) {
  const { product } = props;
  const {state, dispatch: ctxDispatch} = useContext(Store);
    const  {cart} = state;
    const addToCartHandler = async() =>{ 
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if(data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return;
        }
      ctxDispatch({type:'CART_ADD_ITEM', payload: {...product, quantity: 1}
    });

    };
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
        <Button onClick={addToCartHandler}>Add to cart</Button>
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
