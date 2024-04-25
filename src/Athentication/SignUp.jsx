import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // Sign From AuthProvider
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, photoUrl, email, password, createdAt };
                fetch('https://coffe-store-server-lilac.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('User Information added in Database Successfully !!')
                        }
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <>
            <div className="bg-gray-200 p-5 rounded-xl">
                <div className="text-lg md:text-3xl lg:text-3xl text-black font-semibold text-center rounded-xl">
                    <h1>Register Your Account</h1>
                    <h1>_______________</h1>
                </div>
                <div>
                    <div className="hero-content">
                        <div className="w-[600px] lg:w-2/4 lg:ml-[11rem]">
                            <form className="card-body" onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered bg-gray-300 border-none w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Photo Url</span>
                                    </label>
                                    <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered bg-gray-300 border-none w-full" required />
                                </div>
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
                                <div className="form-control mt-6">
                                    <button className="btn mx-auto btn-primary bg-black text-white border-none w-full hover:text-black hover:bg-slate-500">SignUp</button>

                                </div>
                                <div className="text-lg">
                                    <h1>Already Have an Account Please <Link to='/signin' className="text-green-400">Login</Link></h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;