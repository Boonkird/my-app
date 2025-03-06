"use client";
import Input from "@/app/components/matertial/input";
import { fetchActionApi, setAccessToken } from "@/app/utils/action";
import { useState } from "react";

interface LoginResponse {
    jwt: string;
    user: {
        id: number;
        documentID: number;
    }
}
export default function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        let body = {
        identifier : identifier,
        password : password,
        };
    const res = await fetchActionApi("/api/auth/local", {
        method: "POST",
        body: JSON.stringify(body),
    });

    if (res) {
        console.log(res);
        if (res.status === 200) {
            const token = res.data as LoginResponse
                await setAccessToken(token.jwt);
                window.location.href = "/";
        } else {
            alert("login failed");
        }
    }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Login</h2>
        <form onSubmit={(e) => login(e)}>
        <div className="mb-4">
            <Input
                label="Username"
                type="text"
                id="username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required>
            </Input>

            
        </div>
            
            <div className="mb-4">
            <Input
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required>
            </Input>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">Submit</button>
        </form>
        </div>
    </div>
    );
}