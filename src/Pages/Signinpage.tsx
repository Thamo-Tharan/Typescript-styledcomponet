import { Parentwrapper,Subparrentwarpper} from "../styles/index"
import { Loginleftside } from "../components/Loginpage/Loginleftside";
import { Signup } from "../components/Loginpage/Signup";
export const Signuppage=()=>{
    return(
        <>
        <Parentwrapper>
        <Loginleftside/>
        <Subparrentwarpper>
        <Signup/>
        </Subparrentwarpper>
        </Parentwrapper>
        </>
    )
}