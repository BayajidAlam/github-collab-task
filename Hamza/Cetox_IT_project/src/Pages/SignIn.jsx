import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";


const SignIn = () => {
    const auth=getAuth(app)
    const handleSignInUsers = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        signInWithEmailAndPassword(auth,email,password)
        .then(response=>{
            const user= response.user
           if( user.email){
            alert("User signin successfull")
           }
        })
       
    }
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div className='bg-gray-100 p-5 my-5 w-1/2 '>
                <h1 className='text-center font-bold text-4xl text-green-700'>Please SignIn</h1>
                <form onSubmit={handleSignInUsers}>
                    <label className='font-semibold'>Email</label>
                    <input className='px-5 py-2 w-full my-2' required type="email" placeholder='Enter your Email Here' name="email" id="" />
                    <label className='font-semibold'>Password</label>
                    <input className='px-5 py-2 w-full my-2' required type="password" placeholder='Enter your Password Here' name="password" id="" />
                    <input className='w-full bg-green-700 text-white font-semibold rounded-lg py-1 mt-2' type="submit" value="SignIn" />
                </form>
            </div>

        </div>
    );
};

export default SignIn;