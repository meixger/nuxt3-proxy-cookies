<script setup lang="ts">
const { data, refresh } = await myFetch<{
    user: String;
    roles: String
}>("/api/node/setcookies")
</script>

<template>
    <div>
        <fieldset>
            <legend>SSR</legend>
            <div>{{ data || "ssr" }}</div>
            <div>user: {{ data?.user }}</div>
            <div>roles: {{ data?.roles }}</div>
            <button @click="refresh()">refresh</button>
        </fieldset>
    </div>
</template>
