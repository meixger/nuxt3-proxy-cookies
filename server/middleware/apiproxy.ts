export default defineEventHandler(async (event) => {
  if (event.node.req.url !== "/proxy/setcookies") return;

  // att: `req.headers.host` works only client side and is empty on SSR
  const target = new URL(
    `http://${event.node.req.headers.host}/api/setcookies`
  );

  return proxyRequest(event, target.toString());
});
