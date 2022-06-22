import React from 'react'
import styled from 'styled-components'
import {Search} from '@styled-icons/boxicons-regular/Search'
import {ShoppingCart} from '@styled-icons/heroicons-outline/ShoppingCart'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
flex : 1;
display: flex;
align-items: center;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Center = styled.div`
flex : 1;
text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
flex : 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const Navbar:React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search size={20} style={{color:"grey", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            E-commerce
          </Logo>
          </Center>
        <Right>
          <MenuItem>
          <Link to="/SignUp">Sign Up</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/Login">Login</Link>
          </MenuItem>
          <MenuItem>
          <ShoppingCart size={21} color="primary"/>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
