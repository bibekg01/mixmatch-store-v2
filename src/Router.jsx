import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductPages from './api/products'
import ProductDetails from './api/productDetails'
import ProductData from './admin/productData'
import SignUpPage from './Components/signUpPage'



const RouterComponent = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ProductPages/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/productdata' element={<ProductData />}></Route>
            <Route path='/signuppage' element={<SignUpPage />}></Route>
        </Routes>
    </Router>
  )
}

export default RouterComponent