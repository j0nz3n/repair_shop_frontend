#!/bin/bash

curl --include --request PATCH "http://localhost:4741/devices/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "device": {
      "id": "'"${ID}"'", 
      "make": "Apple",
      "model": "iPad Pro 2",
      "serial_number": "GHYEhgf",
      "user_id": 1 
    }
  }'

  echo
