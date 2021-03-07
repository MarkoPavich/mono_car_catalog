import React, {useEffect, useRef} from 'react'
import {observer} from 'mobx-react-lite'
import {useAlert} from 'react-alert'
import {useMessageStore} from '../../StoreProvider'
import {withNamespaces} from 'react-i18next'

const Alert = observer(({t}) => {
    const alert = useAlert();
    const {message, commonErrors, commonConfirmations, types} = useMessageStore();
    const oldMessage = useRef({})

    const commonErrorResponses = {
        userExists: t("commonErrors.userExists"),
        emailExists: t("commonErrors.emailExists"),
        invalidLogin: t("commonErrors.invalidLogin")
    }

    const commonConfirmationResponses = {
        userRegistered: t("commonConfirmations.userRegistered"),
        userLogged: t("commonConfirmations.userLogged")
    }


    useEffect(() => {
        if(oldMessage.current !== message)
        {
            if(message.type in commonErrors){
                alert[types.error](commonErrorResponses[message.type]);
            }
    
            else if(message.type in commonConfirmations){
                alert[types.success](`${commonConfirmationResponses[message.type]} ${message.txt}`)
            }
    
            else if(message.type){
                alert[message.type](message.txt);
            }

            oldMessage.current = message;
        }
    })

    return <React.Fragment />
})

export default withNamespaces()(Alert);