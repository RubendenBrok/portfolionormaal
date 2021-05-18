export const colors = {
  backgroundColor: 'rgb(255,240,230)',
  textColor: 'rgb(70,70,70)',
}

export const variables = {
  siteWidthDesktop: '70%',
}

export const globalCss = `
*{
    color: ${colors.textColor};
    font-family: Helvetica;
    user-select: none;
}

.container {
  margin-top: 40px;
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
    margin-left: 60px;
}

.arrowContainer{
    position: relative;
    width: 40px;
    opacity: 0.2;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    } 
}

.arrowButton {
width: 20px;
height: 20px;
position: absolute;
left: 50%;
top: 0px;
transform: translate(-50%, -50%);
}

.show{ opacity: 1;}
.hide{opacity: 0;}

.react-icons {
  vertical-align: middle;
}
`
