import React from 'react'
import ThankYou from '../assets/image/thank.png'
function Thank() {
    return (
        <div>
            <section className="bg-gray-100 w-[50%] mx-auto p-20 rounded-md mt-4">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <img
                                    src={ThankYou}
                                    alt="Thank You Image"
                                    className="h-48 w-48 mx-auto"

                                />
                                <h3 className=' text-xl font-bold text-center mt-4 mb-4' >
                                    Thank you for filling
                                    <span className=""> out this form</span>
                                </h3>
                                <p className="text-center">
                                    You don't need to do anything else. We have got your details.
                                    Please allow
                                    time for processing. We will get back to you shortly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Thank;
