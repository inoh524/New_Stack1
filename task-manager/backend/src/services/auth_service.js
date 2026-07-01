const prisma = require("../config/prisma_client");

// Read one and then login
exports.login_user = async (email, password) => {
  const user = await prisma.userAccount.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("User not found");
  }
  if (user.password !== password) {
    throw new Error("Invalid password");
  }
  return user;
};

