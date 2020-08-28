import React, {Component} from 'react'

class MapLocation extends Component {
    render() {
        return(
            <div>
                <h1>Map and Location</h1>
             <p>3620 Long Beach Blvd. Ste. B6 Long Beach, CA 90807</p>
                <a href={'https://www.google.com/maps/place/3620+Long+Beach+Blvd+B6,+Long+Beach,+CA+90807/@33.8227715,-118.1893972,3a,75y,90t/data=!3m7!1e1!3m5!1sxAWg1H5I19f-OOpPVlWwNw!2e0!6s%2F%2Fgeo3.ggpht.com%2Fmaps%2Fphotothumb%2Ffd%2Fv1%3Fbpb%3DChEKD3NlYXJjaC5nd3MtcHJvZBJJCjsJuz0O2pAz3YARVh_8O6Gud6MaJwsQ04W4QhoeGhwKFgoUChIJuz0O2pAz3YAR794A93ehKbcSAkI2DCoKDQAAAAAVAAAAABoECFYQVg%26gl%3DUS!7i13312!8i6656!4m5!3m4!1s0x80dd3390da0e3dbb:0xa377aea13bfc1f56!8m2!3d33.8228103!4d-118.1891059'}>Google map location of our Business!</a>
            </div>
        )
    }
}

export default MapLocation