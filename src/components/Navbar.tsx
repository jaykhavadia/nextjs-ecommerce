'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const showLogin = !user && pathname !== '/login' && pathname !== '/register';
  const showRegister = pathname === '/login';
  const showLoginFromRegister = pathname === '/register';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/products">Products</Button>
          <Button color="inherit" component={Link} href="/cart">Cart</Button>

          {user ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              {showLogin && (
                <Button color="inherit" component={Link} href="/login">
                  Login
                </Button>
              )}
              {showRegister && (
                <Button color="inherit" component={Link} href="/register">
                  Register
                </Button>
              )}
              {showLoginFromRegister && (
                <Button color="inherit" component={Link} href="/login">
                  Login
                </Button>
              )}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
