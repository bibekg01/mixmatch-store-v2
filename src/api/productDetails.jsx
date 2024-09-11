import { useState, useEffect } from "react";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import { useDispatch } from "react-redux";
import { addToCart, addToCartCount } from "../services/cartSlice";
import PropsTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import CardComponent from "../Components/secondCardComponent";

//dropdown menu
const sizeOptions = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const colorOptions = ["white", "black", "red", "blue"];

const defaultOption1 = sizeOptions[null];
const defaultOption2 = colorOptions[null];

const ProductDetails = ({ title, price, image }) => {
  const [product, setProduct] = useState([]);
  const notify = () =>
    toast.success("Product added to Cart !!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState([false]);
  const [allProducts, setAllProducts] = useState([]);
  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      alert("Error Occured");
    } finally {
      setLoading(false);
    }
  };
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products?limit=5");
      setAllProducts(response.data);
    } catch (error) {
      alert("Error Occured");
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <>
      <div className="max-w-[1640px] mx-auto ">
        <Header />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <BarLoader color="green" loading={loading} size={10} />
          </div>
        ) : (
          <div>
            <div className="max-w-[1640px] mx-auto px-4  grid justify-center">
              <div className="md:flex grid justify-center items-center gap-4 lg:gap-12 py-8">
                <div className="">
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-xl w-[250px] md:w-[400px]"
                  />
                </div>
                <div className="grid gap-1 md:gap-6">
                  <div>
                    <h1 className="font-bold text-md md:text-2xl">
                      {product.title}
                    </h1>
                    <p className="md:text-xl">{product.category}</p>
                    <p className="md:text-xl">${product.price}</p>
                  </div>
                  {/* Size  */}
                  <Dropdown
                    options={sizeOptions}
                    onChange={this}
                    value={defaultOption1}
                    placeholder="Select Size"
                    className="max-w-[250px] font-semibold"
                  />

                  {/* Color  */}
                  <Dropdown
                    options={colorOptions}
                    onChange={this}
                    value={defaultOption2}
                    placeholder="Select Color"
                    className="max-w-[250px] font-semibold"
                  />

                  {/* Quantity  */}

                  <div className="md:text-xl md:gap-3 md:flex">
                    <h1>Quantity</h1>
                    <div className="border-2 font-semibold">
                      <button className=" p-1 text-xl">-</button>
                      <span className=" px-3 py-1">0</span>
                      <button className=" p-1 text-xl">+</button>
                    </div>
                  </div>

                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />

                  {/* button content */}
                  <div className="grid gap-3">
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({ id, title, price, image, quantity: 1 })
                        );
                        dispatch(addToCartCount());
                        notify();
                      }}
                      className="border py-2 text-md font-semibold"
                    >
                      Add To Cart
                    </button>
                    <button className="border py-2 text-md font-semibold bg-red-600 text-white">
                      Buy Now
                    </button>
                  </div>

                </div>
              </div>
              <div className="mb-10">
                <h1 className="font-semibold text-xl">Product Description</h1>
                <p className="text-xl ">{product.description}</p>
              </div>
            </div>

            {/* Suggestion Products  */}

            <div className="max-w-[1640px] mx-auto px-4 relative mb-5">
              <h1 className="font-semibold text-xl py-4">Suggested Products</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 overflow-hidden">
                {allProducts.map((product) => (
                  <CardComponent
                    id={product.id}
                    key={product.id}
                    title={`${product.title.substring(0, 20)}`}
                    description={`${product.description.substring(0, 100)} ...`}
                    category={product.category}
                    price={product.price}
                    rating={product.rating.rate}
                    count={product.rating.count}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
ProductDetails.propTypes = {
  title: PropsTypes.string,
  price: PropsTypes.string,
  image: PropsTypes.string,
};

export default ProductDetails;
