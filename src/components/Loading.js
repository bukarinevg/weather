import {ColorRing} from 'react-loader-spinner';

function Loading() {
  return (
    <div className="Loading">    
        <ColorRing
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
        <p>Loading...</p>
    </div>
  );
}

export default Loading; // export the Loading component