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
    
    async loginUser({ email, password }) {
        try {
            const user = await this.userRepository.findBy({ email });
            if (!user) {
                throw Error("No user found");
            }
            if (!user.comparePassword(password)) {
                throw Error("No user found");
            }
            const token = user.generateJWT();
            return { token };
        } catch (error) {
            throw error;
        } 
    }
}