import { AppImage } from "./app-image";

export interface Product {
    image: AppImage;
    name: string;
    category: string;
    price: number;
}
