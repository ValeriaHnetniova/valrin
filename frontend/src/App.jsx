import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";

const queryClient = new QueryClient();


function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <AppRouter/>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
