import React from "react"
import styled from "styled-components"
import { pizzaRed } from "../Styles/colors"
import { Title } from "../Styles/title"
import I18n, { Translator } from '../I18n'

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;  
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`

const UserStatus = styled.div`
  color: white; 
  font-size: 12px; 
  margin-right: 30px; 
`

const LoginButton = styled.span`
  cursor: pointer; 
`

export function Navbar({ login, loggedIn, logout }) {
  return (
    <NavbarStyled>
      <Logo>
        Pizzaria{ " " }
        <span role="img" aria-label="pizza slice">
          🍕
        </span>
      </Logo>
      <I18n />
      <UserStatus>
        { loggedIn !== "loading" ? (
          <>
            👤 { loggedIn ? <Translator path="navBar.loggedin" /> : "" }
            { loggedIn ? (
              <LoginButton onClick={ logout }>
                <Translator path="navBar.logout" />
              </LoginButton>
            ) : (
              <LoginButton onClick={ login }>
                <Translator path="navBar.loginsignup" />
              </LoginButton>
            ) }
          </>
        ) : (
          "loading..."
        ) }
      </UserStatus>
    </NavbarStyled>
  )
}
