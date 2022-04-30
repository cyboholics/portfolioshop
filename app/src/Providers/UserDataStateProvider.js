import React, { useState } from "react"
import axios from "axios"
import { UserContext } from "./UserStateProvider"
export const UserDataContext = React.createContext({})

const UserDataStateProvider = ({ children }) => {
    const { userToken } = React.useContext(UserContext)
    const [userData, setUserData] = useState({})
    const [website, setWebsite] = useState({})
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState([])
    const [socials, setSocials] = useState({})
    const [about, setAbout] = useState({})
    const [skills, setSkills] = useState([])
    const [resume, setResume] = useState({})
    const [projects, setProjects] = useState([])
    const [contact, setContact] = useState({})
    const [summary, setSummary] = useState('')
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    const [por, setPor] = useState([])
    const [awards, setAwards] = useState([])
    const [publications, setPublications] = useState([])
    const [cocurricular, setCocurricular] = useState([])

    const saveUserData = async () => {
        const data = JSON.stringify({
            website: website,
            name: name,
            tagline: tagline,
            socials: socials,
            about: about,
            skills: skills,
            resume: {
                summary: summary,
                education: education,
                experience: experience,
                por: por,
                awards: awards,
                publications: publications,
                cocurricular: cocurricular,
            },
            projects: projects,
            contact: contact
        })
        const config = {
            method: 'put',
            url: `/api/userDataUpdate`,
            headers: { 
                'Content-Type': 'application/json',
                'token': userToken
            },
            data: data
        }
        try{
            const res = await axios(config)
            alert(JSON.stringify(res.data))
            return true
        }catch(err){
            alert(err)
            return false
        }
    }

    React.useEffect(() => {
        axios.get(`/api/userDataRead`,{
            headers:{
                token: userToken
            }
        }).then(res => {
            setUserData(res?.data?.doc?.templateData || {})
        }).catch((err) => {
            console.log(err)
        })
    }, [userToken])

    React.useEffect(() => {
        if (userData && Object.keys(userData).length <= 0) return;
        setWebsite(userData.website ? userData.website : {})
        setName(userData.name ? userData.name : "")
        setTagline(userData.tagline ? userData.tagline : [])
        setSocials(userData.socials ? userData.socials : {})
        setAbout(userData.about ? userData.about : {})
        setSkills(userData.skills ? userData.skills : [])
        setResume(userData.resume ? userData.resume : {})
        setProjects(userData.projects ? userData.projects : [])
        setContact(userData.contact ? userData.contact : {})
        // Resume section states setters
        setSummary(userData.resume.summary ? userData.resume.summary : "")
        setEducation(userData.resume.education ? userData.resume.education : [])
        setExperience(userData.resume.experience ? userData.resume.experience : [])
        setPor(userData.resume.por ? userData.resume.por : [])
        setAwards(userData.resume.awards ? userData.resume.awards : [])
        setPublications(userData.resume.publications ? userData.resume.publications : [])
        setCocurricular(userData.resume.cocurricular ? userData.resume.cocurricular : [])

    }, [userData])

    return (
        <UserDataContext.Provider value={{
            saveUserData,
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
            summary,
            education,
            experience,
            por,
            awards,
            publications,
            cocurricular,
            setWebsite,
            setName,
            setTagline,
            setSocials,
            setAbout,
            setSkills,
            setResume,
            setProjects,
            setContact,
            setSummary,
            setEducation,
            setExperience,
            setPor,
            setAwards,
            setPublications,
            setCocurricular
        }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataStateProvider