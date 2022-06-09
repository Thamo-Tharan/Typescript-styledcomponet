import styled from 'styled-components';
interface styledprops{
  fontsize?:string,
  fontweight?:string,
  placeholdertext?:string,
  inputype?:string,
  imagewidth?:string,
  imageheight?:string,
  src?: string,
  imagerepeat?:string,
  textaligin?:string,
  textcolor?:string,
  textunderlineprop?:string,
  titlecolor?:string,
  buttoncolor?:string,
  buttoncursor?:string,
  imagemargin?:string,
  inputid?:string
}
export const Title = styled.p<styledprops>`
  font-size: ${(styledprops)=>styledprops.fontsize};
  text-align: ${(styledprops)=>styledprops.textaligin};
  color: ${(styledprops)=>styledprops.titlecolor};
  font-weight:${(styledprops)=>styledprops.fontweight};
  margin:0px;
`;
export const Imagewarpper=styled.div<styledprops>`
  width:${(styledprops)=>styledprops.imagewidth};
  height:${(styledprops)=>styledprops.imageheight};
  background-image: url(${(styledprops)=>styledprops.src});
  background-size:contain;
  margin:${(styledprops)=>styledprops.imagemargin};
  background-repeat: ${(styledprops)=>styledprops.imagerepeat};
`;

export const Label=styled.label<styledprops>`
 font-size: ${(styledprops)=>styledprops.fontsize};
 font-weight:${(styledprops)=>styledprops.fontweight};
`;

export const Textinput=styled.input<styledprops>`
 placeholder:${(styledprops)=>styledprops.placeholder};
 type:${(styledprops)=>styledprops.inputype};
 id:${(styledprops)=>styledprops.inputid};
 padding: 10px;
 border-radius: 5px;
 border: 1px solid gray;
 &:focus{
  outline: none !important;
  border-color: #719ECE;
  box-shadow: 0 0 10px #719ECE;
 }
`;

export const Labelcomp=styled.label<styledprops>`
 text-decoration: ${(styledprops)=>styledprops.textunderlineprop};
 color: ${(styledprops)=>styledprops.textcolor};
`;

export const Button=styled.button<styledprops>`
 background:${(styledprops)=>styledprops.buttoncolor};
 color:white;
 padding: 10px;
 border-radius: 5px;
 cursor: ${(styledprops)=>styledprops.buttoncursor};
 border: 0px;
`;
export const Parentwrapper=styled.div`
 display: flex;
 height: 100vh;
 gap: 90px;
 width: 100%;
`;

export const Leftsidewrapper=styled.div`
 margin-top: -300px;
`;
export const Childwrapper=styled.div`
 display: grid;
 grid-gap: 10px;
 justify-items: stretch;
 padding-top: 130px;
 padding-right: 90px;
 @media (max-width:480px){ 
  padding-top: calc(100% - 200px);
  padding-left: 30px;
  padding-right: 30px;
 }
`;

export const Subparrentwarpper=styled.div`
 width: 50%;
 height: 100vh;
 @media (max-width:480px){ 
  &:nth-child(1) {
    display:none;
  }
  &:nth-child(2) {
    width: 100%;
  }
 }
`;
export const Bottomwrapper=styled.div`
 margin:auto;
`;

export const Signinwrapper=styled.div`
 display: grid;
 grid-gap: 10px;
 justify-items: stretch;
 padding-top: 20px;
 padding-right: 90px;
`