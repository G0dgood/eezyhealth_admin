import axios from "axios";
import createHttpService from "../../helpers/HttpService";
import { baseUrl } from "../../shared/baseUrl";  
import DataService from "./dataService";
 
 
const dataService = DataService();
 

 
// Login user  
const login = async () => { 
    // @ts-ignore  
    const userInfo = await JSON.parse(localStorage.getItem("eezy-user-info")); 
  return userInfo
}
  
 
 
  // logout  
const logout = async () => { 
  localStorage.removeItem('eezy-user-info')
   return true
};


 
  

const authService = { 
  logout,
  login,   
}

export default authService
 