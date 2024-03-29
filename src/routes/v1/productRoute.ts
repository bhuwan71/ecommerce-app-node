import { Router } from "express";
import { getProductData } from "../../controllers/product";

const productRouter = Router();

productRouter.get("/", getProductData);

export default productRouter;

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product related operations
 */

/**
 * @swagger
 * /v1/product:
 *   get:
 *     summary: Get Product information
 *     description: Retrieve product information.
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *             example:
 *               data: Product information
 */
