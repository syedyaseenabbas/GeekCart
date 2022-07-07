import React, { FC } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container } from '@mui/material'
import Cart from '../Cart/Cart'

interface LayoutProps {
   children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <Navbar />
         <Container maxWidth={'xl'}>
            <div className={'pages'}>{children}</div>
            <Cart />
         </Container>
      </>
   )
}

export default Layout
