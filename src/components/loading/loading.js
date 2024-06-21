import { Atom } from "react-loading-indicators";


export default function Loading(){
    return(
        <>
            <div className='text-light display-flex-config flex-column font-Casablanca vw-100 vh-100 bg-dark'>
                <Atom color="#cc3131" size="large" text="" textColor="#a80000" />
                <h4 className="text-center mb-3 mt-4 px-3">به وب سایت شرکت گسترش آلیاژ تندیس خوش آمدید</h4>
                <p>لطفا کمی صبر بمانید</p>
            </div>
        </>
    )
}