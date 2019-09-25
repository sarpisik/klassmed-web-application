import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 37.004377, lng: 35.283982 }}>
      {props.isMarkerShown && <Marker position={{ lat: 37.004377, lng: 35.283982 }} />}
    </GoogleMap>
  ))
)
export default Map
