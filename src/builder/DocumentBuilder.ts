export class DocumentBuilder {
  private header: string = "";
  private body: string = "";
  private footer: string = "";
  private sectionSplitter = "\n\n";

  public addHeader(header: string): this {
    this.header = header;
    return this;
  }

  public addBody(body: string): this {
    this.body = body;
    return this;
  }

  public addFooter(footer: string): this {
    this.footer = footer;
    return this;
  }

  public build(): string {
    return (
      this.header +
      this.sectionSplitter +
      this.body +
      this.sectionSplitter +
      this.footer
    );
  }
}
