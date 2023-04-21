import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpl6ftTllvP8aWUcRJDUnDKspiZf2C5Ok",
  authDomain: "filmy-duniya-393a4.firebaseapp.com",
  projectId: "filmy-duniya-393a4",
  storageBucket: "filmy-duniya-393a4.appspot.com",
  messagingSenderId: "366686577071",
  appId: "1:366686577071:web:edb22d8ab7245ec4870f5a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesCollRef = collection(db, "movies");
export const storage = getStorage(app);

export const uplodePhoto = async (pic) => {
  const imageRef = ref(storage, `uplodes/images//${date.now}${pic.name}`);
  const uplodeResult = await uploadBytes(imageRef, pic);
};

export default app;
