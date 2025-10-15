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
                        <img src="portfolio/images/pfp.jpg" alt="Profile Picture" className="rounded-4xl shadow-xl dark:shadow-gray-1000" />

                    </div>

                    <div className="space-y-6">

                        <p className="text-muted-foreground">
                            I'm a Cloud Engineer who loves turning cutting-edge technologies into practical, cool applications. My passion for math and computer science drives me, and I'm always looking to learn more about both fields. I thrive on a good challenge, and that's true whether I'm tackling a complex problem in code or digging deep into a theoretical concept.
                        </p>

                        <p className="text-muted-foreground">
                            When I'm not working, you can probably find me out on a long trail run, immersed in a book I can't put down, or maybe locked in a Dark Souls boss fight. I enjoy pushing my limits in all aspects of life; from development and gaming to the great outdoors.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a
                                href="portfolio/Resume.pdf"
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