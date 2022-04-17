import React from 'react'
import { IconButton } from '@mui/material'
import ImageUploading from 'react-images-uploading'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axios from 'axios'
import { UserContext } from '../../Providers/UserStateProvider'


export default function UploadImage({ imageLink, onChange, width, height }) {
    const { userToken } = React.useContext(UserContext)
    const upload = async (link)=>{
        const dataURI = link[0]["data_url"]
        try {
            const url = await axios.post(`/api/imageBlobUpload?token=${userToken}`,{
                "uri":dataURI
            },{
                headers: { 
                    'Content-Type' : 'application/json' 
                }
            })
            onChange(url.data["uri"])
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <div className="App">
            <ImageUploading
                multiple={false}
                value={imageLink}
                onChange={upload}
                dataURLKey="data_url"
            >
                {({
                    onImageUpload,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <IconButton
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <CloudUploadIcon />
                        </IconButton>
                        {imageLink && <img
                            src={imageLink}
                            alt="favicon"
                            width={width}
                            height={height} />}
                    </div>
                )}
            </ImageUploading>
        </div>
    )
}
