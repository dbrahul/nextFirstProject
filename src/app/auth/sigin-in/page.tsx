"use client";

// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Box, Typography } from '@mui/material';

// Define validation schema using zod
const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long').nonempty('Password is required'),
});

// Define the form data type

 interface formSchema  {
  email: string;
  password: string;
}

const LoginForm = () => {
  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<formSchema>({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data: formSchema) => {
    console.log('Form Data:', data);
    // Implement login logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register('password')}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
