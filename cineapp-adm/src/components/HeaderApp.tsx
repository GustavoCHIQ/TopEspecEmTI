import {HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem} from 'baseui/header-navigation';
import {StyledLink} from 'baseui/link';
import { Link } from 'react-router-dom';
export function HeaderApp(){

    return (
        <HeaderNavigation
        >
          <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>
              <Link to='/'>
                CINE APP
              </Link>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.center} />
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <StyledLink href="#basic-link1">
                <Link to='/categorias'>
                  Categorias
                </Link>
              </StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="#basic-link2">
                Tab Link Two
              </StyledLink>
            </StyledNavigationItem>
          </StyledNavigationList>
        </HeaderNavigation>
    )
}