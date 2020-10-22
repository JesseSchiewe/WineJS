var database = firebase.database();

export default function writeToDatabase(userId, data) {
    firebase.database().ref('users/' + userId + '/' + data.WineName).set({
      WineName: data.WineName,
      Balance: data.Balance,
      WineReview : data
    });
  }

export function readDatabase() {
    return firebase.database().ref('/users/').once('value').then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // ...
    });
}
