let myMap;

ymaps.ready(() => {
  myMap = new ymaps.Map('map', {
      center: [51.508199, -0.075471],
      zoom: 15
  });
});