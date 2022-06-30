import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./app"
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./store"
import styled from 'styled-components';


const Container = styled.div`
        background-color: rgb(238, 238, 238);
        width: 600px;
        min-height:100vh;
        border: 1px solid #2d2d2d;
        margin-right: auto;
        margin-left: auto;

        h1{
        color: rgb(255, 187, 0);
        font-size: large;
        font-weight: bold;
        float: left;
        padding-left: 15px;
        }
        h3{
        padding-top: 20px;
        font-size: 25px ;
        }
        h5{
        color: rgb(255, 187, 0);
        font-size: large;
        font-weight: bold;
        }
`;
ReactDOM.render(
    
        <Provider store ={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <Container>
                                <App />
                        </Container>
                </PersistGate>
                
        </Provider>        
 
,document.getElementById("root"));
