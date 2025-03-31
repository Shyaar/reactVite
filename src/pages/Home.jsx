import { useState } from "react"
import { Bloglist } from "../components/Bloglist"


const Home = () => {


    let [myName, setName] = useState("Sati")
    let [age, setAge] = useState(20)
    const [pageTitle, setpateTitle] = useState("All Blogs!!!")
    const [blogs, setBlog] = useState([
        { title: "welcome to react hooks", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb", likes: 50, comments: 20, id: 1, author: "kimmich" },
        { title: "welcome to react", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb", likes: 50, comments: 20, id: 2, author: "glen" },
        { title: "welcome to useState", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni saepe, expedita voluptatem doloremque molestiae tempore voluptates similique. Perspiciatis at exercitationem modi debitis, facilis ad porro ut. Aliquid, in quo.", body: "alkhdajfskvb ddkajbvdsjc blkfvdjbsdjbxlvkdbdkjcb", likes: 50, comments: 20, id: 3, author: "hope" }
    ])


    const handleDelete=(id)=> {
        let newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs)
        console.log(newBlogs)
    }

    // const handleClick = (name, e) => {
    //     console.log(e.target)
    //     // let bg = e.target.id 
    //     // console.log(bg)
    //     // let bgg = document.getElementById(bg)
    //     // bgg.classList = "bg-red-400"

    //     myName == "Sati" && age == 20 ? (myName = setName("John"), age = setAge(40)) : (myName = setName("Sati"), age = setAge(20))
    // }

    // const handleClik = (e) => {
    //     console.log("junior", e)
    // }

    return (
        <>
            <div className="bg-orange-700  flex flex-col px-24 py-7 items-center justify-center gap-6">
                <h1 className="text-white text-[64px] font-bold">Home Page</h1>
                <p className="text-[32px] text-white">Find and enjoy content from authors world wide</p>
                <p></p>
            </div>
            <div id="blog-list">
                <Bloglist blogs={blogs} title={pageTitle} remove={handleDelete} />
                <Bloglist blogs={blogs.filter(blog => blog.author == "hope")} title="hopes Blogs" remove={handleDelete} />
            </div>


            {/* <div className=" font-bold text-[32px] flex flex-col justify-center ">
                <div className=" self-center" > my name is {myName}, my age {age}</div>
                <button onClick={handleClik} className="bg-green-500 text-white w-fit self-center p-3 my-3">Cleckkke</button>

                <button id="33" onClick={(e)=>handleClick("james",e)} className="bg-green-500 text-white w-fit self-center p-3">Click me</button>
            </div> */}
            {/* <div className="bg-orange-500 flex px-24 py-7 items-center justify-center gap-6">
                <h1>homePage</h1>
                <p className="text-white text-[38px] font-bold">{myName}</p>
                <p className="text-white text-[38px] font-bold">{age}</p>
                <button onClick={click} className="bg-orange-700 p-3 rounded-lg">Click</button>
            </div> */}


        </>
    );
}

export default Home;