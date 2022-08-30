import React from 'react'
import {
    Button,
    Stack,
    Typography,
    CircularProgress
} from '@mui/material'
import ImageUploading from 'react-images-uploading'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axios from 'axios'
import {
    UserContext
} from '../../Providers/UserStateProvider'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

export default function UploadImage({
    imageLink,
    onChange,
    width,
    height,
    circular
}) {
    const {
        userToken
    } = React.useContext(UserContext)

    export default function UploadImage({
            imageLink,
            onChange,
            width,
            height,
            circul

            const [loading, setLoading] = React.useState(false)
            const [imageError, setImageError] = React.useState(false)
            React.useEffect(() => {
                setImageError(false)
            }, [imageLink])
            const upload = async (link) => {
                const dataURI = link[0]["data_url"]
                try {
                    setLoading(true)
                    const url = await axios.post(`/api/imageBlobUpload`, {
                        "uri": dataURI
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'token': userToken
                        }
                    })
                    onChange(url.data["uri"])
                    setLoading(false)
                } catch (e) {}
            }
            return ( <
                div className = "App" >
                <
                ImageUploading multiple = {
                    false
                }
                value = {
                    imageLink
                }
                onChange = {
                    upload
                }
                dataURLKey = "data_url" >
                {
                    ({
                        onImageUpload,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <
                        Stack sx = {
                            {
                                marginTop: 1,
                            }
                        }
                        direction = {
                            "row"
                        }
                        spacing = {
                            2
                        } >
                        <
                        Button variant = "outlined"
                        color = {
                            isDragging ? 'info' : 'warning'
                        }
                        onClick = {
                            onImageUpload
                        } {
                            ...dragProps
                        } >
                        <
                        CloudUploadIcon / >
                        <
                        Typography variant = "body"
                        marginLeft = {
                            1
                        } >
                        Upload <
                        /Typography> <
                        /Button> {
                            loading ? < CircularProgress
                            size = {
                                Math.min(40, width, height)
                            }
                            />: imageError? <ReportGmailerrorredOutlinedIcon
                            color = "error"
                            sx = {
                                {
                                    height: 30,
                                    width: 30
                                }
                            }
                            /> : imageLink && <img
                            src = {
                                imageLink
                            }
                            alt = "ico"
                            style = {
                                {
                                    borderRadius: circular ? "50%" : 0
                                }
                            }
                            onError = {
                                () => {
                                    setImageError(true)
                                }
                            }
                            width = {
                                width
                            }
                            height = {
                                height
                            }
                            />} <
                            /Stack>
                        )
                    } <
                    /ImageUploading> <
                    /div>

                )
            }
            
