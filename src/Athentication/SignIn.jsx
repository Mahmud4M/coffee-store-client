import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";



const SignIn = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        // Login From AuthProvider
        signIn(email, password)
            .then(result => {
                console.log(result.user)

                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                // Update User
                fetch('https://coffe-store-server-lilac.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <>
            <div className="bg-gray-200 p-5 rounded-xl">
                <div className="text-lg md:text-3xl lg:text-3xl text-black font-semibold text-center rounded-xl">
                    <h1>Login Your Account</h1>
                    <h1>_______________</h1>
                </div>
                <div className="border-solid"></div>

                <div>
                    <div className="hero-content">
                        <div className="w-[600px] lg:w-2/4 lg:ml-[11rem]">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="Email" className="input input-bordered bg-gray-300 border-none w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input
                                        name="password"
                                        type="text"
                                        placeholder="Password"
                                        className="input input-bordered"
                                        required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="text-lg">
                                    <h1>Don't Have an Account Please <Link to='/signup' className="text-green-400">Register</Link></h1>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignIn</button>
                                </div>
                            </form>
                            <div className="mt-3 mb-3">
                                <h1 className="text-xl text-center">Continue With</h1>
                                <p className="text-center">_____________________________________________</p>
                                <div className="flex gap-3 items-center mt-4 text-center w-[40px] lg:w-2/5 lg:mx-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;