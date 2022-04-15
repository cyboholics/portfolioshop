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
                required: true,
                type: String,
            },
            faviconUrl: {
                required: true,
                type: String,
            },
        },
        name: {
            required: true,
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
                required: true,
                type: String,
            },
            facebook: {
                required: true,
                type: String,
            },
            linkedin: {
                required: true,
                type: String,
            },
            github: {
                required: true,
                type: String,
            },
            instagram: {
                required: true,
                type: String,
            },
        },
        about: {
            heading: {
                required: true,
                type: String,
            },
            dateOfBirth: {
                required: true,
                type: Date
            },
            age: {
                required: true,
                type: Number,
                default: 0
            },
            city: {
                required: true,
                type: String,
            },
            phone: {
                required: true,
                type: String,
            },
            email: {
                required: true,
                type: String,
            },
            summary: {
                required: true,
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
                required: true,
                type: String,
            },
            education: [{
                title: {
                    required: true,
                    type: String
                },
                period: {
                    required: true,
                    type: String
                },
                institution: {
                    required: true,
                    type: String
                },
                marks: {
                    required: true,
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
            imageUrl: {
                required: true,
                type: String
            },
            link: {
                required: true,
                type: String
            },
            title: {
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
                required: true,
                type: String
            },
            phone: {
                required: true,
                type: String
            },
            address: {
                required: true,
                type: String
            }
        }
    },
})

dataModel.plugin(findOrCreate)

module.exports = mongoose.model('Userdata', dataModel)