const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  option: {
    type: String,
    required: true
  }
});

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [optionSchema],

    answer: {
      type: Number,
      required: true
    },

    isEnabled: {
        type: Boolean,
        default: true
    },

    explanation:{
      type: String,
      default: ""
    }

}, {
    timestamps: true
});
const quizSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    instructions: {
        type: String,
        required: true
    },

    isEnabled: {
        type: Boolean,
        default: true
    },

    questions: [questionSchema],

    duration :{
      hours : {
        type : Number,
        default: 0
      },

      minutes : {
        type : Number,
        default: 0
      },

      seconds : {
        type : Number,
        default: 0
      }

    }
});

const schemaOptions = { toObject: { virtuals: true }, toJSON: { virtuals: true }, timestamps: true };
const quizSchemaModel = new Schema(quizSchema, schemaOptions);

module.exports = mongoose.model('Quizes', quizSchemaModel, 'quize');

