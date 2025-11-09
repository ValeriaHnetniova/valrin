import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import styles from "./Forms.module.css";

function Forms({
    type = "login",
    title = "LOG IN",
    buttonText = "LOG IN",
    linkText = "REGISTER",
    linkPath = "/register",
    imageSrc = "/img/login.png",
    useMutationHook, 
}) {
    
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const { 
        mutate, 
        isPending, 
        isError,   
        error      
    } = useMutationHook(navigate);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const credentials = type === "register" ? {
            email, 
            password, 
            firstName, 
            lastName 
        } : { 
            email, 
            password 
        };
        
        mutate(credentials);
    };

    return (
        <section className={styles.loginContainer}>
            <div className={styles.loginLeft}>
                <h1 className={styles.loginTitle}>{title}</h1>

                {isError && error && (
                    <div style={{ 
                        backgroundColor: '#fdd', 
                        border: '1px solid #f00', 
                        color: '#a00', 
                        padding: '10px', 
                        borderRadius: '5px', 
                        marginBottom: '15px' 
                    }}>
                        {error.message || "Сталася помилка"}
                    </div>
                )}

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            className={styles.formInput}
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="password"
                            className={styles.formInput}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {type === "register" && (
                        <>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}

                    <button 
                        type="submit" 
                        className={styles.loginButton} 
                        disabled={isPending} 
                    >
                        {isPending ? 'Зачекайте...' : buttonText} 
                    </button>
                    <br />

                    <div className={styles.registerLinkContainer}>
                        <Link to={linkPath} className={styles.registerLink}>
                            {linkText}
                        </Link>
                    </div>
                </form>
            </div>

            <div className={styles.loginRight}>
                <img src={imageSrc} alt={title} />
            </div>
        </section>
    );
}

export default Forms;