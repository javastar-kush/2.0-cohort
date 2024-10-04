const express = require('express');
const { User, Account } = require('../db')
const jwt = require("jsonwebtoken");
const { JWT_Secret } = require('../config')
const { authMiddleware } = require('../middleware')
const  z = require("zod");
const router = express.Router();


//input validation using zod
const input_val = z.object({
    firstname : z.string(),
    lastname : z.string(),
    username : z.string(),
    password : z.string().min(8)
})

router.post("/signup", async (req,res)=>{
    const body = req.body;

    const {success} = input_val.safeParse(body);
    if(!success){
        return res.status(411).json({
            message:"Incorrect Input"
        })
    }

    const user= await User.findOne({
        username: body.username
    })

    if(user){
        return res.json({
            message:"username alreday exist"
        })
    }

    const dbuser = await User.create(body);

   const  userId = dbuser._id;

    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

   //creating jwt 
    const token = jwt.sign({
        userId
    }, JWT_Secret);

    res.json({
        message : "user created successfully",
        token : token
    })

})


router.post("/signin", async (req,res)=>{
    const body = req.body;

    const user = await User.findOne({
        username: body.username,
        password : body.password
    })

    if(!user){
        return res.json({
            message:"Error while loging in"
        })
    }
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_Secret);

    res.json({
        token : token
    })
})

const update_user = z.object({
    password: z.string().optional(),
    firstname: z.string().optional(),
    lastName: z.string().optional(),
})

router.put("/", authMiddleware, async (req,res)=>{
    const { success } = update_user.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            message : "Error while updating data"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.status(200).json({
        message : "Updated successfully"
    })
})


router.get("/bulk", async(req,res)=>{
    const filter = req.query.filter || "";
    
    const users = await User.find({
        $or:[{
            firstname: {
                "$regex":filter
            }
        },{
            lastName: {
                "$regex":filter
            }
        }]
    })

    res.json({
        user : users.map(user =>({
            username: user.username,
            firstname: user.firstname,
            lastname : user.lastname,
            _id : user._id
        }))
    })
})



module.exports = router;