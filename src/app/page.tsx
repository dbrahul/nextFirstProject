"use client";

// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

// Define validation schema using zod
const schema = z.object({
  email: z.string().nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long').nonempty('Password is required'),
});

// Define the form data type
interface formSchema {
  email: string;
  password: string;
}

const LoginForm = () => {
  // Initialize react-hook-form with zod schema validation
  const { register, handleSubmit, formState: { errors } } = useForm<formSchema>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  // Handle form submission
  const onSubmit = async (data: formSchema) => {
    // Send a POST request to the login API
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      })
    });

    // Handle the response
    if (response.status === 200) {
      // Redirect to the projects page on successful login
      router.push("/project");
    } else {
      // Show an alert with the error message if login fails
      alert(response.statusText);
    }
  };

  return (
    <Box sx={{
      height: "100vh",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    }}>
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
        {/* Form for user login */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email input field */}
          <TextField
            {...register('email')}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          {/* Password input field */}
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
          {/* Submit button */}
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
    </Box>
  );
};

export default LoginForm;
