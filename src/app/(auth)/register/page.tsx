"use client";
import Input from "@/app/components/matertial/input";
import { fetchActionApi } from "@/app/utils/action";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    let body = {
      username: username,
      email: email,
      password: password,
    };
    const res = await fetchActionApi("/api/auth/local/register", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res) {
      if (res.status !== 200) {
        console.log(res);
        alert("error");
      } else {
        console.log(res);
        alert("Registration successful");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">Register</h1>
        <form onSubmit={(e) => register(e)}>
          <div className="mb-4">
          <Input
                label="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required>
            </Input>
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-4">
          <Input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required>
            </Input>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">Register</button>
        </form>
      </div>
    </div>
  );
}