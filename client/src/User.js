import React from "react";
import styled from "styled-components";
import {Card,} from 'semantic-ui-react';

const User = props => {

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

if(props.props.length >1){
    return (
    
        <StyleFlex> 
            {props.props.map(info =>{
                return(
                    <StyleCard key={info.name} data-testid="Food"> 
                        <Card.Group>
                            <Card>
                                
                                <Card.Header>Name: <StyleAnswer>{info.name}</StyleAnswer></Card.Header>
                                <Card.Content>Course: <StyleAnswer>{info.course}</StyleAnswer> </Card.Content> 
                                <Card.Content>Technique: <StyleAnswer>{info.technique}</StyleAnswer> </Card.Content> 
                                <Card.Content>Ingredients: <StyleAnswer>{info.ingredients.map(ing =>{return (<li>{ing}</li>)})}</StyleAnswer> </Card.Content> 
                            </Card>
    
                        </Card.Group>
    
                    </StyleCard>
                )
    
            })}        
        </StyleFlex>
    
        
    );
}else{
    return(
        <p>
            Pending...
        </p>
    )
}


}


export default User;
