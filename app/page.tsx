import Main from "./main";

const getData = async () => {
  const fetchData = await fetch(`http://localhost:3000/api/users`, {
    cache: "no-store",
  });
  const res = await fetchData.json();
  return res;
};

export default async function Home() {
  const data = await getData();
  //console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center font-bold text-3xl p-24 py-3 scroll-m-0">
      <h1>Hello Vercel Database</h1>
      <Main data={data} />
    </main>
  );
}
