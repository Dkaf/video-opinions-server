import Review from './../models/review';
import User from './../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';

const adminController = {};

adminController.logIn = (req, res) => {
    const  { password } = req.body;
    User.findOne({'name': 'admin'})
    .then( user => {
        if (password = user.password) {
            let token = jwt.sign(payload, app.get('secret'), {expiresIn: '2h'});
            res.status(201).json({
                success: true,
                token: token
            });
        }
    })
    .catch( err => {
        res.status(500).json({
            success: false,
            err: err
        })
    })
}

adminController.addReview = (req, res) => {
    const { title, thumbnail, review, type } = req.body;
    let newReview = new Review({
        title,
        thumbnail,
        review,
        date: new Date(),
        type
    })

    newReview.save();

}

export default adminController;