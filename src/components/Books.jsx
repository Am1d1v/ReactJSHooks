import Book from "./Book";
import React, { useContext} from "react";
import { CustomContext } from "../Hooks/useContext/Context";

function Books() {

    const {books = []} = useContext(CustomContext);

    return (
        books.map(book => <Book id={book.id} title={book.title}/>)
    )
}

export default Books