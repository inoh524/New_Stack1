const prisma = require("../config/prisma_client");
const bcrypt = require("bcrypt");

// Create
exports.create_user = async (data) => {
  console.log(data);
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return await prisma.userAccount.create({
    data:{
      ...data,
      password: hashedPassword,
    },
  });
};

// Read All
exports.get_users = async () => {
  return await prisma.userAccount.findMany();
};

// Read One
exports.get_user_by_id = async (id) => {
  return await prisma.userAccount.findUnique({
    where: { id },
  });
};

// Update
exports.update_user = async (id, data) => {
  return await prisma.userAccount.update({
    where: { id },
    data,
  });
};

// Delete
exports.delete_user = async (id) => {
  return await prisma.userAccount.delete({
    where: { id },
  });
};