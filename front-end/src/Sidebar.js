//import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css'

const Sidebar = props=>{
    return(
        <Menu>
            <a className='menu-item' href="/">
                Home
            </a>
            <a className='menu-item' href="/ProductListing">
                Music
            </a>
            <a className='menu-item' href="/ProductListing">
                Dance
            </a>
            <a className='menu-item' href="/ProductListing">
                Arts & Craft
            </a>
            <a className='menu-item' href="/ProductListing">
                Market
            </a>  
        </Menu>
        
    )

}
export default Sidebar;