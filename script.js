var mymap = L.map('mapid').setView([37.98, -91.83], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Layer 1 is colleges with GIS programs in the Greater STL Area

var geojsonFeature = {
"type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": " Saint Louis University",
        "ADDRESS": "One North Grand Blvd, Saint Louis, Missouri 63103-2097",
        "Postal": 63103,
        "UTOTAL": 390,
        "UCORE": 19,
        "URELATED": 371,
        "GTOTAL": 116,
        "GCORE": 34,
        "GRELATED": 82
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2342,
          38.6359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Washington University in St. Louis",
        "ADDRESS": "One Brookings Drive, Saint Louis, Missouri 63130-4899",
        "Postal": 63130,
        "UTOTAL": 794,
        "UCORE": 10,
        "URELATED": 784,
        "GTOTAL": 338,
        "GCORE": 53,
        "GRELATED": 285
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3108,
          38.6488
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "University of Missouri in Columbia ",
        "ADDRESS": "105 Jesse Hall, Columbia, Missouri 65211-1050",
        "Postal": 65211,
        "UTOTAL": 1056,
        "UCORE": 161,
        "URELATED": 895,
        "GTOTAL": 560,
        "GCORE": 86,
        "GRELATED": 474
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.3277,
          38.9404
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "University of Missouri in St. Louis",
        "ADDRESS": "One University Boulevard, Saint Louis, Missouri 63121-4400",
        "Postal": 63121,
        "UTOTAL": 37,
        "UCORE": "",
        "URELATED": 37,
        "GTOTAL": 40,
        "GCORE": "",
        "GRELATED": 40
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3111,
          38.7102
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "University of Missouri in Kansas ",
        "ADDRESS": "5100 Rockhill Rd., Kansas City, Missouri 64110",
        "Postal": 64110,
        "UTOTAL": 365,
        "UCORE": 103,
        "URELATED": 262,
        "GTOTAL": 95,
        "GCORE": 30,
        "GRELATED": 65
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.5774,
          39.0333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": " Missouri University of Science and Technology",
        "ADDRESS": "300 W.13th Street, Rolla, Missouri 65409",
        "Postal": 65409,
        "UTOTAL": 974,
        "UCORE": 100,
        "URELATED": 874,
        "GTOTAL": 1562,
        "GCORE": 511,
        "GRELATED": 1051
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.7756,
          37.9537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Webster university",
        "ADDRESS": "470 E Lockwood Ave., Saint Louis, Missouri 63119-3194",
        "Postal": 63119,
        "UTOTAL": 112,
        "UCORE": "",
        "URELATED": 112,
        "GTOTAL": 322,
        "GCORE": "",
        "GRELATED": 322
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3438,
          38.5893
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": " Maryville University ",
        "ADDRESS": "650 Maryville University Drive, Saint Louis, Missouri 63141-7299",
        "Postal": 63141,
        "UTOTAL": 136,
        "UCORE": "",
        "URELATED": 136,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5046,
          38.6449
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Lindenwood University",
        "ADDRESS": "209 S Kingshighway, Saint Charles, Missouri 63301-1695",
        "Postal": 63301,
        "UTOTAL": 464,
        "UCORE": "",
        "URELATED": 464,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.5033,
          38.7868
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": " Fontbonne University",
        "ADDRESS": "6800 Wydown Blvd, Saint Louis, Missouri 63105-3098",
        "Postal": 63105,
        "UTOTAL": 25,
        "UCORE": "",
        "URELATED": 25,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.185,
          38.383
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Columbia College",
        "ADDRESS": "4411 Woodson Road, Saint Louis, Missouri 63134-3701",
        "Postal": 63134,
        "UTOTAL": 84,
        "UCORE": "",
        "URELATED": 84,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3584,
          38.7311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Lincoln University",
        "ADDRESS": "820 Chestnut Street, Jefferson City, Missouri 65101",
        "Postal": 65101,
        "UTOTAL": 117,
        "UCORE": "",
        "URELATED": 117,
        "GTOTAL": 26,
        "GCORE": "",
        "GRELATED": 26
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92,
          38.335
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Central Methodist University",
        "ADDRESS": "411 Central Methodist Square, Fayette, Missouri 65248-1198",
        "Postal": 65248,
        "UTOTAL": 27,
        "UCORE": "",
        "URELATED": 27,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.6841,
          39.1489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Harris-Stowe State University",
        "ADDRESS": "3026 Laclede Ave, Saint Louis, Missouri 63103-2136",
        "Postal": 63103,
        "UTOTAL": 19,
        "UCORE": "",
        "URELATED": 19,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2242,
          38.63174
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Missouri Baptist University",
        "ADDRESS": "One College Park Dr, Saint Louis, Missouri 63141-8698",
        "Postal": 63141,
        "UTOTAL": 23,
        "UCORE": "",
        "URELATED": 23,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.4005,
          38.4397
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Southern Illinois University Edwardsville ",
        "ADDRESS": "Il State Rte 157, Edwardsville, Illinois 62026-1259",
        "Postal": 62026,
        "UTOTAL": 294,
        "UCORE": 184,
        "URELATED": 110,
        "GTOTAL": 164,
        "GCORE": 74,
        "GRELATED": 90
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.9961,
          38.7931
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": " Principia College",
        "ADDRESS": "1 Maybeck Place, Elsah, Illinois 62028-9799",
        "Postal": 62028,
        "UTOTAL": 43,
        "UCORE": "",
        "URELATED": 43,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3448,
          38.9526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "McKendree University",
        "ADDRESS": "701 College Rd, Lebanon, Illinois 62254-1291",
        "Postal": 62254,
        "UTOTAL": 142,
        "UCORE": "",
        "URELATED": 142,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.8156,
          38.6078
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": " Blackburn College",
        "ADDRESS": "700 College Ave, Carlinville, Illinois 62626",
        "Postal": 62626,
        "UTOTAL": 9,
        "UCORE": "",
        "URELATED": 9,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.8716,
          39.2887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "college",
        "NAME": "Greenwille University",
        "ADDRESS": "315 E. College Ave, Greenville, Illinois 62246",
        "Postal": 62246,
        "UTOTAL": 37,
        "UCORE": "",
        "URELATED": 37,
        "GTOTAL": "",
        "GCORE": "",
        "GRELATED": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.4084,
          38.8946
        ]
      }
    }
  ]
};

L.geoJson(geojsonFeature,{
    pointToLayer: function(feature, latlng){
   return L.marker(latlng);
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h4>'+feature.properties.NAME+'</h4><h4>'+feature.properties.ADDRESS+'</h4>');
    }
  }).addTo(mymap);

// Layer 2 is the boundaries of Missouri 114 counties and the city of Saint Louis
// load GeoJSON from an external file
 $.getJSON("https://opendata.arcgis.com/datasets/d7ed01294fc3492286a02fe470f56452_0.geojson",function(data){
L.geoJson(data).addTo(mymap);
});
