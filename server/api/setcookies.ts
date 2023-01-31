export default defineEventHandler(async (event) => {
  const xDevproxy = event.node.req.headers["x-devproxy"];
  appendHeader(
    event,
    "set-cookie",
    "username=bob; Expires=Thu, 01 Jun 2023 10:00:00 GMT; Path=/; HttpOnly"
  );
  appendHeader(event, "set-cookie", "roles=guest; Path=/");
  return { username: "bob", roles: "guest", xDevproxy };
});
