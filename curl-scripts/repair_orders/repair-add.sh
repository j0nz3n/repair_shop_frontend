#!/bin/bash

curl --include --request POST "http://localhost:4741/repair_orders/" \
  --header "Content-Type: application/json" \
  --data '{
    "repair_order": {
      "date_in":"2018-07-20",
      "date_due":"2018-07-24",
      "date_out":null,
      "complaint":"Cracked screen",
      "diagnosis":"Broken display",
      "repair_action":null,
      "user_rating":null,
      "device_id": 3,
      "user_id": 1
    }
  }'

  echo
