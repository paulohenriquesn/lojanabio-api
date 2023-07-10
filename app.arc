@app
lojanabio

@http
/
  method get
  src src/main/lambdas/health

/user
  method post
  src src/main/lambdas/register-user
  
/user
  method get
  src src/main/lambdas/get-user

/stores
  method get
  src src/main/lambdas/get-stores

/stores/:slug
  method get
  src src/main/lambdas/get-store


/stores
  method post
  src src/main/lambdas/add-store


/stores
  method patch
  src src/main/lambdas/update-store

/stores
  method delete
  src src/main/lambdas/delete-store

/login
  method post
  src src/main/lambdas/auth-user

/products
  method post
  src src/main/lambdas/add-product

/products
  method delete
  src src/main/lambdas/delete-product


/products/:productid
  method put
  src src/main/lambdas/update-product

/products/:storeid
  method get
  src src/main/lambdas/get-products

@tables
users
  userID *String
  email **String
  password String
  firstName String
  lastName String

stores
  storeID *String
  userID **String
  name String
  slug String

products
  productID *String
  storeID **String
  name String
  description String
  affiliateURL String
  imageURL String
  
@aws
region us-west-2
architecture arm64
