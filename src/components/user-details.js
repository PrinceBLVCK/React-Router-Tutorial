import { useParams } from "react-router"

const UserDetails = () =>{

    const params = useParams()
    const userId = params.userId

    return(<p>user {userId} Details Page</p>)
}

export default UserDetails