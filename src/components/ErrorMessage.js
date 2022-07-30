import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Message = ({ children }) => {
    const navigate = useNavigate()
    return (
        <div className="center-xy fd-col">
            <div className="message">Greška na serveru. Pokušajte ponovo.</div>
            <Button
                style={{ marginTop: '16px' }}
                onClick={() => navigate('/')}
            >
                Vrati se na početnu
            </Button>
        </div>
    )
}

export default Message
