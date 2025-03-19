import { AppDataSource } from "../database/data-source";
import { Sale } from "../models/Sale";

export const saleRepository = AppDataSource.getRepository(Sale);