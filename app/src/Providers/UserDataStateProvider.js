import React, {useState} from 'react'
import axios from 'axios'
import { UserContext } from './UserStateProvider'
export const UserDataContext = React.createContext({})


const UserDataStateProvider = ({ children }) => {
    const { userToken } = React.useContext(UserContext)
    const [userData, setUserData] = useState({})
    const [website, setWebsite] = useState({})
    const [name, setName] = useState({})
    const [tagline, setTagline] = useState([])
    const [socials, setSocials] = useState({})
    const [about, setAbout] = useState({})
    const [skills, setSkills] = useState([])
    const [resume, setResume] = useState({})
    const [projects, setProjects] = useState([])
    const [contact, setContact] = useState({})
    React.useEffect(() => {
        axios.get(`/api/userDataRead?token=${userToken}`).then(res => {
            setUserData(res.data.doc.templateData)
            setWebsite(userData.website)
            setName(userData.name)
            setTagline(userData.tagline)
            setSocials(userData.socials)
            setAbout(userData.about)
            setSkills(userData.skills)
            setResume(userData.resume)
            setProjects(userData.projects)
            setContact(userData.contact)
        })
    }, [userToken])
    return (
        <UserDataContext.Provider value={{
            website,
            name,
            tagline,
            socials,
            about,
            skills,
            resume,
            projects,
            contact,
            userData,
            setWebsite,
            setName,
            setTagline,
            setSocials,
            setAbout,
            setSkills,
            setResume,
            setProjects,
            setContact
        }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataStateProvider