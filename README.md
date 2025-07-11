      {/* Testimonials Section */}
      {/* Testimonials Section */}
<section className="py-12 md:py-20 ">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-3xl font-bold mb-12 text-center text-white">
      What Our Clients Say
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24 ">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="group h-64 [perspective:1000px]" // Tailwind perspective
        >
          {/* Card container with 3D effect */}
          <div className="relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front of Card */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-blue-900 rounded-lg shadow-md border-2 border-blue-100 [backface-visibility:hidden]">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s profile`}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              <p className="text-sm text-white mb-2">{testimonial.position}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
            
            {/* Back of Card */}
            <div className="absolute inset-0 bg-white rounded-lg shadow-md p-6 border-2 border-blue-100 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <div className="h-full flex flex-col justify-center">
                <svg 
                  className="w-6 h-6 text-blue-400 opacity-30 mb-4" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-12a1 1 0 10-2 0v4a1 1 0 01-1 1H8a1 1 0 100 2h2a3 3 0 003-3V6z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <p className="text-gray-600 mb-4 italic">
                  {testimonial.text}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-blue-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>