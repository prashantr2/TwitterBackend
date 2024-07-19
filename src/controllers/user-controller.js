import UserService from "../services/user-service.js";

const userService = new UserService();

export async function createUser(req, res) {
    try {
        const response = await userService.createUser(req.body);
        return res.status(201).json({
            success: true,
            msg: "Successfully created a new user",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Something went wrong in user controller",
            data: {},
            err: error
        });
    }
}