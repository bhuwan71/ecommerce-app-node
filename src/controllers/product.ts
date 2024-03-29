import { NextFunction, Response } from "express";

export const getProductData = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        return res.status(200).json({
            data: {this:"hello product data"},
            error: false,
        });
    } catch (err) {
        next(err);
    }
};
