const adminAuth = (req,res,next)=>{
       const token = 'xyz';
        const isAdminAuth = (token === 'xyz');
        if(!isAdminAuth){
             res.status(401).send("from middleware Unauthorized token please check it");
        }
        else{
            next();
        }
    }

const userAuth = (req,res,next)=>{
    console.log("user auth middleware")
       const token = 'xyz';
        const isAdminAuth = (token === 'xyz');
        if(!isAdminAuth){
             res.status(401).send("from middleware Unauthorized token please check it");
        }else{
            next();
        }
        
    }
    module.exports = {adminAuth,userAuth}