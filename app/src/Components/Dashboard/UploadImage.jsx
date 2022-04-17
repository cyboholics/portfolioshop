import React from 'react'
import { IconButton } from '@mui/material'
import ImageUploading from 'react-images-uploading'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function UploadImage({ imageLink, onChange, width, height }) {

    return (
        <div className="App">
            <ImageUploading
                multiple={false}
                value={imageLink}
                onChange={onChange}
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
