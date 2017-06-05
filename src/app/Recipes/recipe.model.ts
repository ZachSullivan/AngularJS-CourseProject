export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string; // Holds an image URL

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
