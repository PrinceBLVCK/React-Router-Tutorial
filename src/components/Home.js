import { useNavigate } from "react-router"


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="homeDiv">
            <h1>Home Page</h1>

            <button onClick={ () => navigate('/order-summary')}>Place Order</button>
        </div>
    )
}

export default Home