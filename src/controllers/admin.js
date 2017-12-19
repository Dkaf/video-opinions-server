import app from './../app';
import Review from './../models/review';
import User from './../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';

const adminController = {};

//POST Login
adminController.logIn = (req, res) => {
    const  { password } = req.body;
    console.log("login attempt made");
    User.findOne({'name': 'admin'})
    .then( user => {
        if (bcrypt.compareSync(password, user.password)) {
            console.log("passwords match");
            const payload = {
                name: user.name
            };
            let token = jwt.sign(payload, app.get('secret'), {expiresIn: '2h'});
            res.status(201).json({
                success: true,
                token: token
            });
        }
        else {
            console.log("passwords don't match");
            res.status(404).json({
                success: false,
                message: "password does not match"
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
    const { title, thumbnail, reviewText, type } = req.body;
    let today = new Date();
    let newReview = new Review({
        title,
        thumbnail,
        reviewText,
        date: today.toLocaleDateString(),
        type
    })

    newReview.save()
    .then( review => {
        res.status(200).json({
            success: true,
            review
        })
    })
    .catch( err => {
        res.status(500).json({
            success: false,
            err
        })
    })

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

adminController.changePassword = (req, res) => {
    const { password } = req.body;
    const hash = bcrypt.hashSync(password)
    User.findOneAndUpdate({'name': 'admin'}, {'password': hash})
    .then( data => {
        res.status(200).json({
            success: true,
            message: 'password changed'
        })
    })
}

export default adminController;