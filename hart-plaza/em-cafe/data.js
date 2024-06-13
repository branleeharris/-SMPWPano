var APP_DATA = {
  "scenes": [
    {
      "id": "0-hart-plaza",
      "name": "Hart Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.18498528766581224,
        "pitch": 0.2765436526792886,
        "fov": 0.6616593328010734
      },
      "linkHotspots": [
        {
          "yaw": 2.4643519180518094,
          "pitch": 0.40467247312474086,
          "rotation": 0,
          "target": "1-capital-one-cafe"
        },
        {
          "yaw": 0.4850745843401878,
          "pitch": 0.11860577400781125,
          "rotation": 11.780972450961727,
          "target": "2-renaissance-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4447349709861594,
          "pitch": -0.11994443070199523,
          "title": "Emergency Location",
          "text": "Capital One Cafe"
        }
      ]
    },
    {
      "id": "1-capital-one-cafe",
      "name": "Capital One Cafe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.1714470659333358,
        "pitch": -0.12354585937857543,
        "fov": 0.7156768612865959
      },
      "linkHotspots": [
        {
          "yaw": -2.6246534724033026,
          "pitch": 0.13997646158427557,
          "rotation": 5.497787143782138,
          "target": "0-hart-plaza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-renaissance-center",
      "name": "Renaissance Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.40738597684330813,
        "pitch": -0.17191900980331987,
        "fov": 0.7645275152027362
      },
      "linkHotspots": [
        {
          "yaw": -1.6562522883160504,
          "pitch": 0.18755129570723383,
          "rotation": 0,
          "target": "0-hart-plaza"
        },
        {
          "yaw": -1.7259537938182739,
          "pitch": 0.2450046549755811,
          "rotation": 5.497787143782138,
          "target": "1-capital-one-cafe"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hart Plaza",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
