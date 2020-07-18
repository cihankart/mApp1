import * as firebase from 'firebase'
import { toast } from './toast'

const config = {
    apiKey: "AIzaSyC2YQOnk0Z974s82y_11K5DRAqMUG6zTfE",
    authDomain: "test1234-fd1fb.firebaseapp.com",
    databaseURL: "https://test1234-fd1fb.firebaseio.com",
    projectId: "test1234-fd1fb",
    storageBucket: "test1234-fd1fb.appspot.com",
    messagingSenderId: "61934095704",
    appId: "1:61934095704:web:26dc7dbbabdd91e954e92d",
    measurementId: "G-0WB0QCKXF1"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = `${username}`
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)

        console.log(res)
        return true
    } catch(error) {
        toast(error.message, 4000)
        return false

    }

    // authenticate with firebase
    // if present, show dashboard
    // if not, show error
}

export async function registerUser(username: string, password: string) {
    const email = `${username}`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(res)
        return true
    } catch(error) {
        toast(error.message, 4000)
        return false

    }

}