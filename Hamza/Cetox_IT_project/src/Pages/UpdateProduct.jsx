import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [data, setData] = useState({
    productName: '',
    price: '',
    description: '',
    sku: {
      id: '',
      size: '',
      color: '',
      quantity: ''
    },
    shopName: '',
    shopImage: '',
    shopOwner: ''
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://github-react-task.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in data.sku) {
      setData((prevState) => ({
        ...prevState,
        sku: {
          ...prevState.sku,
          [name]: value,
        },
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleUpdateData = (e) => {
    e.preventDefault();

    const product = {
      productName: data.productName,
      price: data.price,
      description: data.description,
      sku: {
        id: data.sku.id,
        size: data.sku.size,
        color: data.sku.color,
        quantity: data.sku.quantity,
      },
      shopName: data.shopName,
      shopImage: data.shopImage,
      shopOwner: data.shopOwner,
    };

fetch(`https://github-react-task.vercel.app/products/${id}`,{
    method:"PATCH",
    headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(product)
})
.then(res=>{
    if(res.status===200){
        alert("Product Updated Successfully")
        e.target.reset()
    }
})


  };

  return (
    <div className="flex justify-center items-center p-5 my-5">
      <div className="space-y-3 bg-amber-100 rounded-lg lg:w-1/2 p-5 items-center">
        <form onSubmit={handleUpdateData}>
          <h1 className="text-center font-semibold text-4xl">Update Your Product Details</h1>
          <div>
            <label className="font-semibold">Product Name:</label>
            <input
              className="w-full px-5 py-2"
              type="text"
              name="productName"
              placeholder="Product Name"
              required
              value={data.productName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-semibold">Product Price:</label>
            <input
              className="w-full px-5 py-2"
              type="number"
              name="price"
              placeholder="Product Price"
              required
              value={data.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-semibold">Product Description:</label>
            <textarea
              className="w-full px-5 py-2"
              name="description"
              placeholder="Product Description"
              required
              value={data.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="gap-2 mt-3 flex justify-between">
            <input
              className="py-2 px-2"
              placeholder="Product Id"
              name="id"
              type="text"
              required
              value={data.sku.id}
              onChange={handleInputChange}
            />
            <input
              className="py-2 px-2"
              placeholder="Product Size"
              name="size"
              type="text"
              required
              value={data.sku.size}
              onChange={handleInputChange}
            />
            <input
              className="py-2 px-2"
              placeholder="Product Color"
              name="color"
              type="text"
              required
              value={data.sku.color}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-semibold">Product Quantity:</label>
            <input
              className="w-full px-5 py-2"
              type="number"
              name="quantity"
              placeholder="Product Quantity"
              required
              value={data.sku.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-semibold">Shop Name:</label>
            <input
              className="w-full px-5 py-2"
              type="text"
              name="shopName"
              placeholder="Shop Name"
              required
              value={data.shopName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-semibold">Shop Image:</label>
            <input
              className="w-full px-5 py-2"
              type="text"
              name="shopImage"
              placeholder="Shop Image URL"
              required
              value={data.shopImage}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-semibold">Shop Owner:</label>
            <input
              className="w-full px-5 py-2"
              type="text"
              name="shopOwner"
              placeholder="Shop Owner"
              required
              value={data.shopOwner}
              onChange={handleInputChange}
            />
          </div>
          <button className="w-full py-2 mt-3 rounded-lg bg-green-600 text-white font-semibold" type="submit">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
