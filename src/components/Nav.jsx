const Nav = () => {
    function handleClick (e){
        console.log(e.target.id)
    }

    function handleArg(e){
        console.log(e.target.id,)
    }

    return ( 
        <>
        <div className="flex justify-between py-4 px-24">
            <h2 className="text-3xl font-bold text-orange-700">reactBlog</h2>
            <ul className="flex gap-4">
                <li id="kong" className="bg-orange-300 text-orange-950 border border-orange-700 p-2 w-20 text-center rounded-md font-bold" onClick={handleClick}>Home</li>
                <li className="bg-orange-300 text-orange-950 border border-orange-700 p-2 w-20 text-center rounded-md font-bold" onClick={handleClick}>About</li>
                <li id="king" className="bg-orange-300 text-orange-950 border border-orange-700 p-2 w-20 text-center rounded-md font-bold" onClick={(e)=>handleArg(e)}>Post</li>
            </ul>
        </div>

        </>
     );
}
 
export default Nav;