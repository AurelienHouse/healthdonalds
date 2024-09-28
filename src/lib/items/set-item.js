import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";

export const setItem = async (id, item) => {
	
		if (item.image instanceof File) {
			const path = `images/${item.image.name}`;
			const storageRef = ref(storage, path);
			try {
				await uploadBytes(storageRef, item.image);
				const downloadUrl = await getDownloadURL(storageRef);
			item.image = downloadUrl;
			item.imagePath = path;
		} catch (error) {
			console.error("Erreur lors de l'ajout de l'item:", error);
			throw error;
		}		
	}



		const file = doc(db, "items", id);
		await setDoc(file, item);
	
};
