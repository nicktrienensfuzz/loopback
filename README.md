# loop

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

# Sign in a user
## Request
```
curl -X "POST" "http://[::1]:3000/signin" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "email": "nick@fuzz.pro",
  "password": "fuzz3018"
}'
```
