'use client';
import RequireAuth from '@/components/RequireAuth';

export default function CartWrapper() {
  return (
    <RequireAuth>
      <CartPage />
    </RequireAuth>
  );
}


import { useCart } from '@/contexts/CartContext';
import { Typography, List, ListItem, ListItemText, IconButton, TextField, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id} alignItems="flex-start">
                <ListItemText
                  primary={`${item.name} - ₹${item.price}`}
                  secondary={
                    <Box display="flex" alignItems="center" gap={2} mt={1}>
                      <TextField
                        type="number"
                        label="Qty"
                        size="small"
                        value={item.quantity}
                        inputProps={{ min: 1 }}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      />
                      <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" mt={3}>Total: ₹{total.toFixed(2)}</Typography>
          <Button onClick={clearCart} variant="outlined" sx={{ mt: 2 }}>Clear Cart</Button>
        </>
      )}
    </Box>
  );
}
