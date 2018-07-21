curl "http://localhost:4741/devices/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

  echo
