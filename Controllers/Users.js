

exports.getUsers = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: "Get Users route"
        });
    } catch (error) {
        console.log(error);
    }

}