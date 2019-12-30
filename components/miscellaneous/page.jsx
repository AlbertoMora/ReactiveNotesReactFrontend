import React, {useEffect} from 'react';

function Page(props) {

    useEffect(() => {
        document.title = "Reactive Notes | " + props.title;
    }, [props.title]);
    let Component = props.component;
    return (
        <Component {...props} />
    );
}

export default Page;