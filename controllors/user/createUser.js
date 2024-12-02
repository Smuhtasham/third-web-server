const User = require("../../schema/userSchema");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.create({name:data.name, password:data.password, })
    await user.save()
  } catch (error) {}
};
module.exports = createUser;