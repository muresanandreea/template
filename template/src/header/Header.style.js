import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  top:0;
  display:flex;
  width: 100%;
  height:7rem;
  background-color:gray;
  box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;
  align-items: center;
  position:fixed;
  justify-content: space-between;
  z-index:1;
`;

export const ButtonWrapper = styled.a`
  display:flex;
  opacity:1;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  margin:0 10px;
  text-decoration: none;
`;

export const ButtonText = styled.div`
  font-size: 16px;
  color: #E6E7E8;
  font-family:'Open Sans-Bold', sans-serif;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  font-weight: normal;
  text-align: center;
  margin:0 10px;
  z-index: 1;
  :hover{    color:#06D6A0; transition: 0.2s ease-in-out all};
  display: inline-block;
  padding: 16px 2px;
  position: relative;
}
:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 50%;
  position: absolute;
  background: #06D6A0;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
:hover:after {
  width: 100%;
  left: 0;
}
`;

export const HeaderDesktopContent = styled.div`
  display:flex;
  justify-content:flex-end;
  flex:1;
  margin-right:4%;
`;