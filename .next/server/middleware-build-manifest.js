self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/blog": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/blog.js"
    ],
    "/categories": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/categories.js"
    ],
    "/media": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/media.js"
    ],
    "/message": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/message.js"
    ],
    "/settings": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/settings.js"
    ],
    "/sign-in": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/sign-in.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];