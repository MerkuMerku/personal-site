import styled from 'styled-components';

export const Img = styled.img`
  height: 300px;
  width: 450px;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
overflow: hidden;
position: relative;
display: grid;
place-items: center;
column-gap: 2rem;
row-gap: 10rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  transition: 0.6s ease;
  &:hover {
        cursor: pointer;
        transform: scale(1.015);
    }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 20px;
  font-family: 'Permanent Marker';
  color: #FFFFFFBF;
  font-size: 2.5rem;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #FFFFFFBF;
  padding: .5rem 0;
  margin-top: 20px;
  font-size: 4rem;;
`;

export const Hr = styled.hr`
  width: 65%;
  height: 2px;
  margin: 20px auto;
  border: 0;
  background: #FFFFFFBF;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Space Grotesk', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 5px;
transition: 0.5s;
&:hover{
  background: #801414;
}
`;

export const TagList = styled.ul`
display: flex;
width: 80%;
justify-content: space-around;
padding: 2rem;
margin: auto;
`
export const Tag = styled.li`
color: #FFFFFFBF;
font-size: 1.5rem;
`