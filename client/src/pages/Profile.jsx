import { useSelector } from "react-redux"

const Profile = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold my-7 text-center'>Profile</h1>
      <form className="flex flex-col gap-3">
        <img src={currentUser.user.avatar} alt='profile-image' className="h-24 w-24 object-cover rounded-full cursor-pointer self-center " />
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg" />
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg" />
        <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg" />
        <button className="bg-gray-700 text-white p-3 uppercase hover:opacity-95 disabled:opacity-80 rounded-full">Update</button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-700 cursor-pointer">DeleteAccount</span>
        <span className="text-red-700 cursor-pointer">SignOut</span>
      </div>
    </div>
  )
}

export default Profile