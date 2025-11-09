import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { auth } from '../../../backend/Firebase'; 


const registerUser = async (userData) => {
    const { email, password, firstName, lastName } = userData;
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
        displayName: `${firstName} ${lastName}`.trim()
    });

    return user;
};


export const useRegister = (navigate) => {
    return useMutation({
        mutationFn: registerUser, 
        
        onSuccess: (data) => {
            console.log('Успішна реєстрація', data);
            if (navigate) {
                navigate('/login'); 
            }
        },
        
        onError: (error) => {
            console.error('Помилка реєстрації:', error.message);
        },
    });
};