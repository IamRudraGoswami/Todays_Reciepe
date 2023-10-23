import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useCart } from '../components/context/addCart';



const CartPage = (recipe) => {
    const [cart,setCart] = useCart();
    const removeCartItem = (pid) => {
        try{
            let myCart = [...cart];
            let index =  myCart.findIndex(recipe => recipe.recipe_id === pid)
            myCart.splice(index, 1)
            setCart(myCart);
        }catch(error){
            console.log(error);
        }
    }

  return (
   <div className="fav_container">
    <div className="cartContainer">
        <h2 className='search-heading'>{ cart?.length > 1 ? `You Have ${cart.length} items in your cart `:' Sorry! No Dishes  Available' } </h2>
    </div>
   
        {cart?.map((recipe) => (
<div className="check">
    
<Card className='card'>
            <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} />
            <Card.Content>
                <Card.Header content={recipe.title} />
                <Card.Description>
                    <h4>{recipe.publisher}</h4>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button 
                    as={Link}
                    to={`/recipes/${recipe.recipe_id}`}
                    content="Details"
                    className='button'
                    color="blue"
                    size="tiny"
                />
                <Button 
                   onClick={()=> {removeCartItem(recipe.recipe_id)                }
                }
                    className='button'
                    target="_blank"
                    content="Remove"
                    color="red"
                    size="tiny"
                />
            </Card.Content>
        </Card>
</div>
        ))}
  
  </div>
  )
}

export default CartPage