import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { addUser} from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <>
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between '>
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    
    {
      user && (
        <div className='flex justify-between p-2'>
          {
            showGptSearch && (
              <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))
            }
          </select>
            )
          }
          
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
      <img className="hidden md:block w-12 h-12 rounded-[50%]" alt="usericon" src={user?.photoURL}/>
      <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
    </div>
      )
    }
    </div>
    </>
  )
}

export default Header
