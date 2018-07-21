#!/bin/bash
TOKEN="BAhJIiVkZTVlMDE0OGE5MjZmYzZlMDE2Njk1YmMxYWEwM2RjYQY6BkVG--a8ad56fc0a33b3dd05887ce0104556e1d082fc26"

curl "http://localhost:4741/devices" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

  echo
