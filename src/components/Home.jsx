import { useState } from "react"


const Home = () => {

    
    const [myName, setName] = useState("Sati")
    const [age, setAge] = useState(20)
    const [blogs, setBlog] = useState([
        { title: "welcome to react hooks", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb",likes : 50, comments : 20, id: 1, author: "kimmich" },
        { title: "welcome to react", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb",likes : 50, comments : 20, id: 2, author: "glen" },
        { title: "welcome to useState", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb",likes : 50, comments : 20, id: 1, author: "hope" }
    ])

    function click() {
        if (myName != "fwatshak" && age != 30) {
            setName("fwatshak")
            setAge(30)
        } else {
            setName("Sati")
            setAge(20)
        }

    }
    return (
        <>
        <div className="bg-orange-700  flex flex-col px-24 py-7 items-center justify-center gap-6">
            <h1 className="text-white text-[64px] font-bold">Home Page</h1>
            <p className="text-[32px] text-white">Find and enjoy content from authors world wide</p>
            <p></p>
        </div>
            
        <div className="my-12 grid grid-cols-2 gap-6 px-24">
        {blogs.map(blog => (
                <div className="flex justify-center items-center my-2">
                    <div id="blog-post" key={blog.id} className="bg-white rounded-xl border border-orange-800 my-2 p-3 w-[700px] flex flex-col items-center justify-center">
                        <h2 className="font-blackx text-[32px] text-orange-700">{blog.title}</h2>
                        <p className="text-black font-bold">{blog.description}</p>
                        <p className="text-clack font-bold">Written by: {blog.author}</p>


                        <div className="flex font-bold px-4 justify-between text-orange-800 w-full">
                            <p>likes {blog.likes}</p>
                            <p>comments{blog.comments}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

            {/* <div className="bg-orange-500 flex px-24 py-7 items-center justify-center gap-6">
            <h1>homePage</h1>
            <p className="text-white text-[38px] font-bold">{ myName }</p>
            <p className="text-white text-[38px] font-bold">{ age }</p>
            <button onClick={click} className="bg-orange-700 p-3 rounded-lg">Click</button>
        </div> */}
        </>
    );
}

export default Home;