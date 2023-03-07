import {Route,Routes} from "react-router-dom"
import Body from "./Body"
import Product from "./Product"
import AllProduct from "./AllProducts"
import LoginHome from "../loginComponent/LoginHome"
import Login from "../loginComponent/Login"
import Signup from "../loginComponent/Signup"
import PhoneSignUp from "../loginComponent/PhoneSignUp"
import ProtectedRoute from "./ProtectedRoute"
function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Body/>}></Route>
            <Route path="/makeup" element={<Product/>}></Route>
            <Route path="/product" element={<AllProduct/>}></Route>
            <Route path="/login_page" element={<ProtectedRoute><LoginHome/></ProtectedRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/PhoneSignUp" element={<PhoneSignUp/>}></Route>
        </Routes>
    )
}
export default AllRoutes;