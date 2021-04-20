import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { Form, Button } from 'react-bootstrap';
import firebaseConfig from "../firebase.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from "../Header/Header";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState(
        {
            isSignedIn: false,
            displayName: '',
            email: '',
            photoURL: '',
            name: '',
            password: '',
            confirm_password: '',
            error: '',
            success: false,
        }
    )
    console.log(user)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    // for google signIn
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from);

            })
    }
    
   
    return (
        <div>
            <Header />
            <div class="d-flex justify-content-center m-5 ">
                <Form  >
                    <Form.Group>
                        <button onClick={googleSignIn} type="button" class="btn btn-outline-success"><FontAwesomeIcon icon={faGoogle} />
                            <span class="p-4">Continue with Google</span>
                        </button>
                    </Form.Group>
                   
                </Form>
            </div>

            <div class="text-center">
                Copyright ©️ 2021 All rights reserved | This template is made with by Amir Hossain !!
            </div>

        </div>
    );
};

export default Login;