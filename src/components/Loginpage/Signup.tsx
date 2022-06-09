import { Title,Signinwrapper,Textinput,Button,Imagewarpper} from "../../styles";
import { Alltextinfo,Textcolorcode} from "../../Alltext/index"
import { AllImages } from "../../Images";
import { useNavigate } from "react-router-dom";
import { Loginusernamevalidation,Loginpasswordvalidation,Loginemailvalidation } from "../../Validations/Loginpagevalidation";
import { ChangeEvent, useState } from "react";
export const Signup=()=>{
    let navigate = useNavigate();
    const[usernamevalue,setusernamevalue]=useState('');
    const[userpassword,setuserpassword]=useState('');
    const[useremail,setuseremail]=useState('');
    const[reenterpassword,setreenterpassword]=useState('');
    const[isvalid,setisvalid]=useState({username:'',password:'',email:'',reenterpass:'',buttondisable:true});
    const Inputonchange=(e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value!==''){
            if(e.target.type==="text"){
                setusernamevalue(e.target.value)
                if(Loginusernamevalidation(e.target.value)===false){
                    setisvalid({...isvalid,buttondisable:true,username:'false'})
                }
                else{
                    setisvalid({...isvalid,username:'true'})
                    if(isvalid.password==='true' && isvalid.reenterpass==='true' && isvalid.email==='true'){
                        setisvalid({...isvalid,buttondisable:false,username:'true'})
                    }
                }
             }
             else if(e.target.type==="password"){
                 if(e.target.id==="password"){
                    setuserpassword(e.target.value)
                    if(Loginpasswordvalidation(e.target.value)===false){
                        setisvalid({...isvalid,password:'false',buttondisable:true})
                    }
                    else{
                        setisvalid({...isvalid,password:'true'})
                        if(isvalid.username==='true' && isvalid.reenterpass==='true' && isvalid.email==='true'){
                            setisvalid({...isvalid,buttondisable:false,password:'true'})
                        }
                    }
                 }
                 else if(e.target.id==="renterpassword"){
                    setreenterpassword(e.target.value)
                    if(e.target.value!==userpassword){
                        setisvalid({...isvalid,reenterpass:'false',buttondisable:true})
                    }
                    else{
                        setisvalid({...isvalid,reenterpass:'true'})
                        if(isvalid.username==='true' && isvalid.password==='true' && isvalid.email==='true'){
                            setisvalid({...isvalid,buttondisable:false,reenterpass:'true'})
                        }
                    }
                 }
                
             }
             else if(e.target.type==="email"){
                setuseremail(e.target.value)
                if(Loginemailvalidation(e.target.value)===false){
                    setisvalid({...isvalid,email:'false',buttondisable:true})
                }
                else{
                    setisvalid({...isvalid,email:'true'})
                    if(isvalid.username==='true' && isvalid.password==='true' && isvalid.reenterpass==='true'){
                        setisvalid({...isvalid,buttondisable:false,email:'true'})
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
                if(e.target.id==="renterpassword"){
                    setreenterpassword('');
                    setisvalid({...isvalid,buttondisable:true,reenterpass:''})
                }else{
                    setuserpassword('')
                    setisvalid({...isvalid,buttondisable:true,password:''})
                }
            }
            if(e.target.type==="email"){
                setuseremail('')
                setisvalid({...isvalid,buttondisable:true,email:''})
            }
        }
    }
    return(
        <>
        <Signinwrapper>
        <Imagewarpper src={AllImages.backicon}
        imagewidth={Textcolorcode.backiconwidth}
        imageheight={Textcolorcode.backiconheight}
        imagerepeat={Textcolorcode.secondimagerepeat}
        imagemargin={Textcolorcode.backimagemargin}
        onClick={()=>navigate("/")}
        >
        </Imagewarpper>
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
        {Alltextinfo.registerwelcome}
        </Title>
        <Title fontsize={Textcolorcode.normalfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.secondsidecolr}
        >
        {Alltextinfo.email}
        </Title>
        <Textinput type={Alltextinfo.emailtype}
        placeholder={Alltextinfo.emailplaceholder}
        value={useremail}
        onChange={(e)=>Inputonchange(e)}
        id={Alltextinfo.emailtype}>
        </Textinput>
        {isvalid.email==='false' ? 
        <Title fontsize={Textcolorcode.errorfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.errorcolor}
        >
        {Alltextinfo.emailerror}
        </Title>
        : null}
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
        onChange={(e)=>Inputonchange(e)}
        id={Alltextinfo.usernametype}>
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
        onChange={(e)=>Inputonchange(e)}
        id={Alltextinfo.passwordtype}>
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
        <Title fontsize={Textcolorcode.normalfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.secondsidecolr}
        >
        {Alltextinfo.reenterpassword}
        </Title>
        <Textinput type={Alltextinfo.passwordtype}
        placeholder={Alltextinfo.renterpasswordplaceholder}
        id={Alltextinfo.reenterpasswordtype}
        value={reenterpassword}
        onChange={(e)=>Inputonchange(e)}>
        </Textinput>
        {isvalid.reenterpass==='false' ? 
        <Title fontsize={Textcolorcode.errorfont}
        fontweight={Textcolorcode.normalfontweight}
        textaligin={Textcolorcode.textalignsecond}
        titlecolor={Textcolorcode.errorcolor}
        >
        {Alltextinfo.repasserror}
        </Title>
        : null}
        <Button disabled={isvalid.buttondisable}
        buttoncolor={`${isvalid.buttondisable===true ? Textcolorcode.errorbuttoncorlr: Textcolorcode.normalbuttoncolor}`}
        buttoncursor={`${isvalid.buttondisable===true ? Textcolorcode.errorbuttoncursor: Textcolorcode.normalbuttoncursor}`}>
        {Alltextinfo.signontext}
        </Button>
        </Signinwrapper>
        </>
    )
}