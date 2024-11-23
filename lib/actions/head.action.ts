"use server";

import Head from "../model/head.model"
import { connectToDatabase } from "../mongoose";
import { handleError } from "../utils";


export async function getHead(category: string,page:string) {
    try {
      await connectToDatabase();
      const firstWordCategory = typeof category === 'string' ? category.split('-')[0] : '';
    //   const pages = await Head.find({
    //     category:firstWordCategory,
    //     page:"quote"
    //   });
    const pages = await Head.find({
        category: { $regex: new RegExp(firstWordCategory, 'i') }, // Case-insensitive match
        page: page
      }).lean();
  
      return JSON.parse(JSON.stringify(pages));
    } catch (error) {
      handleError(error);
    }
  }
