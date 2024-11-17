import * as dynamoose from "dynamoose";

const userSchema = new dynamoose.Schema({
    steamId: String,
    userName: String,
    profileUrl: String,
    avatar: String,
    balance: Number,
    email: String,
    tradeUrl: String
}, {
    saveUnknown: false,
    timestamps: true,
});

export default userSchema;