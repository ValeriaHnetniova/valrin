import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from '../../../backend/Firebase'; 


const loginUser = async (credentials) => {
    const { email, password } = credentials;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export const useLogin = (navigate) => {
    const queryClient = useQueryClient(); //доступ до кешу
    
    return useMutation({
        mutationFn: loginUser, 
        
        onSuccess: (data) => {            
            queryClient.invalidateQueries({ queryKey: ['collection'] }); //скидаємо кеш
            
            if (navigate) {
                navigate('/');
            }
        },
        
        onError: (error) => {
            console.error('Помилка входу:', error.message);
        },
    });
};