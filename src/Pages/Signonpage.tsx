import { Parentwrapper,Subparrentwarpper} from "../styles/index"
import { Loginleftside } from "../components/Loginpage/Loginleftside";
import { Signon } from "../components/Loginpage/Signon";
export const Signonpage=()=>{
    return(
        <>
        <Parentwrapper>
        <Loginleftside/>
        <Subparrentwarpper>
        <Signon/>
        </Subparrentwarpper>
        </Parentwrapper>
        </>
    )
}