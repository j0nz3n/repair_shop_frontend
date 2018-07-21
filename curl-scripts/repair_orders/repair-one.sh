curl "http://localhost:4741/repair_orders/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

  echo
