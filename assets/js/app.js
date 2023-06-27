var map;
var InfoObj = [];
var centerCords = {
  lat: 19.7515,
  lng: 75.7139,
};

var icons = {
  office: {
    icon: {
      url: "https://maps.gstatic.com/mapfiles/transparent.png", // 'M -2,0 0,-2 2,0 0,2 z',
      strokeColor: "#F00",
      fillColor: "#F00",
      fillOpacity: 1,
      scale: 1,
    },
  },
  employee: {
    icon: {
      path: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z", // 'M -2,0 0,-2 2,0 0,2 z',
      strokeColor: "#3498DB",
      fillColor: "#3498DB",
      fillOpacity: 1,
      scale: 1,
    },
  },
};

var markersOnMap = [
  {
    placeName: "abc",
    placeIpaddress: "167263878763",
    placeDate: "21/6/2020",
    placeLogintime: "10:00AM",
    placeLogouttime: "6:00PM",
    latLng: [
      {
        lat: 19.6350898,
        lng: 73.7622954,
      },
    ],
    type: "office",
  },
  {
    placeName: "xyz",
    placeIpaddress: "0987654321",
    placeDate: "24/6/2020",
    placeLogintime: "12:00AM",
    placeLogouttime: "8:00PM",
    latLng: [
      {
        lat: 19.6350898,
        lng: 74.7622954,
      },
    ],
    type: "employee",
  },
  {
    placeName: "pwr",
    placeIpaddress: "9845846485",
    placeDate: "23/6/2020",
    placeLogintime: "9:00AM",
    placeLogouttime: "7:00PM",
    latLng: [
      {
        lat: 19.6350898,
        lng: 75.7622954,
      },
    ],
    type: "employee",
  },
];

window.onload = function () {
  initMap();
};

function addMarkerInfo() {
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString =
      '<div class="popupwidth">' +
      '<div class="details">' +
      "<div>" +
      "<p>" +
      "<span>Name: </span>" +
      markersOnMap[i].placeName +
      "</p>" +
      "<p>" +
      "<span> ipadress: </span>" +
      markersOnMap[i].placeIpaddress +
      "</p>" +
      "<p>" +
      "<span>Date: </span>" +
      markersOnMap[i].placeDate +
      "</p>" +
      "<p>" +
      "<span>login time: </span>" +
      markersOnMap[i].placeLogintime +
      "</p>" +
      "<p>" +
      "<span>logout time: </span>" +
      markersOnMap[i].placeLogouttime +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";

    const marker = new google.maps.Marker({
      position: markersOnMap[i].latLng[0],
      icon: icons[markersOnMap[i].type].icon,
      map: map,
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InfoObj[0] = infowindow;
    });
  }
}

function closeOtherInfo() {
  if (InfoObj.length > 0) {
    InfoObj[0].set("marker", null);
    InfoObj[0].close();
    InfoObj[0].length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: centerCords,
  });
  addMarkerInfo();
}
