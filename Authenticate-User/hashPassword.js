const bcrypt = require('bcrypt');

const hashPassword = async () => {
    const password = 'password123';
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`Hashed Password: ${hashedPassword}`);
};

hashPassword();

// Hashed Password:
// $2b$10$vXr58T98iyuOtntVTjxl2OB2n/7sO9fdm2/fmklTfu8KRrIYNM4FG