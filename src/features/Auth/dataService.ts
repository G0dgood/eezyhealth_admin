 

 
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { tokenKey } from '../../components/Options';

const DataService = () => {
 
  
   
  // };
  const setToken = (token: any) => { 
    // Encrypt 
    const hashedToken = CryptoJS.AES.encrypt(token, `${process.env.REACT_APP_ENCRIPTION_SECRET_KEY}`).toString();
    localStorage.setItem(tokenKey, hashedToken);
};

const getToken = () => {
    const token = localStorage.getItem(tokenKey) || "";
    // Decrypt
    if (token) {
        const bytes = CryptoJS.AES.decrypt(token, `${process.env.REACT_APP_ENCRIPTION_SECRET_KEY}`);
      const originalToken = bytes.toString(CryptoJS.enc.Utf8);
        axios.defaults.headers.common['Authorization'] = `Bearer ${originalToken}`;   
        return originalToken;
    } else {
        return null; // Handle case where token is not found in localStorage
    }
};

 

  const clearData = () => {
    localStorage.removeItem(tokenKey); 
  };

 
  return {
    setToken,
    getToken, 
    clearData
  };
};

export default DataService;

