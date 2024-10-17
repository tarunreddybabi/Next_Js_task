export default function LoginPage() {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form style={{height:"500px",width:"500px"}} className="bg-bgSoft rounded-lg p-12 flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-2xl mt-4 block mx-auto my-auto">Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-8 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-8 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white"
        />
        <button className="w-full p-8 bg-teal-500 text-white border-none cursor-pointer rounded-md" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
