const projectList = [
    {
        title: `Dimension Reduction Analysis with Fruit-360 Dataset`,
        time: `April 2024 - May 2024`,
        summary: `I explored advanced dimension reduction techniques (PCA, kernel PCA, t-SNE, and Autoencoders) using the Fruit-360 dataset, which encompasses 90,380 images of fruits and vegetables. By transforming 100x100 images into 1D arrays and utilizing MATLAB for efficient data processing, I visualized the first two features of each technique and evaluated classification performance with the K-nearest Neighbors algorithm, assessing accuracy and identifying challenging classes. My analysis revealed Principal Component Analysis as the optimal embedding method, showcasing its computational efficiency (780 ms) and validation accuracy (0.99) in dimensionality reduction.`,
        image: `images/fruit-classification.png`,
        link: `https://github.com/chandurnischal/fruit-classification`
    },
    {
        title: `Sign Language Recognition and Translation`,
        time: `March 2024 - May 2024`,
        summary: `I developed an innovative sign language recognition and translation platform utilizing deep neural networks and computer vision to enhance learning and communication in Indian Sign Language (ISL) and American Sign Language (ASL). I explored and evaluated multiple transfer learning models, including InceptionV3, MobileNetV2, DenseNet201, ResNet101, and VGG16, using precision, recall, F1-score, and accuracy metrics. I developed a custom CNN that achieved 96% validation accuracy for gesture recognition. Additionally, I built a user-friendly web application using Flask and HTML, enabling users to upload gesture images for recognition or translate text into sign language gestures, thus facilitating seamless cross-language communication. The application was deployed via ngrok for global accessibility.`,
        image: `images/sign-language.png`,
        link: `https://github.com/chandurnischal/sign-language`
    },
    {
        title: `NBA Prediction Model`,
        time: `August 2023 - December 2023`,
        summary: `I developed a real-time NBA match prediction model using historic data from 1980 to the present, extracting comprehensive team and player statistics, match outcomes, and advanced metrics. I preprocessed this data and loaded it into a MySQL database for continuous updates. By engineering features like team Elo ratings, league win percentage, and player efficiency ratings, I conducted exploratory data analysis to pinpoint the most predictive features. I tested various machine learning models, including KNN, Random Forest, and Naive Bayes, to identify the optimal approach. Additionally, I created a dynamic Flask web application that displays daily NBA matches, featuring team stats, top performers, and win probabilities based on the trained model, significantly enhancing user interaction and engagement.`,
        image: `images/nba-prediction-model.webp`,
        link: `https://github.com/chandurnischal/NBA-prediction-model`
    },
    {
        title: `Pokedex Website`,
        time: `May 2024`,
        summary: `I created an interactive website using React.js that showcases all the Pokémon. Each Pokémon is represented by a virtual card displaying its name and type on the front. When a user clicks on a card, it flips to reveal additional stats including Total, HP, Attack, Defense, Special Attack, Special Defense, and Speed. To enhance user experience, I incorporated an intuitive search bar at the top of the website. Users can easily search for any Pokémon, and the cards dynamically filter to display the best matches for the search query. This project represents my initiation into front-end development, combining creativity and functionality to bring the world of Pokémon to life on the web.`,
        image: `images/pokedex.jpeg`,
        link: `https://github.com/chandurnischal/pokedex-react`
    },
    
];

export default projectList;

