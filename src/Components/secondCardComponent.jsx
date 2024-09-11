import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"


const CardComponent = ({ id,title, image, price, }) => {
  const navigate = useNavigate();
  console.log(id);

  return (
    <>
      <div className="">
        <div>
          <div
            key={""}
            className=" shadow-xl pb-4 hover:shadow-2xl rounded-lg overflow-hidden bg-slate-50"
          >
            <div className="grid justify-center">
              <img
                src={image}
                alt={title}
                className="size-[200px] sm:size-[300px]  p-2"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{title}</h2>
              <p className="text-lg font-bold">${price}</p>
            </div>
            <div className="flex justify-evenly">
              <button onClick={()=>navigate(`/products/${id}`)} className="border p-2 px-3 bg-[#f50b12] rounded-br-3xl rounded-tl-3xl text-white font-bold">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.number,
  count: PropTypes.number,
  description: PropTypes.string,
};

export default CardComponent;
