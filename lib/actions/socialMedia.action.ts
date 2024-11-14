"use server";

import Social from "../model/socialMedia.model"
import { connectToDatabase } from "../mongoose";
import { handleError } from "../utils";


export async function getSocial() {
    try {
      await connectToDatabase();
  
      const pages = await Social.find({});
  
      if (pages.length === 0) throw new Error("No pages found");
  
      return JSON.parse(JSON.stringify(pages));
    } catch (error) {
      handleError(error);
    }
  }
