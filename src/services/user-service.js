import { UserRepository } from "../repositories/index.js";

export default class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }
    
    async signupUser(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;    
        }
    }
}