import React from "react";
import styled from "styled-components";
import {Card,} from 'semantic-ui-react';

const StyleCard = styled.div`
width: 25%; 
height: 30%; 
background: grey; 
color: black;
border: 3px solid blue; 
border-radius: 2%; 
text-align: left;
font-weight: 600; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;

`
const StyleAnswer = styled.p`
color: white;
font-size: 1rem; 
margin-top: 1rem;  
`

const StyleFlex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

`    
const Use= (props)=>{
    console.log("ASf", props)
    return(
        <StyleFlex>

            <StyleCard key={props.props.name} data-testid="Food"> 

                <Card.Group>
                    <Card>
                        
                        <Card.Header>Name: <StyleAnswer>{props.props.name}</StyleAnswer></Card.Header>
                        <Card.Content>Course: <StyleAnswer>{props.props.course}</StyleAnswer> </Card.Content> 
                        <Card.Content>Technique: <StyleAnswer>{props.props.technique}</StyleAnswer> </Card.Content> 
                        <Card.Content>Ingredients: <StyleAnswer>{props.props.ingredients.map(ing =>{return (<li>{ing}</li>)})}</StyleAnswer> </Card.Content> 
                    </Card>       
                </Card.Group>
        
            </StyleCard>
        </StyleFlex>
    )    

}

export default Use;



