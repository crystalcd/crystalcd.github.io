module.exports = {
  "title": "蓝鲸",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/crystalcd",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.svg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "更新时间",
    "author": "crystalcd",
    "authorAvatar": "/avatar.png",
    "record": "****",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  extraWatchFiles: [
    '.vuepress/styles/*.styl', // 使用相对路径
  ],
  plugins: [
    'meting', {
      metingApi: "https://api.i-meto.com/meting/api",
      meting: {
        server: 'netease',
        type: 'playlist',
        mid: '109951162858378049',
      },     // 不配置该项的话不会出现全局播放器
      aplayer: {
        fixed: "true",
        mini: "true",
        autoplay: "true",
        theme: "#1297da",
      }
    }
  ],
}