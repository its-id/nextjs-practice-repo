import { siteConfig } from '@/config/site';
import { ModeToggle } from '@/components/mode-toggle';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='container py-4 flex flex-col gap-4'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex-col md:flex-1 gap-4'>
          <h1 className='text-3xl font-thin md:text-4xl'>{siteConfig.name}</h1>
          <p className='leading-normal font-extralight text-muted-foreground sm:text-md'>
            {siteConfig.description}
          </p>
        </div>
        <ModeToggle />
      </div>
      {children}
    </main>
  );
}
