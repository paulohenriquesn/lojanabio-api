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

/login
  method post
  src src/main/lambdas/auth-user

@tables
users
  userID *String
  email **String
  password String
  firstName String
  lastName String
    
@aws
region us-west-2
architecture arm64
