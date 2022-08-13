import React from 'react'
import { Button, Stack, Typography, CircularProgress } from '@mui/material'
import ImageUploading from 'react-images-uploading'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axios from 'axios'
import { UserContext } from '../../Providers/UserStateProvider'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Box } from '@mui/system'

export default function UploadImage({ imageLink, onChange, width, height, circular }) {
    // For testing on local server
    // const [images, setImages] = React.useState([]);
    // const onChanged = (imageList, addUpdateIndex) => {
    //     console.log(imageList, addUpdateIndex);
    //     setImages(imageList);
    // };



    const { userToken } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)
    const [imageError, setImageError] = React.useState(false)
    React.useEffect(()=>{
        setImageError(false)
    },[imageLink])
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
        } catch (e) {
        }
    }
    return (
        <div className="App">
            <ImageUploading
                imageList
                multiple={false}
                value={imageLink} //use value={images}
                onChange={upload} //use onChange={onChanged}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <Box
                        sx={{
                            width:"230px",
                            padding: 4,
                            marginX:"auto",
                            marginY:20,
                            boxShadow: 1,
                            borderRadius:"16px",
                            alignItems:"center"
                        }}
                        >
                        <Typography variant="body1" align="center" marginBottom={2} sx={{fontWeight:500}}>
                            Upload Image
                        </Typography>
                        <Stack 
                        justifyContent="center"
                        direction={"column"}
                        spacing={2}
                        >
                            <Button
                                variant="outlined"
                                color={isDragging ? 'info' : 'warning'}
                                sx={{
                                    padding:10,
                                    border:"1px dashed gray",
                                    borderRadius:"16px"
                            }}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                                <CloudUploadIcon />
                                <Typography variant="body1" marginLeft={1}>
                                    Upload
                                </Typography>
                            </Button>
                            {loading ? <CircularProgress 
                                size={Math.min(40,width,height)}
                                />: imageError? <ReportGmailerrorredOutlinedIcon
                                color="error"
                                sx={{
                                    height: 30,
                                    width: 30
                                }}
                            /> : 
                        // Earlier it was

                        // imageLink && <img
                        //     src={imageLink}
                        //     alt="ico"
                        //     style={{
                        //         borderRadius: circular ? "50%" : 0
                        //     }}
                        //     onError={()=>{
                        //         setImageError(true)
                        //     }}
                        //     width={width}
                        //     height={height} />}

                            // Updatad code below
                            <>
                            {imageList.map((image, index) => (
                            <Box marginTop={2} key={index}
                            sx={{
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"center",
                                paddingY:"2px",
                                gap:"8px",
                                borderRadius:"4px"
                            }}>
                                <img 
                                src={imageLink} //use src={image['data_url]}
                                alt="img" 
                                width="150px" height="100px"
                                />
                                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"60px"}}>
                                    <Button variant="outlined" style={{maxWidth:"10px", maxHeight:"20px", fontSize:"10px"}} onClick={() => onImageUpdate(index)}>Update</Button>
                                    <Button variant="outlined" style={{maxWidth:"10px", maxHeight:"20px", fontSize:"10px"}} onClick={() => onImageRemove(index)}>Remove</Button>
                                </Box>
                            </Box>
                            ))}
                            </>
                            }
                        </Stack>
                    </Box>
                )}
            </ImageUploading>
        </div>
    )
}
