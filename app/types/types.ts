interface Account {
  id: string;
  userId: string;
  providerType: string;
  providerId: string;
  providerAccountId: string;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpires: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Session {
  id: string;
  userId: string;
  expires: Date;
  sessionToken: string;
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
  accounts: Account[];
  sessions: Session[];
  orders: Order[];
}

interface VerificationRequest {
  id: string;
  identifier: string;
  token: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface Order {
  id: number;
  products: ProductOnOrder[];
  tableId: number;
  invoiceId: number | null;
  served: boolean;
  paid: boolean;
  userId: string;
  userEmail: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string | null;
  orders: ProductOnOrder[];
}

interface ProductOnOrder {
  orderId: number;
  productId: number;
  quantity: number;
}

interface Table {
  id: number;
  number: number;
  orders: Order[];
}

interface Invoice {
  id: number;
  total: number;
  paid: boolean;
  orderId: number;
}
