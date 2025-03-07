import GlobalBordersTravelsLogo from "@/components/logo"

export default function LogoDemo() {
  return (
    <div className="p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Default Variant</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo size="sm" />
            <p className="mt-2 text-sm text-muted-foreground">Small</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo size="md" />
            <p className="mt-2 text-sm text-muted-foreground">Medium</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo size="lg" />
            <p className="mt-2 text-sm text-muted-foreground">Large</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo size="xl" />
            <p className="mt-2 text-sm text-muted-foreground">Extra Large</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Light Variant (for dark backgrounds)</h2>
        <div className="flex flex-wrap gap-8 p-8 bg-slate-800 rounded-lg">
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="light" size="sm" />
            <p className="mt-2 text-sm text-slate-300">Small</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="light" size="md" />
            <p className="mt-2 text-sm text-slate-300">Medium</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="light" size="lg" />
            <p className="mt-2 text-sm text-slate-300">Large</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="light" size="xl" />
            <p className="mt-2 text-sm text-slate-300">Extra Large</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Dark Variant</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="dark" size="sm" />
            <p className="mt-2 text-sm text-muted-foreground">Small</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="dark" size="md" />
            <p className="mt-2 text-sm text-muted-foreground">Medium</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="dark" size="lg" />
            <p className="mt-2 text-sm text-muted-foreground">Large</p>
          </div>
          <div className="flex flex-col items-center">
            <GlobalBordersTravelsLogo variant="dark" size="xl" />
            <p className="mt-2 text-sm text-muted-foreground">Extra Large</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Logo in Context</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <header className="flex items-center justify-between">
              <GlobalBordersTravelsLogo />
              <div className="flex gap-4">
                <span className="text-sm">Home</span>
                <span className="text-sm">Destinations</span>
                <span className="text-sm">About</span>
                <span className="text-sm">Contact</span>
              </div>
            </header>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg shadow-md">
            <footer className="flex items-center justify-between">
              <GlobalBordersTravelsLogo variant="light" />
              <div className="flex gap-4 text-white">
                <span className="text-sm">Privacy</span>
                <span className="text-sm">Terms</span>
                <span className="text-sm">© 2023</span>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  )
}

