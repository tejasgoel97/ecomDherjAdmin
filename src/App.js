import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'

import Navbar from "./components/Navbar"
import AddCategoryScreen from './screens/AddCategoryScreen';
import AddProductScreen from './screens/AddProductScreen';
import EditProductScreen from './screens/EditProductScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';



const App =()=>{

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path="/" element={<HomeScreen/>}/>
          <Route path="signup" element={<SignUpScreen/>}/>
          <Route path="login" index element={<LoginScreen/>}/>
          <Route path="AddNewProduct" element={<AddProductScreen/>}/>
          <Route path="AddNewCategory" element={<AddCategoryScreen/>}/>
          <Route path="EditProduct" element={<EditProductScreen/>}>
            <Route path=":productId" element={<EditProductScreen/>}/>
          </Route>

           
          

        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App;