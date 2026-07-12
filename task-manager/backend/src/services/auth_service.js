const prisma = require("../config/prisma_client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Read one and then login
exports.login_user = async (email, password) => {
  const user = await prisma.userAccount.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) { //if not match, throw error
    throw new Error("Invalid email or password");
  } 
    const token = jwt.sign( //if match, generate token and return user data
  {
    id: user.id,
    email: user.email,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

return {
  token,
  user: {
    id: user.id,
    username: user.username,
    email: user.email,
  },
};
};

