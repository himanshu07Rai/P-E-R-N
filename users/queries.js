const Pool = require("pg").Pool;

const pool = new Pool({
  user: "<user>",
  host: "localhost",
  database: "<db>",
  password: "<password>",
  port: 5432,
});

const getUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await pool.query(
      `INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *`,
      [name, email]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;
    const updatedUser = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    res.status(200).json(updatedUser.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    res.status(200).json({ "deleted user": deletedUser.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
