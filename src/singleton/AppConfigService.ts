export class AppConfigService {
  private static instance: AppConfigService;
  private configuration: Record<string, string>;

  private constructor(
    private readonly companyName: string,
    private readonly footer: string,
  ) {
    this.configuration = {
      companyName: this.companyName,
      footer: this.footer,
    };
  }

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      this.instance = new AppConfigService("Acme Inc.", "Confidential");
    }

    return this.instance;
  }

  public get(key: string): string | undefined {
    return this.configuration[key];
  }

  public set(key: string, value: string): void {
    this.configuration[key] = value;
  }
}
