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
        "yaw": -0.2012748437102303,
        "pitch": 0.33461518144329183,
        "fov": 0.9129771076953225
      },
      "linkHotspots": [
        {
          "yaw": 0.694590488016047,
          "pitch": 0.10110663985366664,
          "rotation": 6.283185307179586,
          "target": "2-oakland-alternate-location"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6422776360023548,
          "pitch": 0.28693888648036214,
          "title": "Rain Location",
          "text": "If you experience inclimate weather, you can choose to keep the carts up and move them under this awning&nbsp;"
        },
        {
          "yaw": -1.365741333743724,
          "pitch": 0.08003208141969154,
          "title": "Emergency Location",
          "text": "Inside of North Foundation Hall"
        },
        {
          "yaw": 0.5440481622888456,
          "pitch": 0.04706828574447641,
          "title": "Emergency Location",
          "text": "Inside of Oakland Center"
        }
      ]
    },
    {
      "id": "1-oakland-rain-location",
      "name": "Oakland Rain Location",
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
        "yaw": 0.011800566027972081,
        "pitch": 0.3453107980135126,
        "fov": 0.7110524055988134
      },
      "linkHotspots": [
        {
          "yaw": 2.3146452185700888,
          "pitch": 0.592703123687258,
          "rotation": 0,
          "target": "0-oakland-primary-location"
        },
        {
          "yaw": 2.6053251195618454,
          "pitch": 0.04429081790222966,
          "rotation": 5.497787143782138,
          "target": "2-oakland-alternate-location"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3126601821685178,
          "pitch": 0.5413648165200673,
          "title": "Primary Location",
          "text": "This is the usual location of the carts"
        },
        {
          "yaw": -0.051236380616881405,
          "pitch": 0.12553777585237036,
          "title": "Rain Location",
          "text": "If you experience inclimate weather, you can choose to keep the carts up and move them under this awning&nbsp;"
        },
        {
          "yaw": 0.3829101335856251,
          "pitch": 0.15943289785631265,
          "title": "Emergency Location",
          "text": "Inside North Foundation Hall"
        },
        {
          "yaw": 2.3586187970272325,
          "pitch": 0.042807889184029335,
          "title": "Emergency Location",
          "text": "Inside Oakland Center"
        }
      ]
    },
    {
      "id": "2-oakland-alternate-location",
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
        "yaw": 0.0743104762782103,
        "pitch": 0.2504061094815029,
        "fov": 0.7110524055988134
      },
      "linkHotspots": [
        {
          "yaw": 2.933000337951105,
          "pitch": 0.013213555352661999,
          "rotation": 0.7853981633974483,
          "target": "0-oakland-primary-location"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5297013194411218,
          "pitch": -0.020025796230383364,
          "title": "Emergency Location",
          "text": "Inside of Oakland Center"
        }
      ]
    },
    {
      "id": "3-oakland-depot",
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
        "yaw": -0.017197666186790528,
        "pitch": 0.31248017784798243,
        "fov": 0.8053047803217076
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.07879722493824914,
          "pitch": 0.31731254350871296,
          "title": "Depot",
          "text": "Both carts and literature for restocking"
        }
      ]
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
