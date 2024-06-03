const projectList = [
    {
        title: "Dimension Reduction Analysis with Fruit-360 Dataset",
        time: "April 2024 - May 2024",
        summary: "I studied dimensionality reduction techniques such as PCA, kernel PCA (with polynomial and Gaussian kernels), t-SNE, and Autoencoder embedding using a subset of the Fruit-360 dataset in MATLAB. I applied these methods to transform the dataset and measured the time required for transformation. Furthermore, I conducted KNN classification on both the original and transformed datasets, noting accuracy and classification time. Through this analysis, I showed PCA as the most efficient method for dimensionality reduction in terms of accuracy, time, and classification efficiency.",
        
        image: "images/fruit-classification.png",
        link: "https://github.com/chandurnischal/fruit-classification"
    },
    {
        title: "Sign Language Recognition and Translation",
        time: "March 2024 - May 2024",
        summary: "I developed a sign language recognition and translation system using computer vision techniques and convolutional neural networks. I trained transfer learning models namely InceptionV2, MobileNetV2, DenseNet201, ResNet101, VGG16, and a custom CNN on datasets containing Indian and American sign languages and optimized parameters such as training sizes, epochs, and learning rates. After identifying the top-performing models for each sign language, I deployed them on a user-friendly web application using Flask and ngrok. This enabled users to effortlessly upload images of sign gestures and receive accurate recognitions along with translations. Additionally, I implemented functionality within the application for users to input text strings and receive corresponding finger-spelled gestures for the words in the string, enhancing accessibility and usability.",
        image: "images/sign-language.png",
        link: "https://github.com/chandurnischal/sign-language"
    },
    {
        title: "NBA Prediction Model",
        time: "August 2023 - December 2023",
        summary: "I built a complete end-to-end pipeline for predicting NBA game outcomes. This involved extracting data from various online sources, cleaning, transforming, and loading it into a structured database. Through thorough exploratory data analysis, I identified crucial features that influence game results, drawing insights from established NBA methodologies. Using this insight, I developed a robust machine learning algorithm capable of predicting team victory probabilities based on these features. To make this tool accessible, I created a user-friendly web application using Flask. This application allows users to view daily game schedules, detailed game analytics, team and player statistics, as well as league standings, empowering NBA enthusiasts such as myself with comprehensive insights for better understanding and enjoyment of the sport.",
        image: "images/nba-prediction-model.webp",
        link: "https://github.com/chandurnischal/NBA-prediction-model"
    },
    {
        title: "Pokedex Website",
        time: "May 2024",
        summary: "I created an interactive website using React.js that showcases all the Pokémon. Each Pokémon is represented by a virtual card displaying its name and type on the front. When a user clicks on a card, it flips to reveal additional stats including Total, HP, Attack, Defense, Special Attack, Special Defense, and Speed. To enhance user experience, I incorporated an intuitive search bar at the top of the website. Users can easily search for any Pokémon, and the cards dynamically filter to display the best matches for the search query. This project represents my initiation into front-end development, combining creativity and functionality to bring the world of Pokémon to life on the web.",
        image: "images/pokedex.jpeg",
        link: "https://github.com/chandurnischal/pokedex-react"
    },
    
];

export default projectList;

