import { useNavigate } from "react-router"


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="mainDiv homeDiv">
            <h1>Home Page</h1>

            <button data-testid='orderBtn' onClick={ () => navigate('/order-summary')}>Place Order</button>
        </div>
    )
}

export default Home