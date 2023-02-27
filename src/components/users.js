import { Outlet } from "react-router"
import { Link, useSearchParams } from "react-router-dom"

const Users = () =>{

    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'

    return(
        <>
            <h2> List of Users</h2>
            <h3><Link to='1'>User 1</Link></h3>
            <h3><Link to='2'>User 2</Link></h3>
            <h3><Link to='3'>User 3</Link></h3>
            <h3><Link to='admin'>Admin</Link></h3>
            <Outlet />

            <div>
                <button data-testid='activeBtn' onClick={() => setSearchParams({filter: 'active'})}>Active Users</button> 
                <button data-testid='restBtn' onClick={() => setSearchParams({})}>Reset Filter</button>

                {showActiveUsers ? ( <h5>showing Active Users</h5> ) : ( <h5>showing All Users</h5> )}


            </div>


        </>
    )
}

export default Users