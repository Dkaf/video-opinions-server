process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


import chai from 'chai';
import chaiHttp from 'chai-http';

import Review from '../src/models/review';
import app from '../src/index';


const should = chai.should();

chai.use(chaiHttp);

describe('adminController', () => {

  beforeEach((done) => {
    Review.remove({}, (err) => {
      done();
    });
  });
  describe('logIn', () => {

    it('should log in to the admin account', (done) => {

      let password = {password: "test"};

      chai.request(app)
        .post('/admin/login')
        .send(password)
        .end((err,res) =>{
          res.should.have.status(201);
          res.body.success.should.equal(true);
          res.body.should.have.property('token');
          res.body.token.should.be.a('string');
          done();
        });
    });
  });

  describe('addReview', () => {
    it('should add a new review', (done) => {
      let review = {
        title: "Test Review",
        thumbnail: "some.url",
        review: "review content",
        type: "Movie"
      };

      const payload = {
        name: 'test'
    };

    let token = jwt.sign(payload, app.get('secret'), {expiresIn: '15s'});

      chai.request(app)
        .post('/admin/review')
        .set('x-access-token', token)
        .send(review)
        .end((err,res) => {
          res.should.have.status(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('review');
          res.body.review.should.be.a('object');
          done();
        })
    })
  })

  describe('removeReview', () => {
    it('should remove a review', (done) => {

      let review = new Review({
        title: "Test Review",
        thumbnail: "some.url",
        review: "review content",
        date: new Date(),
        type: "Movie"
      });

      const payload = {
        name: 'test'
      };

      let token = jwt.sign(payload, app.get('secret'), {expiresIn: '15s'});
      review.save((err, review) => {
        chai.request(app)
        .delete('/admin/review')
        .set('x-access-token', token)
        .send({"id": review._id})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('message');
          res.body.message.should.be.a('string');
          res.body.message.should.equal('review removed');
          res.body.should.have.property('data');
          done();
        })
      })
    })
  })

});
