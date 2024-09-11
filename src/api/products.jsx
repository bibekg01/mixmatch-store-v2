import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Adimages from '../Components/adimage';
import CardComponent from '../Components/cardComponent';
import { useContext } from 'react';
import ThemeContext from '../themeContext';
import Cart from '../Pages/Cart';

const ProductPages = () => {
    const { theme } = useContext(ThemeContext)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([false]);
    const fetchProduct = async () => {
      setLoading(true);
        try {
          const response  = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (error) {
          alert('Error occurred')
        } finally{
          setLoading(false)
        }

      };
    useEffect(()=>{
        fetchProduct();
    },[]);

  return (
    <div className={`${theme == 'light' ? 'bg-[#ebf2fa]': 'bg-black'}`}>
    <Header 
    />
    <Adimages/>
    {loading ? (
      <div className='flex justify-center items-center h-screen'>
        <BarLoader color='green' loading={loading} size={10}/>
      </div>
    ) : (
    <div className="container max-w-[1640px] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <CardComponent 
          id={product.id}
          key={product.id}
          title={`${product.title.substring(0,30)}`}
          description={`${product.description.substring(0,100)} ...`}
          category={product.category}
          price={product.price}
          rating={product.rating.rate}
          count={product.rating.count}
          image={product.image}
          />
        ))}
      </div>
    </div>
    )}
    <Footer />
    <Cart/>
    </div>
  )
}

export default ProductPages;