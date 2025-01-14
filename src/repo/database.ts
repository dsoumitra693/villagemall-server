import { AppwriteClient } from "../lib/appwrite";

export class DBReposetory {
  private appwriteClient: AppwriteClient;
  constructor() {
    this.appwriteClient = new AppwriteClient();
  }

  public async getOrderData(orderId: string) {
    const { totalPrice, catagory, distance } =
      await this.appwriteClient.getDocument(orderId);

    return { orderId, distance, totalPrice, catagory };
  }
}
