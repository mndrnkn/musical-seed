import React, { FC, ReactNode, useState, useCallback, useEffect, useContext } from 'react';
import classNames from 'classnames';
import GlobalContext from '@/app/GlobalContext';



type Props = {
    children: ReactNode
    hiddenStates?: boolean[]
}

const DemoInfo: React.FC<Props>= ({children, hiddenStates}) => {


    const [showInfo, setShowInfo] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const toggleShowInfo = useCallback(() => {
        if (!isDisabled) {
            setShowInfo(prevShowInfo => !prevShowInfo);
        }
    }, [isDisabled]);


    useEffect(() => {
        if (hiddenStates?.some(state => state === true)) {
            setIsDisabled(true)
          } else {
            setIsDisabled(false)

          }

    }, [hiddenStates, setIsDisabled])
    

    return <div className={classNames('notDefault', 'infoButton', { disabled: isDisabled })}><button onClick={toggleShowInfo} className='notDefault infoButton'>i</button>
    {showInfo && !isDisabled && <div className='details'> {children}</div>}
    <style jsx>{`
       
        .infoButton {
            width: 24px;
            height: 24px;
            border-radius:16px;
        }

        .infoButton.disabled {
            opacity: 0.2
        }

        .details {
            position: absolute;
            width: 400px;
            background: rgba(256,256, 256, 0.9);
            padding: 24px;
            border-radius: 16px;
            margin-top: 8px;
            left: calc(50vw - 200px);
            border: solid 1px var(--color-3);
            box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.3);
            font-weight: 500;
          
        }
    `}</style>
    </div>
}

export default DemoInfo