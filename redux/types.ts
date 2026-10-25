// redux/types.ts

// ==========================================
// 👤 1. AUTHENTICATION & USER TYPES
// ==========================================

export interface User {
  _id: string;
  name: string;
  email: string;
  companyName?: string;
  gstNumber?: string;
  role: 'buyer' | 'seller' | 'admin';
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password?: string;
  otp?: string; // इंडियामार्ट की तरह OTP लॉगिन सपोर्ट के लिए फ्यूचर-प्रूफिंग
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password?: string;
  companyName?: string;
  gstNumber?: string;
  role: 'buyer' | 'seller';
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user: User;
}

export interface BaseSuccessResponse {
  success: boolean;
  message?: string;
}

// ==========================================
// 📁 2. B2B MARKETPLACE CATEGORY TYPES
// ==========================================

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image?: string;
  isActive: boolean;
}

// ==========================================
// 📍 3. HIERARCHICAL LOCATION TYPES
// ==========================================

export interface Area {
  _id: string;
  name: string;
  pincode: string;
}

export interface City {
  _id: string;
  name: string;
  stateId: string;
  areas?: Area[];
}

export interface State {
  _id: string;
  name: string;
  cities?: City[];
}

// ==========================================
// 📦 4. HIGH-VOLUME PRODUCT TYPES
// ==========================================

export interface Product {
  _id: string;
  title: string;
  price: number;
  unit: string; // e.g., "Piece", "kg", "Ton", "Meter"
  description?: string;
  categoryId: string;
  stateId: string;
  cityId: string;
  areaId?: string;
  locationName: string; // Display purposes (e.g., "Okhla, New Delhi")
  sellerId: string;
  images: string[];
  createdAt: string;
}

// ==========================================
// 🌐 5. API QUERY PARAMETERS & RESPONSES
// ==========================================

// प्रोडक्ट लिस्ट रिस्पॉन्स (एडवांस्ड पेजिनेशन के साथ)
export interface ProductsResponse {
  products: Product[];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
}

// इंडियामार्ट लेवल डीप-फ़िल्टरिंग क्वेरी पैरामीटर्स
export interface ProductQueryParams {
  page?: number;
  limit?: number;
  category?: string;
  state?: string;
  city?: string;
  area?: string;
  search?: string;
}
