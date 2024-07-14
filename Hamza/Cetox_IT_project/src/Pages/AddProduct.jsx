import React from 'react';

const AddProduct = () => {
  const handleAddProductIntoDB = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const product = {
      productName: form.name.value,
      price: form.price.value,
      description: form.description.value,
      sku: {
        id: form.id.value,
        size: form.size.value,
        color: form.color.value,
        quantity: form.quantity.value,
      },
      shopName: form.shop.value,
      shopImage: form.image.value, // shop image as a text URL
      shopOwner: form.owner.value,
    };

    try {
      const response = await fetch("https://github-react-task.vercel.app/products/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to upload product');
      }

      const result = await response.json();
      console.log(result);
     if(result?.data?.insertedId){
        alert("Product Added Successfully")
     }
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      console.error('Error uploading product:', error);
      // Handle error (e.g., show an error message)
    }
    form.reset()
  };

  return (
    <div className="flex justify-center items-center p-5 my-5">
      <div className="space-y-3 bg-amber-100 rounded-lg lg:w-1/2 p-5 items-center">
        <form onSubmit={handleAddProductIntoDB}>
          <h1 className="text-center font-semibold text-4xl">Add Your Product Into DB</h1>
          <div>
            <label className="font-semibold">Product Name:</label>
            <input className="w-full px-5 py-2" type="text" name="name" placeholder="Product Name" required />
          </div>
          <div>
            <label className="font-semibold">Product Price:</label>
            <input className="w-full px-5 py-2" type="number" name="price" placeholder="Product Price" required />
          </div>
          <div>
            <label className="font-semibold">Product Description:</label>
            <textarea className="w-full px-5 py-2" name="description" placeholder="Product Description" required />
          </div>
          <div className="gap-2 mt-3 flex justify-between">
            <input className="py-2 px-2" placeholder="Product Id" name="id" type="text" required />
            <input className="py-2 px-2" placeholder="Product Size" name="size" type="text" required />
            <input className="py-2 px-2" placeholder="Product Color" name="color" type="text" required />
          </div>
          <div>
            <label className="font-semibold">Product Quantity:</label>
            <input className="w-full px-5 py-2" type="number" name="quantity" placeholder="Product Quantity" required />
          </div>
          <div>
            <label className="font-semibold">Shop Name:</label>
            <input className="w-full px-5 py-2" type="text" name="shop" placeholder="Shop Name" required />
          </div>
          <div>
            <label className="font-semibold">Shop Image:</label>
            <input className="w-full px-5 py-2" type="text" name="image" placeholder="Shop Image URL" required />
          </div>
          <div>
            <label className="font-semibold">Shop Owner:</label>
            <input className="w-full px-5 py-2" type="text" name="owner" placeholder="Shop Owner" required />
          </div>
          <button className="w-full py-2 mt-3 rounded-lg bg-green-600 text-white font-semibold" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
