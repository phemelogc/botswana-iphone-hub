import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Phone } from "@/types/phone";

// Default mock data in case Firestore is not set up yet
const defaultPreOwned: Phone[] = [
  { model: "iPhone X", priceRange: "P1600-P2200", condition: "Varies", type: "preowned" },
  { model: "iPhone XS", priceRange: "P2000-P2400", condition: "Varies", type: "preowned" },
  { model: "iPhone XR", priceRange: "P2200-P2500", condition: "Varies", type: "preowned" },
  { model: "iPhone XS Max", priceRange: "P2400-P2800", condition: "Varies", type: "preowned" },
  { model: "iPhone 11", priceRange: "P3000-P3500", condition: "Varies", type: "preowned" },
  { model: "iPhone 11 Pro", priceRange: "P3300-P3800", condition: "Varies", type: "preowned" },
  { model: "iPhone 11 Pro Max", priceRange: "P3500-P4000", condition: "Varies", type: "preowned" },
  { model: "iPhone 12", priceRange: "P3500-P4300", condition: "Varies", type: "preowned" },
  { model: "iPhone 12 Pro", priceRange: "P4300-P5000", condition: "Varies", type: "preowned" },
  { model: "iPhone 12 Pro Max", priceRange: "P4500-P5300", condition: "Varies", type: "preowned" },
  { model: "iPhone 13", priceRange: "P4800-P5300", condition: "Varies", type: "preowned" },
  { model: "iPhone 13 Pro", priceRange: "P5300-P6000", condition: "Varies", type: "preowned" },
  { model: "iPhone 13 Pro Max", priceRange: "P6000-P6800", condition: "Varies", type: "preowned" },
  { model: "iPhone 14", priceRange: "P6000-P6500", condition: "Varies", type: "preowned" },
  { model: "iPhone 14 Plus", priceRange: "P6500-P7000", condition: "Varies", type: "preowned" },
  { model: "iPhone 14 Pro Max", priceRange: "P7500-P8700", condition: "Varies", type: "preowned" },
  { model: "iPhone 15", priceRange: "P7000-P8000", condition: "Varies", type: "preowned" },
  { model: "iPhone 15 Plus", priceRange: "P7500-P8500", condition: "Varies", type: "preowned" },
  { model: "iPhone 15 Pro", priceRange: "P8000-P9500", condition: "Varies", type: "preowned" },
  { model: "iPhone 15 Pro Max", priceRange: "P9500-P11000", condition: "Varies", type: "preowned" },
  { model: "iPhone 16", priceRange: "P8000-P9000", condition: "Varies", type: "preowned" },
  { model: "iPhone 16 Plus", priceRange: "P8500-P9500", condition: "Varies", type: "preowned" },
  { model: "iPhone 16 Pro", priceRange: "P10000-P11500", condition: "Varies", type: "preowned" },
  { model: "iPhone 16 Pro Max", priceRange: "P11500-P13000", condition: "Varies", type: "preowned" },
];

