"use server";

import Shayari from "../model/shayari.model"
import { connectToDatabase } from "../mongoose";
import { handleError } from "../utils";


export async function getShayari() {
    try {
      await connectToDatabase();
  
      const pages = await Shayari.find({});
  
      if (pages.length === 0) throw new Error("No pages");
  
      return JSON.parse(JSON.stringify(pages));
    } catch (error) {
      handleError(error);
    }
  }
