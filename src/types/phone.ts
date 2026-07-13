export interface Phone {
  id?: string;            // Firestore Document ID (optional for local/mock data)
  model: string;          // e.g., "iPhone 15 Pro Max"
  type: "preowned" | "brandnew";
  
  // Pre-Owned fields
  priceRange?: string;    // e.g., "P9500-P11000"
  condition?: string;     // e.g., "Varies", "Like New"
  
  // Brand New fields
  storage?: string;       // e.g., "128GB", "256GB"
  warranty?: string;      // e.g., "1 Year", "6 Months"
  price?: string;         // e.g., "P15200"
  
  // Sales / Promotional fields
  isSale?: boolean;        // true if featured on the Sales tab
  originalPrice?: string;  // e.g., "P11000" (to show discount comparison)
  salePrice?: string;      // e.g., "P9900" (actual selling price during sale)
  saleDescription?: string;// e.g., "Free cover + glass protector"
  
  createdAt?: any;        // Firestore Timestamp
}
