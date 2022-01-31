import React from 'react'
import styled from 'styled-components'

import SideBarMenu from '../../components/SideBarMenu'

const SideBarLayout = styled.div({
    width: '170px',
})

const SideBar = () => (
    <SideBarLayout>
        <SideBarMenu />
    </SideBarLayout>
)

export default SideBar
