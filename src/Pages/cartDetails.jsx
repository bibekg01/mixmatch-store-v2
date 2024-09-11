import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

 const CartDetails = () => {

    const {id} = useParams(id);
    const [product, setProduct] = useState({})

    useEffect(()=> {
        fetch('')
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error Fetching Data', error))
    }, [id])

    return(
        <>
        <div>
            <div>
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartDetails;