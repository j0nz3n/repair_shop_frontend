#!/bin/bash

curl --include --request POST "http://localhost:4741/devices/" \
  --header "Content-Type: application/json" \
  --data '{
    "device": {
      "user_id": 1, 
      "make": "Apple",
      "model": "iPad Pro",
      "serial_number": "GHYEMN876tghgf"
    }
  }'

  echo
