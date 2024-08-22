import User from "../models/Usermodal";



export const signup= async(req,res,next)=>{
    try{
        const {username,email,password,firstname,lastname,color,profileSetup}=req.body;
        if(!email || !password){
            return res.status(400).json({msg:"email and password is required"})
        }
        
        const existing=User.findOne({email});
        if(existing){
            return res.status(400).json({msg:"User already exist"})
            }
            const user=new User.create({username,email,password,firstname,lastname,color,profileSetup});
            
    }
            catch(err){
                console.error(err);
                res.status(500).json({msg:'Error creating user'});
                }

}