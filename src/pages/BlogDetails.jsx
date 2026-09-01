import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Home, Calendar, Clock, User, ArrowLeft, ArrowRight, 
  Share2, Facebook, Twitter, Linkedin, Tag
} from "lucide-react";
import { blogsData } from "../data/blogsData";
import ContactBanner from "../components/ContactBanner";

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related blogs (same category, excluding current)
  const relatedBlogs = blogsData
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  const currentIndex = blogsData.findIndex((b) => b.slug === slug);
  const previousBlog = currentIndex > 0 ? blogsData[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogsData.length - 1 ? blogsData[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{blog.title} | SUKU Technologies Blog</title>
        <meta name="description" content={blog.excerpt} />
        <meta name="keywords" content={blog.tags.join(", ")} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={`https://www.sukutechnologies.com/blog/${blog.slug}`} />
      </Helmet>

      <motion.div
        className="w-full"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          
          {/* Breadcrumb */}
          <div className="absolute top-6 left-6">
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-gray-400 px-4 py-2 rounded-md shadow-md">
              <Home size={16} className="text-blue-400" />
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-white">→</span>
              <Link
                to="/blog"
                className="text-sm text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                Blog
              </Link>
              <span className="text-white">→</span>
              <span className="text-sm text-gray-300">Article</span>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {blog.category}
              </span>
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(blog.date).toLocaleDateString("en-US", { 
                    month: "long", 
                    day: "numeric", 
                    year: "numeric" 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <span className="text-sm font-semibold text-gray-700">Share:</span>
              <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
                <Facebook size={16} />
              </button>
              <button className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition-colors">
                <Twitter size={16} />
              </button>
              <button className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors">
                <Linkedin size={16} />
              </button>
              <button className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors">
                <Share2 size={16} />
              </button>
            </div>

            {/* Content */}
            <article 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-2 flex-wrap">
                <Tag size={20} className="text-gray-600 mt-1" />
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            {(previousBlog || nextBlog) && (
              <div className="mt-12 pt-8 border-t border-gray-200 grid md:grid-cols-2 gap-6">
                {previousBlog && (
                  <Link
                    to={`/blog/${previousBlog.slug}`}
                    className="group p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <ArrowLeft size={14} />
                      Previous Article
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {previousBlog.title}
                    </h3>
                  </Link>
                )}
                {nextBlog && (
                  <Link
                    to={`/blog/${nextBlog.slug}`}
                    className="group p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                      Next Article
                      <ArrowRight size={14} />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {nextBlog.title}
                    </h3>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.article
                    key={relatedBlog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {relatedBlog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(relatedBlog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {relatedBlog.readTime}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${relatedBlog.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactBanner />
      </motion.div>
    </>
  );
};

export default BlogDetails;
