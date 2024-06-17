var APP_DATA = {
  "scenes": [
    {
      "id": "0-corktown",
      "name": "Corktown",
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
        "yaw": 0.14789089503472752,
        "pitch": 0.18764159329387198,
        "fov": 0.9261307769827432
      },
      "linkHotspots": [
        {
          "yaw": 0.12567635939196187,
          "pitch": 0.0968243109560909,
          "rotation": 0,
          "target": "1-michigan-central-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.11014451031068084,
          "pitch": -0.26740653724011665,
          "title": "Emergency Location",
          "text": "Michigan Central Station"
        }
      ]
    },
    {
      "id": "1-michigan-central-station",
      "name": "Michigan Central Station",
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
        "yaw": -0.030887321394008183,
        "pitch": -0.19391618335164296,
        "fov": 1.1884006102351443
      },
      "linkHotspots": [
        {
          "yaw": 3.1049373203664583,
          "pitch": 0.03003982068816491,
          "rotation": 6.283185307179586,
          "target": "0-corktown"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.06500755295430416,
          "pitch": -0.6740082156566789,
          "title": "Emergency Location",
          "text": "Michigan Central Station"
        }
      ]
    }
  ],
  "name": "Corktown",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
