// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      dotnetport: process.env.DOTNET_PORT || "5000",
      nuxtport: process.env.NUXT_PORT || "3000",
    },
  },
  nitro: {
    devProxy: {
      "/api/node": {
        target: "http://localhost:3100/api/node",
        headers: { "x-devproxy": "yes" },
      },
      "/proxy/setcookies": {
        target: "http://localhost:3000/api/setcookies",
        headers: { "x-devproxy": "yes" },
      },
      "/api/dotnet/": {
        target: "http://localhost:5000/api/dotnet/",
        headers: { "x-devproxy": "yes" },
      },
    },
  },
});
