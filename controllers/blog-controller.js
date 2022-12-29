import Blog from "../model/Blog.js";

export const getAllBlogs = async (req, res, next) => {
  let blogs;

  try {
    blogs = await Blog.find();
  } catch (err) {
    return console.log(err);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });

  try {
    await blog.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try{
    blog = await Blog.findById(blogId, {
        title,
        description,
      });
  }catch(err){
      return console.log(err);
  }

  if(!blog){
    return res.status(500).json({ message: "unable to update the blog" });
  }
  return res.status(200).json({ blog });
  
};


export const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;

    try{
       blog = await Blog.findById(id)
    }catch(err){
         return console.log(err);
    }

    if(!blog){
        return res.status(400).json({ message: "No Blog Found"});
  
    }
    return res.status(200).json({ blog });
  
}

export const deleteBlog = async (req, res, next) => {
    const id = req.params.id;

    let blog;

    try{
        blog = await Blog.findByIdAndRemove(id)
     }catch(err){
          return console.log(err);
     }
     if(!blog){
        return res.status(500).json({ message: "Unable to delete the blog" });
  
    }
    return res.status(200).json({ message: "Blog was deleted successfully"  });
}
