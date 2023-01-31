# Nuxt 3 isomorphic data fetching from external API with cookies

# API

express.js app on localhost:3100

# Nuxt 3

on localhost:3000

# data-fetching on frontend (browser)

request is proxied via devProxy (nuxt.config.ts) to API
browser adds and sets cookies

# data-fetching on SSR

request is via myFetch composable to API

# myFetch composable

- augmentes request and response cookies
- adds host on SSR only
