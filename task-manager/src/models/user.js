const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
});

userSchema.methods.generateAuthToken = async function(){
    const user = this
    console.log('_id', user._id)
    console.log('_id', user._id.toString())
    const token = jwt.sign({ _id: user._id.toString() },'123123123')
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        console.log('Unable to login')
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        console.log('Password is not matched.')
        throw new Error('Unable to login')
    }

    return user
}

userSchema.pre('save', async function(next){
    const user = this
    // db에 기록된 값과 비교해서 변경된 경우 true를, 그렇지 않은 경우 false를 반환하는 함수입니다. user 생성시는 항상 true
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User