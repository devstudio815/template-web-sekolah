import AuthCard from "@/features/auth/Auth";
import { LoginForm } from "@/features/auth/Login";

export default function Login() {
  return (
    <AuthCard showLogo={false}>
      <LoginForm />
    </AuthCard>
  );
}
