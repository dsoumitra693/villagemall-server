import { NextFunction, Request, Response } from "express";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { responseBuilder } from "../utils/responseBuilder";
import { DBReposetory } from "../repo/database";
import { orderCataory } from "../utils/types";

const dbRepo = new DBReposetory();

export const rewardCalc = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const { orderId } = req.body;
    if (!orderId)
      res.send(
        responseBuilder({
          message: "OrderId must be there",
          success: false,
          errorCode: "INVALID_DATA_RECIVED",
        })
      );

    const { distance, totalPrice, catagory } = await dbRepo.getOrderData(
      orderId
    );

    let reward = 0;

    switch (catagory) {
      case orderCataory.FOOD:
        if (totalPrice < 30) reward = 5;
        else if (totalPrice > 30 && totalPrice < 80) reward = 10;
        else reward = 20;
        break;
      case orderCataory.GROCERY:
        reward = Math.floor(totalPrice * 0.01);
      default:
        reward = Math.floor(totalPrice * 0.01);
        break;
    }

    res.status(200).send(
      responseBuilder({
        message: `You get a reward of ${reward}`,
        success: true,
        data: {
          reward,
        },
      })
    );
  }
);
