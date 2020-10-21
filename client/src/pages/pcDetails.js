import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo"






class pcDetailsComponent extends Component{
    render(){
        let ID = this.props.match.params.id;
        console.log(ID)

        
        return(
            <div>
                {
                    this.props.data.loading
                    ? "loading"
                    : this.props.data.equiposId.map(data => 
                        <div>
                            <h1>{data.title}</h1>
                            <img src={data.image} alt=""/>
                            <p>{data.content}</p>
                        </div>
                    )
                }
            
            </div>
            )

   
    }
}

const ListEquipments = gql `
    query getEquipos($id: ID!){
        equiposId(_id: $id){
            _id
            title
            content
            image
            value
        }
    }
    
`;


const ID =  "5f4872a8fbc7992db0dded77"
const AppWithData = graphql(
    ListEquipments,
    {
        options: {
            variables: {
                "id": ID
            }
        }
    }
)(pcDetailsComponent)



export default AppWithData;