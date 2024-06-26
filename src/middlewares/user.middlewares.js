export default (schema)=>{
    return async(req,res,next)=>{
        try{
            await schema.validateAsync(req.body);
            next();
        }catch(err){
            res.status(400).json({error: err.message});
        }
    }
}