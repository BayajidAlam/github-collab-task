import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";


const SignUp = () => {
const auth = getAuth(app)
    const handleSignUpUsers = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(response => {
                    const user = response.user;
                    if(user.email){
                        alert("SignUp Successfull")
                    }
                }).catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode,errorMessage);
                })
                form.reset()
        } else {
            alert("Passwort not match")
        }
    }
    return (
        <div className='lg:flex lg:justify-center lg:items-center '>
            <div className='bg-gray-100 p-5 my-5 lg:w-1/2 '>
                <h1 className='text-center font-bold lg:text-4xl text-2xl text-green-700'>Please SignUp Quickly</h1>
                <form onSubmit={handleSignUpUsers}>
                    <label className='font-semibold'>Email</label>
                    <input className='px-5 py-2 w-full my-2' required type="email" placeholder='Enter your Email Here' name="email" id="" />
                    <label className='font-semibold'>Password</label>
                    <input className='px-5 py-2 w-full my-2' required type="password" placeholder='Enter your Password Here' name="password" id="" />
                    <label className='font-semibold'>Confirm Password</label>
                    <input className='px-5 py-2 w-full my-2' required type="password" placeholder='Enter Same Password for confirmation' name="confirmPassword" id="" />
                    <input className='w-full bg-green-700 text-white font-semibold rounded-lg py-1 mt-2' type="submit" value="SignUp" />
                </form>
                <h1 className="text-center font-semibold my-2">Already have an account?   <Link className="text-green-700 font-bold" to={'/signin'}>SignIn</Link></h1>
            </div>

        </div>
    );
};

export default SignUp;