/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
// html:     <script async defer src="https://maps.googleapis.com/maps/api/js?key=xxxxx"></script>

function Map () {
  const mapRef = useRef(null);

  useEffect(() => {
    const myLatLng = { lat: -318, lng: -584.39496 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: myLatLng,
      zoom: 17
    });

    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
      label: 'La Ganadera',
      title: 'La Ganadera'
    });
    marker.setMap(map);
  }, []);

  return (
    <div ref={mapRef} style={{ height: '500px', width: '100%' }} />
  );
}

export default Map;
