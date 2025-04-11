import { 
  type Contact, 
  type InsertContact, 
  type NewsletterSubscription 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createNewsletterSubscription(email: string): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private contactIdCounter: number;
  private subscriptionIdCounter: number;

  constructor() {
    this.contacts = new Map();
    this.newsletterSubscriptions = new Map();
    this.contactIdCounter = 1;
    this.subscriptionIdCounter = 1;
  }

  async createContact(contactData: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const createdAt = new Date();
    const contact: Contact = { ...contactData, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createNewsletterSubscription(email: string): Promise<NewsletterSubscription> {
    const id = this.subscriptionIdCounter++;
    const createdAt = new Date();
    const subscription: NewsletterSubscription = { email, id, createdAt };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
