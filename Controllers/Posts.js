

exports.getPosts = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: {content: "Hello, this is a test post", author: "lolzone"},

            
        });
    } catch (error) {
        console.log(error);
    }
}