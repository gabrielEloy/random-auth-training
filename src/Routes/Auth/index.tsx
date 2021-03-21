import { useState, useContext } from "react";
import AuthWrapper from './AuthStyles';
import BrandLogo from 'assets/BrandLogo';
import Login from 'Routes/Auth/components/Login';
import {ThemeContext, IContextTypes} from 'contexts/themeContext';
import Button from "components/Button";
import Caption from "components/Typography/Captionn";

interface Props {
    
}

const Auth = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const { theme } = useContext(ThemeContext) as IContextTypes;
    
    const handleEmail = (e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const handlePassword = (e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    
    
    const UsedBrandLogo = BrandLogo[theme]
    return (
        <AuthWrapper>
            <div className="auth-container">
            <UsedBrandLogo className="brand-logo"/>
            <Login 
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                email={email} 
                password={password}
            />
            <Button className="auth-action">Login</Button>
            <Caption className="caption">or continue with these social profiles</Caption>
            </div>
        </AuthWrapper>
    )
}

export default Auth
