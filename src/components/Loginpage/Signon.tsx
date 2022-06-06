import { Title,Childwrapper,Textinput,Button,Imagewarpper,Labelcomp,Bottomwrapper} from "../../styles";
import { Alltextinfo,Textcolorcode} from "../../Alltext/index"
import { AllImages } from "../../Images";
import { useNavigate } from "react-router-dom";
import { Loginusernamevalidation,Loginpasswordvalidation } from "../../Validations/Loginpagevalidation";
import { ChangeEvent, useState } from "react";
export const Signon=()=>{
    let navigate = useNavigate();
    const[usernamevalue,setusernamevalue]=useState('');
    const[userpassword,setuserpassword]=useState('')
    const[isvalid,setisvalid]=useState({username:'',password:'',buttondisable:true});
    const Inputonchange=(e: ChangeEvent<HTMLInputElement>)=>{
    if(e.target.value!==''){
        if(e.target.type==="text"){
            setusernamevalue(e.target.value)
            if(Loginusernamevalidation(e.target.value)===false){
                setisvalid({...isvalid,buttondisable:true,username:'false'})
            }
            else{
                setisvalid({...isvalid,username:'true'})
                if(isvalid.password==='true'){
                    setisvalid({...isvalid,buttondisable:false,username:'true'})
                }
            }
         }
         else{
            setuserpassword(e.target.value)
            if(Loginpasswordvalidation(e.target.value)===false){
                setisvalid({...isvalid,password:'false',buttondisable:true})
            }
            else{
                setisvalid({...isvalid,password:'true'})
                if(isvalid.username==='true'){
                    setisvalid({...isvalid,buttondisable:false,password:'true'})
                }
            }
         }
    }
    else{
        if(e.target.type==="text"){
            setusernamevalue('')
            setisvalid({...isvalid,username:'',buttondisable:true})
        }
        if(e.target.type==="password"){
            setuserpassword('')
            setisvalid({...isvalid,buttondisable:true,password:''})
        }
    }
    }
    return(
        <>
        <Childwrapper>
        <Imagewarpper src={AllImages.loginsecondlogo}
        imagewidth={Textcolorcode.secondimagewith}
        imageheight={Textcolorcode.secodnimageheight}
        imagerepeat={Textcolorcode.secondimagerepeat}
        imagemargin={Textcolorcode.imagemargin}>
        </Imagewarpper>
        <Title fontsize={Textcolorcode.normalfont}
        fontweight={Textcolorcode.boldfontweight}
        textaligin={Textcolorcode.textalignfirst}
        titlecolor={Textcolorcode.secondsidecolr}
        >
        {Alltextinfo.loginwelcometext}
        </Title>
        <Title fontsize={Textcolorcode.normalfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.secondsidecolr}
        >
        {Alltextinfo.username}
        </Title>
        <Textinput type={Alltextinfo.usernametype}
        placeholder={Alltextinfo.usernameplaceholder}
        value={usernamevalue}
        onChange={(e)=>Inputonchange(e)}>
        </Textinput>
        {isvalid.username==='false' ? 
        <Title fontsize={Textcolorcode.errorfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.errorcolor}
        >
        {Alltextinfo.usernameerror}
        </Title>
        : null}
        <Title fontsize={Textcolorcode.normalfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.secondsidecolr}
        >
        {Alltextinfo.password}
        </Title>
        <Textinput type={Alltextinfo.passwordtype}
        placeholder={Alltextinfo.passwordplaceholder}
        value={userpassword}
        onChange={(e)=>Inputonchange(e)}>
        </Textinput>
        {isvalid.password==='false' ? 
        <Title fontsize={Textcolorcode.errorfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.errorcolor}
        >
        {Alltextinfo.passworderror}
        </Title>
        : null}
        <Button disabled={isvalid.buttondisable}
        buttoncolor={`${isvalid.buttondisable===true ? Textcolorcode.errorbuttoncorlr: Textcolorcode.normalbuttoncolor}`}
        buttoncursor={`${isvalid.buttondisable===true ? Textcolorcode.errorbuttoncursor: Textcolorcode.normalbuttoncursor}`}>
        {Alltextinfo.signintext}
        </Button>
        <Bottomwrapper>
        <Labelcomp textcolor={Textcolorcode.textcolortrue}
        textunderlineprop={Textcolorcode.textunderlinetrue}>
        {Alltextinfo.forgotusername}
        </Labelcomp> | <Labelcomp textcolor={Textcolorcode.textcolortrue}
        textunderlineprop={Textcolorcode.textunderlinetrue}>
        {Alltextinfo.forgotpassword}
        </Labelcomp>
        </Bottomwrapper>
        <Bottomwrapper>
        <Labelcomp textcolor={Textcolorcode.textcolorfalse}
        textunderlineprop={Textcolorcode.textunderlinefalse}>
        {Alltextinfo.newusertext}
        </Labelcomp> | <Labelcomp textcolor={Textcolorcode.textcolortrue}
        textunderlineprop={Textcolorcode.textunderlinetrue}
        onClick={()=>navigate("registerationform")}>
        {Alltextinfo.registertext}
        </Labelcomp>  
        </Bottomwrapper>
        </Childwrapper>
        </>
    )
}