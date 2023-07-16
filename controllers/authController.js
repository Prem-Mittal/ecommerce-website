import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
export const registerController=async(req,res)=>{
    try{
     const {name,email,password,phone,address}   =req.body  // is using object destructuring to extract specific properties from the req.body object.
     if(!name){
        return res.send({error:'Name is Required'})
     }
     if(!email){
        return res.send({error:'Email is Required'})
     }
     if(!password){
        return res.send({error:'Password is Required'})
     }
     if(!phone){
        return res.send({error:'Phone No is Required'})
     }
     if(!address){
        return res.send({error:'Address is Required'})
     }
     const existinguser=await userModel.findOne({ email });//The object { email } is an example of shorthand property notation in JavaScript, introduced in ES6. When the property key and variable name are the same, you can omit the explicit : value part, and JavaScript will interpret it as { email: email }.

     if(existinguser)
     {
        return res.status(200).send({
            success:true,
            message:'Already Register please login',
        })
     }

     const hashedPassword=await hashPassword(password)

     const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();//This line creates a new instance of the userModel (assuming it's a model or schema representing a user entity) and sets the corresponding properties (name, email, phone, address, and password). The password property is assigned the previously generated hashed password (hashedPassword). Then, the save() method is called to save the user object to the database. This operation is awaited, indicating that it may be asynchronous. The resulting user object is assigned to the user variable.
     res.status(201).send({
        success:true,
        message:'User Register Successfully',
        user,
    })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }
};
 