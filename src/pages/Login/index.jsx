import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.css";
import Layouts from "../../common/components/Layouts";
import logo from "images/common/logo.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate 사용

  // ✅ 로그인 상태 확인 후 리디렉션
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/works", { replace: true }); // 이미 로그인된 경우 자동 이동
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return alert("ID와 PASSWORD를 입력해주세요.");
    }

    setIsLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "로그인이 실패하였습니다.");
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);

      alert("Login successful!");
      navigate("/works", { replace: true });
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layouts>
      <div className={style.container}>
        <img alt="logo" src={logo} />

        <form onSubmit={handleSubmit}>
          <div className={style.field_box}>
            <input
              type="text"
              name="username"
              className={style.user_id}
              placeholder="ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className={style.pass}
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={style.post_btn} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </Layouts>
  );
}

export default Login;
