/*document.addEventListener('DOMContentLoaded', function() {
  // Yandex map
  if (document.querySelector('#map')) {

  }
})
*/

function initMap() {
  const uluru = { lat: 59.9351545, lng: 30.3229178 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17.75,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
