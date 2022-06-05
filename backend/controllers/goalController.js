//@desc Get Goals
//@route Get /api/goals
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

//@desc Set Goal
//@route Post /api/goals
//@access Private
const setGoal = (req, res) => {

    if(req.body.text) {
        res.status(400)
        throw new Error('Please add a text feild')
    }
    res.status(200).json({message: 'Set goals'})
}

//@desc Update Goal
//@route Put /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

//@desc Delete Goal
//@route Delete /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports ={
    getGoals, setGoal, updateGoal, deleteGoal
}