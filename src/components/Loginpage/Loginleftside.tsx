import { Title,Imagewarpper,Subparrentwarpper,Leftsidewrapper} from "../../styles";
import { Alltextinfo,Textcolorcode} from "../../Alltext/index"
import { AllImages } from "../../Images";
export const Loginleftside=()=>{
    return(
        <>
        <Subparrentwarpper>
        <Imagewarpper src={AllImages.loginpagefirstimage} 
        imagewidth={Textcolorcode.firstimagewidth} 
        imageheight={Textcolorcode.fisrtimageheight} 
        imagerepeat={Textcolorcode.firstimagerepeat}>
        </Imagewarpper>
        <Leftsidewrapper>
        <Title fontsize={Textcolorcode.boldfont} 
        fontweight={Textcolorcode.boldfontweight}
        textaligin={Textcolorcode.textalignfirst}
        titlecolor={Textcolorcode.firstsidecolor}
        >
        {Alltextinfo.loginfirstboldtext}
        </Title>
        <Title fontsize={Textcolorcode.normalfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignfirst}
        titlecolor={Textcolorcode.firstsidecolor}
        >
        {Alltextinfo.loginsecond}</Title>
        </Leftsidewrapper>
        </Subparrentwarpper>
        </>
    )
}