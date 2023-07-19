import React from 'react';

const Callback = () => {
    const [page, setPage] = React.useState(1);

    const onClickHandler = () => {
        console.log('click')
    }

    
    React.useEffect(()=> {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code)
      }, [])
    
    return (
        <div>
            <button onClick={onClickHandler}>글 목록 조회</button>
        </div>
    );
};

export default Callback;