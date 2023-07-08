@app
lojanabio

@http
/
  method get
  src src/main/http/get-index

/user
  method post
  src src/main/http/post-user 
  
/login
  method post
  src src/main/http/post-user-login 

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
