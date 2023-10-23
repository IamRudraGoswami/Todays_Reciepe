import { useCart } from '../context/addCart';
import { Menu } from 'semantic-ui-react';
import  logo  from './logo.jpg';
import { Link } from 'react-router-dom';
import { Badge} from 'antd';

const menuStyle = {
    fontWeight: 'bold', // Apply bold font-weight
    fontSize:'18px'
  };

const NavBar = () => {
    const [cart] = useCart();

    return (
        <Menu inverted borderless fixed="top" color="blue" > {/* Use the 'inverted' and 'color' props */}
            <Menu.Item>
            <img src={logo} alt="logo" style={{ objectFit: 'cover' }} />
            </Menu.Item>
           <Menu.Item style={menuStyle} name="Home" as={Link} to="/" /> 
           <Menu.Item style={menuStyle} name="Recipes" as={Link} to="/recipes" /> 
           <Badge count= {cart?.length} showZero className='badge'>
           <Menu.Item style={menuStyle}  as={Link} to="/favourite"  >
            Favourite 
             </Menu.Item> 
           </Badge>
        </Menu>
    )
}

export default NavBar;