function Login() {
  return (
    <form className="flex flex-col items-end h-full bg-secondary w-full rounded-4xl p-10 gap-4">
      <h2 className="text-tertiary">Bem vindo de volta!</h2>
      <input className="w-full" placeholder="e-mail univesp"></input>
      <input className="w-full" placeholder="senha"></input>
      <p>Esqueceu a senha?</p>
    </form>
  );
}

export default Login;
