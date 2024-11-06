import React from 'react'

function NewsLetter() {
    return (
        <div>
            <div className=" p-10 rounded-lg shadow-xl mb-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                    <div className="text-center lg:text-left space-y-4 lg:w-1/2">
                        <h2 className="text-4xl font-semibold">Stay Updated!</h2>
                        <p className="text-lg">
                            Subscribe to our newsletter and never miss out on the latest news, updates, and offers. We'll send them straight to your inbox.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <form className="flex flex-col items-center space-y-4">
                            <input
                                type="email"
                                className="w-full p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter
