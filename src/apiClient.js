import { firebaseDatabase } from './firebase';

function getRefItems(){
    return firebaseDatabase.ref("items");
}

function getItems(){
    return getRefItems().once('value').then(snapshot => snapshot.val())
}

export {
    getItems
}