import UserService from "../services/user-service.js";

const userService = new UserService();

export async function signupUser(req, res) {
    try {
        const response = await userService.signupUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            msg: "Successfully created a new user",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Something went wrong in user controller",
            data: {},
            err: error
        });
    }
}

export async function loginUser(req, res) {
    try {
        const response = await userService.loginUser({ email: req.body.email, password: req.body.password });
        return res.status(200).json({
            success: true,
            msg: "Successfully logged in the user",
            data: response,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message,
            data: {},
            err: error
        });
    }
}