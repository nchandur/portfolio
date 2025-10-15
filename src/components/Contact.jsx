import {
    Mail,
    MapPin,
    Linkedin,
} from "lucide-react";

export const Contact = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-15 justify-items-center">
                    
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <a
                                href="mailto:chandur.nischal@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                chandur.nischal@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/nchandur"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                linkedin.com/in/nchandur
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <a
                                href="https://www.google.com/maps/place/Jersey+City,+NJ"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors">
                                Jersey City, NJ, USA
                            </a>
                        </div>
                    </div>
                    
                </div>


            </div>
        </section>
    );
};