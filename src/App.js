import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import Products from './components/Products'
import AddNewProduct from './components/AddNewProduct'
import { Container } from'react-bootstrap';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:4000/products');
      setProducts(res.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <h1 className='display-1'>Welcome to EasyBuy</h1>
        <p className='lead'>Explore the wide range of products here and elevate your shopping experience 🚀</p>
        <Products products={products} setProducts={setProducts} />
        <AddNewProduct fetchProducts={fetchProducts} />
      </Container>
    </div>
  );
}

export default App;
