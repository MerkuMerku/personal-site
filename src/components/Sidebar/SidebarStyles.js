import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: between;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 70px;
`

export const SidebarList = styled.ul`
    height: auto;
    padding: 0;
    width: 200px;
`;

export const SidebarRow = styled.li`
    width: 100%;
    height: 80px;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s;
    transform: scale(1);    
    &:hover {
        background-color: #515152;
        cursor: pointer;
        transform: scale(1.05);
    }
    ${({ isSelected }) => isSelected && "background-color: #515152"}
`;

export const SidebarIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
    font-size: 13pt;
`;

export const SidebarTitle = styled.div`
    flex: 70%;
    font-size: 13pt;
`;

export const SocialIcons = styled.a`
    font-size: 10pt;
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: #515152;
        transform: scale(1.2);
        cursor: pointer;
    }
`

export const Spacer = styled.div`
width: 100%;
height: 40rem;
`


export const SocialContainer = styled.div`
    
	display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`




