import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {useAlert} from 'react-alert'
import {useMessageStore} from '../../StoreProvider'

const Alert = observer(() => {
    const alert = useAlert();
    const {message} = useMessageStore();

    useEffect(() => {
        if(message.type){
            alert[message.type](message.txt);
        }
    })

    return <React.Fragment />
})

export default Alert
