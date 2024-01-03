// ...
import { poppins } from '@/app/ui/fonts';
import { fetchIncome, fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  const income = await fetchIncome();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main className="rounded-xl bg-neutral-900 p-6">
      <h1
        className={`${poppins.className} mb-4 text-center text-xl text-white md:text-3xl`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* ... */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <IncomeChart income={income} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
