const Scene = () => (
  <svg
    className="scene"
    viewBox="0 0 540 540"
    role="img"
    aria-labelledby="avatarTitle avatarDesc"
  >
    <title id="avatarTitle">Professional Indian avatar in office</title>
    <desc id="avatarDesc">
      Indian man in his thirties wearing a professional outfit sitting in an office with a laptop on the desk.
    </desc>
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8ecff" />
        <stop offset="50%" stopColor="#f6f7ff" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9e7ff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7fb6ff" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient id="deskLight" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#dce3ff" stopOpacity="0.35" />
      </radialGradient>
      <clipPath id="windowClip">
        <rect x="60" y="70" width="180" height="120" rx="18" />
      </clipPath>
    </defs>

    <rect width="540" height="540" fill="url(#bgGradient)" />

    <g opacity="0.5">
      <rect x="40" y="60" width="200" height="140" rx="24" fill="#ffffff" />
      <rect x="300" y="80" width="180" height="110" rx="20" fill="#ffffff" />
      <rect x="80" y="220" width="140" height="90" rx="18" fill="#ffffff" />
    </g>

    <g opacity="0.18">
      <rect x="60" y="70" width="180" height="120" rx="18" fill="#8ba5ff" />
      <rect x="320" y="110" width="150" height="70" rx="16" fill="#8ba5ff" />
    </g>

    <g clipPath="url(#windowClip)">
      <rect x="60" y="70" width="180" height="120" rx="18" fill="#f1f4ff" />
      <g transform="translate(70 80)">
        <rect x="0" y="0" width="80" height="80" rx="14" fill="#c1d6ff" />
        <path
          d="M16 52c12-18 22-30 38-28 16 2 18 20 30 20v18H16z"
          fill="#8fb1ff"
        />
        <circle cx="108" cy="18" r="18" fill="#ffd95c" />
        <path
          d="M110 80c16-18 32-18 52-6 10 6 8 20 18 26v14H110z"
          fill="#9cc3ff"
        />
      </g>
    </g>

    <g transform="translate(40 370)" fill="url(#deskLight)">
      <rect x="0" y="0" width="460" height="120" rx="26" />
    </g>

    <rect x="70" y="410" width="420" height="50" rx="12" fill="#f4f5ff" stroke="#d7ddff" strokeWidth="2" />
    <rect x="240" y="430" width="200" height="14" rx="7" fill="#d0d7f5" />

    <g transform="translate(180 210)">
      <path
        d="M64 58c-3 34-9 62-14 90l104 10c-6-30-10-56-12-90z"
        fill="#1f3c88"
      />
      <path
        d="M40 200h160l-8-40-136-8z"
        fill="#2e4da7"
      />
      <ellipse cx="120" cy="196" rx="96" ry="18" fill="#223a7a" opacity="0.35" />
    </g>

    <g transform="translate(202 152)">
      <path
        d="M84 52c-16 0-43-7-48-20-4-10 4-20 8-26 10-15 30-28 52-24 16 3 30 14 38 30 4 8 6 20-2 26-6 5-14 4-22 7-8 2-10 7-26 7z"
        fill="#2d190f"
      />
      <path
        d="M90 140c-28 0-54-18-56-44l-4-46c-1-22 18-40 40-40h44c22 0 41 18 40 40l-4 46c-2 26-28 44-56 44z"
        fill="#f1c38a"
      />
      <path
        d="M58 80c10 8 24 12 32 12s22-4 32-12c0 12-2 24-8 30-6 6-18 10-24 10s-18-4-24-10c-6-6-8-18-8-30z"
        fill="#f5d2a9"
      />
      <path
        d="M68 52c-2 8 6 14 22 14s24-6 22-14-12-12-22-12-20 4-22 12z"
        fill="#2d190f"
      />
      <circle cx="68" cy="90" r="6" fill="#2d190f" />
      <circle cx="112" cy="90" r="6" fill="#2d190f" />
      <path d="M70 118c12 10 28 10 40 0" stroke="#2d190f" strokeWidth="4" strokeLinecap="round" />
      <path d="M62 80c6-6 14-6 20 0" stroke="#2d190f" strokeWidth="4" strokeLinecap="round" />
      <path d="M102 80c6-6 14-6 20 0" stroke="#2d190f" strokeWidth="4" strokeLinecap="round" />
    </g>

    <g transform="translate(180 280)">
      <path
        d="M64 20c-28 0-56 30-60 62l-4 36 70 6 24-80z"
        fill="#2a5bd7"
      />
      <path
        d="M172 20c28 0 56 30 60 62l4 36-70 6-24-80z"
        fill="#264eaf"
      />
      <path
        d="M108 0h48c20 0 40 18 44 52l6 44-98 10-98-10 6-44c4-34 24-52 44-52h48z"
        fill="#345fe4"
      />
      <path
        d="M108 0h44c16 12 26 26 30 52l6 44-80 10z"
        fill="#2c50c7" opacity="0.7" />
      <path
        d="M108 0h-44c-16 12-26 26-30 52l-6 44 80 10z"
        fill="#4070ff" opacity="0.5" />
    </g>

    <g transform="translate(150 320)">
      <rect x="0" y="80" width="240" height="32" rx="10" fill="#1f1f2e" />
      <rect x="12" y="0" width="216" height="96" rx="16" fill="#ecefff" />
      <rect x="30" y="18" width="180" height="60" rx="10" fill="url(#screenGlow)" />
      <rect x="94" y="106" width="52" height="12" rx="6" fill="#363a52" />
    </g>

    <g transform="translate(360 270)">
      <rect x="0" y="0" width="100" height="160" rx="20" fill="#f4f6ff" stroke="#d5dcff" strokeWidth="2" />
      <rect x="20" y="24" width="60" height="12" rx="6" fill="#c6cff5" />
      <rect x="20" y="50" width="60" height="12" rx="6" fill="#c6cff5" opacity="0.7" />
      <rect x="20" y="76" width="60" height="12" rx="6" fill="#c6cff5" opacity="0.5" />
      <circle cx="50" cy="128" r="16" fill="#7c8ae5" opacity="0.8" />
    </g>

    <g transform="translate(410 220)">
      <path d="M40 0h10l30 56h-14z" fill="#d8def5" />
      <rect x="0" y="56" width="80" height="12" rx="6" fill="#c1c9ef" />
    </g>

    <g transform="translate(110 280)">
      <path
        d="M48 0c-10 26-18 68-12 92l10 34 42-2-10-36c-4-16-12-56 6-88z"
        fill="#1f3c88"
      />
      <path
        d="M230 0c10 26 18 68 12 92l-10 34-42-2 10-36c4-16 12-56-6-88z"
        fill="#192f6b"
      />
    </g>
  </svg>
);

export default function Page() {
  return (
    <main>
      <h1>Professional Office Avatar</h1>
      <p className="description">
        A crisp, executive-style illustration portraying an Indian professional in his thirties, calmly
        working in a modern office with a laptop at the ready.
      </p>
      <div className="section">
        <div className="card">
          <Scene />
        </div>
      </div>
      <p className="footer">Ready to download and use wherever a polished avatar is needed.</p>
    </main>
  );
}
