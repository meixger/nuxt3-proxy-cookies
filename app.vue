<script setup lang="ts">
const proxyData = ref()
const fetchFromProxy = async () => {
  proxyData.value = (await $fetch("/proxy/setcookies"))
};

const fetchData = ref()
const fetchDirect = async () => {
  fetchData.value = (await $fetch("/api/setcookies"))
};
</script>

<template>
  <div>
    <h1>unjs/h3 proxy vs direct fetch</h1>

    <fieldset>
      <legend>proxy fetch works now because of patch</legend>
      <button @click="fetchFromProxy()">fetch /thirtpartyapi/setcookies</button>
      {{ proxyData }}
      <pre>example response patched:

HTTP/1.1 200 OK
access-control-allow-origin: *
connection: close
content-type: application/json
date: Mon, 30 Jan 2023 12:16:24 GMT
<b>set-cookie: username=bob; Expires=Thu, 01 Jun 2023 10:00:00 GMT; Path=/; HttpOnly
set-cookie: roles=guest; Path=/</b>
transfer-encoding: chunked</pre>
      <p>set-cookie header is splited in unjs/h3 by patch</p>
    </fieldset>

    <br />

    <fieldset>
      <legend>direct fetch works</legend>
      <button @click="fetchDirect()">fetch /api/setcookies</button>
      {{ fetchData }}
      <pre>example response:

HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
<b>set-cookie: username=bob; Expires=Thu, 01 Jun 2023 10:00:00 GMT; Path=/; HttpOnly
set-cookie: roles=guest; Path=/</b>
content-type: application/json
date: Mon, 30 Jan 2023 11:46:29 GMT
connection: close
content-length: 43</pre>
    </fieldset>

  </div>
</template>
