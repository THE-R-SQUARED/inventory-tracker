import React from 'react'
import styled from 'styled-components'
import { Icon, Popup } from 'semantic-ui-react'

import AvatarPicture from '../../assets/avatar-picture.jpeg'

const UserProfileContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#414a4c',
    marginRight: '50px',
    marginTop: '20px',
})

const UserProfileItem = styled.div({
    marginLeft: '17px',
})

const Avatar = styled.img({
    borderRadius: '50%',
    height: '40px',
    width: '40px',
})

const UserProfile = () => {
    // We are going to need this state for the toggle below
    // const [isOpen, setOpen] = useState(false)

    return (
        <UserProfileContainer>
            <UserProfileItem>
                <Avatar src={AvatarPicture} alt="avatar-picture" />
            </UserProfileItem>
            <UserProfileItem>Richmond</UserProfileItem>
            <UserProfileItem>
                <Popup
                    trigger={<Icon name="angle down" />}
                    content="Have this as a settings icon??? Also, when we click this maybe a user settings modal can open???"
                    basic
                />
            </UserProfileItem>
        </UserProfileContainer>
    )
}

export default UserProfile