const defaultBrandNew: Phone[] = [
  { model: "iPhone X", storage: "64GB", price: "P3300", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone X", storage: "256GB", price: "P3600", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone XR", storage: "64GB", price: "P3600", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone XR", storage: "128GB", price: "P3900", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone XS Max", storage: "64GB", price: "P3800", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone XS Max", storage: "256GB", price: "P4200", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 11", storage: "64GB", price: "P4300", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 11", storage: "128GB", price: "P4600", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 11 Pro", storage: "64GB", price: "P5000", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 11 Pro", storage: "256GB", price: "P5400", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 11 Pro Max", storage: "64GB", price: "P5500", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 11 Pro Max", storage: "256GB", price: "P5900", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 12", storage: "64GB", price: "P5000", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 12", storage: "128GB", price: "P5400", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 12 Pro", storage: "128GB", price: "P6200", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 12 Pro", storage: "256GB", price: "P6500", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 12 Pro Max", storage: "128GB", price: "P6900", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 12 Pro Max", storage: "256GB", price: "P7300", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 13", storage: "128GB", price: "P6700", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 13", storage: "256GB", price: "P7000", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 13 Pro", storage: "128GB", price: "P8200", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 13 Pro", storage: "256GB", price: "P8500", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 13 Pro Max", storage: "128GB", price: "P8800", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 13 Pro Max", storage: "256GB", price: "P9100", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14", storage: "128GB", price: "P8500", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14", storage: "256GB", price: "P8900", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14 Plus", storage: "128GB", price: "P9000", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14 Plus", storage: "256GB", price: "P9500", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14 Pro", storage: "128GB", price: "P10200", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14 Pro", storage: "256GB", price: "P10800", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14 Pro Max", storage: "128GB", price: "P10900", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 14 Pro Max", storage: "256GB", price: "P11300", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15", storage: "128GB", price: "P10400", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15", storage: "256GB", price: "P11000", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15 Plus", storage: "128GB", price: "P11000", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15 Plus", storage: "256GB", price: "P11400", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15 Pro", storage: "128GB", price: "P12600", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15 Pro", storage: "256GB", price: "P13150", warranty: "1 Year", type: "brandnew" },
  { model: "iPhone 15 Pro Max", storage: "256GB", price: "P15200", warranty: "1 Year", type: "brandnew" },
];

const defaultSales: Phone[] = [
  {
    model: "iPhone 15 Pro Max",
    type: "brandnew",
    storage: "256GB",
    warranty: "1 Year",
    price: "P14500",
    isSale: true,
    originalPrice: "P15200",
    salePrice: "P14500",
    saleDescription: "Save P700 + Free Premium Silicon Case & 9D Tempered Glass",
  },
  {
    model: "iPhone 14 Pro",
    type: "brandnew",
    storage: "128GB",
    warranty: "1 Year",
    price: "P9600",
    isSale: true,
    originalPrice: "P10200",
    salePrice: "P9600",
    saleDescription: "Save P600 + Free Express Delivery anywhere in Botswana",
  },
  {
    model: "iPhone 13",
    type: "preowned",
    priceRange: "P4400",
    condition: "Like New",
    isSale: true,
    originalPrice: "P4800-P5300",
    salePrice: "P4400",
    saleDescription: "Limited Promo: Save P400+ on Like New condition. 85%+ Battery Health guaranteed",
  },
  {
    model: "iPhone 11",
    type: "preowned",
    priceRange: "P2600",
    condition: "Excellent",
    isSale: true,
    originalPrice: "P3000-P3500",
    salePrice: "P2600",
    saleDescription: "Web Exclusive: Reliable everyday standard at the lowest price this year",
  },
];

const allDefaultMock: Phone[] = [
  ...defaultPreOwned,
  ...defaultBrandNew,
  ...defaultSales,
];

export const usePhones = () => {
  const [phones, setPhones] = useState<Phone[]>(allDefaultMock);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhones = async () => {
      // Check if project is set to default placeholder API key
      const isPlaceholder = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "placeholder-api-key";

      if (isPlaceholder) {
        console.warn("Firebase not configured. Using high-quality offline inventory fallback.");
        setPhones(allDefaultMock);
        setLoading(false);
        return;
      }

      try {
        const phonesRef = collection(db, "phones");
        const q = query(phonesRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        const fetchedPhones: Phone[] = [];
        querySnapshot.forEach((doc) => {
          fetchedPhones.push({
            id: doc.id,
            ...doc.data()
          } as Phone);
        });

        if (fetchedPhones.length === 0) {
          console.warn("Firestore returned 0 items. Falling back to default mock inventory.");
          setPhones(allDefaultMock);
        } else {
          setPhones(fetchedPhones);
        }
        setError(null);
      } catch (err: any) {
        console.error("Error fetching devices from Firestore, falling back to mock data:", err);
        setError(err.message || "Failed to load dynamic data");
        // Maintain mock data on firestore error
        setPhones(allDefaultMock);
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  const preOwned = phones.filter((p) => p.type === "preowned" && !p.isSale);
  const brandNew = phones.filter((p) => p.type === "brandnew" && !p.isSale);
  const sales = phones.filter((p) => p.isSale);

  return { preOwned, brandNew, sales, loading, error };
};
