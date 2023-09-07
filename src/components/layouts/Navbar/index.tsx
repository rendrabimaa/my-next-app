import styles from "./Navbar.module.css"
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const { data }:any = useSession()
    console.log(data)

    return (
        <div className={styles.navbar}>
            <h1 className="big">Navbar</h1>
            <div>
                
            
            { data ? (
                <div>
                    { data && data.user.fullname }
                    <button onClick={() => signOut()}>Sign Out</button>    
                </div>
            ) : (
                <button onClick={() => signIn()}>Sign In</button>
            )
            }
            </div>
        </div>
    )
}

export default Navbar;