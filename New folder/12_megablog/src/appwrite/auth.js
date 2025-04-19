import {Client, Account, ID} from 'appwrite';
import conf from '../conf/conf.js';

export class  AuthService {
    client = new Client();
    account;

    constructor(){ // when the new object is made then the account is made
        this.client = new Client()
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteprojectid);
        this.account = new Account(this.client); 
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call another method
                this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Error in account logout" , error);
        }
    }
}

const authService = new AuthService();

export default authService;