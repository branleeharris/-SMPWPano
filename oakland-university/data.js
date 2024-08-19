var APP_DATA = {
  "scenes": [
    {
      "id": "0-oakland-primary-location",
      "name": "Oakland Primary Location",
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
        "yaw": 2.528298222107362,
        "pitch": 0.07619347542263988,
        "fov": 0.7110524055988134
      },
      "linkHotspots": [
        {
          "yaw": 0.6670054798006522,
          "pitch": 0.14375754943771746,
          "rotation": 0,
          "target": "1-oakland-alternate-location"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-oakland-alternate-location",
      "name": "Oakland Alternate Location",
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
        "yaw": 0.11627421318054232,
        "pitch": 0.3753262560779582,
        "fov": 0.8887878466685399
      },
      "linkHotspots": [
        {
          "yaw": 3.0562176055469505,
          "pitch": 0.026172481118344137,
          "rotation": 0,
          "target": "0-oakland-primary-location"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-oakland-depot",
      "name": "Oakland Depot",
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
        "yaw": -0.03882650241717833,
        "pitch": 0.30807961249314175,
        "fov": 0.7650147333516726
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Oakland University",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
