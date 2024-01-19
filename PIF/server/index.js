import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import { userRoute} from './routes/userRoute.js';
import { offerRoute } from './routes/offerRoute.js';
import { groundRoute } from './routes/groundRoute.js';
import { locationRoute } from './routes/locationRoutes.js';
import { messageRoute } from './routes/messageRoute.js';
import { categoryRoute } from './routes/categoryRoute.js';

//configuration des variabls d'environement
dotenv.config()
//initialisation de l'appliacation express
const app = express();
//configuration du port d'ecoute
const PORT = process.env.PORT || 3000// accede au contenu de .env si le port dns le fichier .env n'est pas dispo on utlise le port 3000

//configuration des middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//demarrage du serveur
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT} `)
});

//confiuration des routes
app.use('/api/user', userRoute);//route pour les utilisateurs
app.use('/api/offer', offerRoute);// routes pour les annonces
app.use('/api/ground', groundRoute);//routes pour les terrains
app.use('/api/location', locationRoute);
app.use('/api/message', messageRoute);
app.use('/api/category', categoryRoute);