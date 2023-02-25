import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const Users = () =>{
    return(
        <>
            <h2> List of Users</h2>
            <h3><Link to='1'>User 1</Link></h3>
            <h3><Link to='2'>User 2</Link></h3>
            <h3><Link to='3'>User 3</Link></h3>
            <h3><Link to='admin'>Admin</Link></h3>
            
            <Outlet />
        </>
    )
}

export default Users