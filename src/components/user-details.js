import { useParams } from "react-router"

const UserDetails = () =>{

    const params = useParams()
    const userId = params.userId

    return(<>user {userId} Details Page</>)
}

export default UserDetails