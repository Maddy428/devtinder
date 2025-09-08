const express = require('express');

const app = express();

const { adminAuth, userAuth } = require("./middlerwares/auth.js")

// app.get("/users",(req,res)=>{
//     console.log(req.query);
//     res.send({firstName:"Madan",lastName: "Reddy"})
// })

// app.get("/users/:userid/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Madan",lastName: "Reddy"})
// })

// app.get("/users/:id",(req,res)=>{
//     console.log(req.params);
//     res.send({firstName:"Madan",lastName: "Reddy"})
// })

// app.post("/users",(req,res)=>{
//     // Save data into DB 
//     res.send("Data saved successfully!!!")
// })

// app.patch("/users",(req,res)=>{
//     // Save data into DB 
//     res.send("Data updated successfully!!!")
// })

// app.delete("/users",(req,res)=>{
//     // Save data into DB 
//     res.send("Data delted successfully!!!")
// })

// app.get("/ab*cd",(req,res)=>{
//     res.send({firstName:"Madan",lastName: "Reddy"})
// })

// app.use('/hello',(req,res)=>{
//     res.send("testing test request handlers !!!! comingS")
// })
            //-----Routing---------
// app.use("/user",(req,res,next)=>{
//     console.log("handleing route handler 1!!!!");
//     //  res.send("1st Route handles Response !!!!!")
//     next();
// },
// (req,res,next)=>{
//     console.log("handleing route handler 2!!!!");
//     // res.send("2nd Route handles Response !!!!!");
//      next();
// },
// (req,res,next)=>{
//     console.log("handleing route handler 3!!!!");
//     res.send("3rd Route handles Response !!!!!");
// }
// )

        //--- middleware -----------

    // app.use("/",(req,res,next)=>{
    //     console.log("Middleware will executes every time ?");
    //    // res.send("Handling / route")
    //    next();
    // })

    // app.get("/users",(req,res,next)=>{
    //     console.log("Handling /users routes");
    //     // res.send("Handling /users route")
    //     next();
    // },
    // (req,res)=>{
    //     console.log("Handling /users routes 1");
    //     res.send("1st Handling /users route")
    // }
    // )

    // app.use("/admin",adminAuth);
    // app.get("/admin/getAllData",(req,res)=>{
    //         res.send("Getting all admin data");        
    // })

    // app.post("/admin/getAllData",(req,res)=>{
    //         res.send("post admin all data")
    // })

    // app.get("/user",userAuth,(req,res)=>{
    //     res.send("User Data is getting ")
    // })
    // app.post("/user",(req,res)=>{
    //     res.send("post Data is getting ")
    // })
    // ------ Error Handlers------

        app.use("/",(err,req,res,next)=>{
        if(err){
            res.status(500).send("Something went wrong");
        }
        
    })

    app.get("/admin/getData",(req,res)=>{
        // try{

        throw new Error("qwerty")
        res.send("admin data is getting");
        // }catch(err){
        //     res.status(500).send("catch the error Something went wrong")
        // }

    })
    app.use("/",(err,req,res,next)=>{
        if(err){
            res.status(500).send("Something went wrong");
        }
        
    })

app.listen(7777, ()=>{
    console.log("port is listening 7777.....")
})