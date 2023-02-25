import { 
    Link,
    Outlet
} from "react-router-dom"
import { valid } from "semver"

const Products = () => {
    const Styles = {
        navLink: {
            margin:10, 
            color:'black' , 
            
        }
        
    }
    return(
        <div className="mainDiv">

            <div style={{marginTop:10, marginBottom:10}}>
                <input type='search' placeholder="Search Products" />
            </div>

            <nav style={{marginBottom:10}}>
                <Link style={Styles.navLink} to='featured'>featured</Link>
                <Link style={Styles.navLink} to='new' >New</Link>
            </nav>
            <Outlet />

        </div>
    )

}

export default Products