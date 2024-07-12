


## Introduction

This document is a specification of how we are doing (and should do) our internal API’s at Nodes. Our API’s should support usage from our front-end.

Suppose you are build a mini ecommerce application, follow give description.

### What to do
- Clone this repo
```bash
https://github.com/BayajidAlam/github-collab-task
```
- Navigate to folder
```bash
 cd your-project-name
```
- Install npm
```bash
npm install
```
- Run your project

```bash
npm run dev
```
- Create a new branch and switch to it
```bash
git checkout -b branchName
```
### Complete requirements given below
- Create a react app with vite
- Use firebase and implement email, password based authentication and use should be aslo able to login or signup using github or facebok
- create a form to add product and use following api 
- Show your products in card at home page and make a table on products page
- Use getone, updateone and deleteone API. 

### Root url
```
https://github-react-task.vercel.app
```

### Add product(POST)
```
/products/create
```

### Examples

For this api your request body should be like following

#### Reqeust body

```
{
  "productName": "Example Product",
  "price": 99.99,
  "description": "This is an example product description.",
  "sku": {
    "id": "SKU12345",
    "size": "L",
    "color": "Red",
    "quantity": 100
  },
  "shopName": "Example Shop",
  "shopImage": "https://example.com/shop-image.jpg",
  "shopOwner": "John Doe"
}
```

#### Response would be like this
```
{
    "error": false,
    "message": "Product created successfully",
    "data": {
        "acknowledged": true,
        "insertedId": "66918ae8aa85cdf268f3c4b1"
    }
}
```

### Get all products(GET)
```
/products
```

### Examples

get all product api

### Response would be like this

```
{
    "error": false,
    "message": "Product fetched successfully",
    "data": [
        {
            "_id": "66918765029fe5c762fdfba9",
            "productName": "Example Product",
            "price": 99.99,
            "description": "Nice description, carry on",
            "sku": {
                "id": "SKU12345",
                "size": "L",
                "color": "Red",
                "quantity": 100
            },
            "shopName": "Example Shop",
            "shopImage": "https://example.com/shop-image.jpg",
            "shopOwner": "John Doe"
        },
        {
            "_id": "66918776029fe5c762fdfbaa",
            "productName": "Meril",
            "price": 99.99,
            "description": "This is an example product description.",
            "sku": {
                "id": "SKU12345",
                "size": "L",
                "color": "Red",
                "quantity": 100
            },
            "shopName": "Example Shop",
            "shopImage": "https://example.com/shop-image.jpg",
            "shopOwner": "John Doe"
        },
        {
            "_id": "66918786029fe5c762fdfbab",
            "productName": "Fair and lovely",
            "price": 99.99,
            "description": "This is an example product description.",
            "sku": {
                "id": "SKU12345",
                "size": "L",
                "color": "Red",
                "quantity": 100
            },
            "shopName": "Example Shop",
            "shopImage": "https://example.com/shop-image.jpg",
            "shopOwner": "John Doe"
        },
        {
            "_id": "669188f741e2a423643b5b09",
            "productName": "Fair and lovely",
            "price": 99.99,
            "sku": {
                "id": "SKU12345",
                "size": "L",
                "color": "Red",
                "quantity": 100
            },
            "shopName": "Example Shop",
            "shopImage": "https://example.com/shop-image.jpg",
            "shopOwner": "John Doe"
        },
        {
            "_id": "66918ae8aa85cdf268f3c4b1",
            "productName": "Fair and lovely",
            "price": 99.99,
            "description": "This is an example product description.",
            "sku": {
                "id": "SKU12345",
                "size": "L",
                "color": "Red",
                "quantity": 100
            },
            "shopName": "Example Shop",
            "shopImage": "https://example.com/shop-image.jpg",
            "shopOwner": "John Doe"
        }
    ]
}
```

### Get one(GET)
```
/products/:id
```

### Examples

get one product api

### Response would be like this

```
{
    "error": false,
    "message": "Product fetched successfully",
    "data": {
        "_id": "66918765029fe5c762fdfba9",
        "productName": "Example Product",
        "price": 99.99,
        "description": "Nice description, carry on",
        "sku": {
            "id": "SKU12345",
            "size": "L",
            "color": "Red",
            "quantity": 100
        },
        "shopName": "Example Shop",
        "shopImage": "https://example.com/shop-image.jpg",
        "shopOwner": "John Doe"
    }
}
```
### Update one(PATCH)
```
/products/:id
```

### Examples

Update one product api

### Body would be any of your data

```
{
    "error": false,
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    },
    "message": "Products updated successfully!"
}
```
### Delete one(DELETE)
```
/products/:id
```

### Examples

Delete one product api

### Body would be any of your data

```
{
    "error": false,
    "message": "Products deleted successfully!",
    "result": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```


- Deploy your frontend application and write clear readME file with demo user password, other credentials

- Now you are done, make a pull request to main branch with description. Try to submit in 2 days, Best of luck.