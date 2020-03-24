export class Items {
    name:string;
    price: number;
    imagePath:string;
    extraImages: string[];
    description?: string;

    constructor (name:string, price: number, imagePath:string, extraImg:string[], description?: string){
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.extraImages = extraImg;
        this.description = description;
    }
}