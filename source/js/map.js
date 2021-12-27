ymaps.ready(init);

let center = [59.93879, 30.323118];

function init(){
    var map = new ymaps.Map("map", {
        center: center,
        zoom: 17,
        controls: ['zoomControl']
    });

    var placemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/main/map-marker.png',
      iconImageSize: [36, 36]
    });

    map.geoObjects.add(placemark);
}
