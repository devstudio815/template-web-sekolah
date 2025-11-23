export default function AuthCard({
  children,
  title,
  description,
  showLogo = true,
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary p-4">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        {showLogo && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
              <svg
                className="w-8 h-8 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground">SMK Negeri 1</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Sistem Informasi Sekolah
            </p>
          </div>
        )}

        {/* Card Container */}
        <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
          {/* Card Header */}
          {(title || description) && (
            <div className="px-6 pt-6 pb-4 border-b border-border">
              {title && (
                <h2 className="text-xl font-semibold text-card-foreground">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Card Content - Children Form */}
          <div className="p-6">{children}</div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          © 2024 SMK Negeri 1. All rights reserved.
        </p>
      </div>
    </main>
  );
}
