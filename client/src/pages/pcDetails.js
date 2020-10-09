import React from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";



const ListEquipments = graphql( gql `
    query{
        equipos{
            _id
            title
            content
            image
            value
        }
    }
`);




class pcDetails extends React.Component{
    
    render(){
    return(
            <div>
                hello
            </div>
    )
    }
}




export default pcDetails;