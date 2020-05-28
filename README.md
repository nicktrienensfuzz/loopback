# loop

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

# Samples
## Signin
```
curl -X "POST" "http://[::1]:3000/signin" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "email": "nick@fuzz.pro",
  "password": "fuzz3018"
}'
```
## Me
```

curl "http://[::1]:3000/me" \
     -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4NGY5YmJmLTUzOGQtNDFlMi04ZmYyLWI5YTM3ZWE0ZjcyOSIsIm5hbWUiOiJOaWNrIiwiZW1haWwiOiJuaWNrQGZ1enoucHJvIiwiaWF0IjoxNTkwNzAwNDI2LCJleHAiOjE1OTA3MjIwMjZ9.0D0_8OmFknaaVRk2YnQjJ9VL9E3cNzd6vDPZBjnYIxA'
     ```
