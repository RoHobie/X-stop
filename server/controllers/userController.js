import validator from 'validator';
const loginUser = async (req, res) => {

};

const registerUser = async (req, res) => {
    
    try{
        const { username, email, password } = req.body;
        //checking if user exists
        const existingUser = await userModel.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }

        //validation
        if(!validator.isEmail(email)){
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if(!validator.isStrongPassword(password, {
            minLength: 8,
        })){
            return res.status(400).json({ message: 'Password is not strong enough' });
        }
    } catch (error) {

    }
};

const adminLogin = async (req, res) => {

};

export { loginUser, registerUser, adminLogin };