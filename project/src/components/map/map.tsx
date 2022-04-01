/* eslint-disable no-alert */
/* eslint-disable no-console */
import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import useMap from '../../hooks/useMap';
import { City } from '../../types/map';
import { Offer, Offers } from '../../types/offer';

type MapProps = {
  city: City;
  points: Offers;
  selectedPoint: Offer | undefined;
}

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [30, 30],
});

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [30, 30],
});

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const maker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        maker
          .setIcon(
            selectedPoint !== undefined
            && point.location.latitude === selectedPoint.location.latitude
            && point.location.longitude === selectedPoint.location.longitude
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);

      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: '100%'}} ref={mapRef} />
  );
}

export default Map;
