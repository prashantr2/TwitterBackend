import LikeService from '../services/like-service.js'

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);    
        return res.status(200).json({
            sucess: true,
            data: response,
            err: {},
            message: "Successfully toggled like"
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