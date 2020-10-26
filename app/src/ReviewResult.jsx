import React, {Fragment, useContext, useEffect, useState} from 'react';
import Select from 'react-select'
//import { useForm } from 'react-hook-form';
//import App from './App';
import firebase from 'firebase';
import './index.js';
import outputForm from './OutputForm';
import { useList, useListKeys } from "react-firebase-hooks/database"
import UserProvider, { UserContext } from "./providers/UserProvider";

//import firestore from './Firebase'
//import firebase from "firebase/app";

// var wineRef = firebase.database().ref("/users");
// const [snapshots, loading, error] = useList(wineRef );



export const ReviewResult = () => {
    //const [review, setReview] = useState(firebase.database().ref('users/jds007/').readAllDatabase);
    //const [review, setReview] = useState(firebase.database().ref("users/jds007/sfd/").on("value",snapshot));
    //const [review, setReview] = useState(firebase.database().ref("/users/jds007/sfd/"));

    //const [valueBAL, setValueBAL] = useState(0);
    const reviewData = {};
    const user = useContext(UserContext);
    const {displayName, email} = user;

    const [reviewScores, setReviewScores] = useState({})

    // function getReview() {firebase.database().ref('/users/jds0007').on('value', function(snapshot) {
    //     console.log(snapshotToArray(snapshot));
    //     var reviewData = snapshotToArray(snapshot);
    // })};

    //var userRef = firebase.database().ref('/users/jds0007');
    //var winesRef = userRef.child("Wine1");
    //let TestValue = "TestValue"

    //var balScore = winesRef.child("Balance");
    //var wineName1 = winesRef.child("WineName");

    // Test for the existence of certain keys within a DataSnapshot
    //var ref = firebase.database().ref("users/jds0007");

    //var dbpathref = '/users/' + user.uid + "/" + wineReviewName + "/data"

    var wineReviewName = "Wine4"
    var dbpathref = '/users/' + user.uid + "/" + wineReviewName + '/data'
    var dbWineNames = '/users/' + user.uid + "/"

    var Answer = props => <select>{props.map((x,y) => <option key={y}>{x}</option>)}</select>;

    // var refdata = firebase.database().ref(dbpathref);
    //     ref.once("value")
    //     .then(function(snapshot) {
    //         var key = snapshot.key; // "ada"
    //         var childKey = snapshot.child().key; // "last"
    // });

    const [winesList, setWinesList] = useState([]);   
    
    // function updateWinesList() {
    //     let ref = firebase.database().ref(dbWineNames);
    //     ref.on('value' , snapshot => {
    //         var state = snapshot.val();
    //                 console.log(snapshot);
    //                 console.log(state);
    //         setWinesList([...winesList,{
    //             winename: state.WineName,balance: state.balance
    //         }]);
    //     });
    // };
    
    
    // function testWineList () {  
    //     var refWines = firebase.database().ref(dbWineNames);
    //         refWines.once("value").then(function(snapshot) {
    //             var key = snapshot.key; // "ada"
    //             //var childKey = snapshot.child("name/last").key; // "last"
    //     });
    //     console.log(refWines)
    //     alert(refWines)
    // }


    //// Create Wine List from database user's existing wine reviews
    // var query = firebase.database().ref(dbWineNames).orderByKey();        
    // query.once("value")
    //     .then(function(snapshot) {
    //         snapshot.forEach(function(childSnapshot) {
    //         var key = childSnapshot.key;
    //         var childData = childSnapshot.val();
    //         console.log(key)
    //         //setWinesList(winesList => [...winesList, key])
    //     });        
    // });

    // var query = firebase.database().ref(dbWineNames).orderByKey();        
    // function setWineArray() {
    //     query.once("value")
    //         .then(function (snapshot) {
    //             snapshot.forEach(function (childSnapshot) {
    //                 var key = childSnapshot.key;
    //                 var childData = childSnapshot.val();
    //                 console.log(key);
    //                 setWinesList(winesList => [...winesList, key]);
    //             });
    //         });
    // }


    var query = firebase.database().ref(dbWineNames).orderByKey();   
    var test = [];

    function handleChange(e){
        wineReviewName = e;
        alert(e);
        dbpathref = '/users/' + user.uid + "/" + wineReviewName + '/data'
        alert(dbpathref)
        getReviewData()
        alert(reviewData.WineName)        
    }


    // function SetWineArray() {
    //     var returnArr = [];
    //     useEffect(()=>{
    //         query.once("value").then(function (snapshot) {
    //             snapshot.forEach(function (childSnapshot) {
    //                 var key = childSnapshot.key;
    //                 var childData = childSnapshot.val();
    //                 //console.log(key);
    //                 //setWinesList(winesList => [...winesList, childSnapshot.key]);
    //                 returnArr.push(key);
    //                 //console.log(key)
    //             });                
    //         });
    //         //console.log(returnArr)
    //         //test = returnarr
    //     }, [query])
    //     console.log(returnArr)
    // }


    // function SetWineArray() {
    //     var returnArr = [];
    //     //useEffect(()=>{
    //         query.once("value").then(function (snapshot) {
    //             snapshot.forEach(function (childSnapshot) {
    //                 var item = childSnapshot.key;
    //                 //var childData = childSnapshot.val();
    //                 //console.log(key);
    //                 //setWinesList(winesList => [...winesList, childSnapshot.key]);
    //                 returnArr.push(item);
    //                 //console.log(key)
    //             });                
    //         });
    //         //console.log(returnArr)
    //         //test = returnarr
    //     //}, [query])
    //     console.log(returnArr)

    //     test = returnArr

    //     return returnArr
    // }


    const [theArray, setTheArray] = useState([]);
    const addArrayItem = (newArrayItem) => setTheArray(state => [...state, newArrayItem]);

    // function SetWineArray() {
    //     var returnArr = [];
    //     //useEffect(()=>{
    //         query.once("value").then(function (snapshot) {
    //             snapshot.forEach(function (childSnapshot) {
    //                 var key = childSnapshot.key;
    //                 //var childData = childSnapshot.val();
    //                 //console.log(key);
    //                 //setWinesList(winesList => [...winesList, childSnapshot.key]);
    //                 returnArr.push(key);

    //                 //setTheArray(theArray.concat(key));

    //                 //addArrayItem(item);
    //                 //setTheArray([...theArray, key]);
                    
    //                 console.log(key)
    //             });                
    //         });
    //         //console.log(returnArr)
    //         //test = returnarr
    //     //}, [query])
    //     console.log(returnArr)
    //     //console.log(theArray)

    //     test = returnArr

    //     return returnArr
    // }

    // SetWineArray()

    // function SetWineArray() {
    //     //useEffect(() => {
    //         var returnArr = [];
    //         //useEffect(()=>{
    //             query.once("value").then(function (snapshot) {
    //                 snapshot.forEach(function (childSnapshot) {
    //                     var item = childSnapshot.key;
    //                     item.key = childSnapshot.key;

    //                     //var key = childSnapshot.key;
    //                     //var childData = childSnapshot.val();
    //                     //console.log(key);
    //                     //setWinesList(winesList => [...winesList, childSnapshot.key]);
    //                     returnArr.push(item);
        
    //                     //setTheArray(theArray.concat(key));
        
    //                     //addArrayItem(item);
    //                     //setTheArray([...theArray, key]);
                        
    //                     console.log(item)
    //                 });                
    //             });
    //             //console.log(returnArr)
    //             //test = returnarr
    //         //}, [query])
    //         //console.log(returnArr)
    //         //console.log(theArray)
        
    //         test = returnArr
        
    //         return returnArr
    //     //}, []);
    // }

    // function SetWineArray() {
    //     useEffect(() => {
    //         var returnArr = [];
    //         //useEffect(()=>{
    //             query.once("value").then(function (snapshot) {
    //                 snapshot.forEach(function (childSnapshot) {
    //                     var item = childSnapshot.val();
    //                     item.key = childSnapshot.key;

    //                     //var key = childSnapshot.key;
    //                     //var childData = childSnapshot.val();
    //                     //console.log(key);
    //                     //setWinesList(winesList => [...winesList, childSnapshot.key]);
    //                     returnArr.push(item);
        
    //                     //setTheArray(theArray.concat(key));
        
    //                     //addArrayItem(item);
    //                     //setTheArray([...theArray, key]);
                        
    //                     console.log(item)
    //                 });                
    //             });
    //             //console.log(returnArr)
    //             //test = returnarr
    //         //}, [query])
    //         //console.log(returnArr)
    //         //console.log(theArray)
        
    //         test = returnArr
        
    //         return returnArr
    //     }, []);
    // }

    function SetWineArray() {
        var returnArr = [];
            //useEffect(() => {            
                query.once("value").then(function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        // var item = childSnapshot.val();
                        // item.key = childSnapshot.key;
                        returnArr.push({ label:childSnapshot.key, value:childSnapshot.key});  
                        //returnArr.push(item);                               
                        //console.log(item)
                    });                
                });        

            //}, []);
        test = returnArr        
        return returnArr
    }
    SetWineArray()
    //console.log(test)


    // let winenameList = test.map((winename, index) => {
        
    //     console.log(winename)

    //     return (            
    //         <option key={winename.key} value={winename.key}>{winename.key}</option>
    //     );
    // }, this);

    let winenameList = test.map((winename, index) => {
        
        console.log(winename)

        return (            
            <option key={winename.key} value={winename.key}>{winename.key}</option>
        );
    }, this);


    function getReviewData() {
        {firebase.database().ref(dbpathref).on('value', (snapshot) => {
            //console.log(snapshot)
            reviewData.Balance = snapshot.val().Balance;
            reviewData.BalanceNotes = snapshot.val().BalanceNotes;
            reviewData.FlavorCharacteristics = snapshot.val().FlavorCharacteristics;
            reviewData.FlavorCharacteristicsNotes = snapshot.val().FlavorCharacteristicsNotes;
            reviewData.FlavorIntensity = snapshot.val().FlavorIntensity;
            reviewData.FlavorIntensityNotes = snapshot.val().FlavorIntensityNotes;
            reviewData.Length = snapshot.val().Length;
            reviewData.LengthNotes = snapshot.val().LengthNotes;
            reviewData.NoseIntensity = snapshot.val().NoseIntensity;
            reviewData.NoseIntensityNotes = snapshot.val().NoseIntensityNotes;
            reviewData.Producer = snapshot.val().Producer;
            reviewData.TastingNotes = snapshot.val().TastingNotes;
            reviewData.NoseIntensityNotes = snapshot.val().NoseIntensityNotes;
            reviewData.Producer = snapshot.val().Producer;
            reviewData.TastingNotes = snapshot.val().TastingNotes;
            reviewData.Total = snapshot.val().Total;
            reviewData.Vintage = snapshot.val().Vintage;
            reviewData.WineName = snapshot.val().WineName;
        })};
        alert("getting review data")
    }
    
    function showScores() {
        return(
            <div>
                <h2>Balance: {reviewData.Balance}</h2>
                <h2>Balance Notes: {reviewData.BalanceNotes}</h2>
                <h2>Flavor Characteristics: {reviewData.FlavorCharacteristics}</h2>
                <h2>Wine Name: {reviewData.WineName}</h2>
                <h2>Tasting Notes: {reviewData.TastingNotes}</h2>
            </div>
        );
    }
    
    


    // var refCheck = firebase.database().ref("/users/CGVMdF4jxZclFvfekG7y65SO6272")
    // var refCheckData = firebase.database().ref("/users/CGVMdF4jxZclFvfekG7y65SO6272").child("Wine4/data")


    // //var userId = firebase.auth().currentUser.uid;
    // return firebase.database().ref('/users/jds0007/Wine1').once('value').then(function(snapshot) {
    //     var WineName2 = (snapshot.val() && snapshot.val().WineName) || 'Anonymous';
    //     var Balance2 = (snapshot.val() && snapshot.val().Balance) || 'Anonymous';
    //     // ...
    // });

    function getReview() {
        firebase.database().ref("/users/" + user.uid).on('value', function (snapshot) {
            //console.log(snapshotToArray(snapshot));
            var reviewData = snapshotToArray(snapshot);
        });
    }

    var wineNamesList = {};
    function getWineNamesList() {
        firebase.database().ref("/users/" + user.uid).on('value', function (snapshot) {
            //console.log(snapshotToArray(snapshot));
            wineNamesList = snapshotToArray(snapshot);
        });
    }


    const [wineNameOptions, setWineNameOptions] = useState([]);

    // firebase.database().ref(dbWineNames).on('value', function(snapshot) {
    //     console.log(snapshotToArray(snapshot));
    // });

    var wineRef = firebase.database().ref("/users/");
    const [snapshots, loading, error] = useList(wineRef );

    function snapshotToArray(snapshot) {
        var returnArr = [];
    
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
    
            returnArr.push(item);
        });
    
        return returnArr;
    };


    var test2 = [];
    function SetShowResultsArray() {
        var returnResArr= [];       
            firebase.database().ref(dbpathref).on('value', (snapshot) => {

                //returnResArr = snapshotToArray(snapshot);

                snapshot.forEach(function (childSnapshot) {
                    returnResArr = snapshotToArray(snapshot);
                    //returnResArr.push({ label:childSnapshot.key, value:childSnapshot.key});  
                    //returnArr.push(item);                               
                    //console.log(item)
                });                
            });        
        test2 = returnResArr        
        return returnResArr
        console.log(test2)
    }

    function updateReviewScores() {
        firebase.database().ref(dbpathref).on('value', (snapshot) => {
            //console.log(snapshot)
            setReviewScores(snapshot.val().Balance);
            //setReviewScores(snapshot.val().BalanceNotes);
            // setReviewScores(snapshot.val().FlavorCharacteristics);
            // setReviewScores(snapshot.val().FlavorCharacteristicsNotes);
            // // reviewData.FlavorIntensity = snapshot.val().FlavorIntensity;
            // // reviewData.FlavorIntensityNotes = snapshot.val().FlavorIntensityNotes;
            // // reviewData.Length = snapshot.val().Length;
            // // reviewData.LengthNotes = snapshot.val().LengthNotes;
            // // reviewData.NoseIntensity = snapshot.val().NoseIntensity;
            // // reviewData.NoseIntensityNotes = snapshot.val().NoseIntensityNotes;
            // // reviewData.Producer = snapshot.val().Producer;
            // // reviewData.TastingNotes = snapshot.val().TastingNotes;
            // // reviewData.NoseIntensityNotes = snapshot.val().NoseIntensityNotes;
            // // reviewData.Producer = snapshot.val().Producer;
            // setReviewScores(snapshot.val().TastingNotes);
            // // reviewData.Total = snapshot.val().Total;
            // // reviewData.Vintage = snapshot.val().Vintage;
            // setReviewScores(snapshot.val().WineName);
    })};
    
    
    return(
        <Fragment>
            <div>
                <form>
                    <Select options={ test } onChange={e => handleChange(e.value)} />


                    {showScores(reviewData)}

                </form>

                

                {/* <h2>{SetWineArray()}</h2> */}
                
                

                <h1>Wine Review</h1>
                <h2>Date: </h2>

                {/* {firebase.database().ref('/users/jds0007').on('value', function(snapshot) {
                    console.log(snapshotToArray(snapshot));
                })}; */}                

                {/* {firebase.database().ref('/users/jds0007').on('value', function(snapshot) {
                    //console.log(snapshotToArray(snapshot));
                })}; */}

                {/* {firebase.database().ref('/users/CGVMdF4jxZclFvfekG7y65SO6272').on('value', function(snapshot) {
                    //console.log(snapshotToArray(snapshot));
                })}; */}

                {/* {firebase.database().ref('/users/jds0007/Wine1').on('value', (snapshot) => {
                        reviewData.Balance = snapshot.val().Balance;
                        reviewData.WineName = snapshot.val().WineName;
                })}; */}
                
                {/* {firebase.database().ref(dbpathref).on('value', (snapshot) => {
                        console.log(snapshot)
                        reviewData.Balance = snapshot.val().Balance;
                        reviewData.WineName = snapshot.val().WineName;
                })}; */}
                                
                {/* {firebase.database().ref('/users/CGVMdF4jxZclFvfekG7y65SO6272/Wine6').on('value', (Snapshot) => {
                        console.log(Snapshot)
                        reviewData.Balance = Snapshot.val().Balance;
                        reviewData.WineName = Snapshot.val().WineName;
                })}; */}

                {/* {firebase.database().ref('/users/CGVMdF4jxZclFvfekG7y65SO6272/Wine4').on('value', (snapshot) => {
                    console.log(snapshot)
                    reviewData.Balance = snapshot.val().Balance;
                    reviewData.WineName = snapshot.val().WineName;
                })}; */}

                {/* {firebase.database().ref(dbpathref).on('value', (snapshot) => {
                    //console.log(snapshot)
                    reviewData.Balance = snapshot.val().Balance;
                    reviewData.BalanceNotes = snapshot.val().BalanceNotes;
                    reviewData.FlavorCharacteristics = snapshot.val().FlavorCharacteristics;
                    reviewData.FlavorCharacteristicsNotes = snapshot.val().FlavorCharacteristicsNotes;
                    reviewData.FlavorIntensity = snapshot.val().FlavorIntensity;
                    reviewData.FlavorIntensityNotes = snapshot.val().FlavorIntensityNotes;
                    reviewData.Length = snapshot.val().Length;
                    reviewData.LengthNotes = snapshot.val().LengthNotes;
                    reviewData.NoseIntensity = snapshot.val().NoseIntensity;
                    reviewData.NoseIntensityNotes = snapshot.val().NoseIntensityNotes;
                    reviewData.Producer = snapshot.val().Producer;
                    reviewData.TastingNotes = snapshot.val().TastingNotes;
                    reviewData.NoseIntensityNotes = snapshot.val().NoseIntensityNotes;
                    reviewData.Producer = snapshot.val().Producer;
                    reviewData.TastingNotes = snapshot.val().TastingNotes;
                    reviewData.Total = snapshot.val().Total;
                    reviewData.Vintage = snapshot.val().Vintage;
                    reviewData.WineName = snapshot.val().WineName;
                })}; */}
                
                
                {/* <h2>Balance: {reviewData.Balance}</h2>
                <h2>Balance Notes: {reviewData.BalanceNotes}</h2>
                <h2>Flavor Characteristics: {reviewData.FlavorCharacteristics}</h2>
                <h2>Wine Name: {reviewData.WineName}</h2>
                <h2>Tasting Notes: {reviewData.TastingNotes}</h2> */}

                {/* {updateReviewScores()} */}

                
                <h2>Balance: {reviewData.Balance}</h2>
                <h2>Balance Notes: {reviewData.BalanceNotes}</h2>
                <h2>Flavor Characteristics: {reviewData.FlavorCharacteristics}</h2>
                <h2>Wine Name: {reviewData.WineName}</h2>
                <h2>Tasting Notes: {reviewData.TastingNotes}</h2>


                {/* {firebase.database().ref(dbpathref).on('value', (snapshot) => {
                    //console.log(snapshot)
                    var reviewData2 = snapshot;
                    console.log(reviewData2);
                })}; */}


      



                {/* {firebase.database().ref(dbWineNames).on('value', (snapshot) => {
                    foreach => {}
                    console.log(snapshot.child)

                    // //const {wines} = useState();
                    // let wineList = snapshot.keys().map((k) => {
                    //     return ( 
                    //         <option key={k} value={k}>{wines[k]}</option>
                    //     )
                    // })
                })}; */}
                
            </div>
        </Fragment>

    )
};