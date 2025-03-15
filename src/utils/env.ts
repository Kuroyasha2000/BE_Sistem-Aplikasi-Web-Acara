import dotenv from "dotenv";

dotenv.config();

// export const DATABASE_URL = `mongodb+srv://asepwibu711:OtWpRqAJo8oLoMg7@cluster-mang-gabut.i9nsf.mongodb.net/?retryWrites=true&w=majority&appName=cluster-mang-gabut`;
export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const SECRET: string = process.env.SECRET || "";