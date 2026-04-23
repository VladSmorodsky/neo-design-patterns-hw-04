import { AppConfigService } from "./AppConfigService";

const config1 = AppConfigService.getInstance();
const config2 = AppConfigService.getInstance();

config2.set("company", "Another Corp");
console.log(config2.get("company"));

console.log(config1 === config2);
