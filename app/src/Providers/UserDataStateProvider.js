import React, { useState } from 'react'
import axios from 'axios'
import { UserContext } from './UserStateProvider'
export const UserDataContext = React.createContext({})


const UserDataStateProvider = ({ children }) => {
    const { userToken } = React.useContext(UserContext)
    const [userData, setUserData] = useState({})
    const [website, setWebsite] = useState({})
    const [name, setName] = useState('')
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
        })
    }, [userToken])

    React.useEffect(() => {
        if(Object.keys(userData).length <= 0) return;
        setWebsite(userData.website ? userData.website : {})
        setName(userData.name ? userData.name : {})
        setTagline(userData.tagline ? userData.tagline : [])
        setSocials(userData.socials ? userData.socials : {})
        setAbout(userData.about ? userData.about : {})
        setSkills(userData.skills ? userData.skills : [])
        setResume(userData.resume ? userData.resume : {})
        setProjects(userData.projects ? userData.projects : [])
        setContact(userData.contact ? userData.contact : {})
    }, [userData])

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