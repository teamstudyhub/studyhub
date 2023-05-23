export default function Page() {
    return (
      <div className="w-full max-w-xs rounded-xl bg-white px-12 py-8 border-2 border-gray-400 shadow-2xl text-center lg:px-18 lg:py-10">
        <img
          src="/assets/avatars/dianne-russell.png"
          className="inline-block h-20 w-20 rounded-full border-2"
        />
        <h2 className="text-xl font-bold text-black mt-3">My Profile</h2>
        <hr className="h-1 my-8 bg-gray-600 border-0 dark:bg-gray-700"/>
        
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-600">Name:</h4>
        <span className="mt-2 text-lg font-bold text-black">
          Aka
        </span>
        </div>
  
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-600">Email:</h4>
          <span className="mt-2 text-lg font-semibold text-black">sam.wilson@example.com</span>
        </div>
  
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-600">My Bio:</h4>
          <p className="text-sm text-black">
            I am a passionate UX designer with a focus on creating intuitive and user-friendly interfaces. I enjoy solving complex problems and translating user needs into elegant design solutions.
          </p>
        </div>
      </div>
    );
  }
  