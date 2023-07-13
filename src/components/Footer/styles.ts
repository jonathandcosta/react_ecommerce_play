import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  font-size: 14px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: auto;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
