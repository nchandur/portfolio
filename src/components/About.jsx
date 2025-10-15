export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}


            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="images/pfp.jpg" className="rounded-4xl shadow-xl dark:shadow-gray-1000"/>

                    </div>

                    <div className="space-y-6">

                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cum ratione facere doloremque beatae dolores saepe consequuntur modi dignissimos nesciunt consectetur quibusdam, magnam deserunt ipsam porro pariatur. Commodi, ducimus ratione?
                        </p>

                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis mollitia neque provident optio quibusdam consequatur animi repudiandae quod! Deleniti, voluptas! Quaerat voluptatum laborum quos eos, est nobis blanditiis rem?
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a
                                href="Resume.pdf"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};