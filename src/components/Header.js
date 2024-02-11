import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { addUser} from '../utils/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid, email, displayName, photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe()
  }, [])
  return (
    <>
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className="w-44" src={LOGO} alt="logo" />
    
    {
      user && (
        <div className='flex p-2'>
      <img className="w-12 h-12 rounded-[50%]" alt="usericon" src={user?.photoURL}/>
      <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
    </div>
      )
    }
    </div>
    </>
  )
}

export default Header
