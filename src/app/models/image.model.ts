import {Model} from "./interfaces/model.interface";

export class ImageModel implements Model {
  readonly url : string
  readonly desc : string
  readonly height : number
  readonly width : number
  readonly likes : number
  readonly username : string

  constructor(input: Partial<ImageModel>) {
    this.url = input.url || '';
    this.desc = input.desc || '';
    this.height = input.height || 150;
    this.width = input.width || 150;
    this.likes = input.likes || 0;
    this.username = input.username || '';
  }
}
