import { Client, Databases } from "node-appwrite";
import { config } from "dotenv";

config();

export class AppwriteClient {
  private client: Client;
  private databases: Databases;
  constructor() {
    this.client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(process.env.APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);
    this.databases = new Databases(this.client);
  }

  public async getDocument(orderId: string) {
    const result = await this.databases.getDocument(
      process.env.APPWRITE_DB_ID!,
      process.env.APPWRITE_COLLECTION_ID!,
      orderId,
      []
    );

    return result;
  }
}

