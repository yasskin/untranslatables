export class Word {
  constructor(
    public name: string,
    public definition: string,
    public origin?: string,
    public language?: string,
    public sentence?: string,
    public partOfSpeech?: string,
    public color?: string,
    public link?: string,
    public font?: string,
    public imageUrl?: string,
    public imageCaption?: string,
    public imageSource?: string,
    public wordId?: string,
    public user?: string,
    public userId?: string ) {}
}
