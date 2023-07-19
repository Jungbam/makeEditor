import React from 'react';

const Callback = () => {
    React.useEffect(()=> {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code); 
      }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default Callback;