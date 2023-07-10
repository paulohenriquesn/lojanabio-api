@app
lojanabio

@http
/
  method get
  src src/lambdas/health

/user
  method post
  src src/lambdas/register-user
  
/user
  method get
  src src/lambdas/get-user

/stores
  method get
  src src/lambdas/get-stores

/stores/:slug
  method get
  src src/lambdas/get-store


/stores
  method post
  src src/lambdas/add-store


/stores
  method patch
  src src/lambdas/update-store

/stores
  method delete
  src src/lambdas/delete-store

/login
  method post
  src src/lambdas/auth-user

/products
  method post
  src src/lambdas/add-product

/products
  method delete
  src src/lambdas/delete-product


/products/:productid
  method put
  src src/lambdas/update-product

/products/:storeid
  method get
  src src/lambdas/get-products

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
  

@shared
src src/core

@aws
region us-west-2
architecture arm64
