import React from 'react'
import { Button, Stack, Typography, CircularProgress } from '@mui/material'
import ImageUploading from 'react-images-uploading'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axios from 'axios'
import { UserContext } from '../../Providers/UserStateProvider'


export default function UploadImage({ imageLink, onChange, width, height }) {
    const { userToken } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)
    const upload = async (link) => {
        const dataURI = link[0]["data_url"]
        try {
            setLoading(true)
            const url = await axios.post(`/api/imageBlobUpload?token=${userToken}`, {
                "uri": dataURI
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            onChange(url.data["uri"])
            setLoading(false)
        } catch (e) {
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
                    <Stack sx={{
                        marginTop: 1,
                    }}
                    direction={"row"}
                    spacing={2}
                    >
                        <Button
                            variant="outlined"
                            color={isDragging ? 'info' : 'warning'}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <CloudUploadIcon />
                            <Typography variant="body" marginLeft={1}>
                                Upload or Drag
                            </Typography>
                        </Button>
                        {loading ? <CircularProgress 
                            size={Math.min(40,width,height)}
                        />:imageLink && <img
                            src={imageLink}
                            alt="ico"
                            style={{
                                borderRadius: "50%"
                            }}
                            width={width}
                            height={height} />}
                    </Stack>
                )}
            </ImageUploading>
        </div>
    )
}
