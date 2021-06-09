import React, { useState } from "react"
import { useSelector} from "react-redux"
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'


const Profile = () => {
  const user = useSelector(state => state.session.user)
  // const _feeds = useSelector(state=> state.session.user.feeds)
  const [isLoading, setIsLoading] = useState(true)
  return(
    <>
        <ProfileDrawer setIsLoading={setIsLoading} />
      <h1 className="header_one">
        {`Welcome back ${user?.username}, here's what you missed.`}
      </h1>
    </>
  )
}

export default Profile
