import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBagSNeuLSvSm_lkDfL8RQwl1L6b7KF1tY");
Geocode.enableDebug();

const GeocodeMap = ({
  address,
  googleCords,
  setGoogleCords,
  googleAddressField,
  setGoogleAddressField,
  isMarkerDrag,
  setIsMarkerDrag,
}) => {
  useEffect(() => {
    const addressArray = Object.values(address);
    const currentAddress = isMarkerDrag
      ? googleAddressField
      : addressArray.join(", ");
    setGoogleAddressField(currentAddress);
    Geocode.fromAddress(currentAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setGoogleCords({
          mapPosition: {
            lat,
            lng,
          },
          markerPosition: {
            lat,
            lng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        setIsMarkerDrag(true);
        const Address = response.results[0].formatted_address;
        setGoogleCords({
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
        setGoogleAddressField(Address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const AsyncMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        google={props.google}
        defaultZoom={15}
        defaultCenter={{
          lat: googleCords.mapPosition.lat,
          lng: googleCords.mapPosition.lng,
        }}
      >
        <Marker
          google={props.google}
          name={"Dolores park"}
          draggable={true}
          onDragEnd={onMarkerDragEnd}
          position={{
            lat: googleCords.markerPosition.lat,
            lng: googleCords.markerPosition.lng,
          }}
        />
        <Marker />
      </GoogleMap>
    ))
  );
  return (
    <>
      <div className="order-address">
        <div className="container">
          <div className="row">
            <p className="order-header">
              Drag the Pin to the Required target Location
            </p>
            <div className="col-md-12 map">
              <AsyncMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBagSNeuLSvSm_lkDfL8RQwl1L6b7KF1tY&libraries=places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <div className="col-md-12 address-bar">
              <p className="m-0">{googleAddressField}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeocodeMap;
