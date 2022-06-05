const {User, Thought } = require('../models')
const resolvers = {
    Query: {
        users: async () => {
            return User.find()
            .select('-_v -password')
            .populate('friends')
            .populate('thoughts')
        },
        //get use by username
        user: async (parent, {username}) => {
            return User.findOe({username})
            .select('-_v -password')
            .populate('friends')
            .populate('thoughts')
        },
        thoughts: async (parent, {username}) => {
            const params = username ? { username } : {}
            return Thought.find(params).sort({ createdAt: -1})
        },
        thought: async (parent, {_id}) => {
            return thought.findOne({_id})
        }
    }
}

module.exports = resolvers 