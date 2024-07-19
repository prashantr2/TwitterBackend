import { UserRepository } from "../repositories/index.js";

export default class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }
    
    async createUser(data){
        const user = await this.userRepository.create(data);
        return user;
    }
}