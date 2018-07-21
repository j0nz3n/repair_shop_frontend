#!/bin/bash

curl --include --request PATCH "http://localhost:4741/repair_orders/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "repair_order": {
      "date_in":"2018-07-19",
      "date_due":"2018-07-21",
      "date_out":null,
      "complaint":"Cracked screen",
      "diagnosis":"Broken display",
      "repair_action":null,
      "user_rating":null,
      "device_id": 5,
      "user_id": 1
      }
  }'

  echo
