export default function AboutUsPage() {
    return (
        <div className=" bg-base-200 text-white py-12 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
                    Welcome to <span className="font-semibold">Our Company</span> — where innovation meets excellence.
                    We are passionate about delivering high-quality solutions that help businesses thrive in the modern digital era.
                    Our dedicated team works tirelessly to ensure client satisfaction and long-term success.
                </p>

                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-white">
                            Our mission is to provide cutting-edge products and services that empower individuals
                            and businesses to achieve their goals with confidence. We strive for innovation,
                            integrity, and customer-centric solutions in everything we do.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-white">
                            We envision a world where technology bridges the gap between ideas and execution,
                            enabling businesses to grow faster, smarter, and more efficiently. We aim to be a
                            trusted partner in every step of your journey.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <p className="text-white max-w-3xl mx-auto">
                        With years of experience and a passion for excellence, we offer tailored solutions
                        designed to meet your specific needs. Our commitment to quality and customer satisfaction
                        sets us apart from the rest.
                    </p>
                </div>
            </div>
        </div>
    );
}
