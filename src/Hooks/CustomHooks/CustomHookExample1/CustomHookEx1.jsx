import UseFetch from "./UseFetch"

function CustomHookEx1() {

    const res = UseFetch('https://jsonplaceholder.typicode.com/posts/1', {});
    console.log(res);

    return (
      <div></div>
    )
}

export default CustomHookEx1