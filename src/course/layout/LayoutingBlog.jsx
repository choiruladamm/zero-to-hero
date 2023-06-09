const LayoutingBlog = () => {
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <a href="youtube.com" className="block w-full h-full">
        <img
          alt="blog photo"
          src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">Article</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            Supercharged !
          </p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
            The new supercar is here, 543 cv and 140 000$. This is best racing
            GT about 7 years on...
          </p>
          <div className="flex items-center mt-4">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="object-cover w-10 h-10 mx-auto rounded-full "
              />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Jean Jacques</p>
              <p className="text-gray-400 dark:text-gray-300">
                20 mars 2029 - 6 min read
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LayoutingBlog;
