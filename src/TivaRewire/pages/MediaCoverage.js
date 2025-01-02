import React from 'react'
import custFeed from '../Assets/Images/Customer_Review.png'
import factory from '../Assets/Images/Factory_layout.png'
import step from '../Assets/Images/Process.png'

const MediaCoverage = () => {
    <h3>MediaCoverage</h3>
    const mediaItems = [
        {
            title: "Discussion With Honorable Nitinji Gadkari ",
            type: "video",
            url: "https://www.youtube.com/embed/gGWZel376AE?si=njG-LIwvyfEUKaSs",
        },
       
        {
            title: "Policy Discussion",
            type: "video",
            url: "https://www.youtube.com/embed/52YG9vtdRdI?si=g9ONHZ2AL4__IEgJ"  ,
        },
        {
            title: " How We Cooperate",
            type: "video",
            url: "https://www.youtube.com/embed/x4gv10aEpzU?si=R3vSXsU6-7DQQhTf",
        },

         {
            title: "Verification Of Vehicle's",
            type: "image",
            url: step,
        },
        {
            title: "Factory View",
            type: "image",
            url:factory ,
        },
        {
            title: "Happy Customer's Review ",
            type: "image",
            url: custFeed,
        },
       
    ];


    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">
                Media Coverage 
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {/* Insert the h3 element after the last video */}
                        {index === 3 && (
                            <div className="col-span-full text-center">
                                <h1 className="text-2xl font-bold my-6">
                                    Inside Tiva Rewire
                                </h1>
                            </div>
                        )}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {item.type === "video" ? (
                                <div className="aspect-w-8 aspect-h-9">
                                    <iframe
                                        className="w-full h-56"
                                        src={item.url}
                                        title={item.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div>
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="object-scale-up h-52 w-full"
                                    />
                                </div>
                            )}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MediaCoverage;