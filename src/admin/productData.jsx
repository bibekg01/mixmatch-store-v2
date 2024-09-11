

  const Datalist = [
    {
      id:1,
      product_name: 'Dell 3644',
      slug: 'Laptop',
      product_description: 'This is one of the best Laptop',
      product_price: '178461',
      product_rating: 5,
      count_in_stock: 15,
      category: 'Laptop',
    },
    {
      id:2,
      product_name: 'Dell 1548',
      slug: 'Laptop',
      product_description: 'This is one of the best Laptop',
      product_price: '135488',
      product_rating: 4,
      count_in_stock: 21,
      category: 'Laptop',
    },
    {
      id:3,
      product_name: 'Asus 5684',
      slug: 'Laptop',
      product_description: 'This is one of the best Laptop',
      product_price: '135847',
      product_rating: 4.2,
      count_in_stock: 11,
      category: 'Laptop',
    },
    {
      id:4,
      product_name: 'Mac Air Mini 5',
      slug: 'Laptop',
      product_description: 'This is one of the best Laptop',
      product_price: '894584',
      product_rating: 5,
      count_in_stock: 14,
      category: 'Laptop',
    },
    {
      id:5,
      product_name: 'Predator core 5',
      slug: 'Laptop',
      product_description: 'This is one of the best Laptop',
      product_price: '465895',
      product_rating: 5,
      count_in_stock: 9,
      category: 'Laptop',
    },
  ]


const ProductData = () => {
  return (
    <div className="container ml-2">
        <h2 className="text-2xl text-center font-semibold py-5">Product Lists</h2>
        <table className="" width='900px'>
            <tr className="bg-[#6495ED]" >
              <th width='100px'>ID</th>
              <th width='100px'>Product Name</th>
              <th width='100px'>Slug</th>
              <th width='100px'>Category</th>
              <th width='100px'>Product Price</th>
              <th width='100px'>Product Rating</th>
              <th width='100px'>Stocks</th>
              <th width='300px'>Product Description</th>
            </tr>

              {Datalist.map((data)=>{
                return (
            <tr key={data.id} className="bg-[#F9F6EE]" align='center'>
                <td width='100px'><a href="#">{data.id}</a></td>
                <td width='100px'><a href="#">{data.product_name}</a></td>
                <td width='100px'><a href="#">{data.slug}</a></td>
                <td width='100px'><a href="#">{data.category}</a></td>
                <td width='100px'><a href="#">{data.product_price}</a></td>
                <td width='100px'><a href="#">{data.product_rating}</a></td>
                <td width='100px'><a href="#">{data.count_in_stock}</a></td>
                <td width='300px'><a href="#">{data.product_description}</a></td>
            </tr>
                );
              })}

        </table>

    </div>
  )
}

export default ProductData