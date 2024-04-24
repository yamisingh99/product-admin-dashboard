import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaSearch,FaShoppingBag,FaSignInAlt,FaUser,FaSignOutAlt} from "react-icons/fa"


function Header() {
    const user = { _id: "abc", role: "admin" };
    const [isOpen,setIsOpen]=useState<boolean>(false);

  return (
    <nav>
        <Link to={"/"}>Home</Link>

        <Link to={"/search"}> <FaSearch/></Link>
        <Link to={"cart"}><FaShoppingBag/></Link>
        {user?._id?(
            <>
            <button onClick={()=>setIsOpen((prev)=>!prev)}>
                <FaUser/>
            </button>
            <dialog open={isOpen}>
                {user.role==="admin"&&(
                    <Link to={"/admin/dashboard"}>Dashboard</Link>
                )}
                <Link to={"/orders"}>Orders</Link>
                <button>
                   <FaSignOutAlt/>
                </button>

            </dialog>
            </>
        ):(
        <Link to={"/login"}><FaSignInAlt/></Link>
        )}
    </nav>
  )
}
export default Header