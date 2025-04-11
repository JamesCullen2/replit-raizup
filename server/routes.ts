import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact form submission
      const savedContact = await storage.createContact(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        data: savedContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          message: "Server error while processing your request" 
        });
      }
    }
  });

  // Newsletter subscription endpoint (optional)
  app.post("/api/newsletter", async (req, res) => {
    try {
      // Simple validation
      const { email } = req.body;
      
      if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: "Valid email is required" });
      }
      
      // Store the newsletter subscription
      const subscription = await storage.createNewsletterSubscription(email);
      
      res.status(201).json({
        message: "Successfully subscribed to newsletter",
        data: subscription
      });
    } catch (error) {
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ 
        message: "Server error while processing your subscription" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
