const projectList = [
    {
        title: "Fruit Classification",
        time: "April 2024 - May 2024",
        summary: "Using MATLAB, I explored various dimensionality reduction methods on a subset of the Fruit-360 dataset by mapping the original data onto a transformed space. I conducted a rigorous comparative study of four methods: PCA, kPCA (polynomial and Gaussian kernels), autoencoder embedding, and TSNE embedding. I measured the time taken for these embeddings and performed KNN classification on the transformed data, comparing the accuracy and classification time for each method. Through these results, I identified the best method for dimensionality reduction.",
        image: "src/assets/images/fruit-classification.png",
        link: "https://github.com/chandurnischal/fruit-classification"
    },
    {
        title: "Sign Language Recognition and Translation",
        time: "March 2024 - May 2024",
        summary: "I developed a sign language recognition model capable of recognizing gestures in both Indian and American Sign Languages. This project involved evaluating the performance of several transfer learning models, including InceptionV2, MobileNetV2, DenseNet201, ResNet101, VGG16, and a custom CNN. After selecting the best-performing models for each language, I deployed them on a web application built with Flask. The application enables users to upload images of hand gestures and learn their equivalents in the other language.",
        image: "src/assets/images/sign-language.png",
        link: "https://github.com/chandurnischal/sign-language"
    },
    {
        title: "NBA Prediction Model",
        time: "August 2023 - December 2023",
        summary: "I developed an end-to-end data pipeline focused on NBA analytics, extracting, cleaning, transforming, and loading data from an online database. This comprehensive dataset spans player stats, team stats, and game stats from 1980 to the present. Leveraging machine learning algorithms, I conducted in-depth analyses and predictions for NBA game outcomes. Additionally, I crafted a web application, offering users real-time access to daily game schedules and detailed insights. Users can explore game probabilities, team performance trends, top player statistics, and conference standings, enhancing their NBA viewing experience with rich statistical insights.",
        image: "src/assets/images/nba-prediction-model.webp",
        link: "https://github.com/chandurnischal/NBA-prediction-model"
    },
    {
        title: "Blackjack Game",
        time: "August 2023 - October 2023",
        summary: "I've developed an engaging Blackjack game that you can play directly in your terminal using Python. It offers all the excitement of the classic card game, complete with intuitive prompts and easy-to-follow instructions, allowing players to make strategic decisions right from their command line interface.",
        image: "src/assets/images/blackjack.jpg",
        link: "https://github.com/chandurnischal/blackjack"
    },
    {
        title: "Pokedex Website",
        time: "May 2024",
        summary: "I designed and developed a captivating web application using React.js, that provides a one-stop destination for fans to explore and delve into the statistics of their favorite Pokémon. Users can effortlessly navigate through the webpage, scrolling through a comprehensive collection of Pokémon, or utilize the intuitive search bar to quickly locate their desired Pokémon. With just a click, users can access detailed statistics presented on the back of a virtual Pokémon card, immersing themselves in the attributes of each creature.",
        image: "src/assets/images/pokedex.jpeg",
        link: "https://github.com/chandurnischal/pokedex-react"
    },
    
];

export default projectList;

