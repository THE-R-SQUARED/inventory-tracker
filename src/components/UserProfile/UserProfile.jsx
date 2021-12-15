import React from 'react'
import styled from 'styled-components'

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
  return (
    <UserProfileContainer>
      <UserProfileItem>
        <Avatar src={AvatarPicture} alt="avatar-picture" />
      </UserProfileItem>
      <UserProfileItem>Richmond</UserProfileItem>
      <UserProfileItem>toggable</UserProfileItem>
    </UserProfileContainer>
  )
}

export default UserProfile
