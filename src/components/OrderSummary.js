import { useNavigate } from "react-router"

const OrderSummary = () => {
    const navigate = useNavigate()
    return(
        <div className="orderDiv">
            <h1>Order Summary</h1>

            <button onClick={() => navigate(-1, {replace: true})}>Close Summary</button>
        </div>
    )

}

export default OrderSummary