import CommentService from '../services/comment-service.js'

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.createComment(
            req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(200).json({
            sucess: true,
            data: response,
            err: {},
            message: "Successfully created comment"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            msg: "Something went wrong",
            err: error
        })
    }
}