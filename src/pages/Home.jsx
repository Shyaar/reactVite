import { useState } from "react"
import { Bloglist } from "../components/Bloglist"


const Home = () => {


    const [myName, setName] = useState("Sati")
    const [age, setAge] = useState(20)
    const [pageTitle,setpateTitle] = useState("All Blogs!!!")
    const [blogs, setBlog] = useState([
        { title: "welcome to react hooks", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb", likes: 50, comments: 20, id: 1, author: "kimmich" },
        { title: "welcome to react", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb", likes: 50, comments: 20, id: 2, author: "glen" },
        { title: "welcome to useState", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb", likes: 50, comments: 20, id: 1, author: "hope" }
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
            <div id="blog-list">
                <Bloglist blogs={blogs} title = {pageTitle}/>
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