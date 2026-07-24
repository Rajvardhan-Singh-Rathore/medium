import { Auth } from '../components/Auth'
import {Quote} from '../components/Quote'

export const Signin = ()=>{
    return(
        <div className= "grid grid-cols-1 lg:grid-cols-2 pt-20">
            <div className="supform"><Auth label="Sign up"></Auth></div>
            <div className="hidden lg:block"><Quote></Quote></div>
        </div>
    )
}