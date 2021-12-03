import { HttpClientInterface } from "../http";
import { LoggerInterface } from "../logger";
import { EngineService } from "./engine";
import { Context } from "../types";

export class ResourceManager {
  context: Context;
  engine: EngineService;

  constructor(context: {
    httpClient: HttpClientInterface;
    logger: LoggerInterface;
    apiUrl: string;
  }) {
    this.context = {
      ...context,
      resourceManager: this
    };
    this.engine = new EngineService(this.context);
  }
}
