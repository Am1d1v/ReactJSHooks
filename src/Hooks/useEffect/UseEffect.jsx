import {useEffect} from 'react'

function UseEffect() {

    useEffect(() => {

        const handler = () => {
            console.log('Click');
        }
        document.addEventListener('click', handler);

        return () => {document.removeEventListener('click', handler);}
    }, []);


    return (
      <div>UseEffect</div>
    )
}

export default UseEffect