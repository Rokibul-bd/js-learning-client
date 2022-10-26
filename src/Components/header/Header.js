import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar shadow-lg px-28">
                <div className="flex-1">
                    <a href='/' className="normal-case text-xl"> <span className='text-red-500'>Js</span> Learning</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="">
                        <Link className='px-4 text-xl' to="/home">Home</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 text-xl' to="/courses">Courses</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 text-xl' to="/register">Register</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 text-xl' to="/login">Log In</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a href='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;