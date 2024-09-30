import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";

export const setItem = async (id, item) => {
	
		if (item.image instanceof File) {
			const path = `images/${item.image.name}`;
			const imageRef = ref(storage, path);
			try {
				await uploadBytes(imageRef, item.image);
				const downloadUrl = await getDownloadURL(imageRef);
			item.image = downloadUrl;
			item.imagePath = path;
		} catch (error) {
			console.error("Erreur lors de l'ajout de l'item:", error);
			throw error;
		}		
	}



		const docRef = doc(db, "items", id);
		await setDoc(docRef, item);
	
};
