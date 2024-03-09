import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, take } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, DocumentData, DocumentSnapshot } from '@angular/fire/compat/firestore'; // Import AngularFirestore
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {
  constructor(private firestore: AngularFirestore) {} // Inject AngularFirestore


  async createCallDocument(): Promise<any> {
    console.log("createCallDocument called.");
    return await this.firestore.collection('calls').add({});
  }

  async addOfferCandidate(callDocRef: firebase.firestore.DocumentReference, candidate: RTCIceCandidate): Promise<void> {
    await callDocRef.collection('offerCandidates').add(candidate.toJSON());
  }

  // async addAnswerCandidate(callDocRef: firebase.firestore.DocumentReference, candidate: RTCIceCandidate): Promise<void> {
  //   await callDocRef.collection('answerCandidates').add(candidate.toJSON());
  // }

  async addAnswerCandidate(callDocRef: AngularFirestoreDocument<any>, candidate: RTCIceCandidate): Promise<void> {
    const nativeDocRef = callDocRef.ref as firebase.firestore.DocumentReference;
    return nativeDocRef.collection('answerCandidates').add(candidate.toJSON()).then(() => {});
  }

  // async getCallDocument(callId: string): Promise<DocumentSnapshot<DocumentData> | undefined> {
  //   const docRef = this.firestore.collection('calls').doc(callId);
  //   const snapshot = await docRef.get().pipe(take(1)).toPromise();
  //   if (snapshot && snapshot.exists) {
  //     return snapshot as DocumentSnapshot<DocumentData>;
  //   }
  //   return undefined;
  // }

  // async getCallDocument(callId: string): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
  //   const snapshot = await this.firestore.collection('calls').doc(callId).get().toPromise();
  //   return snapshot as DocumentSnapshot<DocumentData>; // Cast the type
  // }

  getCallDocument(callId: string): AngularFirestoreDocument<any> {
    return this.firestore.collection('calls').doc(callId);
  }

  async updateCallDocument(callDocRef: firebase.firestore.DocumentReference, data: any): Promise<void> {
    await callDocRef.update(data);
  }
}

export const firebaseConfig = {
  apiKey: "AIzaSyCYcmdrSRMuFPpvTnU55PMg4WjuFX8PZYQ",
  authDomain: "docconnect-ddea5.firebaseapp.com",
  projectId: "docconnect-ddea5",
  storageBucket: "docconnect-ddea5.appspot.com",
  messagingSenderId: "347551372277",
  appId: "1:347551372277:web:7d9856bf795fc23e7546bc",
  measurementId: "G-KZ6E9E57P9"
};