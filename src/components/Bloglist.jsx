export const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title
    const remove = props.delete
    
    


    return (
        <>
            <div id="blog-list">
                
                
                <h2 className="text-orange-700 text-[40px] font-black flex flex-col px-24 py-7 items-center justify-center">{title}</h2>
                <div className="my-12 grid grid-cols-2 gap-6 px-24">
                    {blogs.map(blog => (
                        <div className="flex justify-center items-center my-2">
                            <div id="blog-post" key={blog.id} className="bg-white rounded-xl border border-orange-800 my-2 p-3 w-[700px] flex flex-col items-center justify-center">
                                <h2 className="font-blackx text-[32px] text-orange-700">{blog.title}</h2>
                                <p className="text-black text-center">{blog.description}</p>
                                <p className="text-clack font-bold">Written by: {blog.author}</p>
                                

                                <div className="flex font-bold px-4 justify-between text-orange-800 w-full my-4">
                                    <p>likes {blog.likes}</p>
                                    <button className="bg-red-300 rounded-lg border border-red-600 p-2 text-red-900">Delete blog</button>
                                    <p onClick={() => handleDelete(blog.id)}>comments{blog.comments}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}