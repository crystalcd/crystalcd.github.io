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
  plugins: {
    // 鼠标点击特效
    "meting": {
      meting: {
        // 自动识别
        auto: 'https://music.163.com/#/song?id=413812448',
        // // 当前服务为netease -> 网易
        // server: "netease",
        // // 类型为歌单
        // type: "playlist",
        // // 歌单id
        // mid: "5312894314",
      },
      aplayer: {
        // 歌单为随机
        order: 'random',
        // 0为不显示歌词
        lrcType: 0,
        // 音量
        volume: 0.5,
        // 开启迷你模式
        mini: true,
        // 自动播放
        autoplay: true,
        theme: "#1297da"
      },
    },
  },
}