import toast from 'react-hot-toast'
import { useCart } from './context/addCart';
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const RecipeListItem = ({ recipe }) => {
    const[cart, setCart] = useCart()

    return (
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
                   onClick={()=> {setCart([...cart,recipe])
                    localStorage.setItem('cart', JSON.stringify([...cart, recipe]))
                toast.success('Item Added to cart')}
                }
                    className='button'
                    target="_blank"
                    content="Favourite"
                    color="green"
                    size="tiny"
                />
            </Card.Content>
        </Card>
    )
}

export default RecipeListItem;