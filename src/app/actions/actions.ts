'use server'

import * as dynamoose from "dynamoose";
import userSchema from "../schema/user";

const User = dynamoose.model("users", userSchema, {
    create: false,
    waitForActive: false
});

export async function createUser(user: any) {
    console.log(user);
    const newUser = new User({
        steamId: user.steamid,
        userName: user.personaname,
        profileurl: user.profileurl,
        avatar: user.avatarfull,
        balance: 0,
        email: "",
        tradeUrl: "",
    });

    try {
        await newUser.save();
        return newUser.toJSON();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function userExists(sid: string) {
    try {
        const userExists = await User.query("steamId").eq(sid).exec();
        return userExists.toJSON();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

