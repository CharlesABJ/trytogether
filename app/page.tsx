import { redirect } from 'next/navigation';

async function page() {
  redirect('/dashboard');
  return (
    <main className="Home">

    </main>

  )
}

export default page;