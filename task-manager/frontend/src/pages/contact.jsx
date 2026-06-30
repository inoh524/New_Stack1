// import image1 from "../assets/meme.jpg";
// import image2 from "../assets/meme1.jpg";
// import image3 from "../assets/meme2.jpg";

// export default function Contact(){
//     const contact_image=[image1, image2, image3];

//     return(
//         <div>
//             <Gallery />
//         </div>
//     );

//     function Gallery(){
//         return(
//             <div className="grid grid-cols-3">
//                 {contact_image.map((image, index)=>(
//                     <img key={index} src={contact_image} alt="image" />
//                 ))}
//             </div>
//         );
//       }
// }

import { useForm } from "react-hook-form";
import { useState } from "react";

// npm install react-hook-form

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  const [serverError, setServerError] = useState(null);

  const onSubmit = async (data) => {
    setServerError(null);
    try {
      // Replace with your real auth call
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (data.email === "fail@test.com") {
            reject(new Error("Invalid credentials"));
          } else {
            resolve();
          }
        }, 900)
      );
      console.log("Logged in:", data);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0D0E] px-4">
      <div className="w-full max-w-sm">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#E8A33D]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#7A7E82] uppercase">
            Session / Authenticate
          </span>
        </div>

        <div className="rounded-2xl border border-[#1F2224] bg-[#121415] p-8 shadow-[0_0_0_1px_rgba(232,163,61,0.04)]">
          <h1 className="text-2xl font-semibold text-[#F2EFE9] tracking-tight">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-[#7A7E82]">
            Sign in to pick up where you left off.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5" noValidate>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-[#9A9EA2] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`w-full rounded-lg bg-[#0B0D0E] border px-3.5 py-2.5 text-sm text-[#F2EFE9]
                  placeholder:text-[#4A4E52] outline-none transition-colors
                  focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]/40
                  ${errors.email ? "border-[#D9534F]" : "border-[#272A2C]"}`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-[#E2766F]">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-mono uppercase tracking-wider text-[#9A9EA2]"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-[#7A7E82] hover:text-[#E8A33D] transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters",
                  },
                })}
                className={`w-full rounded-lg bg-[#0B0D0E] border px-3.5 py-2.5 text-sm text-[#F2EFE9]
                  placeholder:text-[#4A4E52] outline-none transition-colors
                  focus:border-[#E8A33D] focus:ring-1 focus:ring-[#E8A33D]/40
                  ${errors.password ? "border-[#D9534F]" : "border-[#272A2C]"}`}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs text-[#E2766F]">{errors.password.message}</p>
              )}
            </div>

            {/* Server error */}
            {serverError && (
              <div className="rounded-lg border border-[#D9534F]/30 bg-[#D9534F]/10 px-3.5 py-2.5">
                <p className="text-xs text-[#E2766F]">{serverError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#E8A33D] py-2.5 text-sm font-medium text-[#0B0D0E]
                transition-all hover:bg-[#F0B158] active:scale-[0.99]
                disabled:opacity-60 disabled:cursor-not-allowed
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A33D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121415]"
            >
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#7A7E82]">
            No account?{" "}
            <a href="#" className="text-[#E8A33D] hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}