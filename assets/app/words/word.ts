export class Word {
  constructor(
    public name: string,
    public wordId: string,
    public definition: string,
    public image?: string,
    public origin?: string,
    public language?: string,
    public sentence?: string,
    public partOfSpeech?: string,
    public color?: string,
    public link?: string,
    public font?: string,
    public imageCaption?: string,
    public imageSource?: string,
    public user?: string,
    public userId?: string ) {}
}
