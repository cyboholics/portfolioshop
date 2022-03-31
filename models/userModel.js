const mongoose = require("mongoose")
const findOrCreate = require("mongoose-findorcreate")
const dataModel = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    templateData: {
        website: {
            title: {
                type: String,
            },
            faviconUrl: {
                type: String,
            },
        },
        name: {
            type: String,
        },
        tagline: [
            {
                type: String,
            },
        ],
        socials: {
            twitter: {
                type: String,
            },
            facebook: {
                type: String,
            },
            linkedin: {
                type: String,
            },
            github: {
                type: String,
            },
            instagram: {
                type: String,
            },
        },
        about: {
            heading: {
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
            },
            phone: {
                type: String,
            },
            email: {
                type: String,
            },
            summary: {
                type: String,
            }
        },
        skills: [{
            skill: {
                type: String,
            },
            value: {
                type: Number
            }
        }],
        resume: {
            summary: {
                type: String,
            },
            education: [{
                title: {
                    type: String
                },
                period: {
                    type: String
                },
                institution: {
                    type: String
                },
                marks: {
                    type: String
                }
            }],
            experience: [{
                title: {
                    type: String
                },
                period: {
                    type: String
                },
                company: {
                    type: String
                },
                description: [{
                    type: String
                }]
            }],
            por: [{
                title: {
                    type: String
                },
                period: {
                    type: String
                },
                organisation: {
                    type: String
                },
                description: [{
                    type: String
                }]
            }],
            awards: [{
                title: {
                    type: String
                },
                period: {
                    type: String
                },
                issuer: {
                    type: String
                },
                description: [{
                    type: String
                }]
            }],
            publications: [{
                title: {
                    type: String
                },
                gist: {
                    type: String
                },
                period: {
                    type: String
                }
            }],
            cocurricular: [{
                title: {
                    type: String
                },
                description: {
                    type: String
                }
            }],
        },
        projects: [{
            type: {
                type: String
            },
            imageUrl: {
                type: String
            },
            link: {
                type: String
            },
            title: {
                type: String
            },
            description: {
                type: String
            }
        }],
        contact: {
            email: {
                type: String
            },
            phone: {
                type: String
            },
            address: {
                type: String
            }
        }
    },
})

dataModel.plugin(findOrCreate)

module.exports = mongoose.model('Userdata', dataModel)