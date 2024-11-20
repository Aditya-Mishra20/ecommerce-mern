# Ecommerce

## Tech Used

- _MongoDB_ : for database management
- _Cloudinary_ : for storing files like images
- _React_ : for frontend

## Objective

- Session + JWT.
- cart
- product catagories - filter - search
- review products
- order track
- payment gateway

- Admin panel to keep track data - orders - purchase growth of product - CURD ops products

## Database

- `Users`
  Id, Primary key
  Role_id (admin/customer) (integer - foreign key)
  Full name
  Email
  Password
  Phone_number

- `Categories`
  id , Primary key
  Category_name
  Url_slug (unique) (text) (cat-name)
  Parent_cat_id, (integer)
  Status (active / inactive)

- `Products`
  Id, Primary key
  Product_name
  Url_slug (unique)
  Cat_id / category_id (integer)
  Description (text)
  Price (float - 10,2)
  Stock_quantity (integer)
  Status (active / inactive)

- `Product_variants`
  Id
  Product_id
  Color (optional)
  Size (optional)
  Price (float - 10,2)
  Stock_quantity (integer)

- `Carts`
  Id, Primary key
  User_id (foreign key - integer)
  Product_id (foreign key - integer) - NULL
  Product_variant_id (foreign key - integer) - NULL
  Quantity (integer)

- `Shipping_addresses`
  Id, Primary key
  User_id
  Full_address
  State
  City
  zip_code

- `Orders`
  Id
  Order_number (unique number)
  User_id
  Total_amount (float) = 1500
  Discount_amount (float) = 100
  Gross_amount (float) = 1400
  Shipping_amont (float) = 50
  net \_amount (float) = 1450
  Status (enum - placed / processing / shipping / delivered)
  Payment_status (enum - paid / not paid)
  Payment_type (enum - netbanking / upi / cod)
  Payment_transaction_id (varchar)
- `Order_items` / `order_products`
  Id, Primary key
  Order_id (Foreign key - orders)
  Product_id (Foreign key - products)
  Product_variant_id (Foreign key - product_variants)
  Product_name
  Color (NULL)
  Size (NULL)
  Price (Float)
  Quantity (integer)
  Total_amount (Float)
- `Order_shipping_addresses`
  Id, primary key
  Order_id (Foreign key - orders)
  Shipping_address_id
  Full_address
  State
  City
  Zip_code

- `Wishlist`
  id , Primary key
  User_id
  Product_id
  Product_variant_id
- `Offers` / `discounts`
  Id, Primary key
  Coupon_code (varchar - unique)
  Discount_type (enum - fixed / rate)
  Disocunt_value (float)
  Start_date (date)
  End_date (date)
  Description (text)
  Status (active / inactive)

## Concepts

- A popular library for making HTTP requests. It's a good choice for complex requests because it offers advanced features like:

- Interceptors
- Error handling
- Request cancellation

RTK Query

- Simplifies data caching, error handling, and state management. It's a good choice for React applications that need to manage server-state and optimize performance.
- RTK Query's features include:

* Automatic caching
* Background synchronization
* Automatic retries
* Pagination and load more support
* Middleware integration
