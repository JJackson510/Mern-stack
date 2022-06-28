const asyncHandler = require('express-async-handler')

const goal require('../models/goalModel')

//@desc Get Goals
//@route Get /api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc Set Goal
//@route Post /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text feild')
    }

    const goals = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

//@desc Update Goal
//@route Put /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc Delete Goal
//@route Delete /api/goals/:id
//@access Private;
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports ={
    getGoals, setGoal, updateGoal, deleteGoal
}