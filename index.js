import { app } from "./src/app";

const PORT = process.env.PORT || 5000;

const start = async() => {
    console.log(PORT, 'this is port')
    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    })
}


start();

