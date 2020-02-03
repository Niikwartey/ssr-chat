import users from '../../../seed/users.json'

export default (req, res) => {
  res.status(200).json(users)
}