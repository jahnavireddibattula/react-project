import { Link } from "react-router-dom"
export default function ShopperInvalid(){
    return(
        <div className="text-danger">
            <h3> Invalid User Name / Password</h3>
            <div>
                <Link to="/login">Try Again</Link>
            </div>
        </div>
    )
}