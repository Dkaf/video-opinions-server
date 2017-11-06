import app from './../app';
import Review from './../models/review';
import User from './../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';

const adminController = {};

//POST Login
adminController.logIn = (req, res) => {
    const  { password } = req.body;
    User.findOne({'name': 'admin'})
    .then( user => {
        let payload = {
            id: user._id
        };
        if (password == user.password) {
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

//POST Add Review
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

//DELETE Remove Review
adminController.removeReview = (req, res) => {
    const { id } = req.body;
    Review.findOneAndRemove({'_id': id})
    .then( data => {
        res.status(200).json({
            success: true,
            message: 'review removed',
            data: data
        });
    })
    .catch( err => {
        res.status(500).json({
            success: false,
            err: err
        })
    })
}

export default adminController;