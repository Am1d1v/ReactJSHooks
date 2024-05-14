import React, {useContext} from 'react'
import { CustomContext } from '../Hooks/useContext/Context'

function Book({title, id}) {

    // Remove Books
    const {removeBook} = useContext(CustomContext);

    return (
      <div onClick={() => removeBook(id)}>
          <p>{title}</p>
      </div>
    )
}

export default Book