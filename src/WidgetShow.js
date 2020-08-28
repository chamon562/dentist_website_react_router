// this component we make functional component no need to import commponent
import React from 'react'
// pass in props
const WidgetShow = (props) =>{
    console.log(props)
    return(
        <div>
            {/* enter url paremeters and pass in {props.match.params.id}*/}
            <h1>You entered this Url paremeter: {props.match.params.id}</h1>
            {/* go and grab that 4th element in that array */}
            {/* whatever id we grab it will */}
            <h2>One Procedure we do is {props.procedures[props.match.params.id]}</h2>
        </div>
    )
}
export default WidgetShow