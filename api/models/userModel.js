const mongoose = require("mongoose")
const findOrCreate = require("mongoose-findorcreate")
const dataModel = mongoose.Schema({
    username: {
        type: String,
        default: ""
    },
    templateData: {
        website: {
            title: {
                default: "",
                type: String
            },
            faviconUrl: {
                default: "",
                type: String,
            },
            heroBG: {
                default: "",
                type: String
            }
        },
        name: {
            default: "",
            type: String,
        },
        tagline: [
            {
                required: true,
                type: String,
            },
        ],
        socials: {
            twitter: {
                type: String,
                default: ""
            },
            facebook: {
                type: String,
                default: ""
            },
            linkedin: {
                type: String,
                default: ""
            },
            github: {
                type: String,
                default: ""
            },
            instagram: {
                type: String,
                default: ""
            },
        },
        about: {
            image: {
                default: "",
                type: String
            },
            heading: {
                default: "",
                type: String,
            },
            dateOfBirth: {
                type: Date
            },
            age: {
                type: Number,
                default: 0
            },
            city: {
                type: String,
                default: ""
            },
            phone: {
                type: String,
                default: ""
            },
            email: {
                default: "",
                type: String
            },
            summary: {
                default: "",
                type: String,
            }
        },
        skills: [{
            skill: {
                required: true,
                type: String,
            },
            value: {
                required: true,
                type: Number
            }
        }],
        resume: {
            summary: {
                default: "",
                type: String,
            },
            education: [{
                title: {
                    default: "",
                    type: String
                },
                period: {
                    default: "",
                    type: String
                },
                institution: {
                    default: "",
                    type: String
                },
                marks: {
                    default: "",
                    type: String
                }
            }],
            experience: [{
                title: {
                    required: true,
                    type: String
                },
                period: {
                    required: true,
                    type: String
                },
                company: {
                    required: true,
                    type: String
                },
                description: [{
                    required: true,
                    type: String
                }]
            }],
            por: [{
                title: {
                    required: true,
                    type: String
                },
                period: {
                    required: true,
                    type: String
                },
                organisation: {
                    required: true,
                    type: String
                },
                description: [{
                    required: true,
                    type: String
                }]
            }],
            awards: [{
                title: {
                    required: true,
                    type: String
                },
                period: {
                    required: true,
                    type: String
                },
                issuer: {
                    required: true,
                    type: String
                },
                description: [{
                    required: true,
                    type: String
                }]
            }],
            publications: [{
                title: {
                    required: true,
                    type: String
                },
                gist: {
                    required: true,
                    type: String
                },
                period: {
                    required: true,
                    type: String
                }
            }],
            cocurricular: [{
                title: {
                    required: true,
                    type: String
                },
                description: {
                    required: true,
                    type: String
                }
            }],
        },
        projects: [{
            type: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            },
            imageUrl: {
                required: true,
                type: String
            },
            link: {
                required: true,
                type: String
            },
            description: {
                required: true,
                type: String
            }
        }],
        contact: {
            email: {
                default: "",
                type: String
            },
            phone: {
                default: "",
                type: String
            },
            address: {
                default: "",
                type: String
            }
        }
    },
})

dataModel.plugin(findOrCreate)

module.exports = mongoose.model("Userdata", dataModel)