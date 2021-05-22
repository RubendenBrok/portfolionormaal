export const colors = {
  backgroundColor: 'rgb(255,255,255)',
  textColor: 'rgb(70,70,70)',
}

export const variables = {
  siteWidthDesktop: '70%',
  breakPoint: 700,
  desktop: '@media (min-width: 700px)',
  mobile: '@media (max-width: 699px)',
}

export const globalCss = `
*{
    color: ${colors.textColor};
    font-family: Helvetica;
    user-select: none;
}

body{
  background-color: ${colors.backgroundColor}
}

.container {

}

a{
  text-decoration: none;
}

footer a{
  opacity: 0.6;
  transition: all 0.3s
}

footer a:hover{
  opacity: 1;
}

.navLink {
    text-decoration: none;
    margin-left: 6%;
    float: right;
}

.navLinkMobile {
  text-decoration: none;
  margin-left: 20px;
  font-size: 2rem;
}

.show{ opacity: 1;}
.hide{opacity: 0;}

.react-icons {
  vertical-align: middle;
}
`
