import Book from "./Book";
import React, { useContext} from "react";
import { CustomContext } from "../Hooks/useContext/Context";

function Books() {

    const {books = []} = useContext(CustomContext);

    return (
        books.map((book, index) => <Book {...book} key={index}/>)
    )
}

export default Books