import { redirect } from 'next/navigation';

function page() {
  redirect('/dashboard');
  return (
    <main className="Home">

    </main>

  )
}

export default page;