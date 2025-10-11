import React, { useState } from "react";
import { Box, Container, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledContainer = styled(Container)({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(45deg, #f3f4f6 30%, #ffffff 90%)",
});

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if(!email || !password) {
            setError("All fields are mandatory");
            setLoading(false);
            return;
        }

        const loginData = {
            email,
            password
        }
        console.log(loginData);

        try {
            const response = await axios.post("/api/user/login", loginData);
            console.log(response.data)
            localStorage.setItem("user", JSON.stringify(response.data.data));
            navigate("/chat")

            setEmail("");
            setPassword("");

            setLoading(false);
        } catch (error) {
            console.log(`SignIn Error :: ${error.message}`);
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <StyledContainer maxWidth="sm">
            <Box textAlign="center" py={4}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: "#1a365d",
                        mb: 3,
                    }}
                >
                    Welcome to ChatApp
                </Typography>
                <Box component="form" sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative">
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="bg-gray-400 px-2 py-1 rounded w-fit absolute top-8 right-2 text-sm cursor-pointer select-none"
                        >
                            Show
                        </p>
                    </div>

                    {/* error */}
                    {error ? (<p className="text-sm text-red-500"> { error } </p>) : null}

                    <Button
                    onClick={handleSignIn}
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: "#2c5282",
                            "&:hover": {
                                backgroundColor: "#1a365d",
                            },
                        }}
                    >
                        {loading ? "Loading..." : "Sign In"}
                    </Button>
                    <Button
                        onClick={() => navigate("/signup")}
                        sx={{ color: "#2c5282" }}
                    >
                        Don't have an account? Sign Up
                    </Button>
                </Box>
            </Box>
        </StyledContainer>
    );
};

export default Home;
