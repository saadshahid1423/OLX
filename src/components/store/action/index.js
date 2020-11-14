import firebase from '../../firebase/firebase'

const setData = (obj) =>{
    return (dispatch)=>{
        // console.log("obj===>", obj)
        dispatch({type: "SETDATA", add: obj})
    }
}

const facebook_login = (history) =>{
    return(dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        let userfbdata={
            name: user.displayName,
            profile: user.photoURL,
            uid: user.uid
        }
        // firebase.database().ref('/').child("ProductDetail").push(obj)
        firebase.database().ref('/').child(`LoginInfo/${user.id}`).set(userfbdata).
        then(()=>{
            dispatch({ type: "SETUSER" , payload: userfbdata})
            history.push("/giveadd")
        })
        
        // console.log("user===>", userfbdata)
            // alert('uploaded successfully')
    })
      .catch(function(error) {
        console.log(error.message)
      });
}
};

export{
    setData,
    facebook_login,
}