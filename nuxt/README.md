# Nuxt 3 fetch data via proxy from 3th party api

Nuxt 3 api routes proxy from `unjs/h3` doesn't return separate `set-cookie` headers

<pre><code>
HTTP/1.1 200 OK
access-control-allow-origin: *
connection: close
content-type: application/json
date: Mon, 30 Jan 2023 11:45:38 GMT
<b>set-cookie: username=bob; Expires=Thu, 01 Jun 2023 10:00:00 GMT; Path=/; HttpOnly, roles=guest; Path=/</b>
transfer-encoding: chunked
<code><pre>

single combined set-cookie header from unjs/h3 proxyRequest()

browser can't set both cookies correctly
