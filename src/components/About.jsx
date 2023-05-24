import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white max-md:pt-96"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    I am a specialist in the field of information technology,
                    I know how to organize teamwork, I negotiate well, in which knowledge of foreign languages such as English and Chinese helps me.
                    My key skills are the ability to learn quickly and adapt to change.
                    I approach my work responsibly, I expect the same from others.
                </p>

                <br />

                <p className="text-xl">
                    
                    The philosophy of my life is most accurately described by the quote "Behind every success there is a lot of patience, hard work and responsibility."
                </p>
            </div>
        </div>
    );
};

export default About;
