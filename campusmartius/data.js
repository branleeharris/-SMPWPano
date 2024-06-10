var APP_DATA = {
  "scenes": [
    {
      "id": "0-campus-martius",
      "name": "Campus Martius",
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
        "yaw": -0.1295247368707173,
        "pitch": 0.3140164064128115,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.058608986610401,
          "pitch": -0.26367531948896783,
          "rotation": 6.283185307179586,
          "target": "1-one-campus-martius-building"
        },
        {
          "yaw": 1.3501471041305813,
          "pitch": -0.03882742533397554,
          "rotation": 0,
          "target": "2-chrysler-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.065784946802509,
          "pitch": -0.4559722527022281,
          "title": "Emergency Location 1",
          "text": "One Campus Maritus Building"
        },
        {
          "yaw": 1.3561229142975524,
          "pitch": -0.3002341038928211,
          "title": "Emergency Location 2",
          "text": "Chrysler House"
        }
      ]
    },
    {
      "id": "1-one-campus-martius-building",
      "name": "One Campus Martius Building",
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
        "yaw": 0.19566956123863832,
        "pitch": -0.03713159578270897,
        "fov": 0.9591142411817905
      },
      "linkHotspots": [
        {
          "yaw": 2.925938590398136,
          "pitch": 0.37018563331939625,
          "rotation": 0,
          "target": "0-campus-martius"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9176006656990445,
          "pitch": 0.26690327797589575,
          "title": "Back to the Carts",
          "text": "Campus Martius Cart Location"
        }
      ]
    },
    {
      "id": "2-chrysler-house",
      "name": "Chrysler House",
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
        "yaw": 0.005383673800000821,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9820622705507702,
          "pitch": 0.23914636281451074,
          "rotation": 0,
          "target": "0-campus-martius"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.984964151630905,
          "pitch": 0.05955554408014052,
          "title": "Back to the carts",
          "text": "Campus Martius Cart Location"
        }
      ]
    }
  ],
  "name": "Campus Martius Park",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
