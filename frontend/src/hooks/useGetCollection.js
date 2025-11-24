import { useQuery } from '@tanstack/react-query';
import { db } from '../Firebase'; 
import { collection, getDocs } from "firebase/firestore"; 

const fetchCollection = async () => {
    
    const productsCollectionRef = collection(db, "products");

    const data = await getDocs(productsCollectionRef);

    const products = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,    
    }));

    return products;
};

export const useGetCollection = () => {
    return useQuery({
        queryKey: ['collection'], 
        queryFn: fetchCollection, 
        staleTime: 1000 * 60 * 5, 
    });
};