import React from 'react'
import { TicketContext } from './../../Providers/TicketStateProvider'
import Comment from './TicketComponents/Comment'
import Message from './TicketComponents/Message'
import Status from './TicketComponents/Status'
import { Box, ListItem, Modal} from '@mui/material'
import { withStyles } from '@mui/styles'
import { FixedSizeList } from 'react-window'

const styles = (theme) => ({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        backgroundColor: 'white',
        border: '0px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
        padding: 25,
    }
})

const TicketModal = (props) => {
    const { classes } = props
    const { status, setStatus, thread, setThread } = React.useContext(TicketContext);
    
    const renderRow = (props) => {
        const { index, style } = props;
        return (
            <ListItem style={style} key={index} component="div" disablePadding>
               <Message key={index} message={thread[index]} />
            </ListItem>
        );
    }
    return (
        <>
            <Modal
                {...props}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <Status status={status} setStatus={setStatus}/>
                    {/* List of preious messages */}
                    <FixedSizeList
                        height={300}
                        width={'100%'}
                        itemSize={100}
                        itemCount={thread?.length}
                        overscanCount={5}
                    >
                        {renderRow}
                    </FixedSizeList>
                    {/* New Comment */}
                    <Comment />
                </Box>
            </Modal>
        </>
    )
}

export default withStyles(styles)(TicketModal)