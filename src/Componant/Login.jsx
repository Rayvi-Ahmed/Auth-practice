
import { Link } from 'react-router-dom';
const Login = () => {

    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const mail = form.mail.value
        const password = form.password.value

        console.log(mail, password)
    }

    return (
        <div className='container mx-auto my-7 '>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='mail' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to="/register">
                            <button className="btn btn-active btn-link">New to auth lab ? please register now !</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;