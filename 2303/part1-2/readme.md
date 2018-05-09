## WP api

I'll use the WP REST API to get the list of post titles from [my sister's blog](http://more-i-gori.me).

As `fetch` requires CORS headers to be set on the WP site, which is not the case here, let's  make a workaround and run everything locally:

1. Get the posts with curl:
```bash
echo module.exports = > posts.js
curl http://more-i-gori.me/wp-json/wp/v2/posts >> posts.js
```

2. Get the posts' titles: `node titles.js`
