const Restaurant = require('./models')
module.exports = {
    index: async(req, res) =>{
        const allRes = await Restaurant.find({})
            .catch(err => console.error("error ->", err))
        res.json(allRes)
    },
    display: async (req, res) => {
        const singleRes = await Restaurant.findById(req.params.id)
            .catch(err => console.error("error ->", err))
        res.json(singleRes)
    },
    create: async (req, res) => {
        const newRes = await Restaurant.create(req.body)
            .catch(err => console.error('error-->', err));
        res.json(newRes)
    },
    update: async (req, res) => {
        const updateRes = await Restaurant.findByIdAndUpdate(req.params.id ,req.body, {runValidators: true})
            .catch(err => console.error('error ->', err));
        res.json(updateRes);
    },
    delete: async (req, res) => {
        const deleteRes = await Restaurant.findByIdAndDelete(req.params.id)
            .catch(err => console.error('error ->', err));
        res.json(deleteRes);
    },
    createReview: async(req, res) => {
        const updateReview = await Restaurant.findByIdAndUpdate(req.params.id, {$push :{reviews:{name : req.body.name, stars: req.body.stars, review:req.body.review}}})
            .catch(err => console.error('error ->', err));
        res.json(updateReview);
    }
    
}