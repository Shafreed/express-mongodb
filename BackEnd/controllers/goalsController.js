const asyncHandler=require('express-async-handler')

const getGoals= asyncHandler( (req,res)=>{
    res.status(200).json({message:"get from controller"})
})

const setGoals= asyncHandler( (req,res)=>{
    if(!req.body.text){
    res.status(400)
    throw new Error('please enter text field')   
    };
    res.status(201).json({message:"set from controller"})
})
const putGolas= asyncHandler( (req,res)=>{
    res.status(201).json({message:`put golas controller ${req.params.id}`})
})
const deleteGoals= asyncHandler ((req,res)=>{
    res.status(201).json({message:`put golas controller ${req.params.id}`})
})

module.exports={
    getGoals,setGoals,putGolas,deleteGoals
}
