import {HiMoon} from 'react-icons/hi';
import {CgSun} from 'react-icons/cg'
import { styled } from 'styled-components';

const Page= styled.div`
background-color:${props=>props.theme.pageBackground};
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
transition: all 1sec ease;`
const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
`;


const ThemeChange = (props) => {
    const handleToggle=()=>{
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }
    const icon = props.theme==="light"?<CgSun/>:<HiMoon/>;
    
  return (
    <Page>
        <Container>
            <Toggle onClick={handleToggle}>{icon}</Toggle>
            <Title>Toggle for theme Effect</Title>
            <TagLine> Use of Styled Components and React icons </TagLine>

        </Container>
    </Page>
  )
}

export default ThemeChange