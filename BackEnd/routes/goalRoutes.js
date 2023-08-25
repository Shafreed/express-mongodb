const express = require ('express')
const router=express.Router()
const {getGoals,setGoals,putGolas,deleteGoals} =require('../controllers/goalsController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(putGolas).delete(deleteGoals)




module.exports = router