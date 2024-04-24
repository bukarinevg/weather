import {TailSpin} from 'react-loader-spinner';
import '@styles/Loading.scss'; 

function Loading() {
    return (
        <div className="Loading container-fluid d-flex justify-content-center align-items-center">
            <TailSpin
                visible={true}
                height="100%"
                width="100%"
                color="blue"
                ariaLabel="tail-spin-loading"
                radius={1}
                wrapperStyle={{}}
                wrapperClass=""
            />
        
        </div>
    );
}

export default Loading; // export the Loading component