"use server";

import { revalidatePath } from "next/cache";
import Quote from "../model/quote_display.model"
import { connectToDatabase } from "../mongooes";
import { handleError } from "../utils";


export async function getQuotes() {
    try {
      await connectToDatabase();
  
      const pages = await Quote.find({});
  
      if (pages.length === 0) throw new Error("No pages found");
  
      return JSON.parse(JSON.stringify(pages));
    } catch (error) {
      handleError(error);
    }
  }
