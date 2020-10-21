import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo"
import { Link } from "react-router-dom"

import "./styles/ListPcs.css"



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



const ListPcsComponent =  ({ data: { equipos = [] }, loading, error } = {}) => {

    
    const [ query, setQuery ] = React.useState("")

    new Intl.NumberFormat().format(equipos.value)

   

    const filteredEquipments = equipos.filter(equipo => {
        return `${equipo.title}${equipo.value}${equipo.content}`.toLowerCase().includes(query.toLowerCase());
    })
 
    


    if(loading) return <p>Loading....</p>
    
    if(error){
        return <p>Error</p>
    }

    console.log(filteredEquipments)

    return(
        <div className="boxCard">       
            <div>
                <label>Filter Pc</label>
                <input type="text" className="form-control"
                    value= {query}  
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}               
                />
            </div> 
            <ul>
            {
                filteredEquipments.map((equipos) => (
                    <Link to={`equipos/${equipos._id}`}  >
                        <li key={equipos._id} className="card">
                            
                            <div className="imageBox">
                            <img src={equipos.image} width="150px" height="200px" className="Equipment__Image" ></img>
                            </div>
                            <h4 className="description" >{equipos.title}</h4>
                            <h5 className="description" >{new Intl.NumberFormat().format(equipos.value)} $</h5>
                        </li>
                    </Link>
                ))
            }
            </ul>
        </div>
        
    )
}

export const ListPcs = ListEquipments(ListPcsComponent);