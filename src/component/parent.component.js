import React from 'react'
import Child from './child.component';

const Parent = () => {
    const msgList = ['A', 'B'];
    return (
        <Child message={msgList} />
    );
}

export default Parent;