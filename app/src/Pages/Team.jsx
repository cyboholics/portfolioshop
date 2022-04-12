import React from 'react';
import TeamCard from '../Components/Team/TeamCard'
const Team = () => {
    const leads = [{
        imageLink: "https://avatars.githubusercontent.com/u/74463091?v=4",
        name: "Sudip Mondal",
        title: "Tech Lead",
        description: "Organization admin and devops engineer at portfolioshop. Interested in different software domains including Web dev, App dev, Machine Learning, DevOps etc.",
        linkedin: "https://www.linkedin.com/in/sudipmondal2002/",
        github: "https://github.com/sudip-mondal-2002"
    }, {
        imageLink: "https://avatars.githubusercontent.com/u/74752127?v=4",
        name: "Ayush Tiwari",
        title: "Tech Lead",
        description: "Organization admin and backend engineer at portfolioshop. Experienced in enoromous domains of software including App dev, Machine Learning, Web Dev, DevOps etc.",
        linkedin: "https://www.linkedin.com/in/ayush-tiwari26/",
        github: "https://github.com/ayush-tiwari26"
    }]
    return (
        <>
            {leads.map((lead) => {
                return <TeamCard key={lead.github} imageLink={lead.imageLink} name={lead.name} title={lead.title} description={lead.description} linkedin={lead.linkedin} github={lead.github} />
            })}
        </>
    );
}

export default Team;
