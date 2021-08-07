import { getCenter } from 'geolib'
import { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'


function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState("")

    const coordinates = searchResults?.map((result) => ({
        longitude: result.long,
        latitude:result.lat,
    }))

    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/dizer/cks24rdyr3w9x18nn3dijcr9c"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={ (nextViewport) => setViewport(nextViewport)}
        >

            {searchResults?.map(({lat, long, title, img, price, star, location}) => (
                <div key={lat}>
                    <Marker
                        longitude={long}
                        latitude={lat}
                >
                        <LocationMarkerIcon onClick={() => setSelectedLocation({lat, long}) } aria-label="push-pin" className="h-6 text-[#FF385C] animate-bounce cursor-pointer point "/>
                    </Marker>

                    {/* Popup */}
                    {selectedLocation.long === long ? (
                        <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={lat}
                        longitude={long}
                        className="z-10 pop"
                        >
    
                                <div className="flex">
                                <Image src={img} height="120"
                    width = "250"
                                    objectFit="contain" className="map__photo" />
                                <div className="inline-block ml-3">
                                <p className="mt-2">{location}</p>
                                
                                <p className="mt-2">{title}</p>
                                    <div className="justify-between flex items-center mt-10">
                                        <p className="">{price}</p>
                                        <p className="flex items-center"><StarIcon className="h-5 text-red-400"/>{star}</p>
                                    </div>
                                </div>
                                </div>
               
                    </Popup>
                    ) : (
                            false
                    )}

                </div>
            ))}

        </ReactMapGL>
    )
}

export default Map
