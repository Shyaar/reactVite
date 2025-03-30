export const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title
    
    


    return (
        <>
            <div id="blog-list">
                
                <div className="bg-orange-700  flex flex-col px-24 py-7 items-center justify-center gap-6">
                    <h1 className="text-white text-[64px] font-bold">Home Page</h1>
                    <p className="text-[32px] text-white">Find and enjoy content from authors world wide</p>
                    <p></p>
                </div>
                <h2>{title}</h2>
                <div className="my-12 grid grid-cols-2 gap-6 px-24">
                    {blogs.map(blog => (
                        <div className="flex justify-center items-center my-2">
                            <div id="blog-post" key={blog.id} className="bg-white rounded-xl border border-orange-800 my-2 p-3 w-[700px] flex flex-col items-center justify-center">
                                <h2 className="font-blackx text-[32px] text-orange-700">{blog.title}</h2>
                                <p className="text-black text-center">{blog.description}</p>
                                <p className="text-clack font-bold">Written by: {blog.author}</p>
                                

                                <div className="flex font-bold px-4 justify-between text-orange-800 w-full">
                                    <p>likes {blog.likes}</p>
                                    <p>comments{blog.comments}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    );
}