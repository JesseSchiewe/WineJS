import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';
import App from './App';
import firebase from 'firebase';
import './index.js';
import { useList, useListKeys } from "react-firebase-hooks/database"

/* var wineRef = firebase.database().ref("/users");
const [snapshots, loading, error] = useList(wineRef );
 */



export const ReviewResult = () => {
    //const [review, setReview] = useState(firebase.database().ref('users/jds007/').readAllDatabase);
    //const [review, setReview] = useState(firebase.database().ref("users/jds007/sfd/").on("value",snapshot));
    const [review, setReview] = useState(firebase.database().ref("/users/jds007/sfd/"));


    function getReview() {firebase.database().ref('/users/jds0007').on('value', function(snapshot) {
        console.log(snapshotToArray(snapshot));
        var reviewData = snapshotToArray(snapshot);
    })};

    var wineRef = firebase.database().ref("/users/jds0007/sfd/");
    const [snapshots, loading, error] = useList(wineRef );

    //const [keys, loading, error] = useListKeys(wineRef);


    function snapshotToArray(snapshot) {
        var returnArr = [];
    
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
    
            returnArr.push(item);
        });
    
        return returnArr;
    };

    // function getReviewValue(valueName) {
    //     snapshots.map((ReviewInfo, index) => {ReviewInfo.val().valueName})
    // };

    return(
        <Fragment>
            <div className="WineJS Wine Review">

                {error && <strong>Error: {error}</strong>}
                {loading && <span>Loading...</span>}
                <ul>
                {!loading && snapshots &&
                    snapshots.map((ReviewInfo, index) => (
                    <li>{ReviewInfo.val().Balance}</li>
                    ))}
                </ul>




                {/* <h1>{review}</h1> */}
                <h1>Wine Review</h1>
                {!loading && snapshots && snapshots.map((ReviewInfo, index) => (
                    <h2>{ReviewInfo.val().Balance}</h2>))}

                {!loading && snapshots && snapshots.map((ReviewInfo, index) => (
                    <h2>{ReviewInfo.val().Balance}</h2>,
                    <h2>{ReviewInfo.val().WineName}</h2>
                ))}    
                <h2></h2>
                <h2>Date: </h2>
                <div>
                    {/* {snapshots.map((ReviewInfo, index) => {ReviewInfo.val().WineName})}  */}
                </div> 
                <h2>Producer: </h2>
                <h2>Wine: </h2>
                <div>
                    <ul>
                        {snapshots.map((ReviewInfo, index) => (<li>{ReviewInfo.val().WineName}</li>))}                        
                    </ul>
                </div>
                <h2>Total Score: </h2>

                {firebase.database().ref('/users/jds0007').on('value', function(snapshot) {
                    console.log(snapshotToArray(snapshot));
                })};
                
                

                        

                
                {/* {firebase.database().ref('/users/jds0007').on('value', function(snapshot) {
                    console.log(snapshotToArray(snapshot));
                    let reviewData = snapshotToArray(snapshot);
                })}; */}

              
                
            </div>
        </Fragment>

    )
};